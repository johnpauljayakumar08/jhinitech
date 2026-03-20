const fs = require('fs');
const path = require('path');

const files = [
  'src/pages/ITServices.tsx',
  'src/pages/CloudInfrastructure.tsx',
  'src/pages/DigitalMarketing.tsx',
  'src/pages/ERP.tsx',
  'src/pages/LMS.tsx',
  'src/pages/TrainingPlacement.tsx',
  'src/pages/Blog.tsx',
  'src/pages/Contact.tsx'
];

const replacements = [
  { from: /className="bg-gray-50"/g, to: 'className="bg-[#0b0f19] text-gray-300"' },
  { from: /className="py-20 bg-white"/g, to: 'className="py-20 bg-[#070a12]"' },
  { from: /className="py-24 bg-gray-50"/g, to: 'className="py-24 bg-[#0b0f19]"' },
  { from: /text-gray-900/g, to: 'text-white' },
  { from: /text-gray-600/g, to: 'text-gray-400' },
  { from: /text-gray-700/g, to: 'text-gray-300' },
  { from: /text-gray-800/g, to: 'text-gray-200' },
  { from: /bg-white p-8 rounded-2xl shadow-sm border border-gray-100/g, to: 'bg-[#131b2f] p-8 rounded-2xl shadow-sm border border-white/5 hover:border-[#79c7fd]/30 transition-colors' },
  { from: /bg-white p-6 rounded-xl border border-gray-100/g, to: 'bg-[#131b2f] p-6 rounded-xl border border-white/5 hover:border-[#79c7fd]/30 transition-colors' },
  { from: /bg-white p-6 rounded-2xl shadow-sm/g, to: 'bg-[#131b2f] p-6 rounded-2xl shadow-sm border border-white/5' },
  { from: /bg-white p-10 rounded-3xl shadow-lg border border-gray-100/g, to: 'bg-[#131b2f] p-10 rounded-3xl shadow-lg border border-white/5' },
  { from: /bg-gray-900 p-10 rounded-3xl shadow-lg text-white/g, to: 'bg-gradient-to-br from-[#131b2f] to-[#070a12] p-10 rounded-3xl shadow-lg text-white border border-white/10' },
  { from: /bg-\[#e0efff\] rounded-2xl p-8/g, to: 'bg-gradient-to-r from-[#131b2f] to-[#070a12] border border-white/10 rounded-2xl p-8' },
  { from: /bg-\[#e0efff\] rounded-3xl p-12/g, to: 'bg-gradient-to-r from-[#131b2f] to-[#070a12] border border-white/10 rounded-3xl p-12' },
  { from: /hover:bg-blue-700/g, to: 'hover:bg-[#79c7fd] hover:text-[#0b0f19]' },
  { from: /bg-gray-50 py-24/g, to: 'bg-[#0b0f19] py-24' },
  { from: /bg-white py-20/g, to: 'bg-[#070a12] py-20' },
  { from: /bg-white p-8/g, to: 'bg-[#131b2f] p-8 border border-white/5' },
  { from: /bg-white rounded-2xl/g, to: 'bg-[#131b2f] rounded-2xl border border-white/5' },
  { from: /bg-gray-50 p-8/g, to: 'bg-[#070a12] p-8' },
  { from: /border-gray-200/g, to: 'border-white/10' },
  { from: /border-gray-100/g, to: 'border-white/5' },
  { from: /bg-white/g, to: 'bg-[#131b2f]' },
  { from: /bg-gray-50/g, to: 'bg-[#0b0f19]' },
  { from: /bg-gray-100/g, to: 'bg-[#131b2f]' },
  { from: /text-gray-500/g, to: 'text-gray-400' },
  { from: /bg-blue-50/g, to: 'bg-[#131b2f]' },
  { from: /bg-blue-600/g, to: 'bg-[#6b84ec]' },
  { from: /text-blue-600/g, to: 'text-[#6b84ec]' },
  { from: /text-blue-700/g, to: 'text-[#79c7fd]' }
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    replacements.forEach(r => {
      content = content.replace(r.from, r.to);
    });
    
    // Fix specific inputs for Contact page
    content = content.replace(/bg-\[#131b2f\] border border-white\/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-\[#6b84ec\] focus:border-transparent transition-shadow/g, 'bg-[#0b0f19] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#6b84ec] focus:border-transparent transition-shadow');
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
  } else {
    console.log(`File not found: ${file}`);
  }
});
