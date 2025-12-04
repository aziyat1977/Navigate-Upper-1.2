import React, { useState, useEffect } from 'react';
import { TIMELINE_RULES } from '../constants';
import { Language } from '../types';
import { Layers, Zap, Play, Clock, Activity, Anchor } from 'lucide-react';

interface Props {
  lang: Language;
}

const VisualMode: React.FC<Props> = ({ lang }) => {
  const [activeRule, setActiveRule] = useState<string>('rule_a');
  // Trigger animation reset
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    setAnimKey(prev => prev + 1);
  }, [activeRule]);

  // Helper to determine the visual type based on the active rule
  const getCurrentVisualType = () => {
    const rule = TIMELINE_RULES.find(r => r.id === activeRule);
    if (!rule) return 'SIMPLE';
    return rule.type;
  };

  const getRuleDetails = () => TIMELINE_RULES.find(r => r.id === activeRule);

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8">
      
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-6xl font-display font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-white to-neon-pink animate-glow-text">
            CHRONO<span className="text-gray-900 dark:text-stroke-white dark:text-transparent">VISUALIZER</span>
        </h2>
        <div className="flex items-center justify-center gap-4 text-xs font-mono text-gray-500 uppercase tracking-widest">
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-neon-blue"></span> RESULT (SIMPLE)</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-neon-pink"></span> ACTIVITY (CONTINUOUS)</span>
        </div>
      </div>

      {/* Main Visualization Stage (The Holo-Deck) */}
      <div className="glass-panel p-1 rounded-2xl border border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.2)] dark:shadow-[0_0_50px_rgba(0,243,255,0.1)] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* The Timeline SVG */}
        <div className="bg-gray-100 dark:bg-[#08080c] rounded-xl h-[300px] md:h-[400px] relative overflow-hidden flex items-center justify-center">
            
            {/* Background Grid Lines */}
            <div className="absolute inset-0 cyber-grid opacity-20" style={{ transform: 'none', animation: 'none', backgroundSize: '40px 40px' }}></div>
            
            <svg width="100%" height="100%" viewBox="0 0 800 300" className="relative z-10">
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
                        <feGaussianBlur stdDeviation="4.5" result="coloredBlur"/>
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

                {/* The "NOW" Line (Vertical) */}
                <line x1="600" y1="20" x2="600" y2="280" stroke="currentColor" strokeWidth="2" className="text-gray-400 dark:text-gray-600" strokeDasharray="5,5" />
                <text x="600" y="295" textAnchor="middle" className="fill-gray-500 font-mono text-xs tracking-widest uppercase">NOW</text>
                
                {/* PAST Label */}
                <text x="50" y="295" textAnchor="middle" className="fill-gray-500 font-mono text-xs tracking-widest uppercase">PAST</text>
                <line x1="50" y1="280" x2="600" y2="280" stroke="currentColor" strokeWidth="1" className="text-gray-300 dark:text-gray-800" markerEnd="url(#arrow)" />

                {/* ANIMATION GROUP: Keyed to restart animations on rule change */}
                <g key={animKey}>
                    
                    {/* ANIMATION: SIMPLE (Rule A, D) - Not Stative */}
                    {getCurrentVisualType() === 'SIMPLE' && activeRule !== 'rule_c' && (
                        <g>
                            {/* The Path from Past to Result */}
                            <path 
                                id="simplePath"
                                d={activeRule === 'rule_a' ? "M 100 150 L 600 150" : "M 100 150 L 580 150"} 
                                stroke="url(#gradSimple)" 
                                strokeWidth="4" 
                                fill="none" 
                                strokeDasharray="600"
                                strokeDashoffset="600"
                            >
                                <animate attributeName="stroke-dashoffset" from="600" to="0" dur="1.5s" fill="freeze" calcMode="spline" keySplines="0.4 0 0.2 1" />
                            </path>
                            
                            {/* Particle Moving Along Path */}
                            <circle r="4" fill="#fff">
                                <animateMotion dur="1.5s" fill="freeze" calcMode="spline" keySplines="0.4 0 0.2 1">
                                    <mpath href="#simplePath" />
                                </animateMotion>
                                <animate attributeName="opacity" values="1;0" dur="0.5s" begin="1.5s" fill="freeze" />
                            </circle>

                            {/* The Result Point (Completed Action) - Appears after line draws */}
                            <circle cx={activeRule === 'rule_a' ? "600" : "580"} cy="150" r="0" fill="#00F3FF" filter="url(#glow)">
                                <animate attributeName="r" from="0" to="10" dur="0.3s" begin="1.4s" fill="freeze" />
                                <animate attributeName="r" values="10;14;10" dur="2s" begin="1.7s" repeatCount="indefinite" />
                                <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" begin="1.7s" repeatCount="indefinite" />
                            </circle>

                            {/* Connection to Now (for Rule D mainly) */}
                            {activeRule !== 'rule_a' && (
                                <line x1="580" y1="150" x2="600" y2="150" stroke="#00F3FF" strokeWidth="2" strokeDasharray="4 2" opacity="0">
                                    <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="1.5s" fill="freeze" />
                                </line>
                            )}
                            
                            {/* Label */}
                            <text x="350" y="120" textAnchor="middle" fill="#00F3FF" opacity="0" className="font-display font-bold text-lg filter drop-shadow-lg">
                                {activeRule === 'rule_a' ? 'STARTED IN PAST → CONTINUES TO NOW' : 'COMPLETED ACTION → PRESENT RESULT'}
                                <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="1s" fill="freeze" />
                                <animate attributeName="y" from="120" to="110" dur="0.5s" begin="1s" fill="freeze" />
                            </text>

                            {activeRule === 'rule_a' && (
                                <g opacity="0">
                                    <text x="100" y="180" fill="#fff" className="font-mono text-xs">SINCE 2010</text>
                                    <line x1="100" y1="160" x2="100" y2="140" stroke="white" strokeWidth="2" />
                                    <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="0.5s" fill="freeze" />
                                </g>
                            )}
                        </g>
                    )}

                    {/* ANIMATION: STATIVE (Rule C) */}
                    {activeRule === 'rule_c' && (
                        <g>
                            {/* Solid Block representing State - Growing from center or left */}
                            <rect x="100" y="130" width="0" height="40" fill="url(#gradSimple)" opacity="0.5" rx="4">
                                <animate attributeName="width" from="0" to="500" dur="1s" fill="freeze" calcMode="spline" keySplines="0.4 0 0.2 1" />
                            </rect>
                            <rect x="100" y="130" width="500" height="40" stroke="#00F3FF" strokeWidth="2" fill="none" rx="4" opacity="0">
                                <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="0.8s" fill="freeze" />
                            </rect>
                            
                            {/* Icons inside */}
                            <text x="350" y="155" textAnchor="middle" fill="#fff" opacity="0" className="font-mono font-bold tracking-[0.5em] text-sm">
                                UNCHANGING STATE
                                <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="1s" fill="freeze" />
                            </text>
                            
                            {/* Anchor Icon visual */}
                            <circle cx="350" cy="150" r="40" stroke="#00F3FF" strokeWidth="1" fill="none" opacity="0" className="animate-ping-slow">
                                <animate attributeName="opacity" from="0" to="0.3" dur="1s" begin="1.2s" fill="freeze" />
                            </circle>
                        </g>
                    )}

                    {/* ANIMATION: CONTINUOUS (Rule B) */}
                    {getCurrentVisualType() === 'CONTINUOUS' && (
                        <g>
                            {/* The Wave Path Definition for Motion */}
                            <path 
                                id="wavePath"
                                d="M 50 150 Q 150 100 250 150 T 450 150 T 650 150" 
                                stroke="none" 
                                fill="none"
                            />

                            {/* The Visible Wave - Animating Dasharray for flow effect */}
                            <path 
                                d="M 50 150 Q 150 100 250 150 T 450 150 T 650 150" 
                                stroke="url(#gradContinuous)" 
                                strokeWidth="6" 
                                fill="none" 
                                filter="url(#glow)"
                                strokeDasharray="20 10"
                                opacity="0"
                            >
                                <animate attributeName="opacity" from="0" to="1" dur="0.5s" fill="freeze" />
                                <animate attributeName="d" 
                                    values="M 50 150 Q 150 100 250 150 T 450 150 T 650 150;
                                            M 50 150 Q 150 200 250 150 T 450 150 T 650 150;
                                            M 50 150 Q 150 100 250 150 T 450 150 T 650 150" 
                                    dur="4s" 
                                    repeatCount="indefinite" 
                                />
                                <animate attributeName="stroke-dashoffset" from="0" to="-300" dur="10s" repeatCount="indefinite" />
                            </path>

                            {/* Particles traveling along the wave */}
                            {[0, 1, 2].map((i) => (
                                <circle key={i} r="4" fill="#FF0055">
                                    <animateMotion dur="3s" repeatCount="indefinite" begin={`${i * 1}s`}>
                                        <mpath href="#wavePath" />
                                    </animateMotion>
                                    <animate attributeName="opacity" values="0;1;1;0" dur="3s" repeatCount="indefinite" begin={`${i * 1}s`} />
                                </circle>
                            ))}
                            
                            {/* Label */}
                            <text x="350" y="100" textAnchor="middle" fill="#FF0055" opacity="0" className="font-display font-bold text-lg filter drop-shadow-lg">
                                ACTIVITY / DURATION / RECENT
                                <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="0.5s" fill="freeze" />
                            </text>
                        </g>
                    )}
                </g>
            </svg>
        </div>

        {/* Dynamic Context Bar */}
        <div className="bg-white/90 dark:bg-black/80 backdrop-blur border-t border-gray-200 dark:border-white/10 p-6 flex flex-col md:flex-row items-center justify-between gap-6 transition-colors">
            <div className="flex items-center gap-4">
                <div className={`p-4 rounded-full ${getCurrentVisualType() === 'SIMPLE' ? 'bg-neon-blue/20 text-neon-blue' : 'bg-neon-pink/20 text-neon-pink'}`}>
                    {activeRule === 'rule_c' ? <Anchor size={24} /> : 
                     getCurrentVisualType() === 'SIMPLE' ? <Zap size={24} /> : <Activity size={24} />}
                </div>
                <div>
                    <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white uppercase">{getRuleDetails()?.label}</h3>
                    <p className="font-mono text-sm text-gray-500 dark:text-gray-400 max-w-md">
                        {getRuleDetails()?.description}
                    </p>
                </div>
            </div>
            
            {/* Sentence Builder Display */}
            <div className="flex-1 w-full md:w-auto bg-gray-100 dark:bg-white/5 p-4 rounded-lg border border-gray-200 dark:border-white/10 text-center font-mono text-lg">
                <span className="text-gray-500">I </span>
                <span className={`font-bold border-b-2 mx-1 ${getCurrentVisualType() === 'SIMPLE' ? 'text-neon-blue border-neon-blue' : 'text-neon-pink border-neon-pink'}`}>
                   {activeRule === 'rule_a' ? '[have worked / have been working]' :
                    activeRule === 'rule_b' ? 'have been writing' :
                    activeRule === 'rule_c' ? 'have known' :
                    'have finished'}
                </span>
                <span className="text-gray-500">
                   {activeRule === 'rule_a' ? ' here since 2015.' :
                    activeRule === 'rule_b' ? ' letters all day.' :
                    activeRule === 'rule_c' ? ' him for years.' :
                    ' the report.'}
                </span>
            </div>
        </div>
      </div>

      {/* Control Module - Rule Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {TIMELINE_RULES.map((rule) => {
            const isActive = activeRule === rule.id;
            return (
                <button
                    key={rule.id}
                    onClick={() => setActiveRule(rule.id)}
                    className={`group relative p-6 rounded-xl border text-left transition-all duration-300 overflow-hidden ${
                        isActive 
                        ? rule.type === 'SIMPLE' 
                            ? 'bg-neon-blue/10 border-neon-blue shadow-[0_0_20px_rgba(0,243,255,0.2)]'
                            : 'bg-neon-pink/10 border-neon-pink shadow-[0_0_20px_rgba(255,0,85,0.2)]'
                        : 'bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 hover:border-gray-400 dark:hover:border-white/30'
                    }`}
                >
                    <div className="absolute top-0 right-0 p-2 opacity-50">
                        {rule.type === 'SIMPLE' ? <Play size={16} className={isActive ? "text-neon-blue" : "text-gray-500"} /> : <Clock size={16} className={isActive ? "text-neon-pink" : "text-gray-500"} />}
                    </div>
                    
                    <div className={`text-xs font-mono font-bold mb-2 ${
                        isActive 
                        ? rule.type === 'SIMPLE' ? 'text-neon-blue' : 'text-neon-pink'
                        : 'text-gray-500'
                    }`}>
                        {rule.type}
                    </div>
                    
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1 group-hover:translate-x-1 transition-transform">{rule.label}</h4>
                    
                    {/* Hover Translation */}
                    {lang !== Language.EN && (
                        <div className="mt-2 pt-2 border-t border-gray-200 dark:border-white/10 text-xs text-gray-500 dark:text-gray-400 italic">
                             {lang === Language.RU ? rule.translation_ru : rule.translation_uz}
                        </div>
                    )}
                </button>
            )
        })}
      </div>
    </div>
  );
};

export default VisualMode;