import { motion } from "motion/react";
import { WhitePaperDetailWrapper } from "../../components/WhitePaperDetailWrapper";
import { TrendingUp, DollarSign, Percent, ShoppingCart } from "lucide-react";

export function EconomicImpactAssessmentPage() {
  return (
    <WhitePaperDetailWrapper
      title="Technical-Economic Performance Modeling (Non-Confidential)"
      type="Performance Modeling"
      date="December 2025"
      path="/research/economic-impact-assessment"
      description="Model-based economic analysis derived from shrink-rate simulations, category-average loss data, and observed handling conditions."
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
                Overview
              </span>
            </div>
            <h2 className="text-[#1a1a1a] leading-[1.1] mb-[4vh]" style={{ fontSize: 'clamp(2.5rem, 5vw, 6.5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Technical-economic modeling for retail shrink recovery
            </h2>
            <div className="text-[#4a4a4a] leading-[1.8] space-y-[3vh]" style={{ fontSize: 'clamp(1.05rem, 1.3vw, 1.5rem)' }}>
              <p>
                This section presents a model-based economic analysis derived from shrink-rate simulations, category-average loss data, and observed handling conditions. The model is intended to support pilot design, hypothesis testing, and validation planning.
              </p>
              <p>
                It does not present commercial guarantees. Results are illustrative and will be validated through controlled pilots and independent measurements.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Model Inputs */}
      <section className="relative w-full bg-[#f8f8f8] px-[5vw] md:px-[8vw] py-[12vh] md:py-[14vh]">
        <div className="max-w-[1100px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-[8vh]"
          >
            <h2 className="text-[#1a1a1a] leading-[1.15] mb-[4vh]" style={{ fontSize: 'clamp(2.2rem, 4vw, 5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Model inputs (adjustable parameters)
            </h2>
            <p className="text-[#4a4a4a] leading-[1.7] max-w-[850px]" style={{ fontSize: 'clamp(1rem, 1.25vw, 1.4rem)' }}>
              Inputs are adjustable to reflect retailer scale, category mix, and assumed shrink dynamics. Values used here are illustrative.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[5vh] md:gap-[5vw]">
            {[
              {
                icon: DollarSign,
                title: "Annual retailer turnover (€)",
                detail: "Adjustable based on enterprise scale"
              },
              {
                icon: ShoppingCart,
                title: "Produce share of revenue (%)",
                detail: "Category mix and merchandising profile"
              },
              {
                icon: Percent,
                title: "Baseline shrink rate (%)",
                detail: "Category-average loss assumptions"
              },
              {
                icon: TrendingUp,
                title: "Target shrink delta (%)",
                detail: "Modeled reduction range under ripening control"
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
                  </div>
                  <h3 className="text-[#1a1a1a] leading-[1.2] mb-[1.5vh]" style={{ fontSize: 'clamp(1.3rem, 1.6vw, 1.9rem)', fontWeight: 700 }}>
                    {item.title}
                  </h3>
                  <p className="text-[#666] leading-[1.6]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.3rem)' }}>
                    {item.detail}
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
              Shrink sensitivity model (illustrative)
            </h2>
            <p className="text-[#4a4a4a] leading-[1.7] max-w-[900px]" style={{ fontSize: 'clamp(1rem, 1.25vw, 1.4rem)' }}>
              Scenario outputs are modeled using adjustable parameters and are intended to explore sensitivity, not to project commercial guarantees.
            </p>
          </motion.div>

          <div className="space-y-[5vh]">
            {[
              {
                scenario: "Conservative",
                shrinkReduction: "18%",
                netMarginGain: "€1.8M annually",
                roi: "3.4x",
                description: "Modeled coverage limited to high-velocity SKUs (bananas, avocados).",
                assumptions: "50% of produce volume modeled, 18% reduction in covered categories"
              },
              {
                scenario: "Moderate",
                shrinkReduction: "24%",
                netMarginGain: "€3.2M annually",
                roi: "3.8x",
                description: "Modeled expansion to additional climacteric categories.",
                assumptions: "70% of produce volume modeled, 24% reduction with operational integration"
              },
              {
                scenario: "Comprehensive",
                shrinkReduction: "31%",
                netMarginGain: "€4.9M annually",
                roi: "4.2x",
                description: "Modeled full climacteric coverage with upstream coordination assumptions.",
                assumptions: "85% of produce volume modeled, enhanced reduction through upstream coordination"
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
                        Modeled Return
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
                  <strong>Modeling assumptions (illustrative):</strong> {scenario.assumptions}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Derived Outputs */}
      <section className="relative w-full bg-[#f8f8f8] px-[5vw] md:px-[8vw] py-[12vh] md:py-[14vh]">
        <div className="max-w-[1000px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[#1a1a1a] leading-[1.15] mb-[6vh]" style={{ fontSize: 'clamp(2.2rem, 4vw, 5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Derived outputs
            </h2>
            <div className="space-y-[3vh] text-[#4a4a4a]" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.35rem)' }}>
              <div>Annual shrink exposure (€)</div>
              <div>Modeled loss reduction (€)</div>
              <div>Net margin recovery (€)</div>
              <div>Payback period (months)</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interpretation */}
      <section className="relative w-full bg-[#026448] px-[5vw] md:px-[8vw] py-[12vh] md:py-[14vh]">
        <div className="max-w-[1000px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[#EEFF41] leading-[1.15] mb-[6vh]" style={{ fontSize: 'clamp(2.2rem, 4vw, 5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Interpretation
            </h2>
            <div className="space-y-[4vh]">
              {[
                {
                  title: "Non-linear margin effects",
                  content: "Small reductions in shrink (2–5 percentage points) can produce disproportionate margin effects due to the low-margin nature of fresh produce."
                },
                {
                  title: "Cost boundary conditions",
                  content: "Modeled outcomes indicate that packaging interventions operating below ~1.5% of produce revenue can materially affect profitability."
                },
                {
                  title: "Pricing pressure relief",
                  content: "By reducing shrink-driven margin erosion, retailers face less pressure to recover losses through price increases, particularly in high-waste produce categories."
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

      {/* Model Scope */}
      <section className="relative w-full bg-white px-[5vw] md:px-[8vw] py-[12vh] md:py-[14vh]">
        <div className="max-w-[900px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[#1a1a1a] leading-[1.15] mb-[4vh]" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 5.5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Model scope
            </h2>
            <p className="text-[#4a4a4a] leading-[1.8]" style={{ fontSize: 'clamp(1.05rem, 1.3vw, 1.5rem)' }}>
              This analysis is based on public shrink benchmarks, simulated ripening behavior, and category-average handling assumptions. Actual results depend on produce mix, logistics conditions, and store-level practices and will be validated through controlled pilots.
            </p>
          </motion.div>
        </div>
      </section>
    </WhitePaperDetailWrapper>
  );
}
