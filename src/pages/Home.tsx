import { ArrowRight, CheckCircle, Briefcase, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-[#16062B] text-gray-300">
      {/* Hero Banner */}
      <section className="relative py-32 overflow-hidden bg-gradient-dark-purple">
        {/* Glowing Orbs Background */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#9B75C9] rounded-full mix-blend-screen filter blur-[128px] opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#CBB6E6] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-white"
          >
            Smart IT Solutions for <br className="hidden md:block" /> Modern Businesses
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl font-light mb-12 max-w-3xl mx-auto text-white"
          >
            Customized Digital Solutions that Transform Your Business Operations, Drive Growth, and Build Scalable Success
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-gradient-light-purple text-black hover:opacity-90 transition-all shadow-purple-glow hover:-translate-y-1">
              Enquire Now
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-[#110422] relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Transforming Businesses & Shaping Careers</h2>
              <div className="w-20 h-1 bg-gradient-light-purple mb-8 rounded-full"></div>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                Jhini Tech delivers powerful, customized IT solutions designed for businesses across industries. From ERP systems and digital marketing to AI-powered LMS platforms, we help organizations streamline operations, improve efficiency, and accelerate digital transformation.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                In addition, we empower students through industry-focused training and placement programs, offering real-time project experience, AI-driven learning, and career guidance to make them job-ready.
              </p>
              <p className="text-xl font-medium text-[#CBB6E6] italic border-l-4 border-[#9B75C9] pl-6 py-2 bg-white/5 rounded-r-lg">
                "We don't just provide services — we create solutions and build careers tailored to real-world goals."
              </p>
            </div>
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img src="https://picsum.photos/seed/techoffice/800/600" alt="Jhini Tech Office" className="object-cover w-full h-full opacity-80" referrerPolicy="no-referrer" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-[#320E5E]/40 p-6 rounded-xl shadow-2xl border border-white/10 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-[#9B75C9]/20 p-4 rounded-full text-[#CBB6E6]">
                    <Briefcase size={32} />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">100+</p>
                    <p className="text-sm text-white font-medium uppercase tracking-wider">Satisfied Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-24 bg-[#16062B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-gradient-light-purple mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'IT Services', desc: 'Custom web, mobile, and software development tailored to your business.', path: '/it-services', icon: '💻' },
              { title: 'Cloud & Infrastructure', desc: 'Secure, scalable cloud solutions and server management.', path: '/cloud-infrastructure', icon: '☁️' },
              { title: 'ERP Solutions', desc: 'End-to-end customized ERP systems for all industries.', path: '/erp', icon: '⚙️' },
              { title: 'LMS Solutions', desc: 'AI-powered learning platforms for institutions and corporates.', path: '/lms', icon: '🎓' },
              { title: 'Digital Marketing', desc: 'Growth-driven marketing strategies to boost visibility and ROI.', path: '/digital-marketing', icon: '📈' },
              { title: 'Training & Placement', desc: 'Industry-focused training programs with real-time projects and AI-powered learning.', path: '/training-placement', icon: '🚀' },
            ].map((service, idx) => (
              <Link to={service.path} key={idx} className="bg-[#320E5E]/40 rounded-2xl p-8 shadow-lg hover:shadow-purple-glow transition-all border border-white/5 hover:border-[#9B75C9]/50 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#9B75C9] rounded-full mix-blend-screen filter blur-[64px] opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div className="text-4xl mb-6 relative z-10">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#CBB6E6] transition-colors relative z-10">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed relative z-10">{service.desc}</p>
                <span className="inline-flex items-center text-[#9B75C9] font-semibold group-hover:text-[#CBB6E6] relative z-10">
                  Learn More <ChevronRight size={18} className="ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner - Demo Logins */}
      <section className="py-20 bg-gradient-dark-purple border-y border-white/5 relative overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-[#CBB6E6] rounded-full mix-blend-screen filter blur-[100px] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-[#320E5E]/40 rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-white">Get Free Demo Logins</h2>
                <p className="text-xl text-gray-400 mb-8">Experience the power of our customized ERP and LMS solutions firsthand. Fill out the form to request your access.</p>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-300"><CheckCircle className="text-[#CBB6E6] mr-3" /> Full feature access</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="text-[#CBB6E6] mr-3" /> Guided walkthrough available</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="text-[#CBB6E6] mr-3" /> No credit card required</li>
                </ul>
              </div>
              <div className="bg-[#16062B] rounded-2xl p-8 border border-white/5 shadow-xl">
                <form className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-[#320E5E]/40 border border-white/10 text-white focus:ring-2 focus:ring-[#9B75C9] focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Phone Number</label>
                      <input type="tel" className="w-full px-4 py-3 rounded-lg bg-[#320E5E]/40 border border-white/10 text-white focus:ring-2 focus:ring-[#9B75C9] focus:border-transparent outline-none transition-all" placeholder="+1 234 567 890" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Email ID</label>
                      <input type="email" className="w-full px-4 py-3 rounded-lg bg-[#320E5E]/40 border border-white/10 text-white focus:ring-2 focus:ring-[#9B75C9] focus:border-transparent outline-none transition-all" placeholder="john@company.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Company Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-[#320E5E]/40 border border-white/10 text-white focus:ring-2 focus:ring-[#9B75C9] focus:border-transparent outline-none transition-all" placeholder="Your Company" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Select the logins needed for</label>
                    <select className="w-full px-4 py-3 rounded-lg bg-[#320E5E]/40 border border-white/10 text-white focus:ring-2 focus:ring-[#9B75C9] focus:border-transparent outline-none transition-all">
                      <option>ERP</option>
                      <option>LMS</option>
                      <option>Both ERP & LMS</option>
                    </select>
                  </div>
                  <button type="button" className="w-full bg-gradient-light-purple hover:opacity-90 text-white font-bold py-4 px-8 rounded-lg transition-colors shadow-lg mt-4">
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#16062B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us</h2>
            <div className="w-24 h-1 bg-gradient-light-purple mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: 'Fully Customized Solutions', desc: 'Tailored IT, ERP, and LMS solutions designed specifically for your business needs.' },
              { title: 'Industry-Specific Expertise', desc: 'Deep understanding across multiple industries to deliver practical, result-oriented solutions.' },
              { title: 'End-to-End Support', desc: 'From consultation to development, deployment, training, and continuous support.' },
              { title: 'Scalable & Future-Ready Systems', desc: 'Technology built to grow with your business and adapt to future needs.' },
              { title: 'Dedicated Support Team', desc: 'Reliable team ensuring smooth operations, quick response, and ongoing assistance.' },
              { title: 'Affordable & High ROI', desc: 'Cost-effective solutions that maximize efficiency and business returns.' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start p-6 rounded-2xl bg-[#320E5E]/40 hover:bg-[#1a233a] transition-colors border border-white/5">
                <CheckCircle className="text-[#CBB6E6] mt-1 flex-shrink-0" size={24} />
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-[#110422] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-extrabold text-gradient-light mb-2">100+</div>
              <div className="text-lg text-gray-400 font-medium">Satisfied Clients</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold text-gradient-light mb-2">200+</div>
              <div className="text-lg text-gray-400 font-medium">Projects Delivered</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold text-gradient-light mb-2">15+</div>
              <div className="text-lg text-gray-400 font-medium">Industries Served</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold text-gradient-light mb-2">100%</div>
              <div className="text-lg text-gray-400 font-medium">Digital Transformation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Clientele */}
      <section className="py-24 bg-[#16062B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Our Clientele</h2>
          <div className="w-24 h-1 bg-gradient-light-purple mx-auto rounded-full mb-16"></div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-50 hover:opacity-100 transition-opacity duration-500">
            {['Curiomod', 'Lord Minds', 'Ruffins', 'Raahat Ansaar', 'Royal Dessert', 'Curio Trade', 'Arkayuga', 'Karthik ERP'].map((client, idx) => (
              <div key={idx} className="text-2xl font-bold text-gray-500 hover:text-[#CBB6E6] transition-colors px-4 py-2">
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-[#110422] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-gradient-light-purple mx-auto rounded-full"></div>
          </div>
          <div className="space-y-6">
            {[
              { q: 'What services does Jhini Tech provide?', a: 'Jhini Tech provides ERP solutions, LMS platforms, IT services, cloud infrastructure, digital marketing, and training & placement programs.' },
              { q: 'Is Jhini Tech suitable for both businesses and students?', a: 'Yes, Jhini Tech supports businesses with digital solutions and students with training and placement programs.' },
              { q: 'Do you provide customized solutions?', a: 'Yes, all solutions are fully customized based on business requirements.' },
              { q: 'Do you offer AI-based platforms?', a: 'Yes, we provide AI-powered LMS, mock interviews, and analytics systems.' },
              { q: 'How can I get started with Jhini Tech?', a: 'You can contact us or request a free demo login through our website.' }
            ].map((faq, idx) => (
              <div key={idx} className="bg-[#320E5E]/40 rounded-xl p-6 shadow-sm border border-white/5">
                <h3 className="text-xl font-bold text-white mb-3">{faq.q}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
