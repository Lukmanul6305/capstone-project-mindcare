import { FiClock } from "react-icons/fi";

const formatElapsed = (totalSeconds) => {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  if (h > 0) {
    return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
};

/**
 * Timer untuk sesi menjelajah rekomendasi buku (bukan durasi membaca fisik).
 * Tampil di samping aksi "Catat sesi".
 */
const BooksSessionTimer = ({ elapsedSeconds, timerActive, onRecordSession, disabledRecord }) => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <div
        className={`flex items-center gap-2 rounded-full border-2 border-[#1E293B] bg-white px-4 py-2 shadow-[3px_3px_0px_0px_#E2E8F0] ${
          timerActive ? "text-[#1E293B]" : "text-gray-400"
        }`}
      >
        <FiClock size={18} className={timerActive ? "text-[#8B5CF6]" : "text-gray-400"} aria-hidden />
        <span className="min-w-[4.5rem] font-mono text-sm font-bold tabular-nums" aria-live="polite">
          {timerActive ? formatElapsed(elapsedSeconds) : "--:--"}
        </span>
      </div>
      <button
        type="button"
        disabled={disabledRecord}
        onClick={onRecordSession}
        className="rounded-full border-2 border-[#1E293B] bg-emerald-400 px-5 py-2 text-sm font-bold text-white shadow-[3px_3px_0px_0px_#1E293B] transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
      >
        Catat sesi
      </button>
    </div>
  );
};

export default BooksSessionTimer;
