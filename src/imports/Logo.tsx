import svgPaths from "./svg-wz26uyfcd9";
import { motion } from "motion/react";

export default function Logo() {
  return (
    <div className="relative size-full" data-name="logo" style={{ willChange: 'transform' }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 391.806 53.155">
        <g id="logo">
          <g id="Vector">
            <motion.path 
              d={svgPaths.pb77c80} 
              animate={{
                fill: ["#5E9C12", "#EEFF41", "#EEFF41", "#5E9C12", "#5E9C12"],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                times: [0, 0.06, 0.89, 0.94, 1],
              }}
              style={{ willChange: 'fill' }}
            />
            <motion.path 
              clipRule="evenodd" 
              d={svgPaths.p1d7e2200} 
              fillRule="evenodd"
              animate={{
                fill: ["#5E9C12", "#EEFF41", "#EEFF41", "#5E9C12", "#5E9C12"],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                times: [0, 0.06, 0.89, 0.94, 1],
              }}
              style={{ willChange: 'fill' }}
            />
            
            {/* Animated green circle that toggles between left and right */}
            <motion.path 
              clipRule="evenodd" 
              d={svgPaths.p2605dc00} 
              fillRule="evenodd"
              animate={{
                x: [-60, 0, 0, -60, -60],
                fill: ["#036448", "#036448", "#036448", "#036448", "#036448"],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                times: [0, 0.06, 0.89, 0.94, 1],
              }}
              style={{ willChange: 'transform' }}
            />
            
            <motion.path 
              d={svgPaths.p18797680} 
              animate={{
                fill: ["#5E9C12", "#EEFF41", "#EEFF41", "#5E9C12", "#5E9C12"],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                times: [0, 0.06, 0.89, 0.94, 1],
              }}
              style={{ willChange: 'fill' }}
            />
          </g>
        </g>
      </svg>
    </div>
  );
}