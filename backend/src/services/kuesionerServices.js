import kuesionerRepository from "../repositories/kuesionerRepository.js";
import { getAIRecommendation } from "../helper/predictionHelper.js";
import { buildAIInput } from "../helper/aiInputBuilder.js";
import { getBookCover } from "../utils/bookCover.js";
import { searchBookMetadata } from "../utils/bookSearch.js";
import NotFoundError from "../exceptions/NotFoundError.js";

// ─── Helper Privat ─────────────────────────────────────────────────────────────

// buildAIInput diimport dari helper/aiInputBuilder.js

/**
 * Mengambil metadata buku (thumbnail & deskripsi) dari API eksternal,
 * menyimpannya ke database, lalu mengembalikan data buku yang sudah diperkaya.
 *
 * @param {object[]} bukuList  - Daftar buku dari hasil AI.
 * @param {number}   aktivitasId - ID aktivitas yang menjadi parent buku.
 * @returns {object[]} Daftar buku yang sudah diperkaya dengan thumbnail & deskripsi.
 */
const enrichAndSaveBuku = async (bukuList, aktivitasId) => {
    const enrichedList = [];

    for (const buku of bukuList) {
        try {
            const metadata = await searchBookMetadata(buku.judul, buku.penulis);

            const thumbnail =
                metadata?.thumbnail ??
                (metadata?.isbn ? getBookCover(metadata.isbn) : null) ??
                "https://via.placeholder.com/300x450?text=No+Cover";

            const deskripsi = metadata?.description ?? buku.deskripsi ?? null;

            await kuesionerRepository.insertBuku(
                aktivitasId,
                buku.judul,
                buku.penulis,
                buku.kategori,
                thumbnail,
                deskripsi
            );

            enrichedList.push({ ...buku, thumbnail, deskripsi });

        } catch (err) {
            console.error(`[ERROR] Gagal simpan buku "${buku.judul}":`, err.message);
        }
    }

    return enrichedList;
};

/**
 * Menyimpan rekomendasi aktivitas utama beserta buku rekomendasinya (jika ada).
 *
 * @returns {{ aktivitasId: number, enrichedBuku: object[] }}
 */
const saveRekomendasiUtama = async (sesiId, rekomendasiUtama) => {
    const aktivitasId = await kuesionerRepository.insertAktivitas(
        sesiId,
        true,
        rekomendasiUtama.aktivitas,
        rekomendasiUtama.confidence,
        rekomendasiUtama.durasi,
        rekomendasiUtama.detail
    );

    const hasBuku =
        rekomendasiUtama.aktivitas === "membaca" &&
        rekomendasiUtama.rekomendasi_buku?.length > 0;

    const enrichedBuku = hasBuku
        ? await enrichAndSaveBuku(rekomendasiUtama.rekomendasi_buku, aktivitasId)
        : [];

    return { aktivitasId, enrichedBuku };
};

/**
 * Menyimpan semua aktivitas alternatif beserta buku rekomendasinya masing-masing.
 *
 * @returns {object[]} Daftar alternatif yang sudah diperkaya.
 */
const saveAlternatif = async (sesiId, alternatifList) => {
    const enrichedAlternatif = [];

    for (const alt of alternatifList) {
        const altId = await kuesionerRepository.insertAktivitas(
            sesiId,
            false,
            alt.aktivitas,
            alt.confidence,
            alt.durasi,
            alt.detail
        );

        const hasBuku = alt.aktivitas === "membaca" && alt.rekomendasi_buku?.length > 0;

        const enrichedBuku = hasBuku
            ? await enrichAndSaveBuku(alt.rekomendasi_buku, altId)
            : [];

        enrichedAlternatif.push({ ...alt, rekomendasi_buku: enrichedBuku });
    }

    return enrichedAlternatif;
};

/**
 * Menyimpan seluruh entri distribusi probabilitas dari insight AI.
 */
