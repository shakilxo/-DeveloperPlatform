
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const navItems = [
    { name: 'How it works?', id: 'how-it-works' },
    { name: 'Develop', id: 'develop' },
    { name: 'Features', id: 'features' },
    { name: 'Docs', id: 'docs' },
    { name: 'Blog', id: 'blog' },
    { name: 'About', id: 'about' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <div 
            className="text-lg font-bold tracking-tight cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            The<span className="text-[#4ade80]">Programmer</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-[11px] font-medium tracking-widest text-white/60 uppercase">
            {navItems.map(item => (
              <button 
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`hover:text-white transition-colors ${currentPage === item.id ? 'text-[#4ade80]' : ''}`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
        
        <button className="flex items-center gap-2 px-4 py-2 border border-[#4ade80]/40 text-[#4ade80] text-[11px] font-bold uppercase tracking-widest hover:bg-[#4ade80]/10 transition-all rounded">
          Sign Up <ArrowUpRight className="w-3 h-3" />
        </button>
      </div>
    </nav>
  );
};
