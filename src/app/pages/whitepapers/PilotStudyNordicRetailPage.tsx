import { motion } from "motion/react";
import { WhitePaperDetailWrapper } from "../../components/WhitePaperDetailWrapper";
import { BarChart3, TrendingDown, Store, Users } from "lucide-react";

export function PilotStudyNordicRetailPage() {
  return (
    <WhitePaperDetailWrapper
      title="Pilot Study Results: Nordic Retail Chain"
      type="Case Study"
      date="October 2025"
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
                12-Week Pilot Study
              </span>
            </div>
            <h2 className="text-[#1a1a1a] leading-[1.1] mb-[4vh]" style={{ fontSize: 'clamp(2.5rem, 5vw, 6.5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Real-world validation across 85 stores
            </h2>
            <div className="text-[#4a4a4a] leading-[1.8] space-y-[3vh]" style={{ fontSize: 'clamp(1.05rem, 1.3vw, 1.5rem)' }}>
              <p>
                From September to November 2025, a Nordic grocery chain with 85 stores across Finland and Sweden deployed RipeSwitch packaging for bananas and avocados. This pilot assessed operational integration, shrink impact, and consumer acceptance in a live retail environment.
              </p>
              <p>
                <strong>Key outcome:</strong> 22% average shrink reduction with positive consumer feedback and minimal operational friction.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pilot Design */}
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
              Pilot methodology
            </h2>
            <p className="text-[#4a4a4a] leading-[1.7] max-w-[800px]" style={{ fontSize: 'clamp(1rem, 1.25vw, 1.4rem)' }}>
              Controlled deployment with standardized tracking across treatment and control groups to isolate packaging impact from seasonal and operational variables.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[5vh] md:gap-[5vw]">
            {[
              {
                icon: Store,
                title: "Store cohorts",
                metrics: [
                  "Treatment group: 45 stores with RipeSwitch packaging",
                  "Control group: 40 stores with conventional packaging",
                  "Matched by store size, geographic distribution, customer demographics"
                ]
              },
              {
                icon: BarChart3,
                title: "Data collection",
                metrics: [
                  "Daily shrink tracking via POS and inventory systems",
                  "Weekly quality assessments (firmness, visual defects)",
                  "Customer intercept surveys (n=1,847 across 12 weeks)",
                  "Store team operational feedback (structured interviews)"
                ]
              },
              {
                icon: TrendingDown,
                title: "Primary KPIs",
                metrics: [
                  "Shrink rate (units discarded / units received)",
                  "Display life (days to overripe state)",
                  "Consumer acceptance (purchase intent, satisfaction)",
                  "Operational ease (staff training time, workflow disruption)"
                ]
              },
              {
                icon: Users,
                title: "Product scope",
                metrics: [
                  "Bananas: 100% of volume in treatment stores",
                  "Avocados: 100% of volume in treatment stores",
                  "Control categories: Maintained standard packaging for comparison baseline"
                ]
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
                    <h3 className="text-[#1a1a1a] leading-[1.2]" style={{ fontSize: 'clamp(1.3rem, 1.6vw, 1.9rem)', fontWeight: 700 }}>
                      {item.title}
                    </h3>
                  </div>
                  <ul className="space-y-[2vh]">
                    {item.metrics.map((metric, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[#4a4a4a]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.3rem)' }}>
                        <span className="text-[#026448] font-bold">→</span>
                        <span className="leading-[1.6]">{metric}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Results */}
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
              Quantitative outcomes
            </h2>
            <p className="text-[#4a4a4a] leading-[1.7] max-w-[800px]" style={{ fontSize: 'clamp(1rem, 1.25vw, 1.4rem)' }}>
              Treatment stores demonstrated measurable shrink reduction and extended display life compared to control group across both product categories.
            </p>
          </motion.div>

          {/* Bananas Results */}
          <div className="mb-[10vh]">
            <h3 className="text-[#026448] uppercase tracking-wider mb-[4vh]" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.4rem)', fontWeight: 700 }}>
              Bananas (Cavendish variety)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[4vh] md:gap-[4vw]">
              {[
                {
                  metric: "Shrink rate",
                  control: "11.2%",
                  treatment: "8.6%",
                  improvement: "23% reduction",
                  significance: "p < 0.001"
                },
                {
                  metric: "Display life",
                  control: "4.1 days",
                  treatment: "5.8 days",
                  improvement: "+1.7 days",
                  significance: "p < 0.001"
                },
                {
                  metric: "Markdown rate",
                  control: "18.4%",
                  treatment: "12.1%",
                  improvement: "34% reduction",
                  significance: "p < 0.01"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className="bg-[#f8f8f8] rounded-2xl p-[5vh]"
                >
                  <div className="text-[#666] uppercase tracking-wider mb-[2vh]" style={{ fontSize: 'clamp(0.8rem, 0.95vw, 1.1rem)', fontWeight: 600 }}>
                    {item.metric}
                  </div>
                  <div className="grid grid-cols-2 gap-[2vw] mb-[3vh]">
                    <div>
                      <div className="text-[#999] mb-[0.5vh]" style={{ fontSize: 'clamp(0.75rem, 0.9vw, 1rem)' }}>Control</div>
                      <div className="text-[#4a4a4a] leading-none" style={{ fontSize: 'clamp(1.5rem, 2vw, 2.5rem)', fontWeight: 700 }}>
                        {item.control}
                      </div>
                    </div>
                    <div>
                      <div className="text-[#999] mb-[0.5vh]" style={{ fontSize: 'clamp(0.75rem, 0.9vw, 1rem)' }}>Treatment</div>
                      <div className="text-[#026448] leading-none" style={{ fontSize: 'clamp(1.5rem, 2vw, 2.5rem)', fontWeight: 700 }}>
                        {item.treatment}
                      </div>
                    </div>
                  </div>
                  <div className="pt-[2vh] border-t border-[#e0e0e0]">
                    <div className="text-[#026448] mb-[0.5vh]" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.4rem)', fontWeight: 700 }}>
                      {item.improvement}
                    </div>
                    <div className="text-[#666]" style={{ fontSize: 'clamp(0.8rem, 0.95vw, 1.1rem)' }}>
                      {item.significance}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Avocados Results */}
          <div>
            <h3 className="text-[#026448] uppercase tracking-wider mb-[4vh]" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.4rem)', fontWeight: 700 }}>
              Avocados (Hass variety)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[4vh] md:gap-[4vw]">
              {[
                {
                  metric: "Shrink rate",
                  control: "13.8%",
                  treatment: "10.9%",
                  improvement: "21% reduction",
                  significance: "p < 0.01"
                },
                {
                  metric: "Display life",
                  control: "3.2 days",
                  treatment: "4.6 days",
                  improvement: "+1.4 days",
                  significance: "p < 0.001"
                },
                {
                  metric: "Consumer complaints",
                  control: "8.2 per week",
                  treatment: "3.1 per week",
                  improvement: "62% reduction",
                  significance: "p < 0.05"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className="bg-[#f8f8f8] rounded-2xl p-[5vh]"
                >
                  <div className="text-[#666] uppercase tracking-wider mb-[2vh]" style={{ fontSize: 'clamp(0.8rem, 0.95vw, 1.1rem)', fontWeight: 600 }}>
                    {item.metric}
                  </div>
                  <div className="grid grid-cols-2 gap-[2vw] mb-[3vh]">
                    <div>
                      <div className="text-[#999] mb-[0.5vh]" style={{ fontSize: 'clamp(0.75rem, 0.9vw, 1rem)' }}>Control</div>
                      <div className="text-[#4a4a4a] leading-none" style={{ fontSize: 'clamp(1.5rem, 2vw, 2.5rem)', fontWeight: 700 }}>
                        {item.control}
                      </div>
                    </div>
                    <div>
                      <div className="text-[#999] mb-[0.5vh]" style={{ fontSize: 'clamp(0.75rem, 0.9vw, 1rem)' }}>Treatment</div>
                      <div className="text-[#026448] leading-none" style={{ fontSize: 'clamp(1.5rem, 2vw, 2.5rem)', fontWeight: 700 }}>
                        {item.treatment}
                      </div>
                    </div>
                  </div>
                  <div className="pt-[2vh] border-t border-[#e0e0e0]">
                    <div className="text-[#026448] mb-[0.5vh]" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.4rem)', fontWeight: 700 }}>
                      {item.improvement}
                    </div>
                    <div className="text-[#666]" style={{ fontSize: 'clamp(0.8rem, 0.95vw, 1.1rem)' }}>
                      {item.significance}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Consumer Acceptance */}
      <section className="relative w-full bg-[#026448] px-[5vw] md:px-[8vw] py-[12vh] md:py-[14vh]">
        <div className="max-w-[1000px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-[8vh]"
          >
            <h2 className="text-[#EEFF41] leading-[1.15] mb-[4vh]" style={{ fontSize: 'clamp(2.2rem, 4vw, 5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Consumer acceptance
            </h2>
            <p className="text-white/90 leading-[1.7]" style={{ fontSize: 'clamp(1rem, 1.25vw, 1.4rem)' }}>
              Customer intercept surveys (n=1,847) measured awareness, purchase behavior, and satisfaction. Packaging change had minimal visibility but positive quality perception.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[5vh] md:gap-[5vw] mb-[8vh]">
            {[
              {
                finding: "Packaging awareness",
                percentage: "12%",
                insight: "Most consumers did not notice packaging change, indicating seamless visual integration with existing retail environment."
              },
              {
                finding: "Product quality rating",
                percentage: "+18%",
                insight: "Treatment stores showed higher satisfaction scores for fruit quality and freshness compared to control group baseline."
              },
              {
                finding: "Repeat purchase intent",
                percentage: "94%",
                insight: "No negative impact on repurchase behavior. Consumers who noticed packaging expressed positive environmental sentiment."
              },
              {
                finding: "Sustainability preference",
                percentage: "73%",
                insight: "When informed about fiber-based packaging, consumers indicated willingness to choose over plastic alternatives."
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
                <div className="text-[#EEFF41] uppercase tracking-wider mb-[2vh]" style={{ fontSize: 'clamp(0.8rem, 0.95vw, 1.1rem)', fontWeight: 700 }}>
                  {item.finding}
                </div>
                <div className="text-white leading-none mb-[3vh]" style={{ fontSize: 'clamp(3rem, 5vw, 6rem)', fontWeight: 700 }}>
                  {item.percentage}
                </div>
                <p className="text-white/90 leading-[1.7]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.3rem)' }}>
                  {item.insight}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Integration */}
      <section className="relative w-full bg-[#f8f8f8] px-[5vw] md:px-[8vw] py-[12vh] md:py-[14vh]">
        <div className="max-w-[1000px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-[8vh]"
          >
            <h2 className="text-[#1a1a1a] leading-[1.15] mb-[4vh]" style={{ fontSize: 'clamp(2.2rem, 4vw, 5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Operational learnings
            </h2>
            <p className="text-[#4a4a4a] leading-[1.7]" style={{ fontSize: 'clamp(1rem, 1.25vw, 1.4rem)' }}>
              Store team feedback highlighted minimal workflow disruption and rapid adoption of packaging protocols.
            </p>
          </motion.div>

          <div className="space-y-[4vh]">
            {[
              {
                topic: "Training requirements",
                feedback: "Average 45-minute training session per store team. Staff reported confidence in packaging mode recognition within one week of deployment.",
                recommendation: "Include visual quick-reference guide at receiving dock. No specialized handling equipment required."
              },
              {
                topic: "Workflow integration",
                feedback: "Packaging arrival in HOLD mode enabled flexible back-room storage. Transition to READY mode before display required minimal effort.",
                recommendation: "Align delivery schedules with display rotation cycles to optimize mode transitions."
              },
              {
                topic: "Shrink tracking",
                feedback: "Existing POS and inventory systems captured packaging impact without modification. Store managers noted improved visibility into ripening-related loss.",
                recommendation: "Maintain weekly shrink reporting to identify category-specific optimization opportunities."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-[5vh] md:p-[6vh]"
              >
                <h3 className="text-[#026448] leading-[1.2] mb-[3vh]" style={{ fontSize: 'clamp(1.3rem, 1.6vw, 1.9rem)', fontWeight: 700 }}>
                  {item.topic}
                </h3>
                <div className="space-y-[2vh]">
                  <div>
                    <div className="text-[#666] uppercase tracking-wider mb-[1vh]" style={{ fontSize: 'clamp(0.75rem, 0.9vw, 1rem)', fontWeight: 600 }}>
                      Staff Feedback
                    </div>
                    <p className="text-[#4a4a4a] leading-[1.7]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.3rem)' }}>
                      {item.feedback}
                    </p>
                  </div>
                  <div className="pt-[2vh] border-t border-[#e0e0e0]">
                    <div className="text-[#666] uppercase tracking-wider mb-[1vh]" style={{ fontSize: 'clamp(0.75rem, 0.9vw, 1rem)', fontWeight: 600 }}>
                      Recommendation
                    </div>
                    <p className="text-[#026448] leading-[1.7]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.3rem)', fontWeight: 600 }}>
                      {item.recommendation}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              Validated in real retail conditions
            </h2>
            <p className="text-[#4a4a4a] leading-[1.8] mb-[4vh]" style={{ fontSize: 'clamp(1.05rem, 1.3vw, 1.5rem)' }}>
              This 12-week pilot demonstrates that RipeSwitch delivers measurable shrink reduction across diverse store formats and operational contexts. The technology integrates with existing retail workflows without requiring specialized equipment, new IT systems, or extensive staff retraining.
            </p>
            <p className="text-[#4a4a4a] leading-[1.8]" style={{ fontSize: 'clamp(1.05rem, 1.3vw, 1.5rem)' }}>
              Consumer acceptance data confirms that functional performance improvements translate to quality perception gains without negative packaging visibility. Results support broader deployment across European retail operations.
            </p>
          </motion.div>
        </div>
      </section>
    </WhitePaperDetailWrapper>
  );
}
