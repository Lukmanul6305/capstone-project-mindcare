import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { readAppData } from "../../lib/storage";

const apiBaseUrl = (import.meta.env.VITE_API_URL || "http://localhost:3000").replace(/\/+$/, "").replace(/\/api$/i, "");

const getAvatarSrc = (avatar) => {
  if (!avatar) return "";
  if (avatar.startsWith("http") || avatar.startsWith("data:")) return avatar;
  return `${apiBaseUrl}${avatar.startsWith("/") ? avatar : `/${avatar}`}`;
};

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

const disabledNavClass =
  "flex w-full cursor-not-allowed items-center gap-3 rounded-xl border-2 border-transparent px-4 py-2.5 text-left text-sm font-bold text-[#94A3B8] opacity-60";

const profileCardClass = (active) =>
  `flex w-full items-center gap-3 rounded-xl border-2 p-3 text-left transition-all ${
    active
      ? "border-[#1E293B] bg-[#A855F7] text-white shadow-[3px_3px_0px_0px_#1E293B]"
      : "border-[#E2E8F0] bg-white text-[#1E293B] hover:bg-[#F8FAFC]"
  }`;

const AppSidebar = ({ isOpen, onClose, activeMenu = "Dashboard", navigationLocked = false }) => {
  const [user, setUser] = useState(readAppData("user", {}));
  const initial = (user?.name || user?.email || "U").trim().charAt(0).toUpperCase();

  useEffect(() => {
    const syncUser = () => setUser(readAppData("user", {}));
    window.addEventListener("mindcare:user-updated", syncUser);
    return () => window.removeEventListener("mindcare:user-updated", syncUser);
  }, []);

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
            if (navigationLocked && !active) {
              return (
                <button key={item.label} type="button" className={`${disabledNavClass} ${item.spacingClass || ""}`} disabled>
                  {item.label}
                </button>
              );
            }
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
            if (navigationLocked && !active) {
              return (
                <button key={item.label} type="button" className={`${disabledNavClass} ${item.spacingClass || ""}`} disabled>
                  {item.label}
                </button>
              );
            }
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

        <div className="border-t border-[#E2E8F0] p-4">
          {navigationLocked && activeMenu !== "Profile" ? (
            <button type="button" className="flex w-full cursor-not-allowed items-center gap-3 rounded-xl border-2 border-[#E2E8F0] bg-[#F8FAFC] p-3 text-left text-[#94A3B8] opacity-70" disabled>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-[#CBD5E1] bg-white font-extrabold">
                {user?.avatar ? (
                  <img src={getAvatarSrc(user.avatar)} alt="Profile" className="h-full w-full object-cover" />
                ) : (
                  initial
                )}
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-bold">{user?.name || "Profile"}</p>
                <p className="truncate text-xs">{user?.email || "Buka profil"}</p>
              </div>
            </button>
          ) : (
            <Link to="/profile" className={profileCardClass(activeMenu === "Profile")} aria-label="Buka profile">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-[#1E293B] bg-white font-extrabold text-[#1E293B]">
                {user?.avatar ? (
                  <img src={getAvatarSrc(user.avatar)} alt="Profile" className="h-full w-full object-cover" />
                ) : (
                  initial
                )}
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-bold">{user?.name || "Profile"}</p>
                <p className="truncate text-xs opacity-80">{user?.email || "Lihat profil"}</p>
              </div>
            </Link>
          )}
        </div>
      </aside>
    </>
  );
};

export default AppSidebar;
