import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import './WhyUs.css';

const reasons = [
  'Practical digital expertise',
  'Results-focused strategies',
  'Strong digital marketing ecosystem',
  'AI-powered marketing',
  'Structured processes',
  'Continuous support',
  'Data-driven decisions',
  'Business-focused strategies',
  'Lead generation specialists',
  'Conversion-focused marketing'
];

const WhyUs = () => {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="why-section" id="about">
      <div className="container">
        <div className="why-grid">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="why-text"
          >
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              Why Businesses Choose <br/><span className="text-gradient">Bhaav Digital</span>
            </h2>
            <p className="why-desc">
              We don't just do digital marketing. We build digital growth systems. Our approach combines practical expertise with cutting-edge AI technology to deliver measurable business results.
            </p>
            <button 
              onClick={() => scrollTo('#process')}
              className="btn-primary flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform" 
              style={{ marginTop: '24px' }}
            >
              <span>Discover Our Approach</span>
              <ArrowRight size={18} />
            </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="why-list-container glass-panel"
          >
            <ul className="why-list">
              {reasons.map((reason, index) => (
                <li key={index}>
                  <CheckCircle2 className="check-icon" size={20} />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
