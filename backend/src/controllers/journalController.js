import response from "../utils/response.js";
import journalService from "../services/journalServices.js";

const journalController = {
    async createJournal(req, res, next) {
        try {
            const data = await journalService.createJournal(req.userId, req.body);
            return response.success(res, 201, "Journal berhasil dibuat.", data);
        } catch (error) {
            next(error);
        }
    },

    async getAllJournalByUserLogin(req, res, next) {
        try {
            const journals = await journalService.getAllJournalByUserLogin(req.userId);
            return response.success(res, 200, "Data journal berhasil diambil.", journals);
        } catch (error) {
            next(error);
        }
    },

    async getAllJournal(req, res, next) {
        try {
            const journals = await journalService.getAllJournal();
            return response.success(res, 200, "Data journal berhasil diambil.", journals);
        } catch (error) {
            next(error);
        }
    },

    async getJournalById(req, res, next) {
        try {
            const journal = await journalService.getJournalById(req.params.id);
            return response.success(res, 200, "Detail journal berhasil diambil.", journal);
        } catch (error) {
            next(error);
        }
    },

    async updateJournal(req, res, next) {
        try {
            const updatedJournal = await journalService.updateJournal(req.params.id, req.userId, req.body);
            return response.success(res, 200, "Journal berhasil diupdate.", updatedJournal);
        } catch (error) {
            next(error);
        }
    },

    async deleteJournal(req, res, next) {
        try {
            await journalService.deleteJournal(req.params.id, req.userId);
            return response.success(res, 200, "Journal berhasil dihapus.");
        } catch (error) {
            next(error);
        }
    }
};

export default journalController;
