import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ImageStreamHero } from './ui/image-stream-hero';
import {
  renderCanvas,
  ShineBorder,
  TypeWriter,
} from './ui/hero-designali';
import { Sparkles, ArrowRight, TrendingUp, ShieldCheck, Plus } from 'lucide-react';
import './Hero.css';

const CDN = "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev";

const HERO_STREAM_IMAGES = [
  {
    src: `${CDN}/stock-images/767d99bb371a54d0d36751e8cecae43c.jpg`,
    alt: "Diver silhouetted inside a sunset seascape shaped like a profile",
  },
  {
    src: `${CDN}/gradients/hero_gradient/hero-gradients-01.png`,
    alt: "Soft multi-tone gradient wash",
  },
  {
    src: `${CDN}/stock-images/821d815affa6496c39cbdeeec7a84603.jpg`,
    alt: "Double-exposure portrait blended with a city skyline at dusk",
  },
  {
    src: `${CDN}/gradients/crimson_aura/crimson-aura-02.png`,
    alt: "Crimson aura gradient",
  },
  {
    src: `${CDN}/stock-images/937438c560ada1c83317f2c11b3454b0.jpg`,
    alt: "Motion-blurred side-profile portrait against a deep orange backdrop",
  },
  {
    src: `${CDN}/gradients/hue-flow/hue-flow-01.png`,
    alt: "Flowing hue gradient",
  },
  {
    src: `${CDN}/stock-images/98f89cb9994f5c382ab964062c4039db.jpg`,
    alt: "Figure holding a racket that dissolves into a swirling colourful cloud",
  },
  {
    src: `${CDN}/gradients/moon/moon-grade-03.png`,
    alt: "Moon-toned gradient",
  },
  {
    src: `${CDN}/stock-images/ddcbee38be8b7274e19e132d7ab35b53.jpg`,
    alt: "Hand gesture with a colourful cutout of a bird flying through the fingers",
  },
  {
    src: `${CDN}/gradients/hero_gradient/hero-gradients-03.png`,
    alt: "Layered hero gradient",
  },
  {
    src: `${CDN}/gradients/hue-flow/hue-flow-02.png`,
    alt: "Second flowing hue gradient",
  },
  {
    src: `${CDN}/gradients/moon/moon-grade-05.png`,
    alt: "Deep moon-toned gradient",
  },
];

const TALK_ABOUT = [
  "3D Web Experiences",
  "Digital Growth & Leads",
  "AI Marketing Automation",
  "Brand Identity & Scaling",
  "High-ROAS Campaigns",
];

const Hero = () => {
  useEffect(() => {
    // Initialize interactive fluid trails canvas
    renderCanvas();
  }, []);

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero-section" id="home">
      {/* Interactive Cursor Fluid Ribbon Canvas */}
      <canvas
        id="canvas"
        className="pointer-events-none absolute inset-0 z-20 w-full h-full"
      />

      <ImageStreamHero
        images={HERO_STREAM_IMAGES}
        cards={10}
        speed={16}
        axis={50}
        className="hero-stream-corridor"
      >
        <div className="hero-glow-overlay" />

        <div className="container hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-text-content"
          >
            {/* Top Badge & Live Status */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              <button 
                onClick={() => scrollTo('#services')}
                className="badge !mb-0 cursor-pointer hover:scale-105 transition-transform"
                title="View Agency Services"
              >
                <Sparkles size={14} className="badge-sparkle" />
                <span>Next-Gen 3D Growth Agency</span>
              </button>
              <button 
                onClick={() => scrollTo('#contact')}
                className="live-status-pill cursor-pointer hover:scale-105 transition-transform"
                title="Book Consultation"
              >
                <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
                </span>
                <span className="text-xs font-medium text-emerald-400">Accepting New Clients</span>
              </button>
            </div>

            {/* Main Cybernetic Card with Corner Plus Markers */}
            <div className="hero-main-card relative">
              <Plus strokeWidth={3} className="corner-cross corner-tl" />
              <Plus strokeWidth={3} className="corner-cross corner-tr" />
              <Plus strokeWidth={3} className="corner-cross corner-bl" />
              <Plus strokeWidth={3} className="corner-cross corner-br" />

              <h1 className="hero-title">
                Turn Your Digital Presence Into{' '}
                <span className="text-gradient">Business Growth</span>
              </h1>

              <div className="typewriter-container">
                <span className="text-muted-text">Scaling Brands Through </span>
                <span className="typewriter-highlight">
                  <TypeWriter strings={TALK_ABOUT} />
                </span>
              </div>
            </div>

            <p className="hero-subtitle">
              We help ambitious businesses generate high-ticket leads, dominate organic &amp; paid search, and create unforgettable 3D brand experiences powered by AI and human ingenuity.
            </p>

            {/* CTAs with ShineBorder */}
            <div className="hero-cta-group items-center">
              <ShineBorder
                borderWidth={2}
                borderRadius={30}
                duration={12}
                onClick={() => scrollTo('#contact')}
                className="p-1 bg-white/5 backdrop-blur-xl border border-white/10 hover:scale-105 transition-transform"
                color={["#00f0ff", "#7000ff", "#ff007f"]}
              >
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    scrollTo('#contact');
                  }}
                  className="btn-primary !m-0 !py-3 !px-7 flex items-center gap-2 cursor-pointer"
                >
                  <span>Get Free Consultation</span>
                  <ArrowRight size={18} />
                </button>
              </ShineBorder>

              <button 
                onClick={() => scrollTo('#services')}
                className="btn-secondary cursor-pointer hover:scale-105 transition-transform"
              >
                Explore Services
              </button>
            </div>

            {/* Proof Badges */}
            <div className="hero-stats-strip">
              <button 
                onClick={() => scrollTo('#work')}
                className="hero-stat-item cursor-pointer hover:border-cyan-400/50 hover:scale-105 transition-all"
                title="View Case Studies"
              >
                <TrendingUp size={16} className="text-cyan-400" />
                <span><strong>+127%</strong> Avg. Lead Growth</span>
              </button>
              <button 
                onClick={() => scrollTo('#work')}
                className="hero-stat-item cursor-pointer hover:border-purple-400/50 hover:scale-105 transition-all"
                title="View Client ROAS"
              >
                <ShieldCheck size={16} className="text-purple-400" />
                <span><strong>3.2X</strong> Proven Client ROAS</span>
              </button>
            </div>
          </motion.div>
        </div>
      </ImageStreamHero>
    </section>
  );
};

export default Hero;
