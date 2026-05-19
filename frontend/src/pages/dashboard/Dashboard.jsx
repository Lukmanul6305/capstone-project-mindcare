import { useMemo, useState } from "react";
import { FiMenu } from "react-icons/fi";

import ActivityGrid from "../../components/dashboard/ActivityGrid";
import AppSidebar from "../../components/layout/AppSidebar";
import MoodChartCard from "../../components/dashboard/MoodChartCard";
import StatusCards from "../../components/dashboard/StatusCards";
import WelcomeCard from "../../components/dashboard/WelcomeCard";
import { readAppData, writeAppData } from "../../lib/storage";

const seedDemoData = () => {
  const moods = readAppData("moods", []);
  if (!moods || moods.length === 0) {
    const demoMoods = [];
    const moodTypes = ["happy", "neutral", "happy", "sad", "neutral", "happy"];
    for (let i = 5; i >= 0; i -= 1) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      if (i > 0) demoMoods.push({ date: date.toISOString(), mood: moodTypes[5 - i] });
    }
    writeAppData("moods", demoMoods);
  }

  const checks = readAppData("stressChecks", []);
  if (!checks || checks.length === 0) {
    const d1 = new Date();
    d1.setDate(d1.getDate() - 7);
    const d2 = new Date();
    d2.setDate(d2.getDate() - 2);
    writeAppData("stressChecks", [
      { date: d1.toISOString(), score: 55, level: "high" },
      { date: d2.toISOString(), score: 42, level: "moderate" },
    ]);
  }
};

const moodToEmoji = {
  happy: "😊",
  neutral: "😐",
  sad: "😢",
  angry: "😠",
  surprised: "😲",
};

const Dashboard = () => {
  seedDemoData();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const user = readAppData("user", {});
  const moods = readAppData("moods", []);
  const stressChecks = readAppData("stressChecks", []);

  const moodInfo = useMemo(() => {
    const today = new Date().toDateString();
    const todayMood = moods.find((item) => new Date(item.date).toDateString() === today);
    return {
      hasCheckIn: Boolean(todayMood),
      moodToday: todayMood ? moodToEmoji[todayMood.mood] || "😊" : "--",
    };
  }, [moods]);

  const stressInfo = useMemo(() => {
    if (!stressChecks.length) return { score: "--", trend: "flat" };
    const latest = stressChecks[stressChecks.length - 1];
    if (stressChecks.length === 1) return { score: latest.score, trend: "down" };
    const prev = stressChecks[stressChecks.length - 2];
    if (latest.score > prev.score) return { score: latest.score, trend: "up" };
    if (latest.score < prev.score) return { score: latest.score, trend: "down" };
    return { score: latest.score, trend: "flat" };
  }, [stressChecks]);

  return (
    <div className="min-h-screen bg-[#F4F5F9] text-[#1E293B]">
      <div className="flex min-h-screen">
        <AppSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} activeMenu="Dashboard" />

        <main className="flex-1 min-h-screen">
          <div className="p-4 lg:hidden">
            <button
              onClick={() => setSidebarOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-[#1E293B] bg-white shadow-[4px_4px_0px_0px_#1E293B]"
            >
              <FiMenu size={20} />
            </button>
          </div>

          <div className="mx-auto max-w-5xl space-y-8 p-6 lg:p-10">
            <WelcomeCard userName={user.name} />
            <StatusCards
              stressScore={stressInfo.score}
              stressTrend={stressInfo.trend}
              moodToday={moodInfo.moodToday}
              hasCheckIn={moodInfo.hasCheckIn}
            />
            <ActivityGrid />
            <MoodChartCard moods={moods} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
