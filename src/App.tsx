import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Linkedin, Github, Download, Menu, X } from 'lucide-react';
import { NAV_LINKS, TESTIMONIALS, SHOWCASE_PROJECTS } from './data';

const ABOUT_SAD_DESK_URL = 'https://raw.githubusercontent.com/ProfPrompt/askandrew.github.io/refs/heads/main/assets/saddesk.jpeg';
const ABOUT_HAPPY_DESK_URL = 'https://raw.githubusercontent.com/ProfPrompt/askandrew.github.io/refs/heads/main/assets/happydesk.jpeg';
const HERO_IMAGE_URL = 'https://raw.githubusercontent.com/ProfPrompt/askandrew.github.io/refs/heads/main/assets/herowface.png';
const ANDREW_AVATAR_URL = 'https://imgx.vipkidstatic.com/global/ter/teacher/avatar/1619214/6e1cafeb00cc472b9a366c08fb82fa9e.png';
const CONFUSED_MAN_IMAGE_URL = 'https://raw.githubusercontent.com/ProfPrompt/askandrew.github.io/refs/heads/main/assets/confusedman.jpg';
const HAPPY_MAN_IMAGE_URL = 'https://raw.githubusercontent.com/ProfPrompt/askandrew.github.io/refs/heads/main/assets/happyman.jpg';
const HOWTO_SAD_IMAGE_URL = 'https://raw.githubusercontent.com/ProfPrompt/askandrew.github.io/refs/heads/main/assets/howtosad.jpeg';
const HOWTO_DREW_IMAGE_URL = 'https://imgx.vipkidstatic.com/global/ter/teacher/avatar/1619214/6e1cafeb00cc472b9a366c08fb82fa9e.png';
const HOWTO_HAPPY_IMAGE_URL = 'https://raw.githubusercontent.com/ProfPrompt/askandrew.github.io/refs/heads/main/assets/howtohappy.jpeg';

const Watermark = () => {
  const spans = useMemo(() => {
    const list = [
      "APPS", "WEBSITES", "CODING", "AUTOMATION", 
      "DESIGN","WORKSHOPS", "TRAINING"
    ];
    return Array.from({ length: 30 }).map((_, i) => {
      let shuffled = [...list].sort(() => Math.random() - 0.5);
      
      const offsetClass = 
        i % 3 === 0 ? 'translate-x-16' : 
        i % 3 === 1 ? '-translate-x-16' : 
        'translate-x-0';

      return (
        <div key={i} className={`w-full whitespace-nowrap text-center my-1 ${offsetClass}`}>
          <span className="inline-block tracking-widest select-none leading-[0.8] h-[1em]">
            {shuffled.join(" • ") + " • "}
          </span>
        </div>
      );
    });
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250%] h-[250%] transform -rotate-6 opacity-10 font-black text-8xl flex flex-col justify-center items-center select-none text-white overflow-visible">
        {spans}
      </div>
    </div>
  );
};

