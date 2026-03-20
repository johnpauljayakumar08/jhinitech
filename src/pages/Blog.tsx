import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const blogs = [
    {
      id: 1,
      title: 'The Future of ERP Systems in Modern Businesses',
      excerpt: 'Discover how AI and automation are transforming traditional ERP systems into intelligent business management platforms.',
      image: 'https://picsum.photos/seed/erp/800/600',
      date: 'Oct 15, 2023',
      author: 'Jhini Tech Team',
      category: 'ERP Solutions'
    },
    {
      id: 2,
      title: 'How AI is Revolutionizing Learning Management Systems',
      excerpt: 'Explore the impact of AI coaching, mock interviews, and personalized learning paths in modern education.',
      image: 'https://picsum.photos/seed/lms/800/600',
      date: 'Nov 02, 2023',
      author: 'Jhini Tech Team',
      category: 'LMS & Education'
    },
    {
      id: 3,
      title: 'Top Digital Marketing Strategies for 2024',
      excerpt: 'Stay ahead of the competition with these proven SEO, SEM, and social media marketing strategies.',
      image: 'https://picsum.photos/seed/marketing/800/600',
      date: 'Nov 20, 2023',
      author: 'Jhini Tech Team',
      category: 'Digital Marketing'
    },
    {
      id: 4,
      title: 'Why Cloud Migration is Essential for Scalability',
      excerpt: 'Learn the benefits of migrating your business infrastructure to the cloud and how it improves security and performance.',
      image: 'https://picsum.photos/seed/cloud/800/600',
      date: 'Dec 05, 2023',
      author: 'Jhini Tech Team',
      category: 'Cloud Infrastructure'
    },
    {
      id: 5,
      title: 'Bridging the Gap: From Campus to Corporate',
      excerpt: 'How real-time project experience and industry-focused training prepare students for successful careers.',
      image: 'https://picsum.photos/seed/training/800/600',
      date: 'Jan 12, 2024',
      author: 'Jhini Tech Team',
      category: 'Training & Placement'
    },
    {
      id: 6,
      title: 'The Importance of Custom Web Applications',
      excerpt: 'Why off-the-shelf software might be holding your business back and how custom solutions drive growth.',
      image: 'https://picsum.photos/seed/webdev/800/600',
      date: 'Feb 28, 2024',
      author: 'Jhini Tech Team',
      category: 'IT Services'
    }
  ];

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
            Insights & Articles
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-light max-w-3xl mx-auto opacity-90"
          >
            Explore blogs on ERP, digital marketing, IT trends, cloud computing, and career guidance for students and businesses.
          </motion.p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-[#16062B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((blog) => (
              <div key={blog.id} className="bg-[#320E5E]/40 rounded-2xl border border-white/5 overflow-hidden shadow-sm hover:shadow-xl transition-all group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-light-purple text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-purple-glow">
                    {blog.category}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center text-sm text-gray-400 mb-4 space-x-4">
                    <span className="flex items-center"><Calendar size={14} className="mr-1" /> {blog.date}</span>
                    <span className="flex items-center"><User size={14} className="mr-1" /> {blog.author}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#9B75C9] transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-400 mb-6 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <Link to="#" className="inline-flex items-center text-[#CBB6E6] font-semibold hover:text-[#9B75C9] transition-colors">
                    Read More <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination (Static) */}
          <div className="mt-16 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button className="px-4 py-2 border border-white/10 rounded-lg text-gray-400 hover:bg-[#16062B] disabled:opacity-50" disabled>Previous</button>
              <button className="px-4 py-2 bg-gradient-light-purple text-white rounded-lg font-medium shadow-purple-glow">1</button>
              <button className="px-4 py-2 border border-white/10 rounded-lg text-gray-300 hover:bg-[#16062B] font-medium">2</button>
              <button className="px-4 py-2 border border-white/10 rounded-lg text-gray-300 hover:bg-[#16062B] font-medium">3</button>
              <button className="px-4 py-2 border border-white/10 rounded-lg text-gray-300 hover:bg-[#16062B]">Next</button>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
}
