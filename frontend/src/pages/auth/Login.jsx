import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthCard from "../../components/auth/AuthCard";
import AuthError from "../../components/auth/AuthError";
import AuthLogo from "../../components/auth/AuthLogo";
import LoginForm from "../../components/auth/LoginForm";
import { apiRequest } from "../../lib/api";
import { writeAppData } from "../../lib/storage";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setError("");
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) return setError("Mohon isi semua field!");

    setLoading(true);
    setError("");

    apiRequest("/api/auth/login", {
      method: "POST",
      auth: false,
      body: { email: form.email, password: form.password },
    })
      .then((json) => {
        const accessToken = json?.payload?.token?.accessToken ?? null;
        const user = {
          id: json?.payload?.id ?? null,
          name: json?.payload?.name ?? "",
          email: json?.payload?.email ?? "",
        };

        if (accessToken) writeAppData("auth", { accessToken });
        writeAppData("user", user);
        navigate("/dashboard");
      })
      .catch((err) => {
        setError(err?.message || "Login gagal.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen bg-[#FFFDF5] px-4 py-8 flex items-center justify-center">
      <div className="w-full max-w-md">
        <AuthCard>
          <AuthLogo />

          <div className="mb-7 text-center">
            <h1 className="text-3xl font-extrabold text-[#1E293B]">Masuk ke Akunmu</h1>
            <p className="mt-2 font-medium text-[#64748B]">Lanjutkan perjalanan mentalmu</p>
          </div>

          <AuthError message={error} />
          <LoginForm form={form} onChange={handleChange} onSubmit={handleLogin} loading={loading} />
        </AuthCard>

        <div className="mt-6 text-center">
          <p className="font-medium text-[#64748B]">
            Belum punya akun?{" "}
            <Link
              to="/register"
              className="font-bold text-[#8B5CF6] underline decoration-2 underline-offset-4 transition-colors hover:text-pink-400"
            >
              Daftar sekarang
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;