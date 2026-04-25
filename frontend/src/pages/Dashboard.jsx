import { useState, useEffect } from 'react';
import { Camera, Brain, Smile, Flame, Activity, BarChart3, Zap, ClipboardList, PenTool, Dumbbell, BookOpen, ShieldCheck, Clock, Inbox, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  // Mock data simulation based on original dashboard.js logic
  const [stats, setStats] = useState({
    stressScore: 38,
    stressTrend: '↘ Turun',
    moodToday: '😊',
    streak: 3,
    totalActivities: 12
  });
  
  const [userName, setUserName] = useState('User');

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await axios.get('http://localhost:3000/token', { withCredentials: true });
        const token = response.data.accessToken;
        const payload = JSON.parse(atob(token.split('.')[1]));
        setUserName(payload.name);
      } catch (error) {
        const localUser = JSON.parse(localStorage.getItem('mindcare_user') || '{}');
        if (localUser.name) setUserName(localUser.name);
      }
    };
    fetchToken();
  }, []);

  const chartData = {
    labels: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'],
    datasets: [
      {
        data: [3, 4, 3, 2, 5, 5, 3], // 5=happy, 4=surprised, 3=neutral, 2=sad, 1=angry
        backgroundColor: ['#8B5CF6', '#FBBF24', '#8B5CF6', '#F472B6', '#34D399', '#34D399', '#8B5CF6'],
        borderColor: '#1E293B',
        borderWidth: 2,
        borderRadius: 8,
      }
    ]
  };

  const chartOptions = {
    responsive: true, 
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: { 
        min: 0, 
        max: 5, 
        ticks: { stepSize: 1, callback: (v) => ['', '😠', '😢', '😐', '😲', '😊'][v] || '' }, 
        grid: { color: '#F1F5F9' } 
      },
      x: { grid: { display: false } }
    }
  };

  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto space-y-8 animate-fade-in text-foreground">
      
      {/* Welcome Banner */}
      <div className="fade-in bg-accent text-white rounded-3xl border-2 border-dark-border shadow-pop p-6 md:p-8 relative overflow-hidden">
        <div className="absolute -right-10 -top-10 w-48 h-48 bg-white/10 rounded-full"></div>
        <div className="absolute right-20 bottom-0 w-32 h-32 bg-white/10 rounded-full"></div>
        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl font-heading font-extrabold mb-2">Halo, {userName}! 🌟</h2>
          <p className="text-white/80 font-medium max-w-xl mb-4">
            Selamat datang di ruang aman digitalmu. Ayo mulai hari ini dengan check-in dan aktivitas yang menyenangkan!
          </p>
          <Link to="/checkin" className="inline-flex items-center gap-2 bg-white text-accent font-heading font-bold px-5 py-2.5 rounded-full border-2 border-dark-border shadow-pop hover:-translate-y-0.5 hover:shadow-pop-hover transition-all duration-bouncy text-sm">
            <Camera size={16} />
            Mulai Check-in
          </Link>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Stat 1: Stress Level */}
        <Link to="/stress-check" className="fade-in fade-in-delay-1 bg-white border-2 border-dark-border rounded-2xl p-5 card-hover cursor-pointer block">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <Brain className="text-accent" size={20} />
            </div>
            <span className="text-xs font-heading font-bold text-quaternary bg-quaternary/10 px-2 py-0.5 rounded-full">
              {stats.stressTrend}
            </span>
          </div>
          <p className="text-2xl font-heading font-extrabold">{stats.stressScore}/100</p>
          <p className="text-xs text-muted-foreground font-medium mt-1">Level Stres</p>
        </Link>

        {/* Stat 2: Mood Today */}
        <Link to="/checkin" className="fade-in fade-in-delay-2 bg-white border-2 border-dark-border rounded-2xl p-5 card-hover cursor-pointer block">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
              <Smile className="text-secondary" size={20} />
            </div>
            <span className="text-xs font-heading font-bold text-quaternary bg-quaternary/10 px-2 py-0.5 rounded-full">✅ Sudah</span>
          </div>
          <p className="text-2xl font-heading font-extrabold">{stats.moodToday}</p>
          <p className="text-xs text-muted-foreground font-medium mt-1">Mood Hari Ini</p>
        </Link>

        {/* Stat 3: Streak */}
        <div className="fade-in fade-in-delay-3 bg-white border-2 border-dark-border rounded-2xl p-5 card-hover">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-tertiary/10 flex items-center justify-center">
              <Flame className="text-tertiary" size={20} />
            </div>
          </div>
          <p className="text-2xl font-heading font-extrabold">{stats.streak}</p>
          <p className="text-xs text-muted-foreground font-medium mt-1">Hari Streak 🔥</p>
        </div>

        {/* Stat 4: Activities */}
        <Link to="/progress" className="fade-in fade-in-delay-4 bg-white border-2 border-dark-border rounded-2xl p-5 card-hover cursor-pointer block">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-quaternary/10 flex items-center justify-center">
              <Activity className="text-quaternary" size={20} />
            </div>
          </div>
          <p className="text-2xl font-heading font-extrabold">{stats.totalActivities}</p>
          <p className="text-xs text-muted-foreground font-medium mt-1">Total Aktivitas</p>
        </Link>
      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left: Mood Chart */}
        <div className="lg:col-span-2 fade-in fade-in-delay-3 bg-white border-2 border-dark-border rounded-3xl p-6 shadow-sticker">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-heading font-bold text-lg flex items-center gap-2">
              <BarChart3 className="text-accent" size={20} />
              Mood 7 Hari Terakhir
            </h3>
            <Link to="/progress" className="text-xs font-heading font-bold text-accent hover:text-secondary transition-colors">
              Lihat semua →
            </Link>
          </div>
          <div className="relative h-56">
            {/* Chart */}
            <Bar data={chartData} options={chartOptions} />
          </div>
        </div>

        {/* Right: Daily Check-in Widget */}
        <div className="fade-in fade-in-delay-4 bg-white border-2 border-dark-border rounded-3xl p-6 shadow-sticker">
          <h3 className="font-heading font-bold text-lg mb-4 flex items-center gap-2">
            <Camera className="text-secondary" size={20} />
            Daily Check-in
          </h3>
          <div className="text-center py-4">
            <div className="text-6xl mb-3">😊</div>
            <p className="font-heading font-bold text-lg capitalize">Happy</p>
            <p className="text-sm text-muted-foreground mt-1">Kamu sudah check-in hari ini!</p>
            <p className="text-xs text-accent mt-2 font-heading font-bold">Akurasi: 95%</p>
            
            <div className="mt-4 bg-muted rounded-xl p-3 text-left">
              <p className="text-xs font-heading font-bold text-muted-foreground mb-1">Riwayat Minggu Ini</p>
              <div className="flex justify-between mt-2">
                {['S','S','R','K','J','S','M'].map((day, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <span className="text-lg">{['😊','😲','😐','😢','😊','😊','😐'][i]}</span>
                    <span className="text-[9px] text-muted-foreground font-bold">{day}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="fade-in fade-in-delay-4">
        <h3 className="font-heading font-bold text-lg mb-4 flex items-center gap-2">
          <Zap className="text-tertiary" size={20} />
          Mulai Aktivitas
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ActivityCard to="/stress-check" icon={<ClipboardList className="text-white" size={24} />} title="Cek Stress" bg="bg-accent/5" border="border-accent/20" iconBg="bg-accent" />
          <ActivityCard to="/journaling" icon={<PenTool className="text-foreground" size={24} />} title="Journaling" bg="bg-quaternary/5" border="border-quaternary/20" iconBg="bg-quaternary" />
          <ActivityCard to="/exercise" icon={<Dumbbell className="text-white" size={24} />} title="Olahraga" bg="bg-secondary/5" border="border-secondary/20" iconBg="bg-secondary" />
          <ActivityCard to="/books" icon={<BookOpen className="text-foreground" size={24} />} title="Baca Buku" bg="bg-tertiary/5" border="border-tertiary/20" iconBg="bg-tertiary" />
        </div>
      </div>

      {/* Bottom Grid: Stress & Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-6">
        
        {/* Stress Level Card */}
        <div className="fade-in fade-in-delay-5 bg-white border-2 border-dark-border rounded-3xl p-6 shadow-sticker">
          <h3 className="font-heading font-bold text-lg mb-4 flex items-center gap-2">
            <ShieldCheck className="text-quaternary" size={20} />
            Level Stres Terakhir
          </h3>
          <div className="flex items-center gap-6">
            <div className="relative w-28 h-28 shrink-0">
              <svg className="w-28 h-28 -rotate-90" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="50" stroke="#E2E8F0" strokeWidth="12" fill="none" />
                <circle cx="60" cy="60" r="50" stroke="#FBBF24" strokeWidth="12" fill="none" strokeLinecap="round" strokeDasharray="314" strokeDashoffset={314 - (314 * 38 / 100)} className="transition-all duration-1000 ease-out" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-heading font-extrabold">{stats.stressScore}</span>
                <span className="text-[10px] font-heading font-bold text-muted-foreground">/100</span>
              </div>
            </div>
            <div>
              <span className="inline-block bg-tertiary text-foreground font-heading font-bold text-xs px-3 py-1 rounded-full border-2 border-dark-border shadow-pop mb-2">
                Sedang ⚡
              </span>
              <p className="text-sm text-muted-foreground font-medium">Stres kamu sedang. Pertimbangkan aktivitas relaksasi.</p>
              <Link to="/stress-check" className="inline-flex items-center gap-1 text-xs font-heading font-bold text-accent mt-2 hover:text-secondary transition-colors">
                Cek Lagi <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="fade-in fade-in-delay-5 bg-white border-2 border-dark-border rounded-3xl p-6 shadow-sticker">
          <h3 className="font-heading font-bold text-lg mb-4 flex items-center gap-2">
            <Clock className="text-accent" size={20} />
            Aktivitas Terbaru
          </h3>
          <div className="space-y-3">
            {[
              { type: 'Check-in: Happy', time: '2 jam lalu', iconBg: 'bg-secondary/10', iconColor: 'text-secondary', icon: <Camera size={16} /> },
              { type: 'Cek Stress: 38/100', time: '5 jam lalu', iconBg: 'bg-accent/10', iconColor: 'text-accent', icon: <Brain size={16} /> },
              { type: 'Jurnal: Hari yang menyenangkan', time: '1 hari lalu', iconBg: 'bg-quaternary/10', iconColor: 'text-quaternary', icon: <PenTool size={16} /> },
            ].map((act, idx) => (
              <div key={idx} className="flex items-center gap-3 p-2 rounded-xl hover:bg-muted transition-colors">
                <div className={`w-9 h-9 rounded-lg ${act.iconBg} flex items-center justify-center shrink-0`}>
                  <div className={act.iconColor}>{act.icon}</div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{act.type}</p>
                  <p className="text-xs text-muted-foreground">{act.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
};

const ActivityCard = ({ to, icon, title, bg, border, iconBg }) => (
  <Link to={to} className={`${bg} border-2 ${border} rounded-2xl p-5 flex flex-col items-center gap-3 card-hover group block`}>
    <div className={`w-14 h-14 rounded-2xl ${iconBg} border-2 border-dark-border shadow-pop flex items-center justify-center group-hover:-translate-y-1 transition-transform duration-bouncy`}>
      {icon}
    </div>
    <span className="font-heading font-bold text-sm text-center text-foreground">{title}</span>
  </Link>
);

export default Dashboard;