const saveDistribusi = async (sesiId, distribusiProbabilitas) => {
    for (const [aktivitas, probabilitas] of Object.entries(distribusiProbabilitas)) {
        await kuesionerRepository.insertDistribusi(sesiId, aktivitas, probabilitas);
    }
};

// ─── Service Publik ────────────────────────────────────────────────────────────

/**
 * Menyimpan kuesioner, memanggil AI, menyimpan semua hasil rekomendasi,
 * lalu mengembalikan data lengkap untuk dikirim ke client.
 */
const createKuesionerWithRekomendasi = async (userId, data) => {
    // 1. Simpan kuesioner
    const kuesionerId = await kuesionerRepository.insertKuesioner(userId, data);
    const kuesioner = await kuesionerRepository.findKuesionerById(kuesionerId);

    // 2. Panggil model AI
    const inputAI = buildAIInput(kuesioner);
    const hasilAI = await getAIRecommendation(inputAI);

    // 3. Simpan sesi rekomendasi
    const sesiId = await kuesionerRepository.insertSesi(
        userId,
        kuesionerId,
        hasilAI.insight.model_type,
        hasilAI.insight.alasan
    );

    // 4. Simpan rekomendasi utama + buku
    const { enrichedBuku: enrichedBukuUtama } = await saveRekomendasiUtama(
        sesiId,
        hasilAI.rekomendasi_utama
    );

    // 5. Simpan alternatif + buku
    const enrichedAlternatif = await saveAlternatif(sesiId, hasilAI.alternatif);

    // 6. Simpan distribusi probabilitas
    await saveDistribusi(sesiId, hasilAI.insight.distribusi_probabilitas);

    // 7. Susun response payload
    return {
        kuesioner,
        rekomendasi: {
            sesi_id: sesiId,
            rekomendasi_utama: {
                ...hasilAI.rekomendasi_utama,
                rekomendasi_buku: enrichedBukuUtama
            },
            alternatif: enrichedAlternatif,
            insight: hasilAI.insight
        }
    };
};

/**
 * Mengambil semua kuesioner milik user yang sedang login.
 * @throws {Error} Jika belum ada data kuesioner.
 */
const getAllKuesionerByUser = async (userId) => {
    const kuesioner = await kuesionerRepository.findKuesionerByUserId(userId);

    if (!kuesioner.length) {
        throw new NotFoundError("Belum ada data kuesioner.");
    }

    return kuesioner;
};

/**
 * Mengambil semua kuesioner (akses admin).
 * @throws {Error} Jika belum ada data kuesioner.
 */
const getAllKuesioner = async () => {
    const kuesioner = await kuesionerRepository.findAllKuesioner();

    if (!kuesioner.length) {
        throw new NotFoundError("Belum ada data kuesioner.");
    }

    return kuesioner;
};

/**
 * Mengambil detail satu kuesioner berdasarkan ID, dengan validasi kepemilikan.
 * @throws {Error} Jika data tidak ditemukan atau bukan milik user.
 */
const getKuesionerById = async (id, userId) => {
    const kuesioner = await kuesionerRepository.findKuesionerByIdAndUser(id, userId);

    if (!kuesioner) {
        throw new NotFoundError("Data kuesioner tidak ditemukan.");
    }

    return kuesioner;
};

/**
 * Menghapus kuesioner setelah memvalidasi kepemilikan user.
 * @throws {Error} Jika data tidak ditemukan atau bukan milik user.
 */
const deleteKuesioner = async (id, userId) => {
    const kuesioner = await kuesionerRepository.findKuesionerByIdAndUser(id, userId);

    if (!kuesioner) {
        throw new NotFoundError("Data kuesioner tidak ditemukan.");
    }

    await kuesionerRepository.deleteKuesioner(id);
};

export default {
    createKuesionerWithRekomendasi,
    getAllKuesionerByUser,
    getAllKuesioner,
    getKuesionerById,
    deleteKuesioner
};
