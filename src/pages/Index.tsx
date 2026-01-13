import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LuMenu, LuZap, LuBarChart2, LuArrowRight } from 'react-icons/lu';
import { Reveal } from '../components/motion/Reveal';
import { SignatureEffect } from '../components/effects/SignatureEffect';
import { SignatureInteraction } from '../components/effects/SignatureInteraction';

// Global Styles for fonts and scrollbar
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Space+Grotesk:wght@300;500;700&display=swap');
    
    :root {
      --bg-dark: #050507;
      --glass-border: rgba(255, 255, 255, 0.1);
      --glass-bg: rgba(20, 20, 25, 0.6);
      --accent-cyan: #00f2ff;
    }
    
    body {
      font-family: 'Space Grotesk', sans-serif;
      background-color: var(--bg-dark);
      color: #ffffff;
      overflow-x: hidden;
    }

    .font-mono {
      font-family: 'JetBrains Mono', monospace;
    }

    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-track {
      background: #0a0a0a;
    }
    ::-webkit-scrollbar-thumb {
      background: #333;
      border-radius: 3px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: var(--accent-cyan);
    }

    .glass-panel {
      background: var(--glass-bg);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid var(--glass-border);
    }
  `}</style>
);

const Index = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('intro');

  const sections = [
    { id: 'intro', label: 'Overview' },
    { id: 'platform', label: 'Platform' },
    { id: 'pricing', label: 'Scale & Access' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#050507] text-white selection:bg-cyan-500 selection:text-black">
      <GlobalStyles />

      {/* SIDE RAIL */}
      <aside className="lg:w-[28%] w-full lg:h-screen lg:fixed lg:top-0 lg:left-0 z-50 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 bg-[#050507] p-6 lg:p-10">
        {/* Brand */}
        <div className="flex items-center justify-between lg:block">
          <div className="mb-8 group cursor-pointer">
            <h1 className="text-3xl font-bold tracking-tighter uppercase group-hover:text-[#00f2ff] transition-colors duration-300">Nexus_</h1>
            <div className="h-1 w-8 bg-[#00f2ff] mt-1 group-hover:w-full transition-all duration-500 ease-out"></div>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileOpen(!mobileOpen)} 
            className="lg:hidden text-white focus:outline-none"
          >
            <LuMenu className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation (Desktop) */}
        <nav className={`lg:flex flex-col space-y-6 ${mobileOpen ? 'flex mt-8' : 'hidden'}`}>
          {sections.map((section) => (
            <a 
              key={section.id}
              href={`#${section.id}`} 
              className={`flex items-center group space-x-4 transition-opacity duration-300 ${activeSection === section.id ? 'opacity-100 text-white' : 'opacity-60 hover:opacity-100'}`}
            >
              <div 
                className={`w-2 h-2 rounded-full bg-white transition-all duration-300 ${activeSection === section.id ? 'bg-[#00f2ff] shadow-[0_0_10px_#00f2ff] scale-125' : ''}`}
              ></div>
              <span className="text-sm font-mono tracking-widest uppercase">{section.label}</span>
            </a>
          ))}
        </nav>

        {/* Live Status Module */}
        <div className="hidden lg:block">
          <div className="glass-panel p-5 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-mono text-gray-400">SYSTEM STATUS</span>
              <div className="flex items-center space-x-2">
                <SignatureEffect effect="status-ping" />
                <span className="text-xs text-green-500 font-bold">ONLINE</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Latency</span>
                <span className="font-mono">12ms</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Ingest</span>
                <span className="font-mono">4.2TB/s</span>
              </div>
            </div>
            <button className="mt-4 w-full py-2 bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-[#00f2ff] hover:scale-105 transition-all duration-300">
              Get Access
            </button>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT STREAM */}
      <main className="lg:w-[72%] w-full lg:ml-auto relative bg-[#050507]">
        
        {/* Decorative Background Grid */}
        <SignatureEffect effect="grid-background" />

        {/* Section 1: Introduction */}
        <section id="intro" className="relative z-10 min-h-screen flex items-end p-6 lg:p-20 border-b border-white/5">
          <div className="max-w-4xl">
            <Reveal>
              <span className="font-mono text-[#00f2ff] text-sm tracking-widest mb-4 block">/// INITIALIZING VIEW</span>
            </Reveal>
            
            <Reveal delay={0.1}>
              <h2 className="text-5xl lg:text-8xl font-bold leading-none mb-8">
                CLARITY <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white">IN TOTAL</span> <br />
                CHAOS.
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-xl text-gray-400 max-w-lg mb-12 leading-relaxed">
                Stop guessing. Nexus ingests messy B2B data streams and crystallizes them into actionable, predictive intelligence instantly.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex items-center space-x-6">
                <a href="#" className="border-b border-white pb-1 hover:text-[#00f2ff] hover:border-[#00f2ff] transition-all">Explore Demo</a>
                <span className="text-gray-600">|</span>
                <a href="#" className="font-mono text-sm text-gray-500 hover:text-white transition-colors flex items-center gap-2">
                  Read Documentation <LuArrowRight />
                </a>
              </div>
            </Reveal>
          </div>
          
          {/* Abstract Hero Image */}
          <div className="absolute top-20 right-0 w-1/2 h-1/2 lg:w-96 lg:h-96 opacity-40 mix-blend-screen pointer-events-none">
             <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop" 
              alt="Cyberpunk Data" 
              className="object-cover w-full h-full rounded-full blur-3xl animate-pulse" 
            />
          </div>
        </section>

        {/* Section 2: Features */}
        <section id="platform" className="relative z-10 min-h-screen p-6 lg:p-20">
          <Reveal>
            <div className="flex flex-col lg:flex-row justify-between items-end mb-16">
              <div>
                <span className="font-mono text-xs text-gray-500 mb-2 block">01 / CAPABILITIES</span>
                <h3 className="text-4xl font-bold">The Core Engine</h3>
              </div>
              <p className="font-mono text-sm text-gray-400 mt-4 lg:mt-0 text-right max-w-xs">
                Designed for speed. <br />Built for scale.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Feature Card 1 */}
            <Reveal>
              <SignatureInteraction type="hover-lift" className="glass-panel p-8 rounded-xl h-full">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6">
                  <LuZap className="w-6 h-6 text-[#00f2ff]" />
                </div>
                <h4 className="text-xl font-bold mb-3">Real-time Ingestion</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Connect to Snowflake, Postgres, or REST APIs. We normalize disparate schemas in milliseconds, not months.
                </p>
                <div className="mt-6 h-32 w-full bg-black/50 rounded overflow-hidden relative">
                  <div className="absolute inset-0 opacity-50" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=500&auto=format&fit=crop')", backgroundSize: 'cover' }}></div>
                  <div className="absolute bottom-2 left-2 font-mono text-[10px] text-green-400">SYNC: ACTIVE</div>
                </div>
              </SignatureInteraction>
            </Reveal>

            {/* Feature Card 2 */}
            <Reveal delay={0.1}>
              <SignatureInteraction type="hover-lift" className="glass-panel p-8 rounded-xl h-full">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6">
                  <LuBarChart2 className="w-6 h-6 text-purple-400" />
                </div>
                <h4 className="text-xl font-bold mb-3">Predictive Modeling</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Our neural engine identifies churn risk and upsell opportunities before your sales team even logs in.
                </p>
                <div className="mt-6 flex items-end justify-between space-x-1 h-32">
                   <div className="w-1/5 bg-gray-800 h-1/3 rounded-t hover:bg-cyan-500 transition-colors"></div>
                   <div className="w-1/5 bg-gray-800 h-2/3 rounded-t hover:bg-cyan-500 transition-colors"></div>
                   <div className="w-1/5 bg-gray-800 h-1/2 rounded-t hover:bg-cyan-500 transition-colors"></div>
                   <div className="w-1/5 bg-gray-800 h-full rounded-t hover:bg-cyan-500 transition-colors"></div>
                   <div className="w-1/5 bg-gray-800 h-3/4 rounded-t hover:bg-cyan-500 transition-colors"></div>
                </div>
              </SignatureInteraction>
            </Reveal>

            {/* Feature Card 3 (Full Width) */}
            <div className="md:col-span-2">
              <Reveal delay={0.2}>
                <SignatureInteraction type="hover-lift" className="glass-panel p-8 rounded-xl">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-3">Visual Logic Builder</h4>
                      <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        No SQL? No problem. Construct complex queries using our node-based visual interface. Drag, drop, deploy.
                      </p>
                      <a href="#" className="text-xs font-mono border border-gray-600 px-4 py-2 rounded uppercase hover:bg-white hover:text-black transition-colors">See Workflow</a>
                    </div>
                    <div className="w-full md:w-1/2 h-48 rounded overflow-hidden relative border border-gray-800">
                      <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" alt="Data Dashboard" className="object-cover w-full h-full opacity-60 hover:opacity-100 transition-opacity duration-500 hover:scale-105" />
                    </div>
                  </div>
                </SignatureInteraction>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Marquee Break */}
        <div className="py-12 bg-white/5 border-y border-white/5 overflow-hidden">
          <SignatureInteraction type="marquee" speed={20}>
            <div className="flex space-x-16 pr-16">
              <span className="text-2xl font-mono text-gray-500">SOC2 COMPLIANT</span>
              <span className="text-2xl font-mono text-gray-500">GDPR READY</span>
              <span className="text-2xl font-mono text-gray-500">END-TO-END ENCRYPTION</span>
              <span className="text-2xl font-mono text-gray-500">99.99% UPTIME</span>
            </div>
          </SignatureInteraction>
        </div>

        {/* Section 3: Data / Editorial */}
        <section id="pricing" className="relative z-10 min-h-screen p-6 lg:p-20 flex flex-col justify-center">
          <Reveal>
            <span className="font-mono text-xs text-[#00f2ff] mb-6 block">02 / SCALE</span>
            <h3 className="text-5xl lg:text-7xl font-bold mb-10">Designed for the<br />Enterprise.</h3>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <div className="border-l border-cyan-400/30 pl-6">
                <div className="text-4xl font-mono font-bold mb-2">500TB</div>
                <div className="text-sm text-gray-400">Daily ingestion capacity per node cluster.</div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="border-l border-cyan-400/30 pl-6">
                <div className="text-4xl font-mono font-bold mb-2">12ms</div>
                <div className="text-sm text-gray-400">Average query latency for cold storage data.</div>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="border-l border-cyan-400/30 pl-6">
                <div className="text-4xl font-mono font-bold mb-2">400+</div>
                <div className="text-sm text-gray-400">Native integrations with leading SaaS tools.</div>
              </div>
            </Reveal>
          </div>

          {/* CTA Box */}
          <Reveal className="mt-20">
            <div className="p-10 bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl relative overflow-hidden">
              <SignatureEffect effect="glass-glow" />
              <div className="relative z-10">
                <h4 className="text-3xl font-bold mb-4">Ready to deploy?</h4>
                <p className="text-gray-400 max-w-md mb-8">Start your 14-day trial on our dedicated clusters. No credit card required for sandbox access.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-[#00f2ff] transition-colors">
                    Start Free Trial
                  </button>
                  <button className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-wider hover:bg-white/10 transition-colors">
                    Talk to Sales
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Footer */}
        <footer className="p-6 lg:p-20 border-t border-white/10 text-gray-500 font-mono text-xs">
          <div className="flex justify-between items-center">
            <div>
              &copy; 2024 NEXUS ANALYTICS INC.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">PRIVACY</a>
              <a href="#" className="hover:text-white transition-colors">TERMS</a>
              <a href="#" className="hover:text-white transition-colors">STATUS</a>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
};

export default Index;
