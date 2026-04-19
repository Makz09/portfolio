import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { GraduationCap, Code2, Package, Settings, PenTool, School, MapPin, Briefcase, Zap, Droplets } from 'lucide-react';
import TiltWidget from './TiltWidget';

const getTimelineIcon = (title) => {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes('faculty') || lowerTitle.includes('professor')) return GraduationCap;
  if (lowerTitle.includes('developer') || lowerTitle.includes('architect') || lowerTitle.includes('programmer')) return Code2;
  if (lowerTitle.includes('asset') || lowerTitle.includes('warehouse')) return Package;
  if (lowerTitle.includes('degreasing')) return Droplets;
  if (lowerTitle.includes('autocad')) return PenTool;
  if (lowerTitle.includes('wire-cut')) return Zap;
  if (lowerTitle.includes('education') || lowerTitle.includes('secondary') || lowerTitle.includes('tertiary')) return School;
  return Briefcase;
};

export default function TimelineItem({ data, align = "left", isLast = false, isEducation = false, eduNumber }) {
  const Icon = getTimelineIcon(data.title);

  return (
    <>
      {/* Desktop View */}
      <div className={`hidden md:flex w-full ${align === 'right' ? 'flex-row-reverse' : 'flex-row'} items-center relative mb-16 last:mb-0 group`}>
        {/* Date side */}
        <div className={`w-1/2 flex px-6 ${align === 'right' ? 'justify-start' : 'justify-end'}`}>
          <span className={`inline-flex items-center gap-2 text-primary font-bold ${isEducation ? 'text-4xl translate-y-2' : 'text-lg'} ${align === 'right' ? 'text-left' : 'text-right flex-row-reverse'}`}>
            <FaCalendarAlt className={`${isEducation ? 'text-2xl mt-1' : 'text-[1.1rem]'} opacity-90`} />
            <span className="inline-block">
              {isEducation ? (
                <>
                  <span className="block text-2xl font-normal opacity-80 text-white text-right">{data.dates.split(' ')[0] + ' ' + data.dates.split(' ')[1]}</span>
                  {data.dates.split(' ')[2] + ' ' + data.dates.split(' ')[3] + ' ' + data.dates.split(' ')[4]}
                </>
              ) : <span className="text-white">{data.dates}</span>}
            </span>
          </span>
        </div>

        {/* Center line and node */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-[-4rem] flex flex-col items-center">
          <div className="w-4 h-4 rounded-full bg-primary border-2 border-background z-10 shadow-[0_0_15px_rgba(229,9,20,0.8)] mt-6"></div>
          {!isLast && (
            <div className="relative w-px h-full bg-gradient-to-b from-primary/50 to-primary/0 mt-2 flex justify-center">
              <div 
                className="absolute w-[3px] h-16 bg-gradient-to-b from-transparent via-[#ff2a2a] to-transparent rounded-full animate-blood-drop drop-shadow-[0_0_8px_rgba(255,42,42,1)]" 
                style={{ animationDelay: `${(data.title.length % 5) * 0.4}s` }}
              ></div>
            </div>
          )}
        </div>

        {/* Card side */}
        <div className={`w-1/2 flex px-6 ${align === 'right' ? 'justify-end' : 'justify-start'}`}>
          <TiltWidget>
            <div className={`bg-white/[0.02] backdrop-blur-xl border border-white/10 p-8 rounded-2xl w-full group-hover:border-[#ff2a2a]/50 group-hover:bg-[#ff2a2a]/[0.02] transition-all duration-300 shadow-[0_0_20px_rgba(255,42,42,0.05)] group-hover:shadow-[0_0_30px_rgba(255,42,42,0.2)] h-full relative overflow-hidden ${isEducation ? 'border-b-4 border-b-[#ff2a2a] shadow-[0_8px_20px_-10px_rgba(255,42,42,0.6)]' : ''}`}>
              <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 group-hover:text-[#ff2a2a] transition-all duration-500">
                {isEducation ? (
                  <span className="text-4xl font-black">{eduNumber}</span>
                ) : (
                  <Icon className="w-8 h-8" />
                )}
              </div>
              
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#ff2a2a] group-hover:drop-shadow-[0_0_8px_rgba(255,42,42,0.6)] transition-all duration-300 pr-12">{data.title}</h4>
              <p className="text-sm text-zinc-400 font-medium">{data.company || data.institution}</p>
              
              {data.details && (
                <div className={`grid ${isEducation ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100'} transition-all duration-700 ease-in-out group-hover:mt-4`}>
                  <div className="overflow-hidden">
                    <ul className="list-disc pl-5 space-y-2 text-zinc-300 text-[13px] md:text-sm">
                      {data.details.map((detail, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {detail.type === 'bullet' ? (
                            detail.text
                          ) : (
                            <>
                              <span className="font-semibold text-white/90">{detail.text}</span>
                              <ul className="list-[circle] pl-5 mt-1 space-y-1">
                                {detail.items.map((sub, sIdx) => (
                                  <li key={sIdx} className="text-zinc-400">{sub}</li>
                                ))}
                              </ul>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Interaction Label */}
              {!isEducation && (
                <div className="absolute bottom-4 right-6 opacity-60 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                  <span className="text-[10px] text-zinc-500 italic font-medium tracking-wider uppercase">Hover for more details</span>
                </div>
              )}
            </div>
          </TiltWidget>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden relative pl-8 mb-12 last:mb-0">
        <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(229,9,20,0.8)] z-10"></div>
        {!isLast && (
          <div className="absolute left-1.5 top-4 w-0.5 h-full bg-gradient-to-b from-primary/50 to-primary/0 flex justify-center">
            <div 
              className="absolute w-[3px] h-12 bg-gradient-to-b from-transparent via-[#ff2a2a] to-transparent rounded-full animate-blood-drop drop-shadow-[0_0_8px_rgba(255,42,42,1)]" 
              style={{ animationDelay: `${(data.title.length % 5) * 0.4}s` }}
            ></div>
          </div>
        )}
        
        <span className="text-primary font-bold mb-3 text-[13px] flex items-center gap-2">
          <FaCalendarAlt className="opacity-90" />
          {isEducation ? (
            <>
              <span className="text-zinc-300 font-medium">{data.dates.split(' ')[0] + ' ' + data.dates.split(' ')[1]}</span>
              {' ' + data.dates.split(' ')[2] + ' ' + data.dates.split(' ')[3] + ' ' + data.dates.split(' ')[4]}
            </>
          ) : <span className="text-zinc-300 font-medium">{data.dates}</span>}
        </span>
        <TiltWidget>
          <div className={`bg-white/[0.02] backdrop-blur-xl border border-white/10 p-6 rounded-xl hover:border-[#ff2a2a]/50 hover:bg-[#ff2a2a]/[0.02] transition-all shadow-[0_0_20px_rgba(255,42,42,0.05)] hover:shadow-[0_0_30px_rgba(255,42,42,0.2)] group hover:scale-[1.02] duration-300 relative overflow-hidden ${isEducation ? 'border-b-4 border-b-[#ff2a2a] shadow-[0_8px_15px_-8px_rgba(255,42,42,0.5)]' : ''}`}>
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 group-hover:text-[#ff2a2a] transition-all duration-500">
               {isEducation ? (
                 <span className="text-3xl font-black">{eduNumber}</span>
               ) : (
                 <Icon className="w-6 h-6" />
               )}
            </div>
            
            <h4 className="text-lg font-bold text-white mb-1.5 group-hover:text-[#ff2a2a] transition-colors pr-10">{data.title}</h4>
            <p className="text-sm text-zinc-400">{data.company || data.institution}</p>
            
            {data.details && (
                <div className={`grid ${isEducation ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100'} transition-all duration-700 ease-in-out group-hover:mt-4`}>
                  <div className="overflow-hidden">
                    <ul className="list-disc pl-5 space-y-2 text-zinc-300 text-xs sm:text-[13px]">
                      {data.details.map((detail, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {detail.type === 'bullet' ? (
                            detail.text
                          ) : (
                            <>
                              <span className="font-semibold text-white/90">{detail.text}</span>
                              <ul className="list-[circle] pl-5 mt-1 space-y-1">
                                {detail.items.map((sub, sIdx) => (
                                  <li key={sIdx} className="text-zinc-400">{sub}</li>
                                ))}
                              </ul>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

            {/* Interaction Label - Mobile */}
            {!isEducation && (
              <div className="absolute bottom-3 right-5 opacity-40 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                <span className="text-[9px] text-zinc-500 italic font-medium tracking-wider uppercase">Hover for more details</span>
              </div>
            )}
          </div>
        </TiltWidget>
      </div>
    </>
  );
}
