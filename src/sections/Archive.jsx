import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { FaGithub, FaCode } from 'react-icons/fa';
import ProjectSlideshow from '../components/ProjectSlideshow';

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
              className="group flex flex-col"
            >
              <div className="bg-[#0f0f0f] border border-white/5 rounded-3xl overflow-hidden flex flex-col h-full hover:border-[#ff2a2a]/30 transition-all duration-500 group-hover:translate-y-[-8px]">
                {/* Top Image Area */}
                <div className="relative aspect-video overflow-hidden">
                  {project.images && project.images.length > 0 ? (
                    <ProjectSlideshow images={project.images} opacity={1} />
                  ) : (
                    <div className="w-full h-full bg-zinc-900 flex items-center justify-center text-4xl font-black text-zinc-800">
                      {project.title.substring(0,2).toUpperCase()}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent opacity-60 z-10" />
                </div>

                {/* Content Area */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#ff2a2a] transition-colors line-clamp-1">{project.title}</h3>
                  <p className="text-zinc-400 text-[15px] leading-relaxed mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.slice(0, 4).map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-bold text-zinc-500 uppercase border border-zinc-800 px-3 py-1.5 rounded-lg">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="text-[10px] font-bold text-[#ff2a2a] px-2 py-1.5">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-auto flex gap-3">
                    <a 
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl py-3 px-2 flex items-center justify-center gap-2 text-[10px] font-black text-white transition-all active:scale-95"
                    >
                      <FaCode className="w-3.5 h-3.5" />
                      SOURCE CODE
                    </a>
                    {project.liveUrl && project.liveUrl !== '#' && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-[#ff2a2a]/10 hover:bg-[#ff2a2a]/20 border border-[#ff2a2a]/20 rounded-xl py-3 px-2 flex items-center justify-center gap-2 text-[10px] font-black text-[#ff2a2a] transition-all active:scale-95"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        VIEW LIVE
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
