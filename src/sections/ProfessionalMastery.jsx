import React from 'react';
import { motion } from 'framer-motion';
import { Award, Factory, Car, Palette, Utensils, CheckCircle2 } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import TiltWidget from '../components/TiltWidget';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  "Industrial & Engineering": Factory,
  "Technical & Automotive": Car,
  "Creative & Drafting": Palette,
  "Service & Hospitality": Utensils,
};

export default function ProfessionalMastery() {
  const { certifications, vocationalExpertise } = portfolioData;

  return (
    <SectionWrapper id="mastery" className="py-24">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
          Professional <span className="text-[#ff2a2a]">Mastery</span>
        </h2>
        <p className="text-zinc-400 max-w-2xl text-lg">
          A testament to my multidisciplinary technical background, backed by national certifications and hands-on industrial mastery.
        </p>
      </div>

      {/* Certifications Showcase - Marquee Style */}
      <div className="mb-24">
        <div className="flex items-center gap-3 mb-10">
          <Award className="w-6 h-6 text-[#ff2a2a]" />
          <h3 className="text-2xl font-bold text-white tracking-tight">Core Certifications</h3>
        </div>
        
        <div className="relative overflow-hidden w-full group">
          {/* Edge Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <div className="flex gap-4 w-fit animate-marquee-l-to-r">
            {/* Duplicate the array 4 times to ensure it covers the screen width even for 3 items */}
            {[...certifications, ...certifications, ...certifications, ...certifications].map((cert, i) => (
              <TiltWidget 
                key={i} 
                className="flex-shrink-0 w-[280px] sm:w-[350px] md:w-[400px]"
              >
                <div
                  className="bg-white/[0.03] border border-white/10 p-6 rounded-2xl group/card hover:border-[#ff2a2a]/50 hover:bg-white/[0.05] hover:shadow-[15px_15px_40px_-10px_rgba(255,42,42,0.4)] transition-all duration-300 relative overflow-hidden h-full"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover/card:opacity-100 group-hover/card:text-[#ff2a2a] transition-all duration-500">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <p className="text-white font-bold text-lg mb-1">{cert}</p>
                  <span className="text-xs font-black text-[#ff2a2a] uppercase tracking-widest bg-[#ff2a2a]/10 px-2 py-0.5 rounded">NCII Certified</span>
                </div>
              </TiltWidget>
            ))}
          </div>
        </div>
      </div>

      {/* Industrial Expertise Showcase - Marquee Style */}
      <div className="relative overflow-hidden w-full group">
        {/* Edge Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 animate-marquee-r-to-l">
          {/* Duplicate the array 3 times for a seamless loop */}
          {[...vocationalExpertise, ...vocationalExpertise, ...vocationalExpertise].map((area, index) => {
            const Icon = iconMap[area.category] || Factory;
            return (
              <div
                key={index}
                className="flex-shrink-0 w-[300px] sm:w-[350px] md:w-[400px] flex flex-col bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-3xl p-8 group/card hover:border-[#ff2a2a]/30 hover:bg-white/[0.04] transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 opacity-20 group-hover/card:opacity-100 group-hover/card:text-[#ff2a2a] transition-all duration-500">
                  <Icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-black text-white mb-6 tracking-tight group-hover/card:text-[#ff2a2a] transition-colors pr-10">
                  {area.category}
                </h3>
                
                <div className="flex flex-col gap-3">
                  {area.skills.map((skill, si) => (
                    <div key={si} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#ff2a2a]/40 mt-2 shrink-0 group-hover/card:bg-[#ff2a2a] transition-colors" />
                      <span className="text-zinc-400 text-sm font-medium group-hover/card:text-zinc-200 transition-colors uppercase tracking-tight">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
