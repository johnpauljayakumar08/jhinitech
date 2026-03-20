import { motion } from 'framer-motion';
import { Settings, Users, Database, Briefcase, ArrowRight, CheckCircle, BarChart, ShoppingCart, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ERP() {
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
            Transform Your Business with Fully Customized ERP Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-light max-w-3xl mx-auto opacity-90 mb-10"
          >
            Jhini Tech delivers advanced, fully customized ERP solutions designed to streamline operations, automate workflows, and provide real-time insights across all business functions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-[#320E5E]/40 text-[#9B75C9] hover:bg-[#16062B] transition-all shadow-xl hover:-translate-y-1">
              Get Free Demo Login
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-[#110422]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-gray-400 leading-relaxed">
            Our ERP is built to adapt to any industry, ensuring flexibility, scalability, and complete control over your business processes. With our next-generation ERP system, businesses can eliminate manual work, improve efficiency, and make data-driven decisions for sustainable growth.
          </p>
        </div>
      </section>

      {/* Core ERP Modules */}
      <section className="py-24 bg-[#16062B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Core ERP Modules</h2>
            <div className="w-24 h-1 bg-gradient-light-purple mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            
            {/* Finance & Accounting */}
            <div className="bg-[#320E5E]/40 p-8 rounded-2xl shadow-sm border border-white/5 hover:border-[#CBB6E6]/30 transition-colors hover:shadow-xl transition-all">
              <BarChart className="text-[#9B75C9] w-10 h-10 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Finance & Accounting</h3>
              <p className="text-gray-400 mb-6 text-sm">Complete financial visibility and control in one system.</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Financial statements & reporting</li>
                <li>• Taxation & compliance</li>
                <li>• Customizable General Ledger (GL)</li>
                <li>• Accounts Payable (AP) & Receivable (AR)</li>
                <li>• Cost centers & budget management</li>
                <li>• Bank reconciliation & asset management</li>
              </ul>
            </div>

            {/* Manufacturing */}
            <div className="bg-[#320E5E]/40 p-8 rounded-2xl shadow-sm border border-white/5 hover:border-[#CBB6E6]/30 transition-colors hover:shadow-xl transition-all">
              <Settings className="text-[#9B75C9] w-10 h-10 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Manufacturing</h3>
              <p className="text-gray-400 mb-6 text-sm">Optimize production efficiency and reduce operational costs.</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Multi-level Bill of Materials (BOM)</li>
                <li>• Production planning & scheduling</li>
                <li>• Capacity planning & work orders</li>
                <li>• Workstation & routing management</li>
                <li>• Make-to-order & make-to-stock</li>
                <li>• Quality inspection & control</li>
              </ul>
            </div>

            {/* Sales & CRM */}
            <div className="bg-[#320E5E]/40 p-8 rounded-2xl shadow-sm border border-white/5 hover:border-[#CBB6E6]/30 transition-colors hover:shadow-xl transition-all">
              <Users className="text-[#9B75C9] w-10 h-10 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Sales & CRM</h3>
              <p className="text-gray-400 mb-6 text-sm">Improve customer relationships and increase sales efficiency.</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Lead & opportunity management</li>
                <li>• Multi-territory sales management</li>
                <li>• Quotation, order & contract management</li>
                <li>• Price lists, rules & discounts</li>
                <li>• POS, warranty & AMC management</li>
                <li>• Invoice generation & tracking</li>
              </ul>
            </div>

            {/* Inventory */}
            <div className="bg-[#320E5E]/40 p-8 rounded-2xl shadow-sm border border-white/5 hover:border-[#CBB6E6]/30 transition-colors hover:shadow-xl transition-all">
              <Database className="text-[#9B75C9] w-10 h-10 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Inventory (Stock Management)</h3>
              <p className="text-gray-400 mb-6 text-sm">Maintain accurate stock flow and avoid shortages or overstocking.</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Item management (groups, variants)</li>
                <li>• Batch & serial number tracking</li>
                <li>• Shelf-life management</li>
                <li>• Warehouse & bin management</li>
                <li>• Automatic stock replenishment</li>
                <li>• Landed cost calculation</li>
              </ul>
            </div>

            {/* Procurement */}
            <div className="bg-[#320E5E]/40 p-8 rounded-2xl shadow-sm border border-white/5 hover:border-[#CBB6E6]/30 transition-colors hover:shadow-xl transition-all">
              <ShoppingCart className="text-[#9B75C9] w-10 h-10 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Procurement</h3>
              <p className="text-gray-400 mb-6 text-sm">Streamline procurement and vendor management.</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Purchase planning & forecasting</li>
                <li>• RFP & supplier quotation management</li>
                <li>• Purchase orders (PO), GRN & invoices</li>
                <li>• Vendor portal & onboarding</li>
                <li>• Supplier performance scorecards</li>
                <li>• Subcontracted purchasing</li>
              </ul>
            </div>

            {/* Project Management & HR */}
            <div className="bg-[#320E5E]/40 p-8 rounded-2xl shadow-sm border border-white/5 hover:border-[#CBB6E6]/30 transition-colors hover:shadow-xl transition-all">
              <Calendar className="text-[#9B75C9] w-10 h-10 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Project Management & HR</h3>
              <p className="text-gray-400 mb-6 text-sm">Ensure projects are delivered on time and simplify HR operations.</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Task management & Gantt charts</li>
                <li>• Resource allocation & time tracking</li>
                <li>• Milestone-based billing</li>
                <li>• Employee document management</li>
                <li>• Attendance & leave management</li>
                <li>• Payroll processing & automation</li>
              </ul>
            </div>

          </div>

          {/* Business Verticals */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">Business Verticals We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
              {[
                'Automobile and Ancillary', 'Government', 'Mutual Funds', 'Banking and Financial Services',
                'Healthcare and Pharmaceuticals', 'Construction and Real Estate', 'Information Technology',
                'Printing and Media', 'Education', 'Manufacturing', 'Retail and FMCG', 'Textile'
              ].map((vertical, idx) => (
                <div key={idx} className="bg-[#320E5E]/40 p-4 rounded-xl border border-white/5 shadow-sm flex items-center justify-center min-h-[100px]">
                  <span className="font-semibold text-gray-300 text-sm">{vertical}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features & Benefits */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div className="bg-[#320E5E]/40 p-10 rounded-3xl shadow-lg border border-white/5">
              <h3 className="text-3xl font-bold text-white mb-8">Advanced Features</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-300"><CheckCircle className="text-[#CBB6E6] mr-3 w-5 h-5" /> Mobile-friendly system</li>
                <li className="flex items-center text-gray-300"><CheckCircle className="text-[#CBB6E6] mr-3 w-5 h-5" /> Multi-currency support</li>
                <li className="flex items-center text-gray-300"><CheckCircle className="text-[#CBB6E6] mr-3 w-5 h-5" /> Document management</li>
                <li className="flex items-center text-gray-300"><CheckCircle className="text-[#CBB6E6] mr-3 w-5 h-5" /> Role-based access control</li>
                <li className="flex items-center text-gray-300"><CheckCircle className="text-[#CBB6E6] mr-3 w-5 h-5" /> Field-level customization</li>
                <li className="flex items-center text-gray-300"><CheckCircle className="text-[#CBB6E6] mr-3 w-5 h-5" /> Email and SMS integration</li>
                <li className="flex items-center text-gray-300"><CheckCircle className="text-[#CBB6E6] mr-3 w-5 h-5" /> Payment gateway integration</li>
                <li className="flex items-center text-gray-300"><CheckCircle className="text-[#CBB6E6] mr-3 w-5 h-5" /> Customer and vendor portals</li>
                <li className="flex items-center text-gray-300"><CheckCircle className="text-[#CBB6E6] mr-3 w-5 h-5" /> Workflow approvals</li>
                <li className="flex items-center text-gray-300"><CheckCircle className="text-[#CBB6E6] mr-3 w-5 h-5" /> Customizable reports and dashboards</li>
              </ul>
            </div>
            <div className="bg-gradient-dark-purple p-10 rounded-3xl shadow-lg text-white border border-white/10">
              <h3 className="text-3xl font-bold mb-8 text-[#CBB6E6]">Business Benefits</h3>
              <ul className="space-y-6">
                <li className="flex items-center text-lg"><CheckCircle className="text-[#9B75C9] mr-4 w-6 h-6" /> Reduced operational costs and risks</li>
                <li className="flex items-center text-lg"><CheckCircle className="text-[#9B75C9] mr-4 w-6 h-6" /> Improved financial management and cash flow</li>
                <li className="flex items-center text-lg"><CheckCircle className="text-[#9B75C9] mr-4 w-6 h-6" /> Real-time insights into business performance</li>
                <li className="flex items-center text-lg"><CheckCircle className="text-[#9B75C9] mr-4 w-6 h-6" /> Faster and smarter decision-making</li>
                <li className="flex items-center text-lg"><CheckCircle className="text-[#9B75C9] mr-4 w-6 h-6" /> Increased productivity and efficiency</li>
                <li className="flex items-center text-lg"><CheckCircle className="text-[#9B75C9] mr-4 w-6 h-6" /> Scalable system for business growth</li>
              </ul>
            </div>
          </div>

          {/* Why Our ERP */}
          <div className="bg-gradient-dark-purple border border-white/10 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Why Our ERP?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <div className="bg-[#320E5E]/40 p-6 rounded-2xl shadow-sm border border-white/5">
                <h4 className="font-bold text-[#9B75C9] mb-2">100% Customization</h4>
                <p className="text-sm text-gray-400">Based on business needs</p>
              </div>
              <div className="bg-[#320E5E]/40 p-6 rounded-2xl shadow-sm border border-white/5">
                <h4 className="font-bold text-[#9B75C9] mb-2">Unlimited Access</h4>
                <p className="text-sm text-gray-400">Unlimited user access</p>
              </div>
              <div className="bg-[#320E5E]/40 p-6 rounded-2xl shadow-sm border border-white/5">
                <h4 className="font-bold text-[#9B75C9] mb-2">White-Label</h4>
                <p className="text-sm text-gray-400">White-label ERP solutions</p>
              </div>
              <div className="bg-[#320E5E]/40 p-6 rounded-2xl shadow-sm border border-white/5">
                <h4 className="font-bold text-[#9B75C9] mb-2">Seamless Integrations</h4>
                <p className="text-sm text-gray-400">WhatsApp, Email, CRM, APIs</p>
              </div>
            </div>
            <Link to="/contact" className="inline-block bg-gradient-light-purple hover:opacity-90 text-white px-10 py-4 rounded-full font-bold shadow-purple-glow transition-all">
              Streamline, Automate, and Scale Your Business
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
