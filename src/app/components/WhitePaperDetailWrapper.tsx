import { ReactNode } from "react";
import { motion } from "motion/react";
import Logo from "../../imports/Logo";
import { Navigation } from "./Navigation";

interface WhitePaperDetailWrapperProps {
  children: ReactNode;
  title: string;
  type: string;
  date: string;
}

export function WhitePaperDetailWrapper({ children, title, type, date }: WhitePaperDetailWrapperProps) {
  return (
    <div className="w-full bg-white">
      {/* Paper Metadata Hero */}
      <section className="relative w-full bg-[#026448]">
        {/* Navigation Bar */}
        <Navigation />

        <div className="max-w-[1000px] mx-auto px-[5vw] md:px-[8vw] pt-[20vh] md:pt-[25vh] pb-[8vh] md:pb-[12vh] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-5 py-2 bg-[#EEFF41] rounded-full mb-[3vh]">
              <span className="text-[#026448] tracking-wider uppercase" style={{ fontSize: 'clamp(0.75rem, 0.9vw, 1rem)', fontWeight: 600 }}>
                {type}
              </span>
            </div>
            
            <h1 className="text-white leading-[1.1] mb-[3vh]" style={{ fontSize: 'clamp(2rem, 4.5vw, 5.5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              {title}
            </h1>
            
            <p className="text-white/70" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.4rem)', fontWeight: 500 }}>
              Published {date}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="relative w-full bg-white">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative w-full bg-[#0a1f1a] px-[5vw] md:px-[8vw] pt-[10vh] md:pt-[16vh] pb-[6vh] md:pb-[10vh] print:hidden">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:justify-between md:items-start gap-[6vh] md:gap-[4vw] mb-[6vh] md:mb-[8vh]"
          >
            {/* Brand Block */}
            <div className="flex flex-col gap-[2vh]">
              <div className="w-[clamp(140px,18vw,220px)]">
                <Logo />
              </div>
              <p className="text-[#a8b5a8] opacity-70 leading-[1.6]" style={{ fontSize: 'clamp(0.9rem, 1.1vw, 1.1rem)', fontWeight: 400 }}>
                Active ripening control, built into paper.
              </p>
            </div>

            {/* Contact Block */}
            <div className="flex flex-col gap-[1.5vh] md:text-right">
              <p className="text-[#6b8c6b] uppercase tracking-[0.15em]" style={{ fontSize: 'clamp(0.7rem, 0.85vw, 0.85rem)', fontWeight: 500 }}>
                Contact
              </p>
              <a 
                href="mailto:tutki@ripeswitch.com" 
                className="text-[#d4e8d4] hover:text-[#88c088] transition-colors duration-300 inline-block py-2" 
                style={{ fontSize: 'clamp(1rem, 1.2vw, 1.3rem)', fontWeight: 400 }}
              >
                tutki@ripeswitch.com
              </a>
              <a 
                href="tel:+358404611019" 
                className="text-[#d4e8d4] hover:text-[#88c088] transition-colors duration-300 inline-block py-2" 
                style={{ fontSize: 'clamp(1rem, 1.2vw, 1.3rem)', fontWeight: 400 }}
              >
                +358 40 461 1019
              </a>
              <p className="text-[#a8b5a8] opacity-60" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.05rem)', fontWeight: 400 }}>
                Helsinki, Finland
              </p>
            </div>
          </motion.div>

          {/* Copyright */}
          <div className="border-t border-[#1a3a2a] pt-[4vh]">
            <p className="text-[#6b8c6b] opacity-50 text-center md:text-left" style={{ fontSize: 'clamp(0.8rem, 0.95vw, 0.95rem)', fontWeight: 400 }}>
              © RipeSwitch Finland
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}