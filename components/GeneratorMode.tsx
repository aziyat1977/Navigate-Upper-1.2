import React, { useState, useEffect } from 'react';
import { getAvailableTopics, generateQuestion } from '../utils/generator';
import { QuizQuestion } from '../types';
import { Infinity, RefreshCw, Zap, CheckCircle, XCircle } from 'lucide-react';

const GeneratorMode: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<string>('MIX');
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion | null>(null);
  const [feedback, setFeedback] = useState<'CORRECT' | 'WRONG' | null>(null);
  const [streak, setStreak] = useState(0);

  const topics = getAvailableTopics();

  const loadQuestion = () => {
    setFeedback(null);
    const topicId = selectedTopic === 'MIX' ? undefined : selectedTopic;
    const q = generateQuestion(topicId);
    setCurrentQuestion(q);
  };

  useEffect(() => {
    loadQuestion();
  }, [selectedTopic]);

  const handleAnswer = (index: number) => {
    if (!currentQuestion || feedback) return;

    if (index === currentQuestion.correctAnswer) {
      setFeedback('CORRECT');
      setStreak(prev => prev + 1);
      // Auto advance
      setTimeout(loadQuestion, 1500);
    } else {
      setFeedback('WRONG');
      setStreak(0);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
        <div>
          <h2 className="text-4xl md:text-6xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-green via-white to-neon-blue animate-pulse flex items-center gap-4">
             INFINITE <span className="text-white">DRILL</span> <Infinity size={48} className="text-neon-blue" />
          </h2>
          <p className="font-mono text-gray-500 uppercase tracking-widest text-sm mt-2">
            Endless Grammar Generation Engine
          </p>
        </div>

        <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/10 hover:border-neon-yellow/50 transition-colors duration-300">
          <div className="text-right">
            <div className="text-xs text-gray-500 font-mono uppercase">Current Streak</div>
            <div className="text-3xl font-bold font-display text-neon-yellow">{streak}</div>
          </div>
          <Zap size={32} className="text-neon-yellow animate-bounce" />
        </div>
      </div>

      {/* Topic Selection Bar */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-8 custom-scrollbar">
        <button
          onClick={() => setSelectedTopic('MIX')}
          className={`px-4 py-2 rounded-full font-mono text-xs font-bold whitespace-nowrap transition-all border interactive-hover ${
            selectedTopic === 'MIX' 
              ? 'bg-neon-blue text-black border-neon-blue shadow-[0_0_10px_#00F3FF]' 
              : 'bg-white/5 text-gray-400 border-white/10 hover:border-neon-blue/50 hover:text-white'
          }`}
        >
          MIX ALL TOPICS
        </button>
        {topics.map(t => (
          <button
            key={t.id}
            onClick={() => setSelectedTopic(t.id)}
            className={`px-4 py-2 rounded-full font-mono text-xs font-bold whitespace-nowrap transition-all border interactive-hover ${
              selectedTopic === t.id
                ? 'bg-neon-blue text-black border-neon-blue shadow-[0_0_10px_#00F3FF]' 
                : 'bg-white/5 text-gray-400 border-white/10 hover:border-neon-blue/50 hover:text-white'
            }`}
          >
            {t.name.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Question Card */}
      {currentQuestion && (
        <div className="relative">
          <div className="glass-panel p-8 md:p-12 rounded-2xl border border-neon-blue/20 relative overflow-hidden min-h-[400px] flex flex-col justify-center transition-all hover:border-neon-blue/40">
            
            <div className="absolute top-0 right-0 p-4 opacity-10">
               <span className="text-9xl font-display font-black text-white">{selectedTopic === 'MIX' ? 'MIX' : selectedTopic.substring(0,3)}</span>
            </div>

            <div className="relative z-10 text-center">
              <div className="inline-block px-3 py-1 bg-white/10 rounded mb-6 text-xs font-mono text-gray-400">
                 CONTEXT: {currentQuestion.quizSet.toUpperCase()}
              </div>

              <h3 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 leading-relaxed">
                {currentQuestion.question}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentQuestion.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(idx)}
                    disabled={feedback !== null}
                    className={`p-6 rounded-xl border text-lg font-bold transition-all transform duration-200 ${
                      feedback 
                        ? idx === currentQuestion.correctAnswer 
                          ? 'bg-neon-green text-black border-neon-green scale-105 shadow-[0_0_20px_#00FF94]'
                          : feedback === 'WRONG' && idx !== currentQuestion.correctAnswer
                             ? 'bg-red-500/20 border-red-500 opacity-50' 
                             : 'bg-white/5 border-white/10 opacity-50'
                        : 'bg-white/5 border-white/10 hover:border-neon-blue hover:bg-white/10 text-gray-800 dark:text-gray-200 interactive-hover hover:shadow-[0_0_15px_rgba(0,243,255,0.2)]'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Feedback Overlay */}
            {feedback && (
              <div className="absolute inset-0 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center z-20 animate-fadeIn p-8 text-center">
                {feedback === 'CORRECT' ? (
                  <CheckCircle size={80} className="text-neon-green mb-4 animate-bounce" />
                ) : (
                  <XCircle size={80} className="text-neon-pink mb-4" />
                )}
                
                <h2 className={`text-4xl font-display font-black mb-4 ${feedback === 'CORRECT' ? 'text-neon-green' : 'text-neon-pink'}`}>
                  {feedback}
                </h2>
                
                <p className="text-gray-300 font-mono max-w-lg text-sm md:text-base border-l-2 border-white/20 pl-4">
                   {currentQuestion.explanation}
                </p>

                {feedback === 'WRONG' && (
                  <button 
                    onClick={loadQuestion}
                    className="mt-8 px-8 py-3 bg-white text-black font-bold rounded hover:bg-gray-200 transition-all flex items-center gap-2 interactive-hover hover:scale-105"
                  >
                    <RefreshCw size={20} /> NEXT QUESTION
                  </button>
                )}
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
};

export default GeneratorMode;