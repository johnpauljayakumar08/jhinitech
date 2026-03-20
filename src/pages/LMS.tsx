import { motion } from 'framer-motion';
import { GraduationCap, Brain, Video, FileText, CheckCircle, ArrowRight, Shield, Users, BookOpen, Target, Briefcase, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LMS() {
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
            AI-Powered Learning, Training & Placement Platform
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-light max-w-3xl mx-auto opacity-90 mb-10"
          >
            An all-in-one LMS designed for students, colleges, and institutions — combining course learning, real-time projects, AI mock interviews, and career guidance to build job-ready professionals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-[#131b2f] text-[#6b84ec] hover:bg-[#0b0f19] transition-all shadow-xl hover:-translate-y-1">
              Get Free Demo Login
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-[#070a12]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-gray-400 leading-relaxed">
            Jhini Tech LMS is a next-generation, AI-driven platform that bridges the gap between learning and employment. It enables institutions to manage learning efficiently while empowering students with real-time project experience, AI coaching, mock interviews, and career guidance — all in a single integrated system.
          </p>
        </div>
      </section>

      {/* Role-Based Access */}
      <section className="py-24 bg-[#0b0f19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Role-Based Access System</h2>
            <div className="w-24 h-1 bg-[#6b84ec] mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-400">Our LMS is designed with a powerful multi-role architecture to ensure seamless management and user experience.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            <div className="bg-[#131b2f] p-8 rounded-2xl shadow-sm border border-white/5 hover:border-[#79c7fd]/30 transition-colors hover:shadow-xl transition-all">
              <Shield className="text-[#6b84ec] w-10 h-10 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Super Admin</h3>
              <p className="text-gray-400">Complete control over the platform, users, analytics, and system configuration.</p>
            </div>
            <div className="bg-[#131b2f] p-8 rounded-2xl shadow-sm border border-white/5 hover:border-[#79c7fd]/30 transition-colors hover:shadow-xl transition-all">
              <Users className="text-[#6b84ec] w-10 h-10 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Admin (Organization)</h3>
              <p className="text-gray-400">Manage courses, users, reports, and overall LMS operations.</p>
            </div>
            <div className="bg-[#131b2f] p-8 rounded-2xl shadow-sm border border-white/5 hover:border-[#79c7fd]/30 transition-colors hover:shadow-xl transition-all">
              <Briefcase className="text-[#6b84ec] w-10 h-10 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Vendor Support</h3>
              <p className="text-gray-400">Onboard colleges, institutions, and students, and manage partnerships.</p>
            </div>
            <div className="bg-[#131b2f] p-8 rounded-2xl shadow-sm border border-white/5 hover:border-[#79c7fd]/30 transition-colors hover:shadow-xl transition-all">
              <GraduationCap className="text-[#6b84ec] w-10 h-10 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">College Admin</h3>
              <p className="text-gray-400">Manage student batches, courses, performance tracking, and academic activities.</p>
            </div>
            <div className="bg-[#131b2f] p-8 rounded-2xl shadow-sm border border-white/5 hover:border-[#79c7fd]/30 transition-colors hover:shadow-xl transition-all">
              <BookOpen className="text-[#6b84ec] w-10 h-10 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Students</h3>
              <p className="text-gray-400">Access courses, complete projects, attend interviews, and track progress.</p>
            </div>
          </div>

          {/* Core Learning Approach */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">Core Learning Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#131b2f] p-8 rounded-2xl shadow-sm border border-white/5 hover:border-[#79c7fd]/30 transition-colors">
                <h3 className="text-xl font-bold text-[#6b84ec] mb-4">Course-Based Learning</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start"><CheckCircle className="text-[#79c7fd] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Structured modules with study materials</li>
                  <li className="flex items-start"><CheckCircle className="text-[#79c7fd] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Videos, documents, and assessments</li>
                  <li className="flex items-start"><CheckCircle className="text-[#79c7fd] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Easy tracking of progress</li>
                </ul>
              </div>
              <div className="bg-[#131b2f] p-8 rounded-2xl shadow-sm border border-white/5 hover:border-[#79c7fd]/30 transition-colors">
                <h3 className="text-xl font-bold text-[#6b84ec] mb-4">Project-Based Learning</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start"><CheckCircle className="text-[#79c7fd] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Coding challenges</li>
                  <li className="flex items-start"><CheckCircle className="text-[#79c7fd] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> MCQs and descriptive tests</li>
                  <li className="flex items-start"><CheckCircle className="text-[#79c7fd] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Real-time project submissions</li>
                  <li className="flex items-start"><CheckCircle className="text-[#79c7fd] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Practical skill evaluation</li>
                </ul>
              </div>
              <div className="bg-[#131b2f] p-8 rounded-2xl shadow-sm border border-white/5 hover:border-[#79c7fd]/30 transition-colors">
                <h3 className="text-xl font-bold text-[#6b84ec] mb-4">Interview-Based Training</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start"><CheckCircle className="text-[#79c7fd] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Scenario-based interviews</li>
                  <li className="flex items-start"><CheckCircle className="text-[#79c7fd] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Behavioral and technical evaluation</li>
                  <li className="flex items-start"><CheckCircle className="text-[#79c7fd] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Students can schedule interviews</li>
                  <li className="flex items-start"><CheckCircle className="text-[#79c7fd] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Real-time and AI-based practice</li>
                </ul>
              </div>
            </div>
          </div>

          {/* AI Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div className="bg-[#131b2f] p-10 rounded-3xl shadow-lg border border-white/5">
              <div className="flex items-center mb-8">
                <Video className="text-[#6b84ec] w-10 h-10 mr-4" />
                <h3 className="text-3xl font-bold text-white">AI Mock Interview System</h3>
              </div>
              <p className="text-gray-400 mb-6">Students can practice Personal Interviews, HR Rounds, Technical Interviews, and Group Discussions.</p>
              <h4 className="font-bold text-white mb-4">Key Capabilities:</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start"><CheckCircle className="text-[#79c7fd] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Video-based and Audio-based interviews</li>
                <li className="flex items-start"><CheckCircle className="text-[#79c7fd] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Auto transcription of responses</li>
                <li className="flex items-start"><CheckCircle className="text-[#79c7fd] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Self-evaluation and improvement tracking</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#131b2f] to-[#070a12] p-10 rounded-3xl shadow-lg text-white border border-white/10">
              <div className="flex items-center mb-8">
                <FileText className="text-[#79c7fd] w-10 h-10 mr-4" />
                <h3 className="text-3xl font-bold">Smart AI Evaluation Reports</h3>
              </div>
              <p className="text-gray-400 mb-6">Helps students continuously improve and become interview-ready.</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start"><CheckCircle className="text-[#6b84ec] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Behavioral analysis & Performance score</li>
                <li className="flex items-start"><CheckCircle className="text-[#6b84ec] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Strengths, weaknesses & Improvement suggestions</li>
                <li className="flex items-start"><CheckCircle className="text-[#6b84ec] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Communication skills evaluation</li>
                <li className="flex items-start"><CheckCircle className="text-[#6b84ec] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Pronunciation and grammar analysis</li>
                <li className="flex items-start"><CheckCircle className="text-[#6b84ec] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Detection of pauses, hesitation & irrelevant answers</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div className="bg-[#131b2f] p-10 rounded-3xl shadow-lg border border-white/5">
              <div className="flex items-center mb-8">
                <Brain className="text-[#6b84ec] w-10 h-10 mr-4" />
                <h3 className="text-3xl font-bold text-white">AI Coaching System</h3>
              </div>
              <p className="text-gray-400 mb-6">AI acts as a personal mentor for every student.</p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start"><CheckCircle className="text-[#79c7fd] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Personalized learning paths (e.g., Java Developer, Full Stack)</li>
                <li className="flex items-start"><CheckCircle className="text-[#79c7fd] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> AI-guided training and recommendations</li>
                <li className="flex items-start"><CheckCircle className="text-[#79c7fd] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Explanation videos generated dynamically</li>
                <li className="flex items-start"><CheckCircle className="text-[#79c7fd] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Code correction and debugging support</li>
                <li className="flex items-start"><CheckCircle className="text-[#79c7fd] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Continuous skill tracking and improvement</li>
              </ul>
            </div>
            <div className="bg-[#131b2f] p-10 rounded-3xl shadow-lg border border-white/5">
              <div className="flex items-center mb-8">
                <Target className="text-[#6b84ec] w-10 h-10 mr-4" />
                <h3 className="text-3xl font-bold text-white">AI Career Counselling</h3>
              </div>
              <p className="text-gray-400 mb-6">From confusion to clarity in career decisions.</p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start"><CheckCircle className="text-[#79c7fd] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Career guidance for school and college students</li>
                <li className="flex items-start"><CheckCircle className="text-[#79c7fd] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Helps choose the right course and career path</li>
                <li className="flex items-start"><CheckCircle className="text-[#79c7fd] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Provides industry insights and job trends</li>
                <li className="flex items-start"><CheckCircle className="text-[#79c7fd] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Personalized career roadmap</li>
                <li className="flex items-start"><CheckCircle className="text-[#79c7fd] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Skill gap analysis</li>
              </ul>
            </div>
          </div>

          {/* Why Choose Our LMS */}
          <div className="bg-gradient-to-r from-[#131b2f] to-[#070a12] border border-white/10 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Why Choose Our LMS?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
              <div className="bg-[#131b2f] p-6 rounded-2xl shadow-sm border border-white/5 flex flex-col items-center">
                <Brain className="text-[#6b84ec] w-8 h-8 mb-4" />
                <h4 className="font-bold text-white text-sm">AI-powered learning and evaluation</h4>
              </div>
              <div className="bg-[#131b2f] p-6 rounded-2xl shadow-sm border border-white/5 flex flex-col items-center">
                <FileText className="text-[#6b84ec] w-8 h-8 mb-4" />
                <h4 className="font-bold text-white text-sm">Real-time project-based training</h4>
              </div>
              <div className="bg-[#131b2f] p-6 rounded-2xl shadow-sm border border-white/5 flex flex-col items-center">
                <Target className="text-[#6b84ec] w-8 h-8 mb-4" />
                <h4 className="font-bold text-white text-sm">Placement-focused ecosystem</h4>
              </div>
              <div className="bg-[#131b2f] p-6 rounded-2xl shadow-sm border border-white/5 flex flex-col items-center">
                <Users className="text-[#6b84ec] w-8 h-8 mb-4" />
                <h4 className="font-bold text-white text-sm">Multi-role access and easy management</h4>
              </div>
              <div className="bg-[#131b2f] p-6 rounded-2xl shadow-sm border border-white/5 flex flex-col items-center">
                <Settings className="text-[#6b84ec] w-8 h-8 mb-4" />
                <h4 className="font-bold text-white text-sm">Fully customizable for institutions</h4>
              </div>
            </div>
            <Link to="/contact" className="inline-block bg-[#6b84ec] text-white px-10 py-4 rounded-full font-bold hover:bg-[#79c7fd] hover:text-[#0b0f19] transition-colors shadow-lg">
              Experience the Future of Learning with AI
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
