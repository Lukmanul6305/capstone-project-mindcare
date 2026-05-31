import { useEffect, useState } from "react";
import { FiArrowLeft, FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

import BooksSessionHistory from "../../components/books/BooksSessionHistory";
import AppSidebar from "../../components/layout/AppSidebar";
import { getMyBookSessions } from "../../lib/api";
import { getBookSessions, saveBookSessions } from "../../lib/mindcareBookSessions";

const sortSessionsDesc = (sessions = []) => (
  [...sessions].sort((a, b) => new Date(b.date) - new Date(a.date))
);

const BooksExplorationHistory = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sessions, setSessions] = useState(() => sortSessionsDesc(getBookSessions()));

  useEffect(() => {
    let mounted = true;

    const fetchSessions = async () => {
      try {
        const res = await getMyBookSessions();
        const remote = Array.isArray(res?.payload?.sessions) ? res.payload.sessions : [];
        if (!mounted) return;

        if (remote.length) {
          setSessions(sortSessionsDesc(remote));
          saveBookSessions(remote);
        }
      } catch (err) {
        if (err?.status !== 404) {
          console.error("Gagal mengambil riwayat sesi buku dari backend:", err);
        }
      }
    };

    fetchSessions();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F4F5F9] text-[#1E293B]">
      <div className="flex min-h-screen">
        <AppSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} activeMenu="Rekomendasi Buku" />

        <main className="min-h-screen flex-1">
          <div className="flex items-center justify-between gap-3 p-4 lg:hidden">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-[#1E293B] bg-white"
            >
              <FiMenu size={20} />
            </button>
            <Link
              to="/books"
              className="flex items-center gap-2 rounded-full border-2 border-[#1E293B] bg-white px-4 py-2 text-sm font-bold shadow-[2px_2px_0px_0px_#E2E8F0]"
            >
              <FiArrowLeft size={16} /> Rekomendasi
            </Link>
          </div>

          <header className="hidden items-center justify-between gap-6 px-8 pt-10 pb-6 lg:flex">
            <div>
              <h1 className="mb-1 text-3xl font-extrabold text-[#1E293B]">Riwayat eksplorasi buku</h1>
              <p className="font-medium text-[#64748B]">Waktu dan buku rekomendasi yang pernah Anda buka dalam satu sesi.</p>
            </div>
            <Link
              to="/books"
              className="flex shrink-0 items-center gap-2 rounded-full border-2 border-[#1E293B] bg-white px-5 py-2.5 text-sm font-bold shadow-[3px_3px_0px_0px_#1E293B] transition-all hover:-translate-y-0.5"
            >
              <FiArrowLeft size={16} /> Kembali ke rekomendasi
            </Link>
          </header>

          <div className="px-8 pb-2 pt-2 lg:hidden">
            <h1 className="mb-1 text-2xl font-extrabold text-[#1E293B]">Riwayat eksplorasi</h1>
            <p className="text-sm font-medium text-[#64748B]">Waktu dan buku yang dibuka per sesi.</p>
          </div>

          <div className="mx-auto max-w-6xl p-8 pt-4 lg:p-12 lg:pt-2">
            <BooksSessionHistory sessions={sessions} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default BooksExplorationHistory;
