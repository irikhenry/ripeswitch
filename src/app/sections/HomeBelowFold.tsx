import { Suspense, lazy } from "react";
import { motion } from "motion/react";
import { ShoppingBag, SprayCan, Cpu, CheckCircle, XCircle, AlertTriangle } from "lucide-react";
import Solution from "../../imports/Solution";
import { OperatingModes } from "../components/OperatingModes";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { LazySection } from "../components/LazySection";

import paperImage from "@/assets/04650068b44f6d0f94fd7bd08fad65080804fd18.webp";
import coatingsImage from "@/assets/a862d039022cc63029916bf4db377aa9dc3cf67d.webp";
import gadgetsImage from "@/assets/d9cddfce247e250dccd009700756f04fe8065dda.webp";
import mechanismImage from "@/assets/7ef91b08ae6a15d57dbfbf4d9cf75e8c29fc2a52.webp";
import layeredStructure from "@/assets/fe07e9eb419929581d7629eabd4668e3df5ae00a.webp";
import rawMaterial from "@/assets/71c32859d86175c0aa7821b08b1c9be3aa251bfd.webp";
import functionalMedia from "@/assets/63b8a60675d09eac76211dbc9848cf3da1229ce5.webp";
import paperConverting from "@/assets/0df46eb4c699ca7f1ee082a13c21a365cb336417.webp";
import retailUse from "@/assets/705e0dd601e893c242eb4bf0eeb9c749ae0a98c5.webp";
import futureResearchBg from "@/assets/d053e7137ff5f3fa25ba5338edb922d41b85177d.webp";

const CompetitiveBenchmark = lazy(() => import("../CompetitiveBenchmark").then((m) => ({ default: m.CompetitiveBenchmark })));
const EconomicCalculator = lazy(() => import("../EconomicCalculator").then((m) => ({ default: m.EconomicCalculator })));

export function HomeBelowFold() {
  return (
    <>
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
                <div className="divide-y divide-white/10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="py-[2.5vh] first:pt-0"
                  >
                    <div className="text-white/60 mb-2 uppercase tracking-widest" style={{ fontSize: 'clamp(0.75rem, 0.9vw, 1rem)', fontWeight: 600 }}>
                      Total waste (tonnes)
                    </div>
                    <motion.div 
                      className="text-white leading-none relative tabular-nums font-heading"
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
                    className="py-[2.5vh]"
                  >
                    <div className="text-white/60 mb-2 uppercase tracking-widest" style={{ fontSize: 'clamp(0.75rem, 0.9vw, 1rem)', fontWeight: 600 }}>
                      Per capita (kg)
                    </div>
                    <motion.div 
                      className="text-white leading-none relative tabular-nums font-heading"
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
                    className="py-[2.5vh] last:pb-0"
                  >
                    <div className="text-white/60 mb-2 uppercase tracking-widest" style={{ fontSize: 'clamp(0.75rem, 0.9vw, 1rem)', fontWeight: 600 }}>
                      GHG emissions value
                    </div>
                    <motion.div 
                      className="text-white leading-none relative tabular-nums font-heading"
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
            className="relative bg-[#026448] px-[5vw] md:px-[8vw] py-[10vh] md:py-[14vh] overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="absolute top-[-10vh] right-[-12vw] w-[45vw] h-[45vw] rounded-full bg-white/5 blur-3xl pointer-events-none" />
            <div className="absolute bottom-[-15vh] left-[-10vw] w-[50vw] h-[50vw] rounded-full bg-black/10 blur-3xl pointer-events-none" />
            <div className="max-w-[1400px] mx-auto">
              {/* Critical Insight */}
              <motion.div
                className="text-center mb-[8vh] md:mb-[12vh] relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
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

              {/* Global Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[3.5vh] md:gap-[2.8vw] mb-[8vh] md:mb-[12vh]">
                {[
                  { value: '~1B', label: 'Tonnes lost annually', sublabel: 'Global supply chain waste' },
                  { value: '14%', label: 'Of global methane emissions', sublabel: 'From food system losses' },
                  { value: '40%', label: 'Loss occurs before consumer', sublabel: 'Transit, storage, back rooms' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center bg-white/5 rounded-3xl border border-white/10 px-6 py-8 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
                  >
                    <div className="text-[#EEFF41] leading-none mb-[2vh] tabular-nums font-heading" style={{ fontSize: 'clamp(3.2rem, 5.2vw, 7.2rem)', fontWeight: 700 }}>
                      {stat.value}
                    </div>
                    <div className="text-white leading-[1.3] mb-[1vh]" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.8rem)', fontWeight: 600 }}>
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
                  The root issue isn’t behavior—it’s missing system-level ripening control in packaging.
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
              RipeSwitch is a scalable paper packaging component that actively manages gas exchange around fresh produce, delaying ripening progression within standard paper-based formats.
            </p>
          </motion.div>

          {/* Three Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[4vh] md:gap-[3vw] mb-[10vh] md:mb-[14vh]">
            {[
              {
                number: "01",
                title: "Material simplicity",
                description: "Integrates into standard paper converting with existing equipment."
              },
              {
                number: "02",
                title: "Active control",
                description: "Controls the micro-climate around produce. Not a passive barrier—an active ripening regulator."
              },
              {
                number: "03",
                title: "Scalable economics",
                description: "Compatible with existing manufacturing and distribution. Built for rollout, not one-off pilots."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white border border-black/10 rounded-3xl p-8 md:p-10 shadow-[0_16px_40px_rgba(0,0,0,0.06)] text-left"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 + index * 0.15 }}
              >
                <div className="text-[#026448] leading-none mb-[2vh] tabular-nums font-heading" style={{ fontSize: 'clamp(2.6rem, 3.8vw, 4.6rem)', fontWeight: 700 }}>
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
              RipeSwitch manages ripening by regulating gas exchange at the fruit surface—through selective ventilation, not sealing.
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
            <div className="w-full lg:w-3/4 lg:mx-auto rounded-3xl overflow-hidden bg-white border border-black/10 shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
              <ImageWithFallback 
                src={mechanismImage}
                alt="Active Control Mechanism - RipeSwitch technology illustration"
                className="w-full h-auto"
                width={4096}
                height={2306}
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>

          {/* Two Modes Side by Side */}
          <OperatingModes />

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
              <img
                src={layeredStructure}
                alt="Material structure"
                className="w-full max-w-[1000px] mx-auto rounded-2xl"
                loading="lazy"
                decoding="async"
              />
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
              Current solutions either don’t scale, require behavior change, or compromise core performance.
            </p>
          </motion.div>

          {/* Three Alternative Cards with Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[4vh] md:gap-[3vw] mb-[10vh] md:mb-[14vh]">
            {[
              {
                icon: ShoppingBag,
                image: paperImage,
                title: "Conventional paper packaging",
                problem: "Corrugated carton lack moisture and ripening control.",
                result: "Spoilage accelerates."
              },
              {
                icon: SprayCan,
                image: coatingsImage,
                title: "Chemical surface coatings",
                problem: "Additives applied to produce (e.g., Apeel).",
                result: "Regulatory uncertainty"
              },
              {
                icon: Cpu,
                image: gadgetsImage,
                title: "Active climate devices",
                problem: "Requires new infrastructure.",
                result: "Difficult to scale"
              }
            ].map((alt, index) => {
              const Icon = alt.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-3xl overflow-hidden border border-black/10 shadow-[0_16px_40px_rgba(0,0,0,0.06)] hover:border-[#026448]/30 hover:shadow-[0_22px_50px_rgba(0,0,0,0.1)] transition-all group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                >
                  {/* Image */}
                  <div className="relative h-[26vh] md:h-[30vh] overflow-hidden">
                    <img
                      src={alt.image}
                      alt={alt.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    {/* Icon Overlay */}
                    <div className="absolute top-4 right-4 w-24 h-24 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                      <Icon className="w-12 h-12 text-[#026448]" />
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
          <LazySection minHeight="420px">
            <Suspense fallback={<div className="h-[420px]" />}>
              <CompetitiveBenchmark />
            </Suspense>
          </LazySection>
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
              Modest reductions in produce shrink deliver substantial impact at retail scale.
            </p>
          </motion.div>

          {/* Interactive Calculator */}
          <LazySection minHeight="520px">
            <Suspense fallback={<div className="h-[520px]" />}>
              <EconomicCalculator />
            </Suspense>
          </LazySection>

          {/* Consumer Impact (Merged) */}
          <motion.div
            className="mt-[10vh] md:mt-[12vh]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#1a1a1a] rounded-3xl p-[5vh] md:p-[6vh] border border-white/10 shadow-[0_18px_50px_rgba(0,0,0,0.25)]">
              <div className="text-center mb-[4vh]">
                <div className="inline-block px-5 py-2 bg-[#EEFF41] rounded-full mb-[3vh]">
                  <span className="text-[#026448] tracking-wider uppercase" style={{ fontSize: 'clamp(0.7rem, 0.85vw, 0.95rem)', fontWeight: 700 }}>
                    Consumer Impact
                  </span>
                </div>
                <h3 className="text-[#EEFF41] leading-[1.1] mb-[2.5vh]" style={{ fontSize: 'clamp(1.9rem, 3.2vw, 3.8rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
                  Shrink and price pressure
                </h3>
                <p className="text-white/90 leading-[1.7] max-w-[820px] mx-auto" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.35rem)' }}>
                  Shrink costs are embedded in retail pricing. Reducing loss creates room for price stability and margin protection.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-[3.5vh] md:p-[5vh]">
                  <h3 className="text-white text-center leading-[1.2] mb-[4vh]" style={{ fontSize: 'clamp(1.2rem, 1.7vw, 2rem)', fontWeight: 700 }}>
                    Current pricing model embeds waste cost
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 max-w-[980px] mx-auto">
                    {[
                      { 
                        step: '01',
                        title: 'Purchase cost',
                        value: '€1.00',
                        description: 'Supplier unit cost'
                      },
                      { 
                        step: '02',
                        title: 'Shrink factor',
                        value: '+15%',
                        description: '5% unit loss amplified by margin structure',
                        highlight: true
                      },
                      { 
                        step: '03',
                        title: 'Target margin',
                        value: '+40%',
                        description: 'Target gross margin'
                      },
                      { 
                        step: '04',
                        title: 'Shelf price',
                        value: '€1.61',
                        description: 'Loss embedded in price'
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className={`relative ${item.highlight ? 'bg-[#026448]' : 'bg-white/5'} border ${item.highlight ? 'border-[#EEFF41]' : 'border-white/10'} rounded-2xl p-5 md:p-6 min-h-[200px]`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                      >
                        <div className="text-white/70 text-xs uppercase tracking-wider mb-[1vh]" style={{ fontSize: 'clamp(0.65rem, 0.75vw, 0.8rem)', fontWeight: 600 }}>
                          Step {item.step}
                        </div>
                        <h4 className="text-white leading-[1.2] mb-[1vh]" style={{ fontSize: 'clamp(0.95rem, 1.15vw, 1.3rem)', fontWeight: 700 }}>
                          {item.title}
                        </h4>
                        <div className={`${item.highlight ? 'text-[#EEFF41]' : 'text-white'} leading-none mb-[0.8vh] font-heading`} style={{ fontSize: 'clamp(1.2rem, 1.7vw, 2rem)', fontWeight: 700 }}>
                          {item.value}
                        </div>
                        <p className="text-white/70 leading-[1.5]" style={{ fontSize: 'clamp(0.8rem, 0.9vw, 1rem)' }}>
                          {item.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
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
              Produce shrink directly erodes gross margin. RipeSwitch turns a recurring loss into a controlled operating variable.
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
              <div className="bg-[#026448] rounded-3xl p-[5vh] md:p-[6vh] h-full relative overflow-hidden">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#EEFF41]/10 via-transparent to-black/20 pointer-events-none" />
                <div className="flex items-start gap-4 mb-[4vh] relative z-10">
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

                <div className="space-y-[3vh] relative z-10">
                  {[
                    { label: 'Shrink reduction potential', value: '20-40%', impact: 'Pilot range for addressable produce shrink' },
                    { label: 'Margin recovery', value: '3-12%', impact: 'Of category gross margin' },
                    { label: 'Implementation cost', value: 'Low (all-in)', impact: 'Standard paper economics' }
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
                      Margin recovery reduces reliance on price increases
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
                metric: 'ROI', 
                value: '6-12', 
                unit: 'months',
                description: 'Faster in high-shrink categories (berries, avocados, tomatoes)' 
              },
              { 
                metric: 'Capital requirement', 
                value: 'No new capex', 
                unit: '',
                description: 'No new capital equipment' 
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
                <div className="text-[#026448] leading-none mb-[1vh] font-heading" style={{ fontSize: 'clamp(2.5rem, 4vw, 5rem)', fontWeight: 700 }}>
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

      {/* Impact Scenarios */}
      <section className="relative w-full bg-[#1a1a1a] px-[5vw] md:px-[8vw] py-[8vh] md:py-[10vh]">
        <div className="max-w-[1400px] w-full mx-auto">
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
                  Scenario A — Price reduction
                </div>
                <div className="space-y-[3vh]">
                  <div>
                    <div className="text-white/60 mb-[1vh]" style={{ fontSize: 'clamp(0.85rem, 1vw, 1.15rem)' }}>
                      If savings are passed to consumers
                    </div>
                    <div className="text-white leading-none font-heading" style={{ fontSize: 'clamp(2rem, 3.5vw, 4rem)', fontWeight: 700 }}>
                      €1.61 → €1.46
                    </div>
                    <div className="text-white/50 mt-[1vh]" style={{ fontSize: 'clamp(0.75rem, 0.9vw, 1rem)' }}>
                      Illustrative example
                    </div>
                  </div>
                  <div className="border-t border-white/10 pt-[3vh]">
                    <div className="text-white mb-[2vh]" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.4rem)', fontWeight: 600 }}>
                      Impact:
                    </div>
                    <ul className="space-y-[1.5vh] text-white/80" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)' }}>
                      <li className="flex items-start gap-2">
                        <span className="text-[#EEFF41] mt-1">•</span>
                        <span>Up to 9% price reduction in affected categories</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#EEFF41] mt-1">•</span>
                        <span>Improved price competitiveness</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#EEFF41] mt-1">•</span>
                        <span>Higher customer satisfaction and loyalty</span>
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
                  Scenario B — Margin optimization
                </div>
                <div className="space-y-[3vh]">
                  <div>
                    <div className="text-white/60 mb-[1vh]" style={{ fontSize: 'clamp(0.85rem, 1vw, 1.15rem)' }}>
                      If margin is retained at current price
                    </div>
                    <div className="text-white leading-none font-heading" style={{ fontSize: 'clamp(2rem, 3.5vw, 4rem)', fontWeight: 700 }}>
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
                        <span>~15% relative margin improvement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#EEFF41] mt-1">•</span>
                        <span>Funds sustainability investments</span>
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
                Waste reduction reduces reliance on inflationary recovery pricing; price stability remains a competitive advantage.
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
                RipeSwitch turns shrink into a controllable operating variable, enabling disciplined category management and predictable outcomes.
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
              RipeSwitch is designed to integrate directly into existing paper converting operations to keep implementation simple.
            </p>
          </motion.div>

          {/* Process Flow */}
          <div className="relative mb-[10vh] md:mb-[14vh]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-[4vh] sm:gap-[3vh] lg:gap-[3vw] xl:gap-[2vw]">
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
                className="text-left bg-white rounded-3xl border border-black/10 shadow-[0_16px_40px_rgba(0,0,0,0.06)] overflow-hidden min-h-[420px] lg:min-h-[460px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                <div className="relative h-[220px] md:h-[240px] lg:h-[260px]">
                  <img
                    src={stage.image}
                    alt={stage.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-6 md:p-7">
                  <div className="text-[#026448] leading-none mb-[2vh] tabular-nums font-heading" style={{ fontSize: 'clamp(2rem, 2.5vw, 3rem)', fontWeight: 700 }}>
                    {stage.step}
                  </div>
                  <h3 className="text-[#026448] leading-[1.3] mb-[1vh]" style={{ fontSize: 'clamp(1.1rem, 1.3vw, 1.6rem)', fontWeight: 700 }}>
                    {stage.title}
                  </h3>
                  <p className="text-[#4a4a4a] leading-[1.5]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)' }}>
                    {stage.description}
                  </p>
                </div>
              </motion.div>
            ))}
            </div>

          </div>


          {/* Scale Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[4vh] md:gap-[3vw]">
            {[
              {
                title: "Low unit economics",
                description: "Material costs align with commodity packaging. Premium pricing is not required for market entry."
              },
              {
                title: "Rapid scale-up",
                description: "Leverages existing global paper converting capacity. Fast path from validation to volume."
              },
              {
                title: "Supply chain ready",
                description: "Works within current logistics with minimal special handling or infrastructure build-out."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-[4vh] md:p-[5vh] border border-black/10 shadow-[0_16px_40px_rgba(0,0,0,0.06)]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 + index * 0.1 }}
              >
                <h3 className="text-[#026448] leading-[1.2] mb-[2vh]" style={{ fontSize: 'clamp(1.2rem, 1.5vw, 1.8rem)', fontWeight: 700 }}>
                  {benefit.title}
                </h3>
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
          <img
            src={futureResearchBg}
            alt="Future research"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
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
                From validated prototype to commercial scale, with industry partners
              </h2>
              <p className="text-white/85 leading-[1.7] max-w-[820px] mb-[6vh]" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.4rem)' }}>
                Core feasibility has been validated; commercial pilot partners are now being engaged.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-[4vh] md:gap-[5vw]">
                {[
                  {
                    phase: "Short term",
                    items: [
                      "Material optimization and shelf-life validation to support customer qualification and production approval",
                      "Pilot production with converting partners for qualification runs",
                      "Retail trials with target chains for commercial validation"
                    ]
                  },
                  {
                    phase: "Medium term",
                    items: [
                      "Scale manufacturing capacity for volume production",
                      "Expand produce category coverage",
                      "Define geographic rollout strategy"
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
              Paper packaging that performs for fresh produce
            </h2>
            <p className="text-[#4a4a4a] leading-[1.7] mb-[8vh]" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.8rem)', fontWeight: 400 }}>
              Less waste. Better margins. Designed around produce behavior.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
