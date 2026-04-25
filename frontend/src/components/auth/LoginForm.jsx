import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Check, ArrowRight, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({ email: '', password: '', rememberMe: false });

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError('Mohon isi semua field!');
      return;
    }
    setError('');
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:3000/login', {
        email: formData.email,
        password: formData.password
      }, { withCredentials: true });

      localStorage.setItem('mindcare_access_token', response.data.accessToken);

      const existing = JSON.parse(localStorage.getItem('mindcare_user') || '{}');
      existing.email = formData.email;
      if (!existing.name) existing.name = formData.email.split('@')[0];
      localStorage.setItem('mindcare_user', JSON.stringify(existing));
      
      setLoading(false);
      navigate('/dashboard');
    } catch (error) {
      setLoading(false);
      if (error.response) {
        setError(error.response.data.msg);
      } else {
        setError('Gagal menghubungi server');
      }
    }
  };

  return (
    <>
      <form className="space-y-5" onSubmit={handleLogin}>
        {/* Email */}
        <div className="space-y-2">
          <label className="font-heading font-bold text-sm text-foreground flex items-center gap-2">
            <Mail size={16} strokeWidth={2.5} className="text-accent" /> Email
          </label>
          <input
            type="email"
            required
            placeholder="nama@email.com"
            className="w-full px-4 py-3.5 rounded-2xl border-2 border-dark-border bg-background font-medium text-foreground placeholder:text-muted-foreground/60 transition-all duration-200 focus:outline-none focus:border-accent focus:shadow-[4px_4px_0px_0px_#8B5CF6]"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        {/* Password */}
        <div className="space-y-2">
          <label className="font-heading font-bold text-sm text-foreground flex items-center gap-2">
            <Lock size={16} strokeWidth={2.5} className="text-accent" /> Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              required
              placeholder="••••••••"
              className="w-full px-4 py-3.5 rounded-2xl border-2 border-dark-border bg-background font-medium text-foreground placeholder:text-muted-foreground/60 transition-all duration-200 focus:outline-none focus:border-accent focus:shadow-[4px_4px_0px_0px_#8B5CF6] pr-12"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-accent transition-colors"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        {/* Remember & Forgot */}
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer group">
            <div className="relative">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={formData.rememberMe}
                onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
              />
              <div className="w-5 h-5 rounded-lg border-2 border-dark-border bg-background peer-checked:bg-accent peer-checked:border-accent transition-all duration-200 flex items-center justify-center"></div>
              <Check className="absolute top-0.5 left-0.5 text-white w-4 h-4 opacity-0 peer-checked:opacity-100 transition-opacity" strokeWidth={3} />
            </div>
            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">Ingat saya</span>
          </label>
          <a href="#" className="text-sm font-bold font-heading text-accent hover:text-secondary transition-colors">
            Lupa password?
          </a>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-danger/10 border-2 border-danger/30 rounded-2xl p-3 text-sm font-medium text-danger text-center">
            {error}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-accent text-white font-heading font-bold px-6 py-4 rounded-full border-2 border-dark-border shadow-pop hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-pop-hover active:translate-x-0.5 active:translate-y-0.5 active:shadow-pop-active transition-all duration-bouncy text-lg flex items-center justify-center gap-3 group disabled:opacity-80 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <Loader2 size={24} strokeWidth={2.5} className="animate-spin" />
              <span>Memproses...</span>
            </>
          ) : (
            <>
              <span>Masuk</span>
              <span className="bg-white text-accent rounded-full w-7 h-7 flex items-center justify-center transition-transform group-hover:rotate-45">
                <ArrowRight size={18} strokeWidth={2.5} />
              </span>
            </>
          )}
        </button>
      </form>
      
      {/* Divider */}
      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-dashed border-border"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-4 text-sm font-bold font-heading text-muted-foreground">atau masuk dengan</span>
        </div>
      </div>

      {/* Social Login */}
      <div className="grid grid-cols-2 gap-4">
        <button className="flex items-center justify-center gap-2 bg-background border-2 border-dark-border rounded-2xl px-4 py-3 font-heading font-bold text-sm hover:bg-tertiary hover:shadow-pop hover:-translate-y-0.5 transition-all duration-bouncy text-foreground">
          <svg width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.43,22 12.22,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" /></svg>
          Google
        </button>
        <button className="flex items-center justify-center gap-2 bg-background border-2 border-dark-border rounded-2xl px-4 py-3 font-heading font-bold text-sm hover:bg-quaternary hover:shadow-pop hover:-translate-y-0.5 transition-all duration-bouncy text-foreground">
          <svg width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" /></svg>
          GitHub
        </button>
      </div>
    </>
  );
};

export default LoginForm;
