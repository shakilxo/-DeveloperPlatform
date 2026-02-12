
import React from 'react';
import { Highlight } from './Highlight';

export const SoftwareGrid: React.FC = () => {
  const platforms = [
    'EpicDev', 'dataBites', 'starsup', 'ExDone', 'TEAMTALK', 
    'SlabSpace', 'selfast', 'EpicDev', 'dataBites', 'starsup'
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Useful <Highlight>software</Highlight> that <br /> can assist.
        </h2>
      </div>
      
      <div className="flex flex-col gap-4">
        <div className="flex justify-center gap-4 animate-scroll-left">
          {platforms.slice(0, 5).map((p, i) => (
            <div key={i} className="min-w-[180px] h-20 border border-white/10 bg-[#0a0a0a] rounded-lg flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all hover:border-[#4ade80]/40 group">
              <span className="text-lg font-bold tracking-tighter italic text-white/40 group-hover:text-white">{p}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-4 animate-scroll-right">
          {platforms.slice(5).map((p, i) => (
            <div key={i} className="min-w-[180px] h-20 border border-white/10 bg-[#0a0a0a] rounded-lg flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all hover:border-[#4ade80]/40 group">
              <span className="text-lg font-bold tracking-tighter italic text-white/40 group-hover:text-white">{p}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center mt-12">
        <button className="px-8 py-3 bg-[#4ade80] text-black text-[11px] font-bold uppercase tracking-widest rounded hover:bg-[#34d399] transition-all">
          See Full Software
        </button>
      </div>

      <div className="max-w-7xl mx-auto mt-32 p-12 bg-[#0a0a0a] border border-white/5 rounded-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-8">
           <div className="w-12 h-12 border border-[#4ade80]/40 rounded-full flex items-center justify-center text-[#4ade80]">
              <ArrowUpRight className="w-6 h-6" />
           </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
           <div className="max-w-md">
             <h2 className="text-4xl font-bold tracking-tight mb-6">
               Join the <Highlight>community</Highlight> around the world
             </h2>
             <a href="#" className="text-[11px] font-bold uppercase tracking-widest text-[#4ade80] hover:underline">
               Join Community ↳
             </a>
           </div>
           <p className="text-white/40 text-sm max-w-xs leading-relaxed">
             A custom environment designed especially for developing and facilitating React, Vue, Angular, and other.
           </p>
        </div>
      </div>
    </section>
  );
};

const ArrowUpRight = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);
