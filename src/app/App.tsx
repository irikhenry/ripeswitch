import { motion, MotionConfig } from "motion/react";
import { LazySection } from "./components/LazySection";
import { Navigation } from "./components/Navigation";
import { Seo } from "./components/Seo";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { BackToTop } from "./components/BackToTop";
import { useEffect, useState, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const PerformanceModelingPage = lazy(() => import("./pages/PerformanceModelingPage").then((m) => ({ default: m.PerformanceModelingPage })));
const WhitePaperPage = lazy(() => import("./pages/WhitePaperPage").then((m) => ({ default: m.WhitePaperPage })));
const ActiveRipeningControlPage = lazy(() => import("./pages/whitepapers/ActiveRipeningControlPage").then((m) => ({ default: m.ActiveRipeningControlPage })));
const EconomicImpactAssessmentPage = lazy(() => import("./pages/whitepapers/EconomicImpactAssessmentPage").then((m) => ({ default: m.EconomicImpactAssessmentPage })));
const MaterialSafetyCompliancePage = lazy(() => import("./pages/whitepapers/MaterialSafetyCompliancePage").then((m) => ({ default: m.MaterialSafetyCompliancePage })));
const PilotStudyNordicRetailPage = lazy(() => import("./pages/whitepapers/PilotStudyNordicRetailPage").then((m) => ({ default: m.PilotStudyNordicRetailPage })));
const TechnologyPage = lazy(() => import("./pages/TechnologyPage").then((m) => ({ default: m.TechnologyPage })));
const TechnicalSpecificationPage = lazy(() => import("./pages/TechnicalSpecificationPage").then((m) => ({ default: m.TechnicalSpecificationPage })));
const AboutPage = lazy(() => import("./pages/AboutPage").then((m) => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import("./pages/ContactPage").then((m) => ({ default: m.ContactPage })));
const HomeBelowFold = lazy(() => import("./sections/HomeBelowFold").then((m) => ({ default: m.HomeBelowFold })));
import { heroPackaging, overripeFruitImage, plasticPackagingImage, warehouseImage } from "./assets/responsiveImages";

// Animated Counter Component
function AnimatedCounter({ target, duration = 2, suffix = "", inView }: { target: number; duration?: number; suffix?: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    
    let start = 0;
    const end = target;
    const increment = end / (duration * 60);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [target, duration, inView]);

  return <>{count.toLocaleString()}{suffix}</>;
}

// Home Page Component
function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "RipeSwitch",
    url: "https://www.ripeswitch.com",
    logo: "https://www.ripeswitch.com/website_og.png",
    description:
      "Active ripening control, built into paper. Extends produce shelf life without plastics, electronics, or coatings.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Helsinki",
      addressCountry: "FI"
    }
  };

  return (
    <div className="w-full bg-white">
      <Seo
        title="RipeSwitch | Active Ripening Control in Paper"
        description="Active ripening control, built into paper. Extends produce shelf life without plastics, electronics, or coatings."
        path="/"
        jsonLd={jsonLd}
      />
      {/* Hero Section - Full Viewport */}
      <main id="main-content" className="relative w-full h-screen bg-[#026448] flex flex-col overflow-hidden">
        {/* Navigation Bar */}
        <Navigation />

        {/* Hero Content */}
        <div className="flex-1 flex flex-col lg:flex-row items-center justify-start lg:justify-between px-[5vw] md:px-[8vw] gap-[3vh] md:gap-[4vh] lg:gap-[6vw] pt-[22vh] md:pt-[24vh] lg:pt-[20vh] pb-[6vh] lg:pb-[8vh]">
          {/* Left Content */}
          <motion.div 
            className="flex-1 w-full lg:max-w-[46vw] z-10 text-center lg:text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-white leading-[1.02] mb-[2.5vh] md:mb-[4vh]" style={{ fontSize: 'clamp(2.2rem, 5.6vw, 7rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Active ripening control, built into paper.
            </h1>
            <p className="text-white/90 leading-[1.55] max-w-full lg:max-w-[38vw] mx-auto lg:mx-0 mb-[4vh]" style={{ fontSize: 'clamp(1rem, 1.4vw, 1.7rem)', fontWeight: 400 }}>
              Extends produce shelf life within paper-based packaging.
            </p>
          </motion.div>

          {/* Right Graphic */}
          <motion.div 
            className="flex-1 flex items-start lg:items-center justify-start lg:justify-center w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          >
            <div className="w-full lg:w-[clamp(360px,40vw,720px)] flex flex-col items-center justify-center lg:items-center gap-[3vh] overflow-visible">
              {/* Image container with particle effect */}
              <div className="relative w-full overflow-visible -mx-[5vw] md:-mx-[8vw] lg:mx-0 flex items-center justify-center">
                <div className="relative w-full rounded-[28px] backdrop-blur-sm p-[2vh] md:p-[2.5vh] overflow-visible">
                  <img
                    src={heroPackaging.src}
                    srcSet={heroPackaging.srcSet}
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 600px"
                    alt="RipeSwitch hero packaging"
                    className="w-full h-auto block"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    width={heroPackaging.width}
                    height={heroPackaging.height}
                  />
                </div>
                
                {/* Particle overlay */}
                <div className="absolute inset-0 pointer-events-none overflow-visible">
                  {/* Generate multiple dust particles */}
                  {[...Array(25)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full bg-white/30 blur-sm"
                      style={{
                        width: Math.random() * 8 + 3 + 'px',
                        height: Math.random() * 8 + 3 + 'px',
                        left: Math.random() * 100 + '%',
                        bottom: 0,
                      }}
                      animate={{
                        y: [-20, -300, -400],
                        x: [0, (Math.random() - 0.5) * 100, (Math.random() - 0.5) * 150],
                        opacity: [0, 0.6, 0.8, 0.4, 0],
                        scale: [0.5, 1, 1.2, 0.8, 0.3],
                      }}
                      transition={{
                        duration: Math.random() * 3 + 2,
                        delay: Math.random() * 4,
                        repeat: Infinity,
                        repeatDelay: Math.random() * 3 + 1,
                        ease: "easeOut"
                      }}
                    />
                  ))}
                  
                  {/* Larger mist particles */}
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={`mist-${i}`}
                      className="absolute rounded-full bg-[#EEFF41]/20 blur-md"
                      style={{
                        width: Math.random() * 20 + 15 + 'px',
                        height: Math.random() * 20 + 15 + 'px',
                        left: Math.random() * 100 + '%',
                        bottom: 0,
                      }}
                      animate={{
                        y: [-30, -250, -350],
                        x: [0, (Math.random() - 0.5) * 80, (Math.random() - 0.5) * 120],
                        opacity: [0, 0.4, 0.5, 0.3, 0],
                        scale: [0.8, 1.5, 2, 1.5, 0.5],
                      }}
                      transition={{
                        duration: Math.random() * 4 + 2.5,
                        delay: Math.random() * 5,
                        repeat: Infinity,
                        repeatDelay: Math.random() * 4 + 1.5,
                        ease: "easeOut"
                      }}
                    />
                  ))}
                </div>
              </div>
              
              <motion.div
                className="text-white text-center"
                style={{ fontSize: 'clamp(1.3rem, 1.8vw, 2.2rem)', fontWeight: 600, letterSpacing: '0.1em' }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-[4vh] md:bottom-[6vh] left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <span className="text-white/80 text-xs md:text-sm tracking-wider uppercase">Scroll</span>
          <motion.div
            className="w-[1px] h-8 md:h-12 bg-white/40"
            animate={{ scaleY: [1, 1.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </main>

      {/* Problem Section */}
      <section className="relative w-full min-h-screen bg-[#f8f8f8] flex flex-col justify-center px-[5vw] md:px-[8vw] py-[8vh] md:py-[10vh]">
        {/* Unified Problem Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[4vh] lg:gap-[3vw] w-full">
          {/* Left - Content */}
          <motion.div
            className="order-1 relative z-10 lg:col-span-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Tag */}
            <div className="inline-block px-5 py-2 bg-[#026448] rounded-full mb-[3vh] md:mb-[4vh]">
              <span className="text-white tracking-wider uppercase" style={{ fontSize: 'clamp(0.7rem, 0.85vw, 0.95rem)', fontWeight: 600 }}>
                The Problem
              </span>
            </div>

            {/* Hero Stat */}
            <div className="mb-[3vh] md:mb-[4vh]">
              <div className="text-[#026448] leading-[0.9] mb-[2vh] font-heading" style={{ fontSize: 'clamp(5rem, 12vw, 14rem)', fontWeight: 700 }}>
                19%
              </div>
              <h2 className="text-[#1a1a1a] leading-[1.15]" style={{ fontSize: 'clamp(1.8rem, 3vw, 3.4rem)', fontWeight: 600, letterSpacing: '-0.01em' }}>
                of food available to consumers ends up as waste
              </h2>
            </div>

            {/* Description */}
            <p className="text-[#4a4a4a] leading-[1.75] mb-[4vh] md:mb-[5vh] max-w-[520px]" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.35rem)' }}>
              Conventional paper lacks moisture and ripening control, increasing food waste.
            </p>

            {/* Source */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#EEFF41]/20 rounded-full">
              <span className="text-[#026448]/60 tracking-wide uppercase" style={{ fontSize: 'clamp(0.7rem, 0.85vw, 0.9rem)', fontWeight: 600 }}>
                Source:
              </span>
              <span className="text-[#026448]" style={{ fontSize: 'clamp(0.75rem, 0.9vw, 1rem)', fontWeight: 600 }}>
                UNEP Food Waste Index
              </span>
            </div>
          </motion.div>

          {/* Right - Hero Image */}
          <motion.div
            className="relative h-[40vh] md:h-[55vh] lg:h-[70vh] rounded-3xl overflow-hidden order-2 border border-black/10 shadow-[0_18px_50px_rgba(0,0,0,0.12)] w-full z-0 lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={overripeFruitImage.src}
              srcSet={overripeFruitImage.srcSet}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 60vw"
              alt="Food waste problem"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              width={overripeFruitImage.width}
              height={overripeFruitImage.height}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />
          </motion.div>
        </div>

        {/* Second Row: Three Symptom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[4vh] md:gap-[3vw] w-full lg:col-span-3 mt-[4vh] md:mt-[3vw]">
          {[
            {
              image: plasticPackagingImage,
              stat: "Policy clock",
              title: "Plastic ban timeline",
              emoji: "🇪🇺",
              label: "Regulatory pressure",
              description: "The phase-out is moving faster than viable shelf-life alternatives."
            },
            {
              image: warehouseImage,
              stat: "Low visibility",
              title: "Back-room loss",
              emoji: "📦",
              label: "Operational blind spot",
              description: "Shrink builds before the shelf because ripening isn’t managed upstream."
            },
            {
              image: overripeFruitImage,
              stat: "Margin erosion",
              title: "Retailer impact",
              emoji: "🍌",
              label: "Commercial consequence",
              description: "Waste shows up as lost margin, not just discarded product."
            }
          ].map((problem, index) => (
            <motion.div
              key={index}
              className="group bg-white border border-black/10 rounded-3xl overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.06)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              {/* Image */}
              <div className="relative h-[24vh] md:h-[28vh] overflow-hidden group-hover:scale-[1.01] transition-transform duration-500">
                <img
                  src={problem.image.src}
                  srcSet={problem.image.srcSet}
                  sizes="(max-width: 768px) 90vw, 360px"
                  alt={problem.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width={problem.image.width}
                  height={problem.image.height}
                />
              </div>

              {/* Content */}
              <div className="px-6 py-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-[#026448]/20 text-[#026448] mb-[1.5vh]" style={{ fontSize: 'clamp(0.7rem, 0.85vw, 0.9rem)', fontWeight: 600 }}>
                  {problem.label}
                </div>
                <div className="flex items-end justify-between mb-[1.5vh]">
                  <div className="text-[#026448] leading-none tabular-nums font-heading" style={{ fontSize: 'clamp(2.2rem, 3.2vw, 3.6rem)', fontWeight: 700 }}>
                    {problem.stat}
                  </div>
                  <div className="leading-none" style={{ fontSize: 'clamp(2.2rem, 3.2vw, 3.6rem)' }}>
                    {problem.emoji}
                  </div>
                </div>
                <h3 className="text-[#1a1a1a] leading-[1.25] mb-[1vh]" style={{ fontSize: 'clamp(1.2rem, 1.5vw, 1.8rem)', fontWeight: 700 }}>
                  {problem.title}
                </h3>
                <p className="text-[#4a4a4a] leading-[1.65]" style={{ fontSize: 'clamp(0.95rem, 1.05vw, 1.2rem)' }}>
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Critical Insight Section */}
      <section className="relative bg-[#026448] px-[5vw] md:px-[8vw] py-[10vh] md:py-[14vh] overflow-hidden">
        <div className="absolute top-[-10vh] right-[-12vw] w-[45vw] h-[45vw] rounded-full bg-white/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-15vh] left-[-10vw] w-[50vw] h-[50vw] rounded-full bg-black/10 blur-3xl pointer-events-none" />
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            className="text-center mb-[8vh] md:mb-[12vh] relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#EEFF41] rounded-full mb-[4vh] shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
              <span className="text-[#026448] tracking-widest uppercase font-bold" style={{ fontSize: 'clamp(0.8rem, 0.95vw, 1.05rem)' }}>
                Critical Insight
              </span>
            </div>
            <h3 className="text-[#EEFF41] leading-[1.1] max-w-[1000px] mx-auto" style={{ fontSize: 'clamp(2.1rem, 4.2vw, 5.2rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Policy cannot substitute for material performance
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[3.5vh] md:gap-[2.8vw] mb-[8vh] md:mb-[12vh] md:items-stretch">
            {[
              { value: 'Capability gap', label: 'Shelf-life extension is still the limiting factor', sublabel: 'Regulation moves faster than packaging capability' },
              { value: 'Methane burden', label: 'Food loss remains a major emissions driver', sublabel: 'Eliminating waste is a climate lever, not just a cost' },
              { value: 'Material constraint', label: 'Passive packaging can’t manage ripening', sublabel: 'Control must be built into the substrate itself' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-left bg-white/5 rounded-3xl border border-white/10 px-8 py-9 md:px-10 md:py-12 backdrop-blur-sm h-full min-h-[26vh] md:min-h-[30vh] flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
              >
                <div className="text-[#EEFF41] leading-none mb-[2vh] tabular-nums font-heading" style={{ fontSize: 'clamp(2rem, 3.2vw, 4.2rem)', fontWeight: 700 }}>
                  {stat.value}
                </div>
                <div className="text-white leading-[1.3] mb-[1.5vh]" style={{ fontSize: 'clamp(1.2rem, 1.7vw, 2rem)', fontWeight: 600 }}>
                  {stat.label}
                </div>
                <div className="text-white/60 leading-[1.6]" style={{ fontSize: 'clamp(0.95rem, 1.15vw, 1.3rem)', fontWeight: 400 }}>
                  {stat.sublabel}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center max-w-[900px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <p className="text-white/80 leading-[1.7]" style={{ fontSize: 'clamp(1.1rem, 1.35vw, 1.6rem)', fontWeight: 400 }}>
              The root issue isn’t behavior—it’s missing system-level ripening control in packaging.
            </p>
          </motion.div>
        </div>
      </section>

      <LazySection minHeight="1200px">
        <Suspense fallback={<div className="min-h-[60vh]" />}>
          <HomeBelowFold />
        </Suspense>
      </LazySection>
    </div>
  );
}

// Main App Component with Routing
export default function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(media.matches);
    update();
    if (media.addEventListener) {
      media.addEventListener("change", update);
      return () => media.removeEventListener("change", update);
    }
    media.addListener(update);
    return () => media.removeListener(update);
  }, []);

  return (
    <MotionConfig reducedMotion={isMobile ? "always" : "user"}>
      <BrowserRouter>
        <ScrollToTop />
        <BackToTop />
        <div className="flex flex-col min-h-screen">
          <div className="flex-1">
            <Suspense
              fallback={
                <div className="min-h-[60vh] flex items-center justify-center text-[#026448]">
                  <span className="text-lg font-medium">Loading…</span>
                </div>
              }
            >
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/technology" element={<TechnologyPage />} />
                <Route path="/technical-specification" element={<TechnicalSpecificationPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/research" element={<PerformanceModelingPage />} />
                <Route path="/research-library" element={<WhitePaperPage />} />
                <Route path="/research/active-ripening-control" element={<ActiveRipeningControlPage />} />
                <Route path="/research/economic-impact-assessment" element={<EconomicImpactAssessmentPage />} />
                <Route path="/research/material-safety-compliance" element={<MaterialSafetyCompliancePage />} />
                <Route path="/research/pilot-study-nordic-retail" element={<PilotStudyNordicRetailPage />} />
              </Routes>
            </Suspense>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </MotionConfig>
  );
}

// Wrapper removed: WhitePaperPage includes Navigation.
