import { Link } from 'react-router-dom';
import { Smile } from 'lucide-react';
import { useEffect } from 'react';
import RegisterForm from '../components/auth/RegisterForm';

const Register = () => {
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
    <div className="antialiased min-h-screen flex items-center justify-center bg-dot-grid relative overflow-x-hidden py-12">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(var(--rotate, 0deg)); }
          50% { transform: translateY(-15px) rotate(var(--rotate, 0deg)); }
        }
        .float-anim { animation: float 4s ease-in-out infinite; }
        .input-field:focus { outline: none; box-shadow: 4px 4px 0px 0px #8B5CF6; border-color: #8B5CF6; }
        .radio-card input:checked + .radio-card-body { border-color: #8B5CF6; background-color: #F5F3FF; box-shadow: 4px 4px 0px 0px #8B5CF6; }
        .radio-card input:checked + .radio-card-body .radio-dot { background-color: #8B5CF6; border-color: #8B5CF6; }
        .radio-card input:checked + .radio-card-body .radio-dot::after { content: ''; position: absolute; width: 8px; height: 8px; background: white; border-radius: 50%; top: 50%; left: 50%; transform: translate(-50%, -50%); }
        input[type="range"] { -webkit-appearance: none; appearance: none; width: 100%; height: 10px; border-radius: 999px; background: #E2E8F0; border: 2px solid #1E293B; outline: none; }
        input[type="range"]::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 28px; height: 28px; border-radius: 50%; background: #8B5CF6; border: 3px solid #1E293B; cursor: pointer; box-shadow: 2px 2px 0px 0px #1E293B; transition: all 0.2s; }
        input[type="range"]::-webkit-slider-thumb:hover { transform: scale(1.15); box-shadow: 3px 3px 0px 0px #1E293B; }
        .progress-fill { position: relative; overflow: hidden; }
        .progress-fill::after { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent); animation: shimmer 2s infinite; }
        @keyframes shimmer { 100% { left: 100%; } }
        @keyframes pulse-ring { 0% { transform: scale(0.9); opacity: 1; } 100% { transform: scale(1.5); opacity: 0; } }
      `}</style>
      
      {/* Floating Decorative Shapes */}
      <div className="hidden md:block absolute top-[8%] left-[6%] w-10 h-10 rounded-full border-2 border-dark-border bg-secondary float-anim" style={{ animationDuration: '3s' }}></div>
      <div className="hidden md:block absolute top-[15%] right-[10%] w-14 h-14 bg-tertiary border-2 border-dark-border rotate-12 float-anim" style={{ animationDuration: '4s', '--rotate': '12deg' }}></div>
      <div className="hidden md:block absolute bottom-[10%] left-[10%] w-8 h-8 bg-quaternary border-2 border-dark-border rounded-lg rotate-45 float-anim" style={{ animationDuration: '5s', '--rotate': '45deg' }}></div>
      <div className="hidden md:block absolute bottom-[20%] right-[6%] w-12 h-12 rounded-full border-2 border-dark-border bg-accent/30 float-anim" style={{ animationDuration: '3.5s' }}></div>

      <div className="absolute left-[-10%] top-[20%] w-[400px] h-[400px] bg-accent/15 rounded-full blur-[120px] z-0"></div>
      <div className="absolute right-[-10%] bottom-[10%] w-[350px] h-[350px] bg-secondary/15 rounded-full blur-[120px] z-0"></div>

      <div className="relative z-10 w-full max-w-lg mx-4">
        {/* Logo */}
        <div className="reveal-pop text-center mb-6">
          <Link to="/" className="inline-flex items-center gap-2 text-3xl font-bold font-heading group text-foreground">
            <div className="w-12 h-12 rounded-xl bg-accent border-2 border-dark-border shadow-pop group-hover:shadow-pop-hover group-hover:-translate-y-1 transition-all duration-bouncy flex items-center justify-center rotate-3">
              <Smile className="text-white" size={28} strokeWidth={2.5} />
            </div>
            MindCare
          </Link>
        </div>

        {/* Card */}
        <div className="reveal-pop bg-white border-2 border-dark-border rounded-[32px] shadow-sticker p-6 md:p-10" style={{ transitionDelay: '150ms' }}>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
