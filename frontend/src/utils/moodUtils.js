export const MOOD_TO_EMOJI = {
    happy: "\uD83D\uDE0A",
    neutral: "\uD83D\uDE10",
    sad: "\uD83D\uDE22",
    angry: "\uD83D\uDE20",
    surprised: "\uD83D\uDE32",
};

const MOOD_SCORE_MAP = {
    0: "angry",
    1: "sad",
    2: "neutral",
    3: "neutral",
    4: "happy",
    5: "happy",
};

export const normalizeMoodKey = (value) => {
    if (value == null) return null;

    if (typeof value === "number") {
        return MOOD_SCORE_MAP[value] ?? null;
    }

    const numericValue = Number(value);
    if (Number.isFinite(numericValue)) {
        return MOOD_SCORE_MAP[numericValue] ?? null;
    }

    const key = String(value).toLowerCase().trim();
    return MOOD_TO_EMOJI[key] ? key : null;
};

export const moodKeyToEmoji = (moodKey) => MOOD_TO_EMOJI[moodKey] ?? "--";