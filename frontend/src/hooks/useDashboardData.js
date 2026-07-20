import { useCallback, useEffect, useRef, useState } from "react";

import { apiRequest } from "../lib/api";
import { extractArrayPayload, withFallback } from "../utils/apiHelpers";

const getInitialState = () => ({
    stressScans: [],
    stressProgress: null,
});

export const useDashboardData = () => {
    const [data, setData] = useState(getInitialState);
    const [loading, setLoading] = useState(true);
    const mountedRef = useRef(true);

    const loadData = useCallback(async () => {
        try {
            const [scansRes, progressRes] = await Promise.all([
                withFallback(apiRequest("/api/stress-scan/me")),
                withFallback(apiRequest("/api/stress-progress/me")),
            ]);

            if (!mountedRef.current) return;

            setData({
                stressScans: extractArrayPayload(scansRes?.payload, "scans"),
                stressProgress: progressRes?.payload || null,
            });
        } finally {
            if (mountedRef.current) setLoading(false);
        }
    }, []);

    useEffect(() => {
        mountedRef.current = true;
        loadData();
        return () => {
            mountedRef.current = false;
        };
    }, [loadData]);

    const refetch = useCallback(() => {
        setLoading(true);
        return loadData();
    }, [loadData]);

    return { ...data, loading, refetch };
};