import { motion } from "motion/react";
import Logo from "../../imports/Logo";

export function Footer() {
  return (
    <footer className="relative w-full bg-[#0a1f1a] px-[5vw] md:px-[8vw] pt-[10vh] md:pt-[16vh] pb-[6vh] md:pb-[10vh]">
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
  );
}
