import { Link } from 'react-router-dom';
import { Smile, ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import LoginForm from '../components/auth/LoginForm';

const Login = () => {
  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal-pop').forEach(el => revealObserver.observe(el));
    return () => revealObserver.disconnect();
  }, []);

  return (
    <div className="antialiased min-h-screen flex items-center justify-center bg-dot-grid relative overflow-hidden py-12">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(var(--rotate, 0deg)); }
          50% { transform: translateY(-15px) rotate(var(--rotate, 0deg)); }
        }
        .float-anim {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>

      {/* Floating Decorative Shapes */}
      <div className="hidden md:block absolute top-[10%] left-[5%] w-10 h-10 rounded-full border-2 border-dark-border bg-secondary float-anim" style={{ animationDuration: '3s', '--rotate': '0deg' }}></div>
      <div className="hidden md:block absolute top-[20%] right-[8%] w-14 h-14 bg-tertiary border-2 border-dark-border rotate-12 float-anim" style={{ animationDuration: '4s', '--rotate': '12deg' }}></div>
      <div className="hidden md:block absolute bottom-[15%] left-[8%] w-8 h-8 bg-quaternary border-2 border-dark-border rounded-lg rotate-45 float-anim" style={{ animationDuration: '5s', '--rotate': '45deg' }}></div>
      <div className="hidden md:block absolute bottom-[25%] right-[5%] w-12 h-12 rounded-full border-2 border-dark-border bg-accent/30 float-anim" style={{ animationDuration: '3.5s' }}></div>
      <div className="absolute top-[60%] left-[15%] opacity-40">
        <svg width="50" height="50" viewBox="0 0 60 60" fill="none" className="animate-pulse">
          <path d="M10,30 Q20,10 30,30 T50,30" stroke="#F472B6" strokeWidth="4" fill="none" strokeLinecap="round" />
        </svg>
      </div>

      {/* Blurred Glow Background */}
      <div className="absolute left-[-10%] top-[20%] w-[400px] h-[400px] bg-accent/15 rounded-full blur-[120px] z-0"></div>
      <div className="absolute right-[-10%] bottom-[10%] w-[350px] h-[350px] bg-secondary/15 rounded-full blur-[120px] z-0"></div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md mx-4 my-8">
        {/* Logo */}
        <div className="reveal-pop text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-3xl font-bold font-heading group text-foreground">
            <div className="w-12 h-12 rounded-xl bg-accent border-2 border-dark-border shadow-pop group-hover:shadow-pop-hover group-hover:-translate-y-1 transition-all duration-bouncy flex items-center justify-center rotate-3">
              <Smile className="text-white" size={28} strokeWidth={2.5} />
            </div>
            MindCare
          </Link>
        </div>

        {/* Card Container */}
        <div className="reveal-pop bg-white border-2 border-dark-border rounded-[32px] shadow-sticker p-8 md:p-10" style={{ transitionDelay: '150ms' }}>
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-block bg-tertiary border-2 border-dark-border rounded-full px-4 py-1 mb-4 font-heading font-bold text-sm shadow-pop transform -rotate-2 text-foreground">
              👋 Selamat datang kembali!
            </div>
            <h1 className="text-3xl font-heading font-extrabold text-foreground">Masuk ke Akunmu</h1>
            <p className="text-muted-foreground font-medium mt-2">Lanjutkan perjalanan mentalmu</p>
          </div>

          <LoginForm />
        </div>

        {/* Register Link */}
        <div className="reveal-pop text-center mt-6" style={{ transitionDelay: '300ms' }}>
          <p className="font-medium text-muted-foreground">
            Belum punya akun?{' '}
            <Link to="/register" className="font-heading font-bold text-accent hover:text-secondary transition-colors underline underline-offset-4 decoration-2">
              Daftar sekarang ✨
            </Link>
          </p>
        </div>

        {/* Back to Landing */}
        <div className="reveal-pop text-center mt-4" style={{ transitionDelay: '400ms' }}>
          <Link to="/" className="inline-flex items-center gap-2 font-heading font-bold text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={16} strokeWidth={2.5} />
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