const HowItWorksGuide = () => {
  const steps = [
    { desc: "Book a session to pitch your raw application concept, custom workflow tool, or specific AI workspace needs." },
    { desc: "We first map out the technical feasibility, validate your architecture logic, and design a lean, actionable build strategy." },
    { desc: "We jump onto a live screen share to configure your tailored AI environment or code your web prototype using modern tools." },
    { desc: "We lock down your exact operational rules, integrate your API keys, and test the functional web application together." },
    { desc: "Leave the call with the actual code for your MVP, a concrete roadmap, or a tailored AI workspace in a single afternoon." }
  ];

  return (
    <div className="bg-brand-primary text-white p-6 sm:p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(167,139,250,0.3)] relative overflow-hidden font-sans border-4 border-white/20 h-full flex flex-col justify-center">
      <div className="relative py-4 z-10 h-full flex flex-col justify-between">
         {/* Central Line */}
         <div className="absolute left-6 top-16 bottom-16 w-1.5 bg-brand-dark/10 rounded-full" />
         
         {/* Top Images & Bubbles */}
         <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 relative z-10 w-full">
            {/* Frustrated Person */}
            <div className="flex items-center gap-3">
               <div className="bg-white text-brand-dark px-4 py-2 sm:px-5 sm:py-3 rounded-3xl rounded-tr-none font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl relative mt-2">
                  Can you help?
                  <div className="absolute top-0 -right-3 w-3 h-3 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}></div>
               </div>
               <img src={HOWTO_SAD_IMAGE_URL} alt="Frustrated face" className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shadow-xl border-4 border-brand-primary bg-white" />
            </div>

            {/* Pink Arrow Indicator */}
            <div className="hidden sm:flex items-center text-brand-secondary font-black tracking-widest text-2xl px-2">
               &middot;&middot;&middot;&gt;
            </div>

            {/* Bearded Man */}
            <div className="flex items-center gap-3">
               <img src={HOWTO_DREW_IMAGE_URL} alt="Chill bearded man" className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shadow-xl border-4 border-brand-primary bg-white" />
               <div className="bg-white text-brand-dark px-4 py-2 sm:px-5 sm:py-3 rounded-3xl rounded-tl-none font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl relative mt-2">
                  No problem!
                  <div className="absolute top-0 -left-3 w-3 h-3 bg-white" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>
               </div>
            </div>
         </div>

         {steps.map((step, i) => (
            <div key={i} className="flex items-center w-full mb-6 relative z-10 pl-16">
               <p className="font-bold text-base sm:text-lg leading-tight drop-shadow-md">{step.desc}</p>
               <div className="absolute left-1.5 -translate-x-1/2 w-10 h-10 bg-brand-secondary text-white rounded-full flex items-center justify-center font-black text-xl border-4 border-brand-primary shadow-xl">
                 {i + 1}
               </div>
            </div>
         ))}

         {/* Bottom Image & Bubble */}
         <div className="flex items-center justify-center gap-4 mt-2 relative z-10">
            <img src={HOWTO_HAPPY_IMAGE_URL} alt="Relieved face" className="w-20 h-20 rounded-full object-cover shadow-xl border-4 border-brand-primary bg-white" />
            <div className="bg-white text-brand-dark px-5 py-3 rounded-3xl rounded-tl-none font-black text-sm sm:text-base uppercase tracking-wider shadow-xl relative mt-2">
               Totally worth it!
               <div className="absolute top-0 -left-3 w-3 h-3 bg-white" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans selection:bg-brand-secondary selection:text-white scroll-smooth flex flex-col bg-brand-light">
      
      {/* 1. Header (Primary Background) */}
      <header className="bg-brand-primary text-white w-full border-b border-white/10 relative z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative z-50 bg-brand-primary">
          <a href="/" className="flex items-center gap-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-brand-secondary text-xl font-black transition-transform hover:scale-105">
              ; )
            </div>
            <span className="hidden lg:block text-white font-black text-xl uppercase tracking-wider drop-shadow-md shrink-0">
              ASKANDREW.IO
            </span>
          </a>
          
          <nav className="hidden lg:flex items-center gap-4 xl:gap-8 font-bold tracking-wide">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-brand-dark transition-colors uppercase text-sm">
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="#kolander-services"
              className="whitespace-nowrap inline-flex items-center relative pl-16 sm:pl-16 pr-4 sm:pr-6 py-2 sm:py-2.5 rounded-full bg-brand-secondary text-white text-[11px] sm:text-sm font-bold uppercase tracking-wider hover:bg-brand-dark transition-colors shadow-md text-left"
            >
              <img src={ANDREW_AVATAR_URL} alt="Andrew Watts - Custom AI Systems Developer" className="absolute left-[-0.25rem] top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border-2 border-brand-secondary object-cover" />
              <span className="hidden sm:inline">Book a Call With Andrew</span>
              <span className="sm:hidden leading-tight">Book a Call</span>
            </a>
            
            <button 
              className="lg:hidden text-white p-1 -mr-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-brand-primary border-b border-white/10 overflow-hidden absolute w-full z-40 top-20 left-0"
            >
              <div className="flex flex-col items-center py-8 gap-6">
                {NAV_LINKS.map((link) => (
                  <a 
                    key={link.label} 
                    href={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xl font-bold uppercase tracking-wide"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow">
        {/* 2. Hero Section (Primary Background) */}
        <section className="bg-brand-primary text-white relative overflow-hidden py-20 lg:py-24 px-6">
          <Watermark />
          
          <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-12 items-center relative z-10 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-4 sm:space-y-8 flex flex-col items-center md:items-start"
            >
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-none mb-6 uppercase tracking-tight text-white">
                  Ask Andrew
                </h1>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-white mb-4">
                  Bringing your ideas to life.
                </h2>
                <p className="hidden sm:block text-base lg:text-lg mt-5 text-white/80 max-w-lg leading-relaxed font-medium">
                  I team up with founders, creators, and everyday people to handle the technical heavy lifting. Whether you want to automate boring, repetitive tasks or build a custom web app from scratch, I'll work right alongside you to get it done.
                </p>
              </div>
              <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3 lg:gap-4 w-full lg:w-auto">
                <a
                  href="#kolander-services"
                  className="whitespace-nowrap inline-flex items-center justify-center px-4 py-3 lg:px-8 lg:py-3.5 rounded-full bg-brand-secondary text-white font-black text-sm lg:text-base hover:bg-brand-dark hover:scale-105 transition-all shadow-xl uppercase tracking-wide w-full lg:w-auto text-center"
                >
                  Let's Get Started
                </a>
                <a
                  href="#services"
                  className="whitespace-nowrap inline-flex items-center justify-center px-4 py-3 lg:px-8 lg:py-3.5 rounded-full bg-white text-brand-secondary font-black text-sm lg:text-base hover:bg-gray-100 hover:scale-105 transition-all shadow-xl uppercase tracking-wide w-full lg:w-auto text-center"
                >
                  See How It Works
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 aspect-square w-full max-w-md mx-auto flex items-center justify-center bg-white"
            >
              <img src={HERO_IMAGE_URL} alt="Andrew Watts - Full Stack Developer and AI Expert" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </section>

        {/* 3. About Section (White Background) */}
        <section id="about" className="bg-white text-brand-dark py-16 md:py-24 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl lg:text-4xl font-black text-brand-secondary uppercase tracking-tight mb-10 text-center w-full">
              About Andrew
            </h2>
            
            <div className="flex flex-col gap-12 items-center w-full mb-10">
              {/* Content Column */}
              <div className="w-full text-center">
                <div className="space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
                  <div className="bg-brand-primary/5 p-6 sm:p-8 rounded-2xl border-l-4 border-brand-secondary italic text-gray-800">
                    <p>
                      "Think of me as your shortcut to getting things done. I work with founders, creators, and everyday people to build web apps, knock out repetitive tasks, and set up efficient digital workspaces. We do it all live, together on screen, so you don't have to wait months for a developer to text you back. Plus, with my background as an educator, I make sure you actually understand your system so you can take total control of your business."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 justify-center w-full">
              <a href="#kolander-services" className="whitespace-nowrap inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand-secondary text-white font-bold text-base hover:bg-brand-dark transition-all shadow-lg uppercase tracking-wide">
                Let's Build Together
              </a>
              <a href="https://www.linkedin.com/in/agwatts/" target="_blank" rel="noreferrer" className="whitespace-nowrap inline-flex items-center justify-center px-8 py-3.5 rounded-full border-[3px] border-brand-secondary bg-white text-brand-secondary font-bold text-base hover:bg-brand-secondary hover:text-white transition-all uppercase tracking-wide gap-2">
                <Linkedin className="w-5 h-5" /> Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* Mid-Page Call to Action */}
        <section className="bg-brand-primary text-white py-24 px-6 text-center relative overflow-hidden">
          <Watermark />
          <div className="max-w-3xl mx-auto space-y-8 relative z-10">
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-none tracking-tight">
              Ready to stop wasting time?
            </h2>
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-5 pt-6 w-[100vw] relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] px-6 sm:w-full sm:static sm:left-auto sm:right-auto sm:ml-0 sm:mr-0 sm:px-0">
              <a href="#kolander-services" className="whitespace-nowrap flex-1 sm:flex-none inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-secondary text-white font-black text-lg hover:bg-brand-dark hover:scale-105 transition-all shadow-2xl uppercase tracking-wide text-center">
                Book a Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Bring Your Ideas to Life Section (White Background) */}
        <section className="bg-white text-brand-dark py-12 md:py-24 px-4 sm:px-6">
          {/* Desktop Layout (Grid) */}
          <div className="hidden md:grid max-w-7xl mx-auto grid-cols-[1fr_2fr_1fr] gap-12 items-center text-center">
            <div className="flex justify-center items-center h-full w-full">
              <img src={CONFUSED_MAN_IMAGE_URL} alt="Confused person with too many ideas" className="w-full h-auto object-contain aspect-[3/4] rounded-2xl shadow-lg border border-gray-100" />
            </div>

            <div className="space-y-8 flex flex-col items-center px-4 max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-black text-brand-secondary uppercase tracking-tight">
                Bring Your Ideas to Life.
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-medium">
                <p>
                  You've got that brilliant web app or tool concept, but lack the coding background to build it. Or maybe you're wasting hours trying to build with AI code assistants on your own, getting caught in endless, frustrating bug loops.
                </p>
                <p>
                  Stop talking about your app idea. Let's build it this afternoon. Zero to MVP at the speed of thought. We combine traditional programming foundations with state-of-the-art AI development environments to spin up gorgeous, modern UI wrappers around software ideas in record time.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3 sm:gap-4 pt-4 w-full justify-center">
                <a href="#kolander-services" className="whitespace-nowrap inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand-secondary text-white font-bold text-base hover:bg-brand-dark hover:scale-105 transition-all shadow-lg uppercase tracking-wide text-center">
                  Book a Call With Andrew
                </a>
              </div>
            </div>

            <div className="flex justify-center items-center h-full w-full">
              <img src={HAPPY_MAN_IMAGE_URL} alt="Proud person with a finished digital product" className="w-full h-auto object-contain aspect-[3/4] rounded-2xl shadow-lg border border-gray-100" />
            </div>
          </div>

          {/* Mobile Layout (Floats for text wrapping) */}
          <div className="md:hidden max-w-3xl mx-auto block overflow-hidden">
            <h2 className="text-2xl sm:text-3xl font-black text-brand-secondary uppercase tracking-tight mb-6 text-center">
              Bring Your Ideas to Life.
            </h2>
            <div className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium text-left">
              <img src={CONFUSED_MAN_IMAGE_URL} alt="Confused person with too many ideas" className="w-32 sm:w-40 float-left mr-4 sm:mr-6 mb-2 object-contain rounded-2xl shadow-lg border border-gray-100" />
              <p className="mb-4">
                You've got that brilliant web app or tool concept, but lack the coding background to build it. Or maybe you're wasting hours trying to build with AI code assistants on your own, getting caught in endless, frustrating bug loops.
              </p>
              <img src={HAPPY_MAN_IMAGE_URL} alt="Proud person with a finished digital product" className="w-32 sm:w-40 float-right ml-4 sm:ml-6 mb-2 mt-2 object-contain rounded-2xl shadow-lg border border-gray-100" />
              <p>
                Stop talking about your app idea. Let's build it this afternoon. Zero to MVP at the speed of thought. We combine traditional programming foundations with state-of-the-art AI development environments to spin up gorgeous, modern UI wrappers around software ideas in record time.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3 sm:gap-4 pt-8 clear-both justify-center w-[100vw] relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] px-6 sm:w-full sm:static sm:left-auto sm:right-auto sm:ml-0 sm:mr-0 sm:px-0">
              <a href="#kolander-services" className="whitespace-nowrap inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand-secondary text-white font-bold text-base hover:bg-brand-dark transition-all shadow-lg uppercase tracking-wide text-center">
                Book a Call With Andrew
              </a>
            </div>
          </div>
        </section>

        {/* Secondary Call to Action */}
        <section className="bg-brand-primary text-white py-24 px-6 text-center relative overflow-hidden">
          <Watermark />
          <div className="max-w-3xl mx-auto space-y-8 relative z-10">
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-none tracking-tight">
              Get an interactive prototype by tomorrow.
            </h2>
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-5 pt-6 w-[100vw] relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] px-6 sm:w-full sm:static sm:left-auto sm:right-auto sm:ml-0 sm:mr-0 sm:px-0">
              <a href="#kolander-services" className="whitespace-nowrap flex-1 sm:flex-none inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-secondary text-white font-black text-lg hover:bg-brand-dark hover:scale-105 transition-all shadow-2xl uppercase tracking-wide text-center">
                Book a Live Session
              </a>
            </div>
          </div>
        </section>

        {/* There has to be an easier way Section */}
        <section className="bg-white text-brand-dark py-12 md:py-24 px-4 sm:px-6">
          {/* Desktop Layout (Grid) */}
          <div className="hidden md:grid max-w-7xl mx-auto grid-cols-[1fr_2fr_1fr] gap-12 items-center text-center">
            <div className="flex justify-center items-center h-full w-full">
              <img src={ABOUT_SAD_DESK_URL} alt="Frustrated professional struggling with endless prompting and broken code" className="w-full h-auto object-contain aspect-[3/4]" />
            </div>

            <div className="space-y-8 flex flex-col items-center px-4 max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-black text-brand-secondary uppercase tracking-tight">
                There has to be an easier way.
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-medium">
                <p>
                  Need a highly tailored AI workspace that actually understands your specific industry data, templates, and operational rules so you can stop prompting from scratch every day? That's where I come in.
                </p>
                <p>
                  We will sit down, compile your business data, templates, and brand voice guidelines, and build a private, custom AI workspace. You will leave our sessions with a fully configured environment pre-loaded with your operational rules, feeling technically empowered and ready to scale.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3 sm:gap-4 pt-4 w-full justify-center">
                <a href="#kolander-services" className="whitespace-nowrap inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand-secondary text-white font-bold text-base hover:bg-brand-dark hover:scale-105 transition-all shadow-lg uppercase tracking-wide text-center">
                  Book a Call With Andrew
                </a>
              </div>
            </div>

            <div className="flex justify-center items-center h-full w-full">
              <img src={ABOUT_HAPPY_DESK_URL} alt="Relaxed professional enjoying their custom AI workspace and working prototype" className="w-full h-auto object-contain aspect-[3/4]" />
            </div>
          </div>

          {/* Mobile Layout (Floats for text wrapping) */}
          <div className="md:hidden max-w-3xl mx-auto block overflow-hidden">
            <h2 className="text-2xl sm:text-3xl font-black text-brand-secondary uppercase tracking-tight mb-6 text-center">
              There has to be an easier way.
            </h2>
            <div className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium text-left">
              <img src={ABOUT_SAD_DESK_URL} alt="Frustrated professional struggling with endless prompting and broken code" className="w-32 sm:w-40 float-left mr-4 sm:mr-6 mb-2 object-contain rounded-2xl shadow-lg border border-gray-100" />
              <p className="mb-4">
                Need a highly tailored AI workspace that actually understands your specific industry data, templates, and operational rules so you can stop prompting from scratch every day? That's where I come in.
              </p>
              <img src={ABOUT_HAPPY_DESK_URL} alt="Relaxed professional enjoying their custom AI workspace and working prototype" className="w-32 sm:w-40 float-right ml-4 sm:ml-6 mb-2 mt-2 object-contain rounded-2xl shadow-lg border border-gray-100" />
              <p>
                We will sit down, compile your business data, templates, and brand voice guidelines, and build a private, custom AI workspace. You will leave our sessions with a fully configured environment pre-loaded with your operational rules, feeling technically empowered and ready to scale.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3 sm:gap-4 pt-8 clear-both justify-center w-[100vw] relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] px-6 sm:w-full sm:static sm:left-auto sm:right-auto sm:ml-0 sm:mr-0 sm:px-0">
              <a href="#kolander-services" className="whitespace-nowrap inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand-secondary text-white font-bold text-base hover:bg-brand-dark transition-all shadow-lg uppercase tracking-wide text-center">
                Book a Call With Andrew
              </a>
            </div>
          </div>
        </section>

        {/* 4. Testimonials (Primary Background) */}
        <section id="testimonials" className="bg-brand-primary text-white py-24 px-6 relative overflow-hidden">
          <Watermark />
          <div className="max-w-7xl mx-auto space-y-16 relative z-10">
            <div className="text-center space-y-3">
              <h2 className="text-xs sm:text-sm lg:text-base font-bold uppercase tracking-[0.2em] text-white/80">Don't Just Take My Word For It</h2>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight">Testimonials</h3>
            </div>

            <div className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-3 gap-6 lg:gap-8 py-8 -my-8 -mx-6 px-6 lg:py-0 lg:my-0 lg:mx-0 lg:px-0">
              {TESTIMONIALS.map((test, i) => (
                <div key={i} className="bg-white text-brand-dark p-8 rounded-[2rem] shadow-2xl flex flex-col justify-between space-y-6 transform hover:-translate-y-2 transition-transform duration-300 snap-center shrink-0 w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-auto">
                  <p className="text-lg font-medium leading-relaxed italic text-gray-700">"{test.quote}"</p>
                  <div>
                    <div className="font-black text-lg text-brand-secondary uppercase">{test.author}</div>
                    <div className="text-sm text-gray-500 font-bold mt-1 uppercase tracking-wider">{test.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

       {/* 5. Services Section (White Background) */}
        <section id="services" className="bg-brand-light text-brand-dark py-24 px-6">
          <div className="max-w-7xl mx-auto">
            
            <div className="grid lg:grid-cols-2 gap-16 mb-16">
              
              {/* Left Column */}
              <div className="flex flex-col h-full">
                <h2 className="text-3xl lg:text-4xl font-black text-brand-secondary uppercase tracking-tight mb-10 text-center lg:text-left">
                  The Booking Menu
                </h2>
                
                <div className="flex-grow flex flex-col space-y-8">
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-xl font-black uppercase leading-tight">Live Web App Prototyping</h3>
                    </div>
                    <p className="text-gray-600 text-base font-medium leading-relaxed">Bring your concept and API keys. We'll build your clicking MVP live on screen share using advanced AI tools and traditional code before your coffee gets cold.</p>
                    <p className="text-gray-700 text-base font-bold leading-relaxed">What you get: <span className="font-medium text-gray-600">The code files ready for users/investors, plus a 14-day bug-support window.</span></p>
                    <div className="font-black text-lg flex items-center gap-3">
                      <span className="text-brand-dark">Starting from $450</span>
                      <a href="#kolander-services" className="text-brand-secondary font-bold hover:opacity-80 transition-opacity">Book now</a>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h3 className="text-xl font-black uppercase leading-tight">Custom AI Workspace Setup</h3>
                    </div>
                    <p className="text-gray-600 text-base font-medium leading-relaxed">Stop pasting the same prompts every day. We’ll build a private, tailored AI environment live on a call to automate your repetitive writing and daily data tasks.</p>
                    <p className="text-gray-700 text-base font-bold leading-relaxed">What you get: <span className="font-medium text-gray-600">A fully configured, private workspace pre-loaded with your operational rules.</span></p>
                    <div className="font-black text-lg flex items-center gap-3">
                      <span className="text-brand-dark">Starting from $225</span>
                      <a href="#kolander-services" className="text-brand-secondary font-bold hover:opacity-80 transition-opacity">Book now</a>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h3 className="text-xl font-black uppercase leading-tight">App Updates & Debugging</h3>
                    </div>
                    <p className="text-gray-600 text-base font-medium leading-relaxed"><span className="italic">Exclusively for returning clients.</span> Workflows evolve and bugs happen. Book this rapid live sprint to push new features, tweak system instructions, or fix a recent break.</p>
                    <p className="text-gray-700 text-base font-bold leading-relaxed">What you get: <span className="font-medium text-gray-600">Live code updates and seamless deployment.</span></p>
                    <div className="font-black text-lg flex items-center gap-3">
                      <span className="text-brand-dark">$99</span>
                      <a href="#kolander-services" className="text-brand-secondary font-bold hover:opacity-80 transition-opacity">Book now</a>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h3 className="text-xl font-black uppercase leading-tight">Technical Feasibility & Roadmap</h3>
                    </div>
                    <p className="text-gray-600 text-base font-medium leading-relaxed">Have a raw app or tool idea? Let’s vet it before you waste savings on an agency. We'll map out your concept, pick your tech stack, and design a lean build strategy.</p>
                    <p className="text-gray-700 text-base font-bold leading-relaxed">What you get: <span className="font-medium text-gray-600">A concrete technical roadmap and zero corporate fluff.</span></p>
                    <div className="font-black text-lg flex items-center gap-3">
                      <span className="text-brand-dark">$65</span>
                      <a href="#kolander-services" className="text-brand-secondary font-bold hover:opacity-80 transition-opacity">Book now</a>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 rounded-2xl bg-brand-secondary/5 border-2 border-brand-secondary/20">
                    <p className="text-sm font-bold text-brand-secondary leading-relaxed uppercase tracking-wide">
                      Refund Policy
                    </p>
                    <p className="text-sm font-medium text-brand-secondary mt-1 leading-relaxed">
                      Due to the bespoke nature of my services, all sales are final. Refunds cannot be offered once the engagement has started.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col h-full">
                <h2 className="text-3xl lg:text-4xl font-black text-brand-dark uppercase tracking-tight mb-10 text-center lg:text-left">
                  How it works
                </h2>
                
                <div className="flex-grow">
                  <HowItWorksGuide />
                </div>
              </div>
            </div>

            {/* Single Centered Button */}
            <div className="flex justify-center mt-8">
              <a
                href="#kolander-services"
                className="whitespace-nowrap inline-flex items-center relative pl-16 sm:pl-18 pr-8 py-3.5 rounded-full bg-brand-secondary text-white text-sm sm:text-base font-bold uppercase tracking-wider hover:bg-brand-dark transition-colors shadow-xl text-left"
              >
                <img src={ANDREW_AVATAR_URL} alt="Andrew Watts - AI Developer Avatar" className="absolute left-[-0.25rem] top-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 border-brand-secondary object-cover" />
                <span>Book a Call With Andrew</span>
              </a>
            </div>

          </div>
        </section>
        {/* 6. Mid-CTA (Primary Background) */}
        <section className="bg-brand-primary text-white py-24 px-6 text-center relative overflow-hidden">
          <Watermark />
          <div className="max-w-4xl mx-auto space-y-10 relative z-10">
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-none tracking-tight">
              You haven't come this far to keep talking about your app idea.
            </h2>
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-5 pt-6 w-[100vw] relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] px-6 sm:w-full sm:static sm:left-auto sm:right-auto sm:ml-0 sm:mr-0 sm:px-0">
              <a href="#kolander-services" className="whitespace-nowrap flex-1 sm:flex-none inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-secondary text-white font-black text-lg hover:bg-brand-dark hover:scale-105 transition-all shadow-2xl uppercase tracking-wide text-center">
                Ask Andrew
              </a>
              <a href="https://www.linkedin.com/in/agwatts/" target="_blank" rel="noreferrer" className="whitespace-nowrap flex-1 sm:flex-none inline-flex items-center justify-center px-8 py-4 rounded-full border-[3px] border-brand-secondary bg-white text-brand-secondary font-black text-lg hover:bg-brand-secondary hover:text-white hover:scale-105 transition-all shadow-2xl uppercase tracking-wide gap-2 text-center">
                <Linkedin className="w-6 h-6" /> Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* 7. Projects Section (White Background) */}
        <section id="projects" className="bg-white text-brand-dark py-24 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto space-y-16 relative z-10">
            <div className="text-center space-y-3">
              <h2 className="text-sm lg:text-base font-bold uppercase tracking-[0.2em] text-brand-secondary">Featured Work</h2>
              <h3 className="text-4xl lg:text-5xl font-black uppercase tracking-tight">Showcase</h3>
            </div>

            <div className="space-y-16">
              {/* Web Apps Category */}
              <div className="space-y-8">
                <h4 className="text-xl sm:text-2xl font-black uppercase tracking-wide border-b-2 border-gray-200 pb-4 text-brand-secondary">
                  🚀 Web Apps: Because the internet needs more cool stuff
                </h4>
                <div className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-3 gap-6 lg:gap-8 py-8 -my-8 -mx-6 px-6 lg:py-0 lg:my-0 lg:mx-0 lg:px-0">
                  {SHOWCASE_PROJECTS.webApps.map((project, i) => (
                    <div key={i} className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-200 hover:border-brand-secondary/50 transition-all group flex flex-col h-full shadow-xl snap-center shrink-0 w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-auto">
                      <div className="h-48 overflow-hidden relative">
                        <img src={project.image} alt={project.alt} className="w-full h-full object-cover object-left-top transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-300"></div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h5 className="text-xl font-black uppercase tracking-tight mb-3 group-hover:text-brand-secondary transition-colors text-brand-dark">{project.title}</h5>
                        <p className="text-gray-600 text-sm font-medium leading-relaxed mb-6 flex-grow">{project.description}</p>
                        <div className="flex gap-4 mt-auto">
                          {project.repo && <a href={project.repo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider hover:text-brand-secondary transition-colors text-brand-dark"><Github className="w-4 h-4"/> Repo</a>}
                          <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider hover:text-brand-secondary transition-colors text-brand-dark">View Demo &rarr;</a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

{/* Web Design Category */}
              <div className="space-y-8">
                <h4 className="text-xl sm:text-2xl font-black uppercase tracking-wide border-b-2 border-gray-200 pb-4 text-brand-secondary">
                  🎨 Web Design: Templates that don't look like they were made in 1998
                </h4>
                <div className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-3 gap-6 lg:gap-8 py-8 -my-8 -mx-6 px-6 lg:py-0 lg:my-0 lg:mx-0 lg:px-0">
                  {SHOWCASE_PROJECTS.webDesign.map((project, i) => (
                    <div key={i} className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-200 hover:border-brand-secondary/50 transition-all group flex flex-col h-full shadow-xl snap-center shrink-0 w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-auto">
                      <div className="h-48 overflow-hidden relative">
                        <img src={project.image} alt={project.alt} className="w-full h-full object-cover object-left-top transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-300"></div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h5 className="text-xl font-black uppercase tracking-tight mb-3 group-hover:text-brand-secondary transition-colors text-brand-dark">{project.title}</h5>
                        <p className="text-gray-600 text-sm font-medium leading-relaxed mb-6 flex-grow">{project.description}</p>
                        <div className="flex gap-4 mt-auto">
                          {project.repo && <a href={project.repo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider hover:text-brand-secondary transition-colors text-brand-dark"><Github className="w-4 h-4"/> Repo</a>}
                          <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider hover:text-brand-secondary transition-colors text-brand-dark">View Demo &rarr;</a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Final CTA (Primary Background) */}
        <section className="bg-brand-primary text-white py-24 px-6 text-center relative overflow-hidden">
          <Watermark />
          <div className="max-w-4xl mx-auto space-y-10 relative z-10">
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-none tracking-tight">
              Ready to build your web app?
            </h2>
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-5 pt-6 w-[100vw] relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] px-6 sm:w-full sm:static sm:left-auto sm:right-auto sm:ml-0 sm:mr-0 sm:px-0">
              <a href="#kolander-services" className="whitespace-nowrap flex-1 sm:flex-none inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-secondary text-white font-black text-lg hover:bg-brand-dark hover:scale-105 transition-all shadow-2xl uppercase tracking-wide text-center">
                Ask Andrew
              </a>
              <a href="https://www.linkedin.com/in/agwatts/" target="_blank" rel="noreferrer" className="whitespace-nowrap flex-1 sm:flex-none inline-flex items-center justify-center px-8 py-4 rounded-full border-[3px] border-brand-secondary bg-white text-brand-secondary font-black text-lg hover:bg-brand-secondary hover:text-white hover:scale-105 transition-all shadow-2xl uppercase tracking-wide gap-2 text-center">
                <Linkedin className="w-6 h-6" /> Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* 9. Footer (White Background wrapping a Primary Container) */}
      <footer id="contact" className="bg-brand-light py-16 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-brand-dark font-bold uppercase tracking-widest text-sm px-6">
            <div className="flex gap-10">
              <a href="https://www.linkedin.com/in/agwatts/" className="hover:text-brand-secondary transition-colors flex items-center gap-3"><Linkedin className="w-6 h-6"/> LinkedIn</a>
              <a href="https://github.com/ProfPrompt" className="hover:text-brand-secondary transition-colors flex items-center gap-3"><Github className="w-6 h-6"/> GitHub</a>
            </div>
            <div className="text-gray-500">
              Copyright © 2026 Andrew Watts
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
