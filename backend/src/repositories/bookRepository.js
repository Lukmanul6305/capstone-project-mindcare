import db from "../config/Database.js";
import { QueryTypes } from "sequelize";

const parseExploredBooks = (value) => {
    if (!value) return [];
    if (Array.isArray(value)) return value;

    try {
        const parsed = JSON.parse(value);
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
};

const mapSessionRow = (row) => ({
    id: row.id,
    user_id: row.user_id,
    durationSeconds: Number(row.durasi_detik) || 0,
    date: row.tanggal,
    exploredBooks: parseExploredBooks(row.explored_books),
    createdAt: row.createdAt,
    updatedAt: row.updatedAt
});

const mapReadRow = (row) => ({
    id: row.id,
    user_id: row.user_id,
    bookId: row.book_external_id,
    title: row.judul,
    author: row.penulis,
    createdAt: row.createdAt,
    updatedAt: row.updatedAt
});

const bookRepository = {
    async createSession(userId, { durationSeconds, date, exploredBooks }) {
        const [id] = await db.query(
            `INSERT INTO tb_book_exploration_sessions
             (user_id, durasi_detik, tanggal, explored_books)
             VALUES (?, ?, ?, ?)`,
            {
                replacements: [
                    userId,
                    durationSeconds,
                    date,
                    JSON.stringify(exploredBooks ?? [])
                ],
                type: QueryTypes.INSERT
            }
        );

        const [row] = await db.query(
            "SELECT * FROM tb_book_exploration_sessions WHERE id = ? LIMIT 1",
            {
                replacements: [id],
                type: QueryTypes.SELECT
            }
        );

        return row ? mapSessionRow(row) : null;
    },

    async findAllSessionsByUserId(userId) {
        const rows = await db.query(
            `SELECT * FROM tb_book_exploration_sessions
             WHERE user_id = ?
             ORDER BY tanggal DESC, createdAt DESC`,
            {
                replacements: [userId],
                type: QueryTypes.SELECT
            }
        );

        return rows.map(mapSessionRow);
    },

    async upsertBookRead(userId, { bookId, title, author }) {
        await db.query(
            `INSERT INTO tb_book_reads (user_id, book_external_id, judul, penulis)
             VALUES (?, ?, ?, ?)
             ON DUPLICATE KEY UPDATE
                judul = VALUES(judul),
                penulis = VALUES(penulis),
                updatedAt = CURRENT_TIMESTAMP`,
            {
                replacements: [userId, bookId, title || null, author || null],
                type: QueryTypes.INSERT
            }
        );

        const [row] = await db.query(
            `SELECT *
             FROM tb_book_reads
             WHERE user_id = ? AND book_external_id = ?
             LIMIT 1`,
            {
                replacements: [userId, bookId],
                type: QueryTypes.SELECT
            }
        );

        return row ? mapReadRow(row) : null;
    },

    async findAllReadsByUserId(userId) {
        const rows = await db.query(
            `SELECT *
             FROM tb_book_reads
             WHERE user_id = ?
             ORDER BY updatedAt DESC, createdAt DESC`,
            {
                replacements: [userId],
                type: QueryTypes.SELECT
            }
        );

        return rows.map(mapReadRow);
    }
};

export default bookRepository;
