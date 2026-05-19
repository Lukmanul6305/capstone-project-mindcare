import rekomendasiServices from "../services/rekomendasiServices.js";
import response from "../utils/response.js";

const rekomendasiController = {

    /**
     * POST /rekomendasi
     * Membuat rekomendasi baru berdasarkan kuesioner yang sudah ada.
     */
    async createRekomendasi(req, res, next) {
        try {
            const result = await rekomendasiServices.createRekomendasi(
                req.userId,
                req.body.kuesioner_id
            );
            return response.success(res, 201, "Rekomendasi berhasil dibuat.", result);
        } catch (error) {
            next(error);
        }
    },

    /**
     * GET /rekomendasi/me
     * Mengambil riwayat semua sesi rekomendasi milik user yang sedang login.
     */
    async getRekomendasiByUserLogin(req, res, next) {
        try {
            const sesi = await rekomendasiServices.getRekomendasiByUser(req.userId);
            return response.success(res, 200, "Riwayat rekomendasi berhasil diambil.", { sesi });
        } catch (error) {
            next(error);
        }
    },

    /**
     * GET /rekomendasi/:id
     * Mengambil detail satu sesi rekomendasi lengkap (aktivitas, buku, distribusi).
     */
    async getRekomendasiById(req, res, next) {
        try {
            const result = await rekomendasiServices.getRekomendasiById(req.params.id, req.userId);
            return response.success(res, 200, "Detail rekomendasi berhasil diambil.", result);
        } catch (error) {
            next(error);
        }
    },

    /**
     * GET /rekomendasi  (admin only)
     * Mengambil semua sesi rekomendasi dari seluruh user.
     */
    async getAllRekomendasi(req, res, next) {
        try {
            const sesi = await rekomendasiServices.getAllRekomendasi();
            return response.success(res, 200, "Semua data rekomendasi berhasil diambil.", { sesi });
        } catch (error) {
            next(error);
        }
    }
};

export default rekomendasiController;