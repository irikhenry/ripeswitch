import { Link, useLocation } from "react-router-dom";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Navigation } from "../components/Navigation";
import Logo from "../../imports/Logo";
import overripeFruit from "@/assets/480164da373b17192b4517497d43538a5c4e94f9.webp";

export function WhitePaperPage() {
  const location = useLocation();
  
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-[#026448]">
        {/* Navigation Bar */}
        <Navigation />

        <div className="max-w-[1200px] mx-auto px-[5vw] lg:px-[8vw] pt-[20vh] md:pt-[25vh] pb-[12vh] md:pb-[16vh]">
          <p className="text-white/60 uppercase tracking-[0.25em] mb-[3vh]" style={{ fontSize: 'clamp(0.7rem, 0.8vw, 0.85rem)', fontWeight: 400 }}>
            Research
          </p>

          <h1 className="text-white leading-[1.1] mb-[6vh]" style={{ fontSize: 'clamp(3rem, 6.5vw, 7.5rem)', fontWeight: 300, letterSpacing: '-0.04em' }}>
            Research & Technical Reference
          </h1>

          <div className="w-24 h-[1px] bg-white/30 mb-[6vh]"></div>

          <p className="text-white/90 leading-[1.85] max-w-[650px]" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.35rem)', fontWeight: 300 }}>
            Lab-validated simulations, material studies, and system-level testing supporting fibre-based ripening control.
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/70 mt-[4vh]" style={{ fontSize: 'clamp(0.85rem, 0.95vw, 1.05rem)', fontWeight: 300 }}>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              Research ongoing
            </span>
            <span>·</span>
            <span>Pilot validation in preparation</span>
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section className="relative w-full bg-white">
        <div className="max-w-[1200px] mx-auto px-[5vw] lg:px-[8vw] py-[10vh] md:py-[14vh]">
          
          {/* Purpose Section */}
          <div className="mb-[12vh]">
            <p className="text-[#1a1a1a] uppercase tracking-[0.2em] mb-[4vh]" style={{ fontSize: 'clamp(0.7rem, 0.8vw, 0.85rem)', fontWeight: 500 }}>
              Purpose
            </p>
            <p className="text-[#4a4a4a] leading-[1.85] mb-[4vh] max-w-[750px]" style={{ fontSize: 'clamp(1rem, 1.15vw, 1.3rem)', fontWeight: 300 }}>
              This technical library documents the scientific, material, and system-level basis of the RipeSwitch invention. The materials support internal validation, partner evaluation, and preparation for pilot-scale deployment.
            </p>
            <p className="text-[#666] leading-[1.85] max-w-[750px]" style={{ fontSize: 'clamp(0.95rem, 1.05vw, 1.2rem)', fontWeight: 300 }}>
              All documents are non-public working materials and evolve in parallel with laboratory testing and real-world pilots.
            </p>
            <div className="w-full h-[1px] bg-[#1a1a1a]/10 mt-[6vh]"></div>
          </div>

          {/* Research Status */}
          <div className="mb-[12vh]">
            <p className="text-[#1a1a1a] uppercase tracking-[0.2em] mb-[4vh]" style={{ fontSize: 'clamp(0.7rem, 0.8vw, 0.85rem)', fontWeight: 500 }}>
              Project Status
            </p>
            
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[#4a4a4a] mb-[6vh]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)', fontWeight: 300 }}>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#026448]"></span>
                Piloting
              </span>
              <span>·</span>
              <span>Pre-commercial validation phase</span>
            </div>

            <p className="text-[#4a4a4a] leading-[1.85] mb-[4vh] max-w-[750px]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.25rem)', fontWeight: 300 }}>
              The core functional mechanisms of RipeSwitch have been demonstrated and validated through controlled laboratory testing and prototype construction. The system integrates into standard paper packaging structures and is compatible with existing converting infrastructure.
            </p>

            <p className="text-[#666] leading-[1.85] mb-[6vh] max-w-[750px]" style={{ fontSize: 'clamp(0.95rem, 1.05vw, 1.2rem)', fontWeight: 300 }}>
              The current phase enables retail and supply-chain operators to validate performance in their own operating environments, generating independent data under real handling conditions.
            </p>

            <div className="bg-[#f8f8f8] border-l-4 border-[#026448] p-[4vh]">
              <p className="text-[#1a1a1a] leading-[1.3] mb-[2vh]" style={{ fontSize: 'clamp(1rem, 1.15vw, 1.3rem)', fontWeight: 500 }}>
                Path to Commercial Deployment
              </p>
              <p className="text-[#666] leading-[1.85]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)', fontWeight: 300 }}>
                Piloting with retail operators validates manufacturability, shrink reduction, and operational integration before full-scale rollout. Partner-generated data supports commercial decision-making and formal IP protection, positioning the system for market entry.
              </p>
            </div>

            <div className="w-full h-[1px] bg-[#1a1a1a]/10 mt-[6vh]"></div>
          </div>

          {/* Document Maturity Framework */}
          <div className="mb-[12vh]">
            <p className="text-[#1a1a1a] uppercase tracking-[0.2em] mb-[6vh]" style={{ fontSize: 'clamp(0.7rem, 0.8vw, 0.85rem)', fontWeight: 500 }}>
              Document Maturity Framework
            </p>
            <p className="text-[#4a4a4a] leading-[1.85] mb-[6vh] max-w-[750px]" style={{ fontSize: 'clamp(0.95rem, 1.05vw, 1.2rem)', fontWeight: 300 }}>
              To ensure clarity and transparency, all technical documents are classified using the following maturity levels:
            </p>

            <div className="space-y-[5vh]">
              <div>
                <h3 className="text-[#1a1a1a] leading-[1.3] mb-[2vh]" style={{ fontSize: 'clamp(1.1rem, 1.3vw, 1.5rem)', fontWeight: 500 }}>
                  Draft
                </h3>
                <p className="text-[#666] leading-[1.85] max-w-[650px]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)', fontWeight: 300 }}>
                  Early-stage technical documentation based on laboratory experiments, simulations, and initial prototyping. Used to define hypotheses, system architecture, and validation targets.
                </p>
              </div>

              <div>
                <h3 className="text-[#1a1a1a] leading-[1.3] mb-[2vh]" style={{ fontSize: 'clamp(1.1rem, 1.3vw, 1.5rem)', fontWeight: 500 }}>
                  Pilot
                </h3>
                <p className="text-[#666] leading-[1.85] max-w-[650px]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)', fontWeight: 300 }}>
                  Documentation updated with data from controlled pilot deployments and converter trials. Used to assess performance under operational conditions and refine design parameters.
                </p>
              </div>

              <div>
                <h3 className="text-[#1a1a1a] leading-[1.3] mb-[2vh]" style={{ fontSize: 'clamp(1.1rem, 1.3vw, 1.5rem)', fontWeight: 500 }}>
                  Validated
                </h3>
                <p className="text-[#666] leading-[1.85] max-w-[650px]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)', fontWeight: 300 }}>
                  Documentation supported by repeatable pilot results and third-party verification where applicable. Used for regulatory review, licensing discussions, and commercial scale-up preparation.
                </p>
              </div>
            </div>

            <div className="w-full h-[1px] bg-[#1a1a1a]/10 mt-[8vh]"></div>
          </div>

          {/* Primary Technical Document */}
          <div className="mb-[14vh]">
            <p className="text-[#1a1a1a] uppercase tracking-[0.2em] mb-[6vh]" style={{ fontSize: 'clamp(0.7rem, 0.8vw, 0.85rem)', fontWeight: 500 }}>
              Primary Technical Document
            </p>
            
            <div className="border border-[#1a1a1a]/10 overflow-hidden mb-[8vh]">
              <ImageWithFallback 
                src={overripeFruit}
                alt="Fresh produce ripening research"
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
              
              <div className="p-[5vh] md:p-[6vh]">
                <h2 className="text-[#1a1a1a] leading-[1.25] mb-[2vh]" style={{ fontSize: 'clamp(1.8rem, 2.5vw, 3rem)', fontWeight: 300, letterSpacing: '-0.02em' }}>
                  Active Ripening Control in Paper-Based Packaging
                </h2>

                <div className="flex items-center gap-4 text-[#666] mb-[4vh]" style={{ fontSize: 'clamp(0.85rem, 0.95vw, 1.05rem)' }}>
                  <span>Technical White Paper</span>
                  <span>·</span>
                  <span>Version 1.0</span>
                  <span>·</span>
                  <span className="text-[#026448] font-medium">Draft</span>
                </div>

                <p className="text-[#4a4a4a] leading-[1.85] mb-[5vh]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.25rem)', fontWeight: 300 }}>
                  This document describes the core technical principles of the RipeSwitch system and its integration into fibre-based packaging formats.
                </p>

                <p className="text-[#1a1a1a] leading-[1.3] mb-[3vh]" style={{ fontSize: 'clamp(0.95rem, 1.05vw, 1.15rem)', fontWeight: 500 }}>
                  Scope includes:
                </p>

                <ul className="space-y-[2vh] text-[#4a4a4a] mb-[5vh]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)', fontWeight: 300 }}>
                  <li className="leading-[1.75]">System architecture for controlled gas exchange in paper-based enclosures</li>
                  <li className="leading-[1.75]">Functional layer integration within standard paper substrates</li>
                  <li className="leading-[1.75]">Ripening window management for climacteric fruit</li>
                  <li className="leading-[1.75]">Converter compatibility and roll-to-roll process constraints</li>
                  <li className="leading-[1.75]">Performance indicators derived from laboratory simulations and bench testing</li>
                  <li className="leading-[1.75]">Initial considerations for food-contact compliance and recyclability pathways</li>
                </ul>

                <p className="text-[#666] leading-[1.75] mb-[5vh]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.15rem)', fontWeight: 300 }}>
                  Intended audience: Packaging engineers, materials specialists, sustainability teams, and pilot partners.
                </p>
              </div>
            </div>

            <div className="w-full h-[1px] bg-[#1a1a1a]/10"></div>
          </div>

          {/* Supporting Technical Documents */}
          <div className="mb-[14vh]">
            <p className="text-[#1a1a1a] uppercase tracking-[0.2em] mb-[6vh]" style={{ fontSize: 'clamp(0.7rem, 0.8vw, 0.85rem)', fontWeight: 500 }}>
              Supporting Technical Documents
            </p>

            <div className="space-y-[6vh] mb-[8vh]">
              {/* Document 1 */}
              <div className="border-l-2 border-[#026448] pl-[4vh] py-[2vh]">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[#666] mb-[2vh]" style={{ fontSize: 'clamp(0.8rem, 0.9vw, 1rem)' }}>
                  <span>Industry Analysis</span>
                  <span>·</span>
                  <span className="text-[#026448] font-medium">Draft</span>
                </div>

                <h3 className="text-[#1a1a1a] leading-[1.3] mb-[2vh]" style={{ fontSize: 'clamp(1.2rem, 1.5vw, 1.8rem)', fontWeight: 300, letterSpacing: '-0.02em' }}>
                  Economic Impact Assessment: Retail Produce Shrink Mitigation
                </h3>

                <p className="text-[#4a4a4a] leading-[1.85] mb-[3vh] max-w-[700px]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)', fontWeight: 300 }}>
                  Quantitative modelling of produce shrink reduction and margin sensitivity under different retail conditions.
                </p>

                <p className="text-[#1a1a1a] leading-[1.3] mb-[2vh]" style={{ fontSize: 'clamp(0.9rem, 1vw, 1.1rem)', fontWeight: 500 }}>
                  Scope includes:
                </p>

                <ul className="space-y-[1.5vh] text-[#666] max-w-[700px]" style={{ fontSize: 'clamp(0.85rem, 1vw, 1.15rem)', fontWeight: 300 }}>
                  <li className="leading-[1.75]">Typical shrink ranges by produce category</li>
                  <li className="leading-[1.75]">Impact of incremental shelf-life extension on retail economics</li>
                  <li className="leading-[1.75]">Sensitivity analysis for discount and premium retail formats</li>
                  <li className="leading-[1.75]">Implementation considerations for phased rollout</li>
                </ul>
              </div>

              {/* Document 2 */}
              <div className="border-l-2 border-[#026448] pl-[4vh] py-[2vh]">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[#666] mb-[2vh]" style={{ fontSize: 'clamp(0.8rem, 0.9vw, 1rem)' }}>
                  <span>Technical Summary</span>
                  <span>·</span>
                  <span className="text-[#666] font-medium">Working Document</span>
                </div>

                <h3 className="text-[#1a1a1a] leading-[1.3] mb-[2vh]" style={{ fontSize: 'clamp(1.2rem, 1.5vw, 1.8rem)', fontWeight: 300, letterSpacing: '-0.02em' }}>
                  Material Safety & Regulatory Considerations
                </h3>

                <p className="text-[#4a4a4a] leading-[1.85] mb-[3vh] max-w-[700px]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)', fontWeight: 300 }}>
                  Overview of regulatory positioning and material safety considerations relevant to fibre-based active packaging.
                </p>

                <p className="text-[#1a1a1a] leading-[1.3] mb-[2vh]" style={{ fontSize: 'clamp(0.9rem, 1vw, 1.1rem)', fontWeight: 500 }}>
                  Scope includes:
                </p>

                <ul className="space-y-[1.5vh] text-[#666] max-w-[700px]" style={{ fontSize: 'clamp(0.85rem, 1vw, 1.15rem)', fontWeight: 300 }}>
                  <li className="leading-[1.75]">Food-contact compliance framework (EU focus)</li>
                  <li className="leading-[1.75]">Material selection constraints and exclusions</li>
                  <li className="leading-[1.75]">Recyclability and fibre recovery pathways</li>
                  <li className="leading-[1.75]">Identification of areas requiring third-party validation at pilot stage</li>
                </ul>
              </div>

              {/* Document 3 */}
              <div className="border-l-2 border-[#026448] pl-[4vh] py-[2vh]">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[#666] mb-[2vh]" style={{ fontSize: 'clamp(0.8rem, 0.9vw, 1rem)' }}>
                  <span>Pilot Protocol</span>
                  <span>·</span>
                  <span className="text-[#026448] font-medium">Draft</span>
                </div>

                <h3 className="text-[#1a1a1a] leading-[1.3] mb-[2vh]" style={{ fontSize: 'clamp(1.2rem, 1.5vw, 1.8rem)', fontWeight: 300, letterSpacing: '-0.02em' }}>
                  Pilot Study Framework: Nordic Retail Environment
                </h3>

                <p className="text-[#4a4a4a] leading-[1.85] mb-[3vh] max-w-[700px]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)', fontWeight: 300 }}>
                  Structured framework for planned pilot deployments in retail and distribution environments.
                </p>

                <p className="text-[#1a1a1a] leading-[1.3] mb-[2vh]" style={{ fontSize: 'clamp(0.9rem, 1vw, 1.1rem)', fontWeight: 500 }}>
                  Scope includes:
                </p>

                <ul className="space-y-[1.5vh] text-[#666] max-w-[700px]" style={{ fontSize: 'clamp(0.85rem, 1vw, 1.15rem)', fontWeight: 300 }}>
                  <li className="leading-[1.75]">Pilot design and control group definition</li>
                  <li className="leading-[1.75]">Data collection methodology (shrink, handling, acceptance)</li>
                  <li className="leading-[1.75]">Operational integration checkpoints</li>
                  <li className="leading-[1.75]">Criteria for transition from Pilot to Validated status</li>
                </ul>
              </div>
            </div>

            <div className="w-full h-[1px] bg-[#1a1a1a]/10"></div>
          </div>

          {/* Research Domains */}
          <div className="mb-[14vh]">
            <p className="text-[#1a1a1a] uppercase tracking-[0.2em] mb-[6vh]" style={{ fontSize: 'clamp(0.7rem, 0.8vw, 0.85rem)', fontWeight: 500 }}>
              Research Domains
            </p>

            <div className="space-y-[6vh]">
              <div>
                <h3 className="text-[#1a1a1a] leading-[1.3] mb-[2vh]" style={{ fontSize: 'clamp(1.2rem, 1.4vw, 1.6rem)', fontWeight: 400 }}>
                  Materials Engineering
                </h3>
                <p className="text-[#666] leading-[1.85] max-w-[650px]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)', fontWeight: 300 }}>
                  Porous fibre structures, permeability tuning, and functional layer integration compatible with industrial paper converting.
                </p>
              </div>

              <div>
                <h3 className="text-[#1a1a1a] leading-[1.3] mb-[2vh]" style={{ fontSize: 'clamp(1.2rem, 1.4vw, 1.6rem)', fontWeight: 400 }}>
                  Post-Harvest Physiology
                </h3>
                <p className="text-[#666] leading-[1.85] max-w-[650px]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)', fontWeight: 300 }}>
                  Ethylene exposure management, respiration kinetics, and ripening window control for climacteric fruit.
                </p>
              </div>

              <div>
                <h3 className="text-[#1a1a1a] leading-[1.3] mb-[2vh]" style={{ fontSize: 'clamp(1.2rem, 1.4vw, 1.6rem)', fontWeight: 400 }}>
                  Manufacturing Integration
                </h3>
                <p className="text-[#666] leading-[1.85] max-w-[650px]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)', fontWeight: 300 }}>
                  Compatibility with existing converting lines, quality control checkpoints, and scale-up feasibility.
                </p>
              </div>
            </div>

            <div className="w-full h-[1px] bg-[#1a1a1a]/10 mt-[8vh]"></div>
          </div>

          {/* Industry Context and Pilot Approach */}
          <div className="mb-[14vh]">
            <p className="text-[#1a1a1a] uppercase tracking-[0.2em] mb-[4vh]" style={{ fontSize: 'clamp(0.7rem, 0.8vw, 0.85rem)', fontWeight: 500 }}>
              Industry Context and Pilot Approach
            </p>

            <p className="text-[#4a4a4a] leading-[1.85] mb-[4vh] max-w-[750px]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.25rem)', fontWeight: 300 }}>
              The transition away from single-use plastic packaging in food retail is creating a structural gap in fresh produce handling. European regulation requires removal of plastic for many produce categories, while paper-based alternatives lack ripening control. This is increasing shrink and operational risk across retail supply chains.
            </p>

            <p className="text-[#666] leading-[1.85] mb-[6vh] max-w-[750px]" style={{ fontSize: 'clamp(0.95rem, 1.05vw, 1.2rem)', fontWeight: 300 }}>
              RipeSwitch addresses this gap at a system level, functioning within existing infrastructure without electronics, chemical coatings, or active energy. Its relevance applies across high-volume grocery chains, discount retailers, and produce distributors handling climacteric fruit.
            </p>

            <div className="bg-[#f8f8f8] border-l-4 border-[#026448] p-[4vh] mb-[6vh]">
              <p className="text-[#1a1a1a] leading-[1.3] mb-[2vh]" style={{ fontSize: 'clamp(1rem, 1.15vw, 1.3rem)', fontWeight: 500 }}>
                Pilot Validation Requirements
              </p>
              <p className="text-[#666] leading-[1.75] mb-[3vh]" style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.2rem)', fontWeight: 300 }}>
                Early development has been self-funded, focused on experimental validation and prototype construction. The next phase requires pilot-scale validation with retail operators to generate independent performance data:
              </p>

              <ul className="space-y-[1.5vh] text-[#666]" style={{ fontSize: 'clamp(0.85rem, 1vw, 1.15rem)', fontWeight: 300 }}>
                <li className="leading-[1.75] pl-[3vh] relative before:content-['•'] before:absolute before:left-0 before:text-[#026448]">
                  Verification of ripening control under real handling conditions
                </li>
                <li className="leading-[1.75] pl-[3vh] relative before:content-['•'] before:absolute before:left-0 before:text-[#026448]">
                  Shrink reduction measurement relative to standard packaging
                </li>
                <li className="leading-[1.75] pl-[3vh] relative before:content-['•'] before:absolute before:left-0 before:text-[#026448]">
                  Manufacturability and operational compatibility assessment
                </li>
                <li className="leading-[1.75] pl-[3vh] relative before:content-['•'] before:absolute before:left-0 before:text-[#026448]">
                  Documentation for patent filing and commercial readiness
                </li>
              </ul>
            </div>

            <p className="text-[#666] leading-[1.85] max-w-[750px] italic" style={{ fontSize: 'clamp(0.85rem, 1vw, 1.15rem)', fontWeight: 300 }}>
              Pilot participation is sought strictly for technical validation. References to retail formats are illustrative only—no partnerships or endorsements are implied.
            </p>

            <div className="w-full h-[1px] bg-[#1a1a1a]/10 mt-[6vh]"></div>
          </div>

          {/* Intellectual Property Positioning */}
          <div className="mb-[8vh]">
            <p className="text-[#1a1a1a] uppercase tracking-[0.2em] mb-[4vh]" style={{ fontSize: 'clamp(0.7rem, 0.8vw, 0.85rem)', fontWeight: 500 }}>
              Intellectual Property
            </p>

            <p className="text-[#4a4a4a] leading-[1.85] max-w-[750px]" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.25rem)', fontWeight: 300 }}>
              All intellectual property rights, trademarks, and proprietary information belong to RipeSwitch.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
