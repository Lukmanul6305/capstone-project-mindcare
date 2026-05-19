import response from "../utils/response.js";
import usersService from "../services/usersServices.js";

const usersController = {
    async Register(req, res, next) {
        try {
            const newUser = await usersService.register(req.body);
            return response.success(res, 201, "Registrasi berhasil! Silakan login.", newUser);
        } catch (error) {
            next(error);
        }
    },

    async deleteUser(req, res, next) {
        try {
            await usersService.deleteUser(req.params.id);
            return response.success(res, 200, "User berhasil dihapus.");
        } catch (error) {
            next(error);
        }
    },

    async updateProfile(req, res, next) {
        try {
            const updatedUser = await usersService.updateProfile(req.userId, req.body);
            return response.success(res, 200, "Profil berhasil diupdate.", updatedUser);
        } catch (error) {
            next(error);
        }
    },

    async deleteAccount(req, res, next) {
        try {
            await usersService.deleteAccount(req.userId);

            res.clearCookie("refreshToken", {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "strict"
            });

            return response.success(res, 200, "Akun berhasil dihapus.");
        } catch (error) {
            next(error);
        }
    }
};

export default usersController;
