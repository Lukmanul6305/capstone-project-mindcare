import { FiBook, FiClock } from "react-icons/fi";

const formatDurationLabel = (sec) => {
  if (sec == null || Number.isNaN(sec)) return "—";
  const s = Math.max(0, Math.floor(sec));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const rs = s % 60;
  if (h > 0) return `${h} jam ${m} m`;
  if (m > 0) return `${m} m ${rs} dtk`;
  return `${rs} dtk`;
};

const BooksSessionHistory = ({ sessions }) => {
  if (!sessions.length) {
    return (
      <div className="rounded-3xl border-2 border-dashed border-[#CBD5E1] bg-white/40 p-8 text-center">
        <p className="font-medium text-[#64748B]">
          Belum ada sesi yang dicatat. Di halaman rekomendasi, jelajahi buku lalu tekan <span className="font-semibold text-[#1E293B]">Catat sesi</span>.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {sessions.map((session) => {
        const books = Array.isArray(session.exploredBooks) ? session.exploredBooks : [];
        return (
          <article
            key={session.id}
            className="rounded-3xl border-2 border-[#1E293B]/15 bg-white p-6 shadow-sm"
          >
            <div className="mb-4 flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#8B5CF6]/15">
                <FiClock className="text-[#8B5CF6]" size={20} aria-hidden />
              </div>
              <div className="min-w-0 flex-1">
                <p className="mb-0.5 text-[10px] font-bold uppercase tracking-wide text-[#8B5CF6]">Waktu dicatat</p>
                <p className="text-sm font-bold text-[#1E293B]">
                  {new Date(session.date).toLocaleString("id-ID", {
                    weekday: "short",
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
                <p className="mt-2 text-xs font-semibold text-[#64748B]">
                  Durasi eksplorasi:{" "}
                  <span className="font-bold text-[#1E293B]">{formatDurationLabel(session.durationSeconds)}</span>
                </p>
              </div>
            </div>

            <div className="border-t border-[#E2E8F0] pt-4">
              <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#64748B]">
                <FiBook size={14} className="text-[#8B5CF6]" aria-hidden />
                Buku rekomendasi yang dibuka
              </p>
              {books.length ? (
                <ul className="max-h-48 space-y-2 overflow-y-auto pr-1 text-sm">
                  {books.map((b) => (
                    <li
                      key={`${session.id}-${b.bookId}`}
                      className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-2"
                    >
                      <p className="font-bold text-[#1E293B]">{b.title}</p>
                      <p className="text-xs font-medium text-[#64748B]">{b.author}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm font-medium italic text-[#94A3B8]">
                  Tidak ada detail buku (sesi lama atau Anda hanya mengganti filter tanpa membuka kartu buku).
                </p>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default BooksSessionHistory;
