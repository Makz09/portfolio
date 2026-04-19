import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { about } = portfolioData;

  return (
    <SectionWrapper id="about">
      <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-14 shadow-2xl relative overflow-hidden group">
        <div className="absolute bottom-0 left-1/2 w-[40rem] h-[40rem] bg-[#ff2a2a]/0 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 translate-y-1/2 group-hover:bg-[#ff2a2a]/15 transition-all duration-700 z-0"></div>
        <div className="grid md:grid-cols-12 gap-12 relative z-10">
          
          <div className="md:col-span-5">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-2">{about.title}</h2>
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-6 leading-snug">
              {about.subtitle}
            </h3>
            <div className="w-12 h-1 bg-primary mb-10"></div>
            
            <div className="flex flex-col gap-3">
              {about.skills.map((skill, idx) => (
                <div key={idx} className="bg-white/[0.03] backdrop-blur-md border border-white/10 text-[11px] md:text-xs text-zinc-400 font-bold px-5 py-3 rounded-full w-max max-w-full overflow-hidden text-ellipsis whitespace-nowrap tracking-wide hover:scale-[1.02] hover:translate-x-3 hover:border-[#ff2a2a]/70 hover:bg-[#ff2a2a]/20 hover:text-white hover:shadow-[0_5px_15px_rgba(255,42,42,0.4)] transition-all duration-300 ease-out cursor-default">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-7 space-y-6 text-zinc-400 text-[15px] leading-relaxed">
            {about.description.map((paragraph, idx) => (
              <p key={idx} className="drop-cap">{paragraph}</p>
            ))}
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}
