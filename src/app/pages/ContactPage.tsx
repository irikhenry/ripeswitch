import { Navigation } from "../components/Navigation";
import Logo from "../../imports/Logo";

export function ContactPage() {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-[#026448] min-h-screen flex items-center">
        <Navigation />

        <div className="w-full max-w-[1200px] mx-auto px-[5vw] lg:px-[8vw] py-[20vh] md:py-[25vh]">
          <p className="text-white/60 uppercase tracking-[0.25em] mb-[3vh]" style={{ fontSize: 'clamp(0.7rem, 0.8vw, 0.85rem)', fontWeight: 400 }}>
            Contact
          </p>

          <h1 className="text-white leading-[1.1] mb-[6vh]" style={{ fontSize: 'clamp(3rem, 6.5vw, 7.5rem)', fontWeight: 300, letterSpacing: '-0.04em' }}>
            Contact us
          </h1>

          <div className="w-24 h-[1px] bg-white/30 mb-[6vh]"></div>

          <p className="text-white/90 leading-[1.85] max-w-[650px] mb-[6vh]" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.35rem)', fontWeight: 300 }}>
            For pilot inquiries, technical documentation, or partnership discussions.
          </p>

          <div className="space-y-[3vh]">
            <a 
              href="mailto:tutki@ripeswitch.com" 
              className="block text-white hover:text-[#EEFF41] transition-opacity" 
              style={{ fontSize: 'clamp(1.2rem, 1.5vw, 1.8rem)', fontWeight: 300 }}
            >
              tutki@ripeswitch.com
            </a>
            <a 
              href="tel:+358404611019" 
              className="block text-white hover:text-[#EEFF41] transition-opacity" 
              style={{ fontSize: 'clamp(1.2rem, 1.5vw, 1.8rem)', fontWeight: 300 }}
            >
              +358 40 461 1019
            </a>
            <p className="text-white/70" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.4rem)', fontWeight: 300 }}>
              Helsinki, Finland
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}