import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    name: "Ramesh Sharma",
    role: "CEO, RetailHub",
    content: "Bhaav Digital transformed our online presence. Their lead generation strategies resulted in a 300% ROI within the first 3 months. Truly exceptional team."
  },
  {
    name: "Sneha Gupta",
    role: "Founder, TechStart",
    content: "The level of expertise Bhaav brings is unmatched. Their SEO and content marketing approach helped us rank #1 for our primary keywords."
  },
  {
    name: "Vikram Mehta",
    role: "Marketing Director",
    content: "We were struggling with Meta Ads until Bhaav Digital took over. They restructured our funnels and dropped our CPA by half. Highly recommend!"
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What Our <span className="text-gradient">Clients Say</span></h2>
          <p className="section-subtitle">Don't just take our word for it. Read the success stories from businesses we've helped grow.</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((test, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="testimonial-card glass-panel"
            >
              <Quote className="quote-icon" size={32} />
              <p className="testimonial-content">"{test.content}"</p>
              <div className="testimonial-author">
                <h4>{test.name}</h4>
                <span>{test.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
