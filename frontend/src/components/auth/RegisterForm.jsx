import { useState } from 'react';
import { UserPlus, IdCard, ClipboardList, CheckCircle2, Mail, Lock, Eye, EyeOff, Check, LockKeyhole, User, Cake, Users, Briefcase, PartyPopper, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState('');
  const [strLevel, setStrLevel] = useState(0);

  const [formData, setFormData] = useState({
    email: '', password: '', confirmPassword: '', tos: false,
    nama: '', usia: '', gender: '', pekerjaan: '',
    q1: '', q2: '', q3: 3, q4: '', q5: ''
  });

  const [finalScore, setFinalScore] = useState(0);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (name === 'password') {
      let level = 0;
      if (value.length >= 8) level += 1;
      if (value.match(/[A-Z]/)) level += 1;
      if (value.match(/[0-9]/)) level += 1;
      if (value.match(/[^A-Za-z0-9]/)) level += 1;
      setStrLevel(level);
    }
  };

  const handleNextStep = async (currentStep) => {
    setError('');
    let isValid = true;

    if (currentStep === 1) {
      if (!formData.email || !formData.password || !formData.confirmPassword) {
        setError('Semua field wajib diisi'); isValid = false;
      } else if (formData.password !== formData.confirmPassword) {
        setError('Password tidak cocok'); isValid = false;
      } else if (!formData.tos) {
        setError('Anda harus menyetujui Syarat dan Ketentuan'); isValid = false;
      }
    } else if (currentStep === 2) {
      if (!formData.nama || !formData.usia || !formData.gender || !formData.pekerjaan) {
        setError('Lengkapi semua data biodata'); isValid = false;
      }
    } else if (currentStep === 3) {
      if (!formData.q1 || !formData.q2 || !formData.q4 || !formData.q5) {
        setError('Jawab semua pertanyaan untuk melanjutkan'); isValid = false;
      }
    }

    if (isValid && currentStep < 4) {
      if (currentStep === 3) {
        try {
          await axios.post('http://localhost:3000/users', {
            name: formData.nama || formData.email.split('@')[0],
            email: formData.email,
            password: formData.password,
            confPassword: formData.confirmPassword
          });
          calculateScore();
          setStep(currentStep + 1);
        } catch (error) {
          if (error.response) {
            setError(error.response.data.msg);
          } else {
            setError('Gagal menghubungi server');
          }
        }
      } else {
        setStep(currentStep + 1);
      }
    }
  };

  const calculateScore = () => {
    const stressScore = parseInt(formData.q1) * 6;
    const sleepScore = parseInt(formData.q2) * 5;
    const focusScore = (6 - parseInt(formData.q3)) * 4;
    const anxietyScore = parseInt(formData.q4) * 4;
    const moodScore = (6 - parseInt(formData.q5)) * 1;
    const total = stressScore + sleepScore + focusScore + anxietyScore + moodScore;
    setFinalScore(total > 100 ? 100 : total);
  };

  const q3Labels = ['Sangat sulit fokus', 'Sulit fokus', 'Biasa saja', 'Cukup baik', 'Sangat baik'];

  return (
    <>
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <span className="font-heading font-bold text-sm text-muted-foreground">Langkah {step} dari 4</span>
          <span className="font-heading font-bold text-sm text-accent">{step * 25}%</span>
        </div>
        <div className="w-full h-3 bg-muted rounded-full border-2 border-dark-border overflow-hidden">
          <div className="progress-fill h-full bg-accent rounded-full transition-all duration-700" style={{ width: `${step * 25}%` }}></div>
        </div>

        <div className="flex items-center justify-between mt-5">
          <StepCircle active={step >= 1} icon={<UserPlus size={18} />} title="Akun" />
          <div className="flex-1 h-0.5 bg-border mx-1 relative">
            <div className="absolute inset-0 bg-accent origin-left transition-transform duration-500" style={{ transform: `scaleX(${step >= 2 ? 1 : 0})` }}></div>
          </div>
          <StepCircle active={step >= 2} icon={<IdCard size={18} />} title="Biodata" />
          <div className="flex-1 h-0.5 bg-border mx-1 relative">
            <div className="absolute inset-0 bg-accent origin-left transition-transform duration-500" style={{ transform: `scaleX(${step >= 3 ? 1 : 0})` }}></div>
          </div>
          <StepCircle active={step >= 3} icon={<ClipboardList size={18} />} title="Kuesioner" />
          <div className="flex-1 h-0.5 bg-border mx-1 relative">
            <div className="absolute inset-0 bg-accent origin-left transition-transform duration-500" style={{ transform: `scaleX(${step >= 4 ? 1 : 0})` }}></div>
          </div>
          <StepCircle active={step >= 4} icon={<CheckCircle2 size={18} />} title="Selesai" />
        </div>
      </div>

      {error && <div className="bg-danger/10 border-2 border-danger/30 rounded-2xl p-3 text-sm font-medium text-danger text-center mb-4">{error}</div>}

      {/* STEP 1 */}
      {step === 1 && (
        <div className="animate-fade-in">
          <div className="text-center mb-6">
            <div className="inline-block bg-accent/10 border-2 border-accent/30 rounded-full px-4 py-1 mb-3 font-heading font-bold text-sm text-accent">
              🔐 Buat Akun
            </div>
            <h1 className="text-2xl md:text-3xl font-heading font-extrabold text-foreground">Mulai Perjalananmu</h1>
          </div>

          <form className="space-y-4">
            <div className="space-y-1.5">
              <label className="font-heading font-bold text-sm text-foreground flex items-center gap-2">
                <Mail size={15} className="text-accent" /> Email
              </label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="nama@email.com" className="input-field w-full px-4 py-3 rounded-2xl border-2 border-dark-border bg-background font-medium text-foreground placeholder:text-muted-foreground/60 transition-all" />
            </div>

            <div className="space-y-1.5">
              <label className="font-heading font-bold text-sm text-foreground flex items-center gap-2">
                <Lock size={15} className="text-accent" /> Password
              </label>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} required placeholder="Min. 8 karakter" className="input-field w-full px-4 py-3 rounded-2xl border-2 border-dark-border bg-background font-medium text-foreground placeholder:text-muted-foreground/60 transition-all pr-12" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="password-toggle absolute right-4 top-1/2 -translate-y-1/2">
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {formData.password && (
                <div className="flex gap-1.5 mt-2">
                  {[1, 2, 3, 4].map(idx => (
                    <div key={idx} className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${idx <= strLevel ? (strLevel < 3 ? 'bg-tertiary' : 'bg-quaternary') : 'bg-border'}`}></div>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-1.5">
              <label className="font-heading font-bold text-sm text-foreground flex items-center gap-2">
                <LockKeyhole size={15} className="text-accent" /> Konfirmasi Password
              </label>
              <div className="relative">
                <input type={showConfirm ? "text" : "password"} name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required placeholder="Ulangi password" className="input-field w-full px-4 py-3 rounded-2xl border-2 border-dark-border bg-background font-medium text-foreground placeholder:text-muted-foreground/60 transition-all pr-12" />
                <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="password-toggle absolute right-4 top-1/2 -translate-y-1/2">
                  {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <label className="flex items-start gap-3 cursor-pointer group mt-2">
              <div className="relative mt-0.5">
                <input type="checkbox" name="tos" checked={formData.tos} onChange={handleChange} className="sr-only peer" />
                <div className="w-5 h-5 rounded-lg border-2 border-dark-border bg-background peer-checked:bg-accent peer-checked:border-accent transition-all duration-200 flex items-center justify-center"></div>
                <Check className="absolute top-0.5 left-0.5 text-white w-4 h-4 opacity-0 peer-checked:opacity-100 transition-opacity" strokeWidth={3} />
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors leading-snug">
                Saya menyetujui <span className="text-accent font-bold underline underline-offset-2">Syarat & Ketentuan</span> dan <span className="text-accent font-bold underline underline-offset-2">Kebijakan Privasi</span>
              </span>
            </label>

            <button type="button" onClick={() => handleNextStep(1)} className="w-full bg-accent text-white font-heading font-bold px-6 py-4 rounded-full border-2 border-dark-border shadow-pop hover:-translate-y-0.5 hover:shadow-pop-hover active:translate-y-0.5 transition-all mt-4">
              Lanjut ke Biodata
            </button>
          </form>
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div className="animate-fade-in">
          <div className="text-center mb-6">
            <div className="inline-block bg-secondary/10 border-2 border-secondary/30 rounded-full px-4 py-1 mb-3 font-heading font-bold text-sm text-secondary">
              📝 Biodata Diri
            </div>
            <h1 className="text-2xl md:text-3xl font-heading font-extrabold text-foreground">Kenalan Yuk!</h1>
          </div>

          <form className="space-y-4">
            <div className="space-y-1.5">
              <label className="font-heading font-bold text-sm text-foreground flex items-center gap-2"><User size={15} className="text-secondary" /> Nama Lengkap</label>
              <input type="text" name="nama" value={formData.nama} onChange={handleChange} placeholder="Masukkan nama" className="input-field w-full px-4 py-3 rounded-2xl border-2 border-dark-border bg-background font-medium" />
            </div>

            <div className="space-y-1.5">
              <label className="font-heading font-bold text-sm text-foreground flex items-center gap-2"><Cake size={15} className="text-secondary" /> Usia</label>
              <input type="number" name="usia" value={formData.usia} onChange={handleChange} min="10" max="100" placeholder="Contoh: 21" className="input-field w-full px-4 py-3 rounded-2xl border-2 border-dark-border bg-background font-medium" />
            </div>

            <div className="space-y-2">
              <label className="font-heading font-bold text-sm text-foreground flex items-center gap-2"><Users size={15} className="text-secondary" /> Gender</label>
              <div className="grid grid-cols-2 gap-3">
                <label className="radio-card cursor-pointer">
                  <input type="radio" name="gender" value="laki-laki" checked={formData.gender === 'laki-laki'} onChange={handleChange} className="sr-only" />
                  <div className="radio-card-body border-2 border-dark-border rounded-2xl p-3.5 flex items-center gap-3 transition-all hover:bg-muted">
                    <div className="radio-dot w-5 h-5 rounded-full border-2 border-dark-border relative shrink-0"></div>
                    <span className="font-heading font-bold text-sm">👨 Laki-laki</span>
                  </div>
                </label>
                <label className="radio-card cursor-pointer">
                  <input type="radio" name="gender" value="perempuan" checked={formData.gender === 'perempuan'} onChange={handleChange} className="sr-only" />
                  <div className="radio-card-body border-2 border-dark-border rounded-2xl p-3.5 flex items-center gap-3 transition-all hover:bg-muted">
                    <div className="radio-dot w-5 h-5 rounded-full border-2 border-dark-border relative shrink-0"></div>
                    <span className="font-heading font-bold text-sm">👩 Perempuan</span>
                  </div>
                </label>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="font-heading font-bold text-sm text-foreground flex items-center gap-2"><Briefcase size={15} className="text-secondary" /> Pekerjaan</label>
              <select name="pekerjaan" value={formData.pekerjaan} onChange={handleChange} className="input-field w-full px-4 py-3 rounded-2xl border-2 border-dark-border bg-background font-medium appearance-none">
                <option value="" disabled>Pilih pekerjaan</option>
                <option value="pelajar">🎓 Pelajar/Mahasiswa</option>
                <option value="karyawan">💼 Karyawan</option>
                <option value="freelancer">💻 Freelancer</option>
                <option value="lainnya">📌 Lainnya</option>
              </select>
            </div>

            <div className="flex gap-4 mt-4">
              <button type="button" onClick={() => setStep(1)} className="w-1/3 bg-background font-heading font-bold px-4 py-4 rounded-full border-2 border-dark-border hover:bg-muted transition-all text-foreground">Kembali</button>
              <button type="button" onClick={() => handleNextStep(2)} className="w-2/3 bg-secondary text-white font-heading font-bold px-6 py-4 rounded-full border-2 border-dark-border shadow-pop hover:-translate-y-0.5 hover:shadow-pop-hover active:translate-y-0.5 transition-all">Lanjut ke Kuesioner</button>
            </div>
          </form>
        </div>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div className="animate-fade-in">
          <div className="text-center mb-6">
            <div className="inline-block bg-tertiary/20 border-2 border-dark-border rounded-full px-4 py-1 mb-3 font-heading font-bold text-sm text-foreground">
              📋 Kuesioner Baseline
            </div>
            <h1 className="text-2xl md:text-3xl font-heading font-extrabold text-foreground">Bagaimana Kondisimu?</h1>
          </div>

          <form className="space-y-6">
            <QuizQuestion num="1" color="bg-accent" question="Seberapa sering kamu merasa stres dalam seminggu terakhir?" name="q1" value={formData.q1} onChange={handleChange} options={[
              { v: '1', l: 'Tidak pernah' }, { v: '2', l: 'Jarang' }, { v: '3', l: 'Kadang-kadang' }, { v: '4', l: 'Sering' }, { v: '5', l: 'Setiap hari' }
            ]} />

            <QuizQuestion num="2" color="bg-secondary" question="Bagaimana kualitas tidurmu akhir-akhir ini?" name="q2" value={formData.q2} onChange={handleChange} options={[
              { v: '1', l: 'Sangat baik' }, { v: '2', l: 'Cukup baik' }, { v: '3', l: 'Biasa saja' }, { v: '4', l: 'Kurang baik' }, { v: '5', l: 'Sangat buruk' }
            ]} />

            <div className="space-y-3 bg-muted/50 rounded-2xl p-4 border border-border">
              <label className="font-heading font-bold text-sm flex items-start gap-2">
                <span className="bg-tertiary text-foreground rounded-lg w-6 h-6 flex justify-center items-center text-xs">3</span>
                Seberapa baik kamu bisa fokus?
              </label>
              <div className="px-1">
                <input type="range" name="q3" min="1" max="5" value={formData.q3} onChange={handleChange} className="w-full" />
                <div className="flex justify-between text-xs font-medium text-muted-foreground mt-1">
                  <span>Sulit</span><span className="font-heading font-bold text-accent">{q3Labels[parseInt(formData.q3) - 1]}</span><span>Mudah</span>
                </div>
              </div>
            </div>

            <QuizQuestion num="4" color="bg-quaternary" question="Merasa cemas atau khawatir berlebihan?" name="q4" value={formData.q4} onChange={handleChange} options={[
              { v: '1', l: 'Tidak pernah' }, { v: '2', l: 'Jarang' }, { v: '3', l: 'Kadang-kadang' }, { v: '4', l: 'Sering' }, { v: '5', l: 'Hampir selalu' }
            ]} />

            <div className="space-y-3 bg-muted/50 rounded-2xl p-4 border border-border">
              <label className="font-heading font-bold text-sm flex items-start gap-2">
                <span className="bg-foreground text-white rounded-lg w-6 h-6 flex justify-center items-center text-xs">5</span>
                Secara keseluruhan, bagaimana mood-mu hari ini?
              </label>
              <div className="flex justify-between items-center px-2 py-3">
                {[
                  { v: '1', e: '😢', l: 'Buruk' }, { v: '2', e: '😟', l: 'Kurang' }, { v: '3', e: '😐', l: 'Biasa' }, { v: '4', e: '😊', l: 'Baik' }, { v: '5', e: '🤩', l: 'Hebat' }
                ].map(m => (
                  <button key={m.v} type="button" onClick={() => setFormData({ ...formData, q5: m.v })} className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all border-2 ${formData.q5 === m.v ? 'border-accent bg-accent/10 shadow-pop' : 'border-transparent hover:bg-white hover:shadow-pop'}`}>
                    <span className="text-3xl">{m.e}</span><span className="text-[10px] font-heading font-bold text-muted-foreground">{m.l}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <button type="button" onClick={() => setStep(2)} className="w-1/3 bg-background font-heading font-bold px-4 py-4 rounded-full border-2 border-dark-border hover:bg-muted text-foreground">Kembali</button>
              <button type="button" onClick={() => handleNextStep(3)} className="w-2/3 bg-tertiary text-foreground font-heading font-bold px-6 py-4 rounded-full border-2 border-dark-border shadow-pop hover:-translate-y-0.5 hover:shadow-pop-hover active:translate-y-0.5 transition-all">Selesai & Simpan</button>
            </div>
          </form>
        </div>
      )}

      {/* STEP 4 */}
      {step === 4 && (
        <div className="animate-fade-in text-center py-4 text-foreground">
          <div className="relative inline-block mb-6">
            <div className="w-24 h-24 rounded-full bg-quaternary border-4 border-dark-border shadow-pop flex items-center justify-center relative">
              <PartyPopper size={48} strokeWidth={2} className="text-foreground" />
              <div className="absolute inset-0 rounded-full border-4 border-quaternary" style={{ animation: 'pulse-ring 2s ease-out infinite' }}></div>
            </div>
            <Sparkles className="absolute -top-3 -right-3 text-tertiary animate-pulse" size={32} />
          </div>

          <h1 className="text-2xl md:text-3xl font-heading font-extrabold mb-2">Selamat Datang!</h1>
          <p className="text-muted-foreground font-medium text-sm mb-6">Baseline score kamu telah disimpan</p>

          <div className="bg-muted/50 border-2 border-dark-border rounded-3xl p-6 mb-6 text-left">
            <h3 className="font-heading font-bold text-lg mb-4 text-center">📊 Hasil Baseline Score</h3>
            <div className="flex items-center justify-center mb-6">
              <div className="relative w-32 h-32">
                <svg className="w-32 h-32 -rotate-90" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="52" stroke="#E2E8F0" strokeWidth="12" fill="none" />
                  <circle cx="60" cy="60" r="52" stroke="#34D399" strokeWidth="12" fill="none" strokeLinecap="round" strokeDasharray="327" style={{ strokeDashoffset: 327 - (327 * finalScore / 100), transition: 'stroke-dashoffset 1.5s ease-out' }} />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-heading font-extrabold">{finalScore}</span>
                  <span className="text-xs font-heading font-bold text-muted-foreground">/100</span>
                </div>
              </div>
            </div>
            <div className="text-center mb-5">
              <span className="inline-block bg-quaternary text-foreground font-heading font-bold text-sm px-4 py-1.5 rounded-full border-2 border-dark-border shadow-pop">
                {finalScore < 40 ? 'Stres Rendah 🌿' : finalScore < 70 ? 'Stres Sedang ⚡' : 'Stres Tinggi 🔥'}
              </span>
            </div>
          </div>

          <button onClick={() => navigate('/dashboard')} className="w-full bg-accent text-white font-heading font-bold px-6 py-4 rounded-full border-2 border-dark-border shadow-pop hover:-translate-y-0.5 transition-all text-lg">
            Masuk ke Dashboard
          </button>
        </div>
      )}
    </>
  );
};

const StepCircle = ({ active, icon, title }) => (
  <div className="flex flex-col items-center gap-1.5">
    <div className={`w-10 h-10 rounded-full border-2 border-dark-border flex items-center justify-center font-heading font-bold text-sm transition-all duration-300 ${active ? 'bg-accent text-white shadow-pop' : 'bg-muted text-muted-foreground'}`}>
      {icon}
    </div>
    <span className={`text-[10px] font-heading font-bold ${active ? 'text-foreground' : 'text-muted-foreground'}`}>{title}</span>
  </div>
);

const QuizQuestion = ({ num, color, question, name, value, onChange, options }) => (
  <div className="space-y-3 bg-muted/50 rounded-2xl p-4 border border-border">
    <label className="font-heading font-bold text-sm flex items-start gap-2">
      <span className={`${color} text-white rounded-lg w-6 h-6 flex justify-center items-center text-xs shrink-0`}>{num}</span>
      {question}
    </label>
    <div className="space-y-2">
      {options.map((opt, i) => (
        <label key={i} className="radio-card cursor-pointer block">
          <input type="radio" name={name} value={opt.v} checked={value === opt.v} onChange={onChange} className="sr-only" />
          <div className="radio-card-body border-2 border-border rounded-xl p-3 flex items-center gap-3 transition-all hover:bg-white text-sm text-foreground font-medium">
            <div className="radio-dot w-4 h-4 rounded-full border-2 border-dark-border relative shrink-0"></div>
            <span>{opt.l}</span>
          </div>
        </label>
      ))}
    </div>
  </div>
);

export default RegisterForm;
