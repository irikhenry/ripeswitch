import { motion } from "motion/react";
import { CheckCircle, XCircle, AlertTriangle, Minus } from "lucide-react";

export function CompetitiveBenchmark() {
  const criteria = [
    { label: "Aligned with expected EU 2029 packaging requirements", competitors: [false, false, true, false], ripeswitch: true },
    { label: "Intrinsic ripening control", competitors: ["n/a", "n/a", "n/a", true], ripeswitch: true },
    { label: "No plastic components", competitors: ["n/a", "n/a", true, false], ripeswitch: true },
    { label: "Supply chain integration", competitors: [true, true, true, false], ripeswitch: true },
    { label: "No hardware dependency", competitors: [true, true, true, false], ripeswitch: true },
    { label: "Retail-scale economics†", competitors: ["partial", "partial", true, false], ripeswitch: true }
  ];

  const competitorNames = ["Apeel", "Hazel", "Stora Enso", "BluWrap"];

  const renderIcon = (value: boolean | string, isRipeSwitch = false) => {
    const size = isRipeSwitch 
      ? 'clamp(20px, 1.6vw, 26px)' 
      : 'clamp(18px, 1.4vw, 22px)';
    
    if (value === true) {
      return <CheckCircle className="text-[#026448]" style={{ width: size, height: size }} />;
    } else if (value === "partial") {
      return <AlertTriangle className="text-[#f59e0b]/50" style={{ width: size, height: size }} />;
    } else if (value === "n/a") {
      return <Minus className="text-[#1a1a1a]/20" style={{ width: size, height: size }} />;
    } else {
      return <XCircle className="text-[#1a1a1a]/30" style={{ width: size, height: size }} />;
    }
  };

  return (
    <>
      {/* Desktop View - Single Unified Table */}
      <div className="hidden lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Main Content Area - 8 columns */}
        <div className="lg:col-span-8 w-full">
          <motion.div
            className="w-full overflow-x-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="min-w-[700px]">
              {/* Unified Table with RipeSwitch as First Column */}
              <div className="border-2 border-[#1a1a1a]/15 rounded-xl overflow-hidden bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
                {/* Header Row */}
                <div className="grid grid-cols-6 bg-[#1a1a1a]/5 border-b-2 border-[#1a1a1a]/15">
                  <div className="col-span-1 px-6 py-5">
                    <span className="text-[#1a1a1a]/70 font-bold tracking-wide uppercase" style={{ fontSize: 'clamp(0.8rem, 0.9vw, 0.95rem)', letterSpacing: '0.05em' }}>
                      Capability
                    </span>
                  </div>
                  {/* RipeSwitch Header - Highlighted */}
                  <div className="px-4 py-5 text-center border-l-[3px] border-[#026448]/40 bg-[#EEFF41]/15">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#026448] shadow-sm" />
                      <span className="text-[#026448] font-bold tracking-wide" style={{ fontSize: 'clamp(0.95rem, 1.05vw, 1.15rem)', letterSpacing: '0.01em' }}>
                        RipeSwitch
                      </span>
                    </div>
                  </div>
                  {/* Competitor Headers */}
                  {competitorNames.map((name, idx) => (
                    <div key={idx} className="px-4 py-5 text-center border-l border-[#1a1a1a]/10">
                      <span className="text-[#1a1a1a]/85 font-bold" style={{ fontSize: 'clamp(0.9rem, 1vw, 1.1rem)', letterSpacing: '0.01em' }}>
                        {name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Data Rows */}
                {criteria.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className={`grid grid-cols-6 hover:bg-[#1a1a1a]/[0.02] transition-colors ${idx < criteria.length - 1 ? 'border-b border-[#1a1a1a]/12' : ''}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                  >
                    {/* Capability Label */}
                    <div className="col-span-1 px-6 py-5">
                      <span className="text-[#1a1a1a]/85 font-semibold" style={{ fontSize: 'clamp(0.9rem, 1vw, 1.1rem)', letterSpacing: '-0.01em' }}>
                        {item.label}
                      </span>
                    </div>
                    
                    {/* RipeSwitch Column - Highlighted */}
                    <div className="px-4 py-5 flex items-center justify-center border-l-[3px] border-[#026448]/40 bg-[#EEFF41]/8">
                      {renderIcon(item.ripeswitch, true)}
                    </div>
                    
                    {/* Competitor Columns */}
                    {item.competitors.map((value, cidx) => (
                      <div key={cidx} className="px-4 py-5 flex items-center justify-center border-l border-[#1a1a1a]/10">
                        {renderIcon(value)}
                      </div>
                    ))}
                  </motion.div>
                ))}
              </div>

              {/* Bottom summary text */}
              <motion.div
                className="mt-6 px-6 py-4 bg-[#026448]/8 rounded-lg border-l-[4px] border-[#026448] shadow-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <p className="text-[#026448] font-bold leading-[1.5]" style={{ fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', letterSpacing: '-0.01em' }}>
                  RipeSwitch delivers compliance + control without tradeoffs.
                </p>
              </motion.div>

              {/* Legend and Footnotes */}
              <motion.div
                className="mt-6 flex flex-col gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                {/* Legend */}
                <div className="flex items-center gap-6 flex-wrap">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-[#026448]" style={{ width: '16px', height: '16px' }} />
                    <span className="text-[#1a1a1a]/50 text-[0.8rem] leading-none">Native support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="text-[#f59e0b]/50" style={{ width: '16px', height: '16px' }} />
                    <span className="text-[#1a1a1a]/50 text-[0.8rem] leading-none">Conditional / limited</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Minus className="text-[#1a1a1a]/20" style={{ width: '16px', height: '16px' }} />
                    <span className="text-[#1a1a1a]/50 text-[0.8rem] leading-none">Not applicable</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <XCircle className="text-[#1a1a1a]/30" style={{ width: '16px', height: '16px' }} />
                    <span className="text-[#1a1a1a]/50 text-[0.8rem] leading-none">Not supported</span>
                  </div>
                </div>

                {/* Footnote */}
                <div className="text-[#1a1a1a]/50 text-[0.75rem] leading-[1.5]">
                  <span className="font-semibold">†</span> Retail-scale economics: compatibility with existing packaging lines, unit economics, and distribution workflows without additional capital equipment.
                </div>

                {/* Disclaimer */}
                <div className="text-[#1a1a1a]/40 text-[0.7rem] leading-[1.4] italic">
                  Capability classification based on publicly disclosed material composition, operating principles, and deployment models.
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Right-side Annotation Block - 4 columns */}
        <motion.div
          className="lg:col-span-4 flex items-center justify-center lg:justify-start pt-8 lg:pt-0"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="max-w-[340px]">
            <h3 className="text-[#026448] font-bold mb-4 leading-[1.3]" style={{ fontSize: 'clamp(1.1rem, 1.3vw, 1.5rem)' }}>
              IMPORTANT
            </h3>
            
            <p className="text-[#1a1a1a]/80 leading-[1.6] mb-6" style={{ fontSize: 'clamp(0.95rem, 1.05vw, 1.15rem)' }}>
              EU regulations + waste targets require <span className="font-semibold text-[#026448]">both compliance and control</span>.
            </p>
            
            <p className="text-[#1a1a1a]/80 leading-[1.6]" style={{ fontSize: 'clamp(0.95rem, 1.05vw, 1.15rem)' }}>
              Every alternative sacrifices one for the other.
            </p>

            <div className="pt-4 border-t border-[#1a1a1a]/10">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#026448] mt-2 flex-shrink-0" />
                  <p className="text-[#1a1a1a]/70 leading-[1.5]" style={{ fontSize: 'clamp(0.85rem, 2.5vw, 1rem)' }}>
                    Converter-ready
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#026448] mt-2 flex-shrink-0" />
                  <p className="text-[#1a1a1a]/70 leading-[1.5]" style={{ fontSize: 'clamp(0.85rem, 2.5vw, 1rem)' }}>
                    No significant capital investment typically required
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#026448] mt-2 flex-shrink-0" />
                  <p className="text-[#1a1a1a]/70 leading-[1.5]" style={{ fontSize: 'clamp(0.85rem, 2.5vw, 1rem)' }}>
                    Demonstrated in pilot retail settings
                  </p>
                </div>
              </div>

              {/* Partnership Note */}
              <div className="mt-6 pt-6 border-t border-[#026448]/10">
                <p className="text-[#026448]/60 leading-[1.5] italic" style={{ fontSize: 'clamp(0.8rem, 2.5vw, 0.95rem)' }}>
                  Stora Enso's paper solutions show promise for future partnership opportunities.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile View - Card-based Layout */}
      <div className="lg:hidden w-full space-y-8">
        {/* Competitors Cards */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-[#1a1a1a]/70 font-semibold px-4" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>
            Existing Solutions
          </h3>
          
          {competitorNames.map((name, cidx) => (
            <motion.div
              key={cidx}
              className="bg-white border border-[#1a1a1a]/10 rounded-xl overflow-hidden shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + cidx * 0.1 }}
            >
              {/* Competitor Name Header */}
              <div className="bg-[#1a1a1a]/3 px-5 py-4 border-b border-[#1a1a1a]/10">
                <h4 className="text-[#1a1a1a]/70 font-semibold" style={{ fontSize: 'clamp(1rem, 3vw, 1.1rem)' }}>
                  {name}
                </h4>
              </div>
              
              {/* Criteria List */}
              <div className="divide-y divide-[#1a1a1a]/5">
                {criteria.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between px-5 py-4">
                    <span className="text-[#1a1a1a]/80 font-medium flex-1 pr-4" style={{ fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)' }}>
                      {item.label}
                    </span>
                    <div className="flex-shrink-0">
                      {renderIcon(item.competitors[cidx])}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* RipeSwitch Card - Highlighted */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="border-2 border-[#026448]/30 rounded-xl overflow-hidden bg-gradient-to-br from-[#EEFF41]/10 to-[#026448]/5 shadow-lg relative">
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-[#EEFF41]/5 rounded-xl blur-sm" />
            
            <div className="relative">
              {/* RipeSwitch Header */}
              <div className="bg-[#026448]/8 px-5 py-5 border-b-2 border-[#026448]/20 flex items-center justify-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#026448]" />
                <h4 className="text-[#026448] font-bold tracking-wide" style={{ fontSize: 'clamp(1.1rem, 3.5vw, 1.3rem)' }}>
                  RipeSwitch
                </h4>
              </div>
              
              {/* Criteria List */}
              <div className="divide-y divide-[#026448]/10">
                {criteria.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center justify-between px-5 py-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.0 + idx * 0.1 }}
                  >
                    <span className="text-[#026448]/80 font-medium flex-1 pr-4" style={{ fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)' }}>
                      {item.label}
                    </span>
                    <div className="flex-shrink-0">
                      {renderIcon(item.ripeswitch, true)}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom summary text */}
          <motion.div
            className="px-5 py-4 bg-[#026448]/5 rounded-lg border-l-4 border-[#026448]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <p className="text-[#026448] font-semibold leading-[1.5]" style={{ fontSize: 'clamp(0.9rem, 2.8vw, 1.05rem)' }}>
              RipeSwitch delivers compliance + control without tradeoffs.
            </p>
          </motion.div>

          {/* Legend and Footnotes - Mobile */}
          <motion.div
            className="px-4 flex flex-col gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.7 }}
          >
            {/* Legend */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-[#026448]" style={{ width: '16px', height: '16px' }} />
                <span className="text-[#1a1a1a]/50 text-[0.75rem] leading-none">Native support</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertTriangle className="text-[#f59e0b]/50" style={{ width: '16px', height: '16px' }} />
                <span className="text-[#1a1a1a]/50 text-[0.75rem] leading-none">Conditional / limited</span>
              </div>
              <div className="flex items-center gap-2">
                <Minus className="text-[#1a1a1a]/20" style={{ width: '16px', height: '16px' }} />
                <span className="text-[#1a1a1a]/50 text-[0.75rem] leading-none">Not applicable</span>
              </div>
              <div className="flex items-center gap-2">
                <XCircle className="text-[#1a1a1a]/30" style={{ width: '16px', height: '16px' }} />
                <span className="text-[#1a1a1a]/50 text-[0.75rem] leading-none">Not supported</span>
              </div>
            </div>

            {/* Footnote */}
            <div className="text-[#1a1a1a]/50 text-[0.7rem] leading-[1.5]">
              <span className="font-semibold">†</span> Retail-scale economics: compatibility with existing packaging lines, unit economics, and distribution workflows without additional capital equipment.
            </div>

            {/* Disclaimer */}
            <div className="text-[#1a1a1a]/40 text-[0.65rem] leading-[1.4] italic">
              Capability classification based on publicly disclosed material composition, operating principles, and deployment models.
            </div>
          </motion.div>
        </motion.div>

        {/* Mobile Annotation Block */}
        <motion.div
          className="px-4 py-6 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.7 }}
        >
          <h3 className="text-[#026448] font-bold leading-[1.3]" style={{ fontSize: 'clamp(1.15rem, 3.5vw, 1.4rem)' }}>
            Important
          </h3>
          
          <p className="text-[#1a1a1a]/80 leading-[1.6]" style={{ fontSize: 'clamp(0.95rem, 2.8vw, 1.1rem)' }}>
            EU regulations + waste targets require <span className="font-semibold text-[#026448]">both compliance and control</span>.
          </p>
          
          <p className="text-[#1a1a1a]/80 leading-[1.6]" style={{ fontSize: 'clamp(0.95rem, 2.8vw, 1.1rem)' }}>
            Every alternative sacrifices one for the other.
          </p>

          <div className="pt-4 border-t border-[#1a1a1a]/10">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#026448] mt-2 flex-shrink-0" />
                <p className="text-[#1a1a1a]/70 leading-[1.5]" style={{ fontSize: 'clamp(0.85rem, 2.5vw, 1rem)' }}>
                  Converter-ready
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#026448] mt-2 flex-shrink-0" />
                <p className="text-[#1a1a1a]/70 leading-[1.5]" style={{ fontSize: 'clamp(0.85rem, 2.5vw, 1rem)' }}>
                  No significant capital investment typically required
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#026448] mt-2 flex-shrink-0" />
                <p className="text-[#1a1a1a]/70 leading-[1.5]" style={{ fontSize: 'clamp(0.85rem, 2.5vw, 1rem)' }}>
                  Demonstrated in pilot retail settings
                </p>
              </div>
            </div>

            {/* Partnership Note */}
            <div className="mt-6 pt-6 border-t border-[#026448]/10">
              <p className="text-[#026448]/60 leading-[1.5] italic" style={{ fontSize: 'clamp(0.8rem, 2.5vw, 0.95rem)' }}>
                Stora Enso's paper solutions show promise for future partnership opportunities.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
