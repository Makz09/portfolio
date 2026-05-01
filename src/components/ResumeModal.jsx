import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl h-full max-h-[90vh] bg-zinc-950 border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/[0.02] backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(255,42,42,0.8)]"></div>
                <h3 className="text-white font-bold tracking-widest text-sm uppercase">Resume Preview</h3>
              </div>
              
              <div className="flex items-center gap-2">
                <a 
                  href={`${import.meta.env.BASE_URL}Resume_Charles_Lebeco_Donor.pdf`} 
                  download 
                  className="p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-lg transition-all flex items-center gap-2 text-xs font-bold tracking-wider"
                  title="Download PDF"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline uppercase">Download PDF</span>
                </a>
                <button
                  onClick={onClose}
                  className="p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Resume Image Content */}
            <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-[#0a0a0a] custom-scrollbar">
              <div className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl border border-white/5">
                <img 
                  src={`${import.meta.env.BASE_URL}Resume_Charles_Lebeco_Donor.jpg`} 
                  alt="Charles Lebeco Donor Resume" 
                  className="w-full h-auto object-contain block"
                />
              </div>
            </div>

            {/* Footer / Hint */}
            <div className="px-6 py-3 border-t border-white/5 bg-white/[0.01] text-center">
              <p className="text-[10px] text-zinc-500 font-bold tracking-[0.2em] uppercase">
                Scroll to view full resume • Press ESC to close
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
