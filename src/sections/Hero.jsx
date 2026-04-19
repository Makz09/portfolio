import React, { useState, useEffect, useRef } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { FaGithub, FaLinkedin, FaFacebook, FaDiscord } from 'react-icons/fa';
import { Link } from 'react-scroll';
import profilePic from '../assets/my_picture.jpg';
import TiltWidget from '../components/TiltWidget';



const WordSlider = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState('translate-x-[40px] opacity-0');

  useEffect(() => {
    // 1. Snap to left invisibly
    setFade('-translate-x-[40px] opacity-0 transition-none');

    // 2. Slide gracefully into the center (from left)
    const t1 = setTimeout(() => {
      setFade('translate-x-0 opacity-100 transition-all duration-[1000ms] ease-out');
    }, 50);

    // 3. Hold frame, then slide out gracefully to the right
    const t2 = setTimeout(() => {
      setFade('translate-x-[40px] opacity-0 transition-all duration-[1000ms] ease-in');
    }, 2800);

    // 4. Reset sequence with next word
    const t3 = setTimeout(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3800);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [index, words]);

  return (
    <span className={`absolute left-0 top-0 whitespace-nowrap ${fade}`}>
      {words[index]}
    </span>
  );
};

export default function Hero() {
  const words = ['Charles', 'Lebeco', 'Donor'];

  return (
    <SectionWrapper id="home" className="!pt-32 md:!pt-40">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-8 relative z-10 w-full">
        {/* Left Side: Introduction */}
        <div className="flex-1 w-full lg:max-w-[50%] relative z-10 text-center lg:text-left">
          <div className="inline-flex items-center justify-center px-6 py-2 rounded-full border border-red-900/80 bg-red-950/20 mb-8 backdrop-blur-md">
            <span className="text-xs font-bold tracking-[0.2em] text-red-500 drop-shadow-[0_0_8px_rgba(229,9,20,0.5)] uppercase ml-1">
              WELCOME TO MY WORLD!
            </span>
          </div>
          
          <div className="mb-8 flex justify-center lg:justify-start" style={{ perspective: '1000px' }}>
            <img 
              src={profilePic} 
              alt="Charles Lebeco Donor" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-zinc-900 shadow-[0_0_20px_rgba(229,9,20,0.3)] transition-all duration-700 ease-in-out hover:shadow-[0_0_30px_rgba(229,9,20,0.5)] hover:[transform:rotateY(180deg)_scale(1.05)]"
            />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-tighter leading-tight mb-8">
            Hi! My Name Is<br />
            <span className="text-[#ff2a2a] block mt-1 relative h-[1.2em] w-full overflow-hidden">
              <span className="flex justify-center lg:justify-start">
                <WordSlider words={words} />
              </span>
            </span>
          </h1>

          <div className="flex justify-center lg:justify-start gap-4 mb-12">
            <a href="https://www.linkedin.com/in/charleslebecodonor/" className="p-3 rounded-full bg-surface border border-border hover:border-[#ff2a2a] hover:bg-[#ff2a2a]/10 hover:text-[#ff2a2a] hover:shadow-[0_0_15px_rgba(255,42,42,0.8)] hover:animate-vibrate transition-all duration-300 text-zinc-400">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/Makz09" className="p-3 rounded-full bg-surface border border-border hover:border-[#ff2a2a] hover:bg-[#ff2a2a]/10 hover:text-[#ff2a2a] hover:shadow-[0_0_15px_rgba(255,42,42,0.8)] hover:animate-vibrate transition-all duration-300 text-zinc-400">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/iamCharlesDonor" className="p-3 rounded-full bg-surface border border-border hover:border-[#ff2a2a] hover:bg-[#ff2a2a]/10 hover:text-[#ff2a2a] hover:shadow-[0_0_15px_rgba(255,42,42,0.8)] hover:animate-vibrate transition-all duration-300 text-zinc-400">
              <FaFacebook className="w-5 h-5" />
            </a>
            <a href="https://discord.com/users/1432362444998578259" className="p-3 rounded-full bg-surface border border-border hover:border-[#ff2a2a] hover:bg-[#ff2a2a]/10 hover:text-[#ff2a2a] hover:shadow-[0_0_15px_rgba(255,42,42,0.8)] hover:animate-vibrate transition-all duration-300 text-zinc-400 flex items-center justify-center font-bold font-serif text-lg leading-none">
              <FaDiscord className="w-5 h-5" />
            </a>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
            <Link to="projects" smooth className="group bg-[#ff2a2a] hover:bg-[#ff1a1a] text-white px-8 py-3.5 rounded-full font-bold cursor-pointer transition-all duration-300 flex items-center gap-2 shadow-[0_0_15px_rgba(255,42,42,0.3)] hover:shadow-[0_0_35px_rgba(255,42,42,0.6)] hover:-translate-y-1">
              VIEW PROJECTS <span aria-hidden="true" className="rotate-[-45deg] inline-block group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-transform duration-300">&rarr;</span>
            </Link>
            <a href="/Resume_Charles_Lebeco_Donor.pdf" download className="group bg-[#0d0d0f] border border-zinc-800 hover:border-[#ff2a2a]/80 text-white hover:text-[#ff2a2a] px-8 py-3.5 rounded-full font-bold cursor-pointer transition-all duration-300 flex items-center gap-3 hover:shadow-[0_0_25px_rgba(255,42,42,0.3)] hover:-translate-y-1">
              <svg className="group-hover:animate-vibrate group-hover:drop-shadow-[0_0_8px_rgba(255,42,42,0.8)] transition-all duration-300" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              DOWNLOAD RESUME
            </a>
          </div>
        </div>

        {/* Right Side: Code Snippet Widget */}
        <div className="flex-1 w-full max-w-[500px] lg:max-w-none mx-auto lg:ml-auto">
          <TiltWidget>
            <div className="w-full bg-[#0d0d0d] rounded-xl border border-zinc-800 shadow-[0_0_50px_rgba(229,9,20,0.1)] overflow-hidden backdrop-blur-md transition-shadow duration-500 hover:shadow-[0_0_80px_rgba(229,9,20,0.3)]">
            {/* Window Header */}
            <div className="flex items-center px-4 py-3 border-b border-zinc-800 bg-[#161616]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="ml-auto flex items-center text-xs text-zinc-500 font-mono gap-2">
                <span className="w-2 h-2 rounded-full bg-primary mb-0.5"></span>
                Portfolio.js
              </div>
            </div>
            {/* Code Body */}
            <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto w-full">
              <div className="flex items-start">
                {/* Line numbers */}
                <div className="flex flex-col text-zinc-700 select-none pr-4 text-right border-r border-zinc-800/50 shrink-0">
                  <span>01</span>
                  <span>02</span>
                  <span>03</span>
                  <span>04</span>
                  <span>05</span>
                  <span>06</span>
                  <span>07</span>
                  <span>08</span>
                </div>
                {/* Code content */}
                <div className="pl-4 flex flex-col w-full min-w-max">
                  <div className="whitespace-pre"><span className="text-primary/90">const</span> <span className="text-white">developer</span> = {'{'}</div>
                  <div className="whitespace-pre">  <span className="text-zinc-400">name:</span> <span className="text-red-400">'Charles Lebeco Donor'</span>,</div>
                  <div className="whitespace-pre">  <span className="text-zinc-400">focus:</span> <span className="text-red-400">'Fullstack Mastery'</span>,</div>
                  <div className="whitespace-pre">  <span className="text-zinc-400">skills:</span> [<span className="text-red-400">'MySQL'</span>, <span className="text-red-400">'Laravel'</span>, <span className="text-red-400">'ReactJS'</span>],</div>
                  <div className="whitespace-pre">  <span className="text-zinc-400">passionate:</span> <span className="text-primary font-bold">true</span>,</div>
                  <div className="whitespace-pre">  <span className="text-zinc-400">motto:</span> <span className="text-red-400">"Build with Purpose"</span></div>
                  <div className="whitespace-pre">{'};'}</div>
                  <div className="whitespace-pre mt-4"><span className="text-primary/90">developer</span>.<span className="text-white">showcase</span>();</div>
                </div>
              </div>
            </div>
          </div>
          </TiltWidget>
        </div>

      </div>
      {/* Enhanced Background visual flair */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] max-w-[1500px] xl:max-w-[2500px] h-[600px] md:h-[800px] xl:h-[1200px] bg-primary/10 rounded-[100%] blur-[120px] md:blur-[200px] -z-10 pointer-events-none mix-blend-screen"></div>
    </SectionWrapper>
  );
}
