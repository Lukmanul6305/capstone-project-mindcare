import authService from "../services/authServices.js";
import response from "../utils/response.js";

const refreshTokenCookieOptions = () => ({
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    maxAge: 24 * 60 * 60 * 1000
});

const clearRefreshTokenCookieOptions = () => {
    const { maxAge, ...options } = refreshTokenCookieOptions();
    return options;
};

const authController = {
    async getUserByToken(req, res, next) {
        try {
            const user = await authService.getUserByToken(req.userId);
            return response.success(res, 200, "Data user berhasil diambil.", { user });
        } catch (error) {
            next(error);
        }
    },

    async Login(req, res, next) {
        try {
            const { email, password } = req.body;
            const { user, accessToken, refreshToken } = await authService.login(email, password);

            res.cookie("refreshToken", refreshToken, refreshTokenCookieOptions());

            return response.success(res, 200, "Login berhasil!", {
                id: user.id,
                name: user.name,
                email: user.email,
                avatar: user.avatar,
                jenis_kelamin: user.jenis_kelamin,
                umur: user.umur,
                pekerjaan: user.pekerjaan,
                token: { accessToken }
            });
        } catch (error) {
            next(error);
        }
    },

    async RefreshToken(req, res, next) {
        try {
            const refreshToken = req.cookies?.refreshToken;
            if (!refreshToken) return response.failed(res, 401, "Refresh token tidak ditemukan. Silakan login.");

            const { accessToken, refreshToken: nextRefreshToken } = await authService.refreshToken(refreshToken);

            res.cookie("refreshToken", nextRefreshToken, refreshTokenCookieOptions());

            return response.success(res, 200, "Access token berhasil diperbarui.", { accessToken });
        } catch (error) {
            next(error);
        }
    },

    async Logout(req, res, next) {
        try {
            const refreshToken = req.cookies?.refreshToken;

            if (refreshToken) await authService.logout(refreshToken);

            res.clearCookie("refreshToken", clearRefreshTokenCookieOptions());

            return response.success(res, 200, "Logout berhasil.");
        } catch (error) {
            next(error);
        }
    },

    async getAllUsers(req, res, next) {
        try {
            const users = await authService.getAllUsers();
            return response.success(res, 200, "Data semua user berhasil diambil.", { users });
        } catch (error) {
            next(error);
        }
    },

    async getUserById(req, res, next) {
        try {
            const user = await authService.getUserById(req.params.id);
            return response.success(res, 200, "Data user berhasil diambil.", user);
        } catch (error) {
            next(error);
        }
    },

    async deleteUser(req, res, next) {
        try {
            await authService.deleteUser(req.params.id);
            res.clearCookie("refreshToken", clearRefreshTokenCookieOptions());
            return response.success(res, 200, "User berhasil dihapus.");
        } catch (error) {
            next(error);
        }
    }
};

export default authController;
