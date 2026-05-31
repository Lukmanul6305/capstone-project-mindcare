import { FiBarChart2 } from "react-icons/fi";

const moodValuesMap = {
  angry: 1,
  sad: 2,
  neutral: 3,
  surprised: 4,
  happy: 5,
};

const moodColors = {
  happy: "#34D399",
  surprised: "#F59E0B",
  neutral: "#8B5CF6",
  sad: "#F472B6",
  angry: "#EF4444",
};

const moodEmoji = {
  happy: "\uD83D\uDE0A",
  surprised: "\uD83D\uDE32",
  neutral: "\uD83D\uDE10",
  sad: "\uD83D\uDE22",
  angry: "\uD83D\uDE20",
};

const MoodChartCard = ({ moodRows = [] }) => {
  const rows = Array.isArray(moodRows) ? moodRows : [];

  return (
    <section className="rounded-xl border-2 border-[#1E293B] bg-white p-6 shadow-[4px_4px_0px_0px_#E2E8F0]">
      <h3 className="mb-2 flex items-center gap-2 text-lg font-extrabold">
        <FiBarChart2 className="text-[#8B5CF6]" size={20} />
        Mood 7 Hari Terakhir
      </h3>
      <p className="mb-6 text-sm font-medium text-[#64748B]">
        Ringkasan mood harian dari check-in dan kuisioner selama 7 hari terakhir.
      </p>

      <div className="h-64">
        <div className="flex h-full items-end justify-between gap-3">
          {rows.map((item) => {
            const moodKey = item?.moodKey || null;
            const value = moodKey ? moodValuesMap[moodKey] || 0 : 0;
            const color = moodKey ? moodColors[moodKey] || "#8B5CF6" : "#E2E8F0";
            const emoji = moodKey ? moodEmoji[moodKey] || "" : "";

            return (
              <div key={item.dateKey || item.dayLabel} className="flex h-full flex-1 flex-col justify-end">
                <div className="mb-2 flex min-h-8 items-center justify-center text-sm">{emoji}</div>
                <div
                  className="w-full rounded-md border-2 border-[#1E293B] transition-all"
                  style={{
                    backgroundColor: color,
                    height: `${(value / 5) * 75}%`,
                    minHeight: value ? "24px" : "8px",
                  }}
                />
                <p className="mt-2 text-center text-xs font-bold text-[#64748B]">{item.dayLabel}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MoodChartCard;
