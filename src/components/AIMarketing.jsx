import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, ArrowRight } from 'lucide-react';
import './AIMarketing.css';

const AIMarketing = () => {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="ai-section" id="ai-solutions">
      <div className="container">
        <div className="ai-container glass-panel">
          <div className="ai-visual">
            <div className="ai-core">
              <BrainCircuit size={64} className="brain-icon" />
            </div>
            
            <div className="orbit orbit-1">
              <button onClick={() => scrollTo('#services')} className="node cursor-pointer border-none bg-transparent">Content</button>
              <button onClick={() => scrollTo('#services')} className="node cursor-pointer border-none bg-transparent">SEO</button>
            </div>
            <div className="orbit orbit-2">
              <button onClick={() => scrollTo('#services')} className="node cursor-pointer border-none bg-transparent">Ads</button>
              <button onClick={() => scrollTo('#services')} className="node cursor-pointer border-none bg-transparent">Social</button>
              <button onClick={() => scrollTo('#services')} className="node cursor-pointer border-none bg-transparent">Sales</button>
            </div>
            <div className="orbit orbit-3">
              <button onClick={() => scrollTo('#services')} className="node cursor-pointer border-none bg-transparent">Analytics</button>
              <button onClick={() => scrollTo('#services')} className="node cursor-pointer border-none bg-transparent">Automation</button>
            </div>
          </div>
          
          <div className="ai-text">
            <div className="badge">AI-Powered Growth</div>
            <h2>The Future of Marketing Is <br/><span className="text-gradient">AI-Powered</span></h2>
            <p>From content creation to campaign optimization, we use artificial intelligence to make digital marketing faster, smarter and more scalable. Stay ahead of the competition with predictive analytics and automated workflows.</p>
            <button 
              onClick={() => scrollTo('#contact')}
              className="btn-primary mt-4 flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform"
            >
              <span>Explore AI Solutions</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIMarketing;
