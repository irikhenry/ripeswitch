import { useState } from "react";
import { motion } from "motion/react";
import { Navigation } from "../components/Navigation";

// Shrink Sensitivity Model Component (formerly EconomicCalculator)
function ShrinkSensitivityModel() {
  const [annualRevenue, setAnnualRevenue] = useState(500); // Million €
  const [produceShare, setProduceShare] = useState(12); // % of revenue
  const [currentShrink, setCurrentShrink] = useState(7); // %
  const [shrinkReduction, setShrinkReduction] = useState(25); // %
  const [packagingCost, setPackagingCost] = useState(1.2); // % of produce revenue
  
  // Calculations
  const produceRevenue = annualRevenue * (produceShare / 100);
  const currentShrinkLoss = produceRevenue * (currentShrink / 100);
  const newShrinkRate = currentShrink * (1 - shrinkReduction / 100);
  const newShrinkLoss = produceRevenue * (newShrinkRate / 100);
  const grossMarginRecovery = currentShrinkLoss - newShrinkLoss;
  const packagingSystemCost = produceRevenue * (packagingCost / 100);
  const netMarginRecovery = grossMarginRecovery - packagingSystemCost;
  const paybackMonths = packagingSystemCost > 0 ? (packagingSystemCost / (grossMarginRecovery / 12)) : 0;
  
  // Scenario label helper
  const getScenarioLabel = (reduction: number) => {
    if (reduction <= 15) return "Conservative boundary";
    if (reduction <= 30) return "Target pilot range";
    return "High-performance scenario";
  };

  return (
    <div className="w-full">
      {/* Model Title */}
      <motion.div
        className="text-center mb-[6vh] md:mb-[8vh]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-block px-5 py-2 bg-[#EEFF41] rounded-full mb-[3vh]">
          <span className="text-[#026448] tracking-wider uppercase" style={{ fontSize: 'clamp(0.7rem, 0.85vw, 0.95rem)', fontWeight: 700 }}>
            Interactive Model
          </span>
        </div>
        <h2 className="text-[#EEFF41] leading-[1.1] mb-[3vh]" style={{ fontSize: 'clamp(2.2rem, 4vw, 4.8rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
          Shrink Sensitivity Model
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[6vh] lg:gap-[6vw]">
        {/* Left - Model Inputs (Adjustable Parameters) */}
        <motion.div
          className="bg-white/10 backdrop-blur-sm rounded-3xl p-[5vh] md:p-[6vh] border border-white/20"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-white leading-[1.2] mb-[1.5vh]" style={{ fontSize: 'clamp(1.3rem, 1.8vw, 2.2rem)', fontWeight: 700 }}>
            Model Inputs
          </h3>
          <p className="text-white/60 mb-[4vh]" style={{ fontSize: 'clamp(0.85rem, 0.95vw, 1.05rem)' }}>
            Adjustable Parameters
          </p>

          {/* Annual Revenue Slider */}
          <div className="mb-[4vh]">
            <div className="flex items-baseline justify-between mb-[2vh]">
              <label className="text-white/80" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)', fontWeight: 500 }}>
                Annual retailer turnover
              </label>
              <span className="text-[#EEFF41] font-bold" style={{ fontSize: 'clamp(1.05rem, 1.25vw, 1.5rem)' }}>
                €{annualRevenue}M
              </span>
            </div>
            <input
              type="range"
              min="100"
              max="2000"
              step="50"
              value={annualRevenue}
              onChange={(e) => setAnnualRevenue(Number(e.target.value))}
              className="w-full h-3 bg-white/20 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#EEFF41] [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#EEFF41] [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
            />
            <div className="flex justify-between text-white/50 text-xs mt-1">
              <span>€100M</span>
              <span>€2B</span>
            </div>
          </div>

          {/* Produce Share Slider */}
          <div className="mb-[4vh]">
            <div className="flex items-baseline justify-between mb-[2vh]">
              <label className="text-white/80" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)', fontWeight: 500 }}>
                Produce share of revenue
              </label>
              <span className="text-[#EEFF41] font-bold" style={{ fontSize: 'clamp(1.05rem, 1.25vw, 1.5rem)' }}>
                {produceShare}%
              </span>
            </div>
            <input
              type="range"
              min="5"
              max="20"
              step="0.5"
              value={produceShare}
              onChange={(e) => setProduceShare(Number(e.target.value))}
              className="w-full h-3 bg-white/20 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#EEFF41] [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#EEFF41] [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
            />
            <div className="flex justify-between text-white/50 text-xs mt-1">
              <span>5%</span>
              <span>20%</span>
            </div>
          </div>

          {/* Baseline Shrink Slider */}
          <div className="mb-[4vh]">
            <div className="flex items-baseline justify-between mb-[2vh]">
              <label className="text-white/80" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)', fontWeight: 500 }}>
                Baseline shrink rate
              </label>
              <span className="text-[#EEFF41] font-bold" style={{ fontSize: 'clamp(1.05rem, 1.25vw, 1.5rem)' }}>
                {currentShrink}%
              </span>
            </div>
            <input
              type="range"
              min="3"
              max="15"
              step="0.5"
              value={currentShrink}
              onChange={(e) => setCurrentShrink(Number(e.target.value))}
              className="w-full h-3 bg-white/20 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#EEFF41] [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#EEFF41] [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
            />
            <div className="flex justify-between text-white/50 text-xs mt-1">
              <span>3%</span>
              <span>15%</span>
            </div>
          </div>

          {/* Target Shrink Delta Slider */}
          <div className="mb-[4vh]">
            <div className="flex items-baseline justify-between mb-[2vh]">
              <label className="text-white/80" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)', fontWeight: 500 }}>
                Target shrink delta
              </label>
              <span className="text-[#EEFF41] font-bold" style={{ fontSize: 'clamp(1.05rem, 1.25vw, 1.5rem)' }}>
                {shrinkReduction}%
              </span>
            </div>
            <div className="text-white/50 mb-[1.5vh]" style={{ fontSize: 'clamp(0.75rem, 0.85vw, 0.95rem)' }}>
              {getScenarioLabel(shrinkReduction)}
            </div>
            <input
              type="range"
              min="5"
              max="40"
              step="5"
              value={shrinkReduction}
              onChange={(e) => setShrinkReduction(Number(e.target.value))}
              className="w-full h-3 bg-white/20 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#EEFF41] [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#EEFF41] [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
            />
            <div className="flex justify-between text-white/50 text-xs mt-1">
              <span>5%</span>
              <span>40%</span>
            </div>
          </div>

          {/* Packaging System Cost Slider */}
          <div className="mb-[4vh]">
            <div className="flex items-baseline justify-between mb-[2vh]">
              <label className="text-white/80" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)', fontWeight: 500 }}>
                Packaging system cost
              </label>
              <span className="text-[#EEFF41] font-bold" style={{ fontSize: 'clamp(1.05rem, 1.25vw, 1.5rem)' }}>
                {packagingCost}%
              </span>
            </div>
            <div className="text-white/50 mb-[1.5vh]" style={{ fontSize: 'clamp(0.75rem, 0.85vw, 0.95rem)' }}>
              % of produce revenue
            </div>
            <input
              type="range"
              min="0.5"
              max="3"
              step="0.1"
              value={packagingCost}
              onChange={(e) => setPackagingCost(Number(e.target.value))}
              className="w-full h-3 bg-white/20 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#EEFF41] [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#EEFF41] [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
            />
            <div className="flex justify-between text-white/50 text-xs mt-1">
              <span>0.5%</span>
              <span>3%</span>
            </div>
          </div>

          {/* Current vs Target Comparison */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
            <div>
              <div className="text-white/60 text-sm mb-1">Baseline shrink</div>
              <div className="text-white font-bold" style={{ fontSize: 'clamp(1.3rem, 1.6vw, 2rem)' }}>
                {currentShrink.toFixed(1)}%
              </div>
            </div>
            <div>
              <div className="text-white/60 text-sm mb-1">Target shrink</div>
              <div className="text-[#EEFF41] font-bold" style={{ fontSize: 'clamp(1.3rem, 1.6vw, 2rem)' }}>
                {newShrinkRate.toFixed(1)}%
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right - Derived Outputs */}
        <motion.div
          className="flex flex-col gap-[3vh]"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Header */}
          <div>
            <h3 className="text-white leading-[1.2] mb-[1.5vh]" style={{ fontSize: 'clamp(1.3rem, 1.8vw, 2.2rem)', fontWeight: 700 }}>
              Derived Outputs
            </h3>
            <p className="text-white/60" style={{ fontSize: 'clamp(0.85rem, 0.95vw, 1.05rem)' }}>
              Model-based projections
            </p>
          </div>

          {/* Net Margin Recovery */}
          <div className="bg-[#EEFF41] rounded-3xl p-[5vh] md:p-[6vh]">
            <div className="text-[#026448]/70 mb-[2vh]" style={{ fontSize: 'clamp(0.85rem, 1vw, 1.15rem)', fontWeight: 600 }}>
              Net margin recovery
            </div>
            <div className="text-[#026448] leading-none mb-[2vh]" style={{ fontSize: 'clamp(2.8rem, 4.5vw, 5.8rem)', fontWeight: 700 }}>
              €{netMarginRecovery.toFixed(1)}M
            </div>
            <div className="text-[#026448]/70 mb-[1.5vh]" style={{ fontSize: 'clamp(0.8rem, 0.95vw, 1.1rem)' }}>
              €{(netMarginRecovery * 1000000 / 12).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} per month
            </div>
            <div className="text-[#026448] pt-[2vh] border-t border-[#026448]/20" style={{ fontSize: 'clamp(0.8rem, 0.95vw, 1.1rem)', fontWeight: 500 }}>
              Payback period: {paybackMonths.toFixed(1)} months
            </div>
          </div>

          {/* Breakdown Cards */}
          <div className="grid grid-cols-1 gap-[2vh]">
            {/* Annual Shrink Exposure */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-[3vh] md:p-[4vh] border border-white/20">
              <div className="text-white/60 mb-[1vh]" style={{ fontSize: 'clamp(0.8rem, 0.95vw, 1.1rem)', fontWeight: 500 }}>
                Annual shrink exposure (baseline)
              </div>
              <div className="text-white leading-none" style={{ fontSize: 'clamp(1.7rem, 2.4vw, 2.8rem)', fontWeight: 700 }}>
                €{currentShrinkLoss.toFixed(1)}M
              </div>
            </div>

            {/* Modeled Loss Reduction */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-[3vh] md:p-[4vh] border border-white/20">
              <div className="text-white/60 mb-[1vh]" style={{ fontSize: 'clamp(0.8rem, 0.95vw, 1.1rem)', fontWeight: 500 }}>
                Modeled loss reduction
              </div>
              <div className="text-[#EEFF41] leading-none" style={{ fontSize: 'clamp(1.7rem, 2.4vw, 2.8rem)', fontWeight: 700 }}>
                €{grossMarginRecovery.toFixed(1)}M
              </div>
            </div>

            {/* Packaging System Cost */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-[3vh] md:p-[4vh] border border-white/20">
              <div className="text-white/60 mb-[1vh]" style={{ fontSize: 'clamp(0.8rem, 0.95vw, 1.1rem)', fontWeight: 500 }}>
                Packaging system cost (annual)
              </div>
              <div className="text-white/70 leading-none" style={{ fontSize: 'clamp(1.7rem, 2.4vw, 2.8rem)', fontWeight: 700 }}>
                €{packagingSystemCost.toFixed(1)}M
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function PerformanceModelingPage() {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-[#026448]">
        <Navigation />

        <div className="max-w-[1400px] mx-auto px-[5vw] md:px-[8vw] pt-[20vh] md:pt-[25vh] pb-[12vh] md:pb-[16vh]">
          <p className="text-white/60 uppercase tracking-[0.25em] mb-[3vh]" style={{ fontSize: 'clamp(0.7rem, 0.8vw, 0.85rem)', fontWeight: 400 }}>
            Research & Technical Reference
          </p>

          <h1 className="text-white leading-[1.05] mb-[6vh]" style={{ fontSize: 'clamp(2.5rem, 5.8vw, 6.8rem)', fontWeight: 400, letterSpacing: '-0.03em' }}>
            Technical–Economic Performance Modeling
          </h1>

          <div className="w-24 h-[1px] bg-white/30 mb-[6vh]"></div>

          <p className="text-white/90 leading-[1.75] max-w-[750px]" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.35rem)', fontWeight: 300 }}>
            Model-based economic analysis built from shrink simulations, category loss data, and observed handling conditions.
          </p>
          <p className="text-white/80 leading-[1.7] max-w-[750px]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.25rem)', fontWeight: 300 }}>
            Built to define pilot scope, category selection, and validation targets.
          </p>
        </div>
      </section>

      {/* Framing Section */}
      <section className="relative w-full bg-white">
        <div className="max-w-[1400px] mx-auto px-[5vw] md:px-[8vw] py-[10vh] md:py-[14vh]">
          
          {/* Purpose */}
          <motion.div
            className="mb-[10vh]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#1a1a1a] uppercase tracking-[0.2em] mb-[4vh]" style={{ fontSize: 'clamp(0.7rem, 0.8vw, 0.85rem)', fontWeight: 500 }}>
              Purpose
            </p>
            <p className="text-[#4a4a4a] leading-[1.85] mb-[4vh] max-w-[800px]" style={{ fontSize: 'clamp(1rem, 1.15vw, 1.3rem)', fontWeight: 300 }}>
              This tool maps loss exposure and recovery boundaries under varying assumptions to help teams size pilot scope, category selection, and success criteria.
            </p>
          </motion.div>

          {/* Key Insight */}
          <motion.div
            className="bg-[#f8f8f8] border-l-4 border-[#026448] p-[5vh] md:p-[6vh] mb-[10vh]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-[#1a1a1a] leading-[1.3] mb-[3vh]" style={{ fontSize: 'clamp(1.1rem, 1.25vw, 1.45rem)', fontWeight: 500 }}>
              Why Small Changes Have Large Effects
            </p>
            <p className="text-[#4a4a4a] leading-[1.85] mb-[3vh]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.25rem)', fontWeight: 300 }}>
              Small reductions in shrink (2–5 percentage points) create non‑linear margin effects in low‑margin produce categories.
            </p>
            <p className="text-[#666] leading-[1.75]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)', fontWeight: 300 }}>
              Below ~1.5% of produce revenue, packaging interventions can materially shift profitability—especially in high‑shrink categories such as soft berries, avocados, and bananas.
            </p>
          </motion.div>

          <div className="w-full h-[1px] bg-[#1a1a1a]/10"></div>
        </div>
      </section>

      {/* Interactive Model Section */}
      <section className="relative w-full min-h-screen bg-[#026448] flex flex-col justify-center px-[5vw] md:px-[8vw] py-[10vh] md:py-[14vh]">
        <div className="max-w-[1400px] w-full mx-auto">
          <ShrinkSensitivityModel />
        </div>
      </section>

      {/* Unit Economics Example Section */}
      <section className="relative w-full bg-white">
        <div className="max-w-[1600px] mx-auto px-[5vw] md:px-[8vw] py-[12vh] md:py-[16vh]">
          
          {/* Section Header */}
          <motion.div
            className="text-center mb-[8vh] md:mb-[10vh]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[#1a1a1a] leading-[1.1] mb-[3vh]" style={{ fontSize: 'clamp(2rem, 3.8vw, 4.5rem)', fontWeight: 600, letterSpacing: '-0.025em' }}>
              RipeSwitch: Shrink → Margin Recovery
            </h2>
            <p className="text-[#1a1a1a] leading-[1.15] mb-[2vh]" style={{ fontSize: 'clamp(1.1rem, 1.4vw, 1.65rem)', fontWeight: 500 }}>
              (Unit Economics)
            </p>
            <p className="text-[#666] leading-[1.6] max-w-[700px] mx-auto" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.3rem)', fontWeight: 300 }}>
              A €0.03 packaging input that protects €0.85 of product value
            </p>
          </motion.div>

          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-[5vh] lg:gap-[6vw] mb-[8vh] md:mb-[10vh] items-start">
            
            {/* Left Column - Visual Flow */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Visual Flow Container */}
              <div className="bg-[#f8f8f8] rounded-3xl p-[4vh] md:p-[5vh] lg:p-[6vh] border border-[#e0e0e0]">
                <p className="text-[#1a1a1a] uppercase tracking-[0.2em] mb-[5vh]" style={{ fontSize: 'clamp(0.7rem, 0.8vw, 0.85rem)', fontWeight: 500 }}>
                  Visual Logic
                </p>

                {/* Flow Diagram */}
                <div className="space-y-[3vh] lg:space-y-[3.5vh]">
                  
                  {/* Baseline Stack */}
                  <div className="text-center">
                    <div className="flex justify-center gap-2 mb-[1.5vh] lg:mb-[2vh]">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-[#CBD5E1] flex items-center justify-center text-2xl">
                          🥑
                        </div>
                      ))}
                    </div>
                    <p className="text-[#64748B]" style={{ fontSize: 'clamp(0.85rem, 0.95vw, 1.05rem)', fontWeight: 500 }}>
                      100,000 avocados / year
                    </p>
                    <p className="text-[#94A3B8] mt-1" style={{ fontSize: 'clamp(0.75rem, 0.85vw, 0.95rem)' }}>
                      Baseline volume
                    </p>
                  </div>

                  {/* Loss Arrow */}
                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-full h-[3px] bg-[#DC2626] mb-[1vh] rounded-full opacity-60"></div>
                      <p className="text-[#DC2626] font-medium" style={{ fontSize: 'clamp(0.85rem, 0.95vw, 1.05rem)' }}>
                        15% shrink (baseline)
                      </p>
                      <p className="text-[#DC2626]/70 mt-1" style={{ fontSize: 'clamp(0.75rem, 0.85vw, 0.95rem)' }}>
                        15,000 units lost
                      </p>
                    </div>
                  </div>

                  {/* Protected Stack */}
                  <div className="text-center">
                    <div className="flex justify-center gap-2 mb-[1.5vh] lg:mb-[2vh]">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-[#16A34A]/20 border-2 border-[#16A34A] flex items-center justify-center text-2xl relative">
                          🥑
                          {i === 2 && (
                            <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#16A34A] rounded-full flex items-center justify-center text-white text-xs font-bold">
                              ✓
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    <p className="text-[#16A34A]" style={{ fontSize: 'clamp(0.85rem, 0.95vw, 1.05rem)', fontWeight: 600 }}>
                      RipeSwitch active
                    </p>
                    <p className="text-[#16A34A]/70 mt-1" style={{ fontSize: 'clamp(0.75rem, 0.85vw, 0.95rem)' }}>
                      6,000 units saved (40% reduction)
                    </p>
                  </div>
                </div>

                {/* Caption */}
                <p className="text-[#64748B] text-center mt-[3vh] lg:mt-[4vh] italic" style={{ fontSize: 'clamp(0.8rem, 0.9vw, 1rem)' }}>
                  Illustrative example based on discount retail produce handling
                </p>
              </div>
            </motion.div>

            {/* Right Column - Economics Breakdown */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-[3vh] lg:space-y-[3.5vh]">
                
                {/* Section: Baseline */}
                <div className="bg-white border border-[#e0e0e0] rounded-2xl p-[3.5vh] md:p-[4.5vh] lg:p-[5vh]">
                  <h3 className="text-[#1a1a1a] mb-[3vh]" style={{ fontSize: 'clamp(1.1rem, 1.3vw, 1.5rem)', fontWeight: 600 }}>
                    Baseline (without RipeSwitch)
                  </h3>
                  <div className="space-y-[2vh] text-[#4a4a4a]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)' }}>
                    <div className="flex justify-between">
                      <span>Wholesale cost per avocado:</span>
                      <span className="font-semibold text-[#1a1a1a]">€0.85</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Typical shrink (discount retail):</span>
                      <span className="font-semibold text-[#1a1a1a]">15%</span>
                    </div>
                    <div className="w-full h-[1px] bg-[#e0e0e0] my-2"></div>
                    <div className="flex justify-between items-baseline">
                      <span className="font-medium">Annual loss (100k units):</span>
                      <div className="text-right">
                        <div className="text-[#DC2626]" style={{ fontSize: 'clamp(1.3rem, 1.6vw, 1.9rem)', fontWeight: 700 }}>
                          €12,750
                        </div>
                        <div className="text-[#94A3B8] text-xs mt-1">15,000 × €0.85</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section: With RipeSwitch */}
                <div className="bg-white border border-[#e0e0e0] rounded-2xl p-[3.5vh] md:p-[4.5vh] lg:p-[5vh]">
                  <h3 className="text-[#1a1a1a] mb-[3vh]" style={{ fontSize: 'clamp(1.1rem, 1.3vw, 1.5rem)', fontWeight: 600 }}>
                    With RipeSwitch (conservative pilot case)
                  </h3>
                  <div className="space-y-[2vh] text-[#4a4a4a]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)' }}>
                    <div className="flex justify-between">
                      <span>Shrink reduction:</span>
                      <span className="font-semibold text-[#1a1a1a]">40% relative</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Avocados saved:</span>
                      <span className="font-semibold text-[#1a1a1a]">6,000 units</span>
                    </div>
                    <div className="w-full h-[1px] bg-[#e0e0e0] my-2"></div>
                    <div className="flex justify-between items-baseline">
                      <span className="font-medium">Value recovered:</span>
                      <div className="text-right">
                        <div className="text-[#16A34A]" style={{ fontSize: 'clamp(1.3rem, 1.6vw, 1.9rem)', fontWeight: 700 }}>
                          €5,100
                        </div>
                        <div className="text-[#94A3B8] text-xs mt-1">6,000 × €0.85</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section: Cost of RipeSwitch */}
                <div className="bg-white border border-[#e0e0e0] rounded-2xl p-[3.5vh] md:p-[4.5vh] lg:p-[5vh]">
                  <h3 className="text-[#1a1a1a] mb-[3vh]" style={{ fontSize: 'clamp(1.1rem, 1.3vw, 1.5rem)', fontWeight: 600 }}>
                    Cost of RipeSwitch
                  </h3>
                  <div className="space-y-[2vh] text-[#4a4a4a]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)' }}>
                    <div className="flex justify-between">
                      <span>Cost per unit:</span>
                      <span className="font-semibold text-[#1a1a1a]">€0.03</span>
                    </div>
                    <div className="w-full h-[1px] bg-[#e0e0e0] my-2"></div>
                    <div className="flex justify-between items-baseline">
                      <span className="font-medium">Annual cost:</span>
                      <div className="text-right">
                        <div className="text-[#64748B]" style={{ fontSize: 'clamp(1.3rem, 1.6vw, 1.9rem)', fontWeight: 700 }}>
                          €3,000
                        </div>
                        <div className="text-[#94A3B8] text-xs mt-1">100,000 × €0.03</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Net Impact Highlight Box */}
                <div className="bg-[#F0FDF4] border-2 border-[#86EFAC] rounded-2xl p-[4vh] md:p-[5vh]">
                  <div className="text-[#166534] mb-[1.5vh]" style={{ fontSize: 'clamp(0.85rem, 0.95vw, 1.05rem)', fontWeight: 500 }}>
                    Net annual gain
                  </div>
                  <div className="text-[#166534] leading-none mb-[2vh]" style={{ fontSize: 'clamp(2.5rem, 3.5vw, 4rem)', fontWeight: 700 }}>
                    +€2,100
                  </div>
                  <div className="text-[#166534]/70" style={{ fontSize: 'clamp(0.85rem, 0.95vw, 1.05rem)' }}>
                    €5,100 recovered − €3,000 cost
                  </div>
                </div>

              </div>
            </motion.div>

          </div>

          {/* Rule of Thumb Strip */}
          <motion.div
            className="bg-[#F8FAFC] border-t-2 border-[#E5E7EB] rounded-2xl p-[5vh] md:p-[6vh]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center mb-[2vh]">
              <p className="text-[#64748B] uppercase tracking-[0.2em] mb-[2vh]" style={{ fontSize: 'clamp(0.7rem, 0.8vw, 0.85rem)', fontWeight: 500 }}>
                Rule of Thumb
              </p>
              <p className="text-[#0F172A] leading-[1.3] mb-[2vh]" style={{ fontSize: 'clamp(1.2rem, 1.8vw, 2.2rem)', fontWeight: 600 }}>
                Every €1 spent on RipeSwitch protects ~€1.70 of product value
              </p>
              <p className="text-[#64748B]" style={{ fontSize: 'clamp(0.85rem, 0.95vw, 1.05rem)' }}>
                (Based on high-ethylene produce, discount retail conditions)
              </p>
            </div>
          </motion.div>

          {/* Footer Disclaimer */}
          <motion.div
            className="text-center mt-[6vh]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="space-y-[1vh] text-[#64748B]" style={{ fontSize: 'clamp(0.8rem, 0.9vw, 1rem)' }}>
              <p>• Applies to produce categories only</p>
              <p>• Results vary by fruit, handling, and baseline shrink</p>
              <p>• Pilot validation planned with retail partners</p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Interpretation Section */}
      <section className="relative w-full bg-white">
        <div className="max-w-[1400px] mx-auto px-[5vw] md:px-[8vw] py-[10vh] md:py-[14vh]">
          
          <motion.div
            className="mb-[10vh]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#1a1a1a] uppercase tracking-[0.2em] mb-[4vh]" style={{ fontSize: 'clamp(0.7rem, 0.8vw, 0.85rem)', fontWeight: 500 }}>
              Interpretation
            </p>
            <h2 className="text-[#1a1a1a] leading-[1.15] mb-[5vh]" style={{ fontSize: 'clamp(1.8rem, 2.8vw, 3.4rem)', fontWeight: 400, letterSpacing: '-0.02em' }}>
              Reading the Model Outputs
            </h2>

            <div className="space-y-[5vh]">
              <div>
                <h3 className="text-[#026448] leading-[1.3] mb-[2vh]" style={{ fontSize: 'clamp(1.1rem, 1.3vw, 1.5rem)', fontWeight: 500 }}>
                  Net Margin Recovery
                </h3>
                <p className="text-[#4a4a4a] leading-[1.85] max-w-[750px]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.25rem)', fontWeight: 300 }}>
                  Represents the modeled annual financial impact after accounting for packaging system costs. This metric reflects the gross shrink reduction minus the incremental cost of the packaging intervention. Positive values indicate scenarios where loss prevention exceeds system cost.
                </p>
              </div>

              <div>
                <h3 className="text-[#026448] leading-[1.3] mb-[2vh]" style={{ fontSize: 'clamp(1.1rem, 1.3vw, 1.5rem)', fontWeight: 500 }}>
                  Payback Period
                </h3>
                <p className="text-[#4a4a4a] leading-[1.85] max-w-[750px]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.25rem)', fontWeight: 300 }}>
                  Indicates the time required for cumulative shrink reduction to offset the annual packaging system cost. Shorter payback periods suggest stronger economic feasibility, though real-world performance depends on category mix, operational execution, and supply chain conditions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Model Assumptions */}
          <motion.div
            className="mb-[10vh]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-[#1a1a1a] uppercase tracking-[0.2em] mb-[4vh]" style={{ fontSize: 'clamp(0.7rem, 0.8vw, 0.85rem)', fontWeight: 500 }}>
              Model Assumptions
            </p>
            <div className="bg-[#f8f8f8] rounded-2xl p-[5vh] md:p-[6vh]">
              <ul className="space-y-[2vh] text-[#4a4a4a]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)', fontWeight: 300 }}>
                <li className="leading-[1.75] pl-[3vh] relative before:content-['•'] before:absolute before:left-0 before:text-[#026448] before:font-bold">
                  Produce revenue share reflects typical European grocery retail operations (8–15%)
                </li>
                <li className="leading-[1.75] pl-[3vh] relative before:content-['•'] before:absolute before:left-0 before:text-[#026448] before:font-bold">
                  Baseline shrink rates are category-averaged and do not account for seasonal variation
                </li>
                <li className="leading-[1.75] pl-[3vh] relative before:content-['•'] before:absolute before:left-0 before:text-[#026448] before:font-bold">
                  Packaging system cost includes material, converting, and incremental handling overhead
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Pilot Validation Context */}
          <motion.div
            className="mb-[10vh]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-[#1a1a1a] uppercase tracking-[0.2em] mb-[4vh]" style={{ fontSize: 'clamp(0.7rem, 0.8vw, 0.85rem)', fontWeight: 500 }}>
              Pilot Validation
            </p>
            <h2 className="text-[#1a1a1a] leading-[1.15] mb-[4vh]" style={{ fontSize: 'clamp(1.8rem, 2.8vw, 3.4rem)', fontWeight: 400, letterSpacing: '-0.02em' }}>
              From Modeling to Real-World Testing
            </h2>
            <p className="text-[#4a4a4a] leading-[1.85] mb-[4vh] max-w-[800px]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.25rem)', fontWeight: 300 }}>
              This model sets boundary conditions for pilot scope, category selection, and success criteria. Validation requires controlled retail deployment and measurement of:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[3vh] mb-[6vh]">
              {[
                "Measured shrink reduction vs. control group",
                "Cost validation at converter scale",
                "Operational handling adherence",
                "Shelf-life extension under store conditions"
              ].map((item, index) => (
                <div key={index} className="bg-white border border-[#e0e0e0] rounded-xl p-[3vh]">
                  <p className="text-[#4a4a4a] leading-[1.65]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)', fontWeight: 400 }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-[#666] leading-[1.75] max-w-[800px]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)', fontWeight: 300 }}>
              Pilots test hypotheses and validate assumptions in real operations.
            </p>
          </motion.div>

          <div className="w-full h-[1px] bg-[#1a1a1a]/10 mb-[10vh]"></div>

          {/* Model Scope Disclaimer */}
          <motion.div
            className="bg-[#f8f8f8] border-l-4 border-[#666] p-[5vh] md:p-[6vh]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-[#1a1a1a] leading-[1.3] mb-[3vh]" style={{ fontSize: 'clamp(1rem, 1.15vw, 1.3rem)', fontWeight: 600 }}>
              Model Scope
            </p>
            <p className="text-[#666] leading-[1.85]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)', fontWeight: 300 }}>
              Based on public shrink benchmarks, simulated ripening behavior, and category‑average handling assumptions. Results vary by produce mix, logistics conditions, and store‑level practices and will be validated through controlled pilots. This is not a performance guarantee or commercial projection—only a technical tool for hypothesis formation and pilot planning.
            </p>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
