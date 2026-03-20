import { motion } from 'framer-motion';
import { Briefcase, Code, Database, Globe, MessageSquare, CheckCircle, ArrowRight, Target, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TrainingPlacement() {
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
            Bridging the Gap Between Academics and Industry
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-light max-w-3xl mx-auto opacity-90 mb-10"
          >
            Transforming students into industry-ready professionals through real-time training, skill development, and placement support.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-[#131b2f] text-[#6b84ec] hover:bg-[#0b0f19] transition-all shadow-xl hover:-translate-y-1">
              Enroll Now
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-[#070a12]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-gray-400 leading-relaxed">
            At Jhini Tech, we focus on bridging the gap between academic learning and industry requirements. While traditional education provides theoretical knowledge, our programs emphasize practical skills, real-time experience, and career readiness. Our Training & Placement program is designed to equip students with technical expertise, problem-solving ability, communication skills, and interview confidence — ensuring they are fully prepared for real-world opportunities.
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-[#0b0f19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Approach</h2>
            <div className="w-24 h-1 bg-[#6b84ec] mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-400">We follow a structured and outcome-driven learning model. From learning to career — we support the complete journey.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-24">
            {[
              { title: 'Learn', desc: 'Core concepts through structured training' },
              { title: 'Apply', desc: 'Knowledge through real-time projects' },
              { title: 'Practice', desc: 'Through assessments and mock interviews' },
              { title: 'Improve', desc: 'Using AI-driven feedback' },
              { title: 'Prepare', desc: 'For placements with expert guidance' },
            ].map((step, idx) => (
              <div key={idx} className="bg-[#131b2f] p-6 rounded-2xl shadow-sm border border-white/5 text-center relative">
                <div className="w-12 h-12 bg-[#0b0f19] border border-white/5 text-[#6b84ec] rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400">{step.desc}</p>
                {idx < 4 && <ArrowRight className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 text-gray-300 w-6 h-6 z-10" />}
              </div>
            ))}
          </div>

          {/* Training Focus Areas */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">Technical Skill Development</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-[#131b2f] p-8 rounded-2xl shadow-sm border border-white/5 hover:border-[#79c7fd]/30 transition-colors hover:shadow-xl transition-all">
                <Code className="text-[#6b84ec] w-10 h-10 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Programming & Development</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Java (Core and Advanced)</li>
                  <li>• Python</li>
                  <li>• JavaScript</li>
                  <li>• C and C++</li>
                </ul>
              </div>
              <div className="bg-[#131b2f] p-8 rounded-2xl shadow-sm border border-white/5 hover:border-[#79c7fd]/30 transition-colors hover:shadow-xl transition-all">
                <Globe className="text-[#6b84ec] w-10 h-10 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Web Development</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• HTML, CSS, JavaScript</li>
                  <li>• Frontend frameworks (React, Angular)</li>
                  <li>• Backend development (Node.js, Java, Python)</li>
                  <li>• Full Stack Development (MERN Stack)</li>
                </ul>
              </div>
              <div className="bg-[#131b2f] p-8 rounded-2xl shadow-sm border border-white/5 hover:border-[#79c7fd]/30 transition-colors hover:shadow-xl transition-all">
                <Database className="text-[#6b84ec] w-10 h-10 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Software Tools & Tech</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Git and GitHub</li>
                  <li>• APIs and integrations</li>
                  <li>• Database management (MySQL, MongoDB)</li>
                </ul>
              </div>
              <div className="bg-[#131b2f] p-8 rounded-2xl shadow-sm border border-white/5 hover:border-[#79c7fd]/30 transition-colors hover:shadow-xl transition-all">
                <Globe className="text-[#6b84ec] w-10 h-10 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Cloud & DevOps</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• AWS fundamentals</li>
                  <li>• Hosting and server management</li>
                </ul>
              </div>
              <div className="bg-[#131b2f] p-8 rounded-2xl shadow-sm border border-white/5 hover:border-[#79c7fd]/30 transition-colors hover:shadow-xl transition-all">
                <Database className="text-[#6b84ec] w-10 h-10 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Data & Analytics</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Data analysis</li>
                  <li>• Advanced Excel</li>
                  <li>• Power BI</li>
                  <li>• SQL</li>
                </ul>
              </div>
              <div className="bg-[#131b2f] p-8 rounded-2xl shadow-sm border border-white/5 hover:border-[#79c7fd]/30 transition-colors hover:shadow-xl transition-all">
                <Globe className="text-[#6b84ec] w-10 h-10 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Digital Skills & ERP</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Digital Marketing (SEO, SEM, SMM)</li>
                  <li>• Content Marketing</li>
                  <li>• ERP functional training</li>
                  <li>• Business process automation</li>
                  <li>• CRM tools</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Soft Skills & Placement */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div className="bg-[#131b2f] p-10 rounded-3xl shadow-lg border border-white/5">
              <div className="flex items-center mb-8">
                <MessageSquare className="text-[#6b84ec] w-10 h-10 mr-4" />
                <h3 className="text-3xl font-bold text-white">Communication & Soft Skills</h3>
              </div>
              <p className="text-gray-400 mb-6">These skills prepare students for professional environments and interviews.</p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start"><CheckCircle className="text-[#79c7fd] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Spoken English</li>
                <li className="flex items-start"><CheckCircle className="text-[#79c7fd] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Business communication</li>
                <li className="flex items-start"><CheckCircle className="text-[#79c7fd] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Presentation skills</li>
                <li className="flex items-start"><CheckCircle className="text-[#79c7fd] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Group discussion training</li>
                <li className="flex items-start"><CheckCircle className="text-[#79c7fd] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Confidence building</li>
              </ul>
            </div>
            <div className="bg-[#131b2f] p-10 rounded-3xl shadow-lg border border-white/5">
              <div className="flex items-center mb-8">
                <Target className="text-[#6b84ec] w-10 h-10 mr-4" />
                <h3 className="text-3xl font-bold text-white">Aptitude & Logical Training</h3>
              </div>
              <p className="text-gray-400 mb-6">This helps students perform well in placement tests and competitive exams.</p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start"><CheckCircle className="text-[#79c7fd] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Quantitative aptitude</li>
                <li className="flex items-start"><CheckCircle className="text-[#79c7fd] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Logical reasoning</li>
                <li className="flex items-start"><CheckCircle className="text-[#79c7fd] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Analytical thinking</li>
                <li className="flex items-start"><CheckCircle className="text-[#79c7fd] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Problem-solving techniques</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
            <div className="bg-gradient-to-br from-[#131b2f] to-[#070a12] border border-white/10 p-8 rounded-3xl shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-6 text-[#79c7fd]">Real-Time Project Experience</h3>
              <p className="text-gray-400 mb-6 text-sm">Students gain practical exposure by working on live projects such as:</p>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start"><CheckCircle className="text-[#6b84ec] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Web development projects</li>
                <li className="flex items-start"><CheckCircle className="text-[#6b84ec] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Digital marketing campaigns</li>
                <li className="flex items-start"><CheckCircle className="text-[#6b84ec] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> UI/UX design projects</li>
                <li className="flex items-start"><CheckCircle className="text-[#6b84ec] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> ERP system implementation</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#131b2f] to-[#070a12] border border-white/10 p-8 rounded-3xl shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-6 text-[#79c7fd]">Interview Preparation</h3>
              <p className="text-gray-400 mb-6 text-sm">Students are trained to confidently face real interviews.</p>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start"><CheckCircle className="text-[#6b84ec] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Resume building and profile development</li>
                <li className="flex items-start"><CheckCircle className="text-[#6b84ec] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Mock interviews (HR, technical, GD)</li>
                <li className="flex items-start"><CheckCircle className="text-[#6b84ec] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> AI-based interview practice</li>
                <li className="flex items-start"><CheckCircle className="text-[#6b84ec] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Performance feedback</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#131b2f] to-[#070a12] border border-white/10 p-8 rounded-3xl shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-6 text-[#79c7fd]">Placement Support</h3>
              <p className="text-gray-400 mb-6 text-sm">We support students in securing the right career opportunities.</p>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start"><CheckCircle className="text-[#6b84ec] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Job readiness training</li>
                <li className="flex items-start"><CheckCircle className="text-[#6b84ec] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Internship opportunities</li>
                <li className="flex items-start"><CheckCircle className="text-[#6b84ec] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Career guidance and mentoring</li>
                <li className="flex items-start"><CheckCircle className="text-[#6b84ec] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Industry exposure and connections</li>
              </ul>
            </div>
          </div>

          {/* Why Choose Our Training */}
          <div className="bg-gradient-to-r from-[#131b2f] to-[#070a12] border border-white/10 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Why Choose Our Training & Placement?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
              <div className="bg-[#131b2f] p-6 rounded-2xl shadow-sm border border-white/5 flex flex-col items-center">
                <h4 className="font-bold text-white text-sm">Industry-focused curriculum</h4>
              </div>
              <div className="bg-[#131b2f] p-6 rounded-2xl shadow-sm border border-white/5 flex flex-col items-center">
                <h4 className="font-bold text-white text-sm">Practical and real-time learning approach</h4>
              </div>
              <div className="bg-[#131b2f] p-6 rounded-2xl shadow-sm border border-white/5 flex flex-col items-center">
                <h4 className="font-bold text-white text-sm">AI-powered evaluation and feedback</h4>
              </div>
              <div className="bg-[#131b2f] p-6 rounded-2xl shadow-sm border border-white/5 flex flex-col items-center">
                <h4 className="font-bold text-white text-sm">End-to-end career support</h4>
              </div>
              <div className="bg-[#131b2f] p-6 rounded-2xl shadow-sm border border-white/5 flex flex-col items-center">
                <h4 className="font-bold text-white text-sm">Placement-oriented training model</h4>
              </div>
            </div>
            <Link to="/contact" className="inline-block bg-[#6b84ec] text-white px-10 py-4 rounded-full font-bold hover:bg-[#79c7fd] hover:text-[#0b0f19] transition-colors shadow-lg">
              Build Skills, Gain Experience, Get Placed
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
