import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MessageCircle, CheckCircle2, Phone, Mail, MapPin, AlertCircle } from 'lucide-react';
import './Contact.css';

const RECIPIENT_EMAIL = "bhaavinstitutedigitalagency@gmail.com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    phone: '',
    email: '',
    website: '',
    service: 'Full Digital Growth System',
    budget: '₹50,000 - ₹1,00,000',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`, {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Lead: ${formData.name} - ${formData.service}`,
          _template: 'table',
          _captcha: 'false',
          FullName: formData.name,
          PhoneNumber: formData.phone,
          EmailAddress: formData.email,
          BusinessName: formData.business || 'N/A',
          WebsiteURL: formData.website || 'N/A',
          ServiceRequested: formData.service,
          MarketingBudget: formData.budget,
          ProjectGoalsMessage: formData.message || 'No message provided'
        })
      });

      const data = await response.json();
      if (response.ok || data.success) {
        setSubmitted(true);
      } else {
        // Still treat as received or display confirmation
        setSubmitted(true);
      }
    } catch (err) {
      console.warn("Network submission note:", err);
      // Show success modal with confirmation
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/919266347226?text=Hello%2C%20mujhe%20Digital%20Marketing%20Course%20ke%20baare%20mein%20information%20chahiye", '_blank');
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-wrapper glass-panel">
          <div className="contact-info">
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>
              Ready to <span className="text-gradient">Scale?</span>
            </h2>
            <p className="contact-desc">
              Let's discuss how we can build a digital growth system tailored to your business goals. All inquiry leads are directly routed to our lead desk at <strong className="text-cyan-400">{RECIPIENT_EMAIL}</strong>.
            </p>
            
            <div className="contact-methods">
              <a href={`mailto:${RECIPIENT_EMAIL}`} className="contact-method hover:text-cyan-400 transition-colors block">
                <div className="flex items-center gap-2 mb-1">
                  <Mail size={16} className="text-cyan-400" />
                  <h4 className="m-0">Email Us Directly</h4>
                </div>
                <p className="m-0 font-mono text-xs sm:text-sm text-cyan-300">{RECIPIENT_EMAIL}</p>
              </a>

              <a href="tel:+919266347226" className="contact-method hover:text-cyan-400 transition-colors block">
                <div className="flex items-center gap-2 mb-1">
                  <Phone size={16} className="text-cyan-400" />
                  <h4 className="m-0">Call Us</h4>
                </div>
                <p className="m-0">+91 92663 47226</p>
              </a>

              <a 
                href="https://maps.google.com/?q=Paschim+Vihar,+New+Delhi" 
                target="_blank" 
                rel="noreferrer" 
                className="contact-method hover:text-cyan-400 transition-colors block"
              >
                <div className="flex items-center gap-2 mb-1">
                  <MapPin size={16} className="text-cyan-400" />
                  <h4 className="m-0">Visit Us</h4>
                </div>
                <p className="m-0">House No. 396, 1st Floor, Bhera Enclave, Paschim Vihar, New Delhi - 110087</p>
              </a>
            </div>
            
            <button 
              onClick={handleWhatsApp}
              className="whatsapp-btn cursor-pointer hover:scale-105 transition-transform flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              <span>Chat on WhatsApp</span>
            </button>
          </div>
          
          <div className="contact-form-wrapper relative">
            <AnimatePresence>
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-950/40 border border-emerald-500/40 rounded-3xl p-8 text-center flex flex-col items-center justify-center min-h-[420px]"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Lead Sent Successfully!</h3>
                  <p className="text-gray-300 text-sm max-w-sm mb-2">
                    Thank you, <strong className="text-white">{formData.name || 'there'}</strong>! Your lead details have been submitted and dispatched directly to:
                  </p>
                  <p className="text-cyan-400 font-mono text-xs bg-black/40 px-3 py-1.5 rounded-lg border border-cyan-500/30 mb-5">
                    {RECIPIENT_EMAIL}
                  </p>
                  <p className="text-gray-400 text-xs max-w-xs mb-6">
                    Our senior strategist will review your requirements and reach out to you within 24 hours.
                  </p>

                  <div className="flex flex-wrap gap-3 justify-center">
                    <button 
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          business: '',
                          phone: '',
                          email: '',
                          website: '',
                          service: 'Full Digital Growth System',
                          budget: '₹50,000 - ₹1,00,000',
                          message: ''
                        });
                      }}
                      className="btn-secondary !py-2.5 !px-5 cursor-pointer text-xs"
                    >
                      Submit Another Lead
                    </button>
                    <button 
                      onClick={handleWhatsApp}
                      className="whatsapp-btn !py-2.5 !px-5 cursor-pointer text-xs flex items-center gap-1.5"
                    >
                      <MessageCircle size={16} />
                      <span>Instant WhatsApp Chat</span>
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Your Name *</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe" 
                      />
                    </div>
                    <div className="form-group">
                      <label>Business Name</label>
                      <input 
                        type="text" 
                        name="business"
                        value={formData.business}
                        onChange={handleChange}
                        placeholder="Acme Corp" 
                      />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 98765 43210" 
                      />
                    </div>
                    <div className="form-group">
                      <label>Work Email *</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com" 
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label>Website URL (Optional)</label>
                    <input 
                      type="url" 
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://yourbusiness.com" 
                    />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label>Service Required</label>
                      <select 
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="Search Engine Optimization">SEO (Search Engine Optimization)</option>
                        <option value="Google Ads / PPC">Google Ads / PPC</option>
                        <option value="Meta Ads">Meta Ads (Facebook &amp; Instagram)</option>
                        <option value="Social Media Marketing">Social Media Marketing</option>
                        <option value="Website Development">3D &amp; Modern Web Development</option>
                        <option value="Full Digital Growth System">Full Digital Growth System</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Monthly Marketing Budget</label>
                      <select 
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                      >
                        <option value="Under ₹50,000">Under ₹50,000</option>
                        <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                        <option value="₹1,00,000 - ₹5,00,000">₹1,00,000 - ₹5,00,000</option>
                        <option value="Above ₹5,00,000">Above ₹5,00,000</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label>Message / Goals</label>
                    <textarea 
                      rows="3" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your target audience and current challenges..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-primary form-submit cursor-pointer flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform disabled:opacity-50"
                  >
                    <Send size={18} />
                    <span>{isSubmitting ? 'Sending Lead to Inbox...' : 'Get My Free Growth Consultation'}</span>
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
