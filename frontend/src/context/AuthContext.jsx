import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { apiRequest } from "../lib/api";
import { readAppData, writeAppData } from "../lib/storage";
import { AuthContext } from "./auth-context";

// File ini SENGAJA hanya mengekspor komponen (AuthProvider), sesuai aturan
// react-refresh/only-export-components. Context object ada di auth-context.js,
// dan hook useAuthUser ada di hooks/useAuthUser.js.
export const AuthProvider = ({ children }) => {
    const [user, setUserState] = useState(() => readAppData("user", {}));
    const [loadingUser, setLoadingUser] = useState(true);
    const hasFetchedRef = useRef(false);

    const setUser = useCallback((nextUser) => {
        setUserState(nextUser);
        writeAppData("user", nextUser);
    }, []);

    // Dipanggil eksplisit dari handler (misal setelah ganti avatar / logout),
    // bukan dari body effect, jadi aman set loading di awal.
    const refetchUser = useCallback(async () => {
        setLoadingUser(true);
        try {
            const res = await apiRequest("/api/auth/me", { useCache: false });
            const nextUser = res?.payload?.user ?? {};
            setUser(nextUser);
            return nextUser;
        } finally {
            setLoadingUser(false);
        }
    }, [setUser]);

    useEffect(() => {
        // Fetch hanya sekali per lifetime provider (sekali per sesi app),
        // bukan setiap kali komponen yang pakai context ini mount.
        if (hasFetchedRef.current) return;
        hasFetchedRef.current = true;

        let mounted = true;
        (async () => {
            try {
                const res = await apiRequest("/api/auth/me");
                if (!mounted) return;
                setUser(res?.payload?.user ?? {});
            } catch {
                // Biarkan apiRequest yang urus redirect ke login kalau token invalid.
            } finally {
                if (mounted) setLoadingUser(false);
            }
        })();

        return () => {
            mounted = false;
        };
    }, [setUser]);

    const value = useMemo(
        () => ({ user, loadingUser, setUser, refetchUser }),
        [user, loadingUser, setUser, refetchUser],
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};