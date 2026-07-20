import { useContext } from "react";

import { AuthContext } from "../context/auth-context";

export const useAuthUser = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuthUser harus dipakai di dalam <AuthProvider>");
    return ctx;
};