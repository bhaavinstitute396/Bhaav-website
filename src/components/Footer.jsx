import React, { useState } from 'react';
import { Mail, MapPin, Phone, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Custom social icons as inline SVG
const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
import './Footer.css';

const Footer = () => {
  const [legalModal, setLegalModal] = useState(null); // 'privacy' | 'terms' | null

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-grid">
          <div className="footer-about">
            <button 
              onClick={() => scrollTo('#home')}
              className="brand-font logo-footer bg-transparent border-none p-0 cursor-pointer text-left font-inherit"
            >
              BHAAV <span className="text-gradient">DIGITAL</span>
            </button>
            <p className="footer-description">
              Digital Marketing &amp; 3D Growth Agency helping businesses generate leads, increase visibility, and scale revenue.
            </p>
            <div className="social-links">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="social-link cursor-pointer hover:text-cyan-400"
                title="Facebook"
              >
                <FacebookIcon />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                className="social-link cursor-pointer hover:text-cyan-400"
                title="X (Twitter)"
              >
                <TwitterIcon />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="social-link cursor-pointer hover:text-pink-400"
                title="Instagram"
              >
                <InstagramIcon />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="social-link cursor-pointer hover:text-blue-400"
                title="LinkedIn"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-title">Quick Links</h4>
            <ul>
              <li><button onClick={() => scrollTo('#home')} className="bg-transparent border-none text-inherit p-0 cursor-pointer hover:text-cyan-400">Home</button></li>
              <li><button onClick={() => scrollTo('#about')} className="bg-transparent border-none text-inherit p-0 cursor-pointer hover:text-cyan-400">About</button></li>
              <li><button onClick={() => scrollTo('#services')} className="bg-transparent border-none text-inherit p-0 cursor-pointer hover:text-cyan-400">Services</button></li>
              <li><button onClick={() => scrollTo('#work')} className="bg-transparent border-none text-inherit p-0 cursor-pointer hover:text-cyan-400">Work</button></li>
              <li><button onClick={() => scrollTo('#faq')} className="bg-transparent border-none text-inherit p-0 cursor-pointer hover:text-cyan-400">FAQ</button></li>
              <li><button onClick={() => scrollTo('#contact')} className="bg-transparent border-none text-inherit p-0 cursor-pointer hover:text-cyan-400">Contact</button></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-title">Services</h4>
            <ul>
              <li><button onClick={() => scrollTo('#services')} className="bg-transparent border-none text-inherit p-0 cursor-pointer hover:text-cyan-400">SEO</button></li>
              <li><button onClick={() => scrollTo('#services')} className="bg-transparent border-none text-inherit p-0 cursor-pointer hover:text-cyan-400">Google Ads</button></li>
              <li><button onClick={() => scrollTo('#services')} className="bg-transparent border-none text-inherit p-0 cursor-pointer hover:text-cyan-400">Meta Ads</button></li>
              <li><button onClick={() => scrollTo('#services')} className="bg-transparent border-none text-inherit p-0 cursor-pointer hover:text-cyan-400">Lead Generation</button></li>
              <li><button onClick={() => scrollTo('#ai-solutions')} className="bg-transparent border-none text-inherit p-0 cursor-pointer hover:text-cyan-400">AI Marketing</button></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-title">Contact</h4>
            <ul>
              <li>
                <MapPin size={18} className="contact-icon flex-shrink-0" />
                <a 
                  href="https://maps.google.com/?q=Paschim+Vihar,+New+Delhi" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-cyan-400 cursor-pointer"
                >
                  House No. 396, 1st Floor, Bhera Enclave, Paschim Vihar, New Delhi - 110087
                </a>
              </li>
              <li>
                <Phone size={18} className="contact-icon flex-shrink-0" />
                <a href="tel:+919266347226" className="hover:text-cyan-400 cursor-pointer">+91 92663 47226</a>
              </li>
              <li>
                <Mail size={18} className="contact-icon flex-shrink-0" />
                <a href="mailto:bhaavinstitutedigitalagency@gmail.com" className="hover:text-cyan-400 cursor-pointer">bhaavinstitutedigitalagency@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright &copy; 2026 Bhaav Digital. All rights reserved.</p>
          <div className="footer-legal">
            <button 
              onClick={() => setLegalModal('privacy')}
              className="bg-transparent border-none text-gray-400 hover:text-white p-0 cursor-pointer mr-4 text-xs font-inherit"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setLegalModal('terms')}
              className="bg-transparent border-none text-gray-400 hover:text-white p-0 cursor-pointer text-xs font-inherit"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      {/* Legal Information Modal */}
      <AnimatePresence>
        {legalModal && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setLegalModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg p-6 bg-[#0a0a14] border border-white/20 rounded-3xl shadow-2xl text-left"
            >
              <button
                onClick={() => setLegalModal(null)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full cursor-pointer transition-colors border-none"
              >
                <X size={20} />
              </button>

              <h3 className="text-xl font-bold text-white mb-3">
                {legalModal === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
              </h3>

              <div className="text-sm text-gray-300 space-y-3 max-h-64 overflow-y-auto pr-2">
                {legalModal === 'privacy' ? (
                  <>
                    <p>At Bhaav Digital, we take client and visitor privacy seriously. We collect necessary business contact information solely for responding to growth consultation requests and servicing active accounts.</p>
                    <p>We do not sell, distribute, or lease personal information to third parties without explicit consent, unless required by applicable law.</p>
                    <p>Our website utilizes secure cookies and performance analytics to deliver an optimal browsing and 3D web experience.</p>
                  </>
                ) : (
                  <>
                    <p>By engaging with Bhaav Digital, clients agree to adhere to transparent performance timelines and deliverable milestones defined in their custom service agreement.</p>
                    <p>All creative assets, 3D code components, and digital growth campaigns built on client accounts remain client property upon completion of milestone payments.</p>
                    <p>For any queries regarding project deliverables or timelines, reach our support team at bhaavinstitutedigitalagency@gmail.com.</p>
                  </>
                )}
              </div>

              <div className="mt-5 text-right">
                <button
                  onClick={() => setLegalModal(null)}
                  className="btn-primary !py-2 !px-5 text-sm cursor-pointer"
                >
                  I Understand
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
