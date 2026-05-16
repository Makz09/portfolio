import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { portfolioData } from '../data/portfolioData';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ProjectSlideshow from '../components/ProjectSlideshow';

export default function SelectedWorks({ onViewArchive }) {
  const { projects } = portfolioData;

  return (
    <SectionWrapper id="projects">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Selected <span className="text-[#ff2a2a]">Works</span></h2>
          <p className="text-zinc-400 text-lg">
            A curation of robust digital platforms engineered for scale and precise execution.
          </p>
        </div>
        <button 
          onClick={onViewArchive}
          className="text-sm font-bold tracking-widest text-white hover:text-primary transition-colors flex items-center gap-2 mb-2 uppercase"
        >
          VIEW ARCHIVE <span>&rarr;</span>
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.slice(0, 2).map((project, idx) => (
          <div key={idx} className="group">
            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-4 mb-6 overflow-hidden relative aspect-[16/10] flex flex-col justify-end group-hover:border-[#ff2a2a]/50 hover:bg-white/[0.04] transition-all duration-500 shadow-xl group-hover:shadow-[0_0_50px_rgba(255,42,42,0.15)]">
              
              <ProjectSlideshow images={project.images} />
              
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10"></div>
              
              {/* Repository Link Overlay */}
              <div className="absolute top-6 right-6 z-30 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <a 
                  href={project.repoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-[#ff2a2a] hover:border-[#ff2a2a] transition-all duration-300 shadow-lg"
                  title="View Repository"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub className="w-6 h-6" />
                </a>
              </div>
              
              <div className="relative z-20 flex flex-wrap gap-2 px-4 pb-4">
                {project.tags.slice(0, 4).map((tag, tIdx) => (
                  <span key={tIdx} className="bg-white/[0.05] backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-wider text-white/80 px-3 py-1 rounded-full font-bold group-hover:border-[#ff2a2a]/40 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex justify-between items-start gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#ff2a2a] transition-colors">{project.title}</h3>
                <p className="text-zinc-400 text-[15px] leading-relaxed max-w-md">{project.description}</p>
              </div>
              <a 
                href={project.liveUrl && project.liveUrl !== '#' ? project.liveUrl : project.repoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-2 text-zinc-500 hover:text-white transition-colors"
                title={project.liveUrl && project.liveUrl !== '#' ? "View Live" : "View Repository"}
              >
                <FaExternalLinkAlt className="w-5 h-5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
