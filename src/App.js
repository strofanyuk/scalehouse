import React, { useEffect, useState } from "react";
import {
  CheckCircle2,
  ShieldCheck,
  Heart,
  Sparkles,
  ArrowDown,
  Mail,
  Zap,
  Users,
  BarChart3,
  Bot,
  MessageSquare,
  Repeat,
  Star,
  Coffee,
  Target,
  Gem,
  ArrowRight,
  Flame,
  XCircle,
  BellRing,
  Settings,
  ShieldAlert,
  Layers,
  TrendingDown,
  Castle,
} from "lucide-react";

// Ссылка на Typeform
const FORM_URL = "https://form.typeform.com/to/F9agk7Yj";

// Иконка замка: многоуровневый силуэт, вдохновленный референсом (Disney style)
const CastleIcon = ({ className, size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2 22h20v-3.5l-1-0.5H3l-1 0.5V22z" />
    <path d="M4 18h16v-4l-1.5-1.5h-13L4 14v4z" />
    <path d="M11 14h4V4l-2-2.5-2 2.5v10z" />
    <path d="M13 1.5V0l3 0.8L13 1.5z" />
    <path d="M7 14h3V8L8.5 6 7 8v6z" />
    <path d="M8.5 6V4.5l2 0.5-2 0.5z" opacity="0.8" />
    <path d="M15 14h3v-5l-1.5-2L15 9v5z" />
    <path d="M3 18h3v-5L4.5 11 3 13v5z" />
    <path d="M18 18h3v-6l-1.5-2-1.5 2v6z" />
    <path d="M9.5 12h1.5V7.5L10.2 6.5 9.5 7.5V12z" opacity="0.6" />
    <path d="M14.5 12h1.5V8.5l-0.8-1-0.7 1V12z" opacity="0.6" />
  </svg>
);

const ServiceCard = ({ icon: Icon, title, description, delay }) => (
  <div
    className="group p-8 rounded-[2.5rem] bg-white border border-pink-50 hover:border-pink-200 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-100/50 hover:-translate-y-2 text-center"
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="w-14 h-14 bg-pink-50 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-pink-600 group-hover:text-white transition-all duration-500 text-pink-500 shadow-sm">
      <Icon size={28} strokeWidth={1.5} />
    </div>
    <h4 className="text-xl font-black text-pink-600 uppercase mb-3 tracking-tight">
      {title}
    </h4>
    <p className="text-pink-900/60 italic font-serif leading-relaxed text-lg">
      {description}
    </p>
  </div>
);

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCTA = () => {
    window.open(FORM_URL, "_blank");
  };

  const noiseTasks = [
    "CRM Infrastructure",
    "Payment Financing",
    "Lead Magnets",
    "VSL Optimization",
    "Email Scripting",
    "Content Systems",
    "Sales Hiring",
    "Setter Training",
    "Closer Management",
    "DM Strategy",
    "Onboarding",
    "Refund Disputes",
    "Data Reporting",
    "Offer Pricing",
    "Paid Ads",
    "Tech Automations",
    "Zapier Workflows",
    "Customer Support",
    "Ad Creative Scripting",
    "Offer Refinement",
    "Identity Strategy",
    "Funnel Scalability",
    "Metrics Tracking",
    "Success Systems",
  ];

  return (
    <div className="min-h-screen bg-[#FFFDFE] text-pink-950 font-sans selection:bg-pink-200 selection:text-pink-900 overflow-x-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-pink-100/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[10%] left-[-5%] w-[40%] h-[40%] bg-pink-50/50 rounded-full blur-[100px]"></div>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 px-4 md:px-8 py-4 md:py-6 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md py-3 md:py-4 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 md:gap-3 group cursor-pointer">
            <CastleIcon
              className="text-pink-600 transition-transform group-hover:scale-110 duration-500"
              size={28}
            />
            <span className="font-black tracking-[0.2em] uppercase text-xs md:text-sm">
              ScaleHouse
            </span>
          </div>
          <button
            onClick={handleCTA}
            className="bg-pink-600 text-white px-5 md:px-8 py-2 md:py-3 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest hover:bg-pink-700 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-pink-200"
          >
            Let's talk
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden text-center min-h-screen flex flex-col justify-center items-center">
        <div className="max-w-6xl mx-auto space-y-8 md:space-y-12">
          <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 bg-pink-600 text-white rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] shadow-xl shadow-pink-200 animate-pulse">
            <Flame size={12} /> Hot & Ambitious Only
          </div>

          <h1 className="text-5xl md:text-[9.5rem] font-black leading-[0.9] md:leading-[0.8] tracking-tighter text-pink-600 uppercase">
            You bring{" "}
            <span className="italic font-serif font-light text-pink-300 normal-case lowercase tracking-tight">
              Content.
            </span>{" "}
            <br className="hidden md:block" />
            We build{" "}
            <span className="italic font-serif font-light text-pink-900 normal-case lowercase tracking-tight">
              Business.
            </span>
          </h1>

          <p className="text-lg md:text-3xl font-light text-pink-900/50 max-w-4xl mx-auto italic font-serif leading-relaxed px-4">
            We handle the boring, the heavy, and the technical.{" "}
            <br className="hidden md:block" />
            <span className="text-pink-600 font-bold not-italic font-sans">
              You stay the Star. You stay the CEO. You stay in Flow.
            </span>
          </p>

          <div className="pt-4 md:pt-8 w-full max-w-xs md:max-w-none mx-auto">
            <button
              onClick={handleCTA}
              className="w-full md:w-auto px-10 md:px-16 py-6 md:py-8 bg-pink-600 text-white rounded-full text-xl md:text-2xl font-black uppercase italic tracking-widest hover:bg-pink-700 transition-all hover:scale-105 shadow-2xl shadow-pink-200"
            >
              Let's talk
            </button>
          </div>
        </div>
        <div className="mt-12 md:mt-20 animate-bounce text-pink-200">
          <ArrowDown size={32} strokeWidth={1} />
        </div>
      </section>

      {/* Section: The Star vs Workhorse */}
      <section
        id="profile"
        className="py-24 md:py-40 px-6 md:px-8 relative z-10 bg-white/40"
      >
        <div className="max-w-7xl mx-auto text-center lg:text-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
            <div className="space-y-8 md:space-y-10">
              <h3 className="text-pink-300 uppercase font-black tracking-[0.4em] italic text-[10px] md:text-xs">
                ✦ The Truth ✦
              </h3>
              <h2 className="text-5xl md:text-[7.5rem] font-black text-pink-600 leading-[1] md:leading-[0.9] uppercase tracking-tighter">
                You’re the Star. <br />
                <span className="italic font-serif font-light text-pink-300 normal-case">
                  Not the workhorse.
                </span>
              </h2>
              <div className="space-y-6 md:space-y-8 text-xl md:text-2xl text-pink-900/80 font-light italic font-serif leading-relaxed">
                <p>
                  Your audience is waiting for your next move. But you’re too
                  busy{" "}
                  <span className="text-pink-600 font-bold not-italic underline decoration-pink-100 decoration-4 underline-offset-8">
                    fighting with operations
                  </span>{" "}
                  to actually lead.
                </p>
                <div className="flex gap-4 items-center text-sm md:text-lg font-black uppercase tracking-tighter text-pink-400 justify-center lg:justify-start">
                  <Flame size={20} /> Reclaim your creative power.
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-3 md:gap-4 p-6 md:p-8 bg-pink-50/30 rounded-[2.5rem] md:rounded-[3rem] border border-pink-100 shadow-inner">
                {[
                  { icon: BellRing, text: "DM Chaos" },
                  { icon: Settings, text: "Tech Debt" },
                  { icon: ShieldAlert, text: "Admin Hell" },
                  { icon: TrendingDown, text: "Leaking Cash" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-5 md:p-6 bg-white rounded-2xl border border-pink-100 flex flex-col items-center text-center group hover:scale-105 transition-transform shadow-sm"
                  >
                    <item.icon
                      className="text-pink-200 mb-2 group-hover:text-pink-500 transition-colors"
                      size={24}
                    />
                    <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-pink-900/40">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
              <div className="absolute -bottom-4 -right-2 md:-bottom-6 md:-right-6 bg-pink-600 text-white p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-xl rotate-3 font-black uppercase italic text-[10px] md:text-sm tracking-widest">
                We handle the noise.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: THE HEAVY */}
      <section
        id="heavy"
        className="py-24 md:py-40 px-6 md:px-8 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20 space-y-4 md:space-y-6">
            <h2 className="text-5xl md:text-8xl font-black text-pink-600 leading-[1] md:leading-[0.85] uppercase tracking-tighter">
              We take it <br />{" "}
              <span className="italic font-serif font-light text-pink-300">
                all on ourselves.
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-pink-900/40 italic font-serif max-w-2xl mx-auto leading-relaxed px-4">
              The infrastructure, the hiring, the manual grind.{" "}
              <br className="hidden md:block" />
              It all stops being your problem{" "}
              <span className="text-pink-600 font-bold not-italic uppercase tracking-widest text-[10px] md:text-sm">
                the moment we start.
              </span>
            </p>
          </div>

          <div className="relative group p-1 bg-gradient-to-br from-pink-100 via-white to-pink-50 rounded-[2.5rem] md:rounded-[4rem] shadow-2xl">
            <div className="bg-white/80 backdrop-blur-sm p-6 md:p-16 rounded-[2.4rem] md:rounded-[3.8rem] border border-white/50">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {noiseTasks.map((task, i) => (
                  <div
                    key={i}
                    className="p-3 md:p-4 border border-pink-50 rounded-xl md:rounded-2xl flex items-center gap-2 md:gap-3 bg-white/50 group hover:border-pink-200 hover:shadow-md transition-all"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-pink-100 group-hover:bg-pink-600 transition-colors shrink-0"></div>
                    <span className="text-[8px] md:text-[11px] font-black uppercase tracking-widest text-pink-900/40 group-hover:text-pink-900 transition-colors truncate">
                      {task}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white px-6 md:px-8 py-2 md:py-3 rounded-full border border-pink-100 shadow-lg flex items-center gap-2 md:gap-3 whitespace-nowrap">
              <Layers size={14} className="text-pink-500" />
              <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-pink-600 italic">
                Total Operational Freedom
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Nuclear Reality Check (Black Section) */}
      <section
        id="reality"
        className="py-24 md:py-40 px-6 md:px-8 bg-[#0D0105] text-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-24 space-y-4 md:space-y-6">
            <h3 className="text-pink-500 uppercase font-black tracking-[0.4em] md:tracking-[0.5em] italic text-[10px] md:text-xs">
              ✦ Nuclear Reality Check ✦
            </h3>
            <h2 className="text-5xl md:text-[10rem] font-black uppercase leading-[1] md:leading-[0.75] tracking-tighter">
              Stop Playing <br />{" "}
              <span className="italic font-serif font-light text-pink-400 normal-case">
                Small.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 mb-24 md:mb-32">
            {[
              {
                title: "Under-Monetized",
                desc: "You have 10x the reach of leaders earning 10x more than you. The difference is the machine behind them.",
              },
              {
                title: "The Status Gap",
                desc: "You deserve to be the undisputed #1. We build the infrastructure that forces that reality.",
              },
              {
                title: "The Burnout Risk",
                desc: "Managing it all is a fast-track to losing your spark. Let us protect your light while we explode your revenue.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="space-y-4 md:space-y-6 text-center group px-4"
              >
                <div className="text-pink-900/30 font-black text-5xl md:text-6xl italic font-serif mb-2 md:mb-4">
                  0{i + 1}
                </div>
                <h4 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter group-hover:text-pink-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-pink-100/40 italic font-serif leading-relaxed text-base md:text-lg">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="p-8 md:p-16 bg-pink-600 rounded-[2.5rem] md:rounded-[4rem] text-center shadow-2xl shadow-pink-950/50 max-w-5xl mx-auto relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl md:text-7xl font-black uppercase tracking-tighter mb-6 md:mb-8 italic leading-none">
                X10 Your Brand. <br /> X10 Your Life.
              </h3>
              <p className="text-lg md:text-3xl font-light italic font-serif mb-8 md:mb-12 text-pink-100 leading-relaxed max-w-3xl mx-auto px-4">
                You focus on the content. You focus on the magic.{" "}
                <br className="hidden md:block" />
                <span className="font-bold text-white not-italic uppercase tracking-tighter underline underline-offset-4 md:underline-offset-8">
                  We take care of everything else.
                </span>
              </p>
              <div className="w-full max-w-md mx-auto">
                <button
                  onClick={handleCTA}
                  className="w-full md:w-auto px-8 md:px-16 py-6 md:py-8 bg-white text-pink-600 rounded-full text-lg md:text-2xl font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-xl"
                >
                  Let's make a partnership
                </button>
              </div>
            </div>
            {/* Subtle star in button box */}
            <div className="absolute top-0 right-0 opacity-10 rotate-12 -translate-y-1/4 translate-x-1/4">
              <Star size={200} fill="white" stroke="none" />
            </div>
          </div>
        </div>
        <div className="absolute -bottom-20 -right-20 opacity-10">
          <Star size={500} strokeWidth={0.5} className="text-pink-500" />
        </div>
      </section>

      {/* Scope Section */}
      <section className="py-24 md:py-40 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16 md:mb-24">
          <h3 className="text-pink-300 uppercase font-black tracking-[0.4em] italic text-[10px] md:text-xs mb-4">
            ✦ Our scope ✦
          </h3>
          <h2 className="text-4xl md:text-6xl font-black text-pink-600 uppercase tracking-tighter leading-none">
            What we <br />{" "}
            <span className="italic font-serif font-light text-pink-300">
              take care of.
            </span>
          </h2>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ServiceCard
              icon={Layers}
              title="Infrastructure"
              description="Total backend setup. CRM, reporting, and payment flows."
              delay={0}
            />
            <ServiceCard
              icon={Target}
              title="Sales Vehicles"
              description="VSLs and funnels that convert cold traffic into deep loyalty."
              delay={100}
            />
            <ServiceCard
              icon={Mail}
              title="Email Scaling"
              description="Full-service management. Your voice, our strategy, your profit."
              delay={200}
            />
            <ServiceCard
              icon={Users}
              title="Team Growth"
              description="We hire, train, and manage your sales setters and closers."
              delay={300}
            />
            <ServiceCard
              icon={MessageSquare}
              title="DM Mastery"
              description="Every interaction is optimized for high-ticket conversion."
              delay={400}
            />
            <ServiceCard
              icon={ShieldCheck}
              title="CEO Peace"
              description="Student success systems that protect your mental health."
              delay={500}
            />
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section
        id="audit"
        className="py-32 md:py-48 px-6 md:px-8 relative overflow-hidden text-center bg-pink-50/20"
      >
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-8 md:mb-12 inline-block">
            <CastleIcon
              className="text-pink-300 mx-auto mb-6 md:mb-8 transition-transform hover:scale-110 duration-500"
              size={64}
              mdSize={80}
            />
            <h2 className="text-5xl md:text-[9rem] font-black text-pink-600 uppercase tracking-tighter leading-none">
              25 Minutes. <br />{" "}
              <span className="italic font-serif font-light text-pink-300 normal-case lowercase tracking-tight">
                The Audit.
              </span>
            </h2>
          </div>
          <p className="text-lg md:text-2xl text-pink-900/50 italic font-serif leading-relaxed mb-10 md:mb-16 max-w-xl mx-auto px-4">
            Find the hidden leaks in your empire. A pure strategy map to your
            first 7-figure month.
          </p>
          <div className="w-full max-w-xs md:max-w-none mx-auto">
            <button
              onClick={handleCTA}
              className="w-full md:w-auto px-10 md:px-20 py-6 md:py-10 bg-pink-600 text-white rounded-full text-xl md:text-2xl font-black uppercase italic tracking-widest hover:bg-pink-700 transition-all hover:scale-105 shadow-2xl shadow-pink-200"
            >
              Let's talk
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 md:py-20 px-6 md:px-8 border-t border-pink-50 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 md:gap-16">
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <div className="flex items-center gap-3">
              <CastleIcon className="text-pink-600" size={24} />
              <span className="font-black tracking-[0.2em] uppercase text-sm text-pink-900 italic">
                ScaleHouse
              </span>
            </div>
            <div className="flex items-center gap-4 text-pink-300 text-[10px] font-black uppercase tracking-[0.4em]">
              <Heart
                size={14}
                className="fill-pink-400 stroke-none animate-pulse"
              />{" "}
              The Low Cortisol Era
            </div>
          </div>

          <div className="w-full pt-10 md:pt-12 border-t border-pink-50/50 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-wrap justify-center gap-x-6 md:gap-x-8 gap-y-4 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-pink-300">
              <a href="#" className="hover:text-pink-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-pink-600 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-pink-600 transition-colors">
                Cookie Settings
              </a>
              <a href="#" className="hover:text-pink-600 transition-colors">
                Earnings Disclaimer
              </a>
            </div>
            <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-pink-200 text-center md:text-right">
              © 2024 ScaleHouse. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
