import db from "../config/Database.js";
import { QueryTypes } from "sequelize";
import { createHash } from "node:crypto";

const hashRefreshToken = (token) => {
    return `sha256:${createHash("sha256").update(token).digest("hex")}`;
};

const findAuthByStoredToken = async (storedToken) => {
    const [auth] = await db.query(
        `SELECT tb_authentications.id, tb_users.id as userId,
         tb_users.name, tb_users.email, tb_users.role
         FROM tb_authentications
         JOIN tb_users ON tb_authentications.user_id = tb_users.id
         WHERE tb_authentications.token = ? LIMIT 1`,
        { replacements: [storedToken], type: QueryTypes.SELECT }
    );
    return auth;
};

const authRepository = {
    async findUserByEmail(email) {
        const [user] = await db.query(
            "SELECT id, name, email, password, role, avatar, jenis_kelamin, umur, pekerjaan FROM tb_users WHERE email = ? LIMIT 1",
            { replacements: [email], type: QueryTypes.SELECT }
        );
        return user;
    },

    async findUserById(id) {
        const [user] = await db.query(
            "SELECT id, name, email, role, avatar, jenis_kelamin, umur, pekerjaan, createdAt FROM tb_users WHERE id = ? LIMIT 1",
            { replacements: [id], type: QueryTypes.SELECT }
        );
        return user;
    },

    async findAllUsers() {
        return await db.query(
            "SELECT id, name, email, role, avatar, jenis_kelamin, umur, pekerjaan, createdAt FROM tb_users ORDER BY createdAt DESC",
            { type: QueryTypes.SELECT }
        );
    },

    async deleteUserById(id) {
        await db.query(
            "DELETE FROM tb_users WHERE id = ?",
            { replacements: [id], type: QueryTypes.DELETE }
        );
    },

    async saveRefreshToken(userId, token) {
        // Hapus semua token lama milik user untuk mencegah accumulation
        await db.query(
            "DELETE FROM tb_authentications WHERE user_id = ?",
            { replacements: [userId], type: QueryTypes.DELETE }
        );

        await db.query(
            "INSERT INTO tb_authentications (user_id, token) VALUES (?, ?)",
            { replacements: [userId, hashRefreshToken(token)], type: QueryTypes.INSERT }
        );
    },

    async findAuthByToken(token) {
        return await findAuthByStoredToken(hashRefreshToken(token)) || await findAuthByStoredToken(token);
    },

    async updateRefreshTokenById(id, token) {
        await db.query(
            "UPDATE tb_authentications SET token = ?, createdAt = CURRENT_TIMESTAMP WHERE id = ?",
            { replacements: [hashRefreshToken(token), id], type: QueryTypes.UPDATE }
        );
    },

    async deleteAuthById(id) {
        await db.query(
            "DELETE FROM tb_authentications WHERE id = ?",
            { replacements: [id], type: QueryTypes.DELETE }
        );
    }
};

export default authRepository;
