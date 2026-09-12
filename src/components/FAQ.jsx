import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight, MessageSquare } from 'lucide-react';
import './FAQ.css';

const faqs = [
  {
    question: "What digital marketing services do you provide?",
    answer: "We offer a full suite of digital marketing services including SEO, Google Ads, Meta Ads, Social Media Marketing, Website Development, AI-Powered Content Marketing, Lead Generation, and Online Reputation Management."
  },
  {
    question: "Do you work with small businesses?",
    answer: "Yes! We work with businesses of all sizes, from local startups to enterprise brands. Our strategies are customized based on your specific business goals and marketing budget."
  },
  {
    question: "Do you provide SEO?",
    answer: "Absolutely. We provide comprehensive SEO services including keyword research, on-page optimization, technical SEO, off-page link building, and local SEO to improve your organic rankings."
  },
  {
    question: "Do you manage Google Ads?",
    answer: "Yes, we are experts in Google Ads management. We handle Search, Display, YouTube, and Performance Max campaigns, optimizing for the lowest Cost Per Acquisition (CPA) and highest ROAS."
  },
  {
    question: "Do you manage Meta Ads?",
    answer: "Yes, we run highly targeted Facebook and Instagram ad campaigns focused on lead generation, traffic, and conversions, complete with pixel setup and retargeting strategies."
  },
  {
    question: "Can you build websites?",
    answer: "Yes, we design and develop high-converting, responsive websites and landing pages optimized for speed, user experience, and lead generation."
  },
  {
    question: "Do you provide lead generation?",
    answer: "Lead generation is our core specialty. We build end-to-end funnels using Google Ads, Meta Ads, Landing Pages, and Automation to deliver high-quality, exclusive leads for your business."
  },
  {
    question: "Do you use AI in marketing?",
    answer: "Yes, we leverage cutting-edge AI tools for content creation, data analysis, copywriting, predictive modeling, and marketing automation to deliver faster and more scalable results."
  },
  {
    question: "How can I get started?",
    answer: "Getting started is easy. Simply fill out our contact form or book a free growth consultation. We'll analyze your current digital presence and provide a custom strategy roadmap."
  }
];

const FAQItem = ({ faq, isOpen, toggleOpen }) => {
  return (
    <div className={`faq-item glass-panel ${isOpen ? 'open' : ''}`}>
      <button className="faq-question cursor-pointer" onClick={toggleOpen}>
        <span>{faq.question}</span>
        {isOpen ? <Minus className="faq-icon" /> : <Plus className="faq-icon" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="faq-answer-wrapper"
          >
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Frequently Asked <span className="text-gradient">Questions</span></h2>
          <p className="section-subtitle">
            Got questions about how we can grow your business? Find answers to our most common inquiries below.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              faq={faq} 
              isOpen={openIndex === index} 
              toggleOpen={() => setOpenIndex(openIndex === index ? -1 : index)} 
            />
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-12 flex flex-col items-center">
          <div className="glass-panel p-6 rounded-2xl max-w-md w-full border border-white/10 text-center flex flex-col items-center">
            <MessageSquare size={28} className="text-cyan-400 mb-2" />
            <h3 className="text-lg font-semibold text-white mb-1">Still have a specific question?</h3>
            <p className="text-sm text-gray-400 mb-4">Our digital strategists are ready to help you evaluate your requirements.</p>
            <button 
              onClick={scrollToContact}
              className="btn-primary flex items-center justify-center gap-2 cursor-pointer hover:scale-105 transition-transform"
            >
              <span>Ask Our Team Directly</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
