import { useState } from "react";
import { motion } from "motion/react";

export function EconomicCalculator() {
  const [annualRevenue, setAnnualRevenue] = useState(500); // Million €
  const [produceShare, setProduceShare] = useState(12); // % of revenue
  const [currentShrink, setCurrentShrink] = useState(7); // %
  const [shrinkReduction, setShrinkReduction] = useState(25); // %
  
  // Calculations
  const produceRevenue = annualRevenue * (produceShare / 100);
  const currentShrinkLoss = produceRevenue * (currentShrink / 100);
  const newShrinkRate = currentShrink * (1 - shrinkReduction / 100);
  const newShrinkLoss = produceRevenue * (newShrinkRate / 100);
  const annualSavings = currentShrinkLoss - newShrinkLoss;
  const monthlyImpact = annualSavings / 12;
  
  // Scenario label helper
  const getScenarioLabel = (reduction: number) => {
    if (reduction <= 20) return "Conservative";
    if (reduction <= 40) return "Typical pilot range";
    return "Best-case (select categories)";
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[6vh] lg:gap-[6vw]">
      {/* Left - Calculator Inputs */}
      <motion.div
        className="bg-white/10 backdrop-blur-sm rounded-3xl p-[5vh] md:p-[6vh] border border-white/20"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-white leading-[1.2] mb-[4vh]" style={{ fontSize: 'clamp(1.5rem, 2vw, 2.5rem)', fontWeight: 700 }}>
          Calculate your impact
        </h3>

        {/* Annual Revenue Slider */}
        <div className="mb-[4vh]">
          <div className="flex items-baseline justify-between mb-[2vh]">
            <label className="text-white/80" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.3rem)', fontWeight: 500 }}>
              Annual revenue
            </label>
            <span className="text-[#EEFF41] font-bold" style={{ fontSize: 'clamp(1.1rem, 1.3vw, 1.6rem)' }}>
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
            <label className="text-white/80" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.3rem)', fontWeight: 500 }}>
              Produce share of revenue
            </label>
            <span className="text-[#EEFF41] font-bold" style={{ fontSize: 'clamp(1.1rem, 1.3vw, 1.6rem)' }}>
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

        {/* Current Shrink Slider */}
        <div className="mb-[4vh]">
          <div className="flex items-baseline justify-between mb-[2vh]">
            <label className="text-white/80" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.3rem)', fontWeight: 500 }}>
              Current produce shrink
            </label>
            <span className="text-[#EEFF41] font-bold" style={{ fontSize: 'clamp(1.1rem, 1.3vw, 1.6rem)' }}>
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

        {/* Shrink Reduction Slider */}
        <div className="mb-[4vh]">
          <div className="flex items-baseline justify-between mb-[2vh]">
            <label className="text-white/80" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.3rem)', fontWeight: 500 }}>
              Target shrink reduction
            </label>
            <span className="text-[#EEFF41] font-bold" style={{ fontSize: 'clamp(1.1rem, 1.3vw, 1.6rem)' }}>
              {shrinkReduction}%
            </span>
          </div>
          <div className="text-white/50 mb-[1.5vh]" style={{ fontSize: 'clamp(0.75rem, 0.9vw, 1rem)' }}>
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

        {/* Current vs New Comparison */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
          <div>
            <div className="text-white/60 text-sm mb-1">Without RipeSwitch</div>
            <div className="text-white font-bold" style={{ fontSize: 'clamp(1.3rem, 1.6vw, 2rem)' }}>
              {currentShrink.toFixed(1)}%
            </div>
          </div>
          <div>
            <div className="text-white/60 text-sm mb-1">With RipeSwitch</div>
            <div className="text-[#EEFF41] font-bold" style={{ fontSize: 'clamp(1.3rem, 1.6vw, 2rem)' }}>
              {newShrinkRate.toFixed(1)}%
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right - Results */}
      <motion.div
        className="flex flex-col gap-[3vh]"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Annual Savings */}
        <div className="bg-[#EEFF41] rounded-3xl p-[5vh] md:p-[6vh]">
          <div className="text-[#026448]/70 mb-[2vh]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)', fontWeight: 600 }}>
            Annual savings
          </div>
          <div className="text-[#026448] leading-none mb-[2vh]" style={{ fontSize: 'clamp(3rem, 5vw, 6.5rem)', fontWeight: 700 }}>
            €{annualSavings.toFixed(1)}M
          </div>
          <div className="text-[#026448]/70 mb-[1.5vh]" style={{ fontSize: 'clamp(0.85rem, 1vw, 1.15rem)' }}>
            €{(monthlyImpact * 1000).toFixed(0)}K per month
          </div>
          <div className="text-[#026448] pt-[2vh] border-t border-[#026448]/20" style={{ fontSize: 'clamp(0.85rem, 1vw, 1.15rem)', fontWeight: 600 }}>
            Margin recovered without consumer price inflation
          </div>
        </div>

        {/* Breakdown Cards */}
        <div className="grid grid-cols-1 gap-[2vh]">
          {/* Current Loss */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-[3vh] md:p-[4vh] border border-white/20">
            <div className="text-white/60 mb-[1vh]" style={{ fontSize: 'clamp(0.85rem, 1vw, 1.15rem)', fontWeight: 500 }}>
              Current annual shrink loss
            </div>
            <div className="text-white leading-none" style={{ fontSize: 'clamp(1.8rem, 2.5vw, 3rem)', fontWeight: 700 }}>
              €{currentShrinkLoss.toFixed(1)}M
            </div>
          </div>

          {/* New Loss */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-[3vh] md:p-[4vh] border border-white/20">
            <div className="text-white/60 mb-[1vh]" style={{ fontSize: 'clamp(0.85rem, 1vw, 1.15rem)', fontWeight: 500 }}>
              Projected annual shrink loss
            </div>
            <div className="text-[#EEFF41] leading-none" style={{ fontSize: 'clamp(1.8rem, 2.5vw, 3rem)', fontWeight: 700 }}>
              €{newShrinkLoss.toFixed(1)}M
            </div>
          </div>

          {/* ROI Note */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-[3vh] md:p-[4vh] border border-white/10">
            <div className="text-white/80 leading-[1.6]" style={{ fontSize: 'clamp(0.85rem, 1vw, 1.15rem)' }}>
              <strong className="text-[#EEFF41]">Note:</strong> Applies to produce categories only. Actual results vary by category mix and baseline shrink rates.
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}