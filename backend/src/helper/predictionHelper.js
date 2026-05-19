import axios from "axios";

/**
 * Mengirim data kuesioner ke model AI dan mengembalikan rekomendasi.
 *
 * @param {object} inputData - Data kuesioner dalam format yang dibutuhkan AI.
 * @returns {object} Hasil rekomendasi dari AI.
 * @throws {Error} Jika AI_URL tidak dikonfigurasi, timeout, atau response tidak valid.
 */
export const getAIRecommendation = async (inputData) => {
    const aiUrl = process.env.AI_URL;

    if (!aiUrl) {
        throw new Error("AI_URL belum dikonfigurasi di environment variables.");
    }

    try {
        const res = await axios.post(aiUrl, inputData, {
            timeout: 30000, // 30 detik timeout
            headers: { "Content-Type": "application/json" }
        });

        if (!res.data?.data) {
            throw new Error("Format respons AI tidak valid: field 'data' tidak ditemukan.");
        }

        return res.data.data;

    } catch (error) {
        // Beri pesan error yang lebih informatif berdasarkan jenis error
        if (error.code === "ECONNABORTED") {
            throw new Error("Koneksi ke AI timeout. Coba lagi nanti.");
        }
        if (error.code === "ECONNREFUSED") {
            throw new Error("Tidak dapat terhubung ke server AI. Pastikan server AI aktif.");
        }
        if (error.response) {
            throw new Error(`Server AI error (${error.response.status}): ${error.response.data?.message ?? "Unknown error"}`);
        }
        throw error;
    }
};