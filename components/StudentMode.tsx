import React, { useState } from 'react';
import { GAP_FILL_DATA } from '../constants';
import { Language } from '../types';
import { Check, Terminal, Cpu } from 'lucide-react';

interface Props {
  lang: Language;
}

const StudentMode: React.FC<Props> = ({ lang }) => {
  const [inputs, setInputs] = useState<string[]>(new Array(GAP_FILL_DATA.answers.length).fill(''));
  const [showResults, setShowResults] = useState(false);

  const checkResults = () => {
    setShowResults(true);
  };

  const getAccuracy = () => {
    let correct = 0;
    inputs.forEach((input, idx) => {
      if (input.toLowerCase().trim() === GAP_FILL_DATA.answers[idx].toLowerCase()) correct++;
    });
    return Math.round((correct / GAP_FILL_DATA.answers.length) * 100);
  };

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8">
      
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-neon-yellow/20 p-4 rounded text-neon-yellow border border-neon-yellow">
            <Terminal size={32} />
        </div>
        <div>
            <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white transition-colors">TERMINAL <span className="text-neon-yellow">ACCESS</span></h2>
            <p className="font-mono text-gray-500 text-sm">SECURE SHELL // UNIT 1.2 // EXERCISE_01</p>
        </div>
      </div>

      <div className="glass-panel p-1 rounded-lg border border-neon-yellow/30 shadow-[0_0_50px_rgba(249,200,14,0.1)]">
        <div className="bg-gray-50 dark:bg-black/90 p-8 rounded-lg font-mono relative overflow-hidden transition-colors">
            {/* Scanline Effect (Dark mode only) */}
            <div className="hidden dark:block absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 pointer-events-none bg-[length:100%_2px,3px_100%]"></div>
            
            <div className="relative z-20">
                <div className="mb-8 border-b border-gray-300 dark:border-gray-800 pb-4">
                    <div className="text-neon-yellow text-xs mb-2">>> INCOMING TRANSMISSION...</div>
                    <p className="text-gray-600 dark:text-gray-300 italic">
                    "{lang === Language.EN ? "Complete the text with present perfect simple or continuous." :
                    lang === Language.RU ? "Заполните текст, используя Present Perfect Simple или Continuous." :
                    "Matnni Present Perfect Simple yoki Continuous zamonlaridan foydalanib to'ldiring."}"
                    </p>
                </div>

                <div className="leading-loose text-lg text-gray-800 dark:text-gray-400">
                {GAP_FILL_DATA.textParts.map((part, index) => (
                    <React.Fragment key={index}>
                    <span>{part}</span>
                    {index < GAP_FILL_DATA.answers.length && (
                        <span className="inline-block mx-2">
                        <span className="text-[10px] text-neon-blue uppercase block mb-1 tracking-wider opacity-70">
                            [{GAP_FILL_DATA.hints[index]}]
                        </span>
                        <input 
                            type="text"
                            value={inputs[index]}
                            onChange={(e) => {
                            const newInputs = [...inputs];
                            newInputs[index] = e.target.value;
                            setInputs(newInputs);
                            setShowResults(false);
                            }}
                            className={`bg-white dark:bg-white/5 border-b-2 outline-none px-3 py-1 w-48 text-center transition-all font-bold ${
                            showResults 
                                ? (inputs[index].toLowerCase().trim() === GAP_FILL_DATA.answers[index].toLowerCase() 
                                    ? 'border-neon-green text-neon-green shadow-[0_0_15px_rgba(0,255,148,0.5)]' 
                                    : 'border-neon-pink text-neon-pink shadow-[0_0_15px_rgba(255,0,85,0.5)]')
                                : 'border-gray-400 dark:border-gray-600 focus:border-neon-yellow text-gray-900 dark:text-white focus:bg-neon-yellow/10'
                            }`}
                        />
                        {showResults && inputs[index].toLowerCase().trim() !== GAP_FILL_DATA.answers[index].toLowerCase() && (
                            <span className="block text-[10px] text-neon-green mt-1">
                            >> {GAP_FILL_DATA.answers[index]}
                            </span>
                        )}
                        </span>
                    )}
                    </React.Fragment>
                ))}
                </div>
            </div>
        </div>
      </div>

      <div className="mt-8 flex justify-between items-center">
          {showResults ? (
            <div className="glass-panel px-6 py-4 rounded border border-gray-200 dark:border-white/10 flex items-center gap-4">
                <Cpu size={24} className={getAccuracy() > 70 ? 'text-neon-green' : 'text-neon-pink'} />
                <div className="font-display font-bold text-2xl text-gray-900 dark:text-white">
                    SYSTEM ACCURACY: <span className={getAccuracy() > 70 ? 'text-neon-green' : 'text-neon-pink'}>{getAccuracy()}%</span>
                </div>
            </div>
          ) : <div></div>}
          
          <button 
            onClick={checkResults}
            className="group flex items-center gap-3 bg-neon-yellow text-black px-8 py-4 rounded-sm font-bold font-display tracking-wider hover:bg-white transition-all shadow-[0_0_20px_#F9E10E]"
          >
            <Check size={20} className="group-hover:scale-125 transition-transform" />
            {lang === Language.EN ? "EXECUTE CODE" : lang === Language.RU ? "ЗАПУСТИТЬ" : "BAJARISH"}
          </button>
        </div>
    </div>
  );
};

export default StudentMode;