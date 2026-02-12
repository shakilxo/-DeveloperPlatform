
import React from 'react';
import { Play, ArrowUpRight } from 'lucide-react';
import { Highlight } from './Highlight';
import { CodeMockup } from './CodeMockup';

export const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#4ade80]/5 blur-[120px] -z-10 rounded-full"></div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          Expert Developers for <br /> 
          a Connected <Highlight>World</Highlight>
        </h1>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
          <button className="flex items-center gap-2 px-6 py-3 bg-[#4ade80] text-black text-[12px] font-bold uppercase tracking-widest rounded hover:bg-[#34d399] transition-all">
            <Play className="w-4 h-4 fill-current" /> Watch a Video
          </button>
          
          <p className="max-w-md text-sm text-white/50 text-left leading-relaxed">
            Circle is a code development platform that gives innovators the speed and reliability they need to create at the speed of inspiration.
          </p>

          <button className="flex items-center gap-2 px-6 py-3 border border-white/20 text-white text-[11px] font-bold uppercase tracking-widest rounded hover:bg-white/5 transition-all">
            Get a Demo <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <CodeMockup />
        
        <div className="mt-24 space-y-8">
          <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-medium">
            Providing power to the world's best product teams.
          </p>
          <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {['EpicDev', 'dataBites.', 'starsup', 'ExDone', 'selfast'].map((brand) => (
              <span key={brand} className="text-lg font-bold tracking-tighter italic">{brand}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
