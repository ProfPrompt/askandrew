import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { DynamicIcon } from './components/DynamicIcon';
import { 
  HEADER_NAV,
  WATERMARK,
  HERO_SECTION,
  ABOUT_SECTION,
  MID_PAGE_CTA,
  IDEAS_SECTION,
  SECONDARY_PROTOTYPE_CTA,
  EASIER_WAY_SECTION,
  TESTIMONIALS_SECTION,
  BOOKING_MENU_SECTION,
  PRODUCTS,
  HOW_IT_WORKS_SECTION,
  MID_PERSUASION_CTA,
  SHOWCASE_SECTION,
  SHOWCASE_PROJECTS,
  FINAL_CTA_SECTION,
  FOOTER_SECTION
} from './content';

// Dynamic background text watermarks
const Watermark = () => {
  const spans = useMemo(() => {
    const list = WATERMARK.words;
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

// Process / Step-by-step guide widget
const HowItWorksGuide = () => {
  return (
    <div className="bg-brand-primary text-white p-6 sm:p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(167,139,250,0.3)] relative overflow-hidden font-sans border-4 border-white/20 h-full flex flex-col justify-center">
      <div className="relative py-4 z-10 h-full flex flex-col justify-between">
         {/* Central Connecting Line */}
         <div className="absolute left-6 top-16 bottom-16 w-1.5 bg-brand-dark/10 rounded-full" />
         
         {/* Top Images & Conversation Bubbles */}
         <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 relative z-10 w-full">
            {/* Frustrated Customer Bubble */}
            <div className="flex items-center gap-3">
               <div className="bg-white text-brand-dark px-4 py-2 sm:px-5 sm:py-3 rounded-3xl rounded-tr-none font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl relative mt-2">
                  {HOW_IT_WORKS_SECTION.bubbleSad}
                  <div className="absolute top-0 -right-3 w-3 h-3 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}></div>
               </div>
               <img src={HOW_IT_WORKS_SECTION.imageSad} alt="Frustrated face" className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shadow-xl border-4 border-brand-primary bg-white" />
            </div>

            {/* Visual connector */}
            <div className="hidden sm:flex items-center text-brand-secondary font-black tracking-widest text-2xl px-2">
               &middot;&middot;&middot;&gt;
            </div>

            {/* Developer Bubble */}
            <div className="flex items-center gap-3">
               <img src={HOW_IT_WORKS_SECTION.imageDrew} alt="Andrew Watts avatar" className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shadow-xl border-4 border-brand-primary bg-white" />
               <div className="bg-white text-brand-dark px-4 py-2 sm:px-5 sm:py-3 rounded-3xl rounded-tl-none font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl relative mt-2">
                  {HOW_IT_WORKS_SECTION.bubbleDrew}
                  <div className="absolute top-0 -left-3 w-3 h-3 bg-white" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>
               </div>
            </div>
         </div>

         {/* Chronological Step Descriptions */}
         {HOW_IT_WORKS_SECTION.steps.map((stepDesc, i) => (
            <div key={i} className="flex items-center w-full mb-6 relative z-10 pl-16">
               <p className="font-bold text-base sm:text-lg leading-tight drop-shadow-md">{stepDesc}</p>
               <div className="absolute left-1.5 -translate-x-1/2 w-10 h-10 bg-brand-secondary text-white rounded-full flex items-center justify-center font-black text-xl border-4 border-brand-primary shadow-xl">
                  {i + 1}
               </div>
            </div>
         ))}

         {/* Satisfied Customer Result */}
         <div className="flex items-center justify-center gap-4 mt-2 relative z-10">
            <img src={HOW_IT_WORKS_SECTION.imageHappy} alt="Relieved face" className="w-20 h-20 rounded-full object-cover shadow-xl border-4 border-brand-primary bg-white" />
            <div className="bg-white text-brand-dark px-5 py-3 rounded-3xl rounded-tl-none font-black text-sm sm:text-base uppercase tracking-wider shadow-xl relative mt-2">
               {HOW_IT_WORKS_SECTION.bubbleHappy}
               <div className="absolute top-0 -left-3 w-3 h-3 bg-white" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>
            </div>
         </div>
      </div>
    </div>
  );
};

// Auto-scrolling Showcase Carousel
const ShowcaseCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Combine both project lists
  const allProjects = useMemo(() => [
    ...SHOWCASE_PROJECTS.webApps,
    ...SHOWCASE_PROJECTS.webDesign
  ], []);

  // Double the list to make the infinite scroll smooth and seamless
  const doubledProjects = useMemo(() => [...allProjects, ...allProjects], [allProjects]);

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    let animationFrameId: number;
    let lastTime = performance.now();
    const speed = 40; // Pixels per second

    const scroll = (time: number) => {
      if (!isPaused) {
        const delta = (time - lastTime) / 1000;
        container.scrollLeft += speed * delta;
        
        // When we scroll past half the width, wrap around smoothly
        const halfWidth = container.scrollWidth / 2;
        if (container.scrollLeft >= halfWidth) {
          container.scrollLeft -= halfWidth;
        }
      }
      lastTime = time;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  // Handle manual navigation
  const scrollByAmount = (amount: number) => {
    const container = carouselRef.current;
    if (!container) return;
    
    // Temporarily pause to allow manual transition
    setIsPaused(true);
    container.scrollBy({ left: amount, behavior: 'smooth' });
    
    // Resume auto-scroll after a delay
    setTimeout(() => {
      setIsPaused(false);
    }, 3000);
  };

  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* Linear gradients on edges to fade out */}
      <div className="absolute inset-y-0 left-0 w-8 sm:w-24 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-8 sm:w-24 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

      {/* Manual Controls */}
      <div className="absolute top-1/2 -translate-y-1/2 left-2 z-30 sm:left-4">
        <button 
          onClick={() => scrollByAmount(-350)}
          className="bg-white/90 hover:bg-white text-brand-dark p-3 rounded-full shadow-lg border border-gray-200 transition-all hover:scale-110 cursor-pointer"
          aria-label="Scroll Left"
        >
          <DynamicIcon name="ChevronLeft" className="w-5 h-5" />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-2 z-30 sm:right-4">
        <button 
          onClick={() => scrollByAmount(350)}
          className="bg-white/90 hover:bg-white text-brand-dark p-3 rounded-full shadow-lg border border-gray-200 transition-all hover:scale-110 cursor-pointer"
          aria-label="Scroll Right"
        >
          <DynamicIcon name="ChevronRight" className="w-5 h-5" />
        </button>
      </div>

      {/* Scrolling Container */}
      <div 
        ref={carouselRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        className="flex gap-6 overflow-x-auto no-scrollbar py-8 px-6 sm:px-12 select-none"
        style={{ scrollBehavior: 'auto' }}
      >
        {doubledProjects.map((project, i) => (
          <div 
            key={`${project.title}-${i}`} 
            className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-200 hover:border-brand-secondary/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-[480px] shrink-0 w-[290px] sm:w-[350px] shadow-xl"
          >
            <div className="h-44 overflow-hidden relative">
              <img 
                src={project.image} 
                alt={project.alt} 
                draggable="false"
                className="w-full h-full object-cover object-left-top transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h5 className="text-lg sm:text-xl font-black uppercase tracking-tight mb-2 group-hover:text-brand-secondary transition-colors text-brand-dark">
                {project.title}
              </h5>
              <p className="text-gray-600 text-xs sm:text-sm font-medium leading-relaxed mb-4 overflow-y-auto no-scrollbar flex-grow">
                {project.description}
              </p>
              <div className="flex gap-4 mt-auto pt-2 border-t border-gray-100">
                {project.repo && (
                  <a 
                    href={project.repo} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider hover:text-brand-secondary transition-colors text-brand-dark"
                  >
                    <DynamicIcon name="Github" className="w-4 h-4"/> Repo
                  </a>
                )}
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider hover:text-brand-secondary transition-colors text-brand-dark"
                >
                  {project.linkIcon && (
                    <DynamicIcon name={project.linkIcon} className="w-4 h-4 text-brand-secondary shrink-0" />
                  )}
                  {project.linkLabel || "View Demo \u2192"}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);

  const phrases = useMemo(() => HERO_SECTION.phrases, []);

  // Set up rotation for hero header phrases
  useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [phrases]);

  return (
    <div className="min-h-screen font-sans selection:bg-brand-secondary selection:text-white scroll-smooth flex flex-col bg-brand-light">
      
      {/* SEAMLESS HERO & HEADER WRAPPER WITH BACKGROUND WATERMARK */}
      <div className="bg-brand-primary text-white relative overflow-hidden">
        <Watermark />
        
        {/* 1. HEADER SECTION */}
        <header className="text-white w-full relative z-50 bg-transparent">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative z-50 bg-transparent">
            <a href="/" className="flex items-center gap-3">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-brand-secondary text-xl font-black transition-transform hover:scale-105">
                {HEADER_NAV.logoEmoticon}
              </div>
              <span className="hidden lg:block text-white font-black text-xl uppercase tracking-wider drop-shadow-md shrink-0">
                {HEADER_NAV.logoText}
              </span>
            </a>
            
            {/* Main Navigation Links */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-8 font-bold tracking-wide">
              {HEADER_NAV.links.map((link) => (
                <a key={link.label} href={link.href} className="hover:text-brand-dark transition-colors uppercase text-sm">
                  {link.label}
                </a>
              ))}
            </nav>
            
            {/* Header Action Button */}
            <div className="flex items-center gap-3 sm:gap-4">
              <Link
                to={HERO_SECTION.ctaPrimaryLink}
                className="whitespace-nowrap inline-flex items-center relative pl-16 sm:pl-16 pr-4 sm:pr-6 py-2 sm:py-2.5 rounded-full bg-brand-secondary text-white text-[11px] sm:text-sm font-bold uppercase tracking-wider hover:bg-brand-dark transition-colors shadow-md text-left"
              >
                <img src={ABOUT_SECTION.avatarUrl} alt="Andrew Watts - Custom AI Developer" className="absolute left-[-0.25rem] top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border-2 border-brand-secondary object-cover" />
                <span className="hidden sm:inline">{HEADER_NAV.bookButtonText}</span>
                <span className="sm:hidden leading-tight">{HEADER_NAV.bookButtonShort}</span>
              </Link>
              
              {/* Hamburger Button */}
              <button 
                className="lg:hidden text-white p-1 -mr-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <DynamicIcon name={isMobileMenuOpen ? "X" : "Menu"} className="w-7 h-7" />
              </button>
            </div>
          </div>

          {/* Mobile Navigation Drawer */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="lg:hidden bg-brand-primary/95 backdrop-blur-md border-b border-white/10 overflow-hidden absolute w-full z-40 top-20 left-0"
              >
                <div className="flex flex-col items-center py-8 gap-6">
                  {HEADER_NAV.links.map((link) => (
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

        {/* 2. HERO SECTION */}
        <section className="relative z-10 pt-10 pb-20 sm:py-20 lg:py-24 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-12 items-center relative z-10 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-4 sm:space-y-8 flex flex-col items-center md:items-start w-full md:max-w-xl"
            >
              <div className="w-full">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-none mb-1 md:mb-2 uppercase tracking-tight text-white">
                  {HERO_SECTION.headline}
                </h1>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white/95 mb-3 sm:mb-4 flex flex-wrap items-start md:items-center justify-center md:justify-start gap-x-2 min-h-[3rem] md:min-h-[2.5rem]">
                  <span className="text-white select-none inline-flex items-center font-extrabold">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={phraseIndex}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.25 }}
                        className="inline-block"
                      >
                        {phrases[phraseIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                </h2>
                <p className="hidden sm:block text-lg mt-5 text-white/80 max-w-lg leading-relaxed font-medium">
                  {HERO_SECTION.description}
                </p>
                <p className="sm:hidden text-base mt-1 text-white/80 max-w-md leading-relaxed font-medium text-center px-4 mx-auto">
                  {HERO_SECTION.descriptionMobile}
                </p>
              </div>
              
              <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3 lg:gap-4 w-full max-w-md lg:w-auto">
                <Link
                  to={HERO_SECTION.ctaPrimaryLink}
                  className="whitespace-nowrap inline-flex items-center justify-center px-4 py-3 lg:px-8 lg:py-3.5 rounded-full bg-brand-secondary text-white font-black text-sm lg:text-base hover:bg-brand-dark hover:scale-105 transition-all shadow-xl uppercase tracking-wide w-full lg:w-auto text-center"
                >
                  {HERO_SECTION.ctaPrimaryText}
                </Link>
                <a
                  href={HERO_SECTION.ctaSecondaryLink}
                  className="whitespace-nowrap inline-flex items-center justify-center px-4 py-3 lg:px-8 lg:py-3.5 rounded-full bg-white text-brand-secondary font-black text-sm lg:text-base hover:bg-gray-100 hover:scale-105 transition-all shadow-xl uppercase tracking-wide w-full lg:w-auto text-center"
                >
                  {HERO_SECTION.ctaSecondaryText}
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 aspect-square w-full max-w-md mx-auto flex items-center justify-center bg-white"
            >
              <img src={HERO_SECTION.heroImage} alt="Andrew Watts" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </section>
      </div>

      <main className="flex-grow">

        {/* 5. BRING YOUR IDEAS TO LIFE SECTION */}
        <section id="about" className="bg-white text-brand-dark py-12 md:py-24 px-4 sm:px-6">
          {/* Desktop view */}
          <div className="hidden md:grid max-w-7xl mx-auto grid-cols-[1fr_2fr_1fr] gap-12 items-center text-center">
            <div className="flex justify-center items-center h-full w-full">
              <img src={IDEAS_SECTION.imageSad} alt={IDEAS_SECTION.imageSadAlt} className="w-full h-auto object-contain aspect-[3/4] rounded-2xl shadow-lg border border-gray-100" />
            </div>

            <div className="space-y-8 flex flex-col items-center px-4 max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-black text-brand-secondary uppercase tracking-tight">
                {IDEAS_SECTION.title}
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-medium">
                <p>{IDEAS_SECTION.paragraph1}</p>
                <p>{IDEAS_SECTION.paragraph2}</p>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3 sm:gap-4 pt-4 w-full justify-center">
                <Link to={IDEAS_SECTION.buttonLink} className="whitespace-nowrap inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand-secondary text-white font-bold text-base hover:bg-brand-dark hover:scale-105 transition-all shadow-lg uppercase tracking-wide text-center">
                  {IDEAS_SECTION.buttonText}
                </Link>
              </div>
            </div>

            <div className="flex justify-center items-center h-full w-full">
              <img src={IDEAS_SECTION.imageHappy} alt={IDEAS_SECTION.imageHappyAlt} className="w-full h-auto object-contain aspect-[3/4] rounded-2xl shadow-lg border border-gray-100" />
            </div>
          </div>

          {/* Mobile view */}
          <div className="md:hidden max-w-3xl mx-auto block overflow-hidden">
            <h2 className="text-2xl sm:text-3xl font-black text-brand-secondary uppercase tracking-tight mb-6 text-center">
              {IDEAS_SECTION.title}
            </h2>
            <div className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium text-left">
              <img src={IDEAS_SECTION.imageSad} alt={IDEAS_SECTION.imageSadAlt} className="w-32 sm:w-40 float-left mr-4 sm:mr-6 mb-2 object-contain rounded-2xl shadow-lg border border-gray-100" />
              <p className="mb-4">{IDEAS_SECTION.paragraph1}</p>
              <img src={IDEAS_SECTION.imageHappy} alt={IDEAS_SECTION.imageHappyAlt} className="w-32 sm:w-40 float-right ml-4 sm:ml-6 mb-2 mt-2 object-contain rounded-2xl shadow-lg border border-gray-100" />
              <p>{IDEAS_SECTION.paragraph2}</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-8 clear-both justify-center">
              <Link to={IDEAS_SECTION.buttonLink} className="whitespace-nowrap inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand-secondary text-white font-bold text-base hover:bg-brand-dark transition-all shadow-lg uppercase tracking-wide text-center">
                {IDEAS_SECTION.buttonText}
              </Link>
            </div>
          </div>
        </section>

        {/* 6. SECONDARY PROTOTYPE CTA */}
        <section className="bg-brand-primary text-white py-24 px-6 text-center relative overflow-hidden">
          <Watermark />
          <div className="max-w-3xl mx-auto space-y-8 relative z-10">
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-none tracking-tight">
              {SECONDARY_PROTOTYPE_CTA.title}
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-6">
              <Link to={SECONDARY_PROTOTYPE_CTA.buttonLink} className="whitespace-nowrap inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-secondary text-white font-black text-lg hover:bg-brand-dark hover:scale-105 transition-all shadow-2xl uppercase tracking-wide text-center">
                {SECONDARY_PROTOTYPE_CTA.buttonText}
              </Link>
            </div>
          </div>
        </section>

        {/* 7. THERE HAS TO BE AN EASIER WAY SECTION */}
        <section className="bg-white text-brand-dark py-12 md:py-24 px-4 sm:px-6">
          {/* Desktop view */}
          <div className="hidden md:grid max-w-7xl mx-auto grid-cols-[1fr_2fr_1fr] gap-12 items-center text-center">
            <div className="flex justify-center items-center h-full w-full">
              <img src={EASIER_WAY_SECTION.imageSad} alt={EASIER_WAY_SECTION.imageSadAlt} className="w-full h-auto object-contain aspect-[3/4]" />
            </div>

            <div className="space-y-8 flex flex-col items-center px-4 max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-black text-brand-secondary uppercase tracking-tight">
                {EASIER_WAY_SECTION.title}
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-medium">
                <p>{EASIER_WAY_SECTION.paragraph1}</p>
                <p>{EASIER_WAY_SECTION.paragraph2}</p>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3 sm:gap-4 pt-4 w-full justify-center">
                <Link to={EASIER_WAY_SECTION.buttonLink} className="whitespace-nowrap inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand-secondary text-white font-bold text-base hover:bg-brand-dark hover:scale-105 transition-all shadow-lg uppercase tracking-wide text-center">
                  {EASIER_WAY_SECTION.buttonText}
                </Link>
              </div>
            </div>

            <div className="flex justify-center items-center h-full w-full">
              <img src={EASIER_WAY_SECTION.imageHappy} alt={EASIER_WAY_SECTION.imageHappyAlt} className="w-full h-auto object-contain aspect-[3/4]" />
            </div>
          </div>

          {/* Mobile view */}
          <div className="md:hidden max-w-3xl mx-auto block overflow-hidden">
            <h2 className="text-2xl sm:text-3xl font-black text-brand-secondary uppercase tracking-tight mb-6 text-center">
              {EASIER_WAY_SECTION.title}
            </h2>
            <div className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium text-left">
              <img src={EASIER_WAY_SECTION.imageSad} alt={EASIER_WAY_SECTION.imageSadAlt} className="w-32 sm:w-40 float-left mr-4 sm:mr-6 mb-2 object-contain rounded-2xl shadow-lg border border-gray-100" />
              <p className="mb-4">{EASIER_WAY_SECTION.paragraph1}</p>
              <img src={EASIER_WAY_SECTION.imageHappy} alt={EASIER_WAY_SECTION.imageHappyAlt} className="w-32 sm:w-40 float-right ml-4 sm:ml-6 mb-2 mt-2 object-contain rounded-2xl shadow-lg border border-gray-100" />
              <p>{EASIER_WAY_SECTION.paragraph2}</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-8 clear-both justify-center">
              <Link to={EASIER_WAY_SECTION.buttonLink} className="whitespace-nowrap inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand-secondary text-white font-bold text-base hover:bg-brand-dark transition-all shadow-lg uppercase tracking-wide text-center">
                {EASIER_WAY_SECTION.buttonText}
              </Link>
            </div>
          </div>
        </section>

        {/* 8. TESTIMONIALS SECTION */}
        <section id="testimonials" className="bg-brand-primary text-white py-24 px-6 relative overflow-hidden">
          <Watermark />
          <div className="max-w-7xl mx-auto space-y-16 relative z-10">
            <div className="text-center space-y-3">
              <h2 className="text-xs sm:text-sm lg:text-base font-bold uppercase tracking-[0.2em] text-white/80">{TESTIMONIALS_SECTION.titleSmall}</h2>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight">{TESTIMONIALS_SECTION.titleLarge}</h3>
            </div>

            <div className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-3 gap-6 lg:gap-8 py-8 -my-8 -mx-6 px-6 lg:py-0 lg:my-0 lg:mx-0 lg:px-0">
              {TESTIMONIALS_SECTION.list.map((test, i) => (
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

        {/* 9. SERVICES SECTION (THE BOOKING MENU) */}
        <section id="services" className="bg-brand-light text-brand-dark py-24 px-6">
          <div className="max-w-7xl mx-auto">
            
            <div className="grid lg:grid-cols-2 gap-16 mb-16">
              {/* Left Column - Core products */}
              <div className="flex flex-col h-full">
                <h2 className="text-3xl lg:text-4xl font-black text-brand-secondary uppercase tracking-tight mb-10 text-center lg:text-left">
                  {BOOKING_MENU_SECTION.title}
                </h2>
                
                <div className="flex-grow flex flex-col space-y-8">
                  {[
                    PRODUCTS['live-prototyping'],
                    PRODUCTS['custom-workspace'],
                    PRODUCTS['app-updates'],
                    PRODUCTS['technical-roadmap']
                  ].map((service) => {
                    if (!service) return null;
                    return (
                      <div key={service.id} className="space-y-3">
                        <div className="flex items-center gap-2.5">
                          <DynamicIcon name={service.icon} className="w-5 h-5 text-brand-secondary shrink-0" />
                          <h3 className="text-xl font-black uppercase leading-tight">{service.title}</h3>
                        </div>
                        <p className="text-gray-600 text-base font-medium leading-relaxed">{service.description}</p>
                        <p className="text-gray-700 text-base font-bold leading-relaxed">{BOOKING_MENU_SECTION.whatYouGetLabel} <span className="font-medium text-gray-600">{service.includes}</span></p>
                        <div className="font-black text-lg flex items-center gap-3">
                          <span className="text-brand-dark">{service.price}</span>
                          <Link to={service.link} className="text-brand-secondary font-bold hover:opacity-80 transition-opacity">{service.linkText}</Link>
                        </div>
                      </div>
                    );
                  })}

                  {/* Refund Policies */}
                  <div className="mt-8 p-4 rounded-2xl bg-brand-secondary/5 border-2 border-brand-secondary/20">
                    <p className="text-sm font-bold text-brand-secondary leading-relaxed uppercase tracking-wide">
                      {BOOKING_MENU_SECTION.refundTitle}
                    </p>
                    <p className="text-sm font-medium text-brand-secondary mt-1 leading-relaxed">
                      {BOOKING_MENU_SECTION.refundDescription}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - How It Works */}
              <div className="flex flex-col h-full">
                <h2 className="text-3xl lg:text-4xl font-black text-brand-dark uppercase tracking-tight mb-10 text-center lg:text-left">
                  {HOW_IT_WORKS_SECTION.title}
                </h2>
                
                <div className="flex-grow">
                  <HowItWorksGuide />
                </div>
              </div>
            </div>

            {/* Book call anchor */}
            <div className="flex justify-center mt-8">
              <Link
                to={BOOKING_MENU_SECTION.buttonLink}
                className="whitespace-nowrap inline-flex items-center relative pl-16 sm:pl-18 pr-8 py-3.5 rounded-full bg-brand-secondary text-white text-sm sm:text-base font-bold uppercase tracking-wider hover:bg-brand-dark transition-colors shadow-xl text-left"
              >
                <img src={ABOUT_SECTION.avatarUrl} alt="Andrew Watts avatar" className="absolute left-[-0.25rem] top-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 border-brand-secondary object-cover" />
                <span>{BOOKING_MENU_SECTION.buttonText}</span>
              </Link>
            </div>

            {/* Additional Services */}
            <div className="mt-24 pt-16 border-t border-gray-200">
              <h2 className="text-3xl lg:text-4xl font-black text-brand-secondary uppercase tracking-tight mb-12 text-center">
                {BOOKING_MENU_SECTION.additionalServicesTitle}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                {[
                  PRODUCTS['ai-workshops'],
                  PRODUCTS['managed-hosting'],
                  PRODUCTS['speaking'],
                  PRODUCTS['custom-integration']
                ].map((service) => {
                  if (!service) return null;
                  return (
                    <div key={service.id} className="space-y-3">
                      <div className="flex items-center gap-2.5">
                        <DynamicIcon name={service.icon} className="w-5 h-5 text-brand-secondary shrink-0" />
                        <h3 className="text-xl font-black uppercase leading-tight">{service.title}</h3>
                      </div>
                      <p className="text-gray-600 text-base font-medium leading-relaxed">{service.description}</p>
                      <p className="text-gray-700 text-base font-bold leading-relaxed">{BOOKING_MENU_SECTION.whatYouGetLabel} <span className="font-medium text-gray-600">{service.includes}</span></p>
                      <div className="font-black text-lg flex items-center gap-3">
                        <span className="text-brand-dark">{service.price}</span>
                        <Link to={service.link} className="text-brand-secondary font-bold hover:opacity-80 transition-opacity">{service.linkText}</Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </section>

        {/* 10. MID PERSUASION CTA */}
        <section className="bg-brand-primary text-white py-24 px-6 text-center relative overflow-hidden">
          <Watermark />
          <div className="max-w-4xl mx-auto space-y-10 relative z-10">
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-none tracking-tight">
              {MID_PERSUASION_CTA.title}
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-6">
              <Link to={MID_PERSUASION_CTA.buttonPrimaryLink} className="whitespace-nowrap inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-secondary text-white font-black text-lg hover:bg-brand-dark hover:scale-105 transition-all shadow-2xl uppercase tracking-wide text-center">
                {MID_PERSUASION_CTA.buttonPrimaryText}
              </Link>
              <a href={MID_PERSUASION_CTA.linkedInUrl} target="_blank" rel="noreferrer" className="whitespace-nowrap inline-flex items-center justify-center px-8 py-4 rounded-full border-[3px] border-brand-secondary bg-white text-brand-secondary font-black text-lg hover:bg-brand-secondary hover:text-white hover:scale-105 transition-all shadow-2xl uppercase tracking-wide gap-2 text-center">
                <DynamicIcon name={MID_PERSUASION_CTA.buttonSecondaryIcon} className="w-6 h-6" /> {MID_PERSUASION_CTA.buttonSecondaryText}
              </a>
            </div>
          </div>
        </section>

        {/* 11. PORTFOLIO SHOWCASE SECTION */}
        <section id="projects" className="bg-white text-brand-dark py-24 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto space-y-10 relative z-10">
            <div className="text-center space-y-3">
              <h2 className="text-sm lg:text-base font-bold uppercase tracking-[0.2em] text-brand-secondary">{SHOWCASE_SECTION.titleSmall}</h2>
              <h3 className="text-4xl lg:text-5xl font-black uppercase tracking-tight">{SHOWCASE_SECTION.titleLarge}</h3>
              <p className="text-xl text-gray-600 font-bold max-w-2xl mx-auto">{SHOWCASE_SECTION.carouselTitle}</p>
            </div>

            <ShowcaseCarousel />
          </div>
        </section>

        {/* 12. FINAL CTA SECTION */}
        <section className="bg-brand-primary text-white py-24 px-6 text-center relative overflow-hidden">
          <Watermark />
          <div className="max-w-4xl mx-auto space-y-10 relative z-10">
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-none tracking-tight">
              {FINAL_CTA_SECTION.title}
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-6">
              <Link to={FINAL_CTA_SECTION.buttonPrimaryLink} className="whitespace-nowrap inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-secondary text-white font-black text-lg hover:bg-brand-dark hover:scale-105 transition-all shadow-2xl uppercase tracking-wide text-center">
                {FINAL_CTA_SECTION.buttonPrimaryText}
              </Link>
              <a href={FINAL_CTA_SECTION.linkedInUrl} target="_blank" rel="noreferrer" className="whitespace-nowrap inline-flex items-center justify-center px-8 py-4 rounded-full border-[3px] border-brand-secondary bg-white text-brand-secondary font-black text-lg hover:bg-brand-secondary hover:text-white hover:scale-105 transition-all shadow-2xl uppercase tracking-wide gap-2 text-center">
                <DynamicIcon name={FINAL_CTA_SECTION.buttonSecondaryIcon} className="w-6 h-6" /> {FINAL_CTA_SECTION.buttonSecondaryText}
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* 13. FOOTER SECTION */}
      <footer id="contact" className="bg-brand-light py-16 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-brand-dark font-bold uppercase tracking-widest text-sm px-6">
            <div className="flex gap-10">
              <a href={FOOTER_SECTION.linkedInUrl} target="_blank" rel="noreferrer" className="hover:text-brand-secondary transition-colors flex items-center gap-3">
                <DynamicIcon name={FOOTER_SECTION.linkedInIcon} className="w-6 h-6"/> LinkedIn
              </a>
              <a href={FOOTER_SECTION.githubUrl} target="_blank" rel="noreferrer" className="hover:text-brand-secondary transition-colors flex items-center gap-3">
                <DynamicIcon name={FOOTER_SECTION.githubIcon} className="w-6 h-6"/> GitHub
              </a>
            </div>
            <div className="text-gray-500">
              {FOOTER_SECTION.copyright}
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
