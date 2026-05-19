const ExerciseSummaryPanel = ({ durationText, distance, onBack }) => {
  return (
    <div className="mx-auto max-w-3xl rounded-3xl border-2 border-[#1E293B] bg-white p-8 text-center shadow-[8px_8px_0px_0px_#E2E8F0]">
      <h2 className="mb-4 text-2xl font-extrabold">Selesai! 🎉</h2>
      <div className="mb-6 grid grid-cols-2 gap-4">
        <div className="rounded-2xl bg-[#F1F5F9] p-4">
          <p className="text-xl font-bold">{durationText}</p>
          <p className="text-xs">Durasi</p>
        </div>
        <div className="rounded-2xl bg-[#F1F5F9] p-4">
          <p className="text-xl font-bold">{distance.toFixed(2)}km</p>
          <p className="text-xs">Jarak</p>
        </div>
      </div>
      <button
        onClick={onBack}
        className="rounded-full border-2 border-[#1E293B] bg-[#8B5CF6] px-8 py-3 font-bold text-white shadow-[4px_4px_0px_0px_#1E293B]"
      >
        Kembali
      </button>
    </div>
  );
};

export default ExerciseSummaryPanel;
