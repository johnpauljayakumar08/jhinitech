import { motion } from 'framer-motion';
import { Cloud, Server, Shield, Mail, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CloudInfrastructure() {
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
            Secure, Scalable & High-Performance Cloud Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-light max-w-3xl mx-auto opacity-90 mb-10"
          >
            At Jhini Tech, we provide reliable and scalable cloud and infrastructure solutions that help businesses operate efficiently, securely, and without downtime.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-[#320E5E]/40 text-[#9B75C9] hover:bg-[#16062B] transition-all shadow-xl hover:-translate-y-1">
              Get Started
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-[#110422]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-gray-400 leading-relaxed">
            From cloud setup and migration to server management and security, we ensure your digital infrastructure is optimized for performance, flexibility, and growth. Our solutions are designed to reduce operational complexity, improve system reliability, and support your business as it scales.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-[#16062B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Cloud Services & Support (AWS) */}
          <div className="mb-24">
            <div className="flex items-center mb-8">
              <Cloud className="text-[#9B75C9] w-12 h-12 mr-6" />
              <h2 className="text-4xl font-bold text-white">Cloud Services & Support (AWS)</h2>
            </div>
            <p className="text-xl text-gray-400 mb-10">We offer end-to-end cloud solutions using Amazon Web Services (AWS) to ensure scalability, security, and high availability.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-[#320E5E]/40 p-8 rounded-2xl shadow-sm border border-white/5 hover:border-[#CBB6E6]/30 transition-colors">
                <h3 className="text-2xl font-bold text-white mb-4">Cloud Setup & Deployment</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> AWS infrastructure setup</li>
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Server configuration and deployment</li>
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Environment setup for applications</li>
                </ul>
              </div>
              <div className="bg-[#320E5E]/40 p-8 rounded-2xl shadow-sm border border-white/5 hover:border-[#CBB6E6]/30 transition-colors">
                <h3 className="text-2xl font-bold text-white mb-4">Cloud Optimization</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Performance tuning</li>
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Cost optimization</li>
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Resource scaling based on demand</li>
                </ul>
              </div>
              <div className="bg-[#320E5E]/40 p-8 rounded-2xl shadow-sm border border-white/5 hover:border-[#CBB6E6]/30 transition-colors">
                <h3 className="text-2xl font-bold text-white mb-4">Cloud Monitoring & Support</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Real-time monitoring</li>
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Backup and disaster recovery</li>
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Continuous maintenance and updates</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Server Management & Migration */}
          <div className="mb-24">
            <div className="flex items-center mb-8">
              <Server className="text-[#9B75C9] w-12 h-12 mr-6" />
              <h2 className="text-4xl font-bold text-white">Server Management & Migration</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-[#320E5E]/40 p-8 rounded-2xl shadow-sm border border-white/5 hover:border-[#CBB6E6]/30 transition-colors">
                <h3 className="text-2xl font-bold text-white mb-4">Server Management</h3>
                <p className="text-gray-400 mb-6">We manage and maintain your servers to ensure maximum uptime, performance, and security.</p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Server setup and configuration</li>
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Performance monitoring</li>
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Regular maintenance and updates</li>
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Security patching and optimization</li>
                </ul>
              </div>
              <div className="bg-[#320E5E]/40 p-8 rounded-2xl shadow-sm border border-white/5 hover:border-[#CBB6E6]/30 transition-colors">
                <h3 className="text-2xl font-bold text-white mb-4">Initialization, Integration & Migration</h3>
                <p className="text-gray-400 mb-6">We help businesses transition smoothly to modern infrastructure without disruption.</p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Infrastructure planning and setup</li>
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Integration with third-party tools and APIs</li>
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Website and application migration to cloud</li>
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Legacy system upgrade to modern infrastructure</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Business Email & Security */}
          <div className="mb-24">
            <div className="flex items-center mb-8">
              <Shield className="text-[#9B75C9] w-12 h-12 mr-6" />
              <h2 className="text-4xl font-bold text-white">Business Email, Domains & Security</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-[#320E5E]/40 p-8 rounded-2xl shadow-sm border border-white/5 hover:border-[#CBB6E6]/30 transition-colors">
                <h3 className="text-2xl font-bold text-white mb-4">Business Email & Domains</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Professional business email ID creation</li>
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Domain registration and management</li>
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> DNS configuration</li>
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Email hosting and support</li>
                </ul>
              </div>
              <div className="bg-[#320E5E]/40 p-8 rounded-2xl shadow-sm border border-white/5 hover:border-[#CBB6E6]/30 transition-colors">
                <h3 className="text-2xl font-bold text-white mb-4">Domain & Hosting Support</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Domain purchase and renewal</li>
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Web hosting setup and configuration</li>
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Hosting performance optimization</li>
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Ongoing maintenance and support</li>
                </ul>
              </div>
              <div className="bg-[#320E5E]/40 p-8 rounded-2xl shadow-sm border border-white/5 hover:border-[#CBB6E6]/30 transition-colors">
                <h3 className="text-2xl font-bold text-white mb-4">Website Security & Pentesting</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Website vulnerability assessment</li>
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Penetration testing (Pentesting)</li>
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Security audits and recommendations</li>
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Malware detection and SSL setup</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Our Approach & Why Choose Us */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-[#320E5E]/40 p-10 rounded-3xl shadow-lg border border-white/5">
              <h3 className="text-3xl font-bold text-white mb-8">Our Approach</h3>
              <ul className="space-y-6">
                <li className="flex items-center text-lg text-gray-300"><span className="w-8 h-8 rounded-full bg-[#CBB6E6] text-white flex items-center justify-center font-bold mr-4">1</span> Analyze your infrastructure requirements</li>
                <li className="flex items-center text-lg text-gray-300"><span className="w-8 h-8 rounded-full bg-[#CBB6E6] text-white flex items-center justify-center font-bold mr-4">2</span> Design a scalable cloud architecture</li>
                <li className="flex items-center text-lg text-gray-300"><span className="w-8 h-8 rounded-full bg-[#CBB6E6] text-white flex items-center justify-center font-bold mr-4">3</span> Implement secure and optimized solutions</li>
                <li className="flex items-center text-lg text-gray-300"><span className="w-8 h-8 rounded-full bg-[#CBB6E6] text-white flex items-center justify-center font-bold mr-4">4</span> Monitor and maintain system performance</li>
                <li className="flex items-center text-lg text-gray-300"><span className="w-8 h-8 rounded-full bg-[#CBB6E6] text-white flex items-center justify-center font-bold mr-4">5</span> Provide continuous support and upgrades</li>
              </ul>
            </div>
            <div className="bg-gradient-dark-purple p-10 rounded-3xl shadow-lg text-white border border-white/10">
              <h3 className="text-3xl font-bold mb-8 text-[#CBB6E6]">Why Choose Our Cloud Services</h3>
              <ul className="space-y-6">
                <li className="flex items-center text-lg"><CheckCircle className="text-[#9B75C9] mr-4 w-6 h-6" /> Secure and scalable infrastructure</li>
                <li className="flex items-center text-lg"><CheckCircle className="text-[#9B75C9] mr-4 w-6 h-6" /> Expertise in AWS and modern cloud technologies</li>
                <li className="flex items-center text-lg"><CheckCircle className="text-[#9B75C9] mr-4 w-6 h-6" /> Cost-effective cloud management</li>
                <li className="flex items-center text-lg"><CheckCircle className="text-[#9B75C9] mr-4 w-6 h-6" /> High uptime and performance</li>
                <li className="flex items-center text-lg"><CheckCircle className="text-[#9B75C9] mr-4 w-6 h-6" /> End-to-end support and maintenance</li>
              </ul>
              <div className="mt-12">
                <Link to="/contact" className="w-full block text-center bg-gradient-light-purple hover:opacity-90 text-white px-8 py-4 rounded-xl font-bold shadow-purple-glow transition-all">
                  Secure Your Infrastructure Today
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
