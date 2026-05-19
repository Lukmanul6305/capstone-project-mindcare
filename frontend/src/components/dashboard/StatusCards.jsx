import { FiActivity, FiSmile } from "react-icons/fi";

const chipClass = "rounded-full px-3 py-1 text-xs font-extrabold";

const StatusCards = ({ stressScore, stressTrend, moodToday, hasCheckIn }) => {
  const trendStyle =
    stressTrend === "up"
      ? "text-red-500 bg-red-500/10"
      : stressTrend === "flat"
      ? "text-[#64748B] bg-[#F1F5F9]"
      : "text-emerald-500 bg-emerald-500/10";

  const trendText = stressTrend === "up" ? "↗ Naik" : stressTrend === "flat" ? "→ Stabil" : "↘ Turun";

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div className="rounded-xl border-2 border-[#1E293B] bg-white p-5">
        <div className="mb-8 flex items-start justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#8B5CF6]/10">
            <FiActivity className="text-[#8B5CF6]" size={20} />
          </div>
          <span className={`${chipClass} ${trendStyle}`}>{trendText}</span>
        </div>
        <p className="text-2xl font-extrabold">{stressScore ?? "--"}</p>
        <p className="mt-1 text-sm font-medium text-[#64748B]">Level Stres</p>
      </div>

      <div className="rounded-xl border-2 border-[#1E293B] bg-white p-5">
        <div className="mb-8 flex items-start justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-400/10">
            <FiSmile className="text-pink-400" size={20} />
          </div>
          <span className={`${chipClass} ${hasCheckIn ? "text-emerald-500 bg-emerald-500/10" : "text-[#64748B] bg-[#F1F5F9]"}`}>
            {hasCheckIn ? "Sudah" : "Belum"}
          </span>
        </div>
        <p className="text-2xl font-extrabold">{moodToday || "--"}</p>
        <p className="mt-1 text-sm font-medium text-[#64748B]">Mood Hari Ini</p>
      </div>
    </div>
  );
};

export default StatusCards;
