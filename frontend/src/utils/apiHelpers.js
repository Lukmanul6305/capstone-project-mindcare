export const extractArrayPayload = (payload, expectedKey) => {
    if (!payload) return [];
    if (Array.isArray(payload)) return payload;
    if (expectedKey && Array.isArray(payload[expectedKey])) return payload[expectedKey];
    return Object.values(payload).filter((item) => item && typeof item === "object");
};

export const withFallback = async (requestPromise) => {
    try {
        return await requestPromise;
    } catch (err) {
        if (err?.status !== 404) {
            console.error("API request error:", err);
        }
        return { success: true, payload: {} };
    }
};