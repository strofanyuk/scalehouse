import React, { useEffect, useState } from 'react';
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
  Castle 
} from 'lucide-react';

// Ссылка на Typeform для твоего главного сайта ScaleHouse
const FORM_URL = "https://form.typeform.com/to/F9agk7Yj";

// Иконка замка ScaleHouse
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
    <path d="M15 14h3v-5l-1.5-2-1.5 2v5z" />
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
    <h4 className="text-xl font-black text-pink-600 uppercase mb-3 tracking-tight">{title}</h4>
    <p className="text-pink-900/60 italic font-serif leading-relaxed text-lg">{description}</p>
  </div>
);

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const currentPath = window.location.pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Если мы на странице квиза, динамически выполняем Сашин JS после вставки HTML
    if (currentPath === '/quiz') {
      const scripts = document.getElementById('survey-holder')?.getElementsByTagName('script');
      if (scripts) {
        Array.from(scripts).forEach(script => {
          const newScript = document.createElement('script');
          if (script.src) {
            newScript.src = script.src;
          } else {
            newScript.textContent = script.textContent;
          }
          document.body.appendChild(newScript);
        });
      }
    }
  }, [currentPath]);

  const handleCTA = () => {
    window.open(FORM_URL, '_blank');
  };

  // ==========================================
  // ОПЕРАТОР ПЕРЕКЛЮЧЕНИЯ НА СТРАНИЦУ КВИЗА САШИ
  // ==========================================
  if (currentPath === '/quiz') {
    const sashaHtmlContent = `
      <div id="survey-holder" style="background-color: #FAF6F0; color: #231F20; min-height: 100vh; font-family: 'Plus Jakarta Sans', sans-serif;">
        <header class="absolute top-0 left-0 w-full z-50 px-6 md:px-16 lg:px-24 py-6 flex justify-between items-center border-b border-luxury-border/20">
            <div class="flex items-center gap-3 text-[10px] md:text-xs tracking-[0.2em] font-bold text-luxury-dark uppercase">
                <span>ALEKSANDRA</span>
                <span class="text-luxury-border">|</span>
                <a href="https://instagram.com/alex.dorokhina" target="_blank" rel="noopener noreferrer" class="hover:text-luxury-accent transition-colors flex items-center gap-1">
                    <i class="fab fa-instagram text-xs"></i> @alex.dorokhina
                </a>
            </div>
            <a href="#screen-survey" class="text-[9px] uppercase tracking-[0.2em] font-bold border border-luxury-dark hover:border-luxury-accent px-5 py-2.5 rounded-full transition-all text-luxury-dark hover:text-white hover:bg-luxury-dark duration-300">
                Fill Survey <i class="fas fa-arrow-right ml-1 text-[8px]"></i>
            </a>
        </header>

        <section id="screen-hero" class="min-h-screen flex flex-col justify-center relative overflow-hidden px-4 sm:px-6 md:px-16 lg:px-24 py-12">
            <div class="absolute inset-y-0 right-0 w-full lg:w-[55%] z-0 h-full">
                <img src="https://i.ibb.co.com/S4zqW1LZ/2026-05-29-22-44-26.png" alt="Aleksandra Dorokhina" class="w-full h-full object-cover object-[67%_center] lg:object-[center_35%] scale-100" onerror="this.src='https://placehold.co/1000x1500/FAF6F0/231F20?text=Aleksandra'">
                <div class="absolute inset-0 portrait-fade-left hidden lg:block"></div>
                <div class="absolute inset-0 portrait-fade-bottom"></div>
            </div>

            <div class="max-w-7xl mx-auto w-full relative z-20">
                <div class="max-w-xl md:max-w-2xl space-y-6 md:space-y-8 text-left bg-luxury-cream/80 lg:bg-transparent p-6 sm:p-10 lg:p-0 rounded-3xl backdrop-blur-[3px] lg:backdrop-blur-none border border-luxury-border/30 lg:border-none shadow-xl shadow-luxury-dark/[0.02] lg:shadow-none mt-16 lg:mt-0">
                    <div class="space-y-2">
                        <h1 class="serif-title text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-luxury-dark text-left leading-[0.95]">
                            Aleksandra <br> Aleksandra Dorokhina
                        </h1>
                        <p class="serif-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-luxury-accent italic font-light tracking-wide mt-2">
                            Let's Connect
                        </p>
                    </div>

                    <div class="w-20 h-[1px] bg-luxury-accent"></div>

                    <p class="text-xs sm:text-sm md:text-base text-luxury-dark/85 max-w-md font-light leading-relaxed">
                        Our community is growing fast! I want to get to know you better. Answer a few super-easy questions, get your free, <span class="font-semibold text-luxury-dark underline decoration-luxury-accent">brand-new Lean Guide</span>, and win a private lifestyle call with me.
                    </p>

                    <div class="pt-2">
                        <a href="#screen-survey" class="glowing-btn inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-luxury-accent hover:bg-luxury-accentHover text-white font-semibold uppercase tracking-widest text-[10px] sm:text-xs rounded-full transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98]">
                            <span>Fill Out the Survey</span>
                            <i class="fas fa-chevron-right text-[10px]"></i>
                        </a>
                        <p class="text-[9px] sm:text-[10px] text-luxury-dark/40 uppercase tracking-widest mt-3 ml-2">Takes only 3 minutes</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="screen-bonuses" class="min-h-screen flex flex-col justify-center py-20 px-4 sm:px-6 md:px-16 lg:px-24 bg-[#F5EFE6]/40 border-t border-b border-luxury-border/30">
            <div class="max-w-7xl mx-auto w-full space-y-16">
                <div class="text-center max-w-2xl mx-auto space-y-4 px-4">
                    <h2 class="serif-title text-4xl md:text-6xl font-light text-luxury-dark leading-tight">
                        What you get <span class="italic font-normal text-luxury-accent">for sharing</span>
                    </h2>
                    <div class="w-12 h-[1px] bg-luxury-accent/50 mx-auto mt-4"></div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                    <div class="luxury-card p-8 lg:p-10 rounded-3xl flex flex-col justify-between space-y-8 relative overflow-hidden border-2 border-luxury-accent/10">
                        <div class="absolute top-0 right-0 bg-luxury-dark text-white text-[8px] uppercase tracking-widest font-bold px-3 py-1 rounded-bl-xl">
                            Brand-New & Unreleased
                        </div>
                        <div class="space-y-6">
                            <div class="w-12 h-12 rounded-full bg-luxury-dark flex items-center justify-center text-white text-lg">
                                <i class="fas fa-book-open"></i>
                            </div>
                            <div class="space-y-3">
                                <h3 class="serif-title text-2xl lg:text-3xl font-light italic text-luxury-dark min-h-[56px] flex items-center">Russian Lean Guide</h3>
                                <p class="text-[9px] uppercase tracking-widest text-luxury-accent font-bold">Instant Download</p>
                                <p class="text-xs text-luxury-dark/70 leading-relaxed font-light">
                                    Get immediate access to my private step-by-step handbook on wellness, fat loss, easy sugar-free habits, and daily secrets to stay light and toned.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="luxury-card p-8 lg:p-10 rounded-3xl flex flex-col justify-between space-y-8 relative overflow-hidden border-2 border-transparent">
                        <div class="space-y-6">
                            <div class="w-12 h-12 rounded-full bg-luxury-dark flex items-center justify-center text-white text-lg">
                                <i class="fas fa-comments"></i>
                            </div>
                            <div class="space-y-3">
                                <h3 class="serif-title text-2xl lg:text-3xl font-light italic text-luxury-dark min-h-[56px] flex items-center">Brief Interview</h3>
                                <p class="text-[9px] uppercase tracking-widest text-luxury-accent font-bold">Selected outreach</p>
                                <p class="text-xs text-luxury-dark/70 leading-relaxed font-light">
                                    We will selectively reach out to some participants. My team will ask a few quick questions and conduct a brief text interview to understand your health goals.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="luxury-card p-8 lg:p-10 rounded-3xl flex flex-col justify-between space-y-8 border-2 border-luxury-accent/20 relative overflow-hidden">
                        <div class="absolute top-0 right-0 bg-luxury-accent text-white text-[9px] uppercase tracking-widest font-bold px-3 py-1 rounded-bl-xl">
                            Exclusive
                        </div>
                        <div class="space-y-6">
                            <div class="w-12 h-12 rounded-full bg-luxury-accent flex items-center justify-center text-white text-lg">
                                <i class="fas fa-star"></i>
                            </div>
                            <div class="space-y-3">
                                <h3 class="serif-title text-2xl lg:text-3xl font-light italic text-luxury-dark min-h-[56px] flex items-center">Personal Video Call</h3>
                                <p class="text-[9px] uppercase tracking-widest text-luxury-accent font-bold">1-on-1 with Alex</p>
                                <p class="text-xs text-luxury-dark/70 leading-relaxed font-light">
                                    I will personally review the survey entries and choose a few people for a completely free video call. We will design your dream health and wellness protocol together.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="screen-survey" class="min-h-screen flex flex-col justify-center py-20 px-4 sm:px-6 md:px-16 lg:px-24">
            <div class="max-w-2xl mx-auto w-full">
                <div class="text-center mb-8 space-y-3 px-4">
                    <h2 class="serif-title text-3xl sm:text-4xl md:text-5xl font-light text-luxury-dark leading-tight">
                        Fill out the survey <br>
                        <span class="italic text-luxury-accent font-normal">& get your Russian Lean Guide</span>
                    </h2>
                    <p class="text-xs sm:text-sm text-luxury-dark/70 max-w-md mx-auto font-light leading-relaxed">
                        I’m so excited to get to know you! It’ll take you 3 to 4 minutes to fill this out, but your answers will help me a lot. The moment you finish, you’ll get a guide with my full system.<br>
                        <span class="serif-title italic font-semibold text-luxury-accent text-sm">your Alex xx</span>
                    </p>
                    <div class="w-12 h-[1px] bg-luxury-accent/40 mx-auto mt-4"></div>
                </div>

                <div class="luxury-card bg-white rounded-3xl p-6 sm:p-8 md:p-14 border border-luxury-border shadow-lg relative overflow-hidden">
                    <div class="absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r from-luxury-accent/30 via-luxury-accent to-luxury-accent/30"></div>

                    <div id="survey-inner-wrapper" class="space-y-6">
                        <div id="survey-progress-container" class="mb-8">
                            <div class="flex items-center justify-between text-[10px] uppercase tracking-widest text-luxury-dark/55 mb-2 font-bold">
                                <span id="step-number-label">Question 1 of 11</span>
                                <span id="step-desc-label">About Yourself</span>
                            </div>
                            <div class="w-full bg-luxury-cream h-[4px] rounded-full overflow-hidden">
                                <div id="survey-progress-bar" class="bg-luxury-accent h-full w-[9.09%] transition-all duration-500 ease-out"></div>
                            </div>
                        </div>

                        <form id="custdev-survey-form" onsubmit="handleSurveySubmit(event)" class="space-y-8">
                            <div id="q-block-1" class="survey-question-step space-y-6">
                                <div class="space-y-2">
                                    <h3 class="serif-title text-2xl md:text-3xl font-light text-luxury-dark">A little bit about yourself</h3>
                                    <p class="text-xs text-luxury-dark/50">Please fill out these details to start your wellness profile.</p>
                                </div>
                                <div class="space-y-4">
                                    <div class="space-y-1">
                                        <label class="text-[10px] uppercase tracking-wider font-bold text-luxury-dark/60">First Name *</label>
                                        <input type="text" id="q-name" placeholder="Name" class="w-full bg-luxury-cream border border-luxury-border focus:border-luxury-accent focus:ring-1 focus:ring-luxury-accent outline-none rounded-xl px-4 py-3.5 text-sm transition-all text-luxury-dark placeholder-luxury-dark/30">
                                    </div>
                                    <div class="space-y-1">
                                        <label class="text-[10px] uppercase tracking-wider font-bold text-luxury-dark/60">Email *</label>
                                        <input type="email" id="q-email" placeholder="example@email.com" class="w-full bg-luxury-cream border border-luxury-border focus:border-luxury-accent focus:ring-1 focus:ring-luxury-accent outline-none rounded-xl px-4 py-3.5 text-sm transition-all text-luxury-dark placeholder-luxury-dark/30">
                                    </div>
                                    <div class="space-y-1">
                                        <label class="text-[10px] uppercase tracking-wider font-bold text-luxury-dark/60">Phone Number *</label>
                                        <div class="flex gap-2">
                                            <select id="q-phone-code" class="bg-luxury-cream border border-luxury-border focus:border-luxury-accent outline-none rounded-xl px-2 py-3.5 text-xs transition-all text-luxury-dark max-w-[110px] cursor-pointer">
                                                <option value="+7" selected>🇷🇺 +7</option>
                                                <option value="+380">🇺🇦 +380</option>
                                                <option value="+375">🇧🇾 +375</option>
                                                <option value="+7">🇰🇿 +7</option>
                                                <option value="+998">🇺🇿 +998</option>
                                                <option value="+995">🇬🇪 +995</option>
                                                <option value="+374">🇦🇲 +374</option>
                                                <option value="+90">🇹рки +90</option>
                                                <option value="+1">🇺🇸 +1</option>
                                                <option value="+44">🇬🇧 +44</option>
                                                <option value="+49">🇩🇪 +49</option>
                                                <option value="+971">🇦🇪 +971</option>
                                                <option value="+62">🇮🇩 +62</option>
                                            </select>
                                            <input type="text" id="q-phone" placeholder="Phone Number" class="flex-1 bg-luxury-cream border border-luxury-border focus:border-luxury-accent focus:ring-1 focus:ring-luxury-accent outline-none rounded-xl px-4 py-3.5 text-sm transition-all text-luxury-dark placeholder-luxury-dark/30">
                                        </div>
                                    </div>
                                    <div class="space-y-1">
                                        <label class="text-[10px] uppercase tracking-wider font-bold text-luxury-dark/60">Instagram Handle <span class="text-luxury-dark/40 font-normal">(Optional)</span></label>
                                        <div class="relative">
                                            <span class="absolute left-4 top-1/2 -translate-y-1/2 text-luxury-dark/40 text-sm">@</span>
                                            <input type="text" id="q-instagram" placeholder="username" class="w-full bg-luxury-cream border border-luxury-border focus:border-luxury-accent focus:ring-1 focus:ring-luxury-accent outline-none rounded-xl pl-9 pr-4 py-3.5 text-sm transition-all text-luxury-dark placeholder-luxury-dark/30">
                                        </div>
                                    </div>
                                    <div class="space-y-1">
                                        <label class="text-[10px] uppercase tracking-wider font-bold text-luxury-dark/60">Occupation? *</label>
                                        <input type="text" id="q-occupation" placeholder="What do you do?" class="w-full bg-luxury-cream border border-luxury-border focus:border-luxury-accent focus:ring-1 focus:ring-luxury-accent outline-none rounded-xl px-4 py-3.5 text-sm transition-all text-luxury-dark placeholder-luxury-dark/30">
                                    </div>
                                </div>
                            </div>

                            <div id="q-block-2" class="survey-question-step space-y-6 hidden">
                                <div class="space-y-2">
                                    <h3 class="serif-title text-2xl md:text-3xl font-light text-luxury-dark">How old are you?</h3>
                                    <p class="text-xs text-luxury-dark/50">Please select your age bracket.</p>
                                </div>
                                <div class="grid grid-cols-1 gap-3">
                                    <label class="flex items-center gap-3 p-4 bg-luxury-cream/50 border border-luxury-border rounded-xl cursor-pointer hover:border-luxury-accent/50 transition-all">
                                        <input type="radio" name="q-age" value="under-18" class="accent-luxury-accent w-4 h-4">
                                        <span class="text-xs text-luxury-dark/85">Under 18</span>
                                    </label>
                                    <label class="flex items-center gap-3 p-4 bg-luxury-cream/50 border border-luxury-border rounded-xl cursor-pointer hover:border-luxury-accent/50 transition-all">
                                        <input type="radio" name="q-age" value="18-24" class="accent-luxury-accent w-4 h-4">
                                        <span class="text-xs text-luxury-dark/85">18 to 24</span>
                                    </label>
                                    <label class="flex items-center gap-3 p-4 bg-luxury-cream/50 border border-luxury-border rounded-xl cursor-pointer hover:border-luxury-accent/50 transition-all">
                                        <input type="radio" name="q-age" value="25-30" class="accent-luxury-accent w-4 h-4">
                                        <span class="text-xs text-luxury-dark/85">25 to 30</span>
                                    </label>
                                    <label class="flex items-center gap-3 p-4 bg-luxury-cream/50 border border-luxury-border rounded-xl cursor-pointer hover:border-luxury-accent/50 transition-all">
                                        <input type="radio" name="q-age" value="31-plus" class="accent-luxury-accent w-4 h-4">
                                        <span class="text-xs text-luxury-dark/85">31+</span>
                                    </label>
                                </div>
                            </div>

                            <div id="q-block-3" class="survey-question-step space-y-6 hidden">
                                <div class="space-y-2">
                                    <h3 class="serif-title text-2xl md:text-3xl font-light text-luxury-dark">What part of my content do you find the most useful?</h3>
                                    <p class="text-xs text-luxury-dark/50">Select all that apply (multiple choice).</p>
                                </div>
                                <div class="grid grid-cols-1 gap-3">
                                    <label class="flex items-center gap-3 p-4 bg-luxury-cream/50 border border-luxury-border rounded-xl cursor-pointer hover:border-luxury-accent/50 transition-all">
                                        <input type="checkbox" name="q-content-useful" value="recipes" class="accent-luxury-accent w-5 h-5 rounded-md">
                                        <span class="text-xs text-luxury-dark/85">Healthy recipes and nutrition</span>
                                    </label>
                                    <label class="flex items-center gap-3 p-4 bg-luxury-cream/50 border border-luxury-border rounded-xl cursor-pointer hover:border-luxury-accent/50 transition-all">
                                        <input type="checkbox" name="q-content-useful" value="videos" class="accent-luxury-accent w-5 h-5 rounded-md">
                                        <span class="text-xs text-luxury-dark/85">Lean and healthy lifestyle videos</span>
                                    </label>
                                    <label class="flex items-center gap-3 p-4 bg-luxury-cream/50 border border-luxury-border rounded-xl cursor-pointer hover:border-luxury-accent/50 transition-all">
                                        <input type="checkbox" name="q-content-useful" value="tips" class="accent-luxury-accent w-5 h-5 rounded-md">
                                        <span class="text-xs text-luxury-dark/85">Supplements and skin health tips</span>
                                    </label>
                                    <label class="flex items-center gap-3 p-4 bg-luxury-cream/50 border border-luxury-border rounded-xl cursor-pointer hover:border-luxury-accent/50 transition-all">
                                        <input type="checkbox" name="q-content-useful" value="pcos" class="accent-luxury-accent w-5 h-5 rounded-md">
                                        <span class="text-xs text-luxury-dark/85">Sugar spikes and PCOS content</span>
                                    </label>
                                    <label class="flex items-center gap-3 p-4 bg-luxury-cream/50 border border-luxury-border rounded-xl cursor-pointer hover:border-luxury-accent/50 transition-all">
                                        <input type="checkbox" name="q-content-useful" value="other" onchange="toggleOtherInput(3, this.checked)" class="accent-luxury-accent w-5 h-5 rounded-md">
                                        <span class="text-xs text-luxury-dark/85">Other:</span>
                                    </label>
                                    <div id="other-input-wrapper-3" class="hidden pl-2">
                                        <input type="text" id="q-content-useful-other" placeholder="Please specify..." class="w-full bg-luxury-cream border border-luxury-border focus:border-luxury-accent focus:ring-1 focus:ring-luxury-accent outline-none rounded-xl px-4 py-3 text-sm transition-all text-luxury-dark">
                                    </div>
                                </div>
                            </div>

                            <div id="q-block-4" class="survey-question-step space-y-6 hidden">
                                <div class="space-y-2">
                                    <h3 class="serif-title text-2xl md:text-3xl font-light text-luxury-dark">What’s your main struggle right now?</h3>
                                    <p class="text-xs text-luxury-dark/50">Select one option.</p>
                                </div>
                                <div class="grid grid-cols-1 gap-3">
                                    <label class="flex items-center gap-3 p-4 bg-luxury-cream/50 border border-luxury-border rounded-xl cursor-pointer hover:border-luxury-accent/50 transition-all">
                                        <input type="radio" name="q-struggle" value="skin" onclick="toggleOtherInput(4, false)" class="accent-luxury-accent w-4 h-4">
                                        <span class="text-xs text-luxury-dark/85">Skin quality (acne, breakouts, etc.)</span>
                                    </label>
                                    <label class="flex items-center gap-3 p-4 bg-luxury-cream/50 border border-luxury-border rounded-xl cursor-pointer hover:border-luxury-accent/50 transition-all">
                                        <input type="radio" name="q-struggle" value="appearance" onclick="toggleOtherInput(4, false)" class="accent-luxury-accent w-4 h-4">
                                        <span class="text-xs text-luxury-dark/85">Physical appearance (a few extra kg, lack of muscle tone)</span>
                                    </label>
                                    <label class="flex items-center gap-3 p-4 bg-luxury-cream/50 border border-luxury-border rounded-xl cursor-pointer hover:border-luxury-accent/50 transition-all">
                                        <input type="radio" name="q-struggle" value="energy" onclick="toggleOtherInput(4, false)" class="accent-luxury-accent w-4 h-4">
                                        <span class="text-xs text-luxury-dark/85">Low energy (feeling constantly tired and drained)</span>
                                    </label>
                                    <label class="flex items-center gap-3 p-4 bg-luxury-cream/50 border border-luxury-border rounded-xl cursor-pointer hover:border-luxury-accent/50 transition-all">
                                        <input type="radio" name="q-struggle" value="other" onclick="toggleOtherInput(4, true)" class="accent-luxury-accent w-4 h-4">
                                        <span class="text-xs text-luxury-dark/85">Other:</span>
                                    </label>
                                    <div id="other-input-wrapper-4" class="hidden pl-2">
                                        <input type="text" id="q-struggle-other" placeholder="Please specify..." class="w-full bg-luxury-cream border border-luxury-border focus:border-luxury-accent focus:ring-1 focus:ring-luxury-accent outline-none rounded-xl px-4 py-3 text-sm transition-all text-luxury-dark">
                                    </div>
                                </div>
                            </div>

                            <div id="q-block-5" class="survey-question-step space-y-6 hidden">
                                <div class="space-y-2">
                                    <h3 class="serif-title text-2xl md:text-3xl font-light text-luxury-dark">If you could fix one thing first, what’s your number 1 priority?</h3>
                                    <p class="text-xs text-luxury-dark/50">Select one option.</p>
                                </div>
                                <div class="grid grid-cols-1 gap-3">
                                    <label class="flex items-center gap-3 p-4 bg-luxury-cream/50 border border-luxury-border rounded-xl cursor-pointer hover:border-luxury-accent/50 transition-all">
                                        <input type="radio" name="q-priority" value="skin" onclick="toggleOtherInput(5, false)" class="accent-luxury-accent w-4 h-4">
                                        <span class="text-xs text-luxury-dark/85">My skin</span>
                                    </label>
                                    <label class="flex items-center gap-3 p-4 bg-luxury-cream/50 border border-luxury-border rounded-xl cursor-pointer hover:border-luxury-accent/50 transition-all">
                                        <input type="radio" name="q-priority" value="weight" onclick="toggleOtherInput(5, false)" class="accent-luxury-accent w-4 h-4">
                                        <span class="text-xs text-luxury-dark/85">My weight</span>
                                    </label>
                                    <label class="flex items-center gap-3 p-4 bg-luxury-cream/50 border border-luxury-border rounded-xl cursor-pointer hover:border-luxury-accent/50 transition-all">
                                        <input type="radio" name="q-priority" value="energy" onclick="toggleOtherInput(5, false)" class="accent-luxury-accent w-4 h-4">
                                        <span class="text-xs text-luxury-dark/85">My energy and how I feel overall</span>
                                    </label>
                                    <label class="flex items-center gap-3 p-4 bg-luxury-cream/50 border border-luxury-border rounded-xl cursor-pointer hover:border-luxury-accent/50 transition-all">
                                        <input type="radio" name="q-priority" value="other" onclick="toggleOtherInput(5, true)" class="accent-luxury-accent w-4 h-4">
                                        <span class="text-xs text-luxury-dark/85">Other:</span>
                                    </label>
                                    <div id="other-input-wrapper-5" class="hidden pl-2">
                                        <input type="text" id="q-priority-other" placeholder="Please specify..." class="w-full bg-luxury-cream border border-luxury-border focus:border-luxury-accent focus:ring-1 focus:ring-luxury-accent outline-none rounded-xl px-4 py-3 text-sm transition-all text-luxury-dark">
                                    </div>
                                </div>
                            </div>

                            <div id="q-block-6" class="survey-question-step space-y-6 hidden">
                                <div class="space-y-2">
                                    <h3 class="serif-title text-2xl md:text-3xl font-light text-luxury-dark">Describe your health and wellness goal</h3>
                                    <p class="text-xs text-luxury-dark/50">(e.g. “I want to lose 2 kg before my vacation”)</p>
                                </div>
                                <div class="space-y-3">
                                    <textarea id="q-goal-description" rows="4" placeholder="My goal is..." class="w-full bg-luxury-cream border border-luxury-border focus:border-luxury-accent focus:ring-1 focus:ring-luxury-accent outline-none rounded-xl px-5 py-4 text-sm transition-all text-luxury-dark placeholder-luxury-dark/30"></textarea>
                                    <p class="text-[10px] text-luxury-dark/40 uppercase tracking-wider text-right">Minimum 5 characters required</p>
                                </div>
                            </div>

                            <div id="q-block-7" class="survey-question-step space-y-6 hidden">
                                <div class="space-y-2">
                                    <h3 class="serif-title text-2xl md:text-3xl font-light text-luxury-dark">What do you feel is stopping you from getting there on your own?</h3>
                                    <p class="text-xs text-luxury-dark/50">You can select multiple options.</p>
                                </div>
                                <div class="grid grid-cols-1 gap-3">
                                    <label class="flex items-center gap-3 p-4 bg-luxury-cream/50 border border-luxury-border rounded-xl cursor-pointer hover:border-luxury-accent/50 transition-all">
                                        <input type="checkbox" name="q-stopping" value="system" class="accent-luxury-accent w-5 h-5 rounded-md">
                                        <span class="text-xs text-luxury-dark/85">No clear system to follow</span>
                                    </label>
                                    <label class="flex items-center gap-3 p-4 bg-luxury-cream/50 border border-luxury-border rounded-xl cursor-pointer hover:border-luxury-accent/50 transition-all">
                                        <input type="checkbox" name="q-stopping" value="discipline" class="accent-luxury-accent w-5 h-5 rounded-md">
                                        <span class="text-xs text-luxury-dark/85">Struggling with discipline</span>
                                    </label>
                                    <label class="flex items-center gap-3 p-4 bg-luxury-cream/50 border border-luxury-border rounded-xl cursor-pointer hover:border-luxury-accent/50 transition-all">
                                        <input type="checkbox" name="q-stopping" value="nutrition" class="accent-luxury-accent w-5 h-5 rounded-md">
                                        <span class="text-xs text-luxury-dark/85">Don't understand nutrition</span>
                                    </label>
                                    <label class="flex items-center gap-3 p-4 bg-luxury-cream/50 border border-luxury-border rounded-xl cursor-pointer hover:border-luxury-accent/50 transition-all">
                                        <input type="checkbox" name="q-stopping" value="longterm" class="accent-luxury-accent w-5 h-5 rounded-md">
                                        <span class="text-xs text-luxury-dark/85">Can't stick to programs long-term</span>
                                    </label>
                                    <label class="flex items-center gap-3 p-4 bg-luxury-cream/50 border border-luxury-border rounded-xl cursor-pointer hover:border-luxury-accent/50 transition-all">
                                        <input type="checkbox" name="q-stopping" value="time" class="accent-luxury-accent w-5 h-5 rounded-md">
                                        <span class="text-xs text-luxury-dark/85">Lack of time</span>
                                    </label>
                                    <label class="flex items-center gap-3 p-4 bg-luxury-cream/50 border border-luxury-border rounded-xl cursor-pointer hover:border-luxury-accent/50 transition-all">
                                        <input type="checkbox" name="q-stopping" value="scared" class="accent-luxury-accent w-5 h-5 rounded-md">
                                        <span class="text-xs text-luxury-dark/85">Fear of giving up again</span>
                                    </label>
                                    <label class="flex items-center gap-3 p-4 bg-luxury-cream/50 border border-luxury-border rounded-xl cursor-pointer hover:border-luxury-accent/50 transition-all">
                                        <input type="checkbox" name="q-stopping" value="other" onchange="toggleOtherInput(7, this.checked)" class="accent-luxury-accent w-5 h-5 rounded-md">
                                        <span class="text-xs text-luxury-dark/85">Other:</span>
                                    </label>
                                    <div id="other-input-wrapper-7" class="hidden pl-2">
                                        <input type="text" id="q-stopping-other" placeholder="Please specify..." class="w-full bg-luxury-cream border border-luxury-border focus:border-luxury-accent focus:ring-1 focus:ring-luxury-accent outline-none rounded-xl px-4 py-3 text-sm transition-all text-luxury-dark">
                                    </div>
                                </div>
                            </div>

                            <div id="q-block-8" class="survey-question-step space-y-6 hidden">
                                <div class="space-y-2">
                                    <h3 class="serif-title text-2xl md:text-3xl font-light text-luxury-dark">How fast you want to achieve your goal?</h3>
                                    <p class="text-xs text-luxury-dark/50">Select one option.</p>
                                </div>
                                <div class="grid grid-cols-1 gap-3">
                                    <label class="flex items-center gap-3 p-4 bg-luxury-cream/50 border border-luxury-border rounded-xl cursor-pointer hover:border-luxury-accent/50 transition-all">
                                        <input type="radio" name="q-timeline" value="asap" class="accent-luxury-accent w-4 h-4">
                                        <span class="text-xs text-luxury-dark/85">ASAP (next 30 days)</span>
                                    </label>
                                    <label class="flex items-center gap-3 p-4 bg-luxury-cream/50 border border-luxury-border rounded-xl cursor-pointer hover:border-luxury-accent/50 transition-all">
                                        <input type="radio" name="q-timeline" value="summer" class="accent-luxury-accent w-4 h-4">
                                        <span class="text-xs text-luxury-dark/85">By the end of summer (next 90 days)</span>
                                    </label>
                                    <label class="flex items-center gap-3 p-4 bg-luxury-cream/50 border border-luxury-border rounded-xl cursor-pointer hover:border-luxury-accent/50 transition-all">
                                        <input type="radio" name="q-timeline" value="year" class="accent-luxury-accent w-4 h-4">
                                        <span class="text-xs text-luxury-dark/85">By the end of the year (5 to 6 month goal)</span>
                                    </label>
                                </div>
                            </div>

                            <div id="q-block-9" class="survey-question-step space-y-6 hidden">
                                <div class="space-y-2">
                                    <h3 class="serif-title text-2xl md:text-3xl font-light text-luxury-dark">Would you be open to investing in 1:1 work with me, where I help you reach your goals personally?</h3>
                                    <p class="text-xs text-luxury-dark/50">Select one option.</p>
                                </div>
                                <div class="grid grid-cols-1 gap-3">
                                    <label class="flex items-center gap-3 p-4 bg-luxury-cream/50 border border-luxury-border rounded-xl cursor-pointer hover:border-luxury-accent/50 transition-all">
                                        <input type="radio" name="q-mentorship" value="yes-absolutely" class="accent-luxury-accent w-4 h-4">
                                        <span class="text-xs text-luxury-dark/85">Yes, I AM ready!!</span>
                                    </label>
                                    <label class="flex items-center gap-3 p-4 bg-luxury-cream/50 border border-luxury-border rounded-xl cursor-pointer hover:border-luxury-accent/50 transition-all">
                                        <input type="radio" name="q-mentorship" value="yes-if-fit" class="accent-luxury-accent w-4 h-4">
                                        <span class="text-xs text-luxury-dark/85">Yes, if it feels like a perfect fit for me & my goals</span>
                                    </label>
                                    <label class="flex items-center gap-3 p-4 bg-luxury-cream/50 border border-luxury-border rounded-xl cursor-pointer hover:border-luxury-accent/50 transition-all">
                                        <input type="radio" name="q-mentorship" value="not-sure" class="accent-luxury-accent w-4 h-4">
                                        <span class="text-xs text-luxury-dark/85">Not sure yet, need more info first</span>
                                    </label>
                                </div>
                            </div>

                            <div id="q-block-10" class="survey-question-step space-y-6 hidden">
                                <div class="space-y-2">
                                    <h3 class="serif-title text-2xl md:text-3xl font-light text-luxury-dark">What investment feels comfortable for 1:1 work that gets you to your dream results?</h3>
                                    <p class="text-xs text-luxury-dark/50">Select one option.</p>
                                </div>
                                <div class="grid grid-cols-1 gap-3">
                                    <label class="flex items-center gap-3 p-4 bg-luxury-cream/50 border border-luxury-border rounded-xl cursor-pointer hover:border-luxury-accent/50 transition-all">
                                        <input type="radio" name="q-budget" value="under-1000" class="accent-luxury-accent w-4 h-4">
                                        <span class="text-xs text-luxury-dark/85">Up to $1,000</span>
                                    </label>
                                    <label class="flex items-center gap-3 p-4 bg-luxury-cream/50 border border-luxury-border rounded-xl cursor-pointer hover:border-luxury-accent/50 transition-all">
                                        <input type="radio" name="q-budget" value="1000-1500" class="accent-luxury-accent w-4 h-4">
                                        <span class="text-xs text-luxury-dark/85">$1,000 to $1,500</span>
                                    </label>
                                    <label class="flex items-center gap-3 p-4 bg-luxury-cream/50 border border-luxury-border rounded-xl cursor-pointer hover:border-luxury-accent/50 transition-all">
                                        <input type="radio" name="q-budget" value="1500-3000" class="accent-luxury-accent w-4 h-4">
                                        <span class="text-xs text-luxury-dark/85">$1,500 to $3,000</span>
                                    </label>
                                    <label class="flex items-center gap-3 p-4 bg-luxury-cream/50 border border-luxury-border rounded-xl cursor-pointer hover:border-luxury-accent/50 transition-all">
                                        <input type="radio" name="q-budget" value="3000-5000" class="accent-luxury-accent w-4 h-4">
                                        <span class="text-xs text-luxury-dark/85">$3,000 to $5,000</span>
                                    </label>
                                    <label class="flex items-center gap-3 p-4 bg-luxury-cream/50 border border-luxury-border rounded-xl cursor-pointer hover:border-luxury-accent/50 transition-all">
                                        <input type="radio" name="q-budget" value="5000-plus" class="accent-luxury-accent w-4 h-4">
                                        <span class="text-xs text-luxury-dark/85">$5,000+</span>
                                    </label>
                                </div>
                            </div>

                            <div id="q-block-11" class="survey-question-step space-y-6 hidden">
                                <div class="space-y-2">
                                    <h3 class="serif-title text-2xl md:text-3xl font-light text-luxury-dark">If I select you, would you be up for a quick call with me?</h3>
                                    <p class="text-xs text-luxury-dark/50">(this is where I map out your target and the plan to get there)</p>
                                </div>
                                <div class="grid grid-cols-1 gap-3">
                                    <label class="flex items-center gap-3 p-4 bg-luxury-cream/50 border border-luxury-border rounded-xl cursor-pointer hover:border-luxury-accent/50 transition-all">
                                        <input type="radio" name="q-call" value="yes-in" class="accent-luxury-accent w-4 h-4">
                                        <span class="text-xs text-luxury-dark/85">Yes, I’m in! Can’t wait!!</span>
                                    </label>
                                    <label class="flex items-center gap-3 p-4 bg-luxury-cream/50 border border-luxury-border rounded-xl cursor-pointer hover:border-luxury-accent/50 transition-all">
                                        <input type="radio" name="q-call" value="yes-love" class="accent-luxury-accent w-4 h-4">
                                        <span class="text-xs text-luxury-dark/85">Yes, I’d love that!</span>
                                    </label>
                                    <label class="flex items-center gap-3 p-4 bg-luxury-cream/50 border border-luxury-border rounded-xl cursor-pointer hover:border-luxury-accent/50 transition-all">
                                        <input type="radio" name="q-call" value="email-only" class="accent-luxury-accent w-4 h-4">
                                        <span class="text-xs text-luxury-dark/85">I’d rather keep things over email now</span>
                                    </label>
                                </div>
                            </div>

                            <div id="survey-actions-container" class="flex items-center justify-between pt-6 border-t border-luxury-border/50">
                                <button type="button" id="survey-prev-btn" onclick="navigateSurveyStep(-1)" class="invisible px-6 py-3 border border-luxury-border hover:bg-luxury-dark/5 text-luxury-dark text-[10px] uppercase tracking-widest font-semibold rounded-full transition-all">
                                    Back
                                </button>
                                <button type="button" id="survey-next-btn" onclick="navigateSurveyStep(1)" class="px-8 py-4 bg-luxury-dark hover:bg-luxury-dark/90 text-white text-[10px] uppercase tracking-widest font-semibold rounded-full transition-all">
                                    Continue
                                </button>
                                <button type="submit" id="survey-submit-btn" class="hidden glowing-btn px-10 py-5 bg-luxury-accent hover:bg-luxury-accentHover text-white text-[11px] uppercase tracking-[0.2em] font-bold rounded-full transition-all duration-300">
                                    Submit & Claim Lean Guide
                                </button>
                            </div>
                        </form>
                    </div>

                    <div id="survey-success-state" class="hidden text-center py-10 space-y-6">
                        <div class="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center text-3xl mx-auto shadow-inner">
                            <i class="fas fa-check-circle animate-bounce"></i>
                        </div>
                        <div class="space-y-4">
                            <h3 class="serif-title text-3xl italic text-luxury-dark">You're all set!</h3>
                            <p class="text-xs md:text-sm text-luxury-dark/75 max-w-md mx-auto leading-relaxed font-light">
                                Thank you so much for taking the time to share this with me. My team will review your answers and reach out to you shortly. <br>
                                You can download your guide below—I would absolutely love to hear your thoughts on it once you've had a look!
                            </p>
                            <p class="serif-title text-xl text-luxury-accent italic font-semibold">your Alex xx</p>
                        </div>
                        <div class="pt-4">
                            <div class="p-6 bg-luxury-cream rounded-2xl border border-luxury-border max-w-sm mx-auto space-y-4">
                                <p class="text-[9px] uppercase tracking-widest text-luxury-accent font-bold">🎁 Guaranteed Free Reward</p>
                                <h4 class="serif-title text-xl font-bold text-luxury-dark">Russian Lean Guide Formula</h4>
                                <button onclick="downloadLeanGuideTxt()" class="inline-flex items-center justify-center gap-2 px-6 py-4 bg-luxury-accent hover:bg-luxury-accentHover text-white text-[10px] uppercase tracking-widest font-semibold rounded-full transition-all w-full">
                                    <i class="fas fa-download"></i> Download Guide Formula (TXT)
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer class="bg-luxury-dark text-[#FAF6F0]/60 py-12 px-6 md:px-16 border-t border-white/5 relative">
            <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                <div class="space-y-1">
                    <span class="serif-title text-2xl font-light tracking-[0.2em] text-[#FAF6F0]">ALEKSANDRA<span class="text-luxury-accent">♥</span></span>
                    <p class="text-[9px] text-white/40 tracking-wider">All rights reserved &copy; 2026. Private Wellness Diary.</p>
                </div>
                <div class="flex flex-col sm:flex-row items-center gap-6 text-xs uppercase tracking-widest">
                    <a href="https://instagram.com/alex.dorokhina" target="_blank" rel="noopener noreferrer" class="hover:text-luxury-accent transition-colors flex items-center gap-2">
                        <i class="fab fa-instagram text-sm"></i> @alex.dorokhina
                    </a>
                </div>
            </div>
        </footer>

        <script>
            const GOOGLE_SHEETS_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbx__2fUG1DlI_UWDodWpgL76jCbor0qwhI-c-qYl1-ta6jjEwoZI_tKZ-mm-fgYNVFH/exec"; 
            let currentStep = 1;
            const totalSteps = 11;
            const stepDescriptions = ["Intro Message", "About Yourself", "Your Age", "Useful Content", "Main Struggles", "Your Priority", "Describe Wellness Goal", "Personal Stopping Roadblocks", "Goal Speed", "Openness to Mentorship", "Comfortable Budget Range", "Call Availability"];

            function toggleOtherInput(stepNum, shouldShow) {
                const wrapper = document.getElementById(\`other-input-wrapper-\${stepNum}\`);
                if (wrapper) {
                    if (shouldShow) wrapper.classList.remove('hidden');
                    else {
                        wrapper.classList.add('hidden');
                        const textInput = document.getElementById(\`q-priority-other\`) || document.getElementById(\`q-struggle-other\`) || document.getElementById(\`q-content-useful-other\`) || document.getElementById(\`q-stopping-other\`);
                        if (textInput && textInput.id.includes(stepNum)) textInput.value = '';
                    }
                }
            }

            function playAngelicChime() {
                try {
                    const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
                    if (!AudioCtxClass) return;
                    const audioCtx = new AudioCtxClass();
                    const nowTime = audioCtx.currentTime;
                    const osc1 = audioCtx.createOscillator();
                    const gain1 = audioCtx.createGain();
                    osc1.type = 'sine'; osc1.frequency.setValueAtTime(523.25, nowTime);
                    osc1.frequency.exponentialRampToValueAtTime(1046.50, nowTime + 0.35);
                    gain1.gain.setValueAtTime(0.1, nowTime); gain1.gain.exponentialRampToValueAtTime(0.001, nowTime + 1.0);
                    osc1.connect(gain1); gain1.connect(audioCtx.destination);
                    const osc2 = audioCtx.createOscillator();
                    const gain2 = audioCtx.createGain();
                    osc2.type = 'triangle'; osc2.frequency.setValueAtTime(659.25, nowTime + 0.05);
                    gain2.gain.setValueAtTime(0.06, nowTime + 0.05); gain2.gain.exponentialRampToValueAtTime(0.001, nowTime + 0.8);
                    osc2.connect(gain2); gain2.connect(audioCtx.destination);
                    osc1.start(nowTime); osc2.start(nowTime + 0.05);
                    osc1.stop(nowTime + 1.2); osc2.stop(nowTime + 1.0);
                } catch (err) {}
            }

            function navigateSurveyStep(direction) {
                if (direction === 1) {
                    if (currentStep === 1) {
                        const nameVal = document.getElementById('q-name').value.trim();
                        const emailVal = document.getElementById('q-email').value.trim();
                        const phoneVal = document.getElementById('q-phone').value.trim();
                        const occVal = document.getElementById('q-occupation').value.trim();
                        if (!nameVal || !emailVal || !phoneVal || !occVal) { triggerFloatingToast("Please fill out all required fields to proceed!"); return; }
                        if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(emailVal)) { triggerFloatingToast("Please enter a valid email address!"); return; }
                        if (phoneVal.replace(/\\D/g, '').length < 6) { triggerFloatingToast("Please enter a valid phone number!"); return; }
                    } else if (currentStep === 2) {
                        if (!document.querySelector('input[name="q-age"]:checked')) { triggerFloatingToast("Please select your age bracket!"); return; }
                    } else if (currentStep === 3) {
                        const chosenUseful = document.querySelectorAll('input[name="q-content-useful"]:checked');
                        if (chosenUseful.length === 0) { triggerFloatingToast("Please select at least one content option!"); return; }
                        if (Array.from(chosenUseful).some(cb => cb.value === 'other') && !document.getElementById('q-content-useful-other').value.trim()) { triggerFloatingToast("Please specify your 'Other' useful content value!"); return; }
                    } else if (currentStep === 4) {
                        const chosenStruggle = document.querySelector('input[name="q-struggle"]:checked');
                        if (!chosenStruggle) { triggerFloatingToast("Please select your main struggle option!"); return; }
                        if (chosenStruggle.value === 'other' && !document.getElementById('q-struggle-other').value.trim()) { triggerFloatingToast("Please specify your 'Other' struggle details!"); return; }
                    } else if (currentStep === 5) {
                        const chosenPriority = document.querySelector('input[name="q-priority"]:checked');
                        if (!chosenPriority) { triggerFloatingToast("Please select your number 1 priority!"); return; }
                        if (chosenPriority.value === 'other' && !document.getElementById('q-priority-other').value.trim()) { triggerFloatingToast("Please specify your 'Other' priority details!"); return; }
                    } else if (currentStep === 6) {
                        if (document.getElementById('q-goal-description').value.trim().length < 5) { triggerFloatingToast("Please tell me a bit more! (minimum 5 characters required)"); return; }
                    } else if (currentStep === 7) {
                        const chosenStopping = document.querySelectorAll('input[name="q-stopping"]:checked');
                        if (chosenStopping.length === 0) { triggerFloatingToast("Please select at least one roadblock!"); return; }
                        if (Array.from(chosenStopping).some(cb => cb.value === 'other' && !document.getElementById('q-stopping-other').value.trim())) { triggerFloatingToast("Please specify your 'Other' roadblock details!"); return; }
                    } else if (currentStep === 8) {
                        if (!document.querySelector('input[name="q-timeline"]:checked')) { triggerFloatingToast("Please select your speed timeline!"); return; }
                    } else if (currentStep === 9) {
                        if (!document.querySelector('input[name="q-mentorship"]:checked')) { triggerFloatingToast("Please specify your 1:1 mentorship investment openness!"); return; }
                    } else if (currentStep === 10) {
                        if (!document.querySelector('input[name="q-budget"]:checked')) { triggerFloatingToast("Please specify your comfortable budget level!"); return; }
                    }
                }
                const currentBlock = document.getElementById(\`q-block-\${currentStep}\`);
                if (currentBlock) currentBlock.classList.add('hidden');
                currentStep += direction;
                if (currentStep < 1) currentStep = 1;
                if (currentStep > totalSteps) currentStep = totalSteps;
                const nextBlock = document.getElementById(\`q-block-\${currentStep}\`);
                if (nextBlock) nextBlock.classList.remove('hidden');
                updateStepProgressBar();
            }

            function updateStepProgressBar() {
                const numLabel = document.getElementById('step-number-label');
                const descLabel = document.getElementById('step-desc-label');
                const visualBar = document.getElementById('survey-progress-bar');
                const btnBack = document.getElementById('survey-prev-btn');
                const btnNext = document.getElementById('survey-next-btn');
                const btnSubmit = document.getElementById('survey-submit-btn');
                if (!numLabel || !descLabel || !visualBar || !btnBack || !btnNext || !btnSubmit) return;
                visualBar.style.width = \`\${(currentStep / totalSteps) * 100}%\`;
                numLabel.textContent = \`Question \${currentStep} of \${totalSteps}\`;
                descLabel.textContent = stepDescriptions[currentStep];
                if (currentStep === 1) { btnBack.classList.add('invisible'); btnNext.classList.remove('hidden'); btnSubmit.classList.add('hidden'); }
                else if (currentStep === totalSteps) { btnBack.classList.remove('invisible'); btnNext.classList.add('hidden'); btnSubmit.classList.remove('hidden'); }
                else { btnBack.classList.remove('invisible'); btnNext.classList.remove('hidden'); btnSubmit.classList.add('hidden'); }
            }

            function handleSurveySubmit(e) {
                e.preventDefault();
                const chosenCall = document.querySelector('input[name="q-call"]:checked');
                if (!chosenCall) { triggerFloatingToast("Please select your call availability to submit!"); return; }
                const nameVal = document.getElementById('q-name').value.trim();
                const emailVal = document.getElementById('q-email').value.trim();
                const phoneCodeVal = document.getElementById('q-phone-code').value;
                const phoneVal = document.getElementById('q-phone').value.trim();
                const igInput = document.getElementById('q-instagram');
                const igVal = igInput && igInput.value.trim() ? \`@\${igInput.value.trim().replace(/^@/, '')}\` : 'Not provided';
                const occVal = document.getElementById('q-occupation').value.trim();
                let usefulList = Array.from(document.querySelectorAll('input[name="q-content-useful"]:checked')).map(cb => cb.value);
                const usefulIdx = usefulList.indexOf('other');
                if (usefulIdx !== -1) usefulList[usefulIdx] = \`Other: \${document.getElementById('q-content-useful-other').value.trim()}\`;
                const struggleSelection = document.querySelector('input[name="q-struggle"]:checked').value;
                let strugglesFinal = struggleSelection === 'other' ? \`Other: \${document.getElementById('q-struggle-other').value.trim()}\` : struggleSelection;
                const prioritySelection = document.querySelector('input[name="q-priority"]:checked').value;
                let priorityFinal = prioritySelection === 'other' ? \`Other: \${document.getElementById('q-priority-other').value.trim()}\` : prioritySelection;
                const goalDescFinal = document.getElementById('q-goal-description').value.trim();
                let stoppingList = Array.from(document.querySelectorAll('input[name="q-stopping"]:checked')).map(cb => cb.value);
                const stoppingIdx = stoppingList.indexOf('other');
                if (stoppingIdx !== -1) stoppingList[stoppingIdx] = \`Other: \${document.getElementById('q-stopping-other').value.trim()}\`;

                const leadData = {
                    id: 'lead_' + Date.now(),
                    name: nameVal,
                    email: emailVal,
                    social: \`Phone: \${phoneCodeVal} \${phoneVal} | IG: \${igVal}\`,
                    followReason: usefulList.join(', '),
                    wellnessGoal: strugglesFinal,
                    experience: \`Occupation: \${occVal} | Age Bracket: \${document.querySelector('input[name="q-age"]:checked').value} | Priority: \${priorityFinal} | Obstacles: \${stoppingList.join(', ')} | Timeline: \${document.querySelector('input[name="q-timeline"]:checked').value}\`,
                    investReady: \`Open to 1:1 mentorship: \${document.querySelector('input[name="q-mentorship"]:checked').value}\`,
                    budget: \`Budget window: \${document.querySelector('input[name="q-budget"]:checked').value}\`,
                    happyConnect: \`Call availability choice: \${chosenCall.value} | Main wellness goal prompt: \${goalDescFinal}\`,
                    timestamp: new Date().toISOString()
                };

                let existingDb = [];
                try {
                    const rawDb = localStorage.getItem('sasha_leads_database');
                    if (rawDb) existingDb = JSON.parse(rawDb);
                } catch (err) {}
                existingDb.push(leadData);
                localStorage.setItem('sasha_leads_database', JSON.stringify(existingDb));

                if (GOOGLE_SHEETS_WEBHOOK_URL && GOOGLE_SHEETS_WEBHOOK_URL.trim().startsWith('http')) {
                    fetch(GOOGLE_SHEETS_WEBHOOK_URL.trim(), { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(leadData) })
                    .then(() => console.log("Lead synced to Google Sheets."))
                    .catch(err => console.error("Sync failed:", err));
                }

                document.getElementById('survey-inner-wrapper').classList.add('hidden');
                document.getElementById('survey-progress-container').classList.add('hidden');
                document.getElementById('survey-actions-container').classList.add('hidden');
                playAngelicChime();
                document.getElementById('survey-success-state').classList.remove('hidden');
            }

            function downloadLeanGuideTxt() {
                const documentText = \`\\n===================================================\\n★ RUSSIAN LEAN GUIDE FORMULA BY ALEX DOROKHINA ★\\n===================================================\\nThank you so much for participating in our wellness community survey!\\n\\nYOUR BLUEPRINT TO PERSISTENT LIGHTNESS AND VIBRANT HEALTH:\\n\\n1. EMBRACE WHOLE, UNPROCESSED FOODS\\nEliminate ultra-processed elements. Fill your plate with high-quality, dense proteins, \\nhealthy fats (avocado, cold-pressed olive oil, raw seeds), and complex, fiber-rich carbohydrates. \\nThis guarantees stable satiety levels and smooth, non-crashing energy.\\n\\n2. CHOOSE CLEVER SUGAR-FREE ALTERNATIVES\\nRely on low-glycemic, natural sweeteners such as pure erythritol or high-quality stevia. \\nSwap industrial desserts for creamy chia-seed puddings, coconut-milk bowls, \\nand gluten-free bakes using almond or coconut flour.\\n\\n3. EMBRACE HORMONE-SAFE HABITS (PCOS-safe Protocols)\\nSteer clear of extreme caloric deficits and obsessive dieting. A woman's endocrine system \\nthrives on structure, consistent sleep before 11:00 PM, and delicate, restorative movement \\n(such as yoga, low-impact pilates, and aesthetic, brisk walks in nature).\\n\\nStay light, glowing, and aligned!\\nWith love,\\nAlex ♥ @alex.dorokhina\\n            \`;
                const dataBlob = new Blob([documentText], { type: 'text/plain;charset=utf-8' });
                const fileUrl = URL.createObjectURL(dataBlob);
                const hiddenAnchor = document.createElement('a');
                hiddenAnchor.href = fileUrl; hiddenAnchor.download = 'Alex_Dorokhina_Russian_Lean_Guide_Formula.txt';
                document.body.appendChild(hiddenAnchor); hiddenAnchor.click(); document.body.removeChild(hiddenAnchor);
                URL.revokeObjectURL(fileUrl); triggerFloatingToast("Your Russian Lean Guide Formula downloaded successfully!");
            }

            function triggerFloatingToast(msg) {
                const toast = document.createElement('div');
                toast.className = 'fixed bottom-10 right-10 z-[200] bg-luxury-dark text-[#FAF6F0] px-6 py-4 rounded-xl border border-luxury-accent/30 shadow-2xl flex items-center gap-3 text-xs uppercase tracking-widest font-semibold';
                toast.innerHTML = \`<i class="fas fa-exclamation-circle text-luxury-accent"></i> <span>\${msg}</span>\`;
                document.body.appendChild(toast);
                setTimeout(() => toast.remove(), 3500);
            }
        </script>
      </div>
    `;

    return (
      <>
        {/* Инжектим Сашины внешние шрифты и иконки FontAwesome прямо в head страницы */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        
        {/* Инжектим Сашины кастомные стили (градиенты, ховеры, анимации) */}
        <style>{`
          .serif-title { font-family: 'Cormorant Garamond', serif; }
          .portrait-fade-left { background: linear-gradient(to right, #FAF6F0 0%, rgba(250, 246, 240, 0.8) 15%, transparent 100%); }
          .portrait-fade-bottom { background: linear-gradient(to top, #FAF6F0 0%, transparent 100%); }
          .luxury-card { background: #FFFFFF; border: 1px solid rgba(235, 227, 213, 0.7); transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
          .luxury-card:hover { transform: translateY(-6px); box-shadow: 0 24px 48px rgba(35, 31, 32, 0.05); border-color: #D97486; }
          .glowing-btn { box-shadow: 0 0 0 0 rgba(217, 116, 134, 0.4); animation: pulse-glow 2.5s infinite; }
          @keyframes pulse-glow {
            0% { box-shadow: 0 0 0 0 rgba(217, 116, 134, 0.5); }
            70% { box-shadow: 0 0 0 15px rgba(217, 116, 134, 0); }
            100% { box-shadow: 0 0 0 0 rgba(217, 116, 134, 0); }
          }
          .bg-luxury-cream { background-color: #FAF6F0; }
          .border-luxury-border { border-color: #EBE3D5; }
          .text-luxury-dark { color: #231F20; }
          .text-luxury-accent { color: #D97486; }
          .bg-luxury-dark { background-color: #231F20; }
          .bg-luxury-accent { background-color: #D97486; }
          .hover\\:bg-luxury-accentHover:hover { background-color: #C05C6E; }
          .hover\\:bg-luxury-dark\\/90:hover { background-color: rgba(35, 31, 32, 0.9); }
          .accent-luxury-accent { accent-color: #D97486; }
        `}</style>

        {/* Безопасно рендерим весь HTML квиза со встроенным скриптом */}
        <div dangerouslySetInnerHTML={{ __html: sashaHtmlContent }} />
      </>
    );
  }

  // ==========================================
  // ГЛАВНАЯ СТРАНИЦА SCALEHOUSE (ТВОЙ ТЕКУЩИЙ КОД)
  // ==========================================
  const noiseTasks = [
    "CRM Infrastructure", "Payment Financing", "Lead Magnets", "VSL Optimization",
    "Email Scripting", "Content Systems", "Sales Hiring", "Setter Training",
    "Closer Management", "DM Strategy", "Onboarding", "Refund Disputes",
    "Data Reporting", "Offer Pricing", "Paid Ads", "Tech Automations",
    "Zapier Workflows", "Customer Support", "Ad Creative Scripting", "Offer Refinement",
    "Identity Strategy", "Funnel Scalability", "Metrics Tracking", "Success Systems"
  ];

  return (
    <div className="min-h-screen bg-[#FFFDFE] text-pink-950 font-sans selection:bg-pink-200 selection:text-pink-900 overflow-x-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-pink-100/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[10%] left-[-5%] w-[40%] h-[40%] bg-pink-50/50 rounded-full blur-[100px]"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 px-4 md:px-8 py-4 md:py-6 ${scrolled ? 'bg-white/90 backdrop-blur-md py-3 md:py-4 shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 md:gap-3 group cursor-pointer">
            <CastleIcon className="text-pink-600 transition-transform group-hover:scale-110 duration-500" size={28} />
            <span className="font-black tracking-[0.2em] uppercase text-xs md:text-sm">ScaleHouse</span>
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
          
          <h1 className="text-[13vw] sm:text-[10vw] md:text-[9.5rem] font-black leading-[1.1] md:leading-[0.8] tracking-tighter text-pink-600 uppercase">
            <span className="block">You bring</span>
            <span className="block italic font-serif font-light text-pink-300 normal-case lowercase tracking-tight">Content.</span>
            <span className="block">We build</span>
            <span className="block italic font-serif font-light text-pink-900 normal-case lowercase tracking-tight">Business.</span>
          </h1>

          <p className="text-lg md:text-3xl font-light text-pink-900/50 max-w-4xl mx-auto italic font-serif leading-relaxed px-4">
            We handle the boring, the heavy, and the technical. <br className="hidden md:block" />
            <span className="text-pink-600 font-bold not-italic font-sans">You stay the Star. You stay the CEO. You stay in Flow.</span>
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
      <section id="profile" className="py-24 md:py-40 px-6 md:px-8 relative z-10 bg-white/40">
        <div className="max-w-7xl mx-auto text-center lg:text-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
            <div className="space-y-8 md:space-y-10">
              <h3 className="text-pink-300 uppercase font-black tracking-[0.4em] italic text-[10px] md:text-xs">✦ The Truth ✦</h3>
              <h2 className="text-5xl md:text-[7.5rem] font-black text-pink-600 leading-[1] md:leading-[0.9] uppercase tracking-tighter">
                You’re the Star. <br/> 
                <span className="italic font-serif font-light text-pink-300 normal-case">Not the workhorse.</span>
              </h2>
              <div className="space-y-6 md:space-y-8 text-xl md:text-2xl text-pink-900/80 font-light italic font-serif leading-relaxed">
                <p>
                  Your audience is waiting for your next move. But you’re too busy <span className="text-pink-600 font-bold not-italic underline decoration-pink-100 decoration-4 underline-offset-8">fighting with operations</span> to actually lead.
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
                   { icon: TrendingDown, text: "Leaking Cash" }
                 ].map((item, i) => (
                   <div key={i} className="p-5 md:p-6 bg-white rounded-2xl border border-pink-100 flex flex-col items-center text-center group hover:scale-105 transition-transform shadow-sm">
                     <item.icon className="text-pink-200 mb-2 group-hover:text-pink-500 transition-colors" size={24} />
                     <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-pink-900/40">{item.text}</span>
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
      <section id="heavy" className="py-24 md:py-40 px-6 md:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20 space-y-4 md:space-y-6">
            <h2 className="text-5xl md:text-8xl font-black text-pink-600 leading-[1] md:leading-[0.85] uppercase tracking-tighter">
              We take it <br/> <span className="italic font-serif font-light text-pink-300">all on ourselves.</span>
            </h2>
            <p className="text-xl md:text-2xl text-pink-900/40 italic font-serif max-w-2xl mx-auto leading-relaxed px-4">
              The infrastructure, the hiring, the manual grind. <br className="hidden md:block" />
              It all stops being your problem <span className="text-pink-600 font-bold not-italic uppercase tracking-widest text-[10px] md:text-sm">the moment we start.</span>
            </p>
          </div>

          <div className="relative group p-1 bg-gradient-to-br from-pink-100 via-white to-pink-50 rounded-[2.5rem] md:rounded-[4rem] shadow-2xl">
            <div className="bg-white/80 backdrop-blur-sm p-6 md:p-16 rounded-[2.4rem] md:rounded-[3.8rem] border border-white/50">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                  {noiseTasks.map((task, i) => (
                    <div key={i} className="p-3 md:p-4 border border-pink-50 rounded-xl md:rounded-2xl flex items-center gap-2 md:gap-3 bg-white/50 group hover:border-pink-200 hover:shadow-md transition-all">
                       <div className="w-1.5 h-1.5 rounded-full bg-pink-100 group-hover:bg-pink-600 transition-colors shrink-0"></div>
                       <span className="text-[8px] md:text-[11px] font-black uppercase tracking-widest text-pink-900/40 group-hover:text-pink-900 transition-colors truncate">{task}</span>
                    </div>
                  ))}
              </div>
            </div>
            
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white px-6 md:px-8 py-2 md:py-3 rounded-full border border-pink-100 shadow-lg flex items-center gap-2 md:gap-3 whitespace-nowrap">
              <Layers size={14} className="text-pink-500" />
              <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-pink-600 italic">Total Operational Freedom</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Nuclear Reality Check (Black Section) */}
      <section id="reality" className="py-24 md:py-40 px-6 md:px-8 bg-[#0D0105] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-24 space-y-4 md:space-y-6">
            <h3 className="text-pink-500 uppercase font-black tracking-[0.4em] md:tracking-[0.5em] italic text-[10px] md:text-xs">✦ Nuclear Reality Check ✦</h3>
            <h2 className="text-6xl md:text-[10rem] font-black uppercase leading-[1] md:leading-[0.75] tracking-tighter">
              Stop Playing <br/> <span className="italic font-serif font-light text-pink-400 normal-case">Small.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 mb-24 md:mb-32">
             {[
               { 
                 title: "Under-Monetized", 
                 desc: "You have 10x the reach of leaders earning 10x more than you. The difference is the machine behind them." 
               },
               { 
                 title: "The Status Gap", 
                 desc: "You deserve to be the undisputed #1. We build the infrastructure that forces that reality." 
               },
               { 
                 title: "The Burnout Risk", 
                 desc: "Managing it all is a fast-track to losing your spark. Let us protect your light while we explode your revenue." 
               }
             ].map((item, i) => (
               <div key={i} className="space-y-4 md:space-y-6 text-center group px-4">
                  <div className="text-pink-900/30 font-black text-5xl md:text-6xl italic font-serif mb-2 md:mb-4">0{i+1}</div>
                  <h4 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter group-hover:text-pink-400 transition-colors">{item.title}</h4>
                  <p className="text-pink-100/40 italic font-serif leading-relaxed text-base md:text-lg">{item.desc}</p>
               </div>
             ))}
          </div>

          <div className="p-8 md:p-16 bg-pink-600 rounded-[2.5rem] md:rounded-[4rem] text-center shadow-2xl shadow-pink-950/50 max-w-5xl mx-auto relative overflow-hidden">
             <div className="relative z-10">
               <h3 className="text-3xl md:text-7xl font-black uppercase tracking-tighter mb-6 md:mb-8 italic leading-none">
                 X10 Your Brand. <br/> X10 Your Life.
               </h3>
               <p className="text-lg md:text-3xl font-light italic font-serif mb-8 md:mb-12 text-pink-100 leading-relaxed max-w-3xl mx-auto px-4">
                 You focus on the content. You focus on the magic. <br className="hidden md:block" />
                 <span className="font-bold text-white not-italic uppercase tracking-tighter underline underline-offset-4 md:underline-offset-8">We take care of everything else.</span>
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
           <h3 className="text-pink-300 uppercase font-black tracking-[0.4em] italic text-[10px] md:text-xs mb-4">✦ Our scope ✦</h3>
           <h2 className="text-4xl md:text-6xl font-black text-pink-600 uppercase tracking-tighter leading-none">
             What we <br/> <span className="italic font-serif font-light text-pink-300">take care of.</span>
           </h2>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ServiceCard icon={Layers} title="Infrastructure" description="Total backend setup. CRM, reporting, and payment flows." delay={0} />
            <ServiceCard icon={Target} title="Sales Vehicles" description="VSLs and funnels that convert cold traffic into deep loyalty." delay={100} />
            <ServiceCard icon={Mail} title="Email Scaling" description="Full-service management. Your voice, our strategy, your profit." delay={200} />
            <ServiceCard icon={Users} title="Team Growth" description="We hire, train, and manage your sales setters and closers." delay={300} />
            <ServiceCard icon={MessageSquare} title="DM Mastery" description="Every interaction is optimized for high-ticket conversion." delay={400} />
            <ServiceCard icon={ShieldCheck} title="CEO Peace" description="Student success systems that protect your mental health." delay={500} />
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section id="audit" className="py-32 md:py-48 px-6 md:px-8 relative overflow-hidden text-center bg-pink-50/20">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-8 md:mb-12 inline-block">
             <CastleIcon className="text-pink-300 mx-auto mb-6 md:mb-8 transition-transform hover:scale-110 duration-500" size={64} />
             <h2 className="text-5xl md:text-[9rem] font-black text-pink-600 uppercase tracking-tighter leading-none">
               25 Minutes. <br/> <span className="italic font-serif font-light text-pink-300 normal-case lowercase tracking-tight">The Audit.</span>
             </h2>
          </div>
          <p className="text-lg md:text-2xl text-pink-900/50 italic font-serif leading-relaxed mb-10 md:mb-16 max-w-xl mx-auto px-4">
            Find the hidden leaks in your empire. A pure strategy map to your first 7-figure month.
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
              <span className="font-black tracking-[0.2em] uppercase text-sm text-pink-900 italic">ScaleHouse</span>
            </div>
            <div className="flex items-center gap-4 text-pink-300 text-[10px] font-black uppercase tracking-[0.4em]">
               <Heart size={14} className="fill-pink-400 stroke-none animate-pulse" /> The Low Cortisol Era
            </div>
          </div>
          
          <div className="w-full pt-10 md:pt-12 border-t border-pink-50/50 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-wrap justify-center gap-x-6 md:gap-x-8 gap-y-4 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-pink-300">
              <a href="#" className="hover:text-pink-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-pink-600 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-pink-600 transition-colors">Cookie Settings</a>
              <a href="#" className="hover:text-pink-600 transition-colors">Earnings Disclaimer</a>
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
