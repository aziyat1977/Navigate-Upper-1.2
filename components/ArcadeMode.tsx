import React, { useState, useMemo } from 'react';
import { Joystick, Trophy, Play, ArrowLeft, Star, Zap, Skull, ShieldCheck, AlertTriangle } from 'lucide-react';

// TYPES
type Difficulty = 'EASY' | 'MEDIUM' | 'HARD';

interface Question {
  id: string;
  gameId: number;
  difficulty: Difficulty;
  text: string;
  answer: string;
  distractor: string;
  clue: string;
}

// EXPANDED DATA POOL
const MASTER_QUESTION_POOL: Question[] = [
  // --- GAME 1: GRINDER VS COLLECTOR (Simple vs Continuous) ---
  // EASY
  { id: '1-e-1', gameId: 1, difficulty: 'EASY', text: "I have read ___ books today.", answer: "3", distractor: "all day", clue: "Quantity (Simple)" },
  { id: '1-e-2', gameId: 1, difficulty: 'EASY', text: "I have been reading ___.", answer: "all day", distractor: "3 books", clue: "Duration (Continuous)" },
  { id: '1-e-3', gameId: 1, difficulty: 'EASY', text: "She has eaten ___ apples.", answer: "four", distractor: "since lunch", clue: "Countable Result" },
  { id: '1-e-4', gameId: 1, difficulty: 'EASY', text: "He has been running ___.", answer: "since 2 PM", distractor: "5 kilometers", clue: "Ongoing Activity" },
  { id: '1-e-5', gameId: 1, difficulty: 'EASY', text: "They have won the cup ___.", answer: "twice", distractor: "for years", clue: "Frequency" },
  { id: '1-e-6', gameId: 1, difficulty: 'EASY', text: "We have visited Paris ___.", answer: "three times", distractor: "all summer", clue: "Frequency" },
  { id: '1-e-7', gameId: 1, difficulty: 'EASY', text: "I've been cooking ___.", answer: "for hours", distractor: "dinner", clue: "Duration focus" },
  // MEDIUM
  { id: '1-m-1', gameId: 1, difficulty: 'MEDIUM', text: "Look at the car! I ___ it.", answer: "have washed", distractor: "have been washing", clue: "Finished Result" },
  { id: '1-m-2', gameId: 1, difficulty: 'MEDIUM', text: "You are wet! ___ in the rain?", answer: "Have you been walking", distractor: "Have you walked", clue: "Side effect of activity" },
  { id: '1-m-3', gameId: 1, difficulty: 'MEDIUM', text: "I ___ my keys. Can you help me look?", answer: "have lost", distractor: "have been losing", clue: "Instant event" },
  { id: '1-m-4', gameId: 1, difficulty: 'MEDIUM', text: "She ___ 10 emails this morning.", answer: "has sent", distractor: "has been sending", clue: "Completed Quantity" },
  { id: '1-m-5', gameId: 1, difficulty: 'MEDIUM', text: "Sorry I'm late, I ___ on a call.", answer: "have been talking", distractor: "have talked", clue: "Recent activity causing delay" },
  { id: '1-m-6', gameId: 1, difficulty: 'MEDIUM', text: "How long ___ Japanese?", answer: "have you been learning", distractor: "have you learned", clue: "Duration implies continuous" },
  // HARD
  { id: '1-h-1', gameId: 1, difficulty: 'HARD', text: "I ___ him for twenty years.", answer: "have known", distractor: "have been knowing", clue: "Stative Verb (Know)" },
  { id: '1-h-2', gameId: 1, difficulty: 'HARD', text: "She ___ the report yet.", answer: "hasn't finished", distractor: "hasn't been finishing", clue: "Negative Result" },
  { id: '1-h-3', gameId: 1, difficulty: 'HARD', text: "My hands are sticky. I ___ dough.", answer: "have been kneading", distractor: "have kneaded", clue: "Evidence of activity" },
  { id: '1-h-4', gameId: 1, difficulty: 'HARD', text: "The kitchen is a mess because I ___.", answer: "have been cooking", distractor: "have cooked", clue: "Mess = Activity focus" },
  { id: '1-h-5', gameId: 1, difficulty: 'HARD', text: "I ___ to like jazz music recently.", answer: "have come", distractor: "have been coming", clue: "Change of state" },
  { id: '1-h-6', gameId: 1, difficulty: 'HARD', text: "He ___ that car since 2010.", answer: "has had", distractor: "has been having", clue: "Stative Verb (Possession)" },

  // --- GAME 2: THE ALIBI (Evidence Matching) ---
  // EASY
  { id: '2-e-1', gameId: 2, difficulty: 'EASY', text: "Why are you panting?", answer: "I've been running", distractor: "I've run", clue: "Physical sensation" },
  { id: '2-e-2', gameId: 2, difficulty: 'EASY', text: "The kitchen is spotless!", answer: "I've cleaned it", distractor: "I've been cleaning it", clue: "Completed result" },
  { id: '2-e-3', gameId: 2, difficulty: 'EASY', text: "You are covered in flour.", answer: "I've been baking", distractor: "I've baked", clue: "Messy process" },
  { id: '2-e-4', gameId: 2, difficulty: 'EASY', text: "The report is on your desk.", answer: "I've finished it", distractor: "I've been finishing it", clue: "Object is ready" },
  { id: '2-e-5', gameId: 2, difficulty: 'EASY', text: "Why are your eyes red?", answer: "I've been crying", distractor: "I've cried", clue: "Visible side effect" },
  // MEDIUM
  { id: '2-m-1', gameId: 2, difficulty: 'MEDIUM', text: "The ground is wet.", answer: "It's been raining", distractor: "It's rained", clue: "Recent activity evidence" },
  { id: '2-m-2', gameId: 2, difficulty: 'MEDIUM', text: "The car is clean and shiny.", answer: "I've washed it", distractor: "I've been washing it", clue: "Final state achieved" },
  { id: '2-m-3', gameId: 2, difficulty: 'MEDIUM', text: "There is paint in your hair.", answer: "I've been painting", distractor: "I've painted", clue: "Accidental evidence" },
  { id: '2-m-4', gameId: 2, difficulty: 'MEDIUM', text: "The portrait is finished.", answer: "I've painted it", distractor: "I've been painting it", clue: "Completion" },
  { id: '2-m-5', gameId: 2, difficulty: 'MEDIUM', text: "Why is the TV on?", answer: "I've been watching it", distractor: "I've watched it", clue: "Recent unfinished state" },
  // HARD
  { id: '2-h-1', gameId: 2, difficulty: 'HARD', text: "You look sunburnt.", answer: "I've been lying in the sun", distractor: "I've lain in the sun", clue: "Process causing state" },
  { id: '2-h-2', gameId: 2, difficulty: 'HARD', text: "The bottle is empty.", answer: "Who has drunk the milk?", distractor: "Who has been drinking the milk?", clue: "Total consumption" },
  { id: '2-h-3', gameId: 2, difficulty: 'HARD', text: "There's only half the bottle left.", answer: "Who has been drinking the milk?", distractor: "Who has drunk the milk?", clue: "Partial consumption" },
  { id: '2-h-4', gameId: 2, difficulty: 'HARD', text: "My project is finally done.", answer: "I've been working on it all week", distractor: "I've worked on it all week", clue: "Emphasizing the long effort" },
  { id: '2-h-5', gameId: 2, difficulty: 'HARD', text: "Why are you limping?", answer: "I've twisted my ankle", distractor: "I've been twisting my ankle", clue: "Single event injury" },

  // --- GAME 3: TIMELINE TWITCH (Keywords) ---
  // EASY
  { id: '3-e-1', gameId: 3, difficulty: 'EASY', text: "I haven't finished ___.", answer: "yet", distractor: "lately", clue: "Negative statement end" },
  { id: '3-e-2', gameId: 3, difficulty: 'EASY', text: "I've been working ___ 3 hours.", answer: "for", distractor: "since", clue: "Duration period" },
  { id: '3-e-3', gameId: 3, difficulty: 'EASY', text: "She has ___ left.", answer: "just", distractor: "ever", clue: "Very recent past" },
  { id: '3-e-4', gameId: 3, difficulty: 'EASY', text: "Have you ___ been to Spain?", answer: "ever", distractor: "since", clue: "Life experience query" },
  { id: '3-e-5', gameId: 3, difficulty: 'EASY', text: "I've been driving ___ 8am.", answer: "since", distractor: "for", clue: "Start point" },
  // MEDIUM
  { id: '3-m-1', gameId: 3, difficulty: 'MEDIUM', text: "I have ___ seen that movie.", answer: "already", distractor: "yet", clue: "Positive confirmation" },
  { id: '3-m-2', gameId: 3, difficulty: 'MEDIUM', text: "I have ___ eaten bugs.", answer: "never", distractor: "ever", clue: "Negative experience" },
  { id: '3-m-3', gameId: 3, difficulty: 'MEDIUM', text: "We haven't met ___.", answer: "before", distractor: "ago", clue: "Time reference" },
  { id: '3-m-4', gameId: 3, difficulty: 'MEDIUM', text: "He has read three books ___.", answer: "so far", distractor: "yesterday", clue: "Unfinished time period" },
  { id: '3-m-5', gameId: 3, difficulty: 'MEDIUM', text: "Have you finished ___?", answer: "already", distractor: "yet", clue: "Surprise at speed" },
  // HARD
  { id: '3-h-1', gameId: 3, difficulty: 'HARD', text: "She has been moody ___.", answer: "lately", distractor: "yesterday", clue: "Recent habit" },
  { id: '3-h-2', gameId: 3, difficulty: 'HARD', text: "I spoke to him a minute ___.", answer: "ago", distractor: "before", clue: "Past Simple Trigger" },
  { id: '3-h-3', gameId: 3, difficulty: 'HARD', text: "It's the first time I ___ sushi.", answer: "have eaten", distractor: "eat", clue: "Experience pattern" },
  { id: '3-h-4', gameId: 3, difficulty: 'HARD', text: "I haven't seen her ___ Monday.", answer: "since", distractor: "from", clue: "Time origin" },
  { id: '3-h-5', gameId: 3, difficulty: 'HARD', text: "We have ___ to decide.", answer: "yet", distractor: "just", clue: "Formal 'have yet to'" }
];

