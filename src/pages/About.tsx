import { CheckCircle, Target, Eye, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="bg-[#0b0f19] text-gray-300">
      {/* Hero Banner */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#6b84ec] rounded-full mix-blend-screen filter blur-[150px] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-extrabold tracking-tight mb-6 text-white"
          >
            About Jhini Tech
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-light max-w-3xl mx-auto text-gray-400"
          >
            Transforming businesses. Empowering careers. Driving digital innovation.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-[#070a12] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#6b84ec] to-[#79c7fd] mb-8 rounded-full"></div>
              <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
                <p>
                  Jhini Tech was founded with a strong vision to help businesses transition from outdated, manual systems to advanced, intelligent digital solutions. In today's fast-evolving digital landscape, organizations need more than just technology — they need systems that are efficient, scalable, and aligned with their business goals.
                </p>
                <p>
                  At Jhini Tech, we simplify complex processes, automate operations, and enhance productivity by delivering fully customized IT solutions. Our expertise spans across ERP systems, AI-powered LMS platforms, cloud infrastructure, application development, and digital marketing — enabling businesses to operate smarter and grow faster.
                </p>
                <p>
                  We believe that every business is unique. That's why our approach is centered around deeply understanding each client's challenges, workflows, and objectives. Based on this, we design and implement tailored solutions that not only solve current problems but also prepare businesses for future growth.
                </p>
                <p>
                  Beyond business solutions, Jhini Tech is committed to building the next generation of professionals. Through our AI-powered LMS and industry-oriented training programs, we equip students with real-time project experience, practical skills, and placement readiness. By integrating technology with education, we bridge the gap between learning and employment.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6 mt-12">
                <img src="https://picsum.photos/seed/tech1/400/500" alt="Tech" className="rounded-2xl shadow-lg object-cover w-full h-64 border border-white/10 opacity-80" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/tech2/400/400" alt="Tech" className="rounded-2xl shadow-lg object-cover w-full h-48 border border-white/10 opacity-80" referrerPolicy="no-referrer" />
              </div>
              <div className="space-y-6">
                <img src="https://picsum.photos/seed/tech3/400/400" alt="Tech" className="rounded-2xl shadow-lg object-cover w-full h-48 border border-white/10 opacity-80" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/tech4/400/500" alt="Tech" className="rounded-2xl shadow-lg object-cover w-full h-64 border border-white/10 opacity-80" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-[#0b0f19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-[#131b2f] p-12 rounded-3xl border border-white/5 hover:border-[#6b84ec]/50 transition-colors relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#6b84ec] rounded-full mix-blend-screen filter blur-[64px] opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <Target className="text-[#79c7fd] w-16 h-16 mb-8 relative z-10" />
              <h2 className="text-3xl font-bold mb-6 text-white relative z-10">Our Mission</h2>
              <p className="text-gray-400 text-lg leading-relaxed relative z-10">
                To empower businesses and individuals with innovative, customized, and AI-driven technology solutions that enhance efficiency, accelerate growth, and enable complete digital transformation.
              </p>
            </div>
            <div className="bg-[#131b2f] p-12 rounded-3xl border border-white/5 hover:border-[#79c7fd]/50 transition-colors relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#79c7fd] rounded-full mix-blend-screen filter blur-[64px] opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <Eye className="text-[#79c7fd] w-16 h-16 mb-8 relative z-10" />
              <h2 className="text-3xl font-bold mb-6 text-white relative z-10">Our Vision</h2>
              <p className="text-gray-400 text-lg leading-relaxed relative z-10">
                To become a globally recognized technology partner delivering cutting-edge, scalable, and intelligent solutions across industries while creating a strong ecosystem for business success and future-ready talent development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Jhini Tech */}
      <section className="py-24 bg-[#070a12] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Jhini Tech</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#6b84ec] to-[#79c7fd] mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              At Jhini Tech, we go beyond traditional service delivery by providing complete, customized digital ecosystems that drive both business transformation and career development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Fully Customized Solutions', desc: 'Every business is unique, and so are our solutions. We design and develop fully customized ERP systems, LMS platforms, IT applications, and digital strategies tailored to your specific workflows.' },
              { title: 'Industry-Specific Expertise', desc: 'With experience across multiple industries such as manufacturing, healthcare, education, retail, finance, and IT, we understand real-world challenges and deliver practical solutions.' },
              { title: 'End-to-End Support', desc: 'From initial consultation and strategy planning to development, deployment, training, and ongoing maintenance — we provide complete support throughout your digital journey.' },
              { title: 'Scalable & Future-Ready Systems', desc: 'Our solutions are built with scalability in mind, allowing businesses and institutions to grow without limitations. We integrate modern technologies, including AI, automation, and cloud infrastructure.' },
              { title: 'Affordable & High ROI', desc: 'We deliver cost-effective solutions that not only reduce operational costs but also improve productivity, efficiency, and overall return on investment.' },
              { title: 'Training & Placement for Students', desc: 'We bridge the gap between education and employment through industry-focused training programs. Students gain hands-on experience with real-time projects and AI-powered learning.' },
            ].map((item, idx) => (
              <div key={idx} className="bg-[#131b2f] p-8 rounded-2xl border border-white/5 hover:border-[#6b84ec]/30 hover:shadow-[0_0_20px_rgba(107,132,236,0.1)] transition-all group">
                <CheckCircle className="text-[#79c7fd] w-10 h-10 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-24 bg-[#0b0f19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#131b2f] rounded-3xl p-12 shadow-2xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6b84ec] rounded-full mix-blend-screen filter blur-[200px] opacity-10"></div>
            
            <div className="text-center mb-16 relative z-10">
              <h2 className="text-4xl font-bold text-white mb-4">What Makes Jhini Tech Different</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#6b84ec] to-[#79c7fd] mx-auto rounded-full mb-8"></div>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Jhini Tech stands out by combining technology, intelligence, and career development into one unified ecosystem. We are not just an IT service provider — we are a complete digital transformation and talent development partner.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              {[
                '100% Customized IT, ERP, and LMS Solutions',
                'All Services Under One Roof (IT + ERP + LMS + Cloud + Marketing)',
                'AI-Powered Platforms with Smart Automation & Insights',
                'Integrated Business + Education + Placement Ecosystem',
                'Real-Time Project-Based Learning & Skill Development',
                'Seamless Integration with Modern Tools (WhatsApp, Email, CRM, APIs)',
                'Unlimited Scalability with Multi-User Access',
                'White Label Solutions for Business Expansion',
                'End-to-End Support from Implementation to Growth'
              ].map((point, idx) => (
                <div key={idx} className="flex items-center p-4 bg-[#0b0f19] rounded-xl border border-white/5">
                  <Zap className="text-[#79c7fd] w-6 h-6 mr-4 flex-shrink-0" />
                  <span className="text-gray-300 font-medium">{point}</span>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center relative z-10">
              <p className="text-2xl font-medium text-[#79c7fd] italic border-t border-b border-white/10 py-8 bg-[#0b0f19]/30 rounded-lg">
                "Jhini Tech delivers fully customized, AI-powered digital solutions that not only transform businesses but also build future-ready talent through integrated training and placement ecosystems."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
