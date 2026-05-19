import db from "../config/Database.js";
import { QueryTypes } from "sequelize";

const journalFields = "id, judul, deskripsi, durasi, createdAt, updatedAt";
const journalFieldsWithUser = "id, user_id, judul, deskripsi, durasi, createdAt, updatedAt";

const journalRepository = {
    async create(userId, { judul, deskripsi, durasi }) {
        const [id] = await db.query(
            "INSERT INTO tb_journal (user_id, judul, deskripsi, durasi) VALUES (?, ?, ?, ?)",
            {
                replacements: [userId, judul, deskripsi, durasi],
                type: QueryTypes.INSERT
            }
        );

        return this.findByIdWithUser(id);
    },

    async findAllByUserId(userId) {
        return await db.query(
            `SELECT ${journalFields} FROM tb_journal WHERE user_id = ? ORDER BY createdAt DESC`,
            {
                replacements: [userId],
                type: QueryTypes.SELECT
            }
        );
    },

    async findAll() {
        return await db.query(
            `SELECT ${journalFields} FROM tb_journal ORDER BY createdAt DESC`,
            { type: QueryTypes.SELECT }
        );
    },

    async findById(id) {
        const [journal] = await db.query(
            `SELECT ${journalFields} FROM tb_journal WHERE id = ? LIMIT 1`,
            {
                replacements: [id],
                type: QueryTypes.SELECT
            }
        );
        return journal;
    },

    async findByIdWithUser(id) {
        const [journal] = await db.query(
            `SELECT ${journalFieldsWithUser} FROM tb_journal WHERE id = ? LIMIT 1`,
            {
                replacements: [id],
                type: QueryTypes.SELECT
            }
        );
        return journal;
    },

    async findByIdAndUserId(id, userId) {
        const [journal] = await db.query(
            `SELECT ${journalFields} FROM tb_journal WHERE id = ? AND user_id = ? LIMIT 1`,
            {
                replacements: [id, userId],
                type: QueryTypes.SELECT
            }
        );
        return journal;
    },

    async updateById(id, data) {
        const fields = [];
        const values = [];

        if (Object.prototype.hasOwnProperty.call(data, "judul")) {
            fields.push("judul = ?");
            values.push(data.judul);
        }

        if (Object.prototype.hasOwnProperty.call(data, "deskripsi")) {
            fields.push("deskripsi = ?");
            values.push(data.deskripsi);
        }

        if (Object.prototype.hasOwnProperty.call(data, "durasi")) {
            fields.push("durasi = ?");
            values.push(data.durasi);
        }

        values.push(id);

        await db.query(
            `UPDATE tb_journal SET ${fields.join(", ")} WHERE id = ?`,
            {
                replacements: values,
                type: QueryTypes.UPDATE
            }
        );

        return this.findByIdWithUser(id);
    },

    async deleteById(id) {
        await db.query(
            "DELETE FROM tb_journal WHERE id = ?",
            {
                replacements: [id],
                type: QueryTypes.DELETE
            }
        );
    }
};

export default journalRepository;
