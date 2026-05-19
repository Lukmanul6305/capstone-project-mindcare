import stressScanServices from "../services/stressScanServices.js";
import response from "../utils/response.js";

const stressScanController = {

    /**
     * POST /stress-scan
     * Menyimpan data stress scan baru.
     */
    async createStressScan(req, res, next) {
        try {
            const scan = await stressScanServices.createStressScan(req.userId, req.body);
            return response.success(res, 201, "Hasil scan stres berhasil disimpan.", scan);
        } catch (error) {
            next(error);
        }
    },

    /**
     * GET /stress-scan/me
     * Mengambil semua riwayat stress scan milik user yang sedang login.
     */
    async getAllStressScanByUserLogin(req, res, next) {
        try {
            const scans = await stressScanServices.getAllStressScanByUser(req.userId);
            return response.success(res, 200, "Riwayat scan stres berhasil diambil.", { scans });
        } catch (error) {
            next(error);
        }
    },

    /**
     * GET /stress-scan/:id
     * Mengambil detail satu stress scan berdasarkan ID.
     */
    async getStressScanById(req, res, next) {
        try {
            const scan = await stressScanServices.getStressScanById(req.params.id, req.userId);
            return response.success(res, 200, "Detail scan stres berhasil diambil.", scan);
        } catch (error) {
            next(error);
        }
    },

    /**
     * DELETE /stress-scan/:id
     * Menghapus stress scan milik user berdasarkan ID.
     */
    async deleteStressScan(req, res, next) {
        try {
            await stressScanServices.deleteStressScan(req.params.id, req.userId);
            return response.success(res, 200, "Data scan stres berhasil dihapus.");
        } catch (error) {
            next(error);
        }
    },

    /**
     * GET /stress-scan  (admin only)
     * Mengambil semua data stress scan dari seluruh user.
     */
    async getAllStressScan(req, res, next) {
        try {
            const scans = await stressScanServices.getAllStressScan();
            return response.success(res, 200, "Semua data scan stres berhasil diambil.", { scans });
        } catch (error) {
            next(error);
        }
    }
};

export default stressScanController;