import { FiCheckCircle, FiSmile, FiZap } from "react-icons/fi";

const chipClass = "rounded-full px-3 py-1 text-xs font-extrabold";

const formatWeekLabel = (date) =>
  date.toLocaleDateString("id-ID", {
    weekday: "short",
  });

const StatusCards = ({ streakInfo, moodToday, hasCheckIn }) => {
  const weekItems = Array.isArray(streakInfo?.weekItems) ? streakInfo.weekItems : [];
  const currentStreak = Number(streakInfo?.current || 0);
  const longestStreak = Number(streakInfo?.longest || 0);

  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-[2fr_1fr]">
      <section className="rounded-xl border-2 border-[#1E293B] bg-white p-6 shadow-[4px_4px_0px_0px_#E2E8F0]">
        <h3 className="text-3xl font-extrabold text-[#1E293B]">Streak</h3>
        <p className="mt-2 text-lg leading-relaxed text-[#475569]">
          Bukan cuma angka, streak bantu Anda membangun kebiasaan pemulihan yang solid dan berkelanjutan.
        </p>

        <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
          <div className="flex items-end gap-2">
            <span className="text-6xl font-extrabold leading-none text-[#1E293B]">{currentStreak}</span>
            <span className="pb-1 text-4xl text-[#F59E0B]" aria-hidden>
              ⚡
            </span>
          </div>
          <p className="flex items-center gap-2 text-3xl font-extrabold text-[#64748B]">
            <span aria-hidden>🔥</span>
            <span className="text-xl font-bold">Streak Terlama</span>
            <span className="text-[#1E293B]">{longestStreak}</span>
          </p>
        </div>

        <div className="mt-7 rounded-xl bg-[#F8FAFC] p-4">
          <div className="grid grid-cols-7 gap-2">
            {weekItems.map((item) => (
              <div key={item.dateKey} className="flex flex-col items-center gap-2 text-center">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full border-4 text-xl font-extrabold transition-all ${
                    item.active
                      ? "border-[#F59E0B] bg-[#F59E0B] text-white"
                      : "border-[#D1D5DB] bg-white text-[#D1D5DB]"
                  }`}
                  title={item.fullDateLabel}
                >
                  ⚡
                </div>
                <span className={`text-sm font-bold ${item.active ? "text-[#334155]" : "text-[#64748B]"}`}>
                  {formatWeekLabel(item.date)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-xl border-2 border-[#1E293B] bg-white p-5">
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

        <div className="mt-8 space-y-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-[#334155]">
            <FiCheckCircle size={16} className={hasCheckIn ? "text-emerald-500" : "text-[#94A3B8]"} />
            Status check-in {hasCheckIn ? "sudah tercatat." : "belum dilakukan."}
          </div>
          <div className="flex items-center gap-2 text-sm text-[#64748B]">
            <FiZap size={16} className="text-[#8B5CF6]" />
            Pertahankan streak dengan aktivitas kecil setiap hari.
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatusCards;

