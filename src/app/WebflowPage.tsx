import { motion } from "motion/react";
import Logo from "../imports/Logo";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { heroPackaging, overripeFruitImage, plasticPackagingImage } from "./assets/responsiveImages";
import mechanismIllustration from "@/assets/92b9f5e155f2beeff77bbad48b5895559f909d98.webp";
import retailUse from "@/assets/705e0dd601e893c242eb4bf0eeb9c749ae0a98c5.webp";
import paperConverting from "@/assets/0df46eb4c699ca7f1ee082a13c21a365cb336417.webp";
import tomatoesRetail from "@/assets/c50c398b51941255d564f13fc1a9a02a97c84aef.webp";

export default function WebflowPage() {
  return (
    <div className="w-full bg-white">
      {/* Section 01 — Hero */}
      <section className="relative w-full h-screen bg-white flex flex-col">
        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 z-20 px-[8vw] py-[5vh]">
          <div className="w-[clamp(180px,18vw,320px)]">
            <Logo />
          </div>
        </nav>

        {/* Hero Content */}
        <div className="flex-1 flex items-center justify-center px-[8vw] py-[12vh]">
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
              A scalable paper packaging component that controls produce ripening and extends usable life within standard paper-based formats.
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
                  src={heroPackaging.src}
                  srcSet={heroPackaging.srcSet}
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 60vw, 600px"
                  width={heroPackaging.width}
                  height={heroPackaging.height}
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
        </div>
      </section>

      {/* Section 02 — The Everyday Problem */}
      <section className="relative w-full min-h-screen bg-white flex items-center px-[8vw] py-[14vh]">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[8vw] items-center">
            {/* Image Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative h-[55vh] md:h-[70vh] rounded-3xl overflow-hidden"
            >
              <ImageWithFallback
                src={overripeFruitImage.src}
                srcSet={overripeFruitImage.srcSet}
                sizes="(max-width: 1024px) 90vw, 50vw"
                width={overripeFruitImage.width}
                height={overripeFruitImage.height}
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
      <section className="relative w-full min-h-screen bg-[#f8f8f8] flex items-center px-[8vw] py-[14vh]">
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
              <p>Single-use plastic is being phased out.<br />That's necessary, but it removes a major tool that slowed spoilage.</p>
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
                  src={plasticPackagingImage.src}
                  srcSet={plasticPackagingImage.srcSet}
                  sizes="(max-width: 1024px) 90vw, 50vw"
                  width={plasticPackagingImage.width}
                  height={plasticPackagingImage.height}
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
      <section className="relative w-full min-h-screen bg-[#026448] flex items-center px-[8vw] py-[14vh]">
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
                <p>No apps, electronics, or chemical coatings.</p>
              </div>
              
              <p className="pt-[4vh]" style={{ fontSize: 'clamp(1.3rem, 1.8vw, 2rem)' }}>
                Just packaging that controls the pace.
              </p>
            </div>

            {/* Product Visual */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-[10vh]"
            >
              <div className="relative h-[45vh] md:h-[55vh] rounded-3xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <ImageWithFallback src={mechanismIllustration} alt="RipeSwitch mechanism illustration" className="w-full h-full object-contain p-[4vh]" />
              </div>
              <figcaption 
                className="text-white/70 text-center mt-[2vh] italic"
                style={{ fontSize: 'clamp(0.85rem, 1vw, 1.1rem)' }}
              >
                RipeSwitch introduces a controllable micro-environment around fresh produce.
              </figcaption>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 05 — How It Works (High-Level) */}
      <section className="relative w-full min-h-screen bg-white flex items-center px-[8vw] py-[14vh]">
        <div className="max-w-[1200px] w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 
              className="text-[#1a1a1a] leading-[1.15] mb-[6vh]"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 5.5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}
            >
              Control the air touching the fruit.
            </h2>
            <div 
              className="text-[#4a4a4a] leading-[1.8] max-w-[800px] mx-auto mb-[8vh] space-y-[2vh]"
              style={{ fontSize: 'clamp(1.1rem, 1.4vw, 1.6rem)' }}
            >
              <p>RipeSwitch manages the local micro-climate around produce, regulating gas exchange near the fruit surface.</p>
              
              <div className="pt-[3vh] space-y-[1.5vh]">
                <p>It doesn't seal fruit.</p>
                <p>It doesn't suffocate it.</p>
                <p>It manages the speed of ripening.</p>
              </div>
            </div>

            {/* Schematic Visual */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative h-[50vh] md:h-[60vh] rounded-3xl overflow-hidden bg-[#f8f8f8] flex items-center justify-center">
                <div className="text-[#999] text-center">
                  <div style={{ fontSize: 'clamp(1rem, 1.2vw, 1.4rem)' }}>Neutral schematic with soft, diffuse gas arrows</div>
                </div>
              </div>
              <figcaption 
                className="text-[#666] text-center mt-[2vh] italic"
                style={{ fontSize: 'clamp(0.85rem, 1vw, 1.1rem)' }}
              >
                Conceptual illustration of controlled gas flux near the fruit surface.
              </figcaption>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 06 — Designed for Real Retail */}
      <section className="relative w-full min-h-screen bg-[#f8f8f8] flex items-center px-[8vw] py-[14vh]">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[8vw] items-center">
            {/* Text Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 
                className="text-[#1a1a1a] leading-[1.15] mb-[4vh]"
                style={{ fontSize: 'clamp(2.2rem, 4vw, 5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}
              >
                Built for open shelves and real handling.
              </h2>
              <div 
                className="text-[#4a4a4a] leading-[1.8] space-y-[3vh]"
                style={{ fontSize: 'clamp(1.1rem, 1.4vw, 1.6rem)' }}
              >
                <div className="space-y-[1.5vh]">
                  <p>Works in open displays.</p>
                  <p>Works in backrooms.</p>
                  <p>Works at home.</p>
                </div>
                
                <div className="pt-[3vh] space-y-[1.5vh]">
                  <p>No training or behaviour change.</p>
                </div>
              </div>
            </motion.div>

            {/* Image Right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[55vh] md:h-[70vh] rounded-3xl overflow-hidden">
                <ImageWithFallback src={retailUse} alt="Retail produce display" className="w-full h-full object-cover" />
              </div>
              <figcaption 
                className="text-[#666] mt-[2vh] italic"
                style={{ fontSize: 'clamp(0.85rem, 1vw, 1.1rem)' }}
              >
                RipeSwitch functioning in standard retail produce displays.
              </figcaption>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 07 — Built for Paper, Built to Scale */}
      <section className="relative w-full min-h-screen bg-white flex items-center px-[8vw] py-[14vh]">
        <div className="max-w-[1200px] w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 
              className="text-[#1a1a1a] leading-[1.15] mb-[4vh]"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 5.5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}
            >
              Not a gadget. A packaging component.
            </h2>
            <p 
              className="text-[#4a4a4a] leading-[1.8] max-w-[900px] mx-auto mb-[8vh]"
              style={{ fontSize: 'clamp(1.1rem, 1.4vw, 1.6rem)' }}
            >
              RipeSwitch integrates into existing paper converting workflows, enabling low unit cost, fast scale-up, and global distribution.
            </p>

            {/* Process Diagram */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative h-[50vh] md:h-[60vh] rounded-3xl overflow-hidden">
                <ImageWithFallback src={paperConverting} alt="Paper manufacturing process" className="w-full h-full object-cover" />
              </div>
              <figcaption 
                className="text-[#666] text-center mt-[2vh] italic"
                style={{ fontSize: 'clamp(0.85rem, 1vw, 1.1rem)' }}
              >
                RipeSwitch integrates into existing paper packaging manufacturing and distribution systems.
              </figcaption>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 08 — Why Retailers Care (Economics) */}
      <section className="relative w-full min-h-screen bg-[#026448] flex items-center px-[8vw] py-[14vh]">
        <div className="max-w-[1200px] w-full mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 
              className="text-[#EEFF41] leading-[1.15] mb-[6vh]"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 5.5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}
            >
              Small shrink reductions change margins.
            </h2>
            <div 
              className="text-white/90 leading-[1.8] max-w-[800px] mx-auto mb-[10vh] space-y-[2vh]"
              style={{ fontSize: 'clamp(1.1rem, 1.4vw, 1.6rem)' }}
            >
              <p>Produce shrink typically ranges from 5–10%.<br />Reducing even a fraction of that delivers meaningful savings at scale.</p>
              <p className="pt-[2vh]">RipeSwitch compounds in value as volume grows.</p>
            </div>

            {/* Calculator Visual */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative h-[45vh] md:h-[55vh] rounded-3xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <div className="text-white/60 text-center space-y-[4vh]">
                  <div style={{ fontSize: 'clamp(3rem, 5vw, 6rem)', fontWeight: 700 }} className="text-[#EEFF41]">
                    5-10%
                  </div>
                  <div style={{ fontSize: 'clamp(1rem, 1.2vw, 1.4rem)' }}>
                    Typical produce shrink range
                  </div>
                </div>
              </div>
              <figcaption 
                className="text-white/70 text-center mt-[2vh] italic"
                style={{ fontSize: 'clamp(0.85rem, 1vw, 1.1rem)' }}
              >
                Illustrative impact of shrink reduction on retail economics.
              </figcaption>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 09 — Where It Fits Best */}
      <section className="relative w-full min-h-screen bg-white flex items-center px-[8vw] py-[14vh]">
        <div className="max-w-[1200px] w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 
              className="text-[#1a1a1a] leading-[1.15] mb-[4vh]"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 5.5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}
            >
              Where timing matters most.
            </h2>
            <p 
              className="text-[#4a4a4a] leading-[1.8] max-w-[800px] mx-auto mb-[8vh]"
              style={{ fontSize: 'clamp(1.1rem, 1.4vw, 1.6rem)' }}
            >
              Designed for climacteric fruits where ripening control delivers the highest value.
            </p>

            {/* Fruit Grid */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative h-[50vh] md:h-[60vh] rounded-3xl overflow-hidden">
                <ImageWithFallback src={tomatoesRetail} alt="Target produce categories" className="w-full h-full object-cover" />
              </div>
              <figcaption 
                className="text-[#666] text-center mt-[2vh] italic"
                style={{ fontSize: 'clamp(0.85rem, 1vw, 1.1rem)' }}
              >
                Target produce categories with high ripening sensitivity and waste risk.
              </figcaption>

              {/* Fruit Names */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-[3vh] mt-[6vh]">
                {['Bananas', 'Avocados', 'Mangoes', 'Pears'].map((fruit, index) => (
                  <motion.div
                    key={fruit}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="text-[#1a1a1a] font-semibold"
                    style={{ fontSize: 'clamp(1.2rem, 1.5vw, 1.8rem)' }}
                  >
                    {fruit}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 10 — Protection & Trust */}
      <section className="relative w-full min-h-screen bg-[#f8f8f8] flex items-center px-[8vw] py-[14vh]">
        <div className="max-w-[900px] w-full mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 
              className="text-[#1a1a1a] leading-[1.15] mb-[6vh]"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 5.5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}
            >
              Open enough to understand. Protected enough to scale.
            </h2>
            <div 
              className="text-[#4a4a4a] leading-[1.8] space-y-[3vh]"
              style={{ fontSize: 'clamp(1.1rem, 1.4vw, 1.6rem)' }}
            >
              <p>The invention has not been publicly disclosed in an enabling form.<br />Key design and integration methods are protected through controlled disclosure.</p>
              <p className="pt-[2vh]">Formal IP protection is planned prior to commercial rollout.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 11 — Closing */}
      <section className="relative w-full min-h-screen bg-[#026448] flex items-center px-[8vw] py-[14vh]">
        <div className="max-w-[1000px] w-full mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 
              className="text-[#EEFF41] leading-[1.05] mb-[8vh]"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 7.5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}
            >
              Paper that finally works for fresh food.
            </h2>
            <div 
              className="text-white/90 leading-[1.9] space-y-[2vh]"
              style={{ fontSize: 'clamp(1.3rem, 1.8vw, 2.2rem)', fontWeight: 500 }}
            >
              <p>Less waste.</p>
              <p>Better timing.</p>
              <p>Packaging that matches how produce actually behaves.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
