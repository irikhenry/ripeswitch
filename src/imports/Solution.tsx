import imgPaper from "@/assets/046991892c86d985d9b6537f2a26e9a52cbd0a92.webp";
import imgPatch from "@/assets/e807b5ad156382ce7d66fee1c7c5e645af55220c.webp";
import imgBanana from "@/assets/a8d631b2691819c0f247c05d749f7bf5d31652ce.webp";
import { Plus, Equal } from "lucide-react";

export default function Solution() {
  return (
    <div className="relative size-full flex items-center justify-center p-[2vh] md:p-[4vh]" data-name="Solution">
      {/* Visual Equation Container - Vertical on Mobile, Horizontal on Desktop */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-[4vh] md:gap-[3vw] lg:gap-[4vw] w-full max-w-[1200px]">
        
        {/* Card 1 - Paper Bag */}
        <div className="flex-1 flex items-center justify-center w-full md:w-auto">
          <div className="bg-[#026448] backdrop-blur-sm border border-white/20 rounded-2xl md:rounded-3xl shadow-xl w-[280px] h-[280px] md:w-[220px] md:h-[220px] lg:w-[280px] lg:h-[280px] flex items-center justify-center p-[3vh]">
            <img
              src={imgPaper}
              alt="Active Paper"
              className="max-w-full max-h-full object-contain"
              width="138"
              height="141"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Plus Icon */}
        <div className="flex-shrink-0">
          <Plus className="w-10 h-10 md:w-8 md:h-8 lg:w-12 lg:h-12 text-[#1a1a1a]" strokeWidth={3} />
        </div>

        {/* Card 2 - Patch */}
        <div className="flex-1 flex items-center justify-center w-full md:w-auto">
          <div className="bg-[#026448] backdrop-blur-sm border border-white/20 rounded-2xl md:rounded-3xl shadow-xl w-[280px] h-[280px] md:w-[220px] md:h-[220px] lg:w-[280px] lg:h-[280px] flex items-center justify-center p-[3vh]">
            <img
              src={imgPatch}
              alt="Smart Patch"
              className="max-w-full max-h-full object-contain"
              width="134"
              height="85"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Equals Icon */}
        <div className="flex-shrink-0">
          <Equal className="w-10 h-10 md:w-8 md:h-8 lg:w-12 lg:h-12 text-[#1a1a1a]" strokeWidth={3} />
        </div>

        {/* Card 3 - Banana */}
        <div className="flex-1 flex items-center justify-center w-full md:w-auto">
          <div className="bg-[#026448] backdrop-blur-sm border border-white/20 rounded-2xl md:rounded-3xl shadow-xl w-[280px] h-[280px] md:w-[220px] md:h-[220px] lg:w-[280px] lg:h-[280px] flex items-center justify-center p-[3vh]">
            <img
              src={imgBanana}
              alt="RipeSwitch Control"
              className="max-w-full max-h-full object-contain"
              width="92"
              height="99"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
