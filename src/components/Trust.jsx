import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Trust.css';

const stats = [
  { value: '60+', label: 'Digital Marketing Modules' },
  { value: '100+', label: 'Hours of Training Experience' },
  { value: '27,000+', label: 'Learners Empowered' },
  { value: '15+', label: 'Certifications' }
];

const StatItem = ({ stat, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="stat-item"
    >
      <div className="stat-value text-gradient">{stat.value}</div>
      <div className="stat-label">{stat.label}</div>
    </motion.div>
  );
};

const Trust = () => {
  return (
    <section className="trust-section" id="trust">
      <div className="container">
        <div className="trust-content glass-panel">
          <div className="trust-text">
            <h2>Your Growth. <br/>Our <span className="text-gradient">Digital Expertise.</span></h2>
            <p>Backed by industry experience and continuous learning, we implement proven strategies that drive actual business growth.</p>
          </div>
          
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <StatItem key={index} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
