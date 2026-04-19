import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { ArrowLeft } from 'lucide-react';

export default function Archive({ onBack }) {
  const { projects } = portfolioData;

  // Scroll to top when archive is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-20 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.button 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="flex items-center gap-2 text-zinc-400 hover:text-primary transition-colors mb-12 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold tracking-widest uppercase">Back to Portfolio</span>
        </motion.button>

        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight"
          >
            Project <span className="text-[#ff2a2a]">Archive</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg max-w-2xl"
          >
            A comprehensive list of developed systems, applications, and technical experiments across multiple domains.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + (idx * 0.05) }}
              className="group"
            >
              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full flex flex-col hover:border-[#ff2a2a]/50 hover:bg-white/[0.04] transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(255,42,42,0.15)]">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center font-black text-primary group-hover:bg-[#ff2a2a]/10 group-hover:border-[#ff2a2a]/50 transition-all duration-300">
                    {project.title.substring(0,2).toUpperCase()}
                  </div>
                  <div className="flex flex-wrap gap-2 justify-end max-w-[60%]">
                    {project.tags.slice(0, 2).map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] uppercase tracking-tighter font-bold text-zinc-500 border border-zinc-800 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 2 && <span className="text-[10px] font-bold text-primary">+{project.tags.length - 2}</span>}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#ff2a2a] transition-colors">{project.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[9px] font-bold text-zinc-500 uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
