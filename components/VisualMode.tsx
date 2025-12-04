import React, { useState, useEffect } from 'react';
import { TIMELINE_RULES } from '../constants';
import { Language } from '../types';
import { Layers, Zap, Play, Clock, Activity, Anchor, ArrowLeft, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface Props {
  lang: Language;
}

const VisualMode: React.FC<Props> = ({ lang }) => {
  const [activeRuleId, setActiveRuleId] = useState<string | null>(null);
  const [animKey, setAnimKey] = useState(0);

  // Trigger animation reset when rule changes
  useEffect(() => {
    setAnimKey(prev => prev + 1);
  }, [activeRuleId]);

  const handleRuleSelect = (id: string) => {
    setActiveRuleId(id);
  };

  const handleBack = () => {
    setActiveRuleId(null);
  };

  const handleNext = () => {
    const currentIndex = TIMELINE_RULES.findIndex(r => r.id === activeRuleId);
    const nextIndex = (currentIndex + 1) % TIMELINE_RULES.length;
    setActiveRuleId(TIMELINE_RULES[nextIndex].id);
  };

  const handlePrev = () => {
    const currentIndex = TIMELINE_RULES.findIndex(r => r.id === activeRuleId);
    const prevIndex = (currentIndex - 1 + TIMELINE_RULES.length) % TIMELINE_RULES.length;
    setActiveRuleId(TIMELINE_RULES[prevIndex].id);
  };

  const currentRule = TIMELINE_RULES.find(r => r.id === activeRuleId);

  // Helper to determine the visual type
  const getCurrentVisualType = () => {
    if (!currentRule) return 'SIMPLE';
    return currentRule.type;
  };

  // --- MENU VIEW ---
  if (!activeRuleId) {
    return (
      <div className="max-w-7xl mx-auto p-4 md:p-8 animate-fadeIn">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-display font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-white to-neon-pink animate-glow-text">
              CHRONO<span className="text-gray-900 dark:text-stroke-white dark:text-transparent">VISUALIZER</span>
          </h2>
          <p className="font-mono text-gray-500 uppercase tracking-widest text-sm max-w-2xl mx-auto">
            Select a temporal protocol to initialize the holographic timeline engine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {TIMELINE_RULES.map((rule, idx) => (
            <button
              key={rule.id}
              onClick={() => handleRuleSelect(rule.id)}
              className={`group relative h-64 glass-panel p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(0,0,0,0.1)] overflow-hidden text-left flex flex-col justify-between interactive-hover ${
                rule.type === 'SIMPLE' 
                  ? 'border-neon-blue/20 hover:border-neon-blue dark:hover:shadow-[0_0_40px_rgba(0,243,255,0.15)]' 
                  : 'border-neon-pink/20 hover:border-neon-pink dark:hover:shadow-[0_0_40px_rgba(255,0,85,0.15)]'
              }`}
            >
              <div className={`absolute top-0 right-0 p-32 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${
                 rule.type === 'SIMPLE' ? 'bg-neon-blue' : 'bg-neon-pink'
              }`}></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                    <span className={`font-mono text-xs font-bold px-3 py-1 rounded-full ${
                        rule.type === 'SIMPLE' ? 'bg-neon-blue/10 text-neon-blue' : 'bg-neon-pink/10 text-neon-pink'
                    }`}>
                        PROTOCOL 0{idx + 1}
                    </span>
                    {rule.type === 'SIMPLE' ? <Zap className="text-neon-blue" /> : <Activity className="text-neon-pink" />}
                </div>
                <h3 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-2 group-hover:scale-105 transition-transform origin-left">
                    {rule.label.split(":")[1] || rule.label}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-mono line-clamp-2">
                    {rule.description}
                </p>
              </div>

              <div className="relative z-10 flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
                 Initialize <Play size={10} fill="currentColor" />
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // --- DETAIL VIEW ---
  return (
    <div className="h-[calc(100vh-100px)] flex flex-col animate-fadeIn">
      
      {/* Navigation Header */}
      <div className="px-4 md:px-8 py-4 flex items-center justify-between bg-white/50 dark:bg-black/20 backdrop-blur border-b border-gray-200 dark:border-white/5">
        <button 
            onClick={handleBack}
            className="flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-all font-mono uppercase tracking-widest text-sm group hover:-translate-x-1"
        >
            <ArrowLeft size={18} />
            Back to Grid
        </button>

        <div className="flex items-center gap-4">
             <button 
                onClick={handlePrev}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-all hover:scale-110 active:scale-95"
             >
                <ChevronLeft size={24} />
             </button>
             <div className="text-center">
                 <div className="text-[10px] text-gray-400 font-mono uppercase tracking-widest">Active Protocol</div>
                 <div className="font-display font-bold text-lg text-gray-900 dark:text-white">{currentRule?.label}</div>
             </div>
             <button 
                onClick={handleNext}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-all hover:scale-110 active:scale-95"
             >
                <ChevronRight size={24} />
             </button>
        </div>
      </div>

      {/* Main Stage */}
      <div className="flex-1 p-4 md:p-8 flex flex-col justify-center max-w-[1800px] mx-auto w-full">
        
        {/* Visualization Container */}
        <div className="flex-1 glass-panel rounded-2xl border border-white/10 relative overflow-hidden flex flex-col shadow-2xl transition-all hover:border-white/20">
            
            {/* SVG Area - Takes maximum space */}
            <div className="flex-1 relative bg-gray-50 dark:bg-[#050508] overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 cyber-grid opacity-20" style={{ transform: 'none', animation: 'none', backgroundSize: '60px 60px' }}></div>
                
                {/* Scaled SVG */}
                <svg width="100%" height="100%" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid meet" className="w-full h-full max-h-[70vh]">
                     {/* Definitions */}
                    <defs>
                        <linearGradient id="gradSimple" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="rgba(0, 243, 255, 0)" />
                            <stop offset="100%" stopColor="#00F3FF" />
                        </linearGradient>
                        <linearGradient id="gradContinuous" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="rgba(255, 0, 85, 0.2)" />
                            <stop offset="50%" stopColor="#FF0055" />
                            <stop offset="100%" stopColor="rgba(255, 0, 85, 0.2)" />
                        </linearGradient>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                            <feMerge>
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5"
                            markerWidth="6" markerHeight="6"
                            orient="auto-start-reverse">
                            <path d="M 0 0 L 10 5 L 0 10 z" fill="#666" />
                        </marker>
                    </defs>

                    {/* Timeline Axis */}
                    <line x1="800" y1="50" x2="800" y2="450" stroke="currentColor" strokeWidth="2" className="text-gray-300 dark:text-gray-700" strokeDasharray="8,8" />
                    <text x="800" y="480" textAnchor="middle" className="fill-gray-400 dark:fill-gray-600 font-mono text-sm tracking-[0.5em] uppercase">NOW</text>
                    
                    <text x="100" y="480" textAnchor="middle" className="fill-gray-400 dark:fill-gray-600 font-mono text-sm tracking-[0.5em] uppercase">PAST</text>
                    <line x1="100" y1="450" x2="800" y2="450" stroke="currentColor" strokeWidth="2" className="text-gray-300 dark:text-gray-700" markerEnd="url(#arrow)" />

                    {/* ANIMATION GROUP */}
                    <g key={animKey}>
                        {/* PPS Animations */}
                        {getCurrentVisualType() === 'SIMPLE' && activeRuleId !== 'rule_c' && (
                            <g>
                                <path 
                                    id="simplePath"
                                    d={activeRuleId === 'rule_a' ? "M 150 250 L 800 250" : "M 150 250 L 760 250"} 
                                    stroke="url(#gradSimple)" 
                                    strokeWidth="8" 
                                    fill="none" 
                                    strokeDasharray="650"
                                    strokeDashoffset="650"
                                >
                                    <animate attributeName="stroke-dashoffset" from="650" to="0" dur="1.5s" fill="freeze" calcMode="spline" keySplines="0.4 0 0.2 1" />
                                </path>
                                <circle r="6" fill="#fff">
                                    <animateMotion dur="1.5s" fill="freeze" calcMode="spline" keySplines="0.4 0 0.2 1">
                                        <mpath href="#simplePath" />
                                    </animateMotion>
                                    <animate attributeName="opacity" values="1;0" dur="0.5s" begin="1.5s" fill="freeze" />
                                </circle>
                                <circle cx={activeRuleId === 'rule_a' ? "800" : "760"} cy="250" r="0" fill="#00F3FF" filter="url(#glow)">
                                    <animate attributeName="r" from="0" to="16" dur="0.3s" begin="1.4s" fill="freeze" />
                                    <animate attributeName="r" values="16;20;16" dur="2s" begin="1.7s" repeatCount="indefinite" />
                                    <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" begin="1.7s" repeatCount="indefinite" />
                                </circle>
                                {activeRuleId !== 'rule_a' && (
                                    <line x1="760" y1="250" x2="800" y2="250" stroke="#00F3FF" strokeWidth="4" strokeDasharray="6 4" opacity="0">
                                        <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="1.5s" fill="freeze" />
                                    </line>
                                )}
                                <text x="475" y="200" textAnchor="middle" fill="#00F3FF" opacity="0" className="font-display font-bold text-3xl filter drop-shadow-lg">
                                    {activeRuleId === 'rule_a' ? 'STARTED PAST → CONTINUES NOW' : 'ACTION COMPLETED → RESULT'}
                                    <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="1s" fill="freeze" />
                                    <animate attributeName="y" from="200" to="180" dur="0.5s" begin="1s" fill="freeze" />
                                </text>
                                {activeRuleId === 'rule_a' && (
                                    <g opacity="0">
                                        <text x="150" y="300" fill="#fff" className="font-mono text-sm">SINCE 2010</text>
                                        <line x1="150" y1="270" x2="150" y2="230" stroke="white" strokeWidth="3" />
                                        <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="0.5s" fill="freeze" />
                                    </g>
                                )}
                            </g>
                        )}

                        {/* Stative Animations */}
                        {activeRuleId === 'rule_c' && (
                            <g>
                                <rect x="150" y="210" width="0" height="80" fill="url(#gradSimple)" opacity="0.5" rx="8">
                                    <animate attributeName="width" from="0" to="650" dur="1s" fill="freeze" calcMode="spline" keySplines="0.4 0 0.2 1" />
                                </rect>
                                <rect x="150" y="210" width="650" height="80" stroke="#00F3FF" strokeWidth="3" fill="none" rx="8" opacity="0">
                                    <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="0.8s" fill="freeze" />
                                </rect>
                                <text x="475" y="260" textAnchor="middle" fill="#fff" opacity="0" className="font-mono font-bold tracking-[0.5em] text-xl">
                                    UNCHANGING STATE
                                    <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="1s" fill="freeze" />
                                </text>
                            </g>
                        )}

                        {/* PPC Animations */}
                        {getCurrentVisualType() === 'CONTINUOUS' && (
                             <g>
                                <path 
                                    id="wavePathLarge"
                                    d="M 100 250 Q 275 150 450 250 T 800 250" 
                                    stroke="none" 
                                    fill="none"
                                />
                                <path 
                                    d="M 100 250 Q 275 150 450 250 T 800 250" 
                                    stroke="url(#gradContinuous)" 
                                    strokeWidth="10" 
                                    fill="none" 
                                    filter="url(#glow)"
                                    strokeDasharray="30 15"
                                    opacity="0"
                                >
                                    <animate attributeName="opacity" from="0" to="1" dur="0.5s" fill="freeze" />
                                    <animate attributeName="d" 
                                        values="M 100 250 Q 275 150 450 250 T 800 250;
                                                M 100 250 Q 275 350 450 250 T 800 250;
                                                M 100 250 Q 275 150 450 250 T 800 250" 
                                        dur="4s" 
                                        repeatCount="indefinite" 
                                    />
                                    <animate attributeName="stroke-dashoffset" from="0" to="-400" dur="8s" repeatCount="indefinite" />
                                </path>
                                {[0, 1, 2].map((i) => (
                                    <circle key={i} r="6" fill="#FF0055">
                                        <animateMotion dur="4s" repeatCount="indefinite" begin={`${i * 1.3}s`}>
                                            <mpath href="#wavePathLarge" />
                                        </animateMotion>
                                        <animate attributeName="opacity" values="0;1;1;0" dur="4s" repeatCount="indefinite" begin={`${i * 1.3}s`} />
                                    </circle>
                                ))}
                                <text x="450" y="150" textAnchor="middle" fill="#FF0055" opacity="0" className="font-display font-bold text-3xl filter drop-shadow-lg">
                                    ONGOING ACTIVITY
                                    <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="0.5s" fill="freeze" />
                                </text>
                            </g>
                        )}
                    </g>
                </svg>
            </div>

            {/* Context Bar */}
            <div className="bg-white/90 dark:bg-black/90 backdrop-blur p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-gray-200 dark:border-white/10">
                <div className="flex-1">
                    <h3 className={`font-display font-bold text-2xl mb-2 ${
                        getCurrentVisualType() === 'SIMPLE' ? 'text-neon-blue' : 'text-neon-pink'
                    }`}>
                        {currentRule?.label}
                    </h3>
                    <p className="font-mono text-gray-600 dark:text-gray-300 text-lg">
                        {currentRule?.description}
                    </p>
                    {lang !== Language.EN && (
                        <p className="mt-2 text-sm italic text-gray-500">
                             {lang === Language.RU ? currentRule?.translation_ru : currentRule?.translation_uz}
                        </p>
                    )}
                </div>

                <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-6 min-w-[300px] text-center">
                    <div className="text-xs text-gray-500 font-mono uppercase tracking-widest mb-2">Example Construct</div>
                    <div className="text-xl md:text-2xl font-mono text-gray-900 dark:text-white">
                        <span className="opacity-50">I </span>
                        <span className={`font-bold mx-1 ${getCurrentVisualType() === 'SIMPLE' ? 'text-neon-blue' : 'text-neon-pink'}`}>
                            {activeRuleId === 'rule_a' ? 'have lived' :
                            activeRuleId === 'rule_b' ? 'have been working' :
                            activeRuleId === 'rule_c' ? 'have known' :
                            'have finished'}
                        </span>
                        <span className="opacity-50">
                            {activeRuleId === 'rule_a' ? ' here since 2015.' :
                            activeRuleId === 'rule_b' ? ' hard all day.' :
                            activeRuleId === 'rule_c' ? ' him for years.' :
                            ' the task.'}
                        </span>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default VisualMode;