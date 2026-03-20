import { motion } from 'framer-motion';
import { TrendingUp, Search, Share2, Target, PenTool, Mail, ArrowRight, CheckCircle, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DigitalMarketing() {
  return (
    <div className="bg-[#16062B] text-gray-300">
      {/* Hero Banner */}
      <section className="bg-gradient-dark-purple text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-extrabold tracking-tight mb-6"
          >
            Drive Growth, Generate Leads & Build a Powerful Digital Presence
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-light max-w-3xl mx-auto opacity-90 mb-10"
          >
            At Jhini Tech, we offer end-to-end digital marketing solutions designed to help businesses grow online, generate quality leads, and maximize ROI.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-[#320E5E]/40 text-[#9B75C9] hover:bg-[#16062B] transition-all shadow-xl hover:-translate-y-1">
              Get Free Marketing Audit
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-[#110422]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-gray-400 leading-relaxed">
            Our strategies are data-driven, performance-focused, and tailored to your business goals — ensuring long-term success in the digital landscape.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-[#16062B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            
            {/* SEO */}
            <div className="bg-[#320E5E]/40 p-8 rounded-2xl shadow-sm border border-white/5 hover:border-[#CBB6E6]/30 transition-colors hover:shadow-xl transition-all">
              <Search className="text-[#9B75C9] w-10 h-10 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Search Engine Optimization (SEO)</h3>
              <p className="text-gray-400 mb-6">Improve your website's visibility and rank higher on search engines like Google.</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Keyword research & strategy</li>
                <li>• On-page optimization</li>
                <li>• Technical SEO</li>
                <li>• Off-page SEO</li>
                <li>• Local SEO for regional visibility</li>
              </ul>
            </div>

            {/* SEM */}
            <div className="bg-[#320E5E]/40 p-8 rounded-2xl shadow-sm border border-white/5 hover:border-[#CBB6E6]/30 transition-colors hover:shadow-xl transition-all">
              <TrendingUp className="text-[#9B75C9] w-10 h-10 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Search Engine Marketing (SEM)</h3>
              <p className="text-gray-400 mb-6">Boost your visibility instantly with paid search campaigns.</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Google Ads campaign setup</li>
                <li>• Keyword bidding & targeting</li>
                <li>• Ad copy optimization</li>
                <li>• Conversion tracking</li>
                <li>• ROI-focused campaign management</li>
              </ul>
            </div>

            {/* SMM */}
            <div className="bg-[#320E5E]/40 p-8 rounded-2xl shadow-sm border border-white/5 hover:border-[#CBB6E6]/30 transition-colors hover:shadow-xl transition-all">
              <Share2 className="text-[#9B75C9] w-10 h-10 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Social Media Marketing (SMM)</h3>
              <p className="text-gray-400 mb-6">Build brand awareness and engage with your audience across platforms.</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Strategy & content planning</li>
                <li>• Campaign management</li>
                <li>• Audience targeting</li>
                <li>• Performance tracking</li>
              </ul>
            </div>

            {/* Lead Generation */}
            <div className="bg-[#320E5E]/40 p-8 rounded-2xl shadow-sm border border-white/5 hover:border-[#CBB6E6]/30 transition-colors hover:shadow-xl transition-all">
              <Target className="text-[#9B75C9] w-10 h-10 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Lead Generation</h3>
              <p className="text-gray-400 mb-6">Generate high-quality leads that convert into customers.</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Funnel creation</li>
                <li>• Landing page optimization</li>
                <li>• Paid campaigns (Meta, Google)</li>
                <li>• CRM integration</li>
              </ul>
            </div>

            {/* Content Writing */}
            <div className="bg-[#320E5E]/40 p-8 rounded-2xl shadow-sm border border-white/5 hover:border-[#CBB6E6]/30 transition-colors hover:shadow-xl transition-all">
              <PenTool className="text-[#9B75C9] w-10 h-10 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Content Writing</h3>
              <p className="text-gray-400 mb-6">Engaging and SEO-friendly content to attract and retain users.</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Website content</li>
                <li>• Blogs & articles</li>
                <li>• Ad copies</li>
                <li>• Social media content</li>
              </ul>
            </div>

            {/* Email Marketing */}
            <div className="bg-[#320E5E]/40 p-8 rounded-2xl shadow-sm border border-white/5 hover:border-[#CBB6E6]/30 transition-colors hover:shadow-xl transition-all">
              <Mail className="text-[#9B75C9] w-10 h-10 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Email Marketing</h3>
              <p className="text-gray-400 mb-6">Build relationships and nurture leads effectively.</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Campaign setup</li>
                <li>• Automation workflows</li>
                <li>• Newsletter creation</li>
                <li>• Performance tracking</li>
              </ul>
            </div>

          </div>

          {/* Other Services */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">More Digital Marketing Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Link Building', desc: 'Strengthen website authority and rankings.' },
                { title: 'CRO', desc: 'Optimize website to increase conversions.' },
                { title: 'ORM', desc: 'Maintain and improve your brand image online.' },
                { title: 'PPC', desc: 'Drive targeted traffic with paid advertising.' },
                { title: 'Social Media Management', desc: 'End-to-end handling of social media presence.' },
                { title: 'Branding & Identity', desc: 'Create a strong and consistent brand image.' },
                { title: 'Graphic Design', desc: 'Creative visuals for marketing and branding.' },
                { title: 'Video Marketing', desc: 'Engage audience with impactful video content.' },
                { title: 'E-Commerce Marketing', desc: 'Grow your online store with targeted strategies.' },
                { title: 'Analytics & Reporting', desc: 'Track performance and optimize campaigns.' },
                { title: 'Mobile App Marketing', desc: 'Apps designed to improve customer engagement.' },
                { title: 'Training & Workshops', desc: 'Upskill teams with industry-relevant knowledge.' },
              ].map((service, idx) => (
                <div key={idx} className="bg-[#320E5E]/40 p-6 rounded-xl border border-white/5 hover:border-[#CBB6E6]/30 transition-colors shadow-sm">
                  <h4 className="font-bold text-white mb-2">{service.title}</h4>
                  <p className="text-sm text-gray-400">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Approach & Why Choose Us */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-[#320E5E]/40 p-10 rounded-3xl shadow-lg border border-white/5">
              <h3 className="text-3xl font-bold text-white mb-8">Our Approach</h3>
              <ul className="space-y-6">
                <li className="flex items-center text-lg text-gray-300"><span className="w-8 h-8 rounded-full bg-[#CBB6E6] text-white flex items-center justify-center font-bold mr-4">1</span> Understand your business goals</li>
                <li className="flex items-center text-lg text-gray-300"><span className="w-8 h-8 rounded-full bg-[#CBB6E6] text-white flex items-center justify-center font-bold mr-4">2</span> Analyze market and competitors</li>
                <li className="flex items-center text-lg text-gray-300"><span className="w-8 h-8 rounded-full bg-[#CBB6E6] text-white flex items-center justify-center font-bold mr-4">3</span> Create customized strategies</li>
                <li className="flex items-center text-lg text-gray-300"><span className="w-8 h-8 rounded-full bg-[#CBB6E6] text-white flex items-center justify-center font-bold mr-4">4</span> Execute and optimize campaigns</li>
                <li className="flex items-center text-lg text-gray-300"><span className="w-8 h-8 rounded-full bg-[#CBB6E6] text-white flex items-center justify-center font-bold mr-4">5</span> Deliver measurable results</li>
              </ul>
            </div>
            <div className="bg-gradient-dark-purple p-10 rounded-3xl shadow-lg text-white border border-white/10">
              <h3 className="text-3xl font-bold mb-8 text-[#CBB6E6]">Why Choose Our Digital Marketing</h3>
              <ul className="space-y-6">
                <li className="flex items-center text-lg"><CheckCircle className="text-[#9B75C9] mr-4 w-6 h-6" /> Data-driven strategies</li>
                <li className="flex items-center text-lg"><CheckCircle className="text-[#9B75C9] mr-4 w-6 h-6" /> ROI-focused campaigns</li>
                <li className="flex items-center text-lg"><CheckCircle className="text-[#9B75C9] mr-4 w-6 h-6" /> Customized marketing plans</li>
                <li className="flex items-center text-lg"><CheckCircle className="text-[#9B75C9] mr-4 w-6 h-6" /> Multi-channel expertise</li>
                <li className="flex items-center text-lg"><CheckCircle className="text-[#9B75C9] mr-4 w-6 h-6" /> Continuous optimization</li>
              </ul>
              <div className="mt-12">
                <Link to="/contact" className="w-full block text-center bg-gradient-light-purple hover:opacity-90 text-white px-8 py-4 rounded-xl font-bold shadow-purple-glow transition-all">
                  Grow Your Business Today
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
