import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronUp } from 'lucide-react';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const toggleVisibility = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const visible = window.scrollY > 500;
        setIsVisible((prev) => (prev !== visible ? visible : prev));
        ticking = false;
      });
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    toggleVisibility();

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.button
      initial={false}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      onClick={scrollToTop}
      className="fixed bottom-[4vh] right-[4vw] z-50 bg-[#026448] text-white p-4 rounded-full shadow-lg hover:bg-[#EEFF41] hover:text-[#026448] transition-colors duration-300 group"
      aria-label="Back to top"
      style={{ pointerEvents: isVisible ? "auto" : "none" }}
    >
      <ChevronUp className="w-6 h-6" />
    </motion.button>
  );
}
