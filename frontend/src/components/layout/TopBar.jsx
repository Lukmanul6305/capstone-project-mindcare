import { Menu } from 'lucide-react';

const TopBar = ({ toggleSidebar }) => {
  const h = new Date().getHours();
  const greet = h < 12 ? 'Selamat Pagi' : h < 17 ? 'Selamat Siang' : 'Selamat Malam';

  const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateStr = new Date().toLocaleDateString('id-ID', opts);

  return (
    <header className="sticky top-0 z-30 bg-background/90 backdrop-blur-md border-b-2 border-dark-border px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="lg:hidden w-10 h-10 bg-tertiary border-2 border-dark-border rounded-xl shadow-pop flex items-center justify-center hover:-translate-y-0.5 transition-all duration-bouncy"
        >
          <Menu size={20} className="text-foreground" />
        </button>
        <div>
          <h1 className="text-xl font-heading font-extrabold text-foreground">{greet} Warga STIKOMMMM👋</h1>
          <p className="text-sm text-muted-foreground font-medium">{dateStr}</p>
        </div>
      </div>

    </header>
  );
};

export default TopBar;
