import { Navigation } from "../components/Navigation";
import { motion } from "motion/react";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import samsonPhoto from "@/assets/samson.webp";
import toniPhoto from "@/assets/58c8dfd193737b928db3520fe4ec5b90a88052f6.webp";
import nooraPhoto from "@/assets/8cb3d96c9bfa471d24a5bb662296595c2d94d011.webp";
import irikefPhoto from "@/assets/fb1c1a29447e97798098143cc0c2b7650477fd59.webp";
import simonePhoto from "@/assets/43c1704256a7315de76c9b3b7c45f48f30ea29f7.webp";

export function AboutPage() {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-[#026448] min-h-[80vh] flex items-center">
        <Navigation />

        <div className="w-full max-w-[1400px] mx-auto px-[5vw] md:px-[8vw] py-[20vh] md:py-[25vh]">
          <p className="text-white/60 uppercase tracking-[0.25em] mb-[3vh]" style={{ fontSize: 'clamp(0.7rem, 0.8vw, 0.85rem)' }}>
            About Us
          </p>

          <h1 className="text-white leading-[1.1] mb-[6vh]" style={{ fontSize: 'clamp(3rem, 6.5vw, 7.5rem)', letterSpacing: '-0.04em' }}>
            Team
          </h1>

          <div className="w-24 h-[1px] bg-white/30 mb-[6vh]"></div>

          <p className="text-white/90 leading-[1.85] max-w-[650px] mb-[2.5vh]" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.35rem)' }}>
            Building fibre-based systems for controlled ripening
          </p>

          <p className="text-white/80 leading-[1.85] max-w-[650px]" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.35rem)' }}>
            Applied materials science for scalable alternatives to plastic food packaging
          </p>
        </div>
      </section>

      {/* Project Overview Section */}
      <section className="relative w-full min-h-[70vh] bg-white flex flex-col justify-center px-[5vw] md:px-[8vw] py-[6vh] md:py-[8vh]">
        <div className="max-w-[1400px] w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[#1a1a1a] leading-[1.2] mb-[5vh]" style={{ fontSize: 'clamp(1.8rem, 2.5vw, 3rem)' }}>
              Project Overview
            </h2>

            <div className="space-y-[3vh] text-[#4a4a4a] leading-[1.8]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.3rem)' }}>
              <p>
                RipeSwitch develops fibre‑based ripening control integrated into paper packaging for fresh produce—drop‑in compatible with existing converting lines as plastic exits the market.
              </p>

              <p>
                Our mission is to deliver operational shelf‑life control through materials engineering, enabling retailers and converters to reduce shrink without added infrastructure.
              </p>

              <p>
                We collaborate with converters and retailers to validate performance and prepare for commercial rollout. New partners are invited to participate in pilot programs.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="relative w-full min-h-[70vh] bg-[#f8f8f8] flex flex-col justify-center px-[5vw] md:px-[8vw] py-[6vh] md:py-[8vh]">
        <div className="max-w-[1400px] w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[#1a1a1a] leading-[1.2] mb-[7vh]" style={{ fontSize: 'clamp(1.8rem, 2.5vw, 3rem)' }}>
              Core Team
            </h2>

            <h3 className="text-[#026448] leading-[1.3] mb-[4vh]" style={{ fontSize: 'clamp(1.2rem, 1.4vw, 1.6rem)', letterSpacing: '0.02em' }}>
              Materials Development, Production & Manufacturing
            </h3>

            <div className="bg-white rounded-2xl overflow-hidden border border-[#e0e0e0] shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-[1.1fr_2.9fr] gap-0">
                <div className="relative w-full aspect-[3/4] md:aspect-auto md:h-full bg-[#e0e0e0] overflow-hidden group">
                  <img 
                    src={samsonPhoto} 
                    alt="Samson Emuraishe" 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-bottom grayscale"
                  />
                  <div className="absolute inset-0 bg-black opacity-20 mix-blend-multiply"></div>
                </div>
                <div className="p-[5vh] md:p-[6vh] flex flex-col justify-center">
                  <h3 className="text-[#1a1a1a] leading-[1.2] mb-[1vh]" style={{ fontSize: 'clamp(1.4rem, 1.8vw, 2.2rem)' }}>
                    Samson Emuraishe
                  </h3>
                  <p className="text-[#026448] leading-[1.4] mb-[3vh]" style={{ fontSize: 'clamp(1rem, 1.15vw, 1.35rem)' }}>
                    Founder & Product Architect
                  </p>
                  <div className="text-[#4a4a4a] leading-[1.75] space-y-[2vh]" style={{ fontSize: 'clamp(0.95rem, 1.05vw, 1.25rem)' }}>
                    <p>
                      Samson is the inventor of the RipeSwitch system and leads product architecture. His background spans fibre-based materials, paper converting, and consumer packaging.
                    </p>
                    <p>
                      He drives system design, validation strategy, and the transition from lab evaluation to pilot-ready packaging formats.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Advisory Board Section */}
      <section className="relative w-full min-h-[70vh] bg-white flex flex-col justify-center px-[5vw] md:px-[8vw] py-[6vh] md:py-[8vh]">
        <div className="max-w-[1400px] w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[#1a1a1a] leading-[1.2] mb-[7vh]" style={{ fontSize: 'clamp(1.8rem, 2.5vw, 3rem)' }}>
              Project Advisory Board
            </h2>

            {/* Market Positioning & Go-to-Market */}
            <div className="mb-[10vh]">
              <h3 className="text-[#026448] leading-[1.3] mb-[4vh]" style={{ fontSize: 'clamp(1.2rem, 1.4vw, 1.6rem)', letterSpacing: '0.02em' }}>
                Market Positioning & Go-to-Market
              </h3>
              
              <div className="bg-[#f8f8f8] rounded-2xl overflow-hidden border border-[#e0e0e0]">
                <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-0">
                  <div className="relative aspect-[3/4] md:aspect-auto bg-[#e0e0e0] overflow-hidden group">
                  <img 
                    src={toniPhoto} 
                    alt="Toni Hukkanen" 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover grayscale"
                  />
                    <div className="absolute inset-0 bg-black opacity-20 mix-blend-multiply"></div>
                  </div>
                  <div className="p-[4vh] md:p-[5vh] flex flex-col justify-center">
                    <h4 className="text-[#1a1a1a] leading-[1.2] mb-[0.5vh]" style={{ fontSize: 'clamp(1.2rem, 1.4vw, 1.7rem)' }}>
                      Toni Hukkanen
                    </h4>
                    <p className="text-[#026448] leading-[1.4] mb-[2.5vh]" style={{ fontSize: 'clamp(0.95rem, 1.05vw, 1.2rem)', fontWeight: 600 }}>
                      Brand & Commercialisation
                    </p>
                    <p className="text-[#4a4a4a] leading-[1.7]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)' }}>
                      Toni leads brand and digital design, with experience in regulated and industrial markets. He supports positioning, narrative clarity, and stakeholder-facing communication.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Program Delivery & Partnerships */}
            <div className="mb-[10vh]">
              <h3 className="text-[#026448] leading-[1.3] mb-[4vh]" style={{ fontSize: 'clamp(1.2rem, 1.4vw, 1.6rem)', fontWeight: 700, letterSpacing: '0.02em' }}>
                Program Delivery & Partnerships
              </h3>
              
              <div className="bg-[#f8f8f8] rounded-2xl overflow-hidden border border-[#e0e0e0]">
                <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-0">
                  <div className="relative aspect-[3/4] md:aspect-auto bg-[#e0e0e0] overflow-hidden group">
                  <img 
                    src={nooraPhoto} 
                    alt="Noora Silkanen" 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover grayscale"
                  />
                    <div className="absolute inset-0 bg-black opacity-20 mix-blend-multiply"></div>
                  </div>
                  <div className="p-[4vh] md:p-[5vh] flex flex-col justify-center">
                    <h4 className="text-[#1a1a1a] leading-[1.2] mb-[0.5vh]" style={{ fontSize: 'clamp(1.2rem, 1.4vw, 1.7rem)', fontWeight: 700 }}>
                      Noora Silkanen
                    </h4>
                    <p className="text-[#026448] leading-[1.4] mb-[2.5vh]" style={{ fontSize: 'clamp(0.95rem, 1.05vw, 1.2rem)', fontWeight: 600 }}>
                      Project Management & Development
                    </p>
                    <p className="text-[#4a4a4a] leading-[1.7]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)' }}>
                      Noora supports project development, change management, and cross-stakeholder coordination. She aligns technical progress with funding, pilot structuring, and program planning.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sustainability & Product Design */}
            <div className="mb-[10vh]">
              <h3 className="text-[#026448] leading-[1.3] mb-[4vh]" style={{ fontSize: 'clamp(1.2rem, 1.4vw, 1.6rem)', fontWeight: 700, letterSpacing: '0.02em' }}>
                Sustainability & Product Design
              </h3>
              
              <div className="bg-[#f8f8f8] rounded-2xl overflow-hidden border border-[#e0e0e0]">
                <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-0">
                  <div className="relative aspect-[3/4] md:aspect-auto bg-[#e0e0e0] overflow-hidden group">
                  <img 
                    src={simonePhoto} 
                    alt="Simone Gagileone" 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover grayscale"
                  />
                    <div className="absolute inset-0 bg-black opacity-20 mix-blend-multiply"></div>
                  </div>
                  <div className="p-[4vh] md:p-[5vh] flex flex-col justify-center">
                    <h4 className="text-[#1a1a1a] leading-[1.2] mb-[0.5vh]" style={{ fontSize: 'clamp(1.2rem, 1.4vw, 1.7rem)', fontWeight: 700 }}>
                      Simone Gagileone
                    </h4>
                    <p className="text-[#026448] leading-[1.4] mb-[2.5vh]" style={{ fontSize: 'clamp(0.95rem, 1.05vw, 1.2rem)', fontWeight: 600 }}>
                      Sustainability, Product and Packaging Design
                    </p>
                    <p className="text-[#4a4a4a] leading-[1.7]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)' }}>
                      Simone contributes sustainability and product design input, focusing on circularity, material ethics, and practical systems thinking.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Materials Engineering & Scale-Up */}
            <div>
              <h3 className="text-[#026448] leading-[1.3] mb-[4vh]" style={{ fontSize: 'clamp(1.2rem, 1.4vw, 1.6rem)', fontWeight: 700, letterSpacing: '0.02em' }}>
                Materials Engineering & Scale-Up
              </h3>
              
              <div className="bg-[#f8f8f8] rounded-2xl overflow-hidden border border-[#e0e0e0]">
                <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-0">
                  <div className="relative aspect-[3/4] md:aspect-auto bg-[#e0e0e0] overflow-hidden group">
                  <img 
                    src={irikefPhoto} 
                    alt="Irikefe Mosilily" 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover grayscale"
                  />
                    <div className="absolute inset-0 bg-black opacity-20 mix-blend-multiply"></div>
                  </div>
                  <div className="p-[4vh] md:p-[5vh] flex flex-col justify-center">
                    <h4 className="text-[#1a1a1a] leading-[1.2] mb-[0.5vh]" style={{ fontSize: 'clamp(1.2rem, 1.4vw, 1.7rem)', fontWeight: 700 }}>
                      Irikefe Mosilily
                    </h4>
                    <p className="text-[#026448] leading-[1.4] mb-[2.5vh]" style={{ fontSize: 'clamp(0.95rem, 1.05vw, 1.2rem)' }}>
                      Materials Science & Process Engineering Advisor
                    </p>
                    <p className="text-[#4a4a4a] leading-[1.7]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)' }}>
                      Irikefe is a materials science specialist focused on fibre materials, packaging machinery, and industrial process engineering. He advises on material behavior, integration feasibility, and scale-up.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full min-h-[70vh] bg-[#026448] flex flex-col justify-center px-[5vw] md:px-[8vw] py-[6vh] md:py-[8vh]">
        <div className="max-w-[1400px] w-full mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-white leading-[1.2] mb-[4vh]" style={{ fontSize: 'clamp(1.8rem, 2.5vw, 3rem)' }}>
              Interested in pilot collaboration?
            </h2>

            <p className="text-white/90 leading-[1.75] max-w-[700px] mx-auto mb-[5vh]" style={{ fontSize: 'clamp(1rem, 1.15vw, 1.3rem)' }}>
              RipeSwitch is seeking industrial partners, packaging converters, and retail organisations interested in participating in pilot validation under real operating conditions.
            </p>

            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#026448] rounded-lg hover:bg-[#EEFF41] transition-all"
            >
              <Mail className="w-5 h-5" />
              <span style={{ fontSize: 'clamp(1rem, 1.1vw, 1.25rem)' }}>
                Contact Technical Team
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
