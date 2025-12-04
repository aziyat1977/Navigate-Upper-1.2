import React, { useState } from 'react';
import { GAP_FILL_EXERCISE_LESSON } from '../constants';
import { Language } from '../types';
import { Check, Terminal, Cpu, PenTool, Send } from 'lucide-react';

interface Props {
  lang: Language;
}

const StudentMode: React.FC<Props> = ({ lang }) => {
  const [inputs, setInputs] = useState<string[]>(new Array(GAP_FILL_EXERCISE_LESSON.answers.length).fill(''));
  const [showResults, setShowResults] = useState(false);
  const [letterText, setLetterText] = useState('');
  const [letterSent, setLetterSent] = useState(false);

  const checkResults = () => {
    setShowResults(true);
  };

  const getAccuracy = () => {
    let correct = 0;
    inputs.forEach((input, idx) => {
      // Simple strict check for the drag/drop style gap fill
      if (input.toLowerCase().trim() === GAP_FILL_EXERCISE_LESSON.answers[idx].toLowerCase()) correct++;
    });
    return Math.round((correct / GAP_FILL_EXERCISE_LESSON.answers.length) * 100);
  };

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8 space-y-12">
      
      {/* SECTION 1: READING & GRAMMAR CONTEXT */}
      <div>
        <div className="flex items-center gap-4 mb-8">
            <div className="bg-neon-yellow/20 p-4 rounded text-neon-yellow border border-neon-yellow">
                <Terminal size={32} />
            </div>
            <div>
                <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white transition-colors">READING <span className="text-neon-yellow">PROTOCOL</span></h2>
                <p className="font-mono text-gray-500 text-sm">UNIT 1.2 // THE LETTER IS DEAD?</p>
            </div>
        </div>

        <div className="glass-panel p-1 rounded-lg border border-neon-yellow/30 shadow-[0_0_50px_rgba(249,200,14,0.1)]">
            <div className="bg-gray-50 dark:bg-black/90 p-8 rounded-lg font-mono relative overflow-hidden transition-colors">
                <div className="relative z-20">
                    <div className="mb-8 border-b border-gray-300 dark:border-gray-800 pb-4">
                        <div className="text-neon-yellow text-xs mb-2">>> INCOMING ARTICLE...</div>
                        <p className="text-gray-600 dark:text-gray-300 italic">
                        "{lang === Language.EN ? "Complete the text with the correct phrases (a-e)." :
                        lang === Language.RU ? "Дополните текст правильными фразами (a-e)." :
                        "Matnni to'g'ri iboralar bilan to'ldiring (a-e)."}"
                        </p>
                    </div>

                    <div className="leading-loose text-lg text-gray-800 dark:text-gray-400">
                    {GAP_FILL_EXERCISE_LESSON.textParts.map((part, index) => (
                        <React.Fragment key={index}>
                        <span>{part}</span>
                        {index < GAP_FILL_EXERCISE_LESSON.answers.length && (
                            <span className="inline-block mx-2 my-2 w-full md:w-auto">
                            <span className="text-[10px] text-neon-blue uppercase block mb-1 tracking-wider opacity-70">
                                [{GAP_FILL_EXERCISE_LESSON.hints[index]}]
                            </span>
                            <select 
                                value={inputs[index]}
                                onChange={(e) => {
                                const newInputs = [...inputs];
                                newInputs[index] = e.target.value;
                                setInputs(newInputs);
                                setShowResults(false);
                                }}
                                className={`bg-white dark:bg-white/5 border-b-2 outline-none px-3 py-2 w-full md:w-64 text-sm transition-all font-bold cursor-pointer ${
                                showResults 
                                    ? (inputs[index] === GAP_FILL_EXERCISE_LESSON.answers[index] 
                                        ? 'border-neon-green text-neon-green shadow-[0_0_15px_rgba(0,255,148,0.5)]' 
                                        : 'border-neon-pink text-neon-pink shadow-[0_0_15px_rgba(255,0,85,0.5)]')
                                    : 'border-gray-400 dark:border-gray-600 focus:border-neon-yellow text-gray-900 dark:text-white focus:bg-neon-yellow/10'
                                }`}
                            >
                                <option value="">--- SELECT PHRASE ---</option>
                                {/* Shuffle options for display in dropdown, but for now simple list */}
                                {[...GAP_FILL_EXERCISE_LESSON.answers].sort().map((opt, i) => (
                                    <option key={i} value={opt}>{opt}</option>
                                ))}
                            </select>
                            {showResults && inputs[index] !== GAP_FILL_EXERCISE_LESSON.answers[index] && (
                                <div className="text-[10px] text-neon-green mt-1 bg-neon-green/10 p-1 rounded border border-neon-green/30">
                                >> {GAP_FILL_EXERCISE_LESSON.answers[index]}
                                </div>
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
                        ANALYSIS COMPLETE: <span className={getAccuracy() > 70 ? 'text-neon-green' : 'text-neon-pink'}>{getAccuracy()}%</span>
                    </div>
                </div>
            ) : <div></div>}
            
            <button 
                onClick={checkResults}
                className="group flex items-center gap-3 bg-neon-yellow text-black px-8 py-4 rounded-sm font-bold font-display tracking-wider hover:bg-white transition-all shadow-[0_0_20px_#F9E10E]"
            >
                <Check size={20} className="group-hover:scale-125 transition-transform" />
                {lang === Language.EN ? "VERIFY DATA" : lang === Language.RU ? "ПРОВЕРИТЬ" : "TEKSHIRISH"}
            </button>
        </div>
      </div>

      {/* SECTION 2: TASK 9 - WRITING OUTPUT */}
      <div className="pt-12 border-t border-gray-200 dark:border-white/10">
        <div className="flex items-center gap-4 mb-8">
            <div className="bg-neon-pink/20 p-4 rounded text-neon-pink border border-neon-pink">
                <PenTool size={32} />
            </div>
            <div>
                <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white transition-colors">CREATIVE <span className="text-neon-pink">OUTPUT</span></h2>
                <p className="font-mono text-gray-500 text-sm">TASK 9 // FAMOUS PERSON LETTER</p>
            </div>
        </div>

        <div className="glass-panel p-6 rounded-xl border border-neon-pink/30">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/3 space-y-4">
                    <h3 className="text-xl font-bold text-neon-pink font-display">MISSION BRIEF</h3>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 font-mono">
                        <li className="flex items-start gap-2">
                            <span className="text-neon-blue">>></span> Roleplay: You are a famous person.
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-neon-blue">>></span> Task: Write a short letter (6-8 lines).
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-neon-blue">>></span> Requirement 1: Use 2x Present Perfect Simple.
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-neon-blue">>></span> Requirement 2: Use 2x Present Perfect Continuous.
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-neon-blue">>></span> Requirement 3: Use 3x target words (e.g., confidential, stationery).
                        </li>
                    </ul>
                </div>
                <div className="w-full md:w-2/3">
                    {!letterSent ? (
                        <div className="relative">
                            <textarea
                                value={letterText}
                                onChange={(e) => setLetterText(e.target.value)}
                                placeholder="Dearest fan... I have been writing songs all day..."
                                className="w-full h-48 bg-gray-50 dark:bg-black/50 border border-gray-300 dark:border-white/20 rounded-lg p-4 font-handwriting text-gray-900 dark:text-white focus:border-neon-pink focus:shadow-[0_0_15px_rgba(255,0,85,0.2)] outline-none transition-all resize-none"
                                style={{ fontFamily: '"Space Mono", monospace' }} // Using monospace for "digital type" feel
                            />
                            <button 
                                onClick={() => setLetterSent(true)}
                                disabled={letterText.length < 20}
                                className="absolute bottom-4 right-4 bg-neon-pink text-white px-4 py-2 rounded flex items-center gap-2 font-bold hover:bg-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                            >
                                <Send size={16} /> SEND LETTER
                            </button>
                        </div>
                    ) : (
                        <div className="h-48 flex flex-col items-center justify-center bg-neon-pink/10 rounded-lg border border-neon-pink/30 animate-pulse">
                            <Check size={48} className="text-neon-pink mb-2" />
                            <h3 className="text-xl font-bold text-neon-pink">TRANSMISSION SENT</h3>
                            <button 
                                onClick={() => { setLetterSent(false); setLetterText(''); }}
                                className="mt-4 text-xs underline text-gray-500 hover:text-white"
                            >
                                WRITE ANOTHER
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default StudentMode;