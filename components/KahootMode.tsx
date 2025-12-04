import React, { useState, useEffect, useCallback, useRef } from 'react';
import { generateBatch, getAvailableTopics } from '../utils/generator';
import { QuizQuestion } from '../types';
import { Language } from '../types';
import { Trophy, Timer, XCircle, CheckCircle, Play, RefreshCw } from 'lucide-react';

interface Props {
  lang: Language;
}

const KahootMode: React.FC<Props> = ({ lang }) => {
  const [gameState, setGameState] = useState<'SELECT' | 'START' | 'PLAYING' | 'RESULT'>('SELECT');
  const [selectedTopic, setSelectedTopic] = useState<string>('MIX');
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [feedback, setFeedback] = useState<'CORRECT' | 'WRONG' | null>(null);

  // Use refs for timer ID and current time state
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const nextQTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const timeLeftRef = useRef(15);

  const availableTopics = getAvailableTopics();

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (nextQTimerRef.current) clearTimeout(nextQTimerRef.current);
    };
  }, []);

  const selectQuiz = (topicId: string) => {
    setSelectedTopic(topicId);
    setGameState('START');
  }

  const startGame = () => {
    // Generate 10 new questions based on selection
    const newQuestions = generateBatch(10, selectedTopic === 'MIX' ? undefined : selectedTopic);
    setQuestions(newQuestions);
    setScore(0);
    setCurrentQIndex(0);
    setGameState('PLAYING');
    resetQuestion();
  };

  const resetQuestion = () => {
    setTimeLeft(15);
    timeLeftRef.current = 15;
    setFeedback(null);
  };

  const handleAnswer = useCallback((index: number) => {
    if (!questions[currentQIndex]) return;

    const currentCorrect = questions[currentQIndex].correctAnswer;
    const isCorrect = index === currentCorrect;

    if (isCorrect) {
      setScore(prevScore => prevScore + (timeLeftRef.current * 100));
    }
    
    setFeedback(isCorrect ? 'CORRECT' : 'WRONG');

    if (timerRef.current) clearInterval(timerRef.current);

    nextQTimerRef.current = setTimeout(() => {
      if (currentQIndex < questions.length - 1) {
        setCurrentQIndex(prev => prev + 1);
        resetQuestion();
      } else {
        setGameState('RESULT');
      }
    }, 2500); // Slightly longer delay to read explanation
  }, [currentQIndex, questions]);

  useEffect(() => {
    if (gameState === 'PLAYING' && !feedback) {
      if (timerRef.current) clearInterval(timerRef.current);

      timerRef.current = setInterval(() => {
        timeLeftRef.current -= 1;
        setTimeLeft(timeLeftRef.current);

        if (timeLeftRef.current <= 0) {
            if (timerRef.current) clearInterval(timerRef.current);
            handleAnswer(-1);
        }
      }, 1000);
    }
    
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [gameState, feedback, handleAnswer]); 

  if (gameState === 'SELECT') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-4">
        <h2 className="text-5xl font-sans font-bold mb-4 text-neon-purple drop-shadow-lg">SELECT ARENA</h2>
        <p className="text-gray-500 mb-8 font-mono text-sm uppercase">Choose a context for your battle</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl w-full">
          <button 
              onClick={() => selectQuiz('MIX')}
              className="p-6 bg-neon-purple/20 border border-neon-purple text-white rounded-xl hover:bg-neon-purple hover:scale-105 transition-all shadow-[0_0_20px_rgba(188,19,254,0.3)] col-span-2 md:col-span-1 md:row-span-2 flex flex-col items-center justify-center gap-4"
            >
              <RefreshCw size={40} className="animate-spin-slow" />
              <span className="font-bold font-display text-xl">CHAOS MODE (MIX)</span>
          </button>
          
          {availableTopics.map((t) => (
            <button 
              key={t.id}
              onClick={() => selectQuiz(t.id)}
              className="p-6 bg-white/5 border border-white/10 hover:border-neon-purple/50 hover:bg-white/10 rounded-xl transition-all group relative overflow-hidden flex flex-col items-center justify-center gap-2"
            >
              <div className="absolute inset-0 bg-neon-purple/5 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom"></div>
              <h3 className="text-sm font-bold text-gray-200 group-hover:text-white relative z-10 font-mono tracking-wider">{t.name.toUpperCase()}</h3>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (gameState === 'START') {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center">
        <h2 className="text-6xl font-sans font-bold mb-4 text-neon-purple drop-shadow-lg">{selectedTopic === 'MIX' ? 'CHAOS MODE' : getAvailableTopics().find(t => t.id === selectedTopic)?.name.toUpperCase()}</h2>
        <p className="text-xl mb-8 font-mono text-gray-500 dark:text-gray-400">
          Generating live neural pathway test...
        </p>
        <button onClick={startGame} className="px-12 py-4 bg-neon-purple hover:bg-purple-600 rounded-full text-white text-2xl font-bold transition-transform hover:scale-105 shadow-[0_0_30px_#791E94] flex items-center gap-3">
          <Play fill="currentColor" /> {lang === Language.EN ? "INITIATE" : "START"}
        </button>
        <button onClick={() => setGameState('SELECT')} className="mt-8 text-gray-500 hover:text-white underline text-sm">
           Abort Mission
        </button>
      </div>
    );
  }

  if (gameState === 'RESULT') {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center animate-fadeIn">
        <Trophy size={80} className="text-neon-yellow mb-6 animate-bounce" />
        <h2 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">SCORE: {score}</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8">MAX POSSIBLE: 15000</p>
        <div className="flex gap-4">
            <button onClick={startGame} className="px-8 py-3 border border-gray-900 dark:border-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black rounded transition-colors text-gray-900 dark:text-white font-bold">
            PLAY AGAIN
            </button>
            <button onClick={() => setGameState('SELECT')} className="px-8 py-3 bg-neon-purple/20 text-neon-purple border border-neon-purple hover:bg-neon-purple hover:text-white rounded transition-colors font-bold">
            CHANGE ARENA
            </button>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQIndex];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-8 font-mono text-xl text-gray-800 dark:text-white transition-colors">
        <div className="bg-white/50 dark:bg-white/10 px-4 py-2 rounded flex items-center gap-2">
           <div className="w-3 h-3 bg-neon-blue rounded-full"></div>
           Q: {currentQIndex + 1}/{questions.length}
        </div>
        <div className="flex items-center gap-2 text-neon-purple dark:text-neon-yellow">
           <Timer /> {timeLeft}s
        </div>
        <div className="bg-white/50 dark:bg-white/10 px-4 py-2 rounded">PTS: {score}</div>
      </div>

      <div className="glass-panel p-10 rounded-2xl mb-8 text-center min-h-[200px] flex items-center justify-center relative overflow-hidden transition-colors">
        {feedback && (
          <div className={`absolute inset-0 z-10 flex items-center justify-center bg-white/95 dark:bg-black/90 backdrop-blur-md ${feedback === 'CORRECT' ? 'text-neon-green' : 'text-neon-pink'}`}>
            <div className="text-center p-6 animate-fadeIn">
               {feedback === 'CORRECT' ? <CheckCircle size={60} className="mx-auto mb-2"/> : <XCircle size={60} className="mx-auto mb-2"/>}
               <h2 className="text-4xl font-bold">{feedback}</h2>
               <p className="text-gray-800 dark:text-white text-lg mt-4 max-w-md mx-auto font-sans leading-relaxed border-l-4 border-neon-blue pl-4">
                 {currentQ.explanation}
               </p>
            </div>
          </div>
        )}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors leading-relaxed">
          {currentQ.question}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {currentQ.options.map((opt, idx) => {
          const colors = [
            'bg-red-500 hover:bg-red-600 border-red-700',
            'bg-blue-500 hover:bg-blue-600 border-blue-700',
            'bg-yellow-500 hover:bg-yellow-600 border-yellow-700',
            'bg-green-500 hover:bg-green-600 border-green-700'
          ];
          const shapes = ['▲', '◆', '●', '■'];
          return (
            <button
              key={idx}
              disabled={feedback !== null}
              onClick={() => handleAnswer(idx)}
              className={`${colors[idx]} h-24 rounded-xl border-b-4 text-white text-2xl font-bold shadow-lg transform transition-transform active:scale-95 active:border-b-0 active:translate-y-1 flex items-center px-6 group`}
            >
              <span className="mr-4 opacity-50 text-3xl group-hover:scale-125 transition-transform">{shapes[idx]}</span>
              <span className="text-left drop-shadow-md">{opt}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default KahootMode;