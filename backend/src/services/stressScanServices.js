import stressScanRepository from "../repositories/stressScanRepository.js";
import NotFoundError from "../exceptions/NotFoundError.js";

// ─── Service Publik ────────────────────────────────────────────────────────────

/**
 * Menyimpan data stress scan baru, lalu mengembalikan data yang tersimpan.
 */
const createStressScan = async (userId, data) => {
    const scanId = await stressScanRepository.insertStressScan(userId, data);
    const scan = await stressScanRepository.findStressScanById(scanId);
    return scan;
};

/**
 * Mengambil semua riwayat stress scan milik user.
 * @throws {Error} Jika belum ada riwayat.
 */
const getAllStressScanByUser = async (userId) => {
    const scans = await stressScanRepository.findStressScanByUserId(userId);

    if (!scans.length) {
        throw new NotFoundError("Belum ada riwayat scan stres.");
    }

    return scans;
};

/**
 * Mengambil detail satu stress scan berdasarkan ID dengan validasi kepemilikan.
 * @throws {Error} Jika data tidak ditemukan / bukan milik user.
 */
const getStressScanById = async (id, userId) => {
    const scan = await stressScanRepository.findStressScanByIdAndUser(id, userId);

    if (!scan) {
        throw new NotFoundError("Data scan stres tidak ditemukan.");
    }

    return scan;
};

/**
 * Menghapus stress scan setelah memvalidasi kepemilikan user.
 * @throws {Error} Jika data tidak ditemukan / bukan milik user.
 */
const deleteStressScan = async (id, userId) => {
    const scan = await stressScanRepository.findStressScanByIdAndUser(id, userId);

    if (!scan) {
        throw new NotFoundError("Data scan stres tidak ditemukan.");
    }

    await stressScanRepository.deleteStressScan(id);
};

/**
 * Mengambil semua stress scan (akses admin).
 * @throws {Error} Jika belum ada data.
 */
const getAllStressScan = async () => {
    const scans = await stressScanRepository.findAllStressScan();

    if (!scans.length) {
        throw new NotFoundError("Belum ada data scan stres.");
    }

    return scans;
};

export default {
    createStressScan,
    getAllStressScanByUser,
    getStressScanById,
    deleteStressScan,
    getAllStressScan
};
