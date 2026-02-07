import { motion } from "motion/react";
import { WhitePaperDetailWrapper } from "../../components/WhitePaperDetailWrapper";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

export function ActiveRipeningControlPage() {
  return (
    <WhitePaperDetailWrapper
      title="Active Ripening Control in Paper-Based Packaging"
      type="White Paper"
      date="January 2026"
    >
      {/* Section 01 — Introduction */}
      <section className="relative w-full min-h-[70vh] bg-white flex flex-col justify-center px-[5vw] md:px-[8vw] py-[12vh]">
        <div className="max-w-[1400px] w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-[8vh]"
          >
            <h1 
              className="text-[#1a1a1a] leading-[1.05] mb-[4vh]"
              style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', fontWeight: 700, letterSpacing: '-0.02em' }}
            >
              Ripeness control, in paper.
            </h1>
            <p 
              className="text-[#4a4a4a] leading-[1.6] max-w-[900px] mx-auto"
              style={{ fontSize: 'clamp(1.1rem, 1.8vw, 2rem)', fontWeight: 400 }}
            >
              The first scalable paper packaging component that gives control over produce ripening and extends usable life, without plastics, electronics, or coatings.
            </p>
          </motion.div>

          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[50vh] md:h-[60vh] rounded-3xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1741461527158-2a5799c3d26c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaXBlJTIwYmFuYW5hcyUyMHBhcGVyJTIwYmFnfGVufDF8fHx8MTc3MDM3ODkyN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="RipeSwitch paper packaging"
                className="w-full h-full object-cover"
              />
            </div>
            <figcaption 
              className="text-[#666] text-center mt-[2vh] italic"
              style={{ fontSize: 'clamp(0.85rem, 1vw, 1.1rem)' }}
            >
              RipeSwitch paper packaging applied to fresh produce in an open retail context.
            </figcaption>
          </motion.div>
        </div>
      </section>

      {/* Section 02 — The Everyday Problem */}
      <section className="relative w-full min-h-screen bg-white flex items-center px-[5vw] md:px-[8vw] py-[14vh]">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[6vh] lg:gap-[8vw] items-center">
            {/* Image Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative h-[55vh] md:h-[70vh] rounded-3xl overflow-hidden"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1701937946120-e0945bb71e35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwd2FzdGUlMjBvdmVycmlwZSUyMGZydWl0JTIwaG91c2Vob2xkfGVufDF8fHx8MTc3MDM3ODkyNHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Household and retail fruit waste"
                className="w-full h-full object-cover"
              />
              <figcaption 
                className="text-[#666] mt-[2vh] italic"
                style={{ fontSize: 'clamp(0.85rem, 1vw, 1.1rem)' }}
              >
                Household and retail fruit waste caused by uncontrolled ripening and timing mismatch.
              </figcaption>
            </motion.div>

            {/* Text Right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 
                className="text-[#1a1a1a] leading-[1.15] mb-[4vh]"
                style={{ fontSize: 'clamp(2.2rem, 4vw, 5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}
              >
                Fruit waste isn't a behaviour problem. It's a timing problem.
              </h2>
              <div 
                className="text-[#4a4a4a] leading-[1.8] space-y-[2vh]"
                style={{ fontSize: 'clamp(1.1rem, 1.4vw, 1.6rem)' }}
              >
                <p>You buy fruit with good intentions.</p>
                <p>Life happens.</p>
                <p>It goes from not ready to overripe.</p>
                <p className="pt-[2vh]">This happens in homes, stores, and backrooms, every day.<br />Small losses, repeated millions of times.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 03 — The Packaging Trap */}
      <section className="relative w-full min-h-screen bg-[#f8f8f8] flex items-center px-[5vw] md:px-[8vw] py-[14vh]">
        <div className="max-w-[1200px] w-full mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 
              className="text-[#1a1a1a] leading-[1.15] mb-[4vh]"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 5.5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}
            >
              Plastic is going away. Plain paper isn't enough.
            </h2>
            <div 
              className="text-[#4a4a4a] leading-[1.8] max-w-[800px] mx-auto mb-[8vh] space-y-[2vh]"
              style={{ fontSize: 'clamp(1.1rem, 1.4vw, 1.6rem)' }}
            >
              <p>Single-use plastic is being phased out.<br />That's necessary, but it removes the only packaging tool that slowed spoilage.</p>
              <p className="pt-[2vh]">Standard paper increases dehydration and ripening loss.<br />Shrink rises. Margins suffer.</p>
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative h-[50vh] md:h-[60vh] rounded-3xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1649677364678-45a69944db3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwcHJvZHVjZSUyMHBhY2thZ2luZyUyMHJldGFpbHxlbnwxfHx8fDE3NzAzNzg5MzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Plastic produce packaging"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption 
                className="text-[#666] text-center mt-[2vh] italic"
                style={{ fontSize: 'clamp(0.85rem, 1vw, 1.1rem)' }}
              >
                Conventional plastic produce packaging currently used to manage shelf-life.
              </figcaption>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 04 — The Solution */}
      <section className="relative w-full min-h-screen bg-[#026448] flex items-center px-[5vw] md:px-[8vw] py-[14vh]">
        <div className="max-w-[1200px] w-full mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 
              className="text-[#EEFF41] leading-[1.15] mb-[6vh]"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 6.5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}
            >
              RipeSwitch gives produce a choice.
            </h2>
            <div 
              className="text-white/90 leading-[1.8] max-w-[700px] mx-auto space-y-[3vh]"
              style={{ fontSize: 'clamp(1.2rem, 1.6vw, 1.8rem)', fontWeight: 500 }}
            >
              <p><strong className="text-[#EEFF41]">HOLD</strong> when fruit needs time.<br />
              <strong className="text-[#EEFF41]">READY</strong> when it's meant to ripen.</p>
              
              <div className="pt-[4vh] space-y-[2vh]">
                <p>No apps.</p>
                <p>No electronics.</p>
                <p>No chemical coatings.</p>
              </div>
              
              <p className="pt-[4vh]" style={{ fontSize: 'clamp(1.3rem, 1.8vw, 2rem)' }}>
                Just packaging that controls the pace.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 05 — How It Works */}
      <section className="relative w-full min-h-screen bg-white flex items-center px-[5vw] md:px-[8vw] py-[14vh]">
        <div className="max-w-[1200px] w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-[8vh]"
          >
            <h2 
              className="text-[#1a1a1a] leading-[1.15] mb-[4vh]"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 6.5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}
            >
              How it works
            </h2>
            <p 
              className="text-[#4a4a4a] leading-[1.7] max-w-[800px] mx-auto"
              style={{ fontSize: 'clamp(1.1rem, 1.4vw, 1.6rem)' }}
            >
              RipeSwitch is engineered paper with controlled permeability. It manages gas exchange to regulate ripening velocity without external inputs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[6vh] md:gap-[6vw]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-[#f8f8f8] rounded-2xl p-[5vh] md:p-[6vh]"
            >
              <h3 className="text-[#026448] leading-[1.2] mb-[3vh]" style={{ fontSize: 'clamp(1.8rem, 2.5vw, 3rem)', fontWeight: 700 }}>
                HOLD mode
              </h3>
              <p className="text-[#4a4a4a] leading-[1.7] mb-[3vh]" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.4rem)' }}>
                Reduced ventilation configuration limits oxygen availability and ethylene dissipation. Slows ripening progression for extended shelf life in transit and storage.
              </p>
              <ul className="space-y-[2vh] text-[#4a4a4a]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.3rem)' }}>
                <li className="flex items-start gap-3">
                  <span className="text-[#026448] font-bold">→</span>
                  <span>Extends transport window by 3–5 days</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#026448] font-bold">→</span>
                  <span>Reduces back-room shrink</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#026448] font-bold">→</span>
                  <span>Compatible with standard cold chain</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-[#026448] text-white rounded-2xl p-[5vh] md:p-[6vh]"
            >
              <h3 className="text-[#EEFF41] leading-[1.2] mb-[3vh]" style={{ fontSize: 'clamp(1.8rem, 2.5vw, 3rem)', fontWeight: 700 }}>
                READY mode
              </h3>
              <p className="text-white/90 leading-[1.7] mb-[3vh]" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.4rem)' }}>
                Increased ventilation promotes normal ripening. Allows controlled progression to ready-to-eat state for retail display and consumer purchase.
              </p>
              <ul className="space-y-[2vh] text-white/90" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.3rem)' }}>
                <li className="flex items-start gap-3">
                  <span className="text-[#EEFF41] font-bold">→</span>
                  <span>Natural ripening to consumer-ready state</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#EEFF41] font-bold">→</span>
                  <span>Maintains moisture retention</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#EEFF41] font-bold">→</span>
                  <span>Fully biodegradable substrate</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 06 — Performance Data */}
      <section className="relative w-full min-h-screen bg-[#f8f8f8] flex items-center px-[5vw] md:px-[8vw] py-[14vh]">
        <div className="max-w-[1200px] w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-[10vh]"
          >
            <h2 
              className="text-[#1a1a1a] leading-[1.15] mb-[4vh]"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 6.5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}
            >
              Validated performance
            </h2>
            <p 
              className="text-[#4a4a4a] leading-[1.7] max-w-[800px] mx-auto"
              style={{ fontSize: 'clamp(1.1rem, 1.4vw, 1.6rem)' }}
            >
              Laboratory and pilot deployment data across climacteric fruit categories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[5vh] md:gap-[4vw] mb-[8vh]">
            {[
              { metric: "3–5 days", label: "Shelf life extension", desc: "Bananas, avocados, stone fruit" },
              { metric: "18–24%", label: "Shrink reduction", desc: "Nordic retail pilot, 85 stores" },
              { metric: "100%", label: "Biodegradable", desc: "Fiber-based, no coatings" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-[5vh] text-center"
              >
                <div className="text-[#026448] leading-none mb-[2vh]" style={{ fontSize: 'clamp(3rem, 5vw, 6rem)', fontWeight: 700 }}>
                  {item.metric}
                </div>
                <div className="text-[#1a1a1a] leading-[1.3] mb-[2vh]" style={{ fontSize: 'clamp(1.2rem, 1.4vw, 1.6rem)', fontWeight: 600 }}>
                  {item.label}
                </div>
                <div className="text-[#666]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.3rem)' }}>
                  {item.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 07 — Conclusion */}
      <section className="relative w-full min-h-[60vh] bg-[#026448] flex items-center px-[5vw] md:px-[8vw] py-[12vh]">
        <div className="max-w-[900px] w-full mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 
              className="text-[#EEFF41] leading-[1.15] mb-[4vh]"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 6.5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}
            >
              A material solution to a material problem
            </h2>
            <p 
              className="text-white/90 leading-[1.7]"
              style={{ fontSize: 'clamp(1.1rem, 1.4vw, 1.6rem)' }}
            >
              RipeSwitch demonstrates that active shelf life control is achievable in fiber-based packaging through passive engineering. No apps, sensors, or coatings required—just materials science applied to a supply chain problem.
            </p>
          </motion.div>
        </div>
      </section>
    </WhitePaperDetailWrapper>
  );
}
