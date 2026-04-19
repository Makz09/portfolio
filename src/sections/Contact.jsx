import React, { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, User, MessageSquare, Send, FileText } from 'lucide-react';
import { FaRunning, FaFutbol, FaPalette, FaMicrophone, FaLinkedin, FaGithub, FaFacebook, FaDiscord, FaArrowUp } from 'react-icons/fa';
import { MdEmojiPeople } from 'react-icons/md';
import { Link as ScrollLink } from 'react-scroll';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error
  const [hoveredHobby, setHoveredHobby] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Real EmailJS Integration
    emailjs.send(
      'service_i3lnz0n', 
      'template_apiv9sf', 
      formData, 
      'EaJ86lv_ewK4maeC4'
    ).then(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }).catch(() => setStatus('error'));
  };

  const hobbies = [
    { icon: FaRunning, label: 'Runner / Marathon' },
    { icon: FaFutbol, label: 'Football Player' },
    { icon: FaPalette, label: 'Artist / Graffiti' },
    { icon: FaMicrophone, label: 'Singer / Choir / Rapper' },
    { icon: MdEmojiPeople, label: 'Dancer / HipHop' },
  ];

  return (
    <SectionWrapper id="contact" className="!pb-0">
      <div className="grid lg:grid-cols-2 gap-16 mb-24">
        
        {/* Left Side: Info */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-white leading-tight tracking-tighter mb-6">Initiate <br/> <span className="text-[#ff2a2a]">Connection</span></h2>
            <p className="text-zinc-400 text-lg mb-12 max-w-md leading-relaxed">
              Available for select high-impact projects and architectural consultations. Reach out to discuss parameters.
            </p>

            <div className="space-y-8 mb-16">
              <a href="mailto:charlesdonor.02@gmail.com" className="flex items-center gap-5 text-white hover:text-primary transition-colors group">
                <Mail className="text-primary w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-lg tracking-wide">charlesdonor.02@gmail.com</span>
              </a>
              <div className="flex items-start gap-5 text-white">
                <MapPin className="text-primary w-6 h-6 shrink-0 mt-1.5" />
                <span className="font-bold text-lg tracking-wide max-w-sm leading-relaxed">Block 12 Lot 9 Wilson Lane, Villa Celina Town Homes, Las Piñas City</span>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-8 flex flex-col gap-5">
            <div className="flex items-center flex-wrap gap-4 text-zinc-500 text-xs font-black tracking-[0.2em] uppercase">
              <span className="text-white">OFF-SCREEN:</span>
              <div className="flex items-center gap-5 ml-2">
                {hobbies.map((hobby, i) => (
                  <hobby.icon 
                    key={i}
                    onMouseEnter={() => setHoveredHobby(hobby.label)}
                    onMouseLeave={() => setHoveredHobby('')}
                    className="w-5 h-5 hover:text-[#ff2a2a] hover:drop-shadow-[0_0_12px_rgba(255,42,42,0.8)] hover:animate-vibrate cursor-pointer transition-all duration-300"
                  />
                ))}
              </div>
            </div>
            
            {/* Hobby Meaning Label - Now Below */}
            <div className="min-h-[2rem] flex items-center">
              <span className={`text-[#ff2a2a] text-2xl font-serif italic transition-all duration-700 ${hoveredHobby ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} drop-shadow-[0_0_10px_rgba(255,42,42,0.5)]`}>
                {hoveredHobby}
              </span>
              {!hoveredHobby && (
                <span className="text-zinc-600 text-sm font-medium italic opacity-60 flex items-center gap-2 animate-pulse">
                  ( Hover over icons to reveal hobbies )
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[1.5rem] shadow-2xl relative overflow-hidden group/form">
          <div className="absolute left-0 top-1/4 w-1 h-24 bg-gradient-to-b from-[#ff2a2a]/0 via-[#ff2a2a] to-[#ff2a2a]/0 opacity-70"></div>
          
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Send a Message</h3>
            <p className="text-zinc-400 text-sm">I'll get back to you within 24 hours.</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-7 relative z-10">
            <div className="flex flex-col gap-3">
              <label htmlFor="name" className="flex items-center gap-2 text-xs font-bold tracking-[0.15em] text-zinc-400 uppercase">
                <User strokeWidth={2.5} className="w-4 h-4 text-[#ff2a2a] drop-shadow-[0_0_8px_rgba(255,42,42,0.8)]" />
                Your Name
              </label>
              <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required
                className="w-full bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#ff2a2a]/60 focus:bg-[#ff2a2a]/5 transition-all placeholder:text-zinc-600" placeholder="John Doe" />
            </div>
            
            <div className="flex flex-col gap-3">
              <label htmlFor="email" className="flex items-center gap-2 text-xs font-bold tracking-[0.15em] text-zinc-400 uppercase">
                <Mail strokeWidth={2.5} className="w-4 h-4 text-[#ff2a2a] drop-shadow-[0_0_8px_rgba(255,42,42,0.8)]" />
                Your Email
              </label>
              <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required
                className="w-full bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#ff2a2a]/60 focus:bg-[#ff2a2a]/5 transition-all placeholder:text-zinc-600" placeholder="john@example.com" />
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="subject" className="flex items-center gap-2 text-xs font-bold tracking-[0.15em] text-zinc-400 uppercase">
                <FileText strokeWidth={2.5} className="w-4 h-4 text-[#ff2a2a] drop-shadow-[0_0_8px_rgba(255,42,42,0.8)]" />
                Subject
              </label>
              <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} required
                className="w-full bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#ff2a2a]/60 focus:bg-[#ff2a2a]/5 transition-all placeholder:text-zinc-600" placeholder="Project Inquiry" />
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="message" className="flex items-center gap-2 text-xs font-bold tracking-[0.15em] text-zinc-400 uppercase">
                <MessageSquare strokeWidth={2.5} className="w-4 h-4 text-[#ff2a2a] drop-shadow-[0_0_8px_rgba(255,42,42,0.8)]" />
                Your Message
              </label>
              <textarea name="message" id="message" rows="4" value={formData.message} onChange={handleChange} required
                className="w-full bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#ff2a2a]/60 focus:bg-[#ff2a2a]/5 transition-all placeholder:text-zinc-600 resize-none" placeholder="Tell me about your project..."></textarea>
            </div>

            <button type="submit" disabled={status === 'sending'} 
              className="mt-6 w-full relative overflow-hidden bg-white/[0.05] backdrop-blur-md border border-white/10 hover:border-[#ff2a2a]/80 text-white rounded-xl py-4 flex items-center justify-center gap-3 font-bold tracking-[0.2em] uppercase text-[13px] transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_10px_30px_-5px_rgba(255,42,42,0.4)] disabled:opacity-50">
              
              {/* Button hover glow internal effect */}
              <div className="absolute inset-0 bg-[#ff2a2a] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
              
              <span className="relative z-10 flex items-center gap-3 group-hover:animate-vibrate">
                {status === 'sending' ? 'TRANSMITTING...' : status === 'success' ? 'TRANSMITTED SUCCESSFULLY' : 'SEND MESSAGE'} 
                {status !== 'sending' && <Send className="w-4 h-4" />}
              </span>
            </button>
          </form>
        </div>

      </div>

      <footer className="border-t border-border pt-16 pb-8 z-10 relative mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 mb-16">
          
          {/* Logo & Description */}
          <div className="flex flex-col gap-4">
            <img src="/cld_logo.png" alt="Charles Donor Logo" className="h-12 md:h-14 w-auto object-contain mb-2 justify-self-start self-start" />
            <p className="text-sm text-zinc-400 leading-relaxed max-w-[280px]">
              Professional Full Stack Developer dedicated to crafting immersive, high-performance digital experiences with cutting-edge technology.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col">
            <h4 className="text-white font-bold tracking-widest text-sm mb-6 uppercase">Navigation</h4>
            <div className="flex flex-col gap-4">
              <ScrollLink to="about" smooth className="cursor-pointer text-zinc-400 hover:text-primary transition-colors text-[13px] font-bold tracking-wide w-fit uppercase">About</ScrollLink>
              <ScrollLink to="expertise" smooth className="cursor-pointer text-zinc-400 hover:text-primary transition-colors text-[13px] font-bold tracking-wide w-fit uppercase">Expertise</ScrollLink>
              <ScrollLink to="mastery" smooth className="cursor-pointer text-zinc-400 hover:text-primary transition-colors text-[13px] font-bold tracking-wide w-fit uppercase">Mastery</ScrollLink>
              <ScrollLink to="experience" smooth className="cursor-pointer text-zinc-400 hover:text-primary transition-colors text-[13px] font-bold tracking-wide w-fit uppercase">Jobs</ScrollLink>
              <ScrollLink to="academic" smooth className="cursor-pointer text-zinc-400 hover:text-primary transition-colors text-[13px] font-bold tracking-wide w-fit uppercase">Academics</ScrollLink>
              <ScrollLink to="skills" smooth className="cursor-pointer text-zinc-400 hover:text-primary transition-colors text-[13px] font-bold tracking-wide w-fit uppercase">Skills</ScrollLink>
              <ScrollLink to="approach" smooth className="cursor-pointer text-zinc-400 hover:text-primary transition-colors text-[13px] font-bold tracking-wide w-fit uppercase">Approach</ScrollLink>
              <ScrollLink to="projects" smooth className="cursor-pointer text-zinc-400 hover:text-primary transition-colors text-[13px] font-bold tracking-wide w-fit uppercase">Projects</ScrollLink>
            </div>
          </div>

          {/* Connect */}
          <div className="flex flex-col">
            <h4 className="text-white font-bold tracking-widest text-sm mb-6 uppercase">Connect</h4>
            <div className="flex flex-col gap-3 mb-6">
              <a href="mailto:charlesdonor.02@gmail.com" className="text-[14px] font-medium text-zinc-400 hover:text-primary transition-colors">charlesdonor.02@gmail.com</a>
              <p className="text-[14px] font-medium text-zinc-400">Las Piñas City, Philippines</p>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/Makz09" target="_blank" rel="noreferrer" className="p-2.5 rounded-lg bg-[#111] border border-zinc-800 hover:border-[#ff2a2a] hover:bg-[#ff2a2a]/10 hover:text-[#ff2a2a] hover:shadow-[0_0_15px_rgba(255,42,42,0.8)] hover:animate-vibrate transition-all duration-300 text-zinc-400">
                <FaGithub className="w-[18px] h-[18px]" />
              </a>
              <a href="https://www.linkedin.com/in/charleslebecodonor/" target="_blank" rel="noreferrer" className="p-2.5 rounded-lg bg-[#111] border border-zinc-800 hover:border-[#ff2a2a] hover:bg-[#ff2a2a]/10 hover:text-[#ff2a2a] hover:shadow-[0_0_15px_rgba(255,42,42,0.8)] hover:animate-vibrate transition-all duration-300 text-zinc-400">
                <FaLinkedin className="w-[18px] h-[18px]" />
              </a>
              <a href="https://www.facebook.com/iamCharlesDonor" target="_blank" rel="noreferrer" className="p-2.5 rounded-lg bg-[#111] border border-zinc-800 hover:border-[#ff2a2a] hover:bg-[#ff2a2a]/10 hover:text-[#ff2a2a] hover:shadow-[0_0_15px_rgba(255,42,42,0.8)] hover:animate-vibrate transition-all duration-300 text-zinc-400">
                <FaFacebook className="w-[18px] h-[18px]" />
              </a>
              <a href="https://discord.com/users/1432362444998578259" target="_blank" rel="noreferrer" className="p-2.5 rounded-lg bg-[#111] border border-zinc-800 hover:border-[#ff2a2a] hover:bg-[#ff2a2a]/10 hover:text-[#ff2a2a] hover:shadow-[0_0_15px_rgba(255,42,42,0.8)] hover:animate-vibrate transition-all duration-300 text-zinc-400">
                <FaDiscord className="w-[18px] h-[18px]" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center pt-8 border-t border-zinc-800 gap-6">
          <p className="text-[#666] text-xs md:text-[13px]">© 2026 Charles Lebeco Donor. All rights reserved.</p>
          <div className="flex items-center justify-between w-full md:w-auto md:gap-8">
            <p className="text-[#666] text-xs md:text-[13px] flex items-center gap-1.5 hidden md:flex">
              Made with <span className="text-[#ff2a2a] animate-pulse">❤️</span> in the Philippines
            </p>
            <ScrollLink to="home" smooth className="flex items-center gap-2 text-zinc-500 hover:text-primary transition-colors cursor-pointer text-xs font-bold tracking-widest uppercase">
              Back to Top <FaArrowUp className="w-3 h-3" />
            </ScrollLink>
          </div>
        </div>
      </footer>
    </SectionWrapper>
  );
}
