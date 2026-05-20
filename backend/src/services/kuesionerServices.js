import kuesionerRepository from "../repositories/kuesionerRepository.js";
import { getAIRecommendation } from "../helper/predictionHelper.js";
import { buildAIInput } from "../helper/aiInputBuilder.js";
import NotFoundError from "../exceptions/NotFoundError.js";
import { enrichAndSaveBuku } from "./buku/enricherBook.js";
import { saveAlternatif, saveRekomendasiUtama, saveDistribusi, insertSesi } from "./rekomendasiServices.js";


const createKuesionerWithRekomendasi = async (userId, data) => {
    // 1. Simpan kuesioner
    const kuesionerId = await kuesionerRepository.insertKuesioner(userId, data);
    const kuesioner = await kuesionerRepository.findKuesionerById(kuesionerId);

    // 2. Panggil model AI
    const inputAI = buildAIInput(kuesioner);
    const hasilAI = await getAIRecommendation(inputAI);

    const sesiId = await insertSesi(userId, kuesionerId, hasilAI.insight);

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

const getAllKuesionerByUser = async (userId) => {
    const kuesioner = await kuesionerRepository.findKuesionerByUserId(userId);

    if (!kuesioner.length) {
        throw new NotFoundError("Belum ada data kuesioner.");
    }

    return kuesioner;
};

const getAllKuesioner = async () => {
    const kuesioner = await kuesionerRepository.findAllKuesioner();

    if (!kuesioner.length) {
        throw new NotFoundError("Belum ada data kuesioner.");
    }

    return kuesioner;
};

const getKuesionerById = async (id, userId) => {
    const kuesioner = await kuesionerRepository.findKuesionerByIdAndUser(id, userId);

    if (!kuesioner) {
        throw new NotFoundError("Data kuesioner tidak ditemukan.");
    }

    return kuesioner;
};

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
