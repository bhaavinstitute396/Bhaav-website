import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <button 
          onClick={() => scrollTo('#home')} 
          className="logo brand-font bg-transparent border-none p-0 cursor-pointer text-left"
        >
          BHAAV <span className="text-gradient">DIGITAL</span>
        </button>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button 
                  onClick={() => scrollTo(link.href)} 
                  className="nav-link bg-transparent border-none cursor-pointer p-0 text-inherit font-inherit"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
          <button 
            onClick={() => scrollTo('#contact')} 
            className="btn-primary cursor-pointer hover:scale-105 transition-transform"
          >
            Free Consultation
          </button>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="mobile-toggle cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-menu glass-panel"
          >
            <ul className="mobile-nav-links">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => scrollTo(link.href)} 
                    className="mobile-nav-link w-full text-left bg-transparent border-none cursor-pointer p-2 text-inherit"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
            <button 
              onClick={() => scrollTo('#contact')} 
              className="btn-primary w-full mt-4 cursor-pointer"
            >
              Free Consultation
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
