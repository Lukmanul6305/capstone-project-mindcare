import bcryptjs from "bcryptjs";
import usersRepository from "../repositories/usersRepository.js";
import ConflictError from "../exceptions/ConflictError.js";
import NotFoundError from "../exceptions/NotFoundError.js";
import ValidationError from "../exceptions/ValidationError.js";

const usersService = {
    async register(payload) {
        const { name, email, password, confPassword, avatar, role } = payload;

        if (password !== confPassword) {
            throw new ValidationError("Password dan confirm password tidak cocok.");
        }

        const existingUser = await usersRepository.findByEmail(email);
        if (existingUser) {
            throw new ConflictError("Email sudah terdaftar. Gunakan email lain.");
        }

        const hashPassword = await bcryptjs.hash(password, 12);

        return usersRepository.create({
            name,
            email,
            password: hashPassword,
            avatar,
            role
        });
    },

    async deleteUser(id) {
        const user = await usersRepository.findById(id);
        if (!user) throw new NotFoundError("User tidak ditemukan.");

        await usersRepository.deleteById(id);
    },

    async updateProfile(id, payload) {
        const updateData = {};

        if (Object.prototype.hasOwnProperty.call(payload, "name")) {
            updateData.name = payload.name;
        }

        if (Object.prototype.hasOwnProperty.call(payload, "avatar")) {
            updateData.avatar = payload.avatar;
        }

        if (!Object.keys(updateData).length) {
            throw new ValidationError("Tidak ada data yang diupdate.");
        }

        const user = await usersRepository.findById(id);
        if (!user) throw new NotFoundError("User tidak ditemukan.");

        return usersRepository.updateProfile(id, updateData);
    },

    async deleteAccount(id) {
        const user = await usersRepository.findById(id);
        if (!user) throw new NotFoundError("User tidak ditemukan.");

        await usersRepository.deleteById(id);
    }
};

export default usersService;
