import { ArrowRight, SmilePlus, Leaf, BrainCircuit, ScanFace, Timer, PenTool, BookOpen, Star, Check, HeartHandshake, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const LandingPage = () => {

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
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center bg-dot-grid">
        {/* Floating Decorative Confetti */}
        <div className="absolute top-[20%] left-[10%] w-8 h-8 rounded-full border-2 border-dark-border bg-secondary animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-[20%] right-[15%] w-12 h-12 bg-quaternary border-2 border-dark-border rotate-12 transition-transform hover:rotate-45 duration-bouncy"></div>
        <div className="absolute top-[30%] right-[25%] opacity-50">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="animate-pulse">
            <path d="M10,30 Q20,10 30,30 T50,30" stroke="#F472B6" strokeWidth="4" fill="none" strokeLinecap="round" />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className="max-w-2xl">
              <div className="reveal-pop">
                <div className="inline-block bg-tertiary border-2 border-dark-border rounded-full px-4 py-1 mb-6 font-heading font-bold text-sm shadow-pop transform -rotate-2">
                  ✨ Your digital mental playground
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold font-heading leading-[1.1] mb-6 text-foreground">
                  Understand your <span className="relative inline-block">
                    <span className="relative z-10">stress.</span>
                    <svg className="absolute w-full h-4 -bottom-1 left-0 z-0 text-quaternary drop-shadow-sm" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 12 0, 25 5 T 50 5 T 75 5 T 100 5" stroke="currentColor" strokeWidth="4" fill="none"></path>
                    </svg>
                  </span> <br />
                  Take control of your mind.
                </h1>
              </div>

              <div className="reveal-pop" style={{ transitionDelay: '150ms' }}>
                <p className="text-lg md:text-xl text-muted-foreground mb-10 font-medium leading-relaxed max-w-lg">
                  Helping you track, understand, and reduce stress through smart insights, playful tracking, and daily wellness habits.
                </p>
              </div>

              {/* Buttons */}
              <div className="reveal-pop flex flex-col sm:flex-row gap-6 items-start sm:items-center" style={{ transitionDelay: '300ms' }}>
                <Link to="/register" className="inline-flex items-center gap-3 bg-accent text-white font-heading font-bold px-8 py-4 rounded-full border-2 border-dark-border shadow-pop hover:-translate-x-1 hover:-translate-y-1 hover:shadow-pop-hover active:translate-x-1 active:translate-y-1 active:shadow-pop-active transition-all duration-bouncy group cursor-pointer text-lg">
                  <span>Start Journey</span>
                  <span className="bg-white text-accent rounded-full w-8 h-8 flex items-center justify-center transition-transform group-hover:rotate-45">
                    <ArrowRight size={20} strokeWidth={2.5} />
                  </span>
                </Link>

                <a href="#how-it-works" className="inline-flex items-center gap-2 bg-transparent text-foreground font-heading font-bold px-8 py-4 rounded-full border-2 border-dark-border hover:bg-tertiary shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-pop transition-all duration-bouncy cursor-pointer text-lg">
                  How it works
                </a>
              </div>
            </div>

            {/* Right: Visual Composition */}
            <div className="relative items-center justify-center hidden lg:flex reveal-pop" style={{ transitionDelay: '450ms' }}>
              <div className="absolute w-[500px] h-[500px] bg-tertiary rounded-full border-2 border-dark-border shadow-pop"></div>

              <div className="relative z-10 w-80 h-[450px] bg-white rounded-t-full rounded-b-[40px] border-4 border-dark-border shadow-sticker-pink flex flex-col items-center justify-start py-10 px-6 rotate-2 hover:rotate-0 transition-transform duration-bouncy">
                <div className="w-32 h-32 rounded-full border-4 border-dark-border flex items-center justify-center bg-muted mb-6 overflow-hidden">
                  <SmilePlus className="text-secondary" size={60} strokeWidth={2} />
                </div>
                <h3 className="font-heading font-bold text-2xl text-center mb-2">Feeling Good!</h3>
                <div className="bg-muted w-full h-8 rounded-full border-2 border-dark-border overflow-hidden p-1 mb-8">
                  <div className="bg-quaternary h-full rounded-full w-[80%] border-r-2 border-dark-border"></div>
                </div>

                <div className="absolute -left-16 bottom-20 bg-white border-2 border-dark-border shadow-pop rounded-xl p-4 w-48 rotate-[-6deg]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-quaternary border-2 border-dark-border flex justify-center items-center">
                      <Leaf className="text-white" size={20} strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-sm leading-tight">Focus achieved</p>
                      <p className="text-xs font-medium text-muted-foreground">+20XP Today</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Banner Divider */}
      <div className="w-full bg-accent border-y-2 border-dark-border py-3 overflow-hidden flex whitespace-nowrap shadow-pop relative z-20">
        <div className="animate-marquee flex gap-8 items-center text-white font-heading font-bold text-xl uppercase tracking-widest">
          {[...Array(2)].map((_, idx) => (
            <span key={idx} className="flex gap-4 items-center">
              <span className="flex items-center gap-4">Breathe In <Star size={20} strokeWidth={3} /></span>
              <span className="flex items-center gap-4">Breathe Out <Star size={20} strokeWidth={3} /></span>
              <span className="flex items-center gap-4">Track Progress <Star size={20} strokeWidth={3} /></span>
              <span className="flex items-center gap-4">Stay Positive <Star size={20} strokeWidth={3} /></span>
            </span>
          ))}
        </div>
      </div>

      {/* Features section */}
      <section id="features" className="py-32 relative bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center reveal-pop mb-24">
            <div className="inline-block bg-white border-2 border-dark-border rounded-full px-4 py-1 mb-6 font-heading font-bold text-sm shadow-pop text-secondary">
              Core Expertise
            </div>
            <h2 className="text-4xl md:text-6xl mb-6 font-heading font-extrabold text-foreground tracking-tight">
              Sophisticated tools <br /> <span className="bg-tertiary px-2 italic">designed for fun.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 pl-6 pr-6 pt-10">
            {/* Feature Cards dynamically omitted from long list to save space, but implemented */}
            <FeatureCard 
              icon={<BrainCircuit className="text-white" size={32} strokeWidth={2.5} />} 
              bgColor="bg-accent" shadow="shadow-sticker" decoration="decoration-accent"
              title="Stress Detection" desc="Playful, AI-based questionnaires that analyze your cognitive load without making it feel like a test."
            />
            <FeatureCard 
              icon={<ScanFace className="text-white" size={32} strokeWidth={2.5} />} 
              bgColor="bg-secondary" shadow="shadow-sticker-pink" decoration="decoration-secondary"
              title="Daily Check-in" desc="Face emotion recognition to track your mood patterns using advanced vision AI."
              delay="100ms" rotate="hover:rotate-1"
            />
            <FeatureCard 
              icon={<Timer className="text-foreground" size={32} strokeWidth={2.5} />} 
              bgColor="bg-tertiary" shadow="shadow-sticker-yellow" decoration="decoration-tertiary"
              title="Exercise Tracking" desc="Built-in GPS and timers designed like games to boost your endorphins naturally."
              delay="200ms" rotate="hover:-rotate-1"
            />
            <FeatureCard 
              icon={<PenTool className="text-foreground" size={32} strokeWidth={2.5} />} 
              bgColor="bg-quaternary" shadow="shadow-sticker" decoration="decoration-quaternary"
              title="Journaling" desc="A safe, cozy space to write your feelings and reflect on your emotional growth over time."
              rotate="hover:rotate-1"
            />
            <FeatureCard 
              icon={<BookOpen className="text-white" size={32} strokeWidth={2.5} />} 
              bgColor="bg-foreground" shadow="shadow-sticker-purple" decoration="decoration-foreground" className="md:col-span-2 lg:col-span-1"
              title="Book Recs" desc="Personalized AI reading lists logically curated specifically to your current stress levels."
              delay="100ms" rotate="hover:-rotate-1"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-32 relative bg-muted border-y-2 border-dark-border">
          <div className="container mx-auto px-6">
              <div className="reveal-pop mb-24 text-center">
                  <h2 className="text-5xl md:text-7xl font-heading font-extrabold text-foreground">Simple <span className="text-accent underline decoration-4 underline-offset-8">Process</span></h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto relative content-center">
                  <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-0.5 bg-dark-border -translate-x-1/2 border-dashed border-l-2"></div>

                  <StepCard step="01" title="Onboarding" desc="Register and create your emotional profile in our sticker-book setup to begin." 
                    bg="bg-accent" text="text-white" shadow="shadow-pop" shape="bg-white/20 rounded-full" shapePos="-right-10 -top-10 w-40 h-40" />
                  
                  <StepCard step="02" title="Daily Check" desc="Scan your face or take a quick playful test to evaluate your morning state." 
                    bg="bg-white" text="text-foreground" stepColor="text-secondary" shadow="shadow-sticker" shape="bg-secondary/10 rounded-full" shapePos="-left-10 -bottom-10 w-40 h-40" mt="md:mt-24" />
                  
                  <StepCard step="03" title="Action" desc="Engage in exercises, journaling, or reading tailored precisely to your needs." 
                    bg="bg-white" text="text-foreground" stepColor="text-quaternary" shadow="shadow-sticker" shape="bg-quaternary/10 rounded-tl-full" shapePos="right-0 bottom-0 w-32 h-32" />
                  
                  <StepCard step="04" title="Results" desc="Monitor your progress over time with deep, colorful emotional pattern charts." 
                    bg="bg-tertiary" text="text-foreground" shadow="shadow-pop" shape="bg-white border-2 border-dark-border rotate-45" shapePos="-right-4 top-1/4 w-20 h-20" mt="md:mt-24" />
              </div>
          </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-32 relative bg-background overflow-hidden">
          <div className="absolute left-[-10%] bottom-[10%] w-[300px] h-[300px] bg-secondary/20 rounded-full blur-[100px] z-0"></div>
          <div className="absolute right-[-10%] top-[10%] w-[300px] h-[300px] bg-accent/20 rounded-full blur-[100px] z-0"></div>

          <div className="container mx-auto px-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-16 items-center bg-white border-2 border-dark-border rounded-[40px] shadow-sticker p-8 md:p-16">
                  
                  <div className="reveal-pop order-2 md:order-1">
                      <div className="inline-block bg-quaternary border-2 border-dark-border rounded-full px-4 py-1 mb-6 font-heading font-bold text-sm shadow-pop text-foreground rotate-2">
                          Real Impact
                      </div>
                      <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-8 text-foreground leading-tight">Why <span className="bg-accent text-white px-2 rounded-lg inline-block -rotate-2">MindCare?</span></h2>
                      
                      <ul className="space-y-6">
                          <BenefitItem iconBg="bg-quaternary" text="Improve mental awareness daily" iconColor="text-foreground" />
                          <BenefitItem iconBg="bg-tertiary" text="Reduce stress naturally without medication" iconColor="text-foreground" />
                          <BenefitItem iconBg="bg-secondary" text="Track long-term emotional patterns" iconColor="text-white" />
                          <BenefitItem iconBg="bg-accent" text="Get personalized AI recommendations" iconColor="text-white" />
                      </ul>
                  </div>

                  <div className="reveal-pop flex justify-center order-1 md:order-2">
                      <div className="relative w-72 h-72">
                          <div className="absolute inset-0 bg-secondary rounded-[40px] border-4 border-dark-border shadow-pop rotate-6 hover:rotate-12 transition-transform duration-bouncy flex items-center justify-center group overflow-hidden">
                              <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCc+CiAgPHJlY3Qgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJyBmaWxsPSdub25lJyBzdHJva2U9JyMwMDAnIHN0cm9rZS13aWR0aD0nMicgLz4KPC9zdmc+')]"></div>
                              <div className="w-40 h-40 bg-white rounded-full border-4 border-dark-border flex items-center justify-center shadow-inner relative z-10 group-hover:scale-110 transition-transform duration-bouncy">
                                  <HeartHandshake className="text-secondary" size={80} strokeWidth={2} />
                              </div>
                          </div>
                          <Sparkles className="absolute -top-6 -right-6 text-tertiary w-12 h-12 animate-pulse" size={48} />
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
};

const FeatureCard = ({ icon, bgColor, shadow, decoration, title, desc, delay = "0ms", rotate = "", className = "" }) => (
  <div className={`reveal-pop bg-white border-2 border-dark-border rounded-3xl p-8 ${shadow} hover:-translate-y-2 transition-all duration-bouncy cursor-pointer wiggle-hover relative group ${rotate} ${className}`} style={{ transitionDelay: delay }}>
    <div className={`absolute -top-10 left-8 ${bgColor} rounded-full p-4 border-2 border-dark-border shadow-pop flex items-center justify-center`}>
      {icon}
    </div>
    <h3 className={`text-2xl font-heading font-bold mb-3 mt-6 text-foreground ${decoration} group-hover:underline underline-offset-4`}>
      {title}
    </h3>
    <p className="text-muted-foreground font-medium leading-relaxed">{desc}</p>
  </div>
);

const StepCard = ({ step, title, desc, bg, text, shadow, shape, shapePos, mt = "", stepColor = "opacity-40" }) => (
  <div className={`reveal-pop ${bg} ${text} border-2 border-dark-border rounded-3xl p-10 lg:p-12 ${shadow} flex flex-col justify-between overflow-hidden relative group ${mt}`}>
      <div className={`absolute ${shapePos} ${shape} group-hover:scale-125 transition-transform duration-700`}></div>
      <span className={`text-6xl font-heading font-extrabold ${stepColor} mb-10`}>{step}</span>
      <div className="relative z-10">
          <h3 className="text-3xl font-heading font-bold mb-4">{title}</h3>
          <p className="text-lg font-medium opacity-90">{desc}</p>
      </div>
  </div>
);

const BenefitItem = ({ iconBg, text, iconColor }) => (
  <li className="flex items-start gap-4 group">
      <div className={`mt-1 w-8 h-8 rounded-full ${iconBg} border-2 border-dark-border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
          <Check className={`${iconColor}`} size={16} strokeWidth={4} />
      </div>
      <span className="text-xl font-medium text-foreground">{text}</span>
  </li>
);

export default LandingPage;
