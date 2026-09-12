import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, ArrowRight, CheckCircle2 } from 'lucide-react';
import './CaseStudies.css';

const caseStudies = [
  {
    client: 'EcoBrand Solutions',
    industry: 'E-commerce / Retail',
    challenge: 'Stagnant website traffic and low conversion rate for their sustainable product line.',
    strategy: 'Full-funnel Meta Ads strategy combined with Technical SEO optimization and high-speed landing page rebuild.',
    execution: [
      'Researched high-intent buyer keywords with 40%+ purchase intent',
      'Engineered dynamic Instagram Reels and Carousel ads emphasizing product benefits',
      'Decreased site load time from 4.2s to 0.8s, doubling checkout conversion',
      'Implemented automated email cart recovery achieving 22% reclaim rate'
    ],
    services: ['Meta Ads', 'SEO', 'Conversion Rate Optimization'],
    metrics: [
      { label: 'ROAS', value: '4.2X' },
      { label: 'Traffic', value: '+156%' },
      { label: 'CPA', value: '-32%' }
    ]
  },
  {
    client: 'TechFlow Software',
    industry: 'B2B SaaS',
    challenge: 'High cost per lead on Google Search and low quality demo requests resulting in low sales close rates.',
    strategy: 'Restructured Google Ads using Performance Max and created targeted AI-driven landing pages with qualification funnels.',
    execution: [
      'Eliminated negative search terms saving ₹2.4 Lakhs in ad spend per month',
      'Deployed interactive quiz funnel to qualify enterprise vs SMB buyers',
      'Retargeted high-intent website visitors via LinkedIn video ads',
      'Connected CRM to Google Ads Offline Conversion tracking for automated bidding'
    ],
    services: ['Google Ads', 'Landing Pages', 'AI Content'],
    metrics: [
      { label: 'Lead Volume', value: '+85%' },
      { label: 'Cost/Lead', value: '-45%' },
      { label: 'Demo Bookings', value: '+60%' }
    ]
  }
];

const CaseStudyCard = ({ study, index, onOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="case-study-card glass-panel cursor-pointer hover:border-cyan-400/50 transition-all"
      onClick={() => onOpen(study)}
    >
      <div className="case-header">
        <div>
          <h3 className="case-client">{study.client}</h3>
          <span className="case-industry">{study.industry}</span>
        </div>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onOpen(study);
          }}
          className="case-link-btn cursor-pointer"
          title="View Full Case Study"
        >
          <ArrowUpRight size={24} />
        </button>
      </div>
      
      <div className="case-body">
        <div className="case-section">
          <h4>Challenge</h4>
          <p>{study.challenge}</p>
        </div>
        <div className="case-section">
          <h4>Strategy</h4>
          <p>{study.strategy}</p>
        </div>
      </div>
      
      <div className="case-metrics">
        {study.metrics.map((metric, idx) => (
          <div className="metric-box" key={idx}>
            <div className="metric-value text-gradient">{metric.value}</div>
            <div className="metric-label">{metric.label}</div>
          </div>
        ))}
      </div>
      
      <div className="case-services">
        {study.services.map((service, idx) => (
          <span key={idx} className="service-tag">{service}</span>
        ))}
      </div>
    </motion.div>
  );
};

const CaseStudies = () => {
  const [selectedCase, setSelectedCase] = useState(null);

  const scrollToContact = () => {
    setSelectedCase(null);
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="cases-section" id="work">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Results That <span className="text-gradient">Speak for Themselves</span></h2>
          <p className="section-subtitle">
            We measure our success by your growth. Here's how we've helped other businesses scale their revenue and dominate their market.
          </p>
        </div>
        
        <div className="cases-grid">
          {caseStudies.map((study, index) => (
            <CaseStudyCard 
              key={index} 
              study={study} 
              index={index} 
              onOpen={(s) => setSelectedCase(s)}
            />
          ))}
        </div>
      </div>

      {/* Case Study Deep Dive Modal */}
      <AnimatePresence>
        {selectedCase && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedCase(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg p-7 bg-[#0a0a14] border border-purple-500/30 rounded-3xl shadow-2xl overflow-hidden text-left"
            >
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-5 right-5 p-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full cursor-pointer transition-colors border-none"
              >
                <X size={20} />
              </button>

              <span className="text-xs font-semibold text-purple-400 tracking-wider uppercase">{selectedCase.industry}</span>
              <h3 className="text-2xl font-bold text-white mb-4">{selectedCase.client} Case Study</h3>

              <div className="grid grid-cols-3 gap-2 mb-5">
                {selectedCase.metrics.map((m, idx) => (
                  <div key={idx} className="bg-white/5 p-3 rounded-2xl text-center border border-white/10">
                    <div className="text-xl font-bold text-gradient">{m.value}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>

              <h4 className="text-xs font-semibold uppercase text-gray-400 tracking-wider mb-2">Key Executions:</h4>
              <div className="space-y-2 mb-6">
                {selectedCase.execution.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-gray-200">
                    <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={scrollToContact}
                className="btn-primary w-full !py-3 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Achieve Similar Results for My Brand</span>
                <ArrowRight size={18} />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CaseStudies;
