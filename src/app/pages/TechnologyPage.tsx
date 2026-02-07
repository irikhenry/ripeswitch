import { Navigation } from "../components/Navigation";
import Logo from "../../imports/Logo";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Vector from "../../imports/Vector";
import Vector3 from "../../imports/Vector-28-650";
import mechanismImage from "@/assets/7ef91b08ae6a15d57dbfbf4d9cf75e8c29fc2a52.webp";
import layeredStructure from "@/assets/fe07e9eb419929581d7629eabd4668e3df5ae00a.webp";
import rawMaterial from "@/assets/71c32859d86175c0aa7821b08b1c9be3aa251bfd.webp";
import functionalMedia from "@/assets/63b8a60675d09eac76211dbc9848cf3da1229ce5.webp";
import paperConverting from "@/assets/0df46eb4c699ca7f1ee082a13c21a365cb336417.webp";
import retailUse from "@/assets/705e0dd601e893c242eb4bf0eeb9c749ae0a98c5.webp";
import packageFormats from "@/assets/510d681a06be50b2772babb70213fd499399d88f.webp";
import tomatoesRetail from "@/assets/c50c398b51941255d564f13fc1a9a02a97c84aef.webp";
import vegetablesRetail from "@/assets/705e0dd601e893c242eb4bf0eeb9c749ae0a98c5.webp";
import { CompetitiveBenchmark } from "../CompetitiveBenchmark";

export function TechnologyPage() {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-[#026448] min-h-screen flex items-center">
        <Navigation />

        <div className="w-full max-w-[1200px] mx-auto px-[5vw] lg:px-[8vw] py-[20vh] md:py-[25vh]">
          <p className="text-white/60 uppercase tracking-[0.25em] mb-[3vh]" style={{ fontSize: 'clamp(0.7rem, 0.8vw, 0.85rem)', fontWeight: 400 }}>
            Technology
          </p>

          <h1 className="text-white leading-[1.1] mb-[6vh]" style={{ fontSize: 'clamp(3rem, 6.5vw, 7.5rem)', fontWeight: 300, letterSpacing: '-0.04em' }}>
            How RipeSwitch Works
          </h1>

          <div className="w-24 h-[1px] bg-white/30 mb-[6vh]"></div>

          <p className="text-white/90 leading-[1.85] max-w-[650px]" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.35rem)', fontWeight: 300 }}>
            Active ripening control through engineered paper substrates. Modulates ethylene exposure at the packaging interface.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative w-full bg-white">
        <div className="max-w-[1400px] mx-auto px-[5vw] md:px-[8vw] py-[12vh] md:py-[16vh]">
          
          {/* Section 1: Core Mechanism Overview */}
          <motion.div
            className="text-center mb-[10vh] md:mb-[14vh]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-5 py-2 bg-[#EEFF41] rounded-full mb-[4vh]">
              <span className="text-[#026448] tracking-wider uppercase" style={{ fontSize: 'clamp(0.7rem, 0.85vw, 0.95rem)', fontWeight: 700 }}>
                Core Mechanism
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
            className="mb-[14vh] md:mb-[18vh]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <div className="w-full lg:w-3/4 lg:mx-auto rounded-3xl overflow-hidden bg-white border border-[#e0e0e0]">
              <ImageWithFallback 
                src={mechanismImage}
                alt="Active Control Mechanism - RipeSwitch technology illustration"
                className="w-full h-auto"
              />
            </div>
            
            {/* Patent-style explanation */}
            <div className="max-w-[900px] mx-auto mt-[6vh] bg-[#f8f8f8] rounded-2xl p-[5vh] md:p-[6vh] border border-[#e0e0e0]">
              <h3 className="text-[#026448] leading-[1.3] mb-[3vh]" style={{ fontSize: 'clamp(1.2rem, 1.4vw, 1.7rem)', fontWeight: 700 }}>
                System architecture
              </h3>
              <p className="text-[#4a4a4a] leading-[1.75] mb-[3vh]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.25rem)' }}>
                The illustrated system comprises a structural paper substrate (A), an integrated functional media layer (B), and an internal package environment (C) configured to house fresh fruit.
              </p>
              <p className="text-[#4a4a4a] leading-[1.75] mb-[3vh]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.25rem)' }}>
                The functional media layer (B) is arranged to interact with ethylene generated by fruit respiration while maintaining passive permeability to oxygen and water vapour through the paper substrate. The system operates without forming a sealed or modified atmosphere enclosure.
              </p>
              <p className="text-[#4a4a4a] leading-[1.75]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.25rem)' }}>
                This configuration enables distributed, unit-level ripening control under open retail conditions while preserving recyclability and compliance with fibre-based packaging regulations.
              </p>
            </div>
          </motion.div>

          {/* Section 2: Two Operating Modes */}
          <motion.div
            className="text-center mb-[8vh] md:mb-[10vh]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-5 py-2 bg-[#026448] rounded-full mb-[4vh]">
              <span className="text-white tracking-wider uppercase" style={{ fontSize: 'clamp(0.7rem, 0.85vw, 0.95rem)', fontWeight: 600 }}>
                Operating Modes
              </span>
            </div>
            <h2 className="text-[#1a1a1a] leading-[1.1] mb-[4vh]" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 5.5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Two distinct states
            </h2>
            <p className="text-[#4a4a4a] leading-[1.7] max-w-[800px] mx-auto" style={{ fontSize: 'clamp(1rem, 1.3vw, 1.5rem)' }}>
              RipeSwitch operates in two modes, allowing precise control over ripening progression throughout the supply chain.
            </p>
          </motion.div>

          {/* Two Modes Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[5vh] lg:gap-[5vw] mb-[14vh] md:mb-[18vh]">
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

          {/* Section 3: Material Architecture */}
          <motion.div
            className="text-center mb-[8vh] md:mb-[10vh]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-5 py-2 bg-[#EEFF41] rounded-full mb-[4vh]">
              <span className="text-[#026448] tracking-wider uppercase" style={{ fontSize: 'clamp(0.7rem, 0.85vw, 0.95rem)', fontWeight: 700 }}>
                Material Science
              </span>
            </div>
            <h2 className="text-[#1a1a1a] leading-[1.1]" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 5.5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Layered material architecture
            </h2>
          </motion.div>

          <motion.div
            className="mb-[14vh] md:mb-[18vh]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-[#026448] rounded-3xl p-[5vh] md:p-[6vh]">
              <img src={layeredStructure} alt="Material structure" className="w-full max-w-[1000px] mx-auto rounded-2xl" />
            </div>
          </motion.div>

          {/* Section 4: Manufacturing Process */}
          <motion.div
            className="text-center mb-[8vh] md:mb-[10vh]"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[4vh] sm:gap-[3vh] md:gap-[2vw] mb-[14vh] md:mb-[18vh]">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[4vh] md:gap-[3vw] mb-[14vh] md:mb-[18vh]">
            {[
              {
                title: "Low unit economics",
                description: "Material costs compatible with commodity packaging. Premium pricing is not typically required for market entry."
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
                className="bg-[#f8f8f8] rounded-2xl p-[4vh] md:p-[5vh] border border-[#e0e0e0]"
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

          {/* Section 5: Product Applications */}
          <motion.div
            className="text-center mb-[8vh] md:mb-[10vh]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-5 py-2 bg-[#EEFF41] rounded-full mb-[4vh]">
              <span className="text-[#026448] tracking-wider uppercase" style={{ fontSize: 'clamp(0.7rem, 0.85vw, 0.95rem)', fontWeight: 700 }}>
                Product Applications
              </span>
            </div>
            <h2 className="text-[#1a1a1a] leading-[1.1] mb-[4vh]" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 5.5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Versatile packaging formats
            </h2>
            <p className="text-[#4a4a4a] leading-[1.7] max-w-[900px] mx-auto" style={{ fontSize: 'clamp(1rem, 1.3vw, 1.5rem)' }}>
              RipeSwitch adapts to multiple packaging configurations, delivering active ripening control across different produce categories.
            </p>
          </motion.div>

          {/* Package Formats Showcase */}
          <motion.div
            className="mb-[8vh] md:mb-[10vh]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-3xl overflow-hidden bg-[#f8f8f8] p-[6vh] md:p-[8vh]">
              <img
                src={packageFormats}
                alt="RipeSwitch packaging formats - box, wrap, and tray configurations"
                className="w-full h-auto max-w-[1100px] mx-auto"
              />
            </div>
          </motion.div>

          {/* Real-World Applications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[5vh] md:gap-[5vw] mb-[14vh] md:mb-[18vh]">
            <motion.div
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="bg-white rounded-3xl border border-[#e0e0e0] overflow-hidden hover:border-[#026448]/30 transition-colors h-full">
                {/* Image */}
                <div className="relative h-[35vh] md:h-[42vh] overflow-hidden">
                  <img
                    src={tomatoesRetail}
                    alt="RipeSwitch retail packaging for tomatoes"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-[5vh] md:p-[6vh]">
                  <h3 className="text-[#1a1a1a] leading-[1.25] mb-[2vh]" style={{ fontSize: 'clamp(1.4rem, 1.8vw, 2.2rem)', fontWeight: 700 }}>
                    High-value produce
                  </h3>
                  <p className="text-[#4a4a4a] leading-[1.7] mb-[3vh]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.3rem)' }}>
                    Optimized for tomatoes, berries, and delicate fruits that require precise climate control during distribution and retail display.
                  </p>
                  <div className="space-y-[1.5vh]">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#026448] flex-shrink-0 mt-1" />
                      <p className="text-[#4a4a4a]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)' }}>
                        Extended shelf life without refrigeration
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#026448] flex-shrink-0 mt-1" />
                      <p className="text-[#4a4a4a]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)' }}>
                        Consistent quality from warehouse to consumer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="bg-white rounded-3xl border border-[#e0e0e0] overflow-hidden hover:border-[#026448]/30 transition-colors h-full">
                {/* Image */}
                <div className="relative h-[35vh] md:h-[42vh] overflow-hidden">
                  <img
                    src={vegetablesRetail}
                    alt="RipeSwitch retail packaging for vegetables"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-[5vh] md:p-[6vh]">
                  <h3 className="text-[#1a1a1a] leading-[1.25] mb-[2vh]" style={{ fontSize: 'clamp(1.4rem, 1.8vw, 2.2rem)', fontWeight: 700 }}>
                    Fresh vegetables
                  </h3>
                  <p className="text-[#4a4a4a] leading-[1.7] mb-[3vh]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.3rem)' }}>
                    Designed for snap peas, green beans, and other vegetables sensitive to ethylene exposure and moisture loss.
                  </p>
                  <div className="space-y-[1.5vh]">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#026448] flex-shrink-0 mt-1" />
                      <p className="text-[#4a4a4a]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)' }}>
                        Maintains crispness and color integrity
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#026448] flex-shrink-0 mt-1" />
                      <p className="text-[#4a4a4a]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)' }}>
                        Reduces spoilage in cold chain gaps
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Section 6: Performance by Category */}
          <motion.div
            className="text-center mb-[8vh] md:mb-[10vh]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-5 py-2 bg-[#026448] rounded-full mb-[4vh]">
              <span className="text-white tracking-wider uppercase" style={{ fontSize: 'clamp(0.7rem, 0.85vw, 0.95rem)', fontWeight: 600 }}>
                Validated Performance
              </span>
            </div>
            <h2 className="text-[#1a1a1a] leading-[1.1] mb-[4vh]" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 5.5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Performance across produce categories
            </h2>
            <p className="text-[#4a4a4a] leading-[1.7] max-w-[900px] mx-auto mb-[2vh]" style={{ fontSize: 'clamp(1rem, 1.3vw, 1.5rem)' }}>
              Performance data derived from material simulation, laboratory testing, and controlled pilot deployments.
            </p>
            <p className="text-[#666] leading-[1.6] max-w-[800px] mx-auto" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)' }}>
              Actual performance varies by cultivar, temperature, and handling conditions.
            </p>
          </motion.div>

          {/* Performance Table */}
          <motion.div
            className="mb-[14vh] md:mb-[18vh]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-3xl border border-[#e0e0e0] overflow-hidden">
              {/* Desktop Table */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#026448] text-white">
                      <th className="text-left py-[3vh] px-[2vw]" style={{ fontSize: 'clamp(0.85rem, 1vw, 1.15rem)', fontWeight: 700 }}>
                        Fruit
                      </th>
                      <th className="text-left py-[3vh] px-[1.5vw]" style={{ fontSize: 'clamp(0.85rem, 1vw, 1.15rem)', fontWeight: 700 }}>
                        Sensitivity
                      </th>
                      <th className="text-left py-[3vh] px-[1.5vw]" style={{ fontSize: 'clamp(0.85rem, 1vw, 1.15rem)', fontWeight: 700 }}>
                        Shrink
                      </th>
                      <th className="text-left py-[3vh] px-[1.5vw]" style={{ fontSize: 'clamp(0.85rem, 1vw, 1.15rem)', fontWeight: 700 }}>
                        Shelf +
                      </th>
                      <th className="text-left py-[3vh] px-[1.5vw]" style={{ fontSize: 'clamp(0.85rem, 1vw, 1.15rem)', fontWeight: 700 }}>
                        Discount Retail
                      </th>
                      <th className="text-left py-[3vh] px-[2vw]" style={{ fontSize: 'clamp(0.85rem, 1vw, 1.15rem)', fontWeight: 700 }}>
                        Premium Retail
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { fruit: "Avocado", sensitivity: "Very high", sensitivityBg: "bg-[#026448]/10", shrink: "25–40%", shelf: "+3–6d", discount: "Margin recovery", premium: "Quality consistency" },
                      { fruit: "Banana", sensitivity: "Very high", sensitivityBg: "bg-[#026448]/10", shrink: "20–35%", shelf: "+2–4d", discount: "Reduced write-offs", premium: "Display uniformity" },
                      { fruit: "Tomato", sensitivity: "High", sensitivityBg: "bg-[#EEFF41]/30", shrink: "20–30%", shelf: "+3–5d", discount: "Lower daily waste", premium: "Improved flavour window" },
                      { fruit: "Mango", sensitivity: "High", sensitivityBg: "bg-[#EEFF41]/30", shrink: "25–35%", shelf: "+3–5d", discount: "Transport loss reduction", premium: "Extended premium display" },
                      { fruit: "Stone fruit", sensitivity: "High", sensitivityBg: "bg-[#EEFF41]/30", shrink: "20–30%", shelf: "+2–4d", discount: "Seasonal loss control", premium: "Reduced bruising complaints" },
                      { fruit: "Pear", sensitivity: "Medium–high", sensitivityBg: "bg-[#f0f0f0]", shrink: "15–25%", shelf: "+2–4d", discount: "Reduced backroom waste", premium: "More predictable ripeness" },
                      { fruit: "Apple", sensitivity: "Medium", sensitivityBg: "bg-[#f0f0f0]", shrink: "10–20%", shelf: "+2–3d", discount: "Inventory smoothing", premium: "Cosmetic stability" },
                      { fruit: "Citrus", sensitivity: "Low–medium", sensitivityBg: "bg-[#f0f0f0]", shrink: "5–15%", shelf: "+1–2d", discount: "Minor shrink improvement", premium: "Moisture balance benefits" }
                    ].map((row, index) => (
                      <tr key={index} className="border-b border-[#e0e0e0] hover:bg-[#f8f8f8] transition-colors">
                        <td className="py-[2.5vh] px-[2vw]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)', fontWeight: 600 }}>
                          {row.fruit}
                        </td>
                        <td className="py-[2.5vh] px-[1.5vw]">
                          <span className={`inline-block px-2 py-1 rounded-full ${row.sensitivityBg}`} style={{ fontSize: 'clamp(0.75rem, 0.9vw, 1rem)', fontWeight: 500 }}>
                            {row.sensitivity}
                          </span>
                        </td>
                        <td className="py-[2.5vh] px-[1.5vw] text-[#026448]" style={{ fontSize: 'clamp(0.85rem, 1vw, 1.15rem)', fontWeight: 700 }}>
                          {row.shrink}
                        </td>
                        <td className="py-[2.5vh] px-[1.5vw] text-[#026448]" style={{ fontSize: 'clamp(0.85rem, 1vw, 1.15rem)', fontWeight: 700 }}>
                          {row.shelf}
                        </td>
                        <td className="py-[2.5vh] px-[1.5vw] text-[#4a4a4a]" style={{ fontSize: 'clamp(0.8rem, 0.95vw, 1.1rem)' }}>
                          {row.discount}
                        </td>
                        <td className="py-[2.5vh] px-[2vw] text-[#4a4a4a]" style={{ fontSize: 'clamp(0.8rem, 0.95vw, 1.1rem)' }}>
                          {row.premium}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden divide-y divide-[#e0e0e0]">
                {[
                  { fruit: "Avocado", sensitivity: "Very high", sensitivityBg: "bg-[#026448]/10", shrink: "25–40%", shelf: "+3–6d", discount: "Margin recovery", premium: "Quality consistency" },
                  { fruit: "Banana", sensitivity: "Very high", sensitivityBg: "bg-[#026448]/10", shrink: "20–35%", shelf: "+2–4d", discount: "Reduced write-offs", premium: "Display uniformity" },
                  { fruit: "Tomato", sensitivity: "High", sensitivityBg: "bg-[#EEFF41]/30", shrink: "20–30%", shelf: "+3–5d", discount: "Lower daily waste", premium: "Improved flavour window" },
                  { fruit: "Mango", sensitivity: "High", sensitivityBg: "bg-[#EEFF41]/30", shrink: "25–35%", shelf: "+3–5d", discount: "Transport loss reduction", premium: "Extended premium display" },
                  { fruit: "Stone fruit", sensitivity: "High", sensitivityBg: "bg-[#EEFF41]/30", shrink: "20–30%", shelf: "+2–4d", discount: "Seasonal loss control", premium: "Reduced bruising complaints" },
                  { fruit: "Pear", sensitivity: "Medium–high", sensitivityBg: "bg-[#f0f0f0]", shrink: "15–25%", shelf: "+2–4d", discount: "Reduced backroom waste", premium: "More predictable ripeness" },
                  { fruit: "Apple", sensitivity: "Medium", sensitivityBg: "bg-[#f0f0f0]", shrink: "10–20%", shelf: "+2–3d", discount: "Inventory smoothing", premium: "Cosmetic stability" },
                  { fruit: "Citrus", sensitivity: "Low–medium", sensitivityBg: "bg-[#f0f0f0]", shrink: "5–15%", shelf: "+1–2d", discount: "Minor shrink improvement", premium: "Moisture balance benefits" }
                ].map((row, index) => (
                  <div key={index} className="p-[4vh] space-y-[2vh]">
                    <h4 className="text-[#1a1a1a] mb-[1vh]" style={{ fontSize: 'clamp(1.1rem, 1.3vw, 1.5rem)', fontWeight: 700 }}>
                      {row.fruit}
                    </h4>
                    <div className="grid grid-cols-2 gap-[2vh]">
                      <div>
                        <p className="text-[#666] mb-1" style={{ fontSize: 'clamp(0.75rem, 0.9vw, 1rem)', fontWeight: 500 }}>
                          Sensitivity
                        </p>
                        <span className={`inline-block px-3 py-1 rounded-full ${row.sensitivityBg}`} style={{ fontSize: 'clamp(0.8rem, 0.95vw, 1.05rem)', fontWeight: 500 }}>
                          {row.sensitivity}
                        </span>
                      </div>
                      <div>
                        <p className="text-[#666] mb-1" style={{ fontSize: 'clamp(0.75rem, 0.9vw, 1rem)', fontWeight: 500 }}>
                          Shrink Reduction
                        </p>
                        <p className="text-[#026448]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)', fontWeight: 700 }}>
                          {row.shrink}
                        </p>
                      </div>
                      <div>
                        <p className="text-[#666] mb-1" style={{ fontSize: 'clamp(0.75rem, 0.9vw, 1rem)', fontWeight: 500 }}>
                          Shelf Extension
                        </p>
                        <p className="text-[#026448]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)', fontWeight: 700 }}>
                          {row.shelf}
                        </p>
                      </div>
                      <div>
                        <p className="text-[#666] mb-1" style={{ fontSize: 'clamp(0.75rem, 0.9vw, 1rem)', fontWeight: 500 }}>
                          Relevance
                        </p>
                        <p className="text-[#4a4a4a]" style={{ fontSize: 'clamp(0.85rem, 1vw, 1.1rem)' }}>
                          {row.discount}
                        </p>
                      </div>
                      <div>
                        <p className="text-[#666] mb-1" style={{ fontSize: 'clamp(0.75rem, 0.9vw, 1rem)', fontWeight: 500 }}>
                          Premium
                        </p>
                        <p className="text-[#4a4a4a]" style={{ fontSize: 'clamp(0.85rem, 1vw, 1.1rem)' }}>
                          {row.premium}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Section 7: Ongoing Validation & Pilot Collaboration */}
          <motion.div
            className="max-w-[1000px] mx-auto mb-[14vh] md:mb-[18vh]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-[#f8f8f8] rounded-3xl p-[6vh] md:p-[8vh] border border-[#e0e0e0]">
              <div className="inline-block px-5 py-2 bg-[#026448] rounded-full mb-[4vh]">
                <span className="text-white tracking-wider uppercase" style={{ fontSize: 'clamp(0.7rem, 0.85vw, 0.95rem)', fontWeight: 600 }}>
                  Ongoing Validation
                </span>
              </div>
              
              <h3 className="text-[#1a1a1a] leading-[1.2] mb-[3vh]" style={{ fontSize: 'clamp(1.8rem, 2.8vw, 3.2rem)', fontWeight: 700 }}>
                Pilot collaboration and structured validation
              </h3>
              
              <p className="text-[#4a4a4a] leading-[1.75] mb-[3vh]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.3rem)' }}>
                RipeSwitch has validated its core mechanism in lab settings and is now in retailer-led pilots to confirm performance under real-world retail and supply-chain conditions.
              </p>
              
              <h4 className="text-[#026448] leading-[1.3] mb-[2vh]" style={{ fontSize: 'clamp(1.1rem, 1.3vw, 1.5rem)', fontWeight: 700 }}>
                Pilot collaborations focus on:
              </h4>
              
              <ul className="space-y-[1.5vh] mb-[4vh]">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#026448] flex-shrink-0 mt-1" />
                  <p className="text-[#4a4a4a] leading-[1.65]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.25rem)' }}>
                    Category-specific performance variability
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#026448] flex-shrink-0 mt-1" />
                  <p className="text-[#4a4a4a] leading-[1.65]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.25rem)' }}>
                    Temperature and handling sensitivity
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#026448] flex-shrink-0 mt-1" />
                  <p className="text-[#4a4a4a] leading-[1.65]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.25rem)' }}>
                    Retail operational integration
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#026448] flex-shrink-0 mt-1" />
                  <p className="text-[#4a4a4a] leading-[1.65]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.25rem)' }}>
                    Longitudinal shrink and quality metrics
                  </p>
                </li>
              </ul>
              
              <p className="text-[#4a4a4a] leading-[1.7]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.25rem)' }}>
                Findings from pilot deployments are used to refine material parameters, packaging formats, and category recommendations on an ongoing basis. Organisations interested in participating in structured validation studies may contact the technical team for pilot protocol details.
              </p>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="bg-[#026448] rounded-3xl p-[6vh] md:p-[10vh] text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-[800px] mx-auto">
              <h2 className="text-[#EEFF41] leading-[1.1] mb-[3vh]" style={{ fontSize: 'clamp(2rem, 3.5vw, 4.2rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
                Custom packaging solutions
              </h2>
              <p className="text-white/90 leading-[1.7] mb-[5vh]" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.4rem)' }}>
                We adapt RipeSwitch technology to your specific produce categories, package geometries, and supply chain requirements. From pilot testing to production scale.
              </p>
              <p className="text-white/80 leading-[1.6] mb-[4vh]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.3rem)' }}>
                Retailer validation is the next step.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-[#EEFF41] text-[#026448] px-[5vw] md:px-[3vw] py-[2.5vh] rounded-full hover:bg-[#EEFF41]/90 transition-colors"
                style={{ fontSize: 'clamp(1rem, 1.15vw, 1.3rem)', fontWeight: 700 }}
              >
                Discuss your packaging needs
                <span className="text-xl">→</span>
              </Link>
            </div>
          </motion.div>

          {/* Technology Status & Readiness Section */}
          <motion.div
            className="mt-[16vh] md:mt-[20vh]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Section Header */}
            <div className="mb-[10vh]">
              <p className="text-[#1a1a1a] uppercase tracking-[0.2em] mb-[3vh]" style={{ fontSize: 'clamp(0.7rem, 0.8vw, 0.85rem)', fontWeight: 500 }}>
                Development Status
              </p>
              <h2 className="text-[#1a1a1a] leading-[1.2] mb-[2vh]" style={{ fontSize: 'clamp(2rem, 3.5vw, 4.5rem)', fontWeight: 300, letterSpacing: '-0.02em' }}>
                Where we are today
              </h2>
              <p className="text-[#666] leading-[1.6] max-w-[750px]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)', fontWeight: 300 }}>
                RipeSwitch has validated the core mechanism in lab testing and is now moving into pilot production with converters and retailer validation.
              </p>
              <div className="w-24 h-[1px] bg-[#1a1a1a]/20 mt-[4vh]"></div>
            </div>

            {/* What we've built */}
            <div className="mb-[10vh]">
              <div className="bg-white border border-[#e0e0e0] rounded-2xl p-[5vh] md:p-[6vh]">
                <p className="text-[#026448] uppercase tracking-[0.2em] mb-[3vh]" style={{ fontSize: 'clamp(0.7rem, 0.8vw, 0.85rem)', fontWeight: 500 }}>
                  What we've built
                </p>
                <div className="space-y-[3vh] text-[#4a4a4a]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.25rem)', fontWeight: 300 }}>
                  <p className="leading-[1.85]">
                    RipeSwitch is a paper-based packaging system that manages ripening through the package itself, without applying chemicals to the fruit and with minimal special handling.
                  </p>
                  <p className="leading-[1.85]">
                    The technology works through engineered material properties built into standard paper substrates. It integrates into existing converting lines and fits current retail workflows.
                  </p>
                  <p className="leading-[1.85]">
                    The core mechanism is validated in lab conditions; scale validation now depends on retailer pilots.
                  </p>
                </div>
              </div>
            </div>

            {/* Current stage */}
            <div className="mb-[10vh]">
              <div className="bg-[#f8f8f8] border border-[#e0e0e0] rounded-2xl p-[5vh] md:p-[6vh]">
                <p className="text-[#1a1a1a] uppercase tracking-[0.2em] mb-[3vh]" style={{ fontSize: 'clamp(0.7rem, 0.8vw, 0.85rem)', fontWeight: 500 }}>
                  Current Stage
                </p>
                <h3 className="text-[#1a1a1a] leading-[1.3] mb-[4vh]" style={{ fontSize: 'clamp(1.4rem, 1.8vw, 2.2rem)', fontWeight: 400 }}>
                  Early product development
                </h3>
                <p className="text-[#4a4a4a] leading-[1.85] mb-[4vh]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.25rem)', fontWeight: 300 }}>
                  What we've completed so far:
                </p>
                <ul className="space-y-[2vh] text-[#666] mb-[4vh] pl-[2vh]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)', fontWeight: 300 }}>
                  <li className="leading-[1.75]">Lab-scale testing under simulated post-harvest conditions</li>
                  <li className="leading-[1.75]">Working prototypes using paper-compatible materials</li>
                  <li className="leading-[1.75]">Initial feasibility assessment with converting processes</li>
                </ul>
                <div className="pt-[4vh] border-t border-[#e0e0e0] space-y-[3vh]">
                  <p className="text-[#4a4a4a] leading-[1.85]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.25rem)', fontWeight: 300 }}>
                    The testing confirms we can manufacture this using standard paper substrates and integrate it into packaging formats that work for fresh produce.
                  </p>
                </div>
              </div>
            </div>

            {/* Development Roadmap */}
            <div className="mb-[10vh] overflow-visible">
              <div className="mb-[6vh]">
                <p className="text-[#026448] uppercase tracking-[0.2em] mb-[3vh]" style={{ fontSize: 'clamp(0.7rem, 0.8vw, 0.85rem)', fontWeight: 500 }}>
                  Roadmap
                </p>
                <h3 className="text-[#1a1a1a] leading-[1.3] mb-[3vh]" style={{ fontSize: 'clamp(1.6rem, 2vw, 2.5rem)', fontWeight: 400 }}>
                  What we've built and what's coming in 2026
                </h3>
                <p className="text-[#666] leading-[1.75] max-w-[750px]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.25rem)', fontWeight: 300 }}>
                  From validated technology to commercial deployment. Here's where we are and where we're going.
                </p>
              </div>

              {/* Horizontal Scrolling Timeline */}
              <div className="relative overflow-visible">
                {/* Timeline dots line - hidden on mobile */}
                <div className="hidden md:block absolute top-[3vh] left-0 right-0 h-[2px] bg-gradient-to-r from-[#026448] via-[#026448]/40 to-[#e0e0e0]" style={{ width: 'calc(100% - 2rem)' }}>
                  <div className="absolute top-[-4px] left-0 w-[10px] h-[10px] rounded-full bg-[#026448]"></div>
                  <div className="absolute top-[-4px] left-[16.66%] w-[10px] h-[10px] rounded-full bg-[#026448]"></div>
                  <div className="absolute top-[-4px] left-[33.33%] w-[10px] h-[10px] rounded-full bg-[#026448]/60"></div>
                  <div className="absolute top-[-4px] left-[50%] w-[10px] h-[10px] rounded-full bg-[#e0e0e0]"></div>
                  <div className="absolute top-[-4px] left-[66.66%] w-[10px] h-[10px] rounded-full bg-[#e0e0e0]"></div>
                  <div className="absolute top-[-4px] left-[83.33%] w-[10px] h-[10px] rounded-full bg-[#e0e0e0]"></div>
                </div>

                {/* Scrollable cards container */}
                <div className="overflow-x-auto overflow-y-visible pb-[3vh] mt-[8vh] md:mt-[10vh] scrollbar-thin scrollbar-thumb-[#026448]/20 scrollbar-track-transparent">
                  <div className="flex gap-[3vw] min-w-max px-[1vw] overflow-visible">
                    
                    {/* Phase 0 - Built & Validated */}
                    <div className="w-[85vw] md:w-[28vw] flex-shrink-0 overflow-visible">
                      <div className="bg-white border-2 border-[#026448] rounded-2xl p-[4vh] h-full relative overflow-visible">
                        <div className="absolute top-[2vh] right-[2vh] bg-[#026448] text-white px-3 py-1 rounded-full text-xs font-medium">
                          ✓ Completed
                        </div>
                        <div className="mb-[2vh]">
                          <p className="text-[#026448] uppercase tracking-[0.15em] mb-[1vh]" style={{ fontSize: 'clamp(0.65rem, 0.75vw, 0.8rem)', fontWeight: 600 }}>
                            2024–2025
                          </p>
                          <h4 className="text-[#1a1a1a] leading-[1.3] mb-[1vh]" style={{ fontSize: 'clamp(1.15rem, 1.3vw, 1.5rem)', fontWeight: 600 }}>
                            Built & Validated
                          </h4>
                          <p className="text-[#666] mb-[2.5vh]" style={{ fontSize: 'clamp(0.75rem, 0.85vw, 0.95rem)', fontWeight: 400 }}>
                            Foundation complete
                          </p>
                        </div>
                        <ul className="space-y-[1.5vh] text-[#4a4a4a] mb-[3vh]" style={{ fontSize: 'clamp(0.85rem, 0.95vw, 1.05rem)', fontWeight: 300 }}>
                          <li className="leading-[1.6]">• Product tested and validated in pilots</li>
                          <li className="leading-[1.6]">• Material system ready for production</li>
                          <li className="leading-[1.6]">• Prototypes performing in pilot conditions</li>
                        </ul>
                        <div className="pt-[2vh] border-t border-[#e0e0e0]">
                          <p className="text-[#026448] leading-[1.5]" style={{ fontSize: 'clamp(0.8rem, 0.9vw, 1rem)', fontWeight: 500 }}>
                            Technology de-risked
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Phase 1 - Q1 2026 */}
                    <div className="w-[85vw] md:w-[28vw] flex-shrink-0 overflow-visible">
                      <div className="bg-white border-2 border-[#026448] rounded-2xl p-[4vh] h-full relative overflow-visible">
                        <div className="absolute top-[2vh] right-[2vh] bg-[#f97316] text-white px-3 py-1 rounded-full text-xs font-medium">
                          ⟳ In Progress
                        </div>
                        <div className="mb-[2vh]">
                          <p className="text-[#026448] uppercase tracking-[0.15em] mb-[1vh]" style={{ fontSize: 'clamp(0.65rem, 0.75vw, 0.8rem)', fontWeight: 600 }}>
                            Q1 2026
                          </p>
                          <h4 className="text-[#1a1a1a] leading-[1.3] mb-[1vh]" style={{ fontSize: 'clamp(1.15rem, 1.3vw, 1.5rem)', fontWeight: 600 }}>
                            Securing IP & Partners
                          </h4>
                          <p className="text-[#666] mb-[2.5vh]" style={{ fontSize: 'clamp(0.75rem, 0.85vw, 0.95rem)', fontWeight: 400 }}>
                            Jan–Mar 2026
                          </p>
                        </div>
                        <ul className="space-y-[1.5vh] text-[#4a4a4a] mb-[3vh]" style={{ fontSize: 'clamp(0.85rem, 0.95vw, 1.05rem)', fontWeight: 300 }}>
                          <li className="leading-[1.6]">• Filing patents to protect the technology</li>
                          <li className="leading-[1.6]">• Locking in converter partnerships</li>
                          <li className="leading-[1.6]">• Defining first target products</li>
                        </ul>
                        <div className="pt-[2vh] border-t border-[#e0e0e0]">
                          <p className="text-[#1a1a1a] leading-[1.5]" style={{ fontSize: 'clamp(0.8rem, 0.9vw, 1rem)', fontWeight: 500 }}>
                            IP protected, partners onboard
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Phase 2 - Q2 2026 */}
                    <div className="w-[85vw] md:w-[28vw] flex-shrink-0 overflow-visible">
                      <div className="bg-white border border-[#e0e0e0] rounded-2xl p-[4vh] h-full relative overflow-visible">
                        <div className="absolute top-[2vh] right-[2vh] bg-[#f8f8f8] text-[#666] px-3 py-1 rounded-full text-xs font-medium border border-[#e0e0e0]">
                          Q2 2026
                        </div>
                        <div className="mb-[2vh]">
                          <p className="text-[#026448] uppercase tracking-[0.15em] mb-[1vh]" style={{ fontSize: 'clamp(0.65rem, 0.75vw, 0.8rem)', fontWeight: 600 }}>
                            Q2 2026
                          </p>
                          <h4 className="text-[#1a1a1a] leading-[1.3] mb-[1vh]" style={{ fontSize: 'clamp(1.15rem, 1.3vw, 1.5rem)', fontWeight: 600 }}>
                            Production Testing
                          </h4>
                          <p className="text-[#666] mb-[2.5vh]" style={{ fontSize: 'clamp(0.75rem, 0.85vw, 0.95rem)', fontWeight: 400 }}>
                            Apr–Jun 2026
                          </p>
                        </div>
                        <ul className="space-y-[1.5vh] text-[#4a4a4a] mb-[3vh]" style={{ fontSize: 'clamp(0.85rem, 0.95vw, 1.05rem)', fontWeight: 300 }}>
                          <li className="leading-[1.6]">• Running first batches with converters</li>
                          <li className="leading-[1.6]">• Testing integration on existing lines</li>
                          <li className="leading-[1.6]">• Validating real production costs</li>
                        </ul>
                        <div className="pt-[2vh] border-t border-[#e0e0e0]">
                          <p className="text-[#1a1a1a] leading-[1.5]" style={{ fontSize: 'clamp(0.8rem, 0.9vw, 1rem)', fontWeight: 500 }}>
                            Scaling validation
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Phase 3 - Q3 2026 */}
                    <div className="w-[85vw] md:w-[28vw] flex-shrink-0 overflow-visible">
                      <div className="bg-white border border-[#e0e0e0] rounded-2xl p-[4vh] h-full relative overflow-visible">
                        <div className="absolute top-[2vh] right-[2vh] bg-[#f8f8f8] text-[#666] px-3 py-1 rounded-full text-xs font-medium border border-[#e0e0e0]">
                          Q3 2026
                        </div>
                        <div className="mb-[2vh]">
                          <p className="text-[#026448] uppercase tracking-[0.15em] mb-[1vh]" style={{ fontSize: 'clamp(0.65rem, 0.75vw, 0.8rem)', fontWeight: 600 }}>
                            Q3 2026
                          </p>
                          <h4 className="text-[#1a1a1a] leading-[1.3] mb-[1vh]" style={{ fontSize: 'clamp(1.15rem, 1.3vw, 1.5rem)', fontWeight: 600 }}>
                            Live with Retailers
                          </h4>
                          <p className="text-[#666] mb-[2.5vh]" style={{ fontSize: 'clamp(0.75rem, 0.85vw, 0.95rem)', fontWeight: 400 }}>
                            Jul–Sep 2026
                          </p>
                        </div>
                        <ul className="space-y-[1.5vh] text-[#4a4a4a] mb-[3vh]" style={{ fontSize: 'clamp(0.85rem, 0.95vw, 1.05rem)', fontWeight: 300 }}>
                          <li className="leading-[1.6]">• In-store pilots with Finnish retail chains</li>
                          <li className="leading-[1.6]">• Measuring actual waste reduction</li>
                          <li className="leading-[1.6]">• Tracking shelf life improvements</li>
                        </ul>
                        <div className="pt-[2vh] border-t border-[#e0e0e0]">
                          <p className="text-[#1a1a1a] leading-[1.5]" style={{ fontSize: 'clamp(0.8rem, 0.9vw, 1rem)', fontWeight: 500 }}>
                            Real-world performance data
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Phase 4 - Q4 2026 */}
                    <div className="w-[85vw] md:w-[28vw] flex-shrink-0 overflow-visible">
                      <div className="bg-white border border-[#e0e0e0] rounded-2xl p-[4vh] h-full relative overflow-visible">
                        <div className="absolute top-[2vh] right-[2vh] bg-[#f8f8f8] text-[#666] px-3 py-1 rounded-full text-xs font-medium border border-[#e0e0e0]">
                          Q4 2026
                        </div>
                        <div className="mb-[2vh]">
                          <p className="text-[#026448] uppercase tracking-[0.15em] mb-[1vh]" style={{ fontSize: 'clamp(0.65rem, 0.75vw, 0.8rem)', fontWeight: 600 }}>
                            Q4 2026
                          </p>
                          <h4 className="text-[#1a1a1a] leading-[1.3] mb-[1vh]" style={{ fontSize: 'clamp(1.15rem, 1.3vw, 1.5rem)', fontWeight: 600 }}>
                            Scaling Up
                          </h4>
                          <p className="text-[#666] mb-[2.5vh]" style={{ fontSize: 'clamp(0.75rem, 0.85vw, 0.95rem)', fontWeight: 400 }}>
                            Oct–Dec 2026
                          </p>
                        </div>
                        <ul className="space-y-[1.5vh] text-[#4a4a4a] mb-[3vh]" style={{ fontSize: 'clamp(0.85rem, 0.95vw, 1.05rem)', fontWeight: 300 }}>
                          <li className="leading-[1.6]">• Refining based on pilot results</li>
                          <li className="leading-[1.6]">• Expanding converter capacity</li>
                          <li className="leading-[1.6]">• Preparing for commercial rollout</li>
                        </ul>
                        <div className="pt-[2vh] border-t border-[#e0e0e0]">
                          <p className="text-[#1a1a1a] leading-[1.5]" style={{ fontSize: 'clamp(0.8rem, 0.9vw, 1rem)', fontWeight: 500 }}>
                            Production-ready
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Phase 5 - 2027 Launch */}
                    <div className="w-[85vw] md:w-[28vw] flex-shrink-0 overflow-visible">
                      <div className="bg-white border border-[#e0e0e0] rounded-2xl p-[4vh] h-full relative overflow-visible">
                        <div className="absolute top-[2vh] right-[2vh] bg-[#f8f8f8] text-[#666] px-3 py-1 rounded-full text-xs font-medium border border-[#e0e0e0]">
                          2027
                        </div>
                        <div className="mb-[2vh]">
                          <p className="text-[#026448] uppercase tracking-[0.15em] mb-[1vh]" style={{ fontSize: 'clamp(0.65rem, 0.75vw, 0.8rem)', fontWeight: 600 }}>
                            2027
                          </p>
                          <h4 className="text-[#1a1a1a] leading-[1.3] mb-[1vh]" style={{ fontSize: 'clamp(1.15rem, 1.3vw, 1.5rem)', fontWeight: 600 }}>
                            Market Launch
                          </h4>
                          <p className="text-[#666] mb-[2.5vh]" style={{ fontSize: 'clamp(0.75rem, 0.85vw, 0.95rem)', fontWeight: 400 }}>
                            Commercial deployment
                          </p>
                        </div>
                        <ul className="space-y-[1.5vh] text-[#4a4a4a] mb-[3vh]" style={{ fontSize: 'clamp(0.85rem, 0.95vw, 1.05rem)', fontWeight: 300 }}>
                          <li className="leading-[1.6]">• Deploying across Finnish retail</li>
                          <li className="leading-[1.6]">• Expanding to European markets</li>
                          <li className="leading-[1.6]">• Licensing to converter networks</li>
                        </ul>
                        <div className="pt-[2vh] border-t border-[#e0e0e0]">
                          <p className="text-[#1a1a1a] leading-[1.5]" style={{ fontSize: 'clamp(0.8rem, 0.9vw, 1rem)', fontWeight: 500 }}>
                            In-market
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Scroll hint */}
                <div className="md:hidden text-center mt-[2vh]">
                  <p className="text-[#666] text-xs">← Scroll to see all phases →</p>
                </div>
              </div>

              {/* Bottom Context */}
              <div className="mt-[8vh] bg-[#f8f8f8] border border-[#e0e0e0] rounded-2xl p-[4vh] md:p-[5vh]">
                <p className="text-[#1a1a1a] leading-[1.75] mb-[2vh]" style={{ fontSize: 'clamp(1rem, 1.15vw, 1.3rem)', fontWeight: 500 }}>
                  Building with industry partners
                </p>
                <p className="text-[#4a4a4a] leading-[1.85]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)', fontWeight: 300 }}>
                  RipeSwitch is developed alongside converters and retailers, with each phase validated on production lines and in stores. We invite partners to quantify spoilage and co-design margin-protecting solutions. Commercial rollout across Europe is planned for the end of 2026; new partners are welcomed now.
                </p>
              </div>
            </div>


          </motion.div>

        </div>
      </section>
    </div>
  );
}
