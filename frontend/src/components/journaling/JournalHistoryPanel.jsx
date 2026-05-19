import { FiTrash2 } from "react-icons/fi";

const formatDuration = (sec) => {
  if (sec == null || Number.isNaN(sec)) return null;
  const s = Math.max(0, Math.floor(sec));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const rs = s % 60;
  if (h > 0) return `${h} jam ${m} m`;
  if (m > 0) return `${m} m ${rs} dtk`;
  return `${rs} dtk`;
};

const JournalHistoryPanel = ({ journals, onDelete }) => {
  if (!journals.length) {
    return <p className="italic text-gray-400">Belum ada riwayat jurnal.</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {journals.map((journal, index) => (
        <div key={`${journal.id || journal.date}-${index}`} className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm relative group">
          {onDelete && (
            <button
              onClick={() => onDelete(journal.id)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
              title="Hapus Jurnal"
            >
              <FiTrash2 size={18} />
            </button>
          )}
          <div className="mb-2 flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase text-[#8B5CF6]">
            <span>{new Date(journal.date).toLocaleDateString()}</span>
            {formatDuration(journal.durationSeconds) ? (
              <span className="rounded-full bg-violet-50 px-2 py-0.5 text-[#8B5CF6]">
                {formatDuration(journal.durationSeconds)}
              </span>
            ) : null}
          </div>
          <h3 className="mb-2 pr-6 text-lg font-bold">{journal.title}</h3>
          <p className="line-clamp-3 text-sm text-gray-500">{journal.content}</p>
        </div>
      ))}
    </div>
  );
};

export default JournalHistoryPanel;
