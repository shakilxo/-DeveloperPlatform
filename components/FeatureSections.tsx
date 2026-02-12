
import React from 'react';
import { Highlight } from './Highlight';
// Added Play icon to imports from lucide-react
import { ArrowUpRight, Play } from 'lucide-react';

export const FullStackSection: React.FC = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
            Finally you can develop <br />
            <Highlight>full-stack</Highlight> web <br />
            applications in one <br />
            place.
          </h2>
          <p className="text-white/50 text-base leading-relaxed mb-12 max-w-lg">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat 
            sunt nostrud ame.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="border-l border-[#4ade80]/40 pl-6 space-y-3">
              <h3 className="text-lg font-semibold">Optimized Frameworks</h3>
              <p className="text-sm text-white/40 leading-relaxed">
                A custom environment designed especially for developing and facilitating React, Vue, Angular, and other.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-[#4ade80] transition-colors">
                Read More <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
            <div className="border-l border-[#4ade80]/40 pl-6 space-y-3">
              <h3 className="text-lg font-semibold">Integrated with GitHub</h3>
              <p className="text-sm text-white/40 leading-relaxed">
                Import and run GitHub repositories directly. Alternatively, you can commit your source code to a repository.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-[#4ade80] transition-colors">
                Read More <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="bg-[#0a0a0a] border border-white/5 rounded-xl p-8 aspect-square flex flex-col items-center justify-center relative overflow-hidden">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-[0.5px] border-white/5 rounded-full scale-[1.5]"></div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-[0.5px] border-white/5 rounded-full scale-[1.2]"></div>
             
             <div className="relative z-10 flex flex-col gap-4">
                <div className="flex gap-4">
                  <div className="w-20 h-24 bg-[#111] border border-white/10 rounded-lg flex flex-col items-center justify-center gap-2 transform -rotate-12 translate-y-4">
                    <div className="w-8 h-8 rounded bg-orange-500/20 flex items-center justify-center text-orange-500 font-bold">H</div>
                    <span className="text-[10px] uppercase tracking-widest opacity-40">HTML</span>
                  </div>
                  <div className="w-20 h-24 bg-[#111] border border-[#4ade80]/40 rounded-lg flex flex-col items-center justify-center gap-2 z-20 shadow-2xl">
                    <div className="w-8 h-8 rounded bg-[#4ade80]/20 flex items-center justify-center text-[#4ade80] font-bold">R</div>
                    <span className="text-[10px] uppercase tracking-widest opacity-100">React</span>
                  </div>
                  <div className="w-20 h-24 bg-[#111] border border-white/10 rounded-lg flex flex-col items-center justify-center gap-2 transform rotate-12 translate-y-4">
                    <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center text-blue-500 font-bold">C</div>
                    <span className="text-[10px] uppercase tracking-widest opacity-40">C++</span>
                  </div>
                </div>
                
                <div className="bg-[#111] border border-white/10 rounded-lg p-4 font-mono text-[10px] space-y-1 text-white/40 mt-8 max-w-[240px]">
                  <div>&lt;html&gt;</div>
                  <div>&nbsp;&nbsp;&lt;head&gt;</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;Login Page&lt;/title&gt;</div>
                  <div>&nbsp;&nbsp;&lt;/head&gt;</div>
                  <div>&nbsp;&nbsp;&lt;body&gt;</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Hello World!&lt;/h1&gt;</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ManagementSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Concentrate on <Highlight>larger</Highlight> issues.
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            Spend less time on repetitive code patterns and more time on what really matters building great software.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
             <div className="bg-[#0a0a0a] border border-white/5 rounded-xl p-8 overflow-hidden font-mono text-[11px] leading-relaxed relative">
                <div className="flex gap-4">
                  <div className="text-white/10 w-4 text-right">
                    {Array.from({length: 15}).map((_, i) => <div key={i}>{i+1}</div>)}
                  </div>
                  <div className="text-white/60">
                    <div className="text-[#4ade80]">&lt;html&gt;</div>
                    <div className="pl-4 text-[#4ade80]">&lt;head&gt;</div>
                    <div className="pl-8 text-[#4ade80]">&lt;title&gt;<span className="text-white">Login Page</span>&lt;/title&gt;</div>
                    <div className="pl-4 text-[#4ade80]">&lt;/head&gt;</div>
                    <div className="pl-4 text-[#4ade80]">&lt;body&gt;</div>
                    <div className="pl-8 text-[#4ade80]">&lt;h1&gt;<span className="text-white">Hello World</span>&lt;/h1&gt;</div>
                    <div className="pl-8 text-[#4ade80]">&lt;form&gt;</div>
                    <div className="pl-12 text-[#4ade80]">&lt;label <span className="text-white/40">for="username"</span>&gt;<span className="text-white">Username:</span>&lt;/label&gt;</div>
                  </div>
                  <div className="flex-1 bg-white/5 p-4 rounded-lg hidden sm:block border border-white/5 text-[9px] space-y-2">
                    <div className="text-[#4ade80] opacity-60">TextView android:id="@+id/var_view_ui"</div>
                    <div className="text-white/40">android:layout_width="380dp"</div>
                    <div className="text-white/40">android:layout_height="552dp"</div>
                    <div className="text-white/40">android:text="@string/var_view_ui"</div>
                  </div>
                </div>
             </div>
             <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#4ade80]/10 blur-[50px] -z-10"></div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold tracking-tight mb-6">
              Circle provides teams and individuals <br /> 
              with customizable <Highlight>management tools</Highlight> <br />
              for your source code.
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-8">
              Create issues, sections into tasks, track relationships, add custom spaces, and initiate discussions. Visualize large projects with spreadsheets or codeboards, and use the help of code systems to automate everything.
            </p>
            <div className="flex gap-4">
               <button className="flex items-center gap-2 px-6 py-2.5 bg-[#4ade80] text-black text-[11px] font-bold uppercase tracking-widest rounded hover:bg-[#34d399] transition-all">
                <Play className="w-3.5 h-3.5 fill-current" /> Watch a Video
              </button>
              <button className="flex items-center gap-2 px-6 py-2.5 border border-white/20 text-white text-[11px] font-bold uppercase tracking-widest rounded hover:bg-white/5 transition-all">
                Get a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