const ArcadeMode: React.FC = () => {
  const [gameState, setGameState] = useState<'MENU' | 'DIFFICULTY' | 'PLAYING' | 'GAME_OVER'>('MENU');
  const [gameId, setGameId] = useState<number>(0);
  const [difficulty, setDifficulty] = useState<Difficulty>('EASY');
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<{ msg: string; type: 'success' | 'error' } | null>(null);
  const [usedQuestionIds, setUsedQuestionIds] = useState<Set<string>>(new Set());

  // --- SAFE HOOK EXECUTION ---
  // Hooks must render unconditionally. We guard the values inside, not the hook call itself.
  
  const currentQ = useMemo(() => {
    if (gameState !== 'PLAYING' || currentQuestions.length === 0) return null;
    return currentQuestions[currentIndex];
  }, [gameState, currentQuestions, currentIndex]);

  const options = useMemo(() => {
    if (!currentQ) return [];
    // Randomize options: 50% chance to swap
    return Math.random() > 0.5 
      ? [currentQ.answer, currentQ.distractor] 
      : [currentQ.distractor, currentQ.answer];
  }, [currentQ]);

  // --- LOGIC ---

  const selectGame = (id: number) => {
    setGameId(id);
    setGameState('DIFFICULTY');
  };

  const startGame = (diff: Difficulty) => {
    setDifficulty(diff);
    
    // 1. Get unused questions for this specific game & difficulty
    let available = MASTER_QUESTION_POOL.filter(
      q => q.gameId === gameId && q.difficulty === diff && !usedQuestionIds.has(q.id)
    );

    // 2. AUTO-RESET LOGIC: If we ran out of questions, recycle them
    if (available.length < 5) {
      // Find all questions for this category to remove them from 'used' list
      const categoryQuestionIds = MASTER_QUESTION_POOL.filter(
        q => q.gameId === gameId && q.difficulty === diff
      ).map(q => q.id);
      
      const newUsed = new Set(usedQuestionIds);
      categoryQuestionIds.forEach(id => newUsed.delete(id));
      setUsedQuestionIds(newUsed);

      // Re-fetch now that they are freed
      available = MASTER_QUESTION_POOL.filter(
         q => q.gameId === gameId && q.difficulty === diff
      );
    }

    // 3. Select 5 random questions
    const sessionQuestions = available.sort(() => Math.random() - 0.5).slice(0, 5);
    
    setCurrentQuestions(sessionQuestions);
    setCurrentIndex(0);
    setScore(0);
    setGameState('PLAYING');
    setFeedback(null);
  };

  const handleAnswer = (selected: string) => {
    if (!currentQ) return;
    
    const isCorrect = selected === currentQ.answer;

    // Mark as used
    setUsedQuestionIds(prev => new Set(prev).add(currentQ.id));

    if (isCorrect) {
      const multiplier = difficulty === 'EASY' ? 10 : difficulty === 'MEDIUM' ? 20 : 30;
      setScore(prev => prev + multiplier);
      setFeedback({ msg: "✅ CORRECT!", type: 'success' });
    } else {
      setFeedback({ msg: "❌ MISSED IT!", type: 'error' });
    }

    setTimeout(() => {
      setFeedback(null);
      if (currentIndex < currentQuestions.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        setGameState('GAME_OVER');
      }
    }, 1200);
  };

  const getDifficultyColor = (d: Difficulty) => {
    if (d === 'EASY') return 'text-neon-green border-neon-green';
    if (d === 'MEDIUM') return 'text-neon-blue border-neon-blue';
    return 'text-neon-pink border-neon-pink';
  };

  const getDifficultyIcon = (d: Difficulty) => {
    if (d === 'EASY') return <Star size={24} />;
    if (d === 'MEDIUM') return <Zap size={24} />;
    return <Skull size={24} />;
  };

  // --- VIEWS ---

  if (gameState === 'MENU') {
    return (
      <div className="max-w-5xl mx-auto p-4 md:p-8 flex flex-col items-center animate-fadeIn">
        <h2 className="text-5xl md:text-7xl font-display font-black text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-purple-500 to-neon-blue animate-pulse">
          GRAMMAR ARCADE
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {[
            { id: 1, title: "Grinder vs Collector", desc: "Simple vs Continuous", icon: ShieldCheck, color: "neon-green" },
            { id: 2, title: "The Alibi", desc: "Evidence Matching", icon: AlertTriangle, color: "neon-yellow" },
            { id: 3, title: "Timeline Twitch", desc: "Speed Keywords", icon: Zap, color: "neon-pink" }
          ].map((game) => (
            <button
              key={game.id}
              onClick={() => selectGame(game.id)}
              className="group relative h-80 glass-panel p-8 rounded-2xl border border-white/10 hover:border-white/40 transition-all hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] flex flex-col items-center justify-between text-center overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-b from-${game.color}/0 via-${game.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10 p-4 bg-white/5 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <game.icon size={48} className={`text-${game.color}`} />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2 font-display">{game.title}</h3>
                <p className="text-gray-400 font-mono text-xs uppercase tracking-wider">{game.desc}</p>
              </div>

              <div className="relative z-10 w-full mt-6 py-3 border border-gray-600 rounded-lg text-gray-400 text-sm font-bold uppercase tracking-widest group-hover:bg-white group-hover:text-black group-hover:border-white transition-all">
                Select Game
              </div>
            </button>
          ))}
        </div>
        
        <div className="mt-8 text-xs font-mono text-gray-500">
            QUESTIONS PLAYED THIS SESSION: {usedQuestionIds.size}
        </div>
      </div>
    );
  }

  if (gameState === 'DIFFICULTY') {
    return (
        <div className="max-w-3xl mx-auto p-4 md:p-8 flex flex-col items-center animate-fadeIn">
            <button onClick={() => setGameState('MENU')} className="self-start flex items-center gap-2 text-gray-500 hover:text-white mb-8 font-mono text-sm uppercase">
                <ArrowLeft size={16} /> Back to Arcade
            </button>

            <h2 className="text-4xl font-display font-bold text-white mb-12">SELECT DIFFICULTY</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                {[
                    { id: 'EASY', label: 'RECRUIT', icon: Star, color: 'text-neon-green', border: 'border-neon-green', bg: 'hover:bg-neon-green/10' },
                    { id: 'MEDIUM', label: 'VETERAN', icon: Zap, color: 'text-neon-blue', border: 'border-neon-blue', bg: 'hover:bg-neon-blue/10' },
                    { id: 'HARD', label: 'LEGEND', icon: Skull, color: 'text-neon-pink', border: 'border-neon-pink', bg: 'hover:bg-neon-pink/10' }
                ].map((diff) => (
                    <button
                        key={diff.id}
                        onClick={() => startGame(diff.id as Difficulty)}
                        className={`group relative h-64 glass-panel border border-white/10 ${diff.bg} hover:border-opacity-100 transition-all flex flex-col items-center justify-center gap-6 rounded-xl`}
                    >
                        <div className={`p-4 rounded-full border-2 ${diff.border} ${diff.color} group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(0,0,0,0.5)]`}>
                            <diff.icon size={40} />
                        </div>
                        <div className="text-center">
                            <h3 className={`text-xl font-bold font-display tracking-widest ${diff.color}`}>{diff.label}</h3>
                            <p className="text-xs text-gray-500 font-mono mt-2">
                                {MASTER_QUESTION_POOL.filter(q => q.gameId === gameId && q.difficulty === diff.id).length} Qs Available
                            </p>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
  }

  if (gameState === 'GAME_OVER') {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-4 animate-fadeIn">
        <Trophy size={80} className="text-neon-yellow mb-6 animate-bounce" />
        <h2 className="text-6xl font-display font-black text-white mb-4 tracking-tighter">MISSION COMPLETE</h2>
        
        <div className="glass-panel p-8 rounded-2xl border border-neon-blue/30 text-center min-w-[300px] mb-8">
            <div className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-2">Final Score</div>
            <div className="text-5xl font-mono text-neon-blue font-bold text-glow">{score}</div>
        </div>

        <div className="flex gap-4">
          <button 
            onClick={() => setGameState('MENU')}
            className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded font-bold text-white transition-all font-mono"
          >
            MAIN MENU
          </button>
          <button 
            onClick={() => startGame(difficulty)}
            className="px-8 py-3 bg-neon-pink hover:bg-neon-pink/80 text-white rounded font-bold shadow-[0_0_20px_rgba(255,0,85,0.4)] transition-all flex items-center gap-2 font-mono"
          >
            <Play size={18} fill="currentColor" /> NEXT ROUND
          </button>
        </div>
      </div>
    );
  }

  // --- GAMEPLAY VIEW ---

  if (!currentQ) return null;

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-8 animate-fadeIn">
      {/* HUD */}
      <div className="flex justify-between items-center mb-8 font-mono text-sm uppercase tracking-widest text-gray-400 bg-black/40 p-4 rounded-lg backdrop-blur border border-white/10">
        <button onClick={() => setGameState('MENU')} className="hover:text-white flex items-center gap-2">
           <ArrowLeft size={16} /> Quit
        </button>
        <div className="flex items-center gap-6">
           <div className={`flex items-center gap-2 px-3 py-1 rounded border ${getDifficultyColor(difficulty)} bg-opacity-10 bg-black`}>
              {getDifficultyIcon(difficulty)} {difficulty}
           </div>
           <div>
             Q: <span className="text-white">{currentIndex + 1}</span><span className="text-gray-600">/{currentQuestions.length}</span>
           </div>
           <div className="text-neon-yellow">PTS: {score}</div>
        </div>
      </div>

      {/* Game Card */}
      <div className="glass-panel p-8 md:p-12 rounded-2xl border border-neon-blue/30 relative overflow-hidden min-h-[400px] flex flex-col justify-center text-center shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        
        <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none"></div>

        <div className="relative z-10">
          <div className="inline-block px-4 py-1 rounded-full bg-neon-pink/10 text-neon-pink text-xs font-mono mb-8 border border-neon-pink/30">
             TIP: {currentQ.clue}
          </div>
          
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-16 leading-relaxed drop-shadow-lg font-display tracking-wide">
            {currentQ.text.includes("___") ? (
                <span>
                    {currentQ.text.split("___")[0]}
                    <span className="inline-block w-24 border-b-4 border-neon-blue mx-2 animate-pulse"></span>
                    {currentQ.text.split("___")[1]}
                </span>
            ) : currentQ.text}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {options.map((opt, idx) => (
              <button
                key={idx}
                disabled={feedback !== null}
                onClick={() => !feedback && handleAnswer(opt)}
                className="py-6 px-6 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neon-blue rounded-xl text-lg md:text-xl font-bold text-white transition-all transform hover:scale-105 active:scale-95 shadow-lg group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-neon-blue/0 group-hover:bg-neon-blue/5 transition-colors"></div>
                <span className="relative z-10">{opt}</span>
              </button>
            ))}
          </div>

          {/* Feedback Overlay */}
          {feedback && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/90 backdrop-blur-md z-20 animate-fadeIn">
              <div className={`text-5xl font-black font-display tracking-tighter ${feedback.type === 'success' ? 'text-neon-green' : 'text-neon-pink'} animate-bounce`}>
                {feedback.msg}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="mt-8 h-1 bg-gray-800 rounded-full overflow-hidden">
        <div 
            className="h-full bg-neon-blue transition-all duration-300 shadow-[0_0_10px_#00F3FF]"
            style={{ width: `${((currentIndex) / currentQuestions.length) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ArcadeMode;