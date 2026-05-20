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

    const [result] = await db.query(
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

    const kuesionerId = result?.insertId || result;
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
    const [result] = await db.query(
        "INSERT INTO tb_rekomendasi_sesi (user_id, kuesioner_id, model_type, alasan) VALUES (?, ?, ?, ?)",
        {
            replacements: [userId, kuesionerId, modelType, alasan],
            type: QueryTypes.INSERT
        }
    );

    const sesiId = result?.insertId || result;
    return sesiId;
};

// ─── Rekomendasi Aktivitas ────────────────────────────────────────────────────

/**
 * Menyimpan satu aktivitas rekomendasi (utama atau alternatif).
 * @param {boolean} isUtama - true jika aktivitas utama, false jika alternatif.
 * @returns {number} ID aktivitas yang baru dibuat.
 */
const insertAktivitas = async (sesiId, isUtama, aktivitas, confidence, durasi, detail) => {
    const [result] = await db.query(
        "INSERT INTO tb_rekomendasi_aktivitas (sesi_id, is_utama, aktivitas, confidence, durasi, detail) VALUES (?, ?, ?, ?, ?, ?)",
        {
            replacements: [sesiId, isUtama ? 1 : 0, aktivitas, confidence, durasi, detail],
            type: QueryTypes.INSERT
        }
    );

    const aktivitasId = result?.insertId || result;
    return aktivitasId;
};

// ─── Rekomendasi Buku ─────────────────────────────────────────────────────────

/**
 * Menyimpan atau mengupdate data buku rekomendasi.
 * Jika buku dengan judul dan penulis yang sama sudah ada, maka akan diupdate (ditimpa).
 * Jika belum ada, akan dibuat baru.
 * @returns {number} ID buku yang sudah ada atau baru dibuat.
 */
const insertBuku = async (aktivitasId, judul, penulis, kategori, thumbnail, deskripsi) => {
    // Cek apakah buku dengan judul dan penulis yang sama sudah ada
    const [existingBuku] = await db.query(
        `SELECT id FROM tb_rekomendasi_buku 
         WHERE judul = ? AND (penulis = ? OR (penulis IS NULL AND ? IS NULL)) 
         LIMIT 1`,
        {
            replacements: [judul, penulis, penulis],
            type: QueryTypes.SELECT
        }
    );

    if (existingBuku) {
        // Jika sudah ada, update (timpa) data bukunya
        await db.query(
            `UPDATE tb_rekomendasi_buku 
             SET kategori = ?, 
                 thumbnail = ?, 
                 deskripsi = ?,
                 updatedAt = NOW()
             WHERE id = ?`,
            {
                replacements: [kategori, thumbnail, deskripsi, existingBuku.id],
                type: QueryTypes.UPDATE
            }
        );
        console.log(`[INFO] Buku "${judul}" sudah ada, data diupdate (ditimpa)`);
        return existingBuku.id;
    } else {
        // Jika belum ada, insert baru
        await db.query(
            `INSERT INTO tb_rekomendasi_buku
             (aktivitas_id, judul, penulis, kategori, thumbnail, deskripsi)
             VALUES (?, ?, ?, ?, ?, ?)`,
            {
                replacements: [aktivitasId, judul, penulis, kategori, thumbnail, deskripsi],
                type: QueryTypes.INSERT
            }
        );
        console.log(`[INFO] Buku "${judul}" berhasil ditambahkan`);

        // Ambil ID yang baru diinsert
        const [newBuku] = await db.query(
            "SELECT LAST_INSERT_ID() as id",
            { type: QueryTypes.SELECT }
        );
        return newBuku?.id;
    }
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

// Optional: Fungsi untuk mengambil buku berdasarkan ID (jika diperlukan)
const findBukuById = async (id) => {
    const [buku] = await db.query(
        "SELECT * FROM tb_rekomendasi_buku WHERE id = ?",
        {
            replacements: [id],
            type: QueryTypes.SELECT
        }
    );
    return buku ?? null;
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
    insertDistribusi,
    findBukuById
};