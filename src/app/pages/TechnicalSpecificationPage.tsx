import { Navigation } from "../components/Navigation";
import { Seo } from "../components/Seo";
import { motion } from "motion/react";
import { FileText, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export function TechnicalSpecificationPage() {
  return (
    <div className="w-full bg-white min-h-screen">
      <Seo
        title="Technical Specification | RipeSwitch"
        description="Non-confidential engineering specifications for the RipeSwitch packaging system."
        path="/technical-specification"
      />
      {/* Hero Section */}
      <section id="main-content" className="relative w-full bg-[#026448] min-h-[80vh] flex items-center">
        <Navigation />

        <div className="w-full max-w-[1400px] mx-auto px-[5vw] md:px-[8vw] py-[20vh] md:py-[25vh]">
          <p className="text-white/60 uppercase tracking-[0.25em] mb-[3vh]" style={{ fontSize: 'clamp(0.7rem, 0.8vw, 0.85rem)' }}>
            Specifications
          </p>

          <h1 className="text-white leading-[1.1] mb-[6vh]" style={{ fontSize: 'clamp(3rem, 6.5vw, 7.5rem)', letterSpacing: '-0.04em' }}>
            Technical Specification
          </h1>

          <div className="w-24 h-[1px] bg-white/30 mb-[6vh]"></div>

          <p className="text-white/90 leading-[1.85] max-w-[650px]" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.35rem)' }}>
            Material properties, integration requirements, and indicative performance parameters for packaging engineers and converters.
          </p>
        </div>
      </section>

      {/* Document Header */}
      <section className="relative w-full min-h-[70vh] bg-[#f8f8f8] border-b border-[#e0e0e0] flex flex-col justify-center px-[5vw] md:px-[8vw] py-[6vh] md:py-[8vh]">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-[3vh]">
            <div>
              <h2 className="text-[#1a1a1a] leading-[1.3]" style={{ fontSize: 'clamp(1.4rem, 1.8vw, 2.2rem)' }}>
                RipeSwitch™ Active Ripening Control for Paper-Based Fruit Packaging
              </h2>
            </div>
            <Link
              to="/contact"
              className="flex items-center gap-2 px-6 py-3 bg-white border border-[#026448] text-[#026448] rounded-lg hover:bg-[#026448] hover:text-white transition-all font-ui"
            >
              <Mail className="w-4 h-4" />
              <span style={{ fontSize: 'clamp(0.85rem, 1vw, 1.1rem)' }}>
                Request Technical Specification
              </span>
            </Link>
          </div>
          
          <p className="text-[#666] leading-[1.7] mt-[3vh] max-w-[800px]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)' }}>
            This reference provides non‑confidential engineering specifications for the RipeSwitch system, for technical assessment of compatibility, integration feasibility, and operational scope by packaging engineers, converters, manufacturing partners, and reviewers.
          </p>
          
          <p className="text-[#026448] leading-[1.65] mt-[2vh]" style={{ fontSize: 'clamp(0.85rem, 1vw, 1.15rem)' }}>
            This document excludes proprietary formulations, material recipes, and protected process parameters.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative w-full min-h-[70vh] bg-white flex flex-col justify-center px-[5vw] md:px-[8vw] py-[6vh] md:py-[8vh]">
        <div className="max-w-[1400px] w-full mx-auto">
          
          {/* Section 01: System Overview */}
          <motion.div
            className="mb-[12vh] md:mb-[14vh]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-start gap-[4vw] mb-[4vh]">
              <div className="text-[#026448] leading-none" style={{ fontSize: 'clamp(2.5rem, 4vw, 5rem)' }}>
                01
              </div>
              <div className="flex-1">
                <h3 className="text-[#1a1a1a] leading-[1.2] mb-[3vh]" style={{ fontSize: 'clamp(1.8rem, 2.5vw, 3rem)' }}>
                  System Overview
                </h3>
                <p className="text-[#4a4a4a] leading-[1.75] mb-[2.5vh]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.3rem)' }}>
                  RipeSwitch is a paper‑based packaging system that moderates ripening via an integrated functional media layer embedded in conventional fibre‑based structures.
                </p>
                <p className="text-[#4a4a4a] leading-[1.75] mb-[2.5vh]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.3rem)' }}>
                  The system operates in open or semi‑open configurations without forming a sealed modified‑atmosphere enclosure and without applying coatings directly to produce.
                </p>
                <p className="text-[#4a4a4a] leading-[1.75]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.3rem)' }}>
                  RipeSwitch is designed as a drop‑in component for existing paper converting workflows.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Section 02: Structural Configuration */}
          <motion.div
            className="mb-[12vh] md:mb-[14vh]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-start gap-[4vw] mb-[4vh]">
              <div className="text-[#026448] leading-none" style={{ fontSize: 'clamp(2.5rem, 4vw, 5rem)' }}>
                02
              </div>
              <div className="flex-1">
                <h3 className="text-[#1a1a1a] leading-[1.2] mb-[3vh]" style={{ fontSize: 'clamp(1.8rem, 2.5vw, 3rem)' }}>
                  Structural Configuration
                </h3>
                <p className="text-[#4a4a4a] leading-[1.75] mb-[4vh]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.3rem)' }}>
                  The system comprises the following functional elements:
                </p>
                
                <div className="space-y-[4vh]">
                  <div className="bg-[#f8f8f8] rounded-2xl p-[4vh] border border-[#e0e0e0]">
                    <h4 className="text-[#026448] leading-[1.3] mb-[2vh]" style={{ fontSize: 'clamp(1.2rem, 1.4vw, 1.6rem)' }}>
                      2.1 Structural Substrate
                    </h4>
                    <ul className="space-y-[1.5vh] text-[#4a4a4a] leading-[1.7]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.25rem)' }}>
                      <li className="flex items-start gap-3">
                        <span className="text-[#026448] mt-1">•</span>
                        <span>Fibre-based paper or paperboard substrate</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#026448] mt-1">•</span>
                        <span>Provides mechanical integrity, form stability, and stackability</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#026448] mt-1">•</span>
                        <span>Compatible with standard folding, creasing, and forming operations</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#f8f8f8] rounded-2xl p-[4vh] border border-[#e0e0e0]">
                    <h4 className="text-[#026448] leading-[1.3] mb-[2vh]" style={{ fontSize: 'clamp(1.2rem, 1.4vw, 1.6rem)' }}>
                      2.2 Functional Media Layer
                    </h4>
                    <ul className="space-y-[1.5vh] text-[#4a4a4a] leading-[1.7]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.25rem)' }}>
                      <li className="flex items-start gap-3">
                        <span className="text-[#026448] mt-1">•</span>
                        <span>Thin, porous, sheet-form functional layer</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#026448] mt-1">•</span>
                        <span>Integrated inline or offline during converting</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#026448] mt-1">•</span>
                        <span>Designed to interact with gases generated by fruit respiration</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#026448] mt-1">•</span>
                        <span>Not a barrier film</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#026448] mt-1">•</span>
                        <span>Does not require plastic lamination or surface coatings</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#f8f8f8] rounded-2xl p-[4vh] border border-[#e0e0e0]">
                    <h4 className="text-[#026448] leading-[1.3] mb-[2vh]" style={{ fontSize: 'clamp(1.2rem, 1.4vw, 1.6rem)' }}>
                      2.3 Internal Package Environment
                    </h4>
                    <ul className="space-y-[1.5vh] text-[#4a4a4a] leading-[1.7]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.25rem)' }}>
                      <li className="flex items-start gap-3">
                        <span className="text-[#026448] mt-1">•</span>
                        <span>Open or semi-open configuration</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#026448] mt-1">•</span>
                        <span>Passive gas exchange with ambient conditions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#026448] mt-1">•</span>
                        <span>No sealing, valves, electronics, or active control hardware</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 03: Functional Principle */}
          <motion.div
            className="mb-[12vh] md:mb-[14vh]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-start gap-[4vw] mb-[4vh]">
              <div className="text-[#026448] leading-none" style={{ fontSize: 'clamp(2.5rem, 4vw, 5rem)' }}>
                03
              </div>
              <div className="flex-1">
                <h3 className="text-[#1a1a1a] leading-[1.2] mb-[3vh]" style={{ fontSize: 'clamp(1.8rem, 2.5vw, 3rem)' }}>
                  Functional Principle
                </h3>
                <p className="text-[#4a4a4a] leading-[1.75] mb-[3vh]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.3rem)' }}>
                  The system influences the local micro‑environment around the fruit:
                </p>
                
                <ul className="space-y-[2vh] mb-[3vh]">
                  <li className="flex items-start gap-3 text-[#4a4a4a] leading-[1.7]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.25rem)' }}>
                    <span className="text-[#026448] mt-1">•</span>
                    <span>Moderation of ethylene concentration peaks</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#4a4a4a] leading-[1.7]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.25rem)' }}>
                    <span className="text-[#026448] mt-1">•</span>
                    <span>Stabilisation of moisture balance in the package headspace</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#4a4a4a] leading-[1.7]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.25rem)' }}>
                    <span className="text-[#026448] mt-1">•</span>
                    <span>Reduction of uncontrolled cross‑ripening between adjacent units</span>
                  </li>
                </ul>

                <p className="text-[#4a4a4a] leading-[1.75] mb-[2.5vh]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.3rem)' }}>
                  Interaction is distributed at unit level, enabling each package to self‑regulate without reliance on store‑wide atmospheric control.
                </p>
                
                <div className="bg-[#EEFF41]/20 border-l-4 border-[#026448] rounded-r-xl p-[3vh]">
                  <p className="text-[#1a1a1a] leading-[1.7]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)' }}>
                    No chemical treatment is applied to the fruit.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 04: Converting & Manufacturing Compatibility */}
          <motion.div
            className="mb-[12vh] md:mb-[14vh]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-start gap-[4vw] mb-[4vh]">
              <div className="text-[#026448] leading-none" style={{ fontSize: 'clamp(2.5rem, 4vw, 5rem)' }}>
                04
              </div>
              <div className="flex-1">
                <h3 className="text-[#1a1a1a] leading-[1.2] mb-[3vh]" style={{ fontSize: 'clamp(1.8rem, 2.5vw, 3rem)' }}>
                  Converting & Manufacturing Compatibility
                </h3>
                <p className="text-[#4a4a4a] leading-[1.75] mb-[4vh]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.3rem)' }}>
                  RipeSwitch is designed for standard European paper converting infrastructure.
                </p>
                
                <div className="space-y-[4vh]">
                  <div>
                    <h4 className="text-[#026448] leading-[1.3] mb-[2vh]" style={{ fontSize: 'clamp(1.2rem, 1.4vw, 1.6rem)' }}>
                      4.1 Process Compatibility
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[2vh]">
                      <div className="bg-[#f8f8f8] rounded-xl p-[3vh] border border-[#e0e0e0]">
                        <p className="text-[#4a4a4a] leading-[1.6]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)' }}>
                          Folding‑carton converting
                        </p>
                      </div>
                      <div className="bg-[#f8f8f8] rounded-xl p-[3vh] border border-[#e0e0e0]">
                        <p className="text-[#4a4a4a] leading-[1.6]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)' }}>
                          Tray and punnet forming
                        </p>
                      </div>
                      <div className="bg-[#f8f8f8] rounded-xl p-[3vh] border border-[#e0e0e0]">
                        <p className="text-[#4a4a4a] leading-[1.6]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)' }}>
                          Molded‑fibre hybrid applications
                        </p>
                      </div>
                      <div className="bg-[#f8f8f8] rounded-xl p-[3vh] border border-[#e0e0e0]">
                        <p className="text-[#4a4a4a] leading-[1.6]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)' }}>
                          Inline or secondary lamination steps
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[#026448] leading-[1.3] mb-[2vh]" style={{ fontSize: 'clamp(1.2rem, 1.4vw, 1.6rem)' }}>
                      4.2 Mechanical Tolerance
                    </h4>
                    <ul className="space-y-[1.5vh] text-[#4a4a4a] leading-[1.7]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.25rem)' }}>
                      <li className="flex items-start gap-3">
                        <span className="text-[#026448] mt-1">•</span>
                        <span>Compatible with standard crease radii</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#026448] mt-1">•</span>
                        <span>Maintains integrity under normal bending and folding stresses</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#026448] mt-1">•</span>
                        <span>No additional curing or activation steps required after conversion</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[#026448] leading-[1.3] mb-[2vh]" style={{ fontSize: 'clamp(1.2rem, 1.4vw, 1.6rem)' }}>
                      4.3 Equipment Requirements
                    </h4>
                    <ul className="space-y-[1.5vh] text-[#4a4a4a] leading-[1.7]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.25rem)' }}>
                      <li className="flex items-start gap-3">
                        <span className="text-[#026448] mt-1">•</span>
                        <span>No specialised machinery required</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#026448] mt-1">•</span>
                        <span>No modification to existing converting lines</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#026448] mt-1">•</span>
                        <span>Designed to run on standard high‑speed industrial equipment</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 05: Operating Conditions & Scope */}
          <motion.div
            className="mb-[12vh] md:mb-[14vh]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-start gap-[4vw] mb-[4vh]">
              <div className="text-[#026448] leading-none" style={{ fontSize: 'clamp(2.5rem, 4vw, 5rem)' }}>
                05
              </div>
              <div className="flex-1">
                <h3 className="text-[#1a1a1a] leading-[1.2] mb-[4vh]" style={{ fontSize: 'clamp(1.8rem, 2.5vw, 3rem)' }}>
                  Operating Conditions & Scope
                </h3>
                
                <div className="space-y-[4vh]">
                  <div>
                    <h4 className="text-[#026448] leading-[1.3] mb-[2.5vh]" style={{ fontSize: 'clamp(1.2rem, 1.4vw, 1.6rem)' }}>
                      5.1 Intended Product Categories
                    </h4>
                    <p className="text-[#4a4a4a] leading-[1.75] mb-[2.5vh]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.3rem)' }}>
                      Fresh climacteric fruits with ethylene‑driven ripening behaviour
                    </p>
                    <div className="bg-[#f8f8f8] rounded-2xl p-[4vh] border border-[#e0e0e0]">
                      <p className="text-[#666] mb-[2vh]" style={{ fontSize: 'clamp(0.85rem, 1vw, 1.15rem)' }}>
                        Typical applications:
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-[1.5vh]">
                        {['Avocados', 'Bananas', 'Tomatoes', 'Mangos', 'Stone fruits', 'Pears'].map((fruit, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#026448] rounded-full"></div>
                            <span className="text-[#4a4a4a]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)' }}>{fruit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[#026448] leading-[1.3] mb-[2vh]" style={{ fontSize: 'clamp(1.2rem, 1.4vw, 1.6rem)' }}>
                      5.2 Environmental Conditions
                    </h4>
                    <ul className="space-y-[1.5vh] text-[#4a4a4a] leading-[1.7]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.25rem)' }}>
                      <li className="flex items-start gap-3">
                        <span className="text-[#026448] mt-1">•</span>
                        <span>Ambient retail temperatures</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#026448] mt-1">•</span>
                        <span>Refrigerated storage compatibility</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#026448] mt-1">•</span>
                        <span>Typical retail humidity ranges</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[#026448] leading-[1.3] mb-[2vh]" style={{ fontSize: 'clamp(1.2rem, 1.4vw, 1.6rem)' }}>
                      5.3 Known Boundaries
                    </h4>
                    <ul className="space-y-[1.5vh] text-[#4a4a4a] leading-[1.7]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.25rem)' }}>
                      <li className="flex items-start gap-3">
                        <span className="text-[#026448] mt-1">•</span>
                        <span>Not designed to replace cold‑chain logistics</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#026448] mt-1">•</span>
                        <span>Not intended for non‑respiring products</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#026448] mt-1">•</span>
                        <span>Performance depends on fruit maturity stage and handling practices</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 06: Performance Characteristics */}
          <motion.div
            className="mb-[12vh] md:mb-[14vh]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-start gap-[4vw] mb-[4vh]">
              <div className="text-[#026448] leading-none" style={{ fontSize: 'clamp(2.5rem, 4vw, 5rem)' }}>
                06
              </div>
              <div className="flex-1">
                <h3 className="text-[#1a1a1a] leading-[1.2] mb-[3vh]" style={{ fontSize: 'clamp(1.8rem, 2.5vw, 3rem)' }}>
                  Performance Characteristics <span className="text-[#666]" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.4rem)' }}>(Indicative)</span>
                </h3>
                <p className="text-[#4a4a4a] leading-[1.75] mb-[4vh]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.3rem)' }}>
                  Performance outcomes depend on application context and handling conditions. Indicative effects observed under controlled evaluation include:
                </p>
                
                <div className="bg-[#f8f8f8] rounded-2xl p-[4vh] md:p-[5vh] border border-[#e0e0e0] mb-[3vh]">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-[3vh]">
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-[#026448] rounded-full mt-2"></div>
                      <div>
                        <p className="text-[#1a1a1a] leading-[1.5] mb-1" style={{ fontSize: 'clamp(1rem, 1.15vw, 1.3rem)' }}>
                          Reduced ripening‑rate variability
                        </p>
                        <p className="text-[#666] leading-[1.6]" style={{ fontSize: 'clamp(0.85rem, 1vw, 1.15rem)' }}>
                          More consistent ripening across units
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-[#026448] rounded-full mt-2"></div>
                      <div>
                        <p className="text-[#1a1a1a] leading-[1.5] mb-1" style={{ fontSize: 'clamp(1rem, 1.15vw, 1.3rem)' }}>
                          Extension of sellable quality window
                        </p>
                        <p className="text-[#666] leading-[1.6]" style={{ fontSize: 'clamp(0.85rem, 1vw, 1.15rem)' }}>
                          Prolonged peak‑quality period
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-[#026448] rounded-full mt-2"></div>
                      <div>
                        <p className="text-[#1a1a1a] leading-[1.5] mb-1" style={{ fontSize: 'clamp(1rem, 1.15vw, 1.3rem)' }}>
                          Reduction in visible spoilage
                        </p>
                        <p className="text-[#666] leading-[1.6]" style={{ fontSize: 'clamp(0.85rem, 1vw, 1.15rem)' }}>
                          Lower shrink and waste rates
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-[#026448] rounded-full mt-2"></div>
                      <div>
                        <p className="text-[#1a1a1a] leading-[1.5] mb-1" style={{ fontSize: 'clamp(1rem, 1.15vw, 1.3rem)' }}>
                          Improved display consistency
                        </p>
                        <p className="text-[#666] leading-[1.6]" style={{ fontSize: 'clamp(0.85rem, 1vw, 1.15rem)' }}>
                          Better quality through retail cycles
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#EEFF41]/20 border-l-4 border-[#026448] rounded-r-xl p-[3vh]">
                  <p className="text-[#1a1a1a] leading-[1.7]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)' }}>
                    Quantitative values are derived from controlled testing and pilot deployments and are not fixed system guarantees.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 07: Regulatory & Compliance */}
          <motion.div
            className="mb-[12vh] md:mb-[14vh]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-start gap-[4vw] mb-[4vh]">
              <div className="text-[#026448] leading-none" style={{ fontSize: 'clamp(2.5rem, 4vw, 5rem)' }}>
                07
              </div>
              <div className="flex-1">
                <h3 className="text-[#1a1a1a] leading-[1.2] mb-[3vh]" style={{ fontSize: 'clamp(1.8rem, 2.5vw, 3rem)' }}>
                  Regulatory & Compliance Positioning
                </h3>
                
                <ul className="space-y-[2vh] mb-[3vh]">
                  <li className="flex items-start gap-3 text-[#4a4a4a] leading-[1.7]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.25rem)' }}>
                    <span className="text-[#026448] mt-1">•</span>
                    <span>Fibre‑based packaging system</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#4a4a4a] leading-[1.7]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.25rem)' }}>
                    <span className="text-[#026448] mt-1">•</span>
                    <span>Designed for compatibility with food‑contact regulatory pathways</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#4a4a4a] leading-[1.7]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.25rem)' }}>
                    <span className="text-[#026448] mt-1">•</span>
                    <span>No direct food additives or produce coatings; aligned with single‑use plastic phase‑out</span>
                  </li>
                </ul>

                <div className="bg-[#f8f8f8] rounded-2xl p-[4vh] border border-[#e0e0e0]">
                  <p className="text-[#4a4a4a] leading-[1.7]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.25rem)' }}>
                    Formal compliance certification depends on final configuration, jurisdiction, and deployment context.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 08: Intellectual Property & Disclosure Status */}
          <motion.div
            className="mb-[12vh] md:mb-[14vh]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-start gap-[4vw] mb-[4vh]">
              <div className="text-[#026448] leading-none" style={{ fontSize: 'clamp(2.5rem, 4vw, 5rem)' }}>
                08
              </div>
              <div className="flex-1">
                <h3 className="text-[#1a1a1a] leading-[1.2] mb-[3vh]" style={{ fontSize: 'clamp(1.8rem, 2.5vw, 3rem)' }}>
                  Intellectual Property & Disclosure Status
                </h3>
                <p className="text-[#4a4a4a] leading-[1.75] mb-[3vh]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.3rem)' }}>
                  This document provides a high‑level functional and structural overview only.
                </p>
                
                <div className="bg-[#f8f8f8] rounded-2xl p-[4vh] md:p-[5vh] border border-[#e0e0e0] mb-[3vh]">
                  <p className="text-[#1a1a1a] leading-[1.6] mb-[2.5vh]" style={{ fontSize: 'clamp(1rem, 1.15vw, 1.3rem)' }}>
                    Non‑disclosed items include:
                  </p>
                  <ul className="space-y-[1.5vh] text-[#4a4a4a] leading-[1.7]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.25rem)' }}>
                    <li className="flex items-start gap-3">
                      <span className="text-[#026448] mt-1">•</span>
                      <span>Material formulations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#026448] mt-1">•</span>
                      <span>Active component compositions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#026448] mt-1">•</span>
                      <span>Integration methods beyond high‑level compatibility</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#026448] mt-1">•</span>
                      <span>Process parameters and manufacturing recipes</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#EEFF41]/20 border-l-4 border-[#026448] rounded-r-xl p-[3vh] mb-[2.5vh]">
                  <p className="text-[#1a1a1a] leading-[1.7]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)' }}>
                    The invention has not been publicly disclosed in an enabling form.
                  </p>
                </div>

                <p className="text-[#4a4a4a] leading-[1.75]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.3rem)' }}>
                  Formal IP protection is planned after pilot‑scale validation and before commercial deployment or technical publication.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Section 09: Validation Status */}
          <motion.div
            className="mb-[12vh] md:mb-[14vh]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-start gap-[4vw] mb-[4vh]">
              <div className="text-[#026448] leading-none" style={{ fontSize: 'clamp(2.5rem, 4vw, 5rem)' }}>
                09
              </div>
              <div className="flex-1">
                <h3 className="text-[#1a1a1a] leading-[1.2] mb-[3vh]" style={{ fontSize: 'clamp(1.8rem, 2.5vw, 3rem)' }}>
                  Validation Status
                </h3>
                <p className="text-[#4a4a4a] leading-[1.75] mb-[3vh]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.3rem)' }}>
                  RipeSwitch is under ongoing evaluation across:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[2.5vh] mb-[4vh]">
                  <div className="bg-[#f8f8f8] rounded-xl p-[3vh] border border-[#e0e0e0]">
                    <p className="text-[#1a1a1a] leading-[1.6]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.25rem)' }}>
                      Material simulation and modelling
                    </p>
                  </div>
                  <div className="bg-[#f8f8f8] rounded-xl p-[3vh] border border-[#e0e0e0]">
                    <p className="text-[#1a1a1a] leading-[1.6]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.25rem)' }}>
                      Laboratory testing
                    </p>
                  </div>
                  <div className="bg-[#f8f8f8] rounded-xl p-[3vh] border border-[#e0e0e0]">
                    <p className="text-[#1a1a1a] leading-[1.6]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.25rem)' }}>
                      Controlled environment trials
                    </p>
                  </div>
                  <div className="bg-[#f8f8f8] rounded-xl p-[3vh] border border-[#e0e0e0]">
                    <p className="text-[#1a1a1a] leading-[1.6]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.25rem)' }}>
                      Structured pilot studies
                    </p>
                  </div>
                </div>

                <p className="text-[#4a4a4a] leading-[1.75]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.3rem)' }}>
                  Findings inform iterative optimisation based on real‑world data.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Section 10: Technical Enquiries & Pilot Collaboration */}
          <motion.div
            className="mb-[12vh] md:mb-[14vh]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-start gap-[4vw] mb-[4vh]">
              <div className="text-[#026448] leading-none" style={{ fontSize: 'clamp(2.5rem, 4vw, 5rem)' }}>
                10
              </div>
              <div className="flex-1">
                <h3 className="text-[#1a1a1a] leading-[1.2] mb-[3vh]" style={{ fontSize: 'clamp(1.8rem, 2.5vw, 3rem)' }}>
                  Technical Enquiries & Pilot Collaboration
                </h3>
                <p className="text-[#4a4a4a] leading-[1.75] mb-[3vh]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.3rem)' }}>
                  This reference supports early‑stage evaluation and pilot planning.
                </p>
                
                <div className="bg-[#026448] rounded-2xl p-[5vh] md:p-[6vh]">
                  <p className="text-white/90 leading-[1.75] mb-[3vh]" style={{ fontSize: 'clamp(1rem, 1.15vw, 1.3rem)' }}>
                    Organisations seeking:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-[2vh] mb-[4vh]">
                    {['Technical validation', 'Pilot participation', 'Converting trials', 'Engineering assessment'].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#EEFF41] rounded-full"></div>
                        <span className="text-white/90" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.25rem)' }}>{item}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-white/90 leading-[1.75] mb-[4vh]" style={{ fontSize: 'clamp(1rem, 1.15vw, 1.3rem)' }}>
                    may request additional non‑confidential documentation from the RipeSwitch technical team.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-[2vh]">
                    <Link 
                      to="/contact"
                      className="flex items-center justify-center gap-2 px-6 py-4 bg-white text-[#026448] rounded-lg hover:bg-[#EEFF41] transition-all font-ui"
                    >
                      <Mail className="w-4 h-4" />
                      <span style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.15rem)' }}>
                        Contact Technical Team
                      </span>
                    </Link>
                    {/* Hidden until documentation is ready */}
                    {/* <button className="flex items-center justify-center gap-2 px-6 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all">
                      <FileText className="w-4 h-4" />
                      <span style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.15rem)' }}>
                        Request Documentation
                      </span>
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
