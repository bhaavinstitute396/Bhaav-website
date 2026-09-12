import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import './Funnel.css';

const steps = [
  { id: '01', title: 'Strategy', desc: 'Data-driven market and competitor planning' },
  { id: '02', title: 'Build', desc: 'High-converting 3D and digital asset creation' },
  { id: '03', title: 'Attract', desc: 'Targeted multi-channel traffic and high visibility' },
  { id: '04', title: 'Convert', desc: 'Funnels, automated forms, and lead qualification' },
  { id: '05', title: 'Optimize', desc: 'Continuous testing, A/B experiments, and tuning' },
  { id: '06', title: 'Scale', desc: 'Multiplied budget, predictable and exponential revenue' }
];

const FunnelStep = ({ step, index, onSelect }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="funnel-step cursor-pointer"
      onClick={onSelect}
    >
      <div className="funnel-node">
        <div className="funnel-node-inner text-gradient">{step.id}</div>
      </div>
      <div className="funnel-content glass-panel hover:border-cyan-400/50 transition-all">
        <h4 className="funnel-title">{step.title}</h4>
        <p className="funnel-desc">{step.desc}</p>
      </div>
    </motion.div>
  );
};

const Funnel = () => {
  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="funnel-section" id="process">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">How We Grow <span className="text-gradient">Your Business</span></h2>
          <p className="section-subtitle">
            A proven, structured approach to digital marketing that turns cold traffic into loyal customers.
          </p>
        </div>
        
        <div className="funnel-container">
          <div className="funnel-line"></div>
          {steps.map((step, index) => (
            <FunnelStep key={step.id} step={step} index={index} onSelect={scrollToContact} />
          ))}
        </div>

        <div className="text-center mt-12 flex justify-center">
          <button 
            onClick={scrollToContact}
            className="btn-primary flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform"
          >
            <span>Ready to Start Step 01? Launch Your Strategy</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Funnel;
