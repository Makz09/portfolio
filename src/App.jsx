import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import TechnicalArsenal from './sections/TechnicalArsenal';
import ProfessionalMastery from './sections/ProfessionalMastery';
import Trajectory from './sections/Trajectory';
import ProgrammingSkills from './sections/ProgrammingSkills';
import Methodology from './sections/Methodology';
import SelectedWorks from './sections/SelectedWorks';
import Contact from './sections/Contact';
import Archive from './sections/Archive';
import CustomCursor from './components/CustomCursor';

function App() {
  const [showArchive, setShowArchive] = useState(false);

  return (
    <div className="relative min-h-screen text-zinc-300 selection:bg-primary/30 bg-[radial-gradient(ellipse_150%_100%_at_50%_-10%,_var(--tw-gradient-stops))] xl:bg-[radial-gradient(ellipse_200%_100%_at_50%_-10%,_var(--tw-gradient-stops))] from-[#3a0a0a] via-background via-50% xl:via-70% to-background bg-fixed">
      <CustomCursor />
      <Navbar onHomeClick={() => setShowArchive(false)} />
      
      <main>
        <AnimatePresence mode="wait">
          {!showArchive ? (
            <motion.div
              key="portfolio"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Hero />
              <About />
              <TechnicalArsenal />
              <ProfessionalMastery />
              <Trajectory />
              <ProgrammingSkills />
              <Methodology />
              <SelectedWorks onViewArchive={() => setShowArchive(true)} />
              <Contact />
            </motion.div>
          ) : (
            <motion.div
              key="archive"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Archive onBack={() => setShowArchive(false)} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
