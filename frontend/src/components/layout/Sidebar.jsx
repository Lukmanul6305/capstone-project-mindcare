import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Smile, LayoutDashboard, Camera, Brain, PenTool, Dumbbell, BookOpen, TrendingUp, LogOut } from 'lucide-react';
import axios from 'axios';

const Sidebar = ({ isOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const [user, setUser] = useState({ name: 'User', email: 'user@email.com' });

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await axios.get('http://localhost:3000/token', { withCredentials: true });
        const token = response.data.accessToken;
        const payload = JSON.parse(atob(token.split('.')[1]));
        setUser({ name: payload.name, email: payload.email });
      } catch (error) {
        const localUser = JSON.parse(localStorage.getItem('mindcare_user') || '{}');
        if (localUser.name && localUser.email) {
          setUser({ name: localUser.name, email: localUser.email });
        }
      }
    };
    fetchToken();
  }, []);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await axios.delete('http://localhost:3000/logout', { withCredentials: true });
      localStorage.removeItem('mindcare_access_token');
      localStorage.removeItem('mindcare_user');
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <aside className={`fixed lg:sticky top-0 left-0 z-50 w-72 h-screen bg-white border-r-2 border-dark-border flex flex-col transition-transform duration-bouncy ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
      {/* Logo */}
      <div className="p-6 border-b-2 border-dark-border flex-shrink-0">
        <Link to="/dashboard" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-accent border-2 border-dark-border shadow-pop flex items-center justify-center rotate-3 group-hover:-rotate-3 transition-transform duration-bouncy">
            <Smile className="text-white" size={24} />
          </div>
          <span className="text-2xl font-heading font-extrabold text-foreground">MindCare</span>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
        <NavSection title="Menu Utama">
          <NavItem to="/dashboard" icon={<LayoutDashboard size={20} />} label="Dashboard" current={currentPath} />
          <NavItem to="/checkin" icon={<Camera size={20} />} label="Daily Check-in" current={currentPath} />
          <NavItem to="/stress-check" icon={<Brain size={20} />} label="Cek Stress" current={currentPath} />
        </NavSection>

        <NavSection title="Aktivitas" className="mt-6">
          <NavItem to="/journaling" icon={<PenTool size={20} />} label="Journaling" current={currentPath} />
          <NavItem to="/exercise" icon={<Dumbbell size={20} />} label="Olahraga" current={currentPath} />
          <NavItem to="/books" icon={<BookOpen size={20} />} label="Rekomendasi Buku" current={currentPath} />
        </NavSection>

        <NavSection title="Analitik" className="mt-6">
          <NavItem to="/progress" icon={<TrendingUp size={20} />} label="Progress" current={currentPath} />
        </NavSection>
      </nav>

      {/* User */}
      <div className="p-4 border-t-2 border-dark-border flex-shrink-0">
        <div className="flex items-center gap-3 bg-muted rounded-xl p-3">
          <div className="w-10 h-10 rounded-full bg-accent border-2 border-dark-border flex items-center justify-center text-white font-heading font-bold text-sm">
            {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-heading font-bold text-sm truncate text-foreground">{user.name}</p>
            <p className="text-xs text-muted-foreground truncate">{user.email}</p>
          </div>
          <button onClick={handleLogout} className="text-muted-foreground hover:text-danger transition-colors cursor-pointer" title="Logout">
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </aside>
  );
};

const NavSection = ({ title, children, className = "" }) => (
  <div className={className}>
    <span className="text-[10px] font-heading font-bold text-muted-foreground uppercase tracking-widest px-3 mb-2 block">
      {title}
    </span>
    {children}
  </div>
);

const NavItem = ({ to, icon, label, current }) => {
  const active = current === to;
  return (
    <Link
      to={to}
      className={`nav-item flex items-center gap-3 px-4 py-3 rounded-xl font-heading font-bold text-sm border-2 border-transparent transition-all duration-200 ${
        active 
          ? 'bg-accent text-white shadow-pop' 
          : 'text-foreground hover:bg-muted'
      }`}
    >
      {icon} {label}
    </Link>
  );
};

export default Sidebar;
