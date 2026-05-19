import { FiSearch } from "react-icons/fi";

const CheckinAnalyzingPanel = () => {
  return (
    <div className="rounded-2xl border border-[#1E293B] bg-white p-12 text-center shadow-[8px_8px_0px_0px_#E2E8F0]">
      <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#8B5CF6]/30 bg-[#8B5CF6]/10">
        <FiSearch className="text-[#8B5CF6]" size={40} />
        <div className="absolute inset-0 rounded-full border-4 border-[#8B5CF6]/40 animate-ping" />
      </div>
      <h2 className="mb-2 text-xl font-bold">Menganalisis Ekspresi Anda...</h2>
      <p className="text-sm font-medium text-[#64748B]">Tunggu sebentar, sedang membaca mood wajahmu</p>
      <div className="mt-6 flex justify-center gap-2">
        <div className="h-2.5 w-2.5 animate-bounce rounded-full bg-[#8B5CF6]" />
        <div className="h-2.5 w-2.5 animate-bounce rounded-full bg-pink-400 [animation-delay:0.15s]" />
        <div className="h-2.5 w-2.5 animate-bounce rounded-full bg-amber-300 [animation-delay:0.3s]" />
      </div>
    </div>
  );
};

export default CheckinAnalyzingPanel;
