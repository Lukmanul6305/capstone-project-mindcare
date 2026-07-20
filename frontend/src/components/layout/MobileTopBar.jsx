import { FiMenu } from "react-icons/fi";

const MobileTopBar = ({ title = "MindCare", onMenuClick }) => (
    <header
        className="sticky top-0 z-40 flex items-center gap-3 border-b border-[#E2E8F0] bg-white/95 px-4 py-3 backdrop-blur-sm lg:hidden"
        style={{ paddingTop: "max(0.75rem, env(safe-area-inset-top))" }}
    >
        <button
            onClick={onMenuClick}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 border-[#1E293B] bg-white shadow-[3px_3px_0px_0px_#1E293B] transition-all active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#1E293B]"
            aria-label="Buka menu"
        >
            <FiMenu size={20} />
        </button>
        <h1 className="truncate text-lg font-extrabold text-[#1E293B]">{title}</h1>
    </header>
);

export default MobileTopBar;