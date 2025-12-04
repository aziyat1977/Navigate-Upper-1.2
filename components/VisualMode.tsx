import React, { useState } from 'react';
import { TIMELINE_RULES } from '../constants';
import { Language } from '../types';
import { Layers, Zap } from 'lucide-react';

interface Props {
  lang: Language;
}

const VisualMode: React.FC<Props> = ({ lang }) => {
  const [activeRule, setActiveRule] = useState<string | null>(null);

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-5xl md:text-7xl font-display font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-gray-800 dark:via-white to-neon-pink animate-glow-text">
            CHRONO<span className="text-gray-900 dark:text-stroke-white dark:text-transparent transition-colors">VISUALIZER</span>
        </h2>
        <p className="font-mono text-neon-blue tracking-[0.5em] text-sm uppercase">Temporal Grammar Logic Engine</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 perspective-1000">
        
        {/* Simple Side - The Monolith */}
        <div 
          className={`relative group transition-all duration-700 ${activeRule && !activeRule.startsWith('SIMPLE') ? 'opacity-20 blur-sm scale-90' : 'opacity-100 rotate-y-2'}`}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue to-transparent opacity-20 blur group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative glass-panel p-8 rounded-3xl border border-neon-blue/30 h-full">
            
            <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-neon-blue/10 rounded-lg border border-neon-blue text-neon-blue">
                    <Zap size={24} />
                </div>
                <div>
                    <h3 className="text-3xl font-display font-bold text-gray-900 dark:text-white transition-colors">SIMPLE</h3>
                    <p className="font-mono text-xs text-neon-blue">RESULT ORIENTED PROTOCOL</p>
                </div>
            </div>

            {/* Visual Representation */}
            <div className="h-48 bg-gray-100 dark:bg-black/50 rounded-xl border border-neon-blue/20 relative flex items-center justify-center overflow-hidden mb-8 shadow-[inset_0_0_50px_rgba(0,243,255,0.1)] transition-colors">
              <div className="absolute w-full h-[1px] bg-gray-400 dark:bg-gray-800"></div>
              {/* The Result Point */}
              <div className="relative z-10 w-4 h-4 bg-white rounded-full shadow-[0_0_40px_10px_#00F3FF] animate-pulse"></div>
              <div className="absolute top-1/2 left-1/2 mt-6 -ml-8 font-mono text-xs text-neon-blue">COMPLETE</div>
            </div>
            
            <div className="space-y-4">
              {TIMELINE_RULES.filter(r => r.type === 'SIMPLE').map(rule => (
                <button
                  key={rule.id}
                  onClick={() => setActiveRule(rule.id === activeRule ? null : rule.id)}
                  className={`w-full text-left p-6 rounded-xl border transition-all duration-300 group/btn relative overflow-hidden ${
                    activeRule === rule.id 
                      ? 'bg-neon-blue/10 border-neon-blue shadow-[0_0_30px_rgba(0,243,255,0.1)]' 
                      : 'bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/5 hover:border-neon-blue/50'
                  }`}
                >
                  <div className="relative z-10">
                    <div className="font-tech font-bold text-xl uppercase tracking-wider mb-1 text-gray-800 dark:text-white transition-colors">{rule.label}</div>
                    {activeRule === rule.id && (
                    <div className="mt-3 text-sm font-mono text-gray-600 dark:text-gray-300 animate-fadeIn border-t border-neon-blue/30 pt-3 transition-colors">
                        <p>{rule.description}</p>
                        {lang !== Language.EN && (
                        <p className="mt-2 text-neon-blue italic">
                            >> {lang === Language.RU ? rule.translation_ru : rule.translation_uz}
                        </p>
                        )}
                    </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Continuous Side - The Stream */}
        <div 
          className={`relative group transition-all duration-700 ${activeRule && !activeRule.startsWith('CONTINUOUS') ? 'opacity-20 blur-sm scale-90' : 'opacity-100 -rotate-y-2'}`}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-transparent to-neon-pink opacity-20 blur group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative glass-panel p-8 rounded-3xl border border-neon-pink/30 h-full">
            
            <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-neon-pink/10 rounded-lg border border-neon-pink text-neon-pink">
                    <Layers size={24} />
                </div>
                <div>
                    <h3 className="text-3xl font-display font-bold text-gray-900 dark:text-white transition-colors">CONTINUOUS</h3>
                    <p className="font-mono text-xs text-neon-pink">PROCESS ORIENTED PROTOCOL</p>
                </div>
            </div>

            {/* Visual Representation */}
            <div className="h-48 bg-gray-100 dark:bg-black/50 rounded-xl border border-neon-pink/20 relative flex items-center justify-center overflow-hidden mb-8 shadow-[inset_0_0_50px_rgba(247,6,207,0.1)] transition-colors">
              {/* Animated Wave */}
              <div className="absolute inset-0 flex items-center">
                 <div className="w-full h-1 bg-gradient-to-r from-transparent via-neon-pink to-transparent opacity-50 blur-sm"></div>
                 <div className="absolute w-20 h-20 border-2 border-neon-pink rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-ping opacity-20"></div>
                 <div className="absolute w-10 h-10 border border-neon-pink rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-ping animation-delay-500 opacity-40"></div>
              </div>
              <div className="absolute top-1/2 left-1/2 mt-6 -ml-8 font-mono text-xs text-neon-pink">ONGOING</div>
            </div>

            <div className="space-y-4">
              {TIMELINE_RULES.filter(r => r.type === 'CONTINUOUS').map(rule => (
                <button
                  key={rule.id}
                  onClick={() => setActiveRule(rule.id === activeRule ? null : rule.id)}
                  className={`w-full text-left p-6 rounded-xl border transition-all duration-300 group/btn relative overflow-hidden ${
                    activeRule === rule.id 
                      ? 'bg-neon-pink/10 border-neon-pink shadow-[0_0_30px_rgba(247,6,207,0.1)]' 
                      : 'bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/5 hover:border-neon-pink/50'
                  }`}
                >
                   <div className="relative z-10">
                    <div className="font-tech font-bold text-xl uppercase tracking-wider mb-1 text-gray-800 dark:text-white transition-colors">{rule.label}</div>
                    {activeRule === rule.id && (
                    <div className="mt-3 text-sm font-mono text-gray-600 dark:text-gray-300 animate-fadeIn border-t border-neon-pink/30 pt-3 transition-colors">
                        <p>{rule.description}</p>
                        {lang !== Language.EN && (
                        <p className="mt-2 text-neon-pink italic">
                            >> {lang === Language.RU ? rule.translation_ru : rule.translation_uz}
                        </p>
                        )}
                    </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-neon-yellow to-neon-purple p-[1px]">
            <div className="bg-white/90 dark:bg-black/80 backdrop-blur-xl rounded-2xl p-8 max-w-2xl transition-colors">
                <h4 className="font-mono text-neon-yellow mb-2 uppercase tracking-widest text-xs">System Warning</h4>
                <p className="text-2xl font-tech text-gray-900 dark:text-white transition-colors">
                    STATIVE VERBS <span className="text-gray-400 dark:text-gray-500 text-lg mx-2">//</span> <span className="text-neon-blue">SIMPLE MODE ONLY</span>
                </p>
                <div className="mt-4 flex justify-center gap-4 text-sm font-mono text-gray-500 dark:text-gray-400">
                    <span>[ BE ]</span>
                    <span>[ HAVE ]</span>
                    <span>[ KNOW ]</span>
                    <span>[ SEEM ]</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default VisualMode;