import { motion } from "motion/react";
import { WhitePaperDetailWrapper } from "../../components/WhitePaperDetailWrapper";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { TrendingUp, DollarSign, Percent, ShoppingCart } from "lucide-react";

export function EconomicImpactAssessmentPage() {
  return (
    <WhitePaperDetailWrapper
      title="Economic Impact Assessment: Retail Produce Shrink Mitigation"
      type="Industry Report"
      date="December 2025"
      path="/research/economic-impact-assessment"
      description="Quantitative modelling of produce shrink reduction and margin sensitivity under retail conditions."
    >
      {/* Executive Summary */}
      <section className="relative w-full bg-white px-[5vw] md:px-[8vw] py-[12vh] md:py-[14vh]">
        <div className="max-w-[1000px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-5 py-2 bg-[#EEFF41] rounded-full mb-[4vh]">
              <span className="text-[#026448] tracking-wider uppercase" style={{ fontSize: 'clamp(0.75rem, 0.9vw, 1rem)', fontWeight: 600 }}>
                Executive Summary
              </span>
            </div>
            <h2 className="text-[#1a1a1a] leading-[1.1] mb-[4vh]" style={{ fontSize: 'clamp(2.5rem, 5vw, 6.5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Quantifying the margin recovery opportunity
            </h2>
            <div className="text-[#4a4a4a] leading-[1.8] space-y-[3vh]" style={{ fontSize: 'clamp(1.05rem, 1.3vw, 1.5rem)' }}>
              <p>
                Produce shrink represents a structural margin leak in European retail operations. Current industry average shrink rates range from 8–14% for climacteric fruit categories, translating to €2.3B in annual margin erosion across EU grocery retail.
              </p>
              <p>
                This assessment quantifies the economic impact of deploying active ripening control technology at scale, modeling margin recovery scenarios across diverse operational contexts.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Current State Analysis */}
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
              Baseline shrink economics
            </h2>
            <p className="text-[#4a4a4a] leading-[1.7] max-w-[800px]" style={{ fontSize: 'clamp(1rem, 1.25vw, 1.4rem)' }}>
              Industry data reveals shrink is concentrated in specific loss vectors, each with distinct cost structures and intervention opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[5vh] md:gap-[5vw]">
            {[
              {
                icon: ShoppingCart,
                title: "Store-level shrink",
                percentage: "8-12%",
                detail: "Average shrink for bananas, avocados, stone fruit in standard retail environment",
                drivers: "Display degradation, consumer handling, overripe markdowns"
              },
              {
                icon: TrendingUp,
                title: "Back-room loss",
                percentage: "15-22%",
                detail: "Additional loss in receiving and storage before reaching shelf",
                drivers: "Delayed rotation, inadequate temperature control, batch ripening misalignment"
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
                  <div className="flex items-center gap-4 mb-[3vh]">
                    <div className="w-14 h-14 rounded-full bg-[#026448]/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-[#026448]" />
                    </div>
                    <div className="text-[#026448] leading-none" style={{ fontSize: 'clamp(2.5rem, 3.5vw, 4rem)', fontWeight: 700 }}>
                      {item.percentage}
                    </div>
                  </div>
                  <h3 className="text-[#1a1a1a] leading-[1.2] mb-[2vh]" style={{ fontSize: 'clamp(1.4rem, 1.7vw, 2rem)', fontWeight: 700 }}>
                    {item.title}
                  </h3>
                  <p className="text-[#026448] leading-[1.6] mb-[2vh]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.3rem)', fontWeight: 600 }}>
                    {item.detail}
                  </p>
                  <p className="text-[#666] leading-[1.6]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)' }}>
                    <strong>Key drivers:</strong> {item.drivers}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Intervention Scenarios */}
      <section className="relative w-full bg-white px-[5vw] md:px-[8vw] py-[12vh] md:py-[14vh]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-[10vh]"
          >
            <h2 className="text-[#1a1a1a] leading-[1.15] mb-[4vh]" style={{ fontSize: 'clamp(2.2rem, 4vw, 5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Margin recovery modeling
            </h2>
            <p className="text-[#4a4a4a] leading-[1.7] max-w-[900px]" style={{ fontSize: 'clamp(1rem, 1.25vw, 1.4rem)' }}>
              Three deployment scenarios modeled across a representative 150-store European retail chain with €280M annual produce revenue. Analysis assumes baseline 11% shrink rate and €0.08/unit RipeSwitch packaging cost increment.
            </p>
          </motion.div>

          <div className="space-y-[5vh]">
            {[
              {
                scenario: "Conservative",
                shrinkReduction: "18%",
                netMarginGain: "€1.8M annually",
                roi: "340%",
                description: "Deployment limited to high-velocity SKUs (bananas, avocados). HOLD mode in distribution, READY mode on shelf.",
                assumptions: "50% of produce volume covered, 18% shrink reduction in covered categories"
              },
              {
                scenario: "Moderate",
                shrinkReduction: "24%",
                netMarginGain: "€3.2M annually",
                roi: "380%",
                description: "Extended to stone fruit and pears. Optimized rotation protocols aligned with packaging modes.",
                assumptions: "70% of produce volume covered, 24% shrink reduction with operational integration"
              },
              {
                scenario: "Comprehensive",
                shrinkReduction: "31%",
                netMarginGain: "€4.9M annually",
                roi: "420%",
                description: "Full climacteric fruit coverage plus supply chain coordination with distributor partners.",
                assumptions: "85% of produce volume covered, enhanced reduction through upstream coordination"
              }
            ].map((scenario, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="bg-[#f8f8f8] rounded-2xl p-[5vh] md:p-[7vh] border-l-4 border-[#026448]"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-[3vh] mb-[3vh]">
                  <div>
                    <h3 className="text-[#026448] uppercase tracking-wider mb-[1vh]" style={{ fontSize: 'clamp(0.85rem, 1vw, 1.15rem)', fontWeight: 700 }}>
                      {scenario.scenario} Scenario
                    </h3>
                    <div className="text-[#1a1a1a] leading-none" style={{ fontSize: 'clamp(2rem, 3vw, 3.5rem)', fontWeight: 700 }}>
                      {scenario.netMarginGain}
                    </div>
                  </div>
                  <div className="flex gap-[4vw]">
                    <div>
                      <div className="text-[#666] uppercase tracking-wider mb-[0.5vh]" style={{ fontSize: 'clamp(0.75rem, 0.9vw, 1rem)', fontWeight: 600 }}>
                        Shrink Reduction
                      </div>
                      <div className="text-[#026448] leading-none" style={{ fontSize: 'clamp(1.8rem, 2.5vw, 3rem)', fontWeight: 700 }}>
                        {scenario.shrinkReduction}
                      </div>
                    </div>
                    <div>
                      <div className="text-[#666] uppercase tracking-wider mb-[0.5vh]" style={{ fontSize: 'clamp(0.75rem, 0.9vw, 1rem)', fontWeight: 600 }}>
                        ROI
                      </div>
                      <div className="text-[#026448] leading-none" style={{ fontSize: 'clamp(1.8rem, 2.5vw, 3rem)', fontWeight: 700 }}>
                        {scenario.roi}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-[#4a4a4a] leading-[1.7] mb-[2vh]" style={{ fontSize: 'clamp(1rem, 1.15vw, 1.3rem)' }}>
                  {scenario.description}
                </p>
                <p className="text-[#666] leading-[1.6]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)' }}>
                  <strong>Modeling assumptions:</strong> {scenario.assumptions}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Pathways */}
      <section className="relative w-full bg-[#026448] px-[5vw] md:px-[8vw] py-[12vh] md:py-[14vh]">
        <div className="max-w-[1000px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[#EEFF41] leading-[1.15] mb-[6vh]" style={{ fontSize: 'clamp(2.2rem, 4vw, 5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Deployment considerations
            </h2>
            <div className="space-y-[4vh]">
              {[
                {
                  title: "Supply chain integration",
                  content: "Maximum value capture requires coordination between distributor partners and retail operations. HOLD mode deployment in transit reduces back-room shrink; READY mode on retail floor optimizes display life."
                },
                {
                  title: "Operational training",
                  content: "Store teams require training on packaging mode transitions and rotation protocols. Pilot data shows 2-week ramp-up period for operational proficiency."
                },
                {
                  title: "Category prioritization",
                  content: "Highest ROI in high-shrink, high-velocity categories. Bananas and avocados show fastest payback; stone fruit and pears deliver strong secondary returns."
                },
                {
                  title: "Consumer communication",
                  content: "Minimal consumer-facing messaging required. Packaging appears as standard paper; functional benefits manifest as improved product quality and availability."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border-l-2 border-[#EEFF41] pl-[4vw]"
                >
                  <h3 className="text-[#EEFF41] leading-[1.2] mb-[2vh]" style={{ fontSize: 'clamp(1.3rem, 1.6vw, 1.9rem)', fontWeight: 700 }}>
                    {item.title}
                  </h3>
                  <p className="text-white/90 leading-[1.7]" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.4rem)' }}>
                    {item.content}
                  </p>
                </motion.div>
              ))}
            </div>
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
              A margin lever, not a cost item
            </h2>
            <p className="text-[#4a4a4a] leading-[1.8]" style={{ fontSize: 'clamp(1.05rem, 1.3vw, 1.5rem)' }}>
              RipeSwitch deployment delivers 3–4× ROI in conservative scenarios through direct shrink reduction. When integrated with optimized rotation protocols and supply chain coordination, margin recovery scales significantly. The technology converts a persistent operational loss into a controllable variable with measurable financial impact.
            </p>
          </motion.div>
        </div>
      </section>
    </WhitePaperDetailWrapper>
  );
}
