import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar({ onHomeClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "about", label: "About Me" },
    { to: "expertise", label: "Expertise" },
    { to: "mastery", label: "Mastery" },
    { to: "experience", label: "Jobs" },
    { to: "academic", label: "Academics" },
    { to: "skills", label: "Skills" },
    { to: "approach", label: "Approach" },
    { to: "projects", label: "Projects" },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    onHomeClick?.();
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-[80] transition-all duration-300 px-6 md:px-8 py-4 md:py-5 flex items-center ${scrolled || isMenuOpen ? 'bg-background/95 backdrop-blur-md border-b border-white/5 shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
          <Link to="home" smooth spy onClick={handleLinkClick} className="cursor-pointer z-[90]">
            <img src="/cld_logo.png" alt="My Logo" className="h-7 md:h-10 object-contain hover:scale-105 transition-transform" />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex flex-wrap justify-center gap-x-4 lg:gap-x-6 xl:gap-x-8 text-[11px] xl:text-[13px] font-bold text-zinc-500">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link 
                  to={link.to} 
                  offset={-80} 
                  smooth 
                  spy 
                  onClick={handleLinkClick} 
                  activeClass="!text-white border-b-2 border-primary pb-1" 
                  className="cursor-pointer hover:text-white transition-all uppercase tracking-widest whitespace-nowrap"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <Link to="contact" smooth onClick={handleLinkClick} className="hidden sm:flex bg-primary hover:bg-red-700 text-white px-5 py-2 rounded-full text-[12px] font-bold cursor-pointer transition-all shadow-[0_0_15px_rgba(229,9,20,0.3)] hover:shadow-[0_0_25px_rgba(229,9,20,0.5)] flex items-center gap-2">
              GET IN TOUCH <span aria-hidden="true">&rarr;</span>
            </Link>

            {/* Mobile Toggle */}
            <button 
              className="lg:hidden p-2 text-white hover:text-primary transition-all relative z-[90] flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <FaTimes className="w-6 h-6 text-white" />
              ) : (
                <FaBars className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[70] lg:hidden transition-all duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-background/98 backdrop-blur-2xl" />
        
        <div className="relative h-full flex flex-col items-center justify-center p-8">
          <ul className="flex flex-col items-center gap-8 text-center">
            {navLinks.map((link, idx) => (
              <li key={link.to} style={{ transitionDelay: `${idx * 50}ms` }} className={`transition-all duration-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <Link
                  to={link.to}
                  offset={-80}
                  smooth
                  spy
                  onClick={handleLinkClick}
                  className="text-2xl md:text-3xl font-black text-white hover:text-primary transition-colors tracking-tighter uppercase"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className={`mt-8 transition-all duration-500 delay-500 ${isMenuOpen ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
               <Link 
                to="contact" 
                smooth 
                onClick={handleLinkClick} 
                className="bg-primary hover:bg-red-700 text-white px-10 py-4 rounded-full text-lg font-black transition-all shadow-[0_0_30px_rgba(229,9,20,0.4)]"
               >
                 GET IN TOUCH
               </Link>
            </li>
          </ul>

          <div className="absolute bottom-12 text-zinc-600 text-xs font-bold tracking-[0.2em] uppercase">
            © {new Date().getFullYear()} Makz Portfolio
          </div>
        </div>
      </div>
    </>
  );
}
