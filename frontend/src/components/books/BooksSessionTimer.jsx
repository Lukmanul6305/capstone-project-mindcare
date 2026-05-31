/**
 * Aksi untuk mencatat sesi eksplorasi buku.
 */
const BooksSessionTimer = ({ onRecordSession, disabledRecord }) => {
  return (
    <div className="flex flex-wrap items-center gap-3">
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
