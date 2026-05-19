import db from "../config/Database.js";
import { QueryTypes } from "sequelize";

// ─── Kuesioner ────────────────────────────────────────────────────────────────

/**
 * Menyimpan data kuesioner baru ke database.
 * @returns {number} ID kuesioner yang baru dibuat.
 */
const insertKuesioner = async (userId, data) => {
    const {
        umur, pekerjaan, tingkat_stres, durasi_stres,
        penyebab_stres, kualitas_tidur, waktu_luang, mood,
        aktivitas_fisik, preferensi_olahraga, preferensi_membaca,
        preferensi_journaling
    } = data;

    const [kuesionerId] = await db.query(
        `INSERT INTO tb_kuesioner_hasil (
            user_id, umur, pekerjaan, tingkat_stres, durasi_stres,
            penyebab_stres, kualitas_tidur, waktu_luang, mood,
            aktivitas_fisik, preferensi_olahraga, preferensi_membaca,
            preferensi_journaling
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        {
            replacements: [
                userId, umur, pekerjaan, tingkat_stres, durasi_stres,
                penyebab_stres, kualitas_tidur, waktu_luang, mood,
                aktivitas_fisik, preferensi_olahraga, preferensi_membaca,
                preferensi_journaling
            ],
            type: QueryTypes.INSERT
        }
    );

    return kuesionerId;
};

/**
 * Mengambil satu data kuesioner berdasarkan ID-nya.
 * @returns {object|null} Data kuesioner, atau null jika tidak ditemukan.
 */
const findKuesionerById = async (id) => {
    const [kuesioner] = await db.query(
        "SELECT * FROM tb_kuesioner_hasil WHERE id = ?",
        {
            replacements: [id],
            type: QueryTypes.SELECT
        }
    );
    return kuesioner ?? null;
};

/**
 * Mengambil semua kuesioner milik user tertentu, diurutkan terbaru dulu.
 * @returns {object[]} Array data kuesioner.
 */
const findKuesionerByUserId = async (userId) => {
    return db.query(
        "SELECT * FROM tb_kuesioner_hasil WHERE user_id = ? ORDER BY createdAt DESC",
        {
            replacements: [userId],
            type: QueryTypes.SELECT
        }
    );
};

/**
 * Mengambil semua kuesioner (admin) beserta nama & email user.
 * @returns {object[]} Array data kuesioner.
 */
const findAllKuesioner = async () => {
    return db.query(
        `SELECT tb_kuesioner_hasil.*, tb_users.name, tb_users.email
         FROM tb_kuesioner_hasil
         JOIN tb_users ON tb_kuesioner_hasil.user_id = tb_users.id
         ORDER BY tb_kuesioner_hasil.createdAt DESC`,
        { type: QueryTypes.SELECT }
    );
};

/**
 * Mengambil kuesioner berdasarkan ID dan memastikan kepemilikan user.
 * @returns {object|null} Data kuesioner, atau null jika tidak ditemukan / bukan miliknya.
 */
const findKuesionerByIdAndUser = async (id, userId) => {
    const [kuesioner] = await db.query(
        "SELECT * FROM tb_kuesioner_hasil WHERE id = ? AND user_id = ? LIMIT 1",
        {
            replacements: [id, userId],
            type: QueryTypes.SELECT
        }
    );
    return kuesioner ?? null;
};

/**
 * Menghapus kuesioner berdasarkan ID.
 */
const deleteKuesioner = async (id) => {
    await db.query(
        "DELETE FROM tb_kuesioner_hasil WHERE id = ?",
        {
            replacements: [id],
            type: QueryTypes.DELETE
        }
    );
};

// ─── Rekomendasi Sesi ─────────────────────────────────────────────────────────

/**
 * Menyimpan sesi rekomendasi hasil AI.
 * @returns {number} ID sesi yang baru dibuat.
 */
const insertSesi = async (userId, kuesionerId, modelType, alasan) => {
    const [sesiId] = await db.query(
        "INSERT INTO tb_rekomendasi_sesi (user_id, kuesioner_id, model_type, alasan) VALUES (?, ?, ?, ?)",
        {
            replacements: [userId, kuesionerId, modelType, alasan],
            type: QueryTypes.INSERT
        }
    );
    return sesiId;
};

// ─── Rekomendasi Aktivitas ────────────────────────────────────────────────────

/**
 * Menyimpan satu aktivitas rekomendasi (utama atau alternatif).
 * @param {boolean} isUtama - true jika aktivitas utama, false jika alternatif.
 * @returns {number} ID aktivitas yang baru dibuat.
 */
const insertAktivitas = async (sesiId, isUtama, aktivitas, confidence, durasi, detail) => {
    const [aktivitasId] = await db.query(
        "INSERT INTO tb_rekomendasi_aktivitas (sesi_id, is_utama, aktivitas, confidence, durasi, detail) VALUES (?, ?, ?, ?, ?, ?)",
        {
            replacements: [sesiId, isUtama ? 1 : 0, aktivitas, confidence, durasi, detail],
            type: QueryTypes.INSERT
        }
    );
    return aktivitasId;
};

// ─── Rekomendasi Buku ─────────────────────────────────────────────────────────

/**
 * Menyimpan satu data buku rekomendasi.
 */
const insertBuku = async (aktivitasId, judul, penulis, kategori, thumbnail, deskripsi) => {
    await db.query(
        `INSERT INTO tb_rekomendasi_buku
         (aktivitas_id, judul, penulis, kategori, thumbnail, deskripsi)
         VALUES (?, ?, ?, ?, ?, ?)`,
        {
            replacements: [aktivitasId, judul, penulis, kategori, thumbnail, deskripsi],
            type: QueryTypes.INSERT
        }
    );
};

// ─── Rekomendasi Distribusi ───────────────────────────────────────────────────

/**
 * Menyimpan satu entri distribusi probabilitas aktivitas.
 */
const insertDistribusi = async (sesiId, aktivitas, probabilitas) => {
    await db.query(
        "INSERT INTO tb_rekomendasi_distribusi (sesi_id, aktivitas, probabilitas) VALUES (?, ?, ?)",
        {
            replacements: [sesiId, aktivitas, probabilitas],
            type: QueryTypes.INSERT
        }
    );
};

export default {
    insertKuesioner,
    findKuesionerById,
    findKuesionerByUserId,
    findAllKuesioner,
    findKuesionerByIdAndUser,
    deleteKuesioner,
    insertSesi,
    insertAktivitas,
    insertBuku,
    insertDistribusi
};
