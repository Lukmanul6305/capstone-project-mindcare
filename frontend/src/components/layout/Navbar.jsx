import { Link } from 'react-router-dom';
import { Smile, ArrowRight, Menu } from 'lucide-react';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-background border-b-2 border-dark-border transition-all duration-300 py-4 ${
        isScrolled ? 'shadow-pop' : ''
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold font-heading flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-accent border-2 border-dark-border shadow-pop group-hover:shadow-pop-hover group-hover:-translate-y-1 transition-all duration-bouncy flex items-center justify-center rotate-3">
            <Smile className="text-white" size={24} strokeWidth={2.5} />
          </div>
          MindCare
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#features" className="font-heading font-bold text-foreground hover:text-accent transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="font-heading font-bold text-foreground hover:text-secondary transition-colors">
            How It Works
          </a>
          <a href="#benefits" className="font-heading font-bold text-foreground hover:text-quaternary transition-colors">
            Benefits
          </a>
        </div>

        {/* CTA Primary Button */}
        <div>
          <Link
            to="/login"
            className="hidden md:inline-flex items-center gap-2 bg-transparent text-foreground font-heading font-bold px-6 py-3 rounded-full border-2 border-dark-border hover:bg-muted hover:shadow-pop transition-all duration-bouncy mr-2"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="hidden md:inline-flex items-center gap-2 bg-accent text-white font-heading font-bold px-6 py-3 rounded-full border-2 border-dark-border shadow-pop hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-pop-hover active:translate-x-0.5 active:translate-y-0.5 active:shadow-pop-active transition-all duration-bouncy group"
          >
            Join Now
            <span className="bg-white text-accent rounded-full w-6 h-6 flex items-center justify-center transition-transform group-hover:rotate-45 border border-transparent">
              <ArrowRight size={16} strokeWidth={2.5} />
            </span>
          </Link>

          {/* Mobile Menu Icon (Decorative for demo) */}
          <button className="md:hidden w-10 h-10 bg-tertiary border-2 border-dark-border rounded-full shadow-pop inline-flex items-center justify-center align-middle ml-2">
            <Menu className="text-foreground" size={20} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
