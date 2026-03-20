import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useState, ChangeEvent, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'ERP',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', company: '', service: 'ERP', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <div className="bg-[#0b0f19] text-gray-300">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-[#6b84ec] to-[#79c7fd] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-extrabold tracking-tight mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-light max-w-3xl mx-auto opacity-90"
          >
            Contact Jhini Tech for ERP, LMS, IT services, digital marketing, and cloud solutions. Get a free demo and consultation today.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-[#131b2f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
              <div className="w-20 h-1 bg-[#79c7fd] mb-8 rounded-full"></div>
              <p className="text-lg text-gray-400 mb-12 leading-relaxed">
                Whether you need a customized ERP solution, an AI-powered LMS, or complete digital marketing services, our team is ready to help you transform your business.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-[#0b0f19] border border-white/5 p-4 rounded-full text-[#6b84ec] mr-6">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Our Location</h3>
                    <p className="text-gray-400">Global Operations Center<br />Tech Park, Innovation Drive<br />City, Country 12345</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#0b0f19] border border-white/5 p-4 rounded-full text-[#6b84ec] mr-6">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Phone Number</h3>
                    <p className="text-gray-400">+1 234 567 890<br />+1 987 654 321</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#0b0f19] border border-white/5 p-4 rounded-full text-[#6b84ec] mr-6">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Email Address</h3>
                    <p className="text-gray-400">info@jhinitech.com<br />support@jhinitech.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#131b2f] rounded-3xl p-10 shadow-xl border border-white/5">
              <h3 className="text-2xl font-bold text-white mb-8">Request a Free Demo / Consultation</h3>
              
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-900/20 text-green-400 p-8 rounded-2xl text-center border border-green-900/50"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold mb-2">Thank You!</h4>
                  <p>Your message has been sent successfully. Our team will contact you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#0b0f19] text-white focus:ring-2 focus:ring-[#6b84ec] focus:border-transparent outline-none transition-all" 
                        placeholder="John Doe" 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#0b0f19] text-white focus:ring-2 focus:ring-[#6b84ec] focus:border-transparent outline-none transition-all" 
                        placeholder="john@company.com" 
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#0b0f19] text-white focus:ring-2 focus:ring-[#6b84ec] focus:border-transparent outline-none transition-all" 
                        placeholder="+1 234 567 890" 
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">Company Name</label>
                      <input 
                        type="text" 
                        id="company" 
                        name="company" 
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#0b0f19] text-white focus:ring-2 focus:ring-[#6b84ec] focus:border-transparent outline-none transition-all" 
                        placeholder="Your Company" 
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">Interested Service *</label>
                    <select 
                      id="service" 
                      name="service" 
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#0b0f19] text-white focus:ring-2 focus:ring-[#6b84ec] focus:border-transparent outline-none transition-all"
                    >
                      <option value="ERP">ERP Solutions</option>
                      <option value="LMS">LMS Platform</option>
                      <option value="IT Services">IT Services (Web/App Dev)</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Cloud">Cloud & Infrastructure</option>
                      <option value="Training">Training & Placement</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#0b0f19] text-white focus:ring-2 focus:ring-[#6b84ec] focus:border-transparent outline-none transition-all resize-none" 
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-[#6b84ec] hover:bg-[#79c7fd] hover:text-[#0b0f19] text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-lg flex items-center justify-center"
                  >
                    Send Message
                    <Send size={18} className="ml-2" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
