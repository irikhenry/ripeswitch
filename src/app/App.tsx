import Logo from "../imports/Logo";
import Group from "../imports/Group";
import Hero from "../imports/Hero";
import Solution from "../imports/Solution";
import Future from "../imports/Future";
import Vector from "../imports/Vector";
import Vector2 from "../imports/Vector-28-624";
import Vector3 from "../imports/Vector-28-650";
import { motion } from "motion/react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { CompetitiveBenchmark } from "./CompetitiveBenchmark";
import { EconomicCalculator } from "./EconomicCalculator";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { BackToTop } from "./components/BackToTop";
import { ShoppingBag, SprayCan, Cpu, CheckCircle, XCircle, AlertTriangle } from "lucide-react";
import { useEffect, useState, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
const WhitePaperPage = lazy(() => import("./pages/WhitePaperPage").then((m) => ({ default: m.WhitePaperPage })));
const ActiveRipeningControlPage = lazy(() => import("./pages/whitepapers/ActiveRipeningControlPage").then((m) => ({ default: m.ActiveRipeningControlPage })));
const EconomicImpactAssessmentPage = lazy(() => import("./pages/whitepapers/EconomicImpactAssessmentPage").then((m) => ({ default: m.EconomicImpactAssessmentPage })));
const MaterialSafetyCompliancePage = lazy(() => import("./pages/whitepapers/MaterialSafetyCompliancePage").then((m) => ({ default: m.MaterialSafetyCompliancePage })));
const PilotStudyNordicRetailPage = lazy(() => import("./pages/whitepapers/PilotStudyNordicRetailPage").then((m) => ({ default: m.PilotStudyNordicRetailPage })));
const TechnologyPage = lazy(() => import("./pages/TechnologyPage").then((m) => ({ default: m.TechnologyPage })));
const TechnicalSpecificationPage = lazy(() => import("./pages/TechnicalSpecificationPage").then((m) => ({ default: m.TechnicalSpecificationPage })));
const AboutPage = lazy(() => import("./pages/AboutPage").then((m) => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import("./pages/ContactPage").then((m) => ({ default: m.ContactPage })));
import heroImage from "@/assets/f242dfb4f8f798366aca052e5e03a6786f6c7077.webp";
import plasticPackaging from "@/assets/b4eab2076f593911636cd87ce06d111d1f33466b.webp";
import warehouse from "@/assets/d00c8e10a3b43da85b7c67384a56ef1a9e0b16e2.webp";
import overripeFruit from "@/assets/480164da373b17192b4517497d43538a5c4e94f9.webp";
import paperImage from "@/assets/04650068b44f6d0f94fd7bd08fad65080804fd18.webp";
import coatingsImage from "@/assets/a862d039022cc63029916bf4db377aa9dc3cf67d.webp";
import gadgetsImage from "@/assets/d9cddfce247e250dccd009700756f04fe8065dda.webp";
import reducedVentImage from "@/assets/fc56beace820f5952006753be2f688f311532b49.webp";
import increasedVentImage from "@/assets/d46104a6ab5434c040d5c1d7aa5d43e0a5053118.webp";
import mechanismIllustration from "@/assets/92b9f5e155f2beeff77bbad48b5895559f909d98.webp";
import mechanismImage from "@/assets/7ef91b08ae6a15d57dbfbf4d9cf75e8c29fc2a52.webp";
import layeredStructure from "@/assets/fe07e9eb419929581d7629eabd4668e3df5ae00a.webp";
import rawMaterial from "@/assets/71c32859d86175c0aa7821b08b1c9be3aa251bfd.webp";
import functionalMedia from "@/assets/63b8a60675d09eac76211dbc9848cf3da1229ce5.webp";
import paperConverting from "@/assets/0df46eb4c699ca7f1ee082a13c21a365cb336417.webp";
import retailUse from "@/assets/705e0dd601e893c242eb4bf0eeb9c749ae0a98c5.webp";
import futureResearchBg from "@/assets/d053e7137ff5f3fa25ba5338edb922d41b85177d.webp";

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
  return (
    <div className="w-full bg-white">
      {/* Hero Section - Full Viewport */}
      <section className="relative w-full h-screen bg-[#026448] flex flex-col overflow-hidden">
        {/* Navigation Bar */}
        <Navigation />

        {/* Hero Content */}
        <div className="flex-1 flex flex-col lg:flex-row items-center justify-start lg:justify-between px-[5vw] md:px-[8vw] gap-[1vh] md:gap-[2vh] lg:gap-[8vw] pt-[24vh] md:pt-[26vh] lg:pt-[22vh] pb-[6vh] lg:pb-[6vh]">
          {/* Left Content */}
          <motion.div 
            className="flex-1 w-full lg:max-w-[52vw] z-10 text-center lg:text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-white leading-[1.05] mb-[2.5vh] md:mb-[5vh]" style={{ fontSize: 'clamp(2rem, 5.2vw, 6.5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Active ripening control, built into paper.
            </h1>
            <p className="text-white/90 leading-[1.6] max-w-full lg:max-w-[42vw] mx-auto lg:mx-0 mb-[4vh]" style={{ fontSize: 'clamp(1rem, 1.6vw, 1.8rem)', fontWeight: 400 }}>
              Extends produce shelf life without plastics, electronics, or coatings.
            </p>
          </motion.div>

          {/* Right Graphic */}
          <motion.div 
            className="flex-1 flex items-start lg:items-center justify-start lg:justify-center w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          >
            <div className="w-full lg:w-[clamp(320px,38vw,700px)] flex flex-col items-center justify-center lg:items-center gap-[3vh] overflow-visible">
              {/* Image container with particle effect */}
              <div className="relative w-full overflow-visible -mx-[5vw] md:-mx-[8vw] lg:mx-0 flex items-center justify-center">
                <img src={heroImage} alt="RipeSwitch" className="w-[110vw] md:w-[100vw] lg:w-full scale-110 md:scale-100" />
                
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
          <span className="text-white/60 text-xs md:text-sm tracking-wider uppercase">Scroll</span>
          <motion.div
            className="w-[1px] h-8 md:h-12 bg-white/40"
            animate={{ scaleY: [1, 1.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      {/* Problem Section */}
      <section className="relative w-full min-h-screen bg-white flex flex-col justify-center px-[5vw] md:px-[8vw] py-[8vh] md:py-[10vh]">
        {/* Two-Column Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[6vh] lg:gap-[8vw] items-center mb-[6vh] md:mb-[8vh]">
          {/* Left - Hero Image */}
          <motion.div
            className="relative h-[40vh] md:h-[55vh] lg:h-[70vh] rounded-3xl overflow-hidden order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={overripeFruit}
              alt="Food waste problem"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
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
              <div className="text-[#026448] leading-[0.9] mb-[2vh]" style={{ fontSize: 'clamp(5rem, 12vw, 14rem)', fontWeight: 700 }}>
                19%
              </div>
              <h2 className="text-[#1a1a1a] leading-[1.2]" style={{ fontSize: 'clamp(1.6rem, 2.8vw, 3.2rem)', fontWeight: 600, letterSpacing: '-0.01em' }}>
                of food available to consumers becomes waste
              </h2>
            </div>

            {/* Description */}
            <p className="text-[#4a4a4a] leading-[1.7] mb-[4vh] md:mb-[5vh]" style={{ fontSize: 'clamp(1rem, 1.25vw, 1.4rem)' }}>
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
        </div>

        {/* Stats Row */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-[4vh] md:gap-[3vw] mb-[6vh] md:mb-[8vh] pb-[5vh] md:pb-[7vh] border-b border-[#e0e0e0]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {[
            { value: '2029', label: 'EU plastic packaging phase-out deadline', highlight: true },
            { value: '40%', label: 'Loss occurs in transit & back rooms', highlight: false },
            { value: '1.3B', label: 'Tons of food wasted globally per year', highlight: false }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center sm:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <div className={`leading-none mb-2 ${stat.highlight ? 'text-[#026448]' : 'text-[#1a1a1a]'}`} style={{ fontSize: 'clamp(2.8rem, 4.5vw, 5.5rem)', fontWeight: 700 }}>
                {stat.value}
              </div>
              <div className="text-[#4a4a4a] leading-[1.5] max-w-[280px] mx-auto sm:mx-0" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)', fontWeight: 500 }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Three Problem Cards - Clean Editorial Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[4vh] md:gap-[3vw]">
          {[
            {
              image: plasticPackaging,
              title: "Plastic exit is fixed",
              emoji: "🇪🇺",
              description: "EU phase-out of single-use plastic packaging by 31 December 2029 creates a need for alternative materials that maintain functional shelf-life performance."
            },
            {
              image: warehouse,
              title: "Ripening-related loss",
              emoji: "📦",
              description: "Happens primarily in transit and back rooms, before the shelf—where visibility is low but impact is highest."
            },
            {
              image: overripeFruit,
              title: "Produce waste",
              emoji: "🍌",
              description: "Food produce waste is structurally unsolved. Household waste is the visible outcome, not the root cause."
            }
          ].map((problem, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              {/* Image */}
              <div className="relative h-[25vh] md:h-[32vh] rounded-2xl overflow-hidden mb-[3vh] border border-[#e0e0e0] group-hover:border-[#026448]/30 transition-colors">
                <img
                  src={problem.image}
                  alt={problem.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex items-start gap-3 mb-[2vh]">
                <div className="text-2xl leading-none">
                  {problem.emoji}
                </div>
                <h3 className="text-[#1a1a1a] leading-[1.25] flex-1" style={{ fontSize: 'clamp(1.2rem, 1.5vw, 1.8rem)', fontWeight: 700 }}>
                  {problem.title}
                </h3>
              </div>
              <p className="text-[#4a4a4a] leading-[1.65]" style={{ fontSize: 'clamp(0.95rem, 1.05vw, 1.2rem)' }}>
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Paradox Section - Even Policy Leaders Are Losing Ground */}
      <section className="relative w-full min-h-screen bg-[#1a1a1a] flex items-center overflow-hidden">
        <div className="w-full">
          {/* Split Screen Container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
            
            {/* LEFT SIDE - Finland Success Story (Yellow/Optimistic) */}
            <motion.div 
              className="relative bg-[#EEFF41] flex items-center justify-center px-[6vw] md:px-[8vw] py-[10vh] lg:py-[8vh]"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="max-w-[600px]">
                {/* Tag */}
                <div className="inline-block px-5 py-2 bg-[#026448] rounded-full mb-[4vh]">
                  <span className="text-white tracking-wider uppercase" style={{ fontSize: 'clamp(0.7rem, 0.85vw, 0.95rem)', fontWeight: 600 }}>
                    Best-in-Class Policy
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-[#026448] leading-[1.1] mb-[4vh]" style={{ fontSize: 'clamp(2rem, 3.5vw, 4.2rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
                  Finland leads in food waste regulation
                </h2>

                {/* Success Indicators */}
                <div className="space-y-[2.5vh]">
                  {[
                    { label: 'Strong policy framework', icon: '✓' },
                    { label: 'Mandatory reporting since 2020', icon: '✓' },
                    { label: 'High consumer awareness', icon: '✓' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#026448] flex items-center justify-center text-[#EEFF41] font-bold" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.4rem)' }}>
                        {item.icon}
                      </div>
                      <span className="text-[#026448]/80" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.4rem)', fontWeight: 500 }}>
                        {item.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#026448]/5 rounded-full blur-3xl pointer-events-none" />
            </motion.div>

            {/* RIGHT SIDE - The Reality (Dark) */}
            <motion.div 
              className="relative bg-[#1a1a1a] flex items-center justify-center px-[6vw] md:px-[8vw] py-[10vh] lg:py-[8vh] border-l-0 lg:border-l border-white/10"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="max-w-[600px]">
                {/* Tag */}
                <div className="inline-block px-5 py-2 bg-white/10 rounded-full mb-[4vh]">
                  <span className="text-white/60 tracking-wider uppercase" style={{ fontSize: 'clamp(0.7rem, 0.85vw, 0.95rem)', fontWeight: 600 }}>
                    2020 → 2023
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-white leading-[1.1] mb-[5vh]" style={{ fontSize: 'clamp(2rem, 3.5vw, 4.2rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
                  Yet waste increased
                </h2>

                {/* Animated Stats */}
                <div className="space-y-[4vh]">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <div className="text-white/50 mb-2" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)', fontWeight: 500 }}>
                      Total waste (tonnes)
                    </div>
                    <motion.div 
                      className="text-white leading-none relative"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      style={{ fontSize: 'clamp(2.5rem, 4vw, 5rem)', fontWeight: 700 }}
                    >
                      <motion.span
                        className="absolute left-0 top-0"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: [1, 0.3, 0] }}
                        transition={{ duration: 2, delay: 1 }}
                      >
                        360M
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 2 }}
                        className="text-[#EEFF41]"
                      >
                        {' '}→ 400M
                      </motion.span>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <div className="text-white/50 mb-2" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)', fontWeight: 500 }}>
                      Per capita (kg)
                    </div>
                    <motion.div 
                      className="text-white leading-none relative"
                      style={{ fontSize: 'clamp(2.5rem, 4vw, 5rem)', fontWeight: 700 }}
                    >
                      <motion.span
                        className="absolute left-0 top-0"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: [1, 0.3, 0] }}
                        transition={{ duration: 2, delay: 1.2 }}
                      >
                        23
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 2.2 }}
                        className="text-[#EEFF41]"
                      >
                        {' '}→ 28
                      </motion.span>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <div className="text-white/50 mb-2" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)', fontWeight: 500 }}>
                      GHG emissions value
                    </div>
                    <motion.div 
                      className="text-white leading-none relative"
                      style={{ fontSize: 'clamp(2.5rem, 4vw, 5rem)', fontWeight: 700 }}
                    >
                      <motion.span
                        className="absolute left-0 top-0"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: [1, 0.3, 0] }}
                        transition={{ duration: 2, delay: 1.4 }}
                      >
                        €500M
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 2.4 }}
                        className="text-[#EEFF41]"
                      >
                        {' '}→ €650M
                      </motion.span>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Source */}
                <motion.div
                  className="mt-[5vh] text-white/40"
                  style={{ fontSize: 'clamp(0.75rem, 0.9vw, 1rem)', fontWeight: 400 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  Source: Luonnonvarakeskus Food Waste Report 2026
                </motion.div>
              </div>

              {/* Decorative gradient */}
              <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-[#026448]/20 to-transparent pointer-events-none" />
            </motion.div>
          </div>

          {/* Bottom Full-Width Impact Section */}
          <motion.div 
            className="relative bg-[#026448] px-[5vw] md:px-[8vw] py-[10vh] md:py-[14vh]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="max-w-[1400px] mx-auto">
              {/* Critical Insight */}
              <motion.div
                className="text-center mb-[8vh] md:mb-[12vh]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="inline-block px-6 py-3 bg-[#EEFF41] rounded-full mb-[4vh]">
                  <span className="text-[#026448] tracking-wider uppercase font-bold" style={{ fontSize: 'clamp(0.85rem, 1vw, 1.15rem)' }}>
                    Critical Insight
                  </span>
                </div>
                <h3 className="text-[#EEFF41] leading-[1.15] max-w-[1000px] mx-auto" style={{ fontSize: 'clamp(2rem, 4vw, 5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
                  Policy can't override physics
                </h3>
              </motion.div>

              {/* Global Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[4vh] md:gap-[3vw] mb-[8vh] md:mb-[12vh]">
                {[
                  { value: '~1B', label: 'Tonnes lost annually', sublabel: 'Global supply chain waste' },
                  { value: '14%', label: 'Of global methane emissions', sublabel: 'From food system losses' },
                  { value: '40%', label: 'Loss occurs before consumer', sublabel: 'Transit, storage, back rooms' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
                  >
                    <div className="text-[#EEFF41] leading-none mb-[2vh]" style={{ fontSize: 'clamp(3.5rem, 6vw, 8rem)', fontWeight: 700 }}>
                      {stat.value}
                    </div>
                    <div className="text-white leading-[1.3] mb-[1vh]" style={{ fontSize: 'clamp(1.2rem, 1.6vw, 2rem)', fontWeight: 600 }}>
                      {stat.label}
                    </div>
                    <div className="text-white/60 leading-[1.5]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)', fontWeight: 400 }}>
                      {stat.sublabel}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Callout */}
              <motion.div
                className="text-center max-w-[900px] mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <p className="text-white/80 leading-[1.7]" style={{ fontSize: 'clamp(1.1rem, 1.35vw, 1.6rem)', fontWeight: 400 }}>
                  The root problem isn't behavior. It's the absence of a packaging component that actively manages ripening at a systems level.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section - RipeSwitch Introduction */}
      <section className="relative w-full min-h-screen bg-white flex flex-col justify-center px-[5vw] md:px-[8vw] py-[8vh] md:py-[10vh]">
        <div className="max-w-[1400px] w-full mx-auto">
          {/* Section Tag */}
          <motion.div
            className="text-center mb-[6vh] md:mb-[8vh]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-5 py-2 bg-[#EEFF41] rounded-full">
              <span className="text-[#026448] tracking-wider uppercase" style={{ fontSize: 'clamp(0.7rem, 0.85vw, 0.95rem)', fontWeight: 700 }}>
                The Solution
              </span>
            </div>
          </motion.div>

          {/* Main Solution Block */}
          <motion.div
            className="text-center mb-[10vh] md:mb-[14vh]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-[#1a1a1a] leading-[1.05] mb-[4vh] md:mb-[6vh]" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 7rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Paper-based ripening control
            </h2>
            <p className="text-[#4a4a4a] leading-[1.7] max-w-[900px] mx-auto" style={{ fontSize: 'clamp(1.1rem, 1.4vw, 1.7rem)', fontWeight: 400 }}>
              RipeSwitch is a scalable paper packaging component that actively manages gas exchange around fresh produce, delaying ripening progression without plastics, electronics, or chemical coatings.
            </p>
          </motion.div>

          {/* Three Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[4vh] md:gap-[4vw] mb-[10vh] md:mb-[14vh]">
            {[
              {
                number: "01",
                title: "Material simplicity",
                description: "Integrates into standard paper converting. No exotic materials, no electronics, no custom equipment."
              },
              {
                number: "02",
                title: "Active control",
                description: "Manages the micro-climate around produce. Not a passive barrier—an active ripening regulator."
              },
              {
                number: "03",
                title: "Scalable economics",
                description: "Compatible with existing manufacturing and distribution. Built for global rollout, not pilot projects."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 + index * 0.15 }}
              >
                <div className="text-[#026448] leading-none mb-[2vh]" style={{ fontSize: 'clamp(3rem, 4vw, 5rem)', fontWeight: 700 }}>
                  {benefit.number}
                </div>
                <h3 className="text-[#026448] leading-[1.2] mb-[2vh]" style={{ fontSize: 'clamp(1.3rem, 1.6vw, 2rem)', fontWeight: 700 }}>
                  {benefit.title}
                </h3>
                <p className="text-[#4a4a4a] leading-[1.65]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.3rem)' }}>
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Imported Solution Graphic */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            <Solution />
          </motion.div>
        </div>
      </section>

      {/* Mechanism Section */}
      <section className="relative w-full min-h-screen bg-white flex flex-col justify-center px-[5vw] md:px-[8vw] py-[8vh] md:py-[10vh]">
        <div className="max-w-[1400px] w-full mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-[8vh] md:mb-[12vh]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-5 py-2 bg-[#EEFF41] rounded-full mb-[4vh]">
              <span className="text-[#026448] tracking-wider uppercase" style={{ fontSize: 'clamp(0.7rem, 0.85vw, 0.95rem)', fontWeight: 700 }}>
                How It Works
              </span>
            </div>
            <h2 className="text-[#1a1a1a] leading-[1.1] mb-[4vh]" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 5.5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Active control through material design
            </h2>
            <p className="text-[#4a4a4a] leading-[1.7] max-w-[900px] mx-auto" style={{ fontSize: 'clamp(1rem, 1.3vw, 1.5rem)' }}>
              RipeSwitch manages ripening by controlling gas exchange at the fruit surface. Not through sealing—through selective ventilation.
            </p>
          </motion.div>

          {/* Mechanism Illustration */}
          <motion.div
            className="mb-[10vh] md:mb-[14vh]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <div className="w-full lg:w-3/4 lg:mx-auto rounded-3xl overflow-hidden">
              <ImageWithFallback 
                src={mechanismImage}
                alt="Active Control Mechanism - RipeSwitch technology illustration"
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Two Modes Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[5vh] lg:gap-[5vw] mb-[10vh] md:mb-[14vh]">
            {/* HOLD Mode */}
            <motion.div
              className="bg-[#026448] rounded-3xl p-[5vh] md:p-[6vh] text-white"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-[4vh]">
                <div className="inline-block px-4 py-2 bg-white/10 rounded-full mb-[3vh]">
                  <span className="text-[#EEFF41] tracking-wider uppercase font-bold" style={{ fontSize: 'clamp(0.7rem, 0.85vw, 0.95rem)' }}>
                    Mode 01
                  </span>
                </div>
                <h3 className="text-white leading-[1.15] mb-[2vh]" style={{ fontSize: 'clamp(2rem, 3vw, 3.5rem)', fontWeight: 700 }}>
                  HOLD
                </h3>
                <p className="text-white/80 leading-[1.6]" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.4rem)' }}>
                  Delays ripening when produce is in transit or storage
                </p>
              </div>

              <div className="relative h-[28vh] md:h-[35vh] rounded-2xl overflow-hidden mb-[3vh]">
                <Vector />
              </div>

              <div className="space-y-[2vh]">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#EEFF41] flex-shrink-0 mt-1" />
                  <p className="text-white/90 leading-[1.6]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.3rem)' }}>
                    Reduces ethylene exposure
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#EEFF41] flex-shrink-0 mt-1" />
                  <p className="text-white/90 leading-[1.6]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.3rem)' }}>
                    Maintains firmness longer
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#EEFF41] flex-shrink-0 mt-1" />
                  <p className="text-white/90 leading-[1.6]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.3rem)' }}>
                    Extends handling window
                  </p>
                </div>
              </div>
            </motion.div>

            {/* READY Mode */}
            <motion.div
              className="bg-[#EEFF41] rounded-3xl p-[5vh] md:p-[6vh]"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="mb-[4vh]">
                <div className="inline-block px-4 py-2 bg-[#026448]/10 rounded-full mb-[3vh]">
                  <span className="text-[#026448] tracking-wider uppercase font-bold" style={{ fontSize: 'clamp(0.7rem, 0.85vw, 0.95rem)' }}>
                    Mode 02
                  </span>
                </div>
                <h3 className="text-[#026448] leading-[1.15] mb-[2vh]" style={{ fontSize: 'clamp(2rem, 3vw, 3.5rem)', fontWeight: 700 }}>
                  READY
                </h3>
                <p className="text-[#026448]/80 leading-[1.6]" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.4rem)' }}>
                  Allows natural ripening when fruit reaches consumer
                </p>
              </div>

              <div className="relative w-full rounded-2xl overflow-hidden mb-[3vh]" style={{ aspectRatio: '515.5 / 347.5' }}>
                <Vector3 />
              </div>

              <div className="space-y-[2vh]">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#026448] flex-shrink-0 mt-1" />
                  <p className="text-[#026448]/90 leading-[1.6]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.3rem)' }}>
                    Resumes normal gas exchange
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#026448] flex-shrink-0 mt-1" />
                  <p className="text-[#026448]/90 leading-[1.6]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.3rem)' }}>
                    Predictable ripening progression
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#026448] flex-shrink-0 mt-1" />
                  <p className="text-[#026448]/90 leading-[1.6]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.3rem)' }}>
                    Optimal eating window
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Material Structure */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-[#1a1a1a] leading-[1.2] mb-[4vh]" style={{ fontSize: 'clamp(1.8rem, 2.8vw, 3.5rem)', fontWeight: 700 }}>
              Layered material architecture
            </h3>
            <div className="bg-[#026448] rounded-3xl p-[5vh] md:p-[6vh]">
              <img src={layeredStructure} alt="Material structure" className="w-full max-w-[1000px] mx-auto rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Competitive Landscape Section */}
      <section className="relative w-full min-h-screen bg-[#f8f8f8] flex flex-col justify-center px-[5vw] md:px-[8vw] py-[8vh] md:py-[10vh]">
        <div className="max-w-[1400px] w-full mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-[8vh] md:mb-[12vh]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-5 py-2 bg-[#026448] rounded-full mb-[4vh]">
              <span className="text-white tracking-wider uppercase" style={{ fontSize: 'clamp(0.7rem, 0.85vw, 0.95rem)', fontWeight: 600 }}>
                Competitive Position
              </span>
            </div>
            <h2 className="text-[#1a1a1a] leading-[1.1] mb-[4vh]" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 5.5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Why alternatives fall short
            </h2>
            <p className="text-[#4a4a4a] leading-[1.7] max-w-[800px] mx-auto" style={{ fontSize: 'clamp(1rem, 1.3vw, 1.5rem)' }}>
              Current solutions either don't scale, require behavior change, or sacrifice the core function.
            </p>
          </motion.div>

          {/* Three Alternative Cards with Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[4vh] md:gap-[3vw] mb-[10vh] md:mb-[14vh]">
            {[
              {
                icon: ShoppingBag,
                image: paperImage,
                title: "Plain paper",
                problem: "Can't control moisture or ripening",
                result: "Accelerates spoilage"
              },
              {
                icon: SprayCan,
                image: coatingsImage,
                title: "Chemical coatings",
                problem: "Add complexity and cost",
                result: "Regulatory uncertainty"
              },
              {
                icon: Cpu,
                image: gadgetsImage,
                title: "Smart packaging",
                problem: "Requires infrastructure",
                result: "Unscalable economics"
              }
            ].map((alt, index) => {
              const Icon = alt.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden border border-[#e0e0e0] hover:border-[#026448]/30 transition-all group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                >
                  {/* Image */}
                  <div className="relative h-[25vh] md:h-[28vh] overflow-hidden">
                    <img
                      src={alt.image}
                      alt={alt.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    {/* Icon Overlay */}
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#026448]" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-[3vh] md:p-[3.5vh]">
                    <h3 className="text-[#1a1a1a] leading-[1.2] mb-[2vh]" style={{ fontSize: 'clamp(1.2rem, 1.5vw, 1.8rem)', fontWeight: 700 }}>
                      {alt.title}
                    </h3>
                    <div className="space-y-[1.5vh]">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <p className="text-[#666] leading-[1.5]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)' }}>
                          {alt.problem}
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                        <p className="text-[#666] leading-[1.5]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)' }}>
                          {alt.result}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Benchmark Table */}
          <CompetitiveBenchmark />
        </div>
      </section>

      {/* Economic Impact Calculator Section */}
      <section className="relative w-full min-h-screen bg-[#026448] flex flex-col justify-center px-[5vw] md:px-[8vw] py-[8vh] md:py-[10vh]">
        <div className="max-w-[1400px] w-full mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-[8vh] md:mb-[12vh]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-5 py-2 bg-[#EEFF41] rounded-full mb-[4vh]">
              <span className="text-[#026448] tracking-wider uppercase" style={{ fontSize: 'clamp(0.7rem, 0.85vw, 0.95rem)', fontWeight: 700 }}>
                Economic Impact
              </span>
            </div>
            <h2 className="text-[#EEFF41] leading-[1.1] mb-[4vh]" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 5.5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              The numbers that matter
            </h2>
            <p className="text-white/90 leading-[1.7] max-w-[900px] mx-auto" style={{ fontSize: 'clamp(1rem, 1.3vw, 1.5rem)' }}>
              Even small reductions in produce shrink deliver substantial economic impact at retail scale.
            </p>
          </motion.div>

          {/* Interactive Calculator */}
          <EconomicCalculator />
        </div>
      </section>

      {/* CFO/Business Impact Section */}
      <section className="relative w-full min-h-screen bg-white flex flex-col justify-center px-[5vw] md:px-[8vw] py-[8vh] md:py-[10vh]">
        <div className="max-w-[1400px] w-full mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-[10vh] md:mb-[14vh]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-5 py-2 bg-[#026448] rounded-full mb-[4vh]">
              <span className="text-white tracking-wider uppercase" style={{ fontSize: 'clamp(0.7rem, 0.85vw, 0.95rem)', fontWeight: 700 }}>
                CFO Perspective
              </span>
            </div>
            <h2 className="text-[#1a1a1a] leading-[1.1] mb-[4vh]" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 5.5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Why finance teams care
            </h2>
            <p className="text-[#4a4a4a] leading-[1.7] max-w-[900px] mx-auto" style={{ fontSize: 'clamp(1rem, 1.3vw, 1.5rem)' }}>
              Produce shrink directly impacts gross margin. RipeSwitch turns a recurring loss into a controlled variable.
            </p>
          </motion.div>

          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[8vh] md:gap-[6vw] mb-[10vh] md:mb-[14vh]">
            {/* Left - The Problem */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-[#f8f8f8] rounded-3xl p-[5vh] md:p-[6vh] h-full">
                <div className="flex items-start gap-4 mb-[4vh]">
                  <div className="w-14 h-14 rounded-full bg-[#026448]/10 flex items-center justify-center flex-shrink-0">
                    <XCircle className="w-7 h-7 text-[#026448]" />
                  </div>
                  <div>
                    <h3 className="text-[#026448] leading-[1.2] mb-[2vh]" style={{ fontSize: 'clamp(1.4rem, 1.8vw, 2.2rem)', fontWeight: 700 }}>
                      Current reality
                    </h3>
                    <p className="text-[#4a4a4a] leading-[1.65]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.3rem)' }}>
                      Shrink treated as unavoidable cost
                    </p>
                  </div>
                </div>

                <div className="space-y-[3vh]">
                  {[
                    { label: 'Produce shrink rate', value: '3-8%', impact: 'Industry standard' },
                    { label: 'Direct margin impact', value: '15-30%', impact: 'Of category profit' },
                    { label: 'Mitigation options', value: 'Limited', impact: 'Plastic phase-out looming' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="border-l-4 border-[#026448]/30 pl-[3vh] py-[1vh]"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    >
                      <div className="text-[#1a1a1a] font-bold mb-1" style={{ fontSize: 'clamp(0.85rem, 1vw, 1.15rem)' }}>
                        {item.label}
                      </div>
                      <div className="text-[#026448] font-bold mb-1" style={{ fontSize: 'clamp(1.4rem, 2vw, 2.4rem)' }}>
                        {item.value}
                      </div>
                      <div className="text-[#4a4a4a]" style={{ fontSize: 'clamp(0.85rem, 1vw, 1.15rem)' }}>
                        {item.impact}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right - The Solution */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-[#026448] rounded-3xl p-[5vh] md:p-[6vh] h-full">
                <div className="flex items-start gap-4 mb-[4vh]">
                  <div className="w-14 h-14 rounded-full bg-[#EEFF41] flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-7 h-7 text-[#026448]" />
                  </div>
                  <div>
                    <h3 className="text-[#EEFF41] leading-[1.2] mb-[2vh]" style={{ fontSize: 'clamp(1.4rem, 1.8vw, 2.2rem)', fontWeight: 700 }}>
                      With RipeSwitch
                    </h3>
                    <p className="text-white/90 leading-[1.65]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.3rem)' }}>
                      Shrink becomes a manageable variable
                    </p>
                  </div>
                </div>

                <div className="space-y-[3vh]">
                  {[
                    { label: 'Shrink reduction potential', value: '20-40%', impact: 'Of addressable produce shrink' },
                    { label: 'Margin recovery', value: '3-12%', impact: 'Of category gross margin' },
                    { label: 'Implementation cost', value: 'Minimal', impact: 'Standard paper economics' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="border-l-4 border-[#EEFF41] pl-[3vh] py-[1vh]"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    >
                      <div className="text-white/80 font-bold mb-1" style={{ fontSize: 'clamp(0.85rem, 1vw, 1.15rem)' }}>
                        {item.label}
                      </div>
                      <div className="text-[#EEFF41] font-bold mb-1" style={{ fontSize: 'clamp(1.4rem, 2vw, 2.4rem)' }}>
                        {item.value}
                      </div>
                      <div className="text-white/70" style={{ fontSize: 'clamp(0.85rem, 1vw, 1.15rem)' }}>
                        {item.impact}
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* Critical Economic Insight */}
                  <div className="mt-[3vh] pt-[3vh] border-t border-white/20">
                    <div className="text-[#EEFF41] leading-[1.6]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)', fontWeight: 600 }}>
                      Margin recovery occurs without consumer price inflation
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Stats Row */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-[5vh] md:gap-[3vw]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {[
              { 
                metric: 'ROI timeline', 
                value: '6-12', 
                unit: 'months',
                description: 'Depending on category rollout speed. Earlier payback in high-shrink categories (berries, avocados, tomatoes)' 
              },
              { 
                metric: 'Capital requirement', 
                value: 'Zero', 
                unit: '',
                description: 'No new equipment or infrastructure' 
              },
              { 
                metric: 'Supply chain risk', 
                value: 'Low', 
                unit: '',
                description: 'Compatible with existing operations' 
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-[4vh] border border-[#e0e0e0] rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <div className="text-[#4a4a4a] mb-[1vh] uppercase tracking-wider" style={{ fontSize: 'clamp(0.75rem, 0.9vw, 1rem)', fontWeight: 600 }}>
                  {stat.metric}
                </div>
                <div className="text-[#026448] leading-none mb-[1vh]" style={{ fontSize: 'clamp(2.5rem, 4vw, 5rem)', fontWeight: 700 }}>
                  {stat.value}
                </div>
                {stat.unit && (
                  <div className="text-[#026448] mb-[2vh]" style={{ fontSize: 'clamp(1rem, 1.3vw, 1.6rem)', fontWeight: 600 }}>
                    {stat.unit}
                  </div>
                )}
                <div className="text-[#4a4a4a] leading-[1.5]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)' }}>
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact on Food Prices Section */}
      <section className="relative w-full min-h-screen bg-[#1a1a1a] flex flex-col justify-center px-[5vw] md:px-[8vw] py-[8vh] md:py-[10vh]">
        <div className="max-w-[1400px] w-full mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-[10vh] md:mb-[14vh]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-5 py-2 bg-[#EEFF41] rounded-full mb-[4vh]">
              <span className="text-[#026448] tracking-wider uppercase" style={{ fontSize: 'clamp(0.7rem, 0.85vw, 0.95rem)', fontWeight: 700 }}>
                Consumer Impact
              </span>
            </div>
            <h2 className="text-[#EEFF41] leading-[1.1] mb-[4vh]" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 5.5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              How shrink structurally shapes food prices
            </h2>
            <p className="text-white/90 leading-[1.7] max-w-[900px] mx-auto" style={{ fontSize: 'clamp(1rem, 1.3vw, 1.5rem)' }}>
              Shrink costs are embedded in retail pricing. Reducing loss creates room for price stability and margin optimization.
            </p>
          </motion.div>

          {/* Price Flow Visualization */}
          <motion.div
            className="mb-[10vh] md:mb-[14vh]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-[5vh] md:p-[8vh]">
              <h3 className="text-white text-center leading-[1.2] mb-[6vh]" style={{ fontSize: 'clamp(1.4rem, 2vw, 2.5rem)', fontWeight: 700 }}>
                Current pricing model embeds waste cost
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[3vh] md:gap-[3vw]">
                {[
                  { 
                    step: '01',
                    title: 'Purchase cost',
                    value: '€1.00',
                    description: 'Per unit from supplier'
                  },
                  { 
                    step: '02',
                    title: 'Shrink factor',
                    value: '+15%',
                    description: '5% unit loss amplified through retail margin structure',
                    highlight: true
                  },
                  { 
                    step: '03',
                    title: 'Target margin',
                    value: '+40%',
                    description: 'Retailer gross margin'
                  },
                  { 
                    step: '04',
                    title: 'Shelf price',
                    value: '€1.61',
                    description: 'Consumer pays for loss'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className={`relative ${item.highlight ? 'bg-[#026448]' : 'bg-white/5'} border ${item.highlight ? 'border-[#EEFF41]' : 'border-white/10'} rounded-2xl p-[3vh] md:p-[4vh]`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  >
                    <div className={`${item.highlight ? 'text-[#EEFF41]' : 'text-white/40'} mb-[2vh] font-bold`} style={{ fontSize: 'clamp(0.85rem, 1vw, 1.15rem)' }}>
                      {item.step}
                    </div>
                    <div className={`${item.highlight ? 'text-[#EEFF41]' : 'text-white'} leading-none mb-[2vh]`} style={{ fontSize: 'clamp(2rem, 3vw, 3.5rem)', fontWeight: 700 }}>
                      {item.value}
                    </div>
                    <div className={`${item.highlight ? 'text-white' : 'text-white/80'} font-bold mb-[1vh]`} style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.3rem)' }}>
                      {item.title}
                    </div>
                    <div className={`${item.highlight ? 'text-white/80' : 'text-white/60'} leading-[1.5]`} style={{ fontSize: 'clamp(0.85rem, 1vw, 1.15rem)' }}>
                      {item.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Impact Scenarios */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[5vh] md:gap-[5vw] mb-[10vh] md:mb-[14vh]">
            {/* Scenario 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-[5vh] md:p-[6vh] h-full">
                <div className="text-[#EEFF41] mb-[3vh]" style={{ fontSize: 'clamp(1.2rem, 1.5vw, 1.8rem)', fontWeight: 700 }}>
                  Scenario A: Price reduction
                </div>
                <div className="space-y-[3vh]">
                  <div>
                    <div className="text-white/60 mb-[1vh]" style={{ fontSize: 'clamp(0.85rem, 1vw, 1.15rem)' }}>
                      If savings passed to consumer
                    </div>
                    <div className="text-white leading-none" style={{ fontSize: 'clamp(2rem, 3.5vw, 4rem)', fontWeight: 700 }}>
                      €1.61 → €1.46
                    </div>
                  </div>
                  <div className="border-t border-white/10 pt-[3vh]">
                    <div className="text-white mb-[2vh]" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.4rem)', fontWeight: 600 }}>
                      Impact:
                    </div>
                    <ul className="space-y-[1.5vh] text-white/80" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)' }}>
                      <li className="flex items-start gap-2">
                        <span className="text-[#EEFF41] mt-1">•</span>
                        <span>9% price reduction on affected categories</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#EEFF41] mt-1">•</span>
                        <span>Improved price competitiveness</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#EEFF41] mt-1">•</span>
                        <span>Higher customer satisfaction & loyalty</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Scenario 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-[5vh] md:p-[6vh] h-full">
                <div className="text-[#EEFF41] mb-[3vh]" style={{ fontSize: 'clamp(1.2rem, 1.5vw, 1.8rem)', fontWeight: 700 }}>
                  Scenario B: Margin optimization
                </div>
                <div className="space-y-[3vh]">
                  <div>
                    <div className="text-white/60 mb-[1vh]" style={{ fontSize: 'clamp(0.85rem, 1vw, 1.15rem)' }}>
                      If margin retained at current price
                    </div>
                    <div className="text-white leading-none" style={{ fontSize: 'clamp(2rem, 3.5vw, 4rem)', fontWeight: 700 }}>
                      40% → 46%
                    </div>
                  </div>
                  <div className="border-t border-white/10 pt-[3vh]">
                    <div className="text-white mb-[2vh]" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.4rem)', fontWeight: 600 }}>
                      Impact:
                    </div>
                    <ul className="space-y-[1.5vh] text-white/80" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)' }}>
                      <li className="flex items-start gap-2">
                        <span className="text-[#EEFF41] mt-1">•</span>
                        <span>15% relative margin improvement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#EEFF41] mt-1">•</span>
                        <span>Funds for sustainability investments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#EEFF41] mt-1">•</span>
                        <span>Buffer against input cost volatility</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Consumer Benefit Callout */}
          <motion.div
            className="text-center max-w-[900px] mx-auto mb-[8vh]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-[#EEFF41]/30 rounded-2xl p-[4vh] md:p-[5vh]">
              <p className="text-white/90 leading-[1.7]" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.4rem)', fontWeight: 500 }}>
                Waste reduction doesn't mandate price cuts, but it removes the need for inflationary recovery pricing. Price stability is a competitive advantage in inflationary markets.
              </p>
            </div>
          </motion.div>

          {/* Bottom Insight */}
          <motion.div
            className="text-center max-w-[1000px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-[#026448] rounded-3xl p-[5vh] md:p-[8vh]">
              <AlertTriangle className="w-12 h-12 md:w-16 md:h-16 text-[#EEFF41] mx-auto mb-[3vh]" />
              <h3 className="text-[#EEFF41] leading-[1.2] mb-[3vh]" style={{ fontSize: 'clamp(1.5rem, 2.2vw, 2.8rem)', fontWeight: 700 }}>
                The strategic choice
              </h3>
              <p className="text-white/90 leading-[1.7] mb-[3vh]" style={{ fontSize: 'clamp(1rem, 1.25vw, 1.5rem)' }}>
                RipeSwitch converts shrink from a hidden tax on consumers into a controllable operating variable. Retailers can reinvest savings into lower prices, margin resilience, or both—without changing consumer behaviour or pricing models.
              </p>
              <p className="text-[#EEFF41] leading-[1.6]" style={{ fontSize: 'clamp(0.95rem, 1.15vw, 1.35rem)', fontWeight: 600 }}>
                Economic shock absorption for food retail.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Manufacturing & Scale Section */}
      <section className="relative w-full min-h-screen bg-[#f8f8f8] flex flex-col justify-center px-[5vw] md:px-[8vw] py-[8vh] md:py-[10vh]">
        <div className="max-w-[1400px] w-full mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-[8vh] md:mb-[12vh]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-5 py-2 bg-[#026448] rounded-full mb-[4vh]">
              <span className="text-white tracking-wider uppercase" style={{ fontSize: 'clamp(0.7rem, 0.85vw, 0.95rem)', fontWeight: 600 }}>
                Manufacturing & Scale
              </span>
            </div>
            <h2 className="text-[#1a1a1a] leading-[1.1] mb-[4vh]" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 5.5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Built for industrial production
            </h2>
            <p className="text-[#4a4a4a] leading-[1.7] max-w-[900px] mx-auto" style={{ fontSize: 'clamp(1rem, 1.3vw, 1.5rem)' }}>
              RipeSwitch is designed to integrate directly into existing paper converting operations. No exotic equipment, no specialized facilities.
            </p>
          </motion.div>

          {/* Process Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[4vh] sm:gap-[3vh] md:gap-[2vw] mb-[10vh] md:mb-[14vh]">
            {[
              {
                step: "01",
                title: "Raw material",
                image: rawMaterial,
                description: "Standard paper substrates"
              },
              {
                step: "02",
                title: "Functional media",
                image: functionalMedia,
                description: "Integrated during converting"
              },
              {
                step: "03",
                title: "Paper converting",
                image: paperConverting,
                description: "Compatible with existing lines"
              },
              {
                step: "04",
                title: "Retail use",
                image: retailUse,
                description: "Ready for distribution"
              }
            ].map((stage, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                <div className="text-[#026448] leading-none mb-[2vh]" style={{ fontSize: 'clamp(2rem, 2.5vw, 3rem)', fontWeight: 700 }}>
                  {stage.step}
                </div>
                <div className="relative h-[22vh] md:h-[24vh] rounded-2xl overflow-hidden mb-[2vh] border border-[#e0e0e0]">
                  <img
                    src={stage.image}
                    alt={stage.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-[#026448] leading-[1.3] mb-[1vh]" style={{ fontSize: 'clamp(1.1rem, 1.3vw, 1.6rem)', fontWeight: 700 }}>
                  {stage.title}
                </h4>
                <p className="text-[#4a4a4a] leading-[1.5]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)' }}>
                  {stage.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Scale Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[4vh] md:gap-[3vw]">
            {[
              {
                title: "Low unit economics",
                description: "Material costs compatible with commodity packaging. No premium pricing required for market entry."
              },
              {
                title: "Rapid scale-up",
                description: "Leverages existing global paper converting capacity. Fast path from validation to volume."
              },
              {
                title: "Supply chain ready",
                description: "Works within current logistics. No cold chain, no special handling, no infrastructure build-out."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-[4vh] md:p-[5vh] border border-[#e0e0e0]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 + index * 0.1 }}
              >
                <h4 className="text-[#026448] leading-[1.2] mb-[2vh]" style={{ fontSize: 'clamp(1.2rem, 1.5vw, 1.8rem)', fontWeight: 700 }}>
                  {benefit.title}
                </h4>
                <p className="text-[#4a4a4a] leading-[1.65]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.3rem)' }}>
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Research Section */}
      <section className="relative w-full min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img src={futureResearchBg} alt="Future research" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#026448]/90" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-[5vw] md:px-[8vw] py-[14vh]">
          <div className="max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-5 py-2 bg-[#EEFF41] rounded-full mb-[4vh]">
                <span className="text-[#026448] tracking-wider uppercase" style={{ fontSize: 'clamp(0.7rem, 0.85vw, 0.95rem)', fontWeight: 700 }}>
                  Next Phase
                </span>
              </div>

              <h2 className="text-[#EEFF41] leading-[1.1] mb-[6vh]" style={{ fontSize: 'clamp(2.5rem, 5vw, 6.5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
                From concept to commercial validation
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-[4vh] md:gap-[5vw]">
                {[
                  {
                    phase: "Short term",
                    items: [
                      "Material optimization and shelf-life testing",
                      "Pilot production with converting partners",
                      "Retail trial program with target chains"
                    ]
                  },
                  {
                    phase: "Medium term",
                    items: [
                      "Scale manufacturing capability",
                      "Expand produce category coverage",
                      "Geographic rollout strategy"
                    ]
                  }
                ].map((roadmap, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 + index * 0.2 }}
                  >
                    <h3 className="text-white leading-[1.2] mb-[3vh]" style={{ fontSize: 'clamp(1.5rem, 2vw, 2.5rem)', fontWeight: 700 }}>
                      {roadmap.phase}
                    </h3>
                    <ul className="space-y-[2vh]">
                      {roadmap.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-[#EEFF41] flex-shrink-0 mt-2" />
                          <span className="text-white/90 leading-[1.6]" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.4rem)' }}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative w-full min-h-screen bg-[#e8dcc4] flex items-center px-[5vw] md:px-[8vw] py-[8vh] md:py-[10vh]" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(212, 197, 169, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(212, 197, 169, 0.2) 0%, transparent 50%)' }}>
        <div className="max-w-[1000px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[#1a1a1a] leading-[1.05] mb-[6vh]" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 7rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Paper that finally works for fresh food
            </h2>
            <p className="text-[#4a4a4a] leading-[1.7] mb-[8vh]" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.8rem)', fontWeight: 400 }}>
              Less waste. Better margins. Packaging designed for how produce actually behaves.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Main App Component with Routing
export default function App() {
  return (
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
              <Route path="/research" element={<WhitePaperPageWithNav />} />
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
  );
}

// Wrapper for WhitePaper page with Navigation
function WhitePaperPageWithNav() {
  return (
    <div className="w-full relative">
      <div className="absolute top-0 left-0 right-0 z-30">
        <Navigation />
      </div>
      <WhitePaperPage />
    </div>
  );
}
