import React from 'react';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Services from './components/Services';
import Funnel from './components/Funnel';
import WhyUs from './components/WhyUs';
import AIMarketing from './components/AIMarketing';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Services />
        <Funnel />
        <WhyUs />
        <AIMarketing />
        <CaseStudies />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />

      {/* Floating WhatsApp Quick Connect Button */}
      <a
        href="https://wa.me/919266347226?text=Hello%2C%20mujhe%20Digital%20Marketing%20Course%20ke%20baare%20mein%20information%20chahiye"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-3 rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:scale-105 transition-all group"
        title="Chat on WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.072-2.001-.47-1.391-.577-2.298-2.012-2.368-2.106-.069-.094-.56-.747-.56-1.424 0-.677.354-1.009.48-1.147.126-.138.275-.173.366-.173.092 0 .183.001.264.005.085.004.198-.032.309.234.115.275.391.956.425 1.026.035.07.058.151.011.242-.046.091-.07.148-.138.228-.069.079-.145.176-.208.236-.069.066-.14.137-.06.275.08.138.356.588.764.952.525.468.969.613 1.107.682.138.069.219.06.301-.035.082-.095.349-.407.442-.547.093-.14.186-.117.311-.07.126.046.797.376.935.445.138.07.23.104.264.162.035.059.035.344-.109.749z"/>
        </svg>
        <span className="font-semibold text-sm hidden sm:inline-block">Chat on WhatsApp</span>
      </a>
    </div>
  );
}

export default App;
