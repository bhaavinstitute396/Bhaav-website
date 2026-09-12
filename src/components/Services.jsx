import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MonitorPlay, Share2, MousePointerClick, Globe, Sparkles, Magnet, ShieldCheck, X, Check, ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import './Services.css';

const servicesList = [
  {
    id: '01',
    title: 'Search Engine Optimization',
    icon: <Search size={32} />,
    desc: 'Dominate Google rankings and drive high-intent organic traffic with modern technical, content, and authority-building SEO.',
    items: ['Keyword Research & Intent Mapping', 'On-Page Content Optimization', 'Technical Site Architecture SEO', 'High-Authority Backlink Acquisition', 'Local Google Business Profile SEO', 'Full Competitive Audit & Roadmap']
  },
  {
    id: '02',
    title: 'Google Ads / PPC',
    icon: <MousePointerClick size={32} />,
    desc: 'Capture ready-to-buy customers at the precise moment they search for your solutions with maximum ROAS.',
    items: ['High-Intent Search Ads', 'Interactive Display Network', 'High-Converting YouTube Video Ads', 'Smart Lead Capture Ads', 'E-commerce Shopping Ads', 'AI Performance Max Campaigns']
  },
  {
    id: '03',
    title: 'Meta Ads',
    icon: <MonitorPlay size={32} />,
    desc: 'Engage and convert hyper-targeted audiences on Instagram and Facebook with scroll-stopping creatives and funnels.',
    items: ['Facebook Dynamic Creative Ads', 'Instagram Reels & Story Ads', 'High-Volume Traffic Funnels', 'Direct Lead Generation Forms', 'Precision Retargeting & Lookalikes', 'Conversion API & Server-Side Pixel']
  },
  {
    id: '04',
    title: 'Social Media Marketing',
    icon: <Share2 size={32} />,
    desc: 'Build an authoritative, loyal brand community that turns followers into lifelong paying brand advocates.',
    items: ['Instagram Organic Brand Growth', 'LinkedIn B2B Thought Leadership', 'Content Calendar & Visuals Strategy', 'Influencer Partnership Campaigns', 'Automated Direct Message Funnels', 'Community Management & Engagement']
  },
  {
    id: '05',
    title: 'Website Development',
    icon: <Globe size={32} />,
    desc: 'Ultra-fast, responsive 3D and modern web applications built for unmatched conversion rates and brand prestige.',
    items: ['Custom High-Speed Business Websites', 'Full 3D Interactive Web Experiences', 'High-Converting Landing Pages', 'Mobile-First Fluid Responsiveness', 'Conversion Rate Optimization (CRO)', 'Full Analytics & Tracking Integration']
  },
  {
    id: '06',
    title: 'Content & AI Marketing',
    icon: <Sparkles size={32} />,
    desc: 'Scale your marketing velocity 10x using custom AI workflows, predictive models, and viral storytelling.',
    items: ['AI Content Engine & Copywriting', 'AI Visual & Generative Asset Creation', 'Automated Social Media Scheduling', 'Predictive Customer Segmentation', 'Interactive AI Chatbot Assistants', 'Personalized Email Drip Sequences']
  },
  {
    id: '07',
    title: 'Lead Generation Systems',
    icon: <Magnet size={32} />,
    desc: 'Predictable, automated lead acquisition pipelines that deliver qualified prospective clients to your sales team.',
    items: ['Multi-Channel Funnel Architecture', 'Automated WhatsApp Marketing Workflows', 'Smart Lead Scoring & Nurturing', 'High-Converting Video VSL Pages', 'Cold Email & Automated Outreach', 'CRM & Calendar Integration']
  },
  {
    id: '08',
    title: 'Online Reputation & Branding',
    icon: <ShieldCheck size={32} />,
    desc: 'Protect, elevate, and solidify your brand reputation across every digital touchpoint in your industry.',
    items: ['Google Review Growth Automation', 'Executive Thought Leadership Positioning', 'Online Sentiment & PR Monitoring', 'Comprehensive Brand Identity Design', 'Crisis Management Systems', 'Industry Authority Badging']
  }
];

const ServiceCard = ({ service, index, onSelect }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="service-card glass-panel cursor-pointer hover:border-cyan-400/50 transition-all"
      onClick={() => onSelect(service)}
    >
      <div className="service-header">
        <div className="service-icon-wrapper">
          {service.icon}
        </div>
        <span className="service-number">{service.id}</span>
      </div>
      <h3 className="service-title">{service.title}</h3>
      <ul className="service-features">
        {service.items.slice(0, 4).map((item, idx) => (
          <li key={idx}>
            <span className="bullet"></span> {item}
          </li>
        ))}
      </ul>
      <button 
        onClick={(e) => {
          e.stopPropagation();
          onSelect(service);
        }}
        className="service-link bg-transparent border-none p-0 cursor-pointer font-inherit text-cyan-400 flex items-center gap-1.5 hover:text-cyan-300"
      >
        <span>View Full Details</span>
        <ArrowRight size={16} />
      </button>
    </motion.div>
  );
};

const Services = () => {
  const [activeModalService, setActiveModalService] = useState(null);

  const scrollToContact = (serviceTitle) => {
    setActiveModalService(null);
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Pre-select service in dropdown if exists
    setTimeout(() => {
      const select = document.querySelector('select[name="service"]') || document.querySelector('select');
      if (select) {
        for (let i = 0; i < select.options.length; i++) {
          if (select.options[i].text.toLowerCase().includes(serviceTitle.toLowerCase().slice(0, 4))) {
            select.selectedIndex = i;
            break;
          }
        }
      }
    }, 400);
  };

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Everything You Need To <span className="text-gradient">Grow Online</span></h2>
          <p className="section-subtitle">
            Comprehensive digital marketing solutions designed to increase visibility, generate qualified leads, and maximize your return on investment.
          </p>
        </div>

        <div className="services-grid">
          {servicesList.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index} 
              onSelect={(s) => setActiveModalService(s)}
            />
          ))}
        </div>
      </div>

      {/* Interactive Service Detail Modal */}
      <AnimatePresence>
        {activeModalService && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setActiveModalService(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg p-7 bg-[#0a0a14] border border-cyan-500/30 rounded-3xl shadow-2xl overflow-hidden text-left"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalService(null)}
                className="absolute top-5 right-5 p-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full cursor-pointer transition-colors border-none"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-2xl border border-cyan-500/20">
                  {activeModalService.icon}
                </div>
                <div>
                  <span className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">Service {activeModalService.id}</span>
                  <h3 className="text-2xl font-bold text-white leading-tight">{activeModalService.title}</h3>
                </div>
              </div>

              <p className="text-gray-300 text-sm mb-5 leading-relaxed">
                {activeModalService.desc}
              </p>

              <h4 className="text-xs font-semibold uppercase text-gray-400 tracking-wider mb-3">
                Key Inclusions &amp; Deliverables:
              </h4>

              <div className="grid grid-cols-1 gap-2 mb-6 max-h-48 overflow-y-auto pr-1">
                {activeModalService.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-200 bg-white/5 p-2 rounded-xl">
                    <Check size={16} className="text-cyan-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => scrollToContact(activeModalService.title)}
                  className="btn-primary flex-1 !py-3 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Inquire for {activeModalService.title}</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
