
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FullStackSection, ManagementSection } from './components/FeatureSections';
import { SoftwareGrid } from './components/SoftwareGrid';
import { Footer } from './components/Footer';
import { Highlight } from './components/Highlight';

const PageWrapper: React.FC<{ children: React.ReactNode; title: string; subtitle: string }> = ({ children, title, subtitle }) => (
  <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
    <div className="mb-16 text-center">
      <h1 className="text-5xl font-bold tracking-tight mb-6">{title}</h1>
      <p className="text-white/40 max-w-2xl mx-auto">{subtitle}</p>
    </div>
    <div className="glass-card p-12 rounded-2xl">
      {children}
    </div>
  </div>
);

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderContent = () => {
    switch (currentPage) {
      case 'how-it-works':
        return (
          <PageWrapper 
            title="How it <Highlight>works</Highlight>?" 
            subtitle="Understand the underlying architecture and workflow of our developer platform."
          >
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: '01', title: 'Connect repository', desc: 'Sync your GitHub or GitLab projects in seconds with one-click integration.' },
                { step: '02', title: 'Automated Setup', desc: 'Our platform detects your stack and configures the environment automatically.' },
                { step: '03', title: 'Collaborate & Deploy', desc: 'Invite your team and deploy to our high-performance edge network.' }
              ].map(item => (
                <div key={item.step} className="p-8 border border-white/5 rounded-xl bg-white/5">
                  <span className="text-[#4ade80] font-mono text-2xl mb-4 block">{item.step}</span>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </PageWrapper>
        );
      case 'develop':
        return (
          <PageWrapper 
            title="Develop with <Highlight>Confidence</Highlight>" 
            subtitle="Powerful tools designed to make coding a breeze."
          >
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4">Cloud Native IDE</h2>
                  <p className="text-white/40">Access a full-featured VS Code compatible environment directly in your browser with pre-installed dependencies and zero latency.</p>
                </div>
                <div className="flex-1 glass p-4 rounded-lg border border-white/10 h-40 flex items-center justify-center italic text-white/20">
                  IDE Mockup Placeholder
                </div>
              </div>
            </div>
          </PageWrapper>
        );
      case 'features':
        return (
          <PageWrapper 
            title="Platform <Highlight>Features</Highlight>" 
            subtitle="Everything you need to build, scale, and manage modern applications."
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {['Edge Computing', 'Auto-scaling', 'CI/CD Pipelines', 'Secrets Management', 'Analytics', 'Collaboration'].map(feature => (
                <div key={feature} className="p-6 glass-card rounded-xl text-center">
                  <h3 className="font-bold text-[#4ade80] mb-2">{feature}</h3>
                  <p className="text-xs text-white/30">Enterprise-grade {feature.toLowerCase()} built into the core platform.</p>
                </div>
              ))}
            </div>
          </PageWrapper>
        );
      case 'docs':
        return (
          <PageWrapper 
            title="Documentation" 
            subtitle="Comprehensive guides and API references for the Circle platform."
          >
            <div className="flex gap-12">
              <div className="w-48 hidden md:block space-y-4">
                {['Getting Started', 'Core Concepts', 'API Reference', 'Integrations'].map(cat => (
                  <div key={cat} className="text-[10px] uppercase tracking-widest text-white/30 hover:text-[#4ade80] cursor-pointer">{cat}</div>
                ))}
              </div>
              <div className="flex-1 space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">Quick Start</h2>
                  <p className="text-white/40 mb-4">To get started with Circle, install our CLI tool:</p>
                  <div className="bg-black/50 p-4 rounded font-mono text-[#4ade80] text-sm">
                    $ npm install -g circle-platform
                  </div>
                </section>
              </div>
            </div>
          </PageWrapper>
        );
      case 'blog':
        return (
          <PageWrapper 
            title="Developer <Highlight>Blog</Highlight>" 
            subtitle="Latest news, tutorials, and engineering insights."
          >
            <div className="grid gap-8">
              {[
                { date: 'MAY 15, 2025', title: 'Why we switched to Edge Computing', author: 'Alex Rivera' },
                { date: 'MAY 10, 2025', title: '10 Tips for Optimizing React Performance', author: 'Sarah Chen' },
                { date: 'MAY 02, 2025', title: 'Introducing Circle Enterprise', author: 'Product Team' }
              ].map(post => (
                <div key={post.title} className="p-8 border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer group">
                  <span className="text-[10px] text-[#4ade80] tracking-widest">{post.date}</span>
                  <h3 className="text-2xl font-bold mt-2 group-hover:translate-x-2 transition-transform">{post.title}</h3>
                  <p className="text-sm text-white/40 mt-2">By {post.author}</p>
                </div>
              ))}
            </div>
          </PageWrapper>
        );
      case 'about':
        return (
          <PageWrapper 
            title="About <Highlight>Circle</Highlight>" 
            subtitle="Building the future of developer experience."
          >
            <div className="max-w-2xl mx-auto text-center space-y-8">
              <p className="text-lg leading-relaxed text-white/60">
                Circle was founded in 2022 with a simple mission: to remove the friction between writing code and seeing it live. We believe developers should spend 100% of their time on innovation, not infrastructure.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <div className="text-4xl font-bold text-[#4ade80]">50K+</div>
                  <div className="text-[10px] uppercase text-white/30 tracking-widest mt-2">Developers</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#4ade80]">99.9%</div>
                  <div className="text-[10px] uppercase text-white/30 tracking-widest mt-2">Uptime</div>
                </div>
              </div>
            </div>
          </PageWrapper>
        );
      default:
        return (
          <>
            <Hero />
            <div className="space-y-12">
              <FullStackSection />
              <ManagementSection />
              <SoftwareGrid />
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      
      <main className="transition-all duration-500">
        {renderContent()}
      </main>

      <Footer />
      
      {/* Visual background noise/texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
};

export default App;
