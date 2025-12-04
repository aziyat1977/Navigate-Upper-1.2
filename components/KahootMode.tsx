import React, { useState, useEffect, useCallback, useRef } from 'react';
import { KAHOOT_QUESTIONS } from '../constants';
import { Language } from '../types';
import { Trophy, Timer, XCircle, CheckCircle } from 'lucide-react';

interface Props {
  lang: Language;
}

const KahootMode: React.FC<Props> = ({ lang }) => {
  const [gameState, setGameState] = useState<'START' | 'PLAYING' | 'RESULT'>('START');
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [feedback, setFeedback] = useState<'CORRECT' | 'WRONG' | null>(null);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const nextQTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Clean up timers on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (nextQTimerRef.current) clearTimeout(nextQTimerRef.current);
    };
  }, []);

  const startGame = () => {
    setScore(0);
    setCurrentQIndex(0);
    setGameState('PLAYING');
    resetQuestion();
  };

  const resetQuestion = () => {
    setTimeLeft(15);
    setFeedback(null);
  };

  const handleAnswer = useCallback((index: number) => {
    // Determine correctness. If index is -1, it's a timeout (wrong).
    const currentCorrect = KAHOOT_QUESTIONS[currentQIndex].correctAnswer;
    const isCorrect = index === currentCorrect;

    // Calculate score based on CURRENT timeLeft when function is called
    if (isCorrect) {
      setScore(prevScore => prevScore + (timeLeft * 100));
    }
    
    setFeedback(isCorrect ? 'CORRECT' : 'WRONG');

    // Clear the countdown interval immediately
    if (timerRef.current) clearInterval(timerRef.current);

    // Schedule next question
    nextQTimerRef.current = setTimeout(() => {
      if (currentQIndex < KAHOOT_QUESTIONS.length - 1) {
        setCurrentQIndex(prev => prev + 1);
        resetQuestion();
      } else {
        setGameState('RESULT');
      }
    }, 2000);
  }, [currentQIndex, timeLeft]);

  // Timer Effect
  useEffect(() => {
    if (gameState === 'PLAYING' && !feedback) {
      if (timeLeft > 0) {
        timerRef.current = setInterval(() => {
          setTimeLeft(prev => prev - 1);
        }, 1000);
      } else {
        // Time hit 0, trigger wrong answer
        handleAnswer(-1);
      }
    }
    
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [gameState, feedback, timeLeft, handleAnswer]);

  if (gameState === 'START') {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center">
        <h2 className="text-6xl font-sans font-bold mb-4 text-neon-purple drop-shadow-lg">QUIZ MODE</h2>
        <p className="text-xl mb-8 font-mono text-gray-500 dark:text-gray-400">
          {lang === Language.EN ? "Test your Neural Pathways" : 
           lang === Language.RU ? "Проверьте свои нейронные связи" : 
           "Neyron yo'llaringizni sinab ko'ring"}
        </p>
        <button onClick={startGame} className="px-12 py-4 bg-neon-purple hover:bg-purple-600 rounded-full text-white text-2xl font-bold transition-transform hover:scale-105 shadow-[0_0_30px_#791E94]">
          {lang === Language.EN ? "START ENGINE" : lang === Language.RU ? "ЗАПУСК" : "BOSHLASH"}
        </button>
      </div>
    );
  }

  if (gameState === 'RESULT') {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center animate-fadeIn">
        <Trophy size={80} className="text-neon-yellow mb-6 animate-bounce" />
        <h2 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">SCORE: {score}</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8">MAX POSSIBLE: {KAHOOT_QUESTIONS.length * 1500}</p>
        <button onClick={startGame} className="px-8 py-3 border border-gray-900 dark:border-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black rounded transition-colors text-gray-900 dark:text-white">
          RETRY
        </button>
      </div>
    );
  }

  const currentQ = KAHOOT_QUESTIONS[currentQIndex];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-8 font-mono text-xl text-gray-800 dark:text-white transition-colors">
        <div className="bg-white/50 dark:bg-white/10 px-4 py-2 rounded flex items-center gap-2">
           <div className="w-3 h-3 bg-neon-blue rounded-full"></div>
           Q: {currentQIndex + 1}/{KAHOOT_QUESTIONS.length}
        </div>
        <div className="flex items-center gap-2 text-neon-purple dark:text-neon-yellow">
           <Timer /> {timeLeft}s
        </div>
        <div className="bg-white/50 dark:bg-white/10 px-4 py-2 rounded">PTS: {score}</div>
      </div>

      <div className="glass-panel p-10 rounded-2xl mb-8 text-center min-h-[200px] flex items-center justify-center relative overflow-hidden transition-colors">
        {feedback && (
          <div className={`absolute inset-0 z-10 flex items-center justify-center bg-white/90 dark:bg-black/80 backdrop-blur-sm ${feedback === 'CORRECT' ? 'text-neon-green' : 'text-neon-pink'}`}>
            <div className="text-center p-6">
               {feedback === 'CORRECT' ? <CheckCircle size={60} className="mx-auto mb-2"/> : <XCircle size={60} className="mx-auto mb-2"/>}
               <h2 className="text-4xl font-bold">{feedback}</h2>
               <p className="text-gray-800 dark:text-white text-sm mt-4 max-w-md mx-auto font-sans">{currentQ.explanation}</p>
            </div>
          </div>
        )}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors">{currentQ.question}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {currentQ.options.map((opt, idx) => {
          const colors = [
            'bg-red-500 hover:bg-red-600',
            'bg-blue-500 hover:bg-blue-600',
            'bg-yellow-500 hover:bg-yellow-600',
            'bg-green-500 hover:bg-green-600'
          ];
          const shapes = ['▲', '◆', '●', '■'];
          return (
            <button
              key={idx}
              disabled={feedback !== null}
              onClick={() => handleAnswer(idx)}
              className={`${colors[idx]} h-24 rounded-lg text-white text-2xl font-bold shadow-lg transform transition-transform active:scale-95 flex items-center px-6`}
            >
              <span className="mr-4 opacity-50 text-3xl">{shapes[idx]}</span>
              <span className="text-left drop-shadow-md">{opt}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default KahootMode;