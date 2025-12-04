import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import VisualMode from './components/VisualMode';
import KahootMode from './components/KahootMode';
import StudentMode from './components/StudentMode';
import TeacherMode from './components/TeacherMode';
import VocabMode from './components/VocabMode';
import MemoryMode from './components/MemoryMode';
import SpeakingMode from './components/SpeakingMode';
import { Mode, Language } from './types';
import { Layers, Gamepad2, BrainCircuit, Mic, ChevronLeft, ChevronRight } from 'lucide-react';

// Define the logical order of modules for navigation
const MODE_ORDER = [
  Mode.VISUAL,
  Mode.KAHOOT,
  Mode.MEMORY,
  Mode.SPEAKING,
  Mode.VOCABULARY,
  Mode.STUDENT,
  Mode.TEACHER
];

// Cinematic Dashboard - Defined before usage
const Dashboard = ({ setMode, lang }: { setMode: (m: Mode) => void, lang: Language }) => (
  <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 relative overflow-hidden">
    
    {/* Decorative Elements */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-blue rounded-full blur-[150px] opacity-10 pointer-events-none animate-pulse-fast"></div>
    
    <div className="relative z-10 mb-16">
      <div className="inline-block border border-neon-blue/30 px-4 py-1 rounded-full bg-neon-blue/5 backdrop-blur mb-6">
        <span className="text-neon-blue font-mono text-xs tracking-[0.3em] uppercase animate-pulse">Neural System Online</span>
      </div>
      <h1 className="text-7xl md:text-9xl font-display font-black tracking-tighter mb-6 text-gray-900 dark:text-white leading-[0.9] transition-colors duration-500">
        UNIT <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-purple-500 to-neon-purple text-glow">1.2</span>
      </h1>
      <h2 className="text-xl md:text-3xl font-tech text-gray-500 dark:text-gray-400 tracking-[0.5em] uppercase border-t border-b border-gray-300 dark:border-white/10 py-4 transition-colors duration-500">
        Written Communication
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl px-4">
      <DashboardCard 
        title="VISUALIZER" 
        subtitle="GRAMMAR ENGINE" 
        icon={<Layers size={40} className="text-neon-blue mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />}
        color="hover:border-neon-blue hover:shadow-[0_0_30px_rgba(0,243,255,0.2)]" 
        onClick={() => setMode(Mode.VISUAL)} 
      />
      <DashboardCard 
        title="ARENA" 
        subtitle="KAHOOT PROTOCOL" 
        icon={<Gamepad2 size={40} className="text-neon-purple mb-6 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300" />}
        color="hover:border-neon-purple hover:shadow-[0_0_30px_rgba(188,19,254,0.2)]" 
        onClick={() => setMode(Mode.KAHOOT)} 
      />
      <DashboardCard 
        title="MEMORY" 
        subtitle="NEURAL CORE" 
        icon={<BrainCircuit size={40} className="text-neon-green mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />}
        color="hover:border-neon-green hover:shadow-[0_0_30px_rgba(0,255,148,0.2)]" 
        onClick={() => setMode(Mode.MEMORY)} 
      />
       <DashboardCard 
        title="SPEAKING" 
        subtitle="VOICE MODULE" 
        icon={<Mic size={40} className="text-neon-pink mb-6 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300" />}
        color="hover:border-neon-pink hover:shadow-[0_0_30px_rgba(255,0,85,0.2)]" 
        onClick={() => setMode(Mode.SPEAKING)} 
      />
    </div>

    <p className="mt-16 max-w-xl text-gray-400 dark:text-gray-600 font-mono text-xs uppercase tracking-widest transition-colors">
        System v2.05 // Top-Level Security Clearance Required
    </p>
  </div>
);

const DashboardCard = ({ title, subtitle, icon, color, onClick }: any) => (
  <button 
    onClick={onClick}
    className={`group relative h-[300px] glass-panel p-8 rounded-xl dark:rounded-none border border-white/5 flex flex-col items-center justify-center transition-all duration-500 hover:-translate-y-2 hover:scale-105 active:scale-95 ${color}`}
  >
    <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl dark:rounded-none"></div>
    <div className="relative z-10">
        {icon}
        <h3 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-2 transition-colors">{title}</h3>
        <p className="font-mono text-xs text-gray-500 uppercase tracking-widest group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{subtitle}</p>
    </div>
    
    {/* Tech Corners - Dark Mode Only */}
    <div className="hidden dark:block absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30 group-hover:w-full group-hover:h-full transition-all duration-700 opacity-50"></div>
    <div className="hidden dark:block absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30 group-hover:w-full group-hover:h-full transition-all duration-700 opacity-50"></div>
  </button>
);

const App: React.FC = () => {
  const [mode, setMode] = useState<Mode>(Mode.DASHBOARD);
  const [lang, setLang] = useState<Language>(Language.EN);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Apply theme to html element
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const renderContent = () => {
    switch (mode) {
      case Mode.VISUAL:
        return <VisualMode lang={lang} />;
      case Mode.KAHOOT:
        return <KahootMode lang={lang} />;
      case Mode.MEMORY:
        return <MemoryMode lang={lang} />;
      case Mode.SPEAKING:
        return <SpeakingMode lang={lang} />;
      case Mode.STUDENT:
        return <StudentMode lang={lang} />;
      case Mode.TEACHER:
        return <TeacherMode />;
      case Mode.VOCABULARY:
        return <VocabMode lang={lang} />;
      default:
        return <Dashboard setMode={setMode} lang={lang} />;
    }
  };

  return (
    <div className="min-h-screen font-sans text-gray-900 dark:text-white selection:bg-neon-pink selection:text-white pb-20 transition-colors duration-500">
      <Navbar currentMode={mode} setMode={setMode} lang={lang} setLang={setLang} theme={theme} toggleTheme={toggleTheme} />
      <div className="pt-24 animate-fadeIn">
        {renderContent()}
      </div>

      {/* Global Module Navigation Buttons (Visible on all pages except Dashboard) */}
      {mode !== Mode.DASHBOARD && (
        <>
            <button
                onClick={() => {
                    const idx = MODE_ORDER.indexOf(mode);
                    if (idx === 0) setMode(Mode.DASHBOARD);
                    else if (idx > 0) setMode(MODE_ORDER[idx - 1]);
                }}
                className="fixed left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 rounded-full bg-white/80 dark:bg-black/40 border border-gray-200 dark:border-white/10 text-gray-400 hover:text-neon-blue hover:border-neon-blue hover:scale-110 transition-all shadow-lg flex items-center justify-center group backdrop-blur"
                title="Previous Module"
            >
                <ChevronLeft size={24} />
                <span className="absolute left-full ml-4 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-mono">
                    {MODE_ORDER.indexOf(mode) === 0 ? "DASHBOARD" : "PREV MODULE"}
                </span>
            </button>

            <button
                onClick={() => {
                    const idx = MODE_ORDER.indexOf(mode);
                    if (idx < MODE_ORDER.length - 1) setMode(MODE_ORDER[idx + 1]);
                }}
                disabled={MODE_ORDER.indexOf(mode) === MODE_ORDER.length - 1}
                className={`fixed right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 rounded-full bg-white/80 dark:bg-black/40 border border-gray-200 dark:border-white/10 text-gray-400 hover:text-neon-blue hover:border-neon-blue hover:scale-110 transition-all shadow-lg flex items-center justify-center group backdrop-blur ${MODE_ORDER.indexOf(mode) === MODE_ORDER.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                title="Next Module"
            >
                <ChevronRight size={24} />
                <span className="absolute right-full mr-4 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-mono">
                    NEXT MODULE
                </span>
            </button>
        </>
      )}
    </div>
  );
};

export default App;