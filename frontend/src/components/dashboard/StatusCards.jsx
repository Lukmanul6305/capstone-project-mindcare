import { FiActivity, FiCheckCircle, FiSmile, FiTrendingDown, FiZap } from "react-icons/fi";

const chipClass = "rounded-full px-3 py-1 text-xs font-extrabold";

const toFiniteNumber = (value) => {
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
};

const formatPercent = (value) => {
  const percent = toFiniteNumber(value);
  if (percent === null) return "--";

  const rounded = Math.round(percent * 10) / 10;
  return `${Number.isInteger(rounded) ? rounded : rounded.toFixed(1)}%`;
};

const formatMinutes = (value) => {
  const minutes = toFiniteNumber(value);
  if (minutes === null || minutes <= 0) return "--";

  const roundedMinutes = Math.max(1, Math.round(minutes));
  if (roundedMinutes < 60) return `${roundedMinutes} menit`;

  const hours = Math.floor(roundedMinutes / 60);
  const remainingMinutes = roundedMinutes % 60;

  return remainingMinutes ? `${hours} jam ${remainingMinutes} menit` : `${hours} jam`;
};

const formatActivity = (value) => {
  const labels = {
    membaca: "Membaca",
    journaling: "Journaling",
    olahraga: "Olahraga",
  };

  return labels[value] || "Aktivitas";
};

const getStressTone = (category = "") => {
  const normalized = String(category).toLowerCase();
  if (normalized.includes("sangat rendah")) return "text-emerald-700 bg-emerald-100 border-emerald-200";
  if (normalized === "rendah") return "text-teal-700 bg-teal-100 border-teal-200";
  if (normalized === "sedang") return "text-amber-700 bg-amber-100 border-amber-200";
  if (normalized === "tinggi") return "text-orange-700 bg-orange-100 border-orange-200";
  if (normalized.includes("sangat tinggi")) return "text-red-700 bg-red-100 border-red-200";
  return "text-[#64748B] bg-[#F1F5F9] border-[#E2E8F0]";
};

const getStressBarColor = (category = "") => {
  const normalized = String(category).toLowerCase();
  if (normalized.includes("sangat rendah")) return "bg-emerald-500";
  if (normalized === "rendah") return "bg-teal-500";
  if (normalized === "sedang") return "bg-amber-400";
  if (normalized === "tinggi") return "bg-orange-500";
  if (normalized.includes("sangat tinggi")) return "bg-red-500";
  return "bg-[#8B5CF6]";
};

const StatusCards = ({ stressProgress, moodToday, hasCheckIn }) => {
  const state = stressProgress?.state || null;
  const summary = stressProgress?.summary || null;
  const recentLogs = Array.isArray(stressProgress?.recent_logs) ? stressProgress.recent_logs : [];
  const latestLog = recentLogs[0] || null;
  const currentStress = toFiniteNumber(state?.stress_saat_ini_percent);
  const totalReduction = toFiniteNumber(summary?.total_reduction_percent);
  const totalDurationMinutes = toFiniteNumber(summary?.total_duration_minutes);
  const totalActivities = toFiniteNumber(summary?.total_activities);
  const hasStressState = currentStress !== null;
  const hasReductionSummary = totalReduction !== null;
  const progressWidth = hasStressState ? Math.min(100, Math.max(0, currentStress)) : 0;
  const category = state?.kategori_stress || "Belum ada data";
  const trendText = hasStressState
    ? !hasReductionSummary
      ? "Data penurunan belum tersedia"
      : totalReduction > 0
      ? `Total turun ${formatPercent(totalReduction)} dari baseline`
      : "Belum turun dari baseline"
    : "Belum ada baseline stress";
  const latestActivityText = latestLog
    ? `${formatActivity(latestLog.aktivitas)} - ${formatMinutes(latestLog.durasi_menit)} - turun ${formatPercent(latestLog.penurunan_percent)}`
    : "Belum ada aktivitas tersimpan";

  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-[2fr_1fr]">
      <section className="rounded-xl border-2 border-[#1E293B] bg-white p-6 shadow-[4px_4px_0px_0px_#E2E8F0]">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-extrabold text-[#1E293B]">Tingkat Stres Saat Ini</h3>
            <p className="mt-2 max-w-2xl text-sm font-medium leading-relaxed text-[#64748B]">
              Dihitung dari baseline kuesioner terakhir dan aktivitas setelah baseline tersebut.
            </p>
          </div>
          <span className={`${chipClass} border ${getStressTone(category)}`}>
            {category}
          </span>
        </div>

        <div className="mt-7 flex flex-wrap items-end justify-between gap-5">
          <div className="flex items-end gap-2">
            <span className="text-6xl font-extrabold leading-none text-[#1E293B]">
              {formatPercent(state?.stress_saat_ini_percent)}
            </span>
            <span className="pb-1 text-sm font-bold uppercase tracking-wide text-[#64748B]">
              stress
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm font-bold text-emerald-700">
            <FiTrendingDown size={18} />
            {trendText}
          </div>
        </div>

        <div className="mt-6 h-4 overflow-hidden rounded-full border border-[#CBD5E1] bg-[#F1F5F9]">
          <div
            className={`h-full rounded-full ${getStressBarColor(category)} transition-all duration-500`}
            style={{ width: `${progressWidth}%` }}
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow={Math.round(progressWidth)}
          />
        </div>
        <div className="mt-2 flex items-center justify-between text-xs font-bold text-[#94A3B8]">
          <span>0%</span>
          <span>100%</span>
        </div>

        <p className="mt-4 text-sm font-bold text-[#475569]">
          Aktivitas terakhir: {latestActivityText}
        </p>

        {state?.keterangan_stress ? (
          <p className="mt-4 text-sm font-medium leading-relaxed text-[#475569]">
            {state.keterangan_stress}
          </p>
        ) : null}

        <div className="mt-6 grid grid-cols-1 gap-4 border-t border-[#E2E8F0] pt-5 text-sm sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-bold text-[#64748B]">Baseline Kuesioner</p>
            <p className="mt-1 text-xl font-extrabold text-[#1E293B]">
              {formatPercent(state?.stress_awal_percent)}
            </p>
          </div>
          <div>
            <p className="font-bold text-[#64748B]">Stress Terkini</p>
            <p className="mt-1 text-xl font-extrabold text-[#1E293B]">
              {formatPercent(state?.stress_saat_ini_percent)}
            </p>
          </div>
          <div>
            <p className="font-bold text-[#64748B]">Total Penurunan</p>
            <p className="mt-1 text-xl font-extrabold text-[#1E293B]">
              {formatPercent(totalReduction)}
            </p>
          </div>
          <div>
            <p className="font-bold text-[#64748B]">Durasi Aktivitas</p>
            <p className="mt-1 text-xl font-extrabold text-[#1E293B]">
              {formatMinutes(totalDurationMinutes)}
            </p>
            <p className="mt-1 font-bold text-[#94A3B8]">
              {totalActivities > 0 ? `${totalActivities} aktivitas` : "Belum ada log"}
            </p>
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

        <div className="mt-8 space-y-4 border-t border-[#E2E8F0] pt-5">
          <div className="flex items-center gap-2 text-sm font-semibold text-[#334155]">
            <FiCheckCircle size={16} className={hasCheckIn ? "text-emerald-500" : "text-[#94A3B8]"} />
            Status check-in {hasCheckIn ? "sudah tercatat." : "belum dilakukan."}
          </div>
          <div className="flex items-center gap-2 text-sm text-[#64748B]">
            <FiActivity size={16} className="text-[#8B5CF6]" />
            {hasStressState ? `Kategori stress: ${category}.` : "Isi kuesioner untuk memulai baseline stress."}
          </div>
          <div className="flex items-center gap-2 text-sm text-[#64748B]">
            <FiZap size={16} className="text-[#F59E0B]" />
            Aktivitas tersimpan akan memperbarui angka stress.
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatusCards;
