import { FiList, FiLock, FiPlay } from "react-icons/fi";

const StressIntroPanel = ({ onStart }) => {
  return (
    <div className="mx-auto max-w-3xl rounded-3xl border-2 border-[#1E293B] bg-white p-10 text-center shadow-[6px_6px_0px_0px_#CBD5E1]">
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-[#9333EA]/20 bg-[#F3E8FF]">
        <FiList className="text-[#9333EA]" size={32} />
      </div>
      <h2 className="mb-4 text-2xl font-extrabold">Kuesioner Tingkat Stres</h2>
      <p className="mx-auto mb-8 max-w-md text-sm font-medium text-[#64748B]">
        Jawab 10 pertanyaan berikut untuk mengukur tingkat stres kamu. Jawab dengan jujur untuk hasil yang
        akurat.
      </p>

      <div className="mb-8 flex flex-wrap justify-center gap-4 text-sm">
        <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-[#F8FAFC] px-5 py-2 font-bold">
          <FiList size={16} className="text-[#9333EA]" /> 10 pertanyaan
        </div>
      </div>

      <p className="mb-8 flex items-center justify-center gap-1 text-[11px] text-gray-400">
        <FiLock size={12} /> Data kamu bersifat rahasia dan hanya digunakan untuk analisis pribadi.
      </p>

      <button
        onClick={onStart}
        className="mx-auto flex items-center gap-2 rounded-xl border-2 border-[#1E293B] bg-[#9333EA] px-8 py-3.5 font-bold text-white shadow-[4px_4px_0px_0px_#1E293B] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#1E293B]"
      >
        <FiPlay size={18} />
        Mulai Kuesioner
      </button>
    </div>
  );
};

export default StressIntroPanel;
