import React from 'react';
import { GAP_FILL_EXERCISE_LESSON, KAHOOT_QUESTIONS } from '../constants';
import { FileText, Key, Eye } from 'lucide-react';

const TeacherMode: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-neon-yellow dark:text-neon-yellow mb-8 flex items-center gap-3">
        <Key className="text-gray-900 dark:text-white" /> <span className="text-gray-900 dark:text-white">INSTRUCTOR CONTROL PANEL</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Answer Key for Exercises */}
        <div className="glass-panel p-6 rounded-xl">
           <h3 className="text-xl font-mono mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
             <FileText size={20} className="text-neon-blue" />
             READING KEY: "The Letter is Dead?"
           </h3>
           <div className="space-y-3">
             {GAP_FILL_EXERCISE_LESSON.answers.map((ans, idx) => (
               <div key={idx} className="flex justify-between border-b border-gray-200 dark:border-white/10 pb-2">
                 <span className="text-gray-500 dark:text-gray-400">
                    Gap {String.fromCharCode(97 + idx)} ({GAP_FILL_EXERCISE_LESSON.hints[idx]}):
                 </span>
                 <span className="text-neon-green font-bold text-sm text-right ml-4">{ans}</span>
               </div>
             ))}
           </div>
        </div>

        {/* Quiz Key */}
        <div className="glass-panel p-6 rounded-xl">
           <h3 className="text-xl font-mono mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
             <Eye size={20} className="text-neon-pink" />
             QUIZ LOGIC: Letters of Note
           </h3>
           <div className="space-y-4 h-[400px] overflow-y-auto pr-2 custom-scrollbar">
             {KAHOOT_QUESTIONS.map((q) => (
               <div key={q.id} className="bg-gray-100 dark:bg-black/30 p-4 rounded border border-gray-200 dark:border-white/5 text-gray-800 dark:text-gray-200">
                 <p className="font-bold mb-2 text-sm">{q.question}</p>
                 <div className="text-xs text-gray-500 mb-2">Correct: <span className="text-gray-900 dark:text-white font-bold">{q.options[q.correctAnswer]}</span></div>
                 <p className="text-xs italic text-gray-500 dark:text-gray-400 border-l-2 border-neon-purple pl-2">
                   {q.explanation}
                 </p>
               </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherMode;