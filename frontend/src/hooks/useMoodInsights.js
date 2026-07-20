import { useMemo } from "react";

import { getEntryDate, getLastNDays, toDate, toDateKey } from "../utils/dateUtils";
import { moodKeyToEmoji, normalizeMoodKey } from "../utils/moodUtils";

// Turunan mood dihitung berlapis: pertama bangun peta "hari -> mood terakhir"
// SEKALI (O(n)), baru dipakai untuk todayInfo dan moodRows. Ini menghindari
// filter+sort array stressScans berulang kali seperti pada versi awal.
export const useMoodInsights = (stressScans, days = 7) => {
    const moodByDay = useMemo(() => {
        const map = new Map();

        stressScans.forEach((item) => {
            const timestamp = toDate(getEntryDate(item));
            const dayKey = toDateKey(timestamp);
            const moodKey = normalizeMoodKey(item?.mood);
            if (!timestamp || !dayKey || !moodKey) return;

            const existing = map.get(dayKey);
            if (!existing || timestamp > existing.timestamp) {
                map.set(dayKey, { moodKey, timestamp });
            }
        });

        return map;
    }, [stressScans]);

    const todayInfo = useMemo(() => {
        const todayKey = toDateKey(new Date());
        const entry = moodByDay.get(todayKey);

        return {
            hasCheckIn: Boolean(entry),
            moodToday: entry ? moodKeyToEmoji(entry.moodKey) : "--",
        };
    }, [moodByDay]);

    const moodRows = useMemo(() => {
        return getLastNDays(days).map((date) => {
            const dateKey = toDateKey(date);
            const found = moodByDay.get(dateKey);

            return {
                dateKey,
                dayLabel: date.toLocaleDateString("id-ID", { weekday: "short" }),
                moodKey: found?.moodKey ?? null,
            };
        });
    }, [moodByDay, days]);

    return { ...todayInfo, moodRows };
};