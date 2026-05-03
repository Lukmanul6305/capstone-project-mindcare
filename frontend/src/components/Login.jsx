import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/Logo Mindcare.png'

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">
                <div className="flex justify-center mb-4">
                    <img
                        src={logo}
                        alt="Logo Mindcare"
                        className="w-36 h-36 object-contain"
                    />
                </div>
                <h1 className="text-xl font-serif font-medium text-slate-900 tracking-tight mb-1">
                    Selamat datang
                </h1>
                <p className="text-sm text-slate-400 font-light mb-7">
                    Masuk untuk melanjutkan ke akun Anda
                </p>

                <form className="space-y-5">

                    <div>
                        <label className="block text-sm font-serif font-medium text-slate-700 mb-1">
                            Email atau Username
                        </label>
                        <input
                            type="text"
                            placeholder="Masukkan username"
                            className="w-full px-4 py-2 border border-slate-200 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-slate-300 
              text-sm text-slate-700 placeholder:text-slate-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-serif font-medium text-slate-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Masukkan password"
                            className="w-full px-4 py-2 border border-slate-200 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-slate-300 
              text-sm text-slate-700 placeholder:text-slate-400"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-slate-900 hover:bg-slate-800 text-white py-2 rounded-lg 
            font-medium tracking-tight transition"
                    >
                        Login
                    </button>

                </form>

                <p className="text-center text-sm text-slate-500 mt-5 font-light">
                    Belum punya akun?{" "}
                    <Link
                        to="/register"
                        className="text-slate-900 font-medium hover:underline"
                    >
                        Daftar
                    </Link>
                </p>

            </div>

        </div>
    );
};

export default Login;