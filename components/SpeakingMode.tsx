import React, { useState } from 'react';
import { SPEAKING_TOPICS } from '../constants';
import { Language } from '../types';
import { Mic, Hash, MessageSquare, CheckCircle, ChevronDown, ChevronRight, Clock, Flame } from 'lucide-react';

interface Props {
  lang: Language;
}

const SpeakingMode: React.FC<Props> = ({ lang }) => {
  const [openTopic, setOpenTopic] = useState<string | null>('social_media');

  const toggleTopic = (id: string) => {
    setOpenTopic(openTopic === id ? null : id);
  };

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-8">
        <div>
          <h2 className="text-4xl md:text-6xl font-display font-black text-gray-900 dark:text-white mb-2 tracking-tighter transition-colors">
            SPEAKING <span className="text-neon-pink">MODULE</span>
          </h2>
          <p className="font-mono text-neon-blue uppercase tracking-widest flex items-center gap-2">
            <Mic size={16} /> B2 TEEN TOPICS // PP vs PPC
          </p>
        </div>
        
        {/* Quick Rule Card */}
        <div className="glass-panel p-4 rounded-xl border-l-4 border-neon-yellow max-w-lg w-full">
          <h3 className="text-sm font-bold font-mono text-gray-500 uppercase mb-2 flex items-center gap-2">
            <Flame size={14} className="text-neon-yellow" /> QUICK RULE (30s)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
            <div>
              <div className="font-bold text-neon-blue mb-1">PP (Result/Finished)</div>
              <p className="text-gray-700 dark:text-gray-300 italic">"I've posted three reels."</p>
              <div className="text-[10px] text-gray-500 mt-1">already, yet, so far, today</div>
            </div>
            <div>
              <div className="font-bold text-neon-pink mb-1">PPC (Duration/Activity)</div>
              <p className="text-gray-700 dark:text-gray-300 italic">"I've been scrolling all morning."</p>
              <div className="text-[10px] text-gray-500 mt-1">for, since, all day, lately</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Col: Topics */}
        <div className="lg:col-span-2 space-y-4">
          {SPEAKING_TOPICS.map((topic) => {
            const isOpen = openTopic === topic.id;
            return (
              <div 
                key={topic.id} 
                className={`glass-panel rounded-xl overflow-hidden transition-all duration-300 border ${isOpen ? 'border-neon-blue shadow-[0_0_20px_rgba(0,243,255,0.1)]' : 'border-transparent hover:border-gray-300 dark:hover:border-white/20'}`}
              >
                <button 
                  onClick={() => toggleTopic(topic.id)}
                  className="w-full p-6 flex items-center justify-between bg-white/50 dark:bg-black/40 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg ${isOpen ? 'bg-neon-blue text-black' : 'bg-gray-200 dark:bg-white/10 text-gray-500'}`}>
                      <Hash size={20} />
                    </div>
                    <h3 className={`text-xl font-display font-bold ${isOpen ? 'text-gray-900 dark:text-white' : 'text-gray-500'}`}>
                      {topic.title}
                    </h3>
                  </div>
                  {isOpen ? <ChevronDown className="text-neon-blue" /> : <ChevronRight className="text-gray-400" />}
                </button>

                {isOpen && (
                  <div className="p-6 bg-gray-50/50 dark:bg-black/20 border-t border-gray-100 dark:border-white/5 animate-fadeIn">
                     <div className="space-y-4">
                       {topic.questions.map((q, idx) => (
                         <div key={idx} className="group flex gap-4 p-3 rounded hover:bg-white dark:hover:bg-white/5 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-white/10">
                           <div className="text-neon-pink font-mono text-sm pt-1">{(idx + 1).toString().padStart(2, '0')}</div>
                           <div>
                             <p className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2 leading-relaxed">
                               {q.q}
                             </p>
                             <div className="inline-flex items-center gap-2 px-2 py-1 rounded bg-black/5 dark:bg-black/50 border border-black/10 dark:border-white/10 text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                               <Clock size={10} /> {q.context}
                             </div>
                           </div>
                         </div>
                       ))}
                     </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Col: Mini Models & Scoring */}
        <div className="space-y-6">
          
          <div className="glass-panel p-6 rounded-xl border-l-4 border-neon-purple">
            <h3 className="text-lg font-bold font-display text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <MessageSquare size={20} className="text-neon-purple" /> MINI MODELS
            </h3>
            
            <div className="space-y-4">
              <div className="p-4 rounded bg-neon-pink/5 border border-neon-pink/20">
                <div className="text-xs font-bold text-neon-pink mb-2 uppercase tracking-widest">Model A (PPC)</div>
                <p className="text-sm font-mono text-gray-600 dark:text-gray-300">
                  "I’ve been <span className="text-neon-pink font-bold">[verb]-ing</span> for/since <span className="text-neon-pink font-bold">[time]</span>. I’m doing it because <span className="text-neon-pink font-bold">[reason]</span>."
                </p>
              </div>

              <div className="p-4 rounded bg-neon-blue/5 border border-neon-blue/20">
                <div className="text-xs font-bold text-neon-blue mb-2 uppercase tracking-widest">Model B (PP)</div>
                <p className="text-sm font-mono text-gray-600 dark:text-gray-300">
                  "I’ve <span className="text-neon-blue font-bold">[V3]</span> already/so far. The result is <span className="text-neon-blue font-bold">[result]</span>."
                </p>
              </div>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-xl">
            <h3 className="text-lg font-bold font-display text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <CheckCircle size={20} className="text-neon-green" /> SCORING
            </h3>
            <ul className="space-y-3 font-mono text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-center gap-3">
                <div className="w-4 h-4 rounded border border-neon-green flex items-center justify-center"></div>
                Correct Tense (PP/PPC)
              </li>
              <li className="flex items-center gap-3">
                <div className="w-4 h-4 rounded border border-neon-green flex items-center justify-center"></div>
                Keyword Used
              </li>
              <li className="flex items-center gap-3">
                <div className="w-4 h-4 rounded border border-neon-green flex items-center justify-center"></div>
                2-4 Sentences
              </li>
              <li className="flex items-center gap-3">
                <div className="w-4 h-4 rounded border border-neon-green flex items-center justify-center"></div>
                Clear Reason/Example
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SpeakingMode;