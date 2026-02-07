import { motion } from "motion/react";
import { WhitePaperDetailWrapper } from "../../components/WhitePaperDetailWrapper";
import { Shield, CheckCircle, Globe, Leaf } from "lucide-react";

export function MaterialSafetyCompliancePage() {
  return (
    <WhitePaperDetailWrapper
      title="Material Safety & Regulatory Compliance"
      type="Technical Specification"
      date="November 2025"
    >
      {/* Introduction */}
      <section className="relative w-full bg-white px-[5vw] md:px-[8vw] py-[12vh] md:px-[14vh]">
        <div className="max-w-[1000px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-5 py-2 bg-[#EEFF41] rounded-full mb-[4vh]">
              <span className="text-[#026448] tracking-wider uppercase" style={{ fontSize: 'clamp(0.75rem, 0.9vw, 1rem)', fontWeight: 600 }}>
                Regulatory Overview
              </span>
            </div>
            <h2 className="text-[#1a1a1a] leading-[1.1] mb-[4vh]" style={{ fontSize: 'clamp(2.5rem, 5vw, 6.5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Food contact safety and environmental compliance
            </h2>
            <div className="text-[#4a4a4a] leading-[1.8] space-y-[3vh]" style={{ fontSize: 'clamp(1.05rem, 1.3vw, 1.5rem)' }}>
              <p>
                RipeSwitch packaging materials are engineered for direct food contact compliance across EU, US, and APAC regulatory frameworks. All substrate components meet food safety standards without reliance on chemical coatings or non-biodegradable additives.
              </p>
              <p>
                This document details material composition, testing protocols, regulatory status, and end-of-life pathways.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Food Contact Compliance */}
      <section className="relative w-full bg-[#f8f8f8] px-[5vw] md:px-[8vw] py-[12vh] md:py-[14vh]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-[8vh]"
          >
            <h2 className="text-[#1a1a1a] leading-[1.15] mb-[4vh]" style={{ fontSize: 'clamp(2.2rem, 4vw, 5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Food contact material compliance
            </h2>
            <p className="text-[#4a4a4a] leading-[1.7] max-w-[800px]" style={{ fontSize: 'clamp(1rem, 1.25vw, 1.4rem)' }}>
              RipeSwitch materials comply with food contact regulations across major markets through design-level material selection and third-party validation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[5vh] md:gap-[4vw]">
            {[
              {
                icon: Globe,
                region: "European Union",
                regulation: "EC 1935/2004 & 10/2011",
                status: "Compliant",
                details: "Framework regulation on materials and articles in contact with food. All substrate components listed in Union positive list. Migration testing conducted per EN 1186 standards.",
                testing: "Overall migration < 10 mg/dm² across all food simulants"
              },
              {
                icon: Shield,
                region: "United States",
                regulation: "FDA 21 CFR 176",
                status: "Compliant",
                details: "Components meet FDA indirect food additive regulations for paper and paperboard in contact with aqueous and fatty foods. Notification submitted under FCN process.",
                testing: "Extractables analysis via FDA methods. No substances of concern detected."
              },
              {
                icon: CheckCircle,
                region: "APAC Markets",
                regulation: "Various National Standards",
                status: "Compliant",
                details: "Compliance verified for Japan (Food Sanitation Law), Australia/NZ (FSANZ), and Singapore (Sale of Food Act). Material declarations provided for all markets.",
                testing: "Region-specific migration protocols completed per local requirements"
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-[5vh] md:p-[6vh]"
                >
                  <div className="flex items-center gap-3 mb-[3vh]">
                    <div className="w-12 h-12 rounded-full bg-[#026448]/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#026448]" />
                    </div>
                    <div className="inline-block px-3 py-1 bg-[#EEFF41]/50 rounded-full">
                      <span className="text-[#026448] uppercase tracking-wider" style={{ fontSize: 'clamp(0.7rem, 0.85vw, 0.9rem)', fontWeight: 700 }}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-[#1a1a1a] leading-[1.2] mb-[1vh]" style={{ fontSize: 'clamp(1.3rem, 1.5vw, 1.8rem)', fontWeight: 700 }}>
                    {item.region}
                  </h3>
                  <div className="text-[#026448] mb-[2vh]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)', fontWeight: 600 }}>
                    {item.regulation}
                  </div>
                  <p className="text-[#4a4a4a] leading-[1.6] mb-[3vh]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.3rem)' }}>
                    {item.details}
                  </p>
                  <div className="pt-[2vh] border-t border-[#e0e0e0]">
                    <div className="text-[#666] text-sm uppercase tracking-wider mb-[1vh]" style={{ fontSize: 'clamp(0.75rem, 0.9vw, 1rem)', fontWeight: 600 }}>
                      Testing Summary
                    </div>
                    <p className="text-[#666] leading-[1.6]" style={{ fontSize: 'clamp(0.85rem, 1vw, 1.15rem)' }}>
                      {item.testing}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Material Composition */}
      <section className="relative w-full bg-white px-[5vw] md:px-[8vw] py-[12vh] md:py-[14vh]">
        <div className="max-w-[1000px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-[8vh]"
          >
            <h2 className="text-[#1a1a1a] leading-[1.15] mb-[4vh]" style={{ fontSize: 'clamp(2.2rem, 4vw, 5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Material composition disclosure
            </h2>
            <p className="text-[#4a4a4a] leading-[1.7]" style={{ fontSize: 'clamp(1rem, 1.25vw, 1.4rem)' }}>
              Full disclosure of substrate components and functional additives. No proprietary chemicals requiring confidential business information protection.
            </p>
          </motion.div>

          <div className="space-y-[4vh]">
            {[
              {
                component: "Base substrate",
                material: "Virgin kraft pulp (FSC-certified)",
                percentage: "~92% by weight",
                function: "Structural integrity, moisture retention baseline",
                regulatory: "REACH registered, no SVHCs"
              },
              {
                component: "Functional layer",
                material: "Microstructured cellulose derivative",
                percentage: "~6% by weight",
                function: "Controlled gas permeability, ethylene management",
                regulatory: "Food contact approved (EU positive list, FDA FCN)"
              },
              {
                component: "Binder system",
                material: "Modified starch",
                percentage: "~2% by weight",
                function: "Layer adhesion, structural stability",
                regulatory: "Generally Recognized as Safe (GRAS), E1400 series"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#f8f8f8] rounded-2xl p-[5vh] md:p-[6vh]"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-[2vh] mb-[3vh]">
                  <h3 className="text-[#026448] leading-[1.2]" style={{ fontSize: 'clamp(1.3rem, 1.6vw, 1.9rem)', fontWeight: 700 }}>
                    {item.component}
                  </h3>
                  <div className="text-[#1a1a1a] leading-none" style={{ fontSize: 'clamp(1.5rem, 2vw, 2.5rem)', fontWeight: 700 }}>
                    {item.percentage}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[3vh] md:gap-[4vw]">
                  <div>
                    <div className="text-[#666] uppercase tracking-wider mb-[1vh]" style={{ fontSize: 'clamp(0.75rem, 0.9vw, 1rem)', fontWeight: 600 }}>
                      Material
                    </div>
                    <div className="text-[#1a1a1a]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.3rem)', fontWeight: 600 }}>
                      {item.material}
                    </div>
                  </div>
                  <div>
                    <div className="text-[#666] uppercase tracking-wider mb-[1vh]" style={{ fontSize: 'clamp(0.75rem, 0.9vw, 1rem)', fontWeight: 600 }}>
                      Function
                    </div>
                    <div className="text-[#4a4a4a] leading-[1.6]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)' }}>
                      {item.function}
                    </div>
                  </div>
                  <div>
                    <div className="text-[#666] uppercase tracking-wider mb-[1vh]" style={{ fontSize: 'clamp(0.75rem, 0.9vw, 1rem)', fontWeight: 600 }}>
                      Regulatory Status
                    </div>
                    <div className="text-[#026448]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)', fontWeight: 600 }}>
                      {item.regulatory}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Compliance */}
      <section className="relative w-full bg-[#026448] px-[5vw] md:px-[8vw] py-[12vh] md:py-[14vh]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-[8vh]"
          >
            <h2 className="text-[#EEFF41] leading-[1.15] mb-[4vh]" style={{ fontSize: 'clamp(2.2rem, 4vw, 5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Biodegradability and end-of-life
            </h2>
            <p className="text-white/90 leading-[1.7] max-w-[900px]" style={{ fontSize: 'clamp(1rem, 1.25vw, 1.4rem)' }}>
              RipeSwitch materials are designed for fiber recycling compatibility and industrial composting pathways. Biodegradability validated per international standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[5vh] md:gap-[5vw] mb-[8vh]">
            {[
              {
                pathway: "Fiber recycling",
                standard: "EN 13430 (EU), TAPPI UM 200 (US)",
                result: "Compatible",
                detail: "Repulping trials demonstrate full fiber recovery. Functional additives do not interfere with standard recycling processes. Suitable for paper/cardboard recycling streams."
              },
              {
                pathway: "Industrial composting",
                standard: "EN 13432, ASTM D6400",
                result: "Certified",
                detail: "≥90% biodegradation within 180 days under industrial composting conditions. No ecotoxicity detected in plant growth tests. Compostability certification obtained."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur rounded-2xl p-[5vh] md:p-[6vh]"
              >
                <div className="flex items-center gap-3 mb-[3vh]">
                  <Leaf className="w-8 h-8 text-[#EEFF41]" />
                  <div className="inline-block px-3 py-1 bg-[#EEFF41] rounded-full">
                    <span className="text-[#026448] uppercase tracking-wider" style={{ fontSize: 'clamp(0.7rem, 0.85vw, 0.9rem)', fontWeight: 700 }}>
                      {item.result}
                    </span>
                  </div>
                </div>
                <h3 className="text-[#EEFF41] leading-[1.2] mb-[2vh]" style={{ fontSize: 'clamp(1.4rem, 1.7vw, 2rem)', fontWeight: 700 }}>
                  {item.pathway}
                </h3>
                <div className="text-white/70 mb-[2vh]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)', fontWeight: 600 }}>
                  {item.standard}
                </div>
                <p className="text-white/90 leading-[1.7]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.3rem)' }}>
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur rounded-2xl p-[5vh] md:p-[7vh] text-center"
          >
            <h3 className="text-white leading-[1.2] mb-[3vh]" style={{ fontSize: 'clamp(1.5rem, 2vw, 2.5rem)', fontWeight: 700 }}>
              Zero plastic. Zero PFAS. Zero compromise.
            </h3>
            <p className="text-white/90 leading-[1.7] max-w-[700px] mx-auto" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.4rem)' }}>
              RipeSwitch contains no plastic films, PFAS coatings, or synthetic polymers. Performance derives from engineered cellulose architecture, not chemical additives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="relative w-full bg-white px-[5vw] md:px-[8vw] py-[12vh] md:py-[14vh]">
        <div className="max-w-[900px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[#1a1a1a] leading-[1.15] mb-[4vh]" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 5.5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Regulatory clarity by design
            </h2>
            <p className="text-[#4a4a4a] leading-[1.8]" style={{ fontSize: 'clamp(1.05rem, 1.3vw, 1.5rem)' }}>
              RipeSwitch compliance strategy prioritizes material transparency and alignment with existing regulatory frameworks. By avoiding novel chemical additives and relying on approved food-contact substances, the technology enables deployment without extended approval timelines or market-specific reformulation.
            </p>
          </motion.div>
        </div>
      </section>
    </WhitePaperDetailWrapper>
  );
}
