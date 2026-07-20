import { useState } from "react";

import ActivityGrid from "../../components/dashboard/ActivityGrid";
import MoodChartCard from "../../components/dashboard/MoodChartCard";
import StatusCards from "../../components/dashboard/StatusCards";
import WelcomeCard from "../../components/dashboard/WelcomeCard";
import AppSidebar from "../../components/layout/AppSidebar";
import MobileTopBar from "../../components/layout/MobileTopBar";
import { useAuthUser } from "../../hooks/useAuthUser";
import { useDashboardData } from "../../hooks/useDashboardData";
import { useMoodInsights } from "../../hooks/useMoodInsights";

const DashboardLoader = () => (
  <div className="flex min-h-screen items-center justify-center bg-[#F4F5F9]">
    <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#8B5CF6] border-t-transparent" />
  </div>
);

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user } = useAuthUser();
  const { stressScans, stressProgress, loading } = useDashboardData();
  const { moodToday, hasCheckIn, moodRows } = useMoodInsights(stressScans);

  if (loading) return <DashboardLoader />;

  return (
    <div className="min-h-screen bg-[#F4F5F9] text-[#1E293B]">
      <div className="flex min-h-screen">
        <AppSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} activeMenu="Dashboard" />

        <main className="flex-1 min-h-screen">
          <MobileTopBar title="Dashboard" onMenuClick={() => setSidebarOpen(true)} />

          <div className="mx-auto max-w-5xl space-y-6 p-4 pb-[calc(1.5rem+env(safe-area-inset-bottom))] sm:space-y-8 sm:p-6 lg:p-10">
            <WelcomeCard userName={user?.name} />
            <StatusCards
              stressProgress={stressProgress}
              moodToday={moodToday}
              hasCheckIn={hasCheckIn}
            />
            <ActivityGrid />
            <MoodChartCard moodRows={moodRows} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;