
import React from 'react';

export const Footer: React.FC = () => {
  const columns = [
    { title: 'Company', links: ['How it works', 'Features', 'Docs', 'Blog', 'About'] },
    { title: 'Resource', links: ['Docs', 'Forum', 'Careers', 'Templates', 'Feedback'] },
    { title: 'Legal', links: ['Terms of Service', 'Privacy Policy', 'Guidelines', 'Fair Use Policy', 'Feedback'] },
    { title: 'Support', links: ['FAQs', 'Call Center', 'Maintance', 'Status'] },
    { title: 'Platform', links: ['Team', 'Security', 'Roadmap', 'Features', 'Enterprise'] },
  ];

  return (
    <footer className="pt-24 pb-12 px-6 border-t border-white/5 bg-[#030303]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-20">
          {columns.map((col) => (
            <div key={col.title} className="space-y-6">
              <h4 className="text-sm font-bold tracking-tight">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[11px] text-white/40 hover:text-white uppercase tracking-wider transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-6">
          <div className="flex flex-col gap-1">
            <div className="text-[11px] text-white/20 font-medium uppercase tracking-[0.2em]">
              2025 All Rights Reserved © Circle
            </div>
            <div className="text-[10px] text-[#4ade80]/60 font-bold uppercase tracking-[0.25em]">
              Design by MSH
            </div>
          </div>
          <div className="flex gap-8">
            {['Twitter', 'GitHub', 'LinkedIn'].map(social => (
              <a key={social} href="#" className="text-[11px] text-white/20 hover:text-white uppercase tracking-widest transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
