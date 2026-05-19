import response from "../utils/response.js";
import olahragaService from "../services/olahragaServices.js";

const olahragaController = {
    async createOlahraga(req, res, next) {
        try {
            const olahraga = await olahragaService.createOlahraga(req.userId, req.body);
            return response.success(res, 201, "Aktivitas olahraga berhasil disimpan.", olahraga);
        } catch (error) {
            next(error);
        }
    },

    async getAllOlahragaByUserLogin(req, res, next) {
        try {
            const olahraga = await olahragaService.getAllOlahragaByUserLogin(req.userId);
            return response.success(res, 200, "Riwayat olahraga berhasil diambil.", { olahraga });
        } catch (error) {
            next(error);
        }
    },

    async getOlahragaById(req, res, next) {
        try {
            const olahraga = await olahragaService.getOlahragaById(req.params.id, req.userId);
            return response.success(res, 200, "Detail olahraga berhasil diambil.", olahraga);
        } catch (error) {
            next(error);
        }
    },

    async deleteOlahraga(req, res, next) {
        try {
            await olahragaService.deleteOlahraga(req.params.id, req.userId);
            return response.success(res, 200, "Data olahraga berhasil dihapus.");
        } catch (error) {
            next(error);
        }
    },

    async getStatistikOlahraga(req, res, next) {
        try {
            const statistik = await olahragaService.getStatistikOlahraga(req.userId);
            return response.success(res, 200, "Statistik olahraga berhasil diambil.", statistik);
        } catch (error) {
            next(error);
        }
    },

    async getAllOlahraga(req, res, next) {
        try {
            const olahraga = await olahragaService.getAllOlahraga();
            return response.success(res, 200, "Semua data olahraga berhasil diambil.", { olahraga });
        } catch (error) {
            next(error);
        }
    }
};

export default olahragaController;
