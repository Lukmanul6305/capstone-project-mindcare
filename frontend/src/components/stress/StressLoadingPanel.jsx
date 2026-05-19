import { FiLoader } from "react-icons/fi";

const StressLoadingPanel = () => {
  return (
    <div className="mx-auto max-w-3xl rounded-3xl border-2 border-[#1E293B] bg-white p-16 text-center shadow-[6px_6px_0px_0px_#CBD5E1]">
      <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#F3E8FF]">
        <FiLoader className="animate-spin text-[#9333EA]" size={40} />
      </div>
      <h2 className="mb-2 text-2xl font-bold">AI Sedang Menganalisis...</h2>
      <p className="text-sm font-medium text-[#64748B]">Menghasilkan rekomendasi personal berdasarkan jawaban Anda</p>
    </div>
  );
};

export default StressLoadingPanel;
