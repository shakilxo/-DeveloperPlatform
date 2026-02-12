
import React from 'react';

export const CodeMockup: React.FC = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto mt-20 group">
      {/* Background Glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4ade80]/20 to-transparent blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
      
      {/* Main Window with Liquid Glass Effect */}
      <div className="relative glass-card rounded-lg overflow-hidden shadow-2xl">
        <div className="flex items-center px-4 py-3 bg-white/5 border-b border-white/5">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/30"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#4ade80]/30"></div>
          </div>
          <div className="mx-auto text-[10px] text-white/40 tracking-widest uppercase font-medium">Main.tsx</div>
        </div>
        
        <div className="flex">
          {/* Sidebar */}
          <div className="w-12 border-r border-white/5 bg-black/20 flex flex-col items-center py-4 gap-6">
            <div className="w-5 h-5 rounded bg-white/5"></div>
            <div className="w-5 h-5 rounded bg-[#4ade80]/20"></div>
            <div className="w-5 h-5 rounded bg-white/5"></div>
            <div className="w-5 h-5 rounded bg-white/5"></div>
          </div>
          
          {/* Code Area */}
          <div className="flex-1 p-6 font-mono text-[13px] leading-relaxed">
            <div className="flex gap-4">
              <div className="text-white/20 select-none text-right w-6">
                {Array.from({length: 12}).map((_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>
              <div className="text-white/80">
                <div className="text-[#4ade80]">&lt;html&gt;</div>
                <div className="pl-4 text-[#4ade80]">&lt;head&gt;</div>
                <div className="pl-8 text-[#4ade80]">&lt;title&gt;<span className="text-white">Login Page</span>&lt;/title&gt;</div>
                <div className="pl-4 text-[#4ade80]">&lt;/head&gt;</div>
                <div className="pl-4 text-[#4ade80]">&lt;body&gt;</div>
                <div className="pl-8 text-[#4ade80]">&lt;h1&gt;<span className="text-white">Hello World</span>&lt;/h1&gt;</div>
                <div className="pl-8 text-[#4ade80]">&lt;form&gt;</div>
                <div className="pl-12 text-[#4ade80]">&lt;label <span className="text-white/60">for="username"</span>&gt;<span className="text-white">Username:</span>&lt;/label&gt;</div>
                <div className="pl-12 text-[#4ade80]">&lt;input <span className="text-white/60">type="text" id="username" name="username"</span>&gt;&lt;br&gt;&lt;br&gt;</div>
                <div className="pl-12 text-[#4ade80]">&lt;label <span className="text-white/60">for="password"</span>&gt;<span className="text-white">Password:</span>&lt;/label&gt;</div>
                <div className="pl-12 text-[#4ade80]">&lt;input <span className="text-white/60">type="password" id="password" name="password"</span>&gt;&lt;br&gt;&lt;br&gt;</div>
                <div className="pl-8 text-[#4ade80]">&lt;/form&gt;</div>
              </div>
            </div>
          </div>
          
          {/* Properties Panel */}
          <div className="w-48 bg-white/5 border-l border-white/5 p-4 hidden lg:block">
            <div className="text-[10px] text-white/30 uppercase tracking-widest mb-4">Properties</div>
            <div className="space-y-3 font-mono text-[11px]">
              <div className="text-white/60">android:id="@+id/var_view_ui"</div>
              <div className="text-white/60">android:layout_width="380dp"</div>
              <div className="text-white/60">android:layout_height="552dp"</div>
              <div className="text-white/60">android:text="@string/var_view_ui"</div>
              <div className="text-[#4ade80]">android:textAppearance="@style/var_view_ui"</div>
              <div className="text-white/60">android:lineSpacingExtra="3sp"</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
