import stressProgressRepository from "../repositories/stressProgressRepository.js";
import {
    calculateStressAfterActivity,
    getActivityReduction,
    getStressCategory,
    mapStressLevelToPercent,
    normalizeActivityDurationMinutes,
    normalizeStressPercent
} from "../utils/stressProgress.js";

const normalizeActivity = (activity) => String(activity || "").toLowerCase().trim();
const roundPercent = (value) => Math.round(value * 100) / 100;

const ACTIVITY_LABELS = {
    membaca: "membaca",
    journaling: "journaling",
    olahraga: "olahraga"
};

const formatPercent = (value) => {
    const percent = Number(value);
    if (!Number.isFinite(percent)) return "--";

    const rounded = Math.round(percent * 10) / 10;
    return `${Number.isInteger(rounded) ? rounded : rounded.toFixed(1)}%`;
};

const buildEffect = ({
    status,
    activity,
    durationMinutes,
    plannedReduction = 0,
    actualReduction = 0,
    stressBefore = null,
    stressAfter = null
}) => {
    const activityLabel = ACTIVITY_LABELS[activity] || "aktivitas";

    const messages = {
        updated: `Aktivitas ${activityLabel} tersimpan. Estimasi stress turun ${formatPercent(actualReduction)} dari ${formatPercent(stressBefore)} menjadi ${formatPercent(stressAfter)}.`,
        missing_baseline: `Aktivitas ${activityLabel} tersimpan. Isi Cek Stress untuk menghitung dampak aktivitas terhadap tingkat stress.`,
        at_minimum: `Aktivitas ${activityLabel} tersimpan. Stress kamu sudah berada di level terendah.`,
        no_effect: `Aktivitas ${activityLabel} tersimpan. Durasi aktivitas belum cukup untuk menghitung estimasi penurunan stress.`
    };

    return {
        status,
        activity,
        duration_minutes: durationMinutes,
        planned_reduction_percent: plannedReduction,
        actual_reduction_percent: actualReduction,
        stress_before_percent: stressBefore,
        stress_after_percent: stressAfter,
        did_update_stress: status === "updated",
        message: messages[status] || messages.no_effect
    };
};

const calculateTotalReductionFromState = (state) => {
    if (!state) return 0;

    const baseline = Number(state.stress_awal_percent);
    const current = Number(state.stress_saat_ini_percent);

    if (!Number.isFinite(baseline) || !Number.isFinite(current)) return 0;

    return roundPercent(Math.max(0, baseline - current));
};

const stressProgressServices = {
    async setBaselineFromKuesioner(userId, kuesioner, stressAssessment = null) {
        const aiStressPercent = Number(stressAssessment?.stress_percentage);
        const stressPercent = Number.isFinite(aiStressPercent)
            ? normalizeStressPercent(aiStressPercent)
            : mapStressLevelToPercent(kuesioner?.tingkat_stres);
        const aiStressLevel = String(stressAssessment?.stress_level || "").trim();
        const kategoriStress = aiStressLevel || getStressCategory(stressPercent);
        const keteranganStress = stressAssessment?.keterangan
            ? String(stressAssessment.keterangan)
            : null;

        return stressProgressRepository.upsertState(userId, {
            kuesionerId: kuesioner?.id ?? null,
            stressAwalPercent: stressPercent,
            stressSaatIniPercent: stressPercent,
            kategoriStress,
            keteranganStress
        });
    },

    async applyActivityReduction(userId, {
        activity,
        durationMinutes,
        sourceType,
        sourceId = null
    }) {
        const normalizedActivity = normalizeActivity(activity);
        const minutes = normalizeActivityDurationMinutes(durationMinutes);
        const reduction = getActivityReduction(normalizedActivity, minutes);

        const currentState = await stressProgressRepository.findStateByUserId(userId);
        if (!currentState) {
            return {
                state: currentState,
                reduction_log: null,
                effect: buildEffect({
                    status: "missing_baseline",
                    activity: normalizedActivity,
                    durationMinutes: minutes,
                    plannedReduction: reduction
                })
            };
        }

        if (reduction <= 0) {
            return {
                state: currentState,
                reduction_log: null,
                effect: buildEffect({
                    status: "no_effect",
                    activity: normalizedActivity,
                    durationMinutes: minutes
                })
            };
        }

        const result = calculateStressAfterActivity(
            currentState.stress_saat_ini_percent,
            normalizedActivity,
            minutes
        );

        const reductionLog = await stressProgressRepository.insertReductionLog(userId, {
            aktivitas: normalizedActivity,
            sourceType,
            sourceId,
            durasiMenit: minutes,
            stressSebelum: result.stress_sebelum,
            penurunanPercent: result.penurunan_percent,
            stressSesudah: result.stress_sesudah
        });

        const updatedState = await stressProgressRepository.updateCurrentStress(userId, {
            stressSaatIniPercent: result.stress_sesudah,
            kategoriStress: result.kategori_stress
        });
        const effectStatus = result.penurunan_percent > 0 ? "updated" : "at_minimum";

        return {
            state: updatedState,
            reduction_log: reductionLog,
            effect: buildEffect({
                status: effectStatus,
                activity: normalizedActivity,
                durationMinutes: minutes,
                plannedReduction: reduction,
                actualReduction: result.penurunan_percent,
                stressBefore: result.stress_sebelum,
                stressAfter: result.stress_sesudah
            })
        };
    },

    async getCurrentProgress(userId) {
        const state = await stressProgressRepository.findStateByUserId(userId);
        const [logs, summary] = await Promise.all([
            stressProgressRepository.findLatestReductionLogsByUserId(userId, 5),
            stressProgressRepository.findReductionSummaryByUserId(userId, state?.baseline_at)
        ]);

        return {
            state,
            summary: {
                ...summary,
                total_reduction_percent: calculateTotalReductionFromState(state)
            },
            recent_logs: logs
        };
    }
};

export default stressProgressServices;
