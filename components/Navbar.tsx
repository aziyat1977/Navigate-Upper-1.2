import React, { useState } from 'react';
import { Mode, Language } from '../types';
import { LayoutDashboard, GraduationCap, PenTool, Gamepad2, Layers, BookOpen, Menu, X, Globe, Settings, BrainCircuit, Sun, Moon, Mic, Joystick } from 'lucide-react';

interface NavbarProps {
  currentMode: Mode;
  setMode: (m: Mode) => void;
  lang: Language;
  setLang: (l: Language) => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentMode, setMode, lang, setLang, theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const modes = [
    { id: Mode.DASHBOARD, label: 'DASHBOARD', icon: LayoutDashboard },
    { id: Mode.ARCADE, label: 'GRAMMAR ARCADE', icon: Joystick },
    { id: Mode.VISUAL, label: 'TIMELINE VISUALIZER', icon: Layers },
    { id: Mode.KAHOOT, label: 'KAHOOT ARENA', icon: Gamepad2 },
    { id: Mode.MEMORY, label: 'MEMORY CORE', icon: BrainCircuit },
    { id: Mode.SPEAKING, label: 'SPEAKING MODULE', icon: Mic },
    { id: Mode.VOCABULARY, label: 'LEXICON DATABASE', icon: BookOpen },
    { id: Mode.STUDENT, label: 'TRAINING TERMINAL', icon: PenTool },
    { id: Mode.TEACHER, label: 'INSTRUCTOR OVERRIDE', icon: GraduationCap },
  ];

  const handleModeSelect = (m: Mode) => {
    setMode(m);
    setIsOpen(false);
  };

  return (
    <>
      {/* Top Bar (Collapsed State) */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-4 flex items-center justify-between bg-white/70 dark:bg-dark-bg/40 backdrop-blur-md border-b border-gray-200 dark:border-white/5 h-20 transition-colors duration-300">
        <div className="flex items-center gap-6">
          <button 
            onClick={() => setIsOpen(true)}
            className="p-3 -ml-2 hover:bg-neon-blue/20 rounded border border-transparent hover:border-neon-blue/50 text-neon-blue transition-all duration-300 active:scale-95 group"
            aria-label="Open Menu"
          >
            <Menu size={32} strokeWidth={1.5} className="group-hover:rotate-90 transition-transform" />
          </button>
          
          <div 
            className="flex items-center gap-4 cursor-pointer group" 
            onClick={() => setMode(Mode.DASHBOARD)}
          >
            <div className="relative w-10 h-10 transition-transform group-hover:scale-110 duration-300">
                <div className="absolute inset-0 bg-neon-blue rounded animate-ping opacity-20"></div>
                <div className="relative w-full h-full bg-white dark:bg-black border border-neon-blue flex items-center justify-center transition-colors">
                    <div className="w-4 h-4 bg-neon-blue shadow-[0_0_10px_#00F3FF]"></div>
                </div>
            </div>
            <h1 className="font-display text-3xl font-black tracking-tighter group-hover:opacity-80 transition-opacity italic text-gray-900 dark:text-white">
              NEURAL<span className="text-neon-pink">NAV</span>
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button 
                onClick={toggleTheme}
                className="p-2 rounded-full border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 text-gray-600 dark:text-yellow-300 transition-all duration-300 hover:scale-110 active:rotate-180"
            >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} className="text-indigo-600" />}
            </button>

            {/* Current Mode Indicator (Desktop Only) */}
            <div className="hidden md:flex items-center gap-4 px-6 py-2 rounded border border-gray-200 dark:border-white/10 bg-white/40 dark:bg-black/40 backdrop-blur">
            <div className="flex flex-col items-end">
                <span className="font-mono text-[10px] text-neon-blue tracking-widest uppercase mb-[-2px]">SYSTEM STATUS</span>
                <span className="font-display font-bold text-gray-800 dark:text-white text-lg tracking-wider">{currentMode}</span>
            </div>
            <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse shadow-[0_0_10px_#00FF94]"></div>
            </div>
        </div>
      </nav>

      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 dark:bg-black/90 backdrop-blur-sm z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Slide-out Menu */}
      <div className={`fixed top-0 left-0 h-full w-[360px] bg-white dark:bg-[#020005] border-r border-gray-200 dark:border-neon-blue/30 z-[60] transform transition-transform duration-500 cubic-bezier(0.2, 0.8, 0.2, 1) shadow-2xl dark:shadow-[0_0_50px_rgba(0,243,255,0.1)] ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full relative overflow-hidden dark:bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]">
          
          {/* Menu Header */}
          <div className="p-8 flex justify-between items-center border-b border-gray-100 dark:border-white/10 bg-gradient-to-r from-neon-blue/5 to-transparent">
            <h2 className="text-sm font-tech text-neon-blue uppercase tracking-[0.2em] flex items-center gap-2">
              <Settings size={14} className="animate-spin-slow" /> Control Panel
            </h2>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 rounded transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto py-8 px-6 space-y-3">
            {modes.map((m) => {
              const Icon = m.icon;
              const active = currentMode === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => handleModeSelect(m.id)}
                  className={`w-full group flex items-center gap-4 px-6 py-5 rounded border transition-all duration-300 relative overflow-hidden ${
                    active 
                      ? 'bg-neon-blue/10 border-neon-blue text-neon-blue shadow-lg dark:shadow-[0_0_20px_rgba(0,243,255,0.2)]' 
                      : 'border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-white/5 text-gray-500 dark:text-gray-400 hover:border-gray-300 dark:hover:border-white/20 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {/* Hover Glitch Effect Element (Dark only) */}
                  <div className="hidden dark:block absolute inset-0 bg-white/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 ease-in-out"></div>
                  
                  <Icon size={24} className={`transition-all duration-300 ${active ? "text-neon-blue" : "group-hover:text-neon-blue group-hover:scale-110"}`} />
                  <span className="font-display font-bold tracking-wider text-sm">{m.label}</span>
                </button>
              );
            })}
          </div>

          {/* Language Selector Footer */}
          <div className="p-8 border-t border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-black/40 backdrop-blur-lg">
            <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-4">
              <Globe size={12} /> Language Protocol
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[Language.EN, Language.RU, Language.UZ].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`relative px-2 py-3 rounded text-sm font-bold font-display transition-all duration-300 border ${
                    lang === l 
                      ? 'bg-neon-pink/20 border-neon-pink text-neon-pink shadow-md dark:shadow-[0_0_15px_rgba(247,6,207,0.3)]' 
                      : 'border-gray-200 dark:border-white/10 bg-transparent text-gray-500 hover:border-neon-pink/50 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            <div className="mt-6 flex justify-between items-end">
                <div className="text-[10px] text-gray-600 font-mono">
                SYS.VER.200.X <br/> NEURAL CORE ONLINE
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-neon-blue to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;