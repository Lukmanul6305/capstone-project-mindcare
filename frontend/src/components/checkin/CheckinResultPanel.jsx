import { Link } from "react-router-dom";
import { FiActivity, FiHome } from "react-icons/fi";

const CheckinResultPanel = ({ result }) => {
  return (
    <div className="mx-auto max-w-lg rounded-2xl border border-[#1E293B] bg-white p-10 text-center shadow-[8px_8px_0px_0px_#E2E8F0]">
      <div className="mb-4 text-[5rem] leading-none">{result.emoji}</div>
      <div
        className="mb-4 inline-block rounded-full border-2 border-[#1E293B] px-4 py-1.5 text-xs font-bold text-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]"
        style={{ backgroundColor: result.color }}
      >
        {result.label}
      </div>
      <h2 className="mb-2 text-2xl font-extrabold">{result.title}</h2>
      <p className="mb-2 text-sm text-[#64748B]">{result.desc}</p>
      <p className="mb-8 text-xs font-bold text-[#8B5CF6]">Akurasi: {result.confidence}%</p>

      <div className="flex justify-center gap-4">
        <Link
          to="/dashboard"
          className="flex items-center gap-2 rounded-full border-2 border-[#1E293B] bg-[#8B5CF6] px-6 py-3 text-sm font-bold text-white shadow-[3px_3px_0px_0px_#1E293B] transition-all hover:-translate-y-0.5"
        >
          <FiHome size={16} /> Ke Dashboard
        </Link>
        <a
          href="/stress-check.html"
          className="flex items-center gap-2 rounded-full border-2 border-[#1E293B] bg-white px-6 py-3 text-sm font-bold text-[#1E293B] shadow-[3px_3px_0px_0px_#E2E8F0] transition-all hover:-translate-y-0.5"
        >
          <FiActivity size={16} /> Cek Stress
        </a>
      </div>
    </div>
  );
};

export default CheckinResultPanel;
