import { FiGift } from "react-icons/fi";

const scoreCategories = [
  { key: "stres", label: "Frekuensi Stres", color: "bg-[#8B5CF6]" },
  { key: "tidur", label: "Kualitas Tidur", color: "bg-pink-400" },
  { key: "fokus", label: "Kemampuan Fokus", color: "bg-amber-400" },
  { key: "cemas", label: "Tingkat Kecemasan", color: "bg-emerald-400" },
  { key: "mood", label: "Mood Keseluruhan", color: "bg-[#1E293B]" },
];

const RegisterStep4Success = ({ scoreData }) => {
  const overall = scoreData?.overall ?? 0;
  const scores = scoreData?.scores ?? {};

  const labelInfo =
    overall >= 70
      ? { text: "Stres Rendah", cls: "bg-emerald-400 text-[#1E293B]" }
      : overall >= 40
      ? { text: "Stres Sedang", cls: "bg-amber-300 text-[#1E293B]" }
      : { text: "Stres Tinggi", cls: "bg-red-500 text-white" };

  return (
    <div className="text-center py-4">
      <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border-4 border-[#1E293B] bg-emerald-400 shadow-[4px_4px_0px_0px_#1E293B]">
        <FiGift size={42} className="text-[#1E293B]" />
      </div>

      <div className="inline-block rounded-full border-2 border-emerald-400/40 bg-emerald-400/20 px-4 py-1 text-sm font-bold text-emerald-700">
        Pendaftaran Berhasil
      </div>
      <h1 className="mt-3 text-2xl md:text-3xl font-extrabold text-[#1E293B]">Selamat Datang!</h1>
      <p className="mt-1 text-sm font-medium text-[#64748B]">Baseline score kamu telah disimpan</p>

      <div className="mt-6 rounded-3xl border-2 border-[#1E293B] bg-slate-100/60 p-6 text-left">
        <h3 className="mb-4 text-center text-lg font-bold text-[#1E293B]">Hasil Baseline Score</h3>

        <div className="text-center mb-4">
          <p className="text-4xl font-extrabold text-[#1E293B]">{overall}</p>
          <p className="text-xs font-bold text-[#64748B]">/100</p>
        </div>

        <div className="mb-5 text-center">
          <span
            className={`inline-block rounded-full border-2 border-[#1E293B] px-4 py-1.5 text-sm font-bold shadow-[4px_4px_0px_0px_#1E293B] ${labelInfo.cls}`}
          >
            {labelInfo.text}
          </span>
        </div>

        <div className="space-y-3">
          {scoreCategories.map((item) => {
            const value = scores[item.key] ?? 0;
            return (
              <div key={item.key}>
                <div className="mb-1 flex justify-between text-sm">
                  <span className="text-[#64748B]">{item.label}</span>
                  <span className="font-bold text-[#1E293B]">{value}/5</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full border border-[#1E293B]/30 bg-slate-200">
                  <div className={`h-full rounded-full ${item.color}`} style={{ width: `${(value / 5) * 100}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RegisterStep4Success;
