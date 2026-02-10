import { MotionConfig } from "motion/react";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { BackToTop } from "./components/BackToTop";
import { useEffect, useState, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage").then((m) => ({ default: m.HomePage })));
const PerformanceModelingPage = lazy(() => import("./pages/PerformanceModelingPage").then((m) => ({ default: m.PerformanceModelingPage })));
const WhitePaperPage = lazy(() => import("./pages/WhitePaperPage").then((m) => ({ default: m.WhitePaperPage })));
const ActiveRipeningControlPage = lazy(() => import("./pages/whitepapers/ActiveRipeningControlPage").then((m) => ({ default: m.ActiveRipeningControlPage })));
const EconomicImpactAssessmentPage = lazy(() => import("./pages/whitepapers/EconomicImpactAssessmentPage").then((m) => ({ default: m.EconomicImpactAssessmentPage })));
const MaterialSafetyCompliancePage = lazy(() => import("./pages/whitepapers/MaterialSafetyCompliancePage").then((m) => ({ default: m.MaterialSafetyCompliancePage })));
const PilotStudyNordicRetailPage = lazy(() => import("./pages/whitepapers/PilotStudyNordicRetailPage").then((m) => ({ default: m.PilotStudyNordicRetailPage })));
const TechnologyPage = lazy(() => import("./pages/TechnologyPage").then((m) => ({ default: m.TechnologyPage })));
const TechnicalSpecificationPage = lazy(() => import("./pages/TechnicalSpecificationPage").then((m) => ({ default: m.TechnicalSpecificationPage })));
const AboutPage = lazy(() => import("./pages/AboutPage").then((m) => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import("./pages/ContactPage").then((m) => ({ default: m.ContactPage })));

// Main App Component with Routing
export default function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(media.matches);
    update();
    if (media.addEventListener) {
      media.addEventListener("change", update);
      return () => media.removeEventListener("change", update);
    }
    media.addListener(update);
    return () => media.removeListener(update);
  }, []);

  return (
    <MotionConfig reducedMotion={isMobile ? "always" : "user"}>
      <BrowserRouter>
        <ScrollToTop />
        <BackToTop />
        <div className="flex flex-col min-h-screen">
          <div className="flex-1">
            <Suspense
              fallback={
                <div className="min-h-[60vh] flex items-center justify-center text-[#026448]">
                  <span className="text-lg font-medium">Loading…</span>
                </div>
              }
            >
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/technology" element={<TechnologyPage />} />
                <Route path="/technical-specification" element={<TechnicalSpecificationPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/research" element={<PerformanceModelingPage />} />
                <Route path="/research-library" element={<WhitePaperPage />} />
                <Route path="/research/active-ripening-control" element={<ActiveRipeningControlPage />} />
                <Route path="/research/economic-impact-assessment" element={<EconomicImpactAssessmentPage />} />
                <Route path="/research/material-safety-compliance" element={<MaterialSafetyCompliancePage />} />
                <Route path="/research/pilot-study-nordic-retail" element={<PilotStudyNordicRetailPage />} />
              </Routes>
            </Suspense>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </MotionConfig>
  );
}
