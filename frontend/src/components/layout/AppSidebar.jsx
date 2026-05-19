import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiRequest, clearAuth } from "../../lib/api";

const primaryMenus = [
  { label: "Dashboard", to: "/dashboard", spacingClass: "mb-1" },
  { label: "Daily Check-in", to: "/checkin", spacingClass: "mb-1" },
  { label: "Cek Stress", to: "/stress-check", spacingClass: "mb-6" },
];

const activityMenus = [
  { label: "Journaling", to: "/journaling", spacingClass: "mb-1" },
  { label: "Olahraga", to: "/exercise", spacingClass: "mb-1" },
  { label: "Rekomendasi Buku", to: "/books" },
];

const navClass = (active) =>
  `flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-bold border-2 transition-all ${
    active
      ? "bg-[#A855F7] text-white border-[#1E293B] shadow-[3px_3px_0px_0px_#1E293B]"
      : "border-transparent text-[#1E293B] hover:bg-[#F1F5F9]"
  }`;

const AppSidebar = ({ isOpen, onClose, activeMenu = "Dashboard" }) => {
  const navigate = useNavigate();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const handleLogout = async () => {
    try {
      await apiRequest("/api/auth/logout", { method: "DELETE" });
    } catch (error) {
      console.error("Logout failed", error);
    } finally {
      clearAuth();
      navigate("/");
    }
  };

  return (
    <>
      {isOpen ? <button className="fixed inset-0 z-30 bg-black/20 lg:hidden" onClick={onClose} /> : null}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-64 border-r border-[#E2E8F0] bg-white flex flex-col transition-transform duration-300 lg:sticky lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          <Link to="/dashboard" className="block w-full">
            <img src="/Logo Mindcare.png" alt="MindCare" className="w-40 object-contain" />
          </Link>
        </div>

        <nav className="mt-2 flex-1 space-y-2 overflow-y-auto p-4">
          <span className="mb-2 block px-4 text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
            Menu Utama
          </span>
          {primaryMenus.map((item) => {
            const active = item.label === activeMenu;
            return item.to ? (
              <Link key={item.label} to={item.to} className={`${navClass(active)} ${item.spacingClass || ""}`}>
                {item.label}
              </Link>
            ) : (
              <a key={item.label} href={item.href} className={`${navClass(active)} ${item.spacingClass || ""}`}>
                {item.label}
              </a>
            );
          })}

          <span className="mb-2 mt-6 block px-4 text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
            Aktivitas
          </span>
          {activityMenus.map((item) => {
            const active = item.label === activeMenu;
            return item.to ? (
              <Link key={item.label} to={item.to} className={`${navClass(active)} ${item.spacingClass || ""}`}>
                {item.label}
              </Link>
            ) : (
              <a key={item.label} href={item.href} className={`${navClass(active)} ${item.spacingClass || ""}`}>
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="mt-auto p-6">
          <button
            onClick={() => setShowLogoutConfirm(true)}
            className="inline-block w-full rounded-[12px] border-2 border-[#1E293B] bg-[#A855F7] py-3 text-center font-extrabold text-white shadow-[4px_4px_0px_0px_#1E293B] transition-all duration-200 hover:-translate-y-0.5"
          >
            LOGOUT
          </button>
        </div>
      </aside>

      {showLogoutConfirm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-[24px] border-4 border-[#1E293B] bg-[#FFFDF5] p-6 shadow-[8px_8px_0px_0px_#1E293B] text-center">
            <h3 className="mb-2 text-2xl font-extrabold text-[#1E293B]">Yakin ingin keluar?</h3>
            <p className="mb-6 font-medium text-[#64748B]">
              Anda harus login kembali untuk mengakses fitur MindCare.
            </p>
            
            <div className="flex gap-4">
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className="flex-1 rounded-[12px] border-2 border-[#1E293B] bg-white py-3 text-center font-bold text-[#1E293B] shadow-[4px_4px_0px_0px_#1E293B] transition-all hover:-translate-y-0.5"
              >
                Batal
              </button>
              <button
                onClick={handleLogout}
                className="flex-1 rounded-[12px] border-2 border-[#1E293B] bg-[#F43F5E] py-3 text-center font-bold text-white shadow-[4px_4px_0px_0px_#1E293B] transition-all hover:-translate-y-0.5"
              >
                Ya, Keluar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AppSidebar;
