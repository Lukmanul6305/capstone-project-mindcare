import rekomendasiRepository from "../repositories/rekomendasiRepository.js";
import kuesionerRepository from "../repositories/kuesionerRepository.js";
import { getAIRecommendation } from "../helper/predictionHelper.js";
import { buildAIInput } from "../helper/aiInputBuilder.js";
import NotFoundError from "../exceptions/NotFoundError.js";

// ─── Helper Privat ─────────────────────────────────────────────────────────────

// buildAIInput diimport dari helper/aiInputBuilder.js

/**
 * Menyimpan daftar buku ke database untuk satu aktivitas.
 * Tidak melakukan enrichment — data buku langsung dari hasil AI.
 */
const saveBukuList = async (bukuList, aktivitasId) => {
    for (const buku of bukuList) {
        await kuesionerRepository.insertBuku(
            aktivitasId,
            buku.judul,
            buku.penulis,
            buku.kategori,
            buku.thumbnail ?? null,
            buku.deskripsi ?? null
        );
    }
};

/**
 * Menyimpan aktivitas utama beserta buku rekomendasinya (jika aktivitas = membaca).
 */
const saveAktivitasUtama = async (sesiId, rekomendasiUtama) => {
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

    if (hasBuku) {
        await saveBukuList(rekomendasiUtama.rekomendasi_buku, aktivitasId);
    }
};

/**
 * Menyimpan semua aktivitas alternatif beserta buku rekomendasinya.
 */
const saveAktivitasAlternatif = async (sesiId, alternatifList) => {
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

        if (hasBuku) {
            await saveBukuList(alt.rekomendasi_buku, altId);
        }
    }
};

/**
 * Menyimpan distribusi probabilitas untuk satu sesi.
 */
const saveDistribusi = async (sesiId, distribusiProbabilitas) => {
    for (const [aktivitas, probabilitas] of Object.entries(distribusiProbabilitas)) {
        await kuesionerRepository.insertDistribusi(sesiId, aktivitas, probabilitas);
    }
};

// ─── Service Publik ────────────────────────────────────────────────────────────

/**
 * Membuat rekomendasi baru berdasarkan kuesioner yang sudah ada.
 * Memanggil AI, menyimpan sesi + aktivitas + buku + distribusi.
 * @throws {Error} Jika kuesioner tidak ditemukan / bukan milik user.
 */
const createRekomendasi = async (userId, kuesionerId) => {
    // 1. Validasi kepemilikan kuesioner
    const kuesioner = await kuesionerRepository.findKuesionerByIdAndUser(kuesionerId, userId);
    if (!kuesioner) {
        throw new NotFoundError("Data kuesioner tidak ditemukan.");
    }

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

    // 4. Simpan aktivitas utama + buku
    await saveAktivitasUtama(sesiId, hasilAI.rekomendasi_utama);

    // 5. Simpan alternatif + buku
    await saveAktivitasAlternatif(sesiId, hasilAI.alternatif);

    // 6. Simpan distribusi probabilitas
    await saveDistribusi(sesiId, hasilAI.insight.distribusi_probabilitas);

    return { sesi_id: sesiId, ...hasilAI };
};

/**
 * Mengambil riwayat semua sesi rekomendasi milik user.
 * @throws {Error} Jika belum ada riwayat.
 */
const getRekomendasiByUser = async (userId) => {
    const sesi = await rekomendasiRepository.findSesiByUserId(userId);

    if (!sesi.length) {
        throw new NotFoundError("Belum ada riwayat rekomendasi.");
    }

    return sesi;
};

/**
 * Mengambil detail satu sesi rekomendasi lengkap dengan aktivitas, buku, dan distribusi.
 * @throws {Error} Jika sesi tidak ditemukan / bukan milik user.
 */
const getRekomendasiById = async (id, userId) => {
    const sesi = await rekomendasiRepository.findSesiByIdAndUser(id, userId);

    if (!sesi) {
        throw new NotFoundError("Data rekomendasi tidak ditemukan.");
    }

    // Ambil aktivitas, lalu enrichment buku untuk aktivitas "membaca"
    const aktivitas = await rekomendasiRepository.findAktivitasBySesiId(sesi.id);

    for (const item of aktivitas) {
        if (item.aktivitas === "membaca") {
            item.buku = await rekomendasiRepository.findBukuByAktivitasId(item.id);
        }
    }

    const distribusi = await rekomendasiRepository.findDistribusiBySesiId(sesi.id);

    return { ...sesi, aktivitas, distribusi };
};

/**
 * Mengambil semua sesi rekomendasi (akses admin).
 * @throws {Error} Jika belum ada data.
 */
const getAllRekomendasi = async () => {
    const sesi = await rekomendasiRepository.findAllSesi();

    if (!sesi.length) {
        throw new NotFoundError("Belum ada data rekomendasi.");
    }

    return sesi;
};

export default {
    createRekomendasi,
    getRekomendasiByUser,
    getRekomendasiById,
    getAllRekomendasi
};
