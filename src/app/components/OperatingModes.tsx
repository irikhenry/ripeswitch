import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";
import Vector from "../../imports/Vector";
import Vector3 from "../../imports/Vector-28-650";

export function OperatingModes() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[5vh] lg:gap-[5vw] mb-[10vh] md:mb-[14vh]">
      {/* HOLD Mode */}
      <motion.div
        className="bg-[#026448] rounded-3xl p-[5vh] md:p-[6vh] text-white border border-white/10 shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-[4vh]">
          <div className="inline-block px-4 py-2 bg-white/10 rounded-full mb-[3vh]">
            <span className="text-[#EEFF41] tracking-wider uppercase" style={{ fontSize: "clamp(0.7rem, 0.85vw, 0.95rem)" }}>
              Mode 01
            </span>
          </div>
          <h3 className="text-white leading-[1.15] mb-[2vh]" style={{ fontSize: "clamp(2rem, 3vw, 3.5rem)" }}>
            HOLD
          </h3>
          <p className="text-white/80 leading-[1.6]" style={{ fontSize: "clamp(1rem, 1.2vw, 1.4rem)" }}>
            Delays ripening during transit and storage.
          </p>
        </div>

        <div className="relative h-[22vh] md:h-[28vh] rounded-2xl overflow-hidden mb-[3vh] flex items-center justify-center [&>svg]:w-auto [&>svg]:h-auto [&>svg]:max-w-full [&>svg]:max-h-full">
          <Vector />
        </div>

        <div className="space-y-[2vh]">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-[#EEFF41] flex-shrink-0 mt-1" />
            <p className="text-white/90 leading-[1.6]" style={{ fontSize: "clamp(0.95rem, 1.1vw, 1.3rem)" }}>
              Reduces ethylene exposure
            </p>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-[#EEFF41] flex-shrink-0 mt-1" />
            <p className="text-white/90 leading-[1.6]" style={{ fontSize: "clamp(0.95rem, 1.1vw, 1.3rem)" }}>
              Preserves firmness longer
            </p>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-[#EEFF41] flex-shrink-0 mt-1" />
            <p className="text-white/90 leading-[1.6]" style={{ fontSize: "clamp(0.95rem, 1.1vw, 1.3rem)" }}>
              Extends handling window
            </p>
          </div>
        </div>
      </motion.div>

      {/* READY Mode */}
      <motion.div
        className="bg-[#EEFF41] rounded-3xl p-[5vh] md:p-[6vh] border border-black/10 shadow-[0_18px_40px_rgba(0,0,0,0.12)]"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="mb-[4vh]">
          <div className="inline-block px-4 py-2 bg-[#026448]/10 rounded-full mb-[3vh]">
            <span className="text-[#026448] tracking-wider uppercase" style={{ fontSize: "clamp(0.7rem, 0.85vw, 0.95rem)" }}>
              Mode 02
            </span>
          </div>
          <h3 className="text-[#026448] leading-[1.15] mb-[2vh]" style={{ fontSize: "clamp(2rem, 3vw, 3.5rem)" }}>
            READY
          </h3>
          <p className="text-[#026448]/80 leading-[1.6]" style={{ fontSize: "clamp(1rem, 1.2vw, 1.4rem)" }}>
            Allows natural ripening at the consumer stage.
          </p>
        </div>

        <div className="relative w-full rounded-2xl overflow-hidden mb-[3vh]" style={{ aspectRatio: "455.573 / 335.048" }}>
          <Vector3 />
        </div>

        <div className="space-y-[2vh]">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-[#026448] flex-shrink-0 mt-1" />
            <p className="text-[#026448]/90 leading-[1.6]" style={{ fontSize: "clamp(0.95rem, 1.1vw, 1.3rem)" }}>
              Resumes normal gas exchange
            </p>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-[#026448] flex-shrink-0 mt-1" />
            <p className="text-[#026448]/90 leading-[1.6]" style={{ fontSize: "clamp(0.95rem, 1.1vw, 1.3rem)" }}>
              Predictable ripening curve
            </p>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-[#026448] flex-shrink-0 mt-1" />
            <p className="text-[#026448]/90 leading-[1.6]" style={{ fontSize: "clamp(0.95rem, 1.1vw, 1.3rem)" }}>
              Optimal eating window
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
