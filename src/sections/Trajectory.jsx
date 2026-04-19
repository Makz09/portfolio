import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import TimelineItem from '../components/TimelineItem';
import { portfolioData } from '../data/portfolioData';

export default function Trajectory() {
  const { experience, education } = portfolioData;

  return (
    <>
      <SectionWrapper id="experience">
        <div className="mb-20 text-center md:text-right">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">Professional <span className="text-[#ff2a2a]">Trajectory</span></h2>
          <p className="text-zinc-400 text-lg">A timeline of execution and strategic roles.</p>
        </div>
        
        <div className="max-w-6xl mx-auto py-10 relative">
          {experience.map((item, idx) => (
            <TimelineItem 
              key={idx} 
              data={item} 
              align={idx % 2 === 0 ? "left" : "right"} 
              isLast={idx === experience.length - 1} 
            />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="academic">
        <div className="mb-20 max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">Academic <span className="text-[#ff2a2a]">Journey</span></h2>
          <p className="text-zinc-400 text-lg leading-relaxed">The structural foundation of knowledge. A progression from foundational concepts to specialized technical execution.</p>
        </div>
        
        <div className="max-w-6xl mx-auto py-10 relative">
          {education.map((item, idx) => (
            <TimelineItem 
              key={idx} 
              data={item} 
              align="left" 
              isLast={idx === education.length - 1} 
              isEducation={true}
              eduNumber={education.length - idx}
            />
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
