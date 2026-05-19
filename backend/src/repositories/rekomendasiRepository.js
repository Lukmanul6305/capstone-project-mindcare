import db from "../config/Database.js";
import { QueryTypes } from "sequelize";

// ─── Rekomendasi Sesi ─────────────────────────────────────────────────────────

/**
 * Mengambil semua sesi rekomendasi milik user, JOIN dengan data kuesioner.
 * @returns {object[]} Array data sesi.
 */
const findSesiByUserId = async (userId) => {
    return db.query(
        `SELECT tb_rekomendasi_sesi.*,
                tb_kuesioner_hasil.tingkat_stres,
                tb_kuesioner_hasil.penyebab_stres
         FROM tb_rekomendasi_sesi
         JOIN tb_kuesioner_hasil ON tb_rekomendasi_sesi.kuesioner_id = tb_kuesioner_hasil.id
         WHERE tb_rekomendasi_sesi.user_id = ?
         ORDER BY tb_rekomendasi_sesi.createdAt DESC`,
        {
            replacements: [userId],
            type: QueryTypes.SELECT
        }
    );
};

/**
 * Mengambil satu sesi rekomendasi berdasarkan ID, dengan validasi kepemilikan.
 * @returns {object|null} Data sesi, atau null jika tidak ditemukan / bukan miliknya.
 */
const findSesiByIdAndUser = async (id, userId) => {
    const [sesi] = await db.query(
        "SELECT * FROM tb_rekomendasi_sesi WHERE id = ? AND user_id = ? LIMIT 1",
        {
            replacements: [id, userId],
            type: QueryTypes.SELECT
        }
    );
    return sesi ?? null;
};

/**
 * Mengambil semua sesi rekomendasi (admin), JOIN dengan data user.
 * @returns {object[]} Array data sesi.
 */
const findAllSesi = async () => {
    return db.query(
        `SELECT tb_rekomendasi_sesi.*, tb_users.name, tb_users.email
         FROM tb_rekomendasi_sesi
         JOIN tb_users ON tb_rekomendasi_sesi.user_id = tb_users.id
         ORDER BY tb_rekomendasi_sesi.createdAt DESC`,
        { type: QueryTypes.SELECT }
    );
};

// ─── Rekomendasi Aktivitas ────────────────────────────────────────────────────

/**
 * Mengambil semua aktivitas dalam satu sesi rekomendasi.
 * @returns {object[]} Array data aktivitas.
 */
const findAktivitasBySesiId = async (sesiId) => {
    return db.query(
        "SELECT * FROM tb_rekomendasi_aktivitas WHERE sesi_id = ?",
        {
            replacements: [sesiId],
            type: QueryTypes.SELECT
        }
    );
};

// ─── Rekomendasi Buku ─────────────────────────────────────────────────────────

/**
 * Mengambil semua buku rekomendasi berdasarkan ID aktivitas.
 * @returns {object[]} Array data buku.
 */
const findBukuByAktivitasId = async (aktivitasId) => {
    return db.query(
        "SELECT * FROM tb_rekomendasi_buku WHERE aktivitas_id = ?",
        {
            replacements: [aktivitasId],
            type: QueryTypes.SELECT
        }
    );
};

// ─── Rekomendasi Distribusi ───────────────────────────────────────────────────

/**
 * Mengambil distribusi probabilitas aktivitas untuk satu sesi.
 * @returns {object[]} Array { aktivitas, probabilitas }.
 */
const findDistribusiBySesiId = async (sesiId) => {
    return db.query(
        "SELECT aktivitas, probabilitas FROM tb_rekomendasi_distribusi WHERE sesi_id = ?",
        {
            replacements: [sesiId],
            type: QueryTypes.SELECT
        }
    );
};

export default {
    findSesiByUserId,
    findSesiByIdAndUser,
    findAllSesi,
    findAktivitasBySesiId,
    findBukuByAktivitasId,
    findDistribusiBySesiId
};
