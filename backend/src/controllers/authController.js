import db from "../config/Database.js";
import bcryptjs from "bcryptjs";
import { QueryTypes } from "sequelize";
import response from "../utils/response.js";
import jwt from "jsonwebtoken";
import jwtUtils from "../utils/jwtUtils.js";

const authController = {
    async getUserByToken(req, res, next) {
        try {
            const [user] = await db.query(
                "SELECT id, name, email, avatar, createdAt FROM tb_users WHERE id = ? LIMIT 1",
                {
                    replacements: [req.userId],
                    type: QueryTypes.SELECT
                }
            );

            if (!user) {
                return response.failed(res, 404, "User tidak ditemukan.");
            }

            return response.success(res, 200, "Data user berhasil diambil.", { user });

        } catch (error) {
            next(error);
        }
    },
    async Register(req, res, next) {
        const { name, email, password, confPassword } = req.body;

        try {
            if (!name || !email || !password || !confPassword) {
                return response.failed(res, 400, "Semua field wajib diisi.");
            }

            const existingUser = await db.query(
                "SELECT id FROM tb_users WHERE email = ? LIMIT 1",
                {
                    replacements: [email],
                    type: QueryTypes.SELECT
                }
            );

            if (existingUser.length > 0) {
                return response.failed(res, 409, "Email sudah terdaftar. Gunakan email lain.");
            }

            // Konfirmasi password
            if (password !== confPassword) {
                return response.failed(res, 400, "Password dan confirm password tidak cocok.");
            }

            // Hash password
            const salt = await bcryptjs.genSalt(12);
            const hashPassword = await bcryptjs.hash(password, salt);

            // Simpan ke database
            const [result] = await db.query(
                "INSERT INTO tb_users (name, email, password) VALUES (?, ?, ?)",
                {
                    replacements: [name, email, hashPassword],
                    type: QueryTypes.INSERT
                }
            );
            const [newUser] = await db.query(
                "SELECT id, name, email, createdAt FROM tb_users WHERE id = ?",
                {
                    replacements: [result],
                    type: QueryTypes.SELECT
                }
            );
            return response.success(
                res,
                201,
                "Registrasi berhasil! Silakan login.",
                newUser
            );
        } catch (error) {
            return response.failed(res, 500, error.message);
        }
    },
    async Login(req, res, next) {
        const { email, password } = req.body;

        try {
            // Cari user berdasarkan email
            const [user] = await db.query(
                "SELECT id, name, email, password FROM tb_users WHERE email = ? LIMIT 1",
                {
                    replacements: [email],
                    type: QueryTypes.SELECT
                }
            );

            if (!user) {
                return response.failed(res, 404, "Email tidak ditemukan.");
            }

            // Verifikasi password
            const match = await bcryptjs.compare(password, user.password);
            if (!match) {
                return response.failed(res, 401, "Password salah.");
            }

            const payload = { userId: user.id, name: user.name, email: user.email };
            const accessToken = jwtUtils.generateAccessToken(payload);
            const refreshToken = jwtUtils.generateRefreshToken(payload);

            // Simpan refresh token ke database
            await db.query(
                "UPDATE tb_users SET refresh_token = ? WHERE id = ?",
                {
                    replacements: [refreshToken, user.id],
                    type: QueryTypes.UPDATE
                }
            );

            // Kirim refresh token via httpOnly cookie
            res.cookie("refreshToken", refreshToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "strict",
                maxAge: 24 * 60 * 60 * 1000 // 1 hari
            });

            return response.success(res, 200, "Login berhasil!", {
                id: user.id,
                name: user.name,
                email: user.email,
                accessToken: accessToken,
                refreshToken: refreshToken
            });

        } catch (error) {
            next(error);
        }
    },
    async RefreshToken(req, res, next) {
        try {
            const refreshToken = req.cookies?.refreshToken;

            if (!refreshToken) {
                return response.failed(res, 401, "Refresh token tidak ditemukan. Silakan login.");
            }

            // Cari user berdasarkan refresh token di database
            const [user] = await db.query(
                "SELECT id, name, email, refresh_token FROM tb_users WHERE refresh_token = ? LIMIT 1",
                {
                    replacements: [refreshToken],
                    type: QueryTypes.SELECT
                }
            );

            if (!user) {
                return response.failed(res, 403, "Refresh token tidak valid.");
            }

            // Verifikasi refresh token
            try {
                jwtUtils.verifyRefreshToken(refreshToken);
            } catch (error) {
                if (error.name === "TokenExpiredError") {
                    return response.failed(res, 403, "Refresh token kedaluwarsa. Silakan login kembali.");
                }
                return response.failed(res, 403, "Refresh token tidak valid.");
            }

            // Generate access token baru
            const payload = { userId: user.id, name: user.name, email: user.email };
            const accessToken = jwtUtils.generateAccessToken(payload);

            return response.success(res, 200, "Access token berhasil diperbarui.", { accessToken });

        } catch (error) {
            next(error);
        }
    },

    async Logout(req, res, next) {
        try {
            const refreshToken = req.cookies?.refreshToken;

            if (!refreshToken) {
                return response.failed(res, 401, "Anda belum login.");
            }

            // Cari user berdasarkan refresh token
            const [user] = await db.query(
                "SELECT id FROM tb_users WHERE refresh_token = ? LIMIT 1",
                {
                    replacements: [refreshToken],
                    type: QueryTypes.SELECT
                }
            );

            if (!user) {
                return response.failed(res, 404, "User tidak ditemukan.");
            }

            // Hapus refresh token dari database
            await db.query(
                "UPDATE tb_users SET refresh_token = NULL WHERE id = ?",
                {
                    replacements: [user.id],
                    type: QueryTypes.UPDATE
                }
            );

            // Hapus cookie dari browser
            res.clearCookie("refreshToken", {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "strict"
            });

            return response.success(res, 200, "Logout berhasil.");

        } catch (error) {
            next(error);
        }
    }
};

export default authController;