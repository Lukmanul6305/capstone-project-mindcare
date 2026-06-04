import axios from "axios";

const ACTIVITY_DETAILS = {
    olahraga: {
        durasi: 30,
        detail: "jogging ringan atau senam ringan"
    },
    journaling: {
        durasi: 20,
        detail: "menulis perasaan dan refleksi harian"
    },
    membaca: {
        durasi: 25,
        detail: "buku self-improvement atau relaksasi"
    }
};

const toNumber = (value, fallback = 0) => {
    const numberValue = Number(value);
    return Number.isFinite(numberValue) ? numberValue : fallback;
};

const normalizeActivity = (activity) => String(activity || "").toLowerCase().trim();

const buildActivityPayload = (activity, confidence) => {
    const normalizedActivity = normalizeActivity(activity);
    const details = ACTIVITY_DETAILS[normalizedActivity] || {
        durasi: 20,
        detail: "aktivitas relaksasi ringan"
    };

    return {
        aktivitas: normalizedActivity,
        confidence: toNumber(confidence),
        durasi: details.durasi,
        detail: details.detail
    };
};

const normalizeRailwayResponse = (rawResponse) => {
    const activity = normalizeActivity(rawResponse?.rekomendasi);
    const confidence = toNumber(rawResponse?.confidence);
    const distribusi = rawResponse?.distribusi ?? {};

    if (!activity) {
        throw new Error("Format respons AI tidak valid: field 'rekomendasi' tidak ditemukan.");
    }

    const alternatif = Object.entries(distribusi)
        .filter(([key]) => normalizeActivity(key) !== activity)
        .map(([key, value]) => buildActivityPayload(key, value))
        .filter((item) => item.confidence > 0)
        .sort((a, b) => b.confidence - a.confidence);

    return {
        rekomendasi_utama: buildActivityPayload(activity, confidence),
        alternatif,
        insight: {
            model_type: "Railway FastAPI Recommendation Model",
            distribusi_probabilitas: distribusi,
            alasan: `Model AI merekomendasikan '${activity}' dengan confidence ${(confidence * 100).toFixed(1)}%.`
        }
    };
};

const normalizeAIResponse = (rawResponse) => {
    const payload = rawResponse?.data ?? rawResponse;

    if (payload?.rekomendasi_utama && payload?.insight) {
        return payload;
    }

    return normalizeRailwayResponse(payload);
};

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

        return normalizeAIResponse(res.data);

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
