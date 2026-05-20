import NotFoundError from "../exceptions/NotFoundError.js";
import olahragaRepository from "../repositories/olahragaRepository.js";

const olahragaService = {
    async createOlahraga(userId, payload) {
        return olahragaRepository.create(userId, payload);
    },

    async getAllOlahragaByUserLogin(userId) {
        const olahraga = await olahragaRepository.findAllByUserId(userId);
        if (!olahraga.length) throw new NotFoundError("Belum ada riwayat olahraga.");

        return olahraga;
    },

    async getOlahragaById(id, userId) {
        const olahraga = await olahragaRepository.findByIdAndUserId(id, userId);
        if (!olahraga) throw new NotFoundError("Data olahraga tidak ditemukan.");

        return olahraga;
    },

    async deleteOlahraga(id, userId) {
        const olahraga = await olahragaRepository.findByIdAndUserId(id, userId);
        if (!olahraga) throw new NotFoundError("Data olahraga tidak ditemukan.");

        await olahragaRepository.deleteById(id);
    },

    async getStatistikOlahraga(userId) {
        return olahragaRepository.getStatisticsByUserId(userId);
    },
    
    async getStatistikOlahragaPerJenis(userId) {
        return olahragaRepository.getStatisticsGroupedByJenis(userId);
    },

    async getAllOlahraga() {
        const olahraga = await olahragaRepository.findAllWithUser();
        if (!olahraga.length) throw new NotFoundError("Belum ada data olahraga.");

        return olahraga;
    }
};

export default olahragaService;
