import { FiClock, FiEdit3 } from "react-icons/fi";

const baseBtn =
  "flex items-center gap-2 rounded-full border-2 px-6 py-2.5 text-sm font-bold transition-all";

const JournalTabs = ({ activeTab, onChange }) => {
  return (
    <div className="mb-8 flex gap-3">
      <button
        onClick={() => onChange("write")}
        className={`${baseBtn} ${
          activeTab === "write"
            ? "border-[#8B5CF6] bg-[#8B5CF6] text-white"
            : "border-gray-200 bg-white text-gray-500"
        }`}
      >
        <FiEdit3 size={16} /> Tulis Jurnal Baru
      </button>
      <button
        onClick={() => onChange("history")}
        className={`${baseBtn} ${
          activeTab === "history"
            ? "border-[#8B5CF6] bg-[#8B5CF6] text-white"
            : "border-gray-200 bg-white text-gray-500"
        }`}
      >
        <FiClock size={16} /> Riwayat
      </button>
    </div>
  );
};

export default JournalTabs;
