import { motion } from 'framer-motion';
import { Monitor, Smartphone, ShoppingCart, Search, PenTool, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ITServices() {
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
            From Websites to Apps — Complete IT Solutions Under One Roof
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-light max-w-3xl mx-auto opacity-90 mb-10"
          >
            We provide end-to-end IT solutions, including web development, mobile apps, and customized software tailored to your business needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-[#320E5E]/40 text-[#9B75C9] hover:bg-[#16062B] transition-all shadow-xl hover:-translate-y-1">
              Enquire Now
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-[#110422]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-gray-400 leading-relaxed">
            At Jhini Tech, we provide end-to-end IT solutions designed to help businesses establish a strong digital presence and operate efficiently. From websites and mobile applications to customized software and branding, our solutions are tailored to meet your unique business requirements. We combine innovation, technology, and user-centric design to deliver scalable, high-performance digital products that drive growth and enhance user experience.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-[#16062B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Website Development */}
          <div className="mb-24">
            <div className="flex items-center mb-8">
              <Monitor className="text-[#9B75C9] w-12 h-12 mr-6" />
              <h2 className="text-4xl font-bold text-white">Website Development</h2>
            </div>
            <p className="text-xl text-gray-400 mb-10">We design and develop professional, responsive, and high-performing websites that reflect your brand and drive engagement.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-[#320E5E]/40 p-8 rounded-2xl shadow-sm border border-white/5 hover:border-[#CBB6E6]/30 transition-colors">
                <h3 className="text-2xl font-bold text-white mb-4">Static Websites</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Simple, fast, and cost-effective websites</li>
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Ideal for small businesses and informational platforms</li>
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Clean design with quick loading speed</li>
                </ul>
              </div>
              <div className="bg-[#320E5E]/40 p-8 rounded-2xl shadow-sm border border-white/5 hover:border-[#CBB6E6]/30 transition-colors">
                <h3 className="text-2xl font-bold text-white mb-4">Dynamic Websites</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Content-driven websites with admin control</li>
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Blog integration for SEO and content marketing</li>
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Easy updates and scalability</li>
                </ul>
              </div>
              <div className="bg-[#320E5E]/40 p-8 rounded-2xl shadow-sm border border-white/5 hover:border-[#CBB6E6]/30 transition-colors">
                <h3 className="text-2xl font-bold text-white mb-4">Custom Web Apps</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Fully customized business software solutions</li>
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Built to automate workflows and operations</li>
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Scalable architecture based on business needs</li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-dark-purple border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-[#9B75C9] mb-2">Outdated Website? Time for an Upgrade</h3>
                <p className="text-gray-300">From simple websites to advanced web platforms, we build solutions that grow with your business.</p>
              </div>
              <Link to="/contact" className="mt-6 md:mt-0 bg-gradient-light-purple hover:opacity-90 text-white px-8 py-3 rounded-full font-semibold shadow-purple-glow transition-all whitespace-nowrap">
                Start Now
              </Link>
            </div>
          </div>

          {/* Mobile App Development */}
          <div className="mb-24">
            <div className="flex items-center mb-8">
              <Smartphone className="text-[#9B75C9] w-12 h-12 mr-6" />
              <h2 className="text-4xl font-bold text-white">Mobile Application Development</h2>
            </div>
            <p className="text-xl text-gray-400 mb-10">We develop intuitive and user-friendly mobile applications that enhance customer engagement and business accessibility.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-[#320E5E]/40 p-8 rounded-2xl shadow-sm border border-white/5 hover:border-[#CBB6E6]/30 transition-colors">
                <h3 className="text-2xl font-bold text-white mb-4">iOS Applications</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> High-performance apps for Apple devices</li>
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Clean UI/UX with smooth functionality</li>
                </ul>
              </div>
              <div className="bg-[#320E5E]/40 p-8 rounded-2xl shadow-sm border border-white/5 hover:border-[#CBB6E6]/30 transition-colors">
                <h3 className="text-2xl font-bold text-white mb-4">Android Applications</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Scalable apps for Android users</li>
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Optimized for performance and usability</li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-dark-purple border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-[#9B75C9] mb-2">Build Your Business App with Experts</h3>
                <p className="text-gray-300">We ensure seamless user experience across all devices.</p>
              </div>
              <Link to="/contact" className="mt-6 md:mt-0 bg-gradient-light-purple hover:opacity-90 text-white px-8 py-3 rounded-full font-semibold shadow-purple-glow transition-all whitespace-nowrap">
                Enquiry Now
              </Link>
            </div>
          </div>

          {/* E-Commerce Development */}
          <div className="mb-24">
            <div className="flex items-center mb-8">
              <ShoppingCart className="text-[#9B75C9] w-12 h-12 mr-6" />
              <h2 className="text-4xl font-bold text-white">E-Commerce Development</h2>
            </div>
            <p className="text-xl text-gray-400 mb-10">We create powerful e-commerce platforms that enable businesses to sell, manage, and scale online efficiently.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-[#320E5E]/40 p-8 rounded-2xl shadow-sm border border-white/5 hover:border-[#CBB6E6]/30 transition-colors">
                <h3 className="text-2xl font-bold text-white mb-4">Custom E-Commerce (AI-Integrated)</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Fully customized online stores</li>
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> AI integration for recommendations, automation, and analytics</li>
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Secure payment gateway integration</li>
                </ul>
              </div>
              <div className="bg-[#320E5E]/40 p-8 rounded-2xl shadow-sm border border-white/5 hover:border-[#CBB6E6]/30 transition-colors">
                <h3 className="text-2xl font-bold text-white mb-4">Platform-Based Development</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> WordPress (WooCommerce) – Flexible and easy-to-manage solutions</li>
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Shopify – Fast, scalable, and ready-to-launch stores</li>
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Magento – Advanced, enterprise-level e-commerce platforms</li>
                </ul>
              </div>
              <div className="bg-[#320E5E]/40 p-8 rounded-2xl shadow-sm border border-white/5 hover:border-[#CBB6E6]/30 transition-colors">
                <h3 className="text-2xl font-bold text-white mb-4">End-to-End Solutions</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Product management</li>
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Order & inventory tracking</li>
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Payment integration</li>
                  <li className="flex items-start"><CheckCircle className="text-[#CBB6E6] w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Shipping & logistics setup</li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-dark-purple border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-[#9B75C9] mb-2">Struggling with Online Sales? We Have the Solution</h3>
                <p className="text-gray-300">From concept to launch, we handle complete e-commerce development.</p>
              </div>
              <Link to="/contact" className="mt-6 md:mt-0 bg-gradient-light-purple hover:opacity-90 text-white px-8 py-3 rounded-full font-semibold shadow-purple-glow transition-all whitespace-nowrap">
                Enquiry Now
              </Link>
            </div>
          </div>

          {/* Amazon, Noon & AWS Account Setup */}
          <div className="mb-24">
            <div className="flex items-center mb-8">
              <Search className="text-[#9B75C9] w-12 h-12 mr-6" />
              <h2 className="text-4xl font-bold text-white">Amazon, Noon & AWS Account Setup</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-[#320E5E]/40 p-8 rounded-2xl shadow-sm border border-white/5 hover:border-[#CBB6E6]/30 transition-colors">
                <h3 className="text-xl font-bold text-white mb-4">Account Setup</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Seller account creation</li>
                  <li>• Business profile setup</li>
                  <li>• Storefront design</li>
                  <li>• Product category mapping</li>
                  <li>• Compliance support</li>
                </ul>
              </div>
              <div className="bg-[#320E5E]/40 p-8 rounded-2xl shadow-sm border border-white/5 hover:border-[#CBB6E6]/30 transition-colors">
                <h3 className="text-xl font-bold text-white mb-4">SEO Product Listings</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Keyword research</li>
                  <li>• SEO-optimized titles</li>
                  <li>• Bullet points & descriptions</li>
                  <li>• Backend keyword optimization</li>
                  <li>• Image optimization</li>
                </ul>
              </div>
              <div className="bg-[#320E5E]/40 p-8 rounded-2xl shadow-sm border border-white/5 hover:border-[#CBB6E6]/30 transition-colors">
                <h3 className="text-xl font-bold text-white mb-4">Sponsored Ad Campaigns</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Amazon Ads setup</li>
                  <li>• Noon Ads campaign</li>
                  <li>• Google Ads for products</li>
                  <li>• Budget & bid optimization</li>
                  <li>• A/B testing & tracking</li>
                </ul>
              </div>
              <div className="bg-[#320E5E]/40 p-8 rounded-2xl shadow-sm border border-white/5 hover:border-[#CBB6E6]/30 transition-colors">
                <h3 className="text-xl font-bold text-white mb-4">Store Management</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Product listing updates</li>
                  <li>• Inventory management</li>
                  <li>• Order processing</li>
                  <li>• Pricing strategy</li>
                  <li>• Customer queries</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Branding & Creative Services */}
          <div className="mb-24">
            <div className="flex items-center mb-8">
              <PenTool className="text-[#9B75C9] w-12 h-12 mr-6" />
              <h2 className="text-4xl font-bold text-white">Branding & Creative Services</h2>
            </div>
            <p className="text-xl text-gray-400 mb-10">We build strong brand identities that create lasting impressions and improve market visibility.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="bg-[#320E5E]/40 p-8 rounded-2xl shadow-sm border border-white/5 hover:border-[#CBB6E6]/30 transition-colors text-center">
                <h3 className="text-xl font-bold text-white mb-4">Graphic Design</h3>
                <p className="text-gray-400">Creative and professional visual designs</p>
              </div>
              <div className="bg-[#320E5E]/40 p-8 rounded-2xl shadow-sm border border-white/5 hover:border-[#CBB6E6]/30 transition-colors text-center">
                <h3 className="text-xl font-bold text-white mb-4">Logo Design</h3>
                <p className="text-gray-400">Unique and impactful brand logos</p>
              </div>
              <div className="bg-[#320E5E]/40 p-8 rounded-2xl shadow-sm border border-white/5 hover:border-[#CBB6E6]/30 transition-colors text-center">
                <h3 className="text-xl font-bold text-white mb-4">Marketing Materials</h3>
                <p className="text-gray-400">Flyers, Posters, Brochures, Business Cards</p>
              </div>
              <div className="bg-[#320E5E]/40 p-8 rounded-2xl shadow-sm border border-white/5 hover:border-[#CBB6E6]/30 transition-colors text-center">
                <h3 className="text-xl font-bold text-white mb-4">UI/UX Design</h3>
                <p className="text-gray-400">User-friendly and engaging interface designs</p>
              </div>
            </div>
            <div className="bg-gradient-dark-purple border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-[#9B75C9] mb-2">Create a Powerful Identity for Your Business</h3>
                <p className="text-gray-300">We ensure your brand stands out with a consistent and professional identity.</p>
              </div>
              <Link to="/contact" className="mt-6 md:mt-0 bg-gradient-light-purple hover:opacity-90 text-white px-8 py-3 rounded-full font-semibold shadow-purple-glow transition-all whitespace-nowrap">
                Let's Start
              </Link>
            </div>
          </div>

          {/* Our Approach & Why Choose Us */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-[#320E5E]/40 p-10 rounded-3xl shadow-lg border border-white/5">
              <h3 className="text-3xl font-bold text-white mb-8">Our Approach</h3>
              <ul className="space-y-6">
                <li className="flex items-center text-lg text-gray-300"><span className="w-8 h-8 rounded-full bg-[#CBB6E6] text-white flex items-center justify-center font-bold mr-4">1</span> Understand your business requirements</li>
                <li className="flex items-center text-lg text-gray-300"><span className="w-8 h-8 rounded-full bg-[#CBB6E6] text-white flex items-center justify-center font-bold mr-4">2</span> Design customized solutions</li>
                <li className="flex items-center text-lg text-gray-300"><span className="w-8 h-8 rounded-full bg-[#CBB6E6] text-white flex items-center justify-center font-bold mr-4">3</span> Develop scalable and secure systems</li>
                <li className="flex items-center text-lg text-gray-300"><span className="w-8 h-8 rounded-full bg-[#CBB6E6] text-white flex items-center justify-center font-bold mr-4">4</span> Deliver user-friendly interfaces</li>
                <li className="flex items-center text-lg text-gray-300"><span className="w-8 h-8 rounded-full bg-[#CBB6E6] text-white flex items-center justify-center font-bold mr-4">5</span> Provide ongoing support and enhancements</li>
              </ul>
            </div>
            <div className="bg-gradient-dark-purple p-10 rounded-3xl shadow-lg text-white border border-white/10">
              <h3 className="text-3xl font-bold mb-8 text-[#CBB6E6]">Why Choose Our IT Services</h3>
              <ul className="space-y-6">
                <li className="flex items-center text-lg"><CheckCircle className="text-[#9B75C9] mr-4 w-6 h-6" /> Fully customized development</li>
                <li className="flex items-center text-lg"><CheckCircle className="text-[#9B75C9] mr-4 w-6 h-6" /> Modern technologies & frameworks</li>
                <li className="flex items-center text-lg"><CheckCircle className="text-[#9B75C9] mr-4 w-6 h-6" /> Scalable and secure solutions</li>
                <li className="flex items-center text-lg"><CheckCircle className="text-[#9B75C9] mr-4 w-6 h-6" /> SEO-friendly and performance-optimized</li>
                <li className="flex items-center text-lg"><CheckCircle className="text-[#9B75C9] mr-4 w-6 h-6" /> End-to-end support</li>
              </ul>
              <div className="mt-12">
                <Link to="/contact" className="w-full block text-center bg-gradient-light-purple hover:opacity-90 text-white px-8 py-4 rounded-xl font-bold shadow-purple-glow transition-all">
                  Let's Build Your Next Digital Solution
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
