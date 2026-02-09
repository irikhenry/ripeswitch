import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../../imports/Logo";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 px-[5vw] md:px-[3vw] py-[3vh] md:py-[4vh] transition-all duration-300 ${
        isScrolled 
          ? 'bg-transparent backdrop-blur-xl border-b border-white/10' 
          : 'bg-transparent'
      }`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-white text-[#026448] px-4 py-2 rounded-full"
        >
          Skip to content
        </a>
        <div className="w-full flex items-center justify-between">
          <Link to="/" className="w-[clamp(140px,22vw,320px)] md:w-[clamp(180px,18vw,320px)]" onClick={closeMenu}>
            <Logo />
          </Link>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 rounded-full bg-[#026448]/80 backdrop-blur-md border text-white hover:text-[#EEFF41] hover:border-[#EEFF41]/30 transition-all z-50 font-ui"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="nav-drawer"
          >
            <span className="hidden md:inline text-sm font-light tracking-wider">MENU</span>
            {isMenuOpen ? (
              <X size={16} strokeWidth={1.5} className="md:w-5 md:h-5" />
            ) : (
              <div className="flex flex-col gap-0.5 md:gap-1">
                <div className="w-4 md:w-5 h-[1.5px] bg-current"></div>
                <div className="w-4 md:w-5 h-[1.5px] bg-current"></div>
              </div>
            )}
          </button>
        </div>
      </nav>

      {/* Menu Drawer Overlay */}
      <div
        id="nav-drawer"
        aria-hidden={!isMenuOpen}
        className={`fixed inset-0 bg-[#026448] z-40 transition-transform duration-500 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col justify-center items-start h-full px-[8vw] md:px-[12vw]">
          <nav className="space-y-[3vh]">
            <Link
              to="/"
              onClick={closeMenu}
              className={`block text-white hover:text-[#EEFF41] transition-colors font-ui ${
                location.pathname === '/' ? 'text-[#EEFF41]' : ''
              }`}
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, letterSpacing: '-0.02em' }}
            >
              Home
            </Link>

            <Link
              to="/technology"
              onClick={closeMenu}
              className={`block text-white hover:text-[#EEFF41] transition-colors font-ui ${
                location.pathname === '/technology' ? 'text-[#EEFF41]' : ''
              }`}
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, letterSpacing: '-0.02em' }}
            >
              Technology
            </Link>

            <Link
              to="/technical-specification"
              onClick={closeMenu}
              className={`block text-white hover:text-[#EEFF41] transition-colors font-ui ${
                location.pathname === '/technical-specification' ? 'text-[#EEFF41]' : ''
              }`}
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, letterSpacing: '-0.02em' }}
            >
              Technical Specification
            </Link>

            <Link
              to="/research"
              onClick={closeMenu}
              className={`block text-white hover:text-[#EEFF41] transition-colors font-ui ${
                location.pathname.startsWith('/research') ? 'text-[#EEFF41]' : ''
              }`}
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, letterSpacing: '-0.02em' }}
            >
              Research & White Papers
            </Link>

            <Link
              to="/about"
              onClick={closeMenu}
              className={`block text-white hover:text-[#EEFF41] transition-colors font-ui ${
                location.pathname === '/about' ? 'text-[#EEFF41]' : ''
              }`}
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, letterSpacing: '-0.02em' }}
            >
              About us
            </Link>

            <Link
              to="/contact"
              onClick={closeMenu}
              className={`block text-white hover:text-[#EEFF41] transition-colors font-ui ${
                location.pathname === '/contact' ? 'text-[#EEFF41]' : ''
              }`}
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, letterSpacing: '-0.02em' }}
            >
              Contact us
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
