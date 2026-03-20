import { Link, Outlet } from 'react-router-dom';
import { Menu, X, MessageCircle, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'IT Services', path: '/it-services' },
    { name: 'Cloud & Infra', path: '/cloud-infrastructure' },
    { name: 'Digital Marketing', path: '/digital-marketing' },
    { name: 'ERP', path: '/erp' },
    { name: 'LMS', path: '/lms' },
    { name: 'Training & Placement', path: '/training-placement' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-300 bg-[#16062B]">
      {/* Navbar */}
      <header className="bg-[#16062B]/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold text-[#9B75C9]">
                Jhini<span className="text-[#CBB6E6]">Tech</span>
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <nav className="hidden xl:flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm font-medium text-gray-300 hover:text-[#CBB6E6] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="xl:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-[#CBB6E6] focus:outline-none"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="xl:hidden bg-[#320E5E]/40 border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-[#CBB6E6] hover:bg-white/5"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-110">
          <MessageCircle size={24} />
        </a>
        <a href="tel:+1234567890" className="bg-gradient-light-purple text-white p-3 rounded-full shadow-purple-glow hover:opacity-90 transition-all hover:scale-110">
          <Phone size={24} />
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-[#110422] border-t border-white/10 text-gray-400 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-1">
              <Link to="/" className="text-3xl font-bold text-white mb-6 block">
                Jhini<span className="text-[#CBB6E6]">Tech</span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed">
                Transforming businesses into digital success stories and shaping future-ready professionals through innovative IT, ERP, LMS solutions and training.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6 text-[#CBB6E6]">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/it-services" className="hover:text-white transition-colors">IT Services</Link></li>
                <li><Link to="/erp" className="hover:text-white transition-colors">ERP Solutions</Link></li>
                <li><Link to="/lms" className="hover:text-white transition-colors">LMS Platform</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-[#CBB6E6]">Services</h3>
              <ul className="space-y-3">
                <li><Link to="/cloud-infrastructure" className="hover:text-white transition-colors">Cloud & Infrastructure</Link></li>
                <li><Link to="/digital-marketing" className="hover:text-white transition-colors">Digital Marketing</Link></li>
                <li><Link to="/training-placement" className="hover:text-white transition-colors">Training & Placement</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-[#CBB6E6]">Contact Info</h3>
              <ul className="space-y-3">
                <li>Email: info@jhinitech.com</li>
                <li>Phone: +1 234 567 890</li>
                <li>Location: Global Operations</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Jhini Tech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
