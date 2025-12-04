import React, { useState, useEffect, useRef } from 'react';
import { VOCABULARY_LIST } from '../constants';
import { Language } from '../types';
import { BrainCircuit, RotateCcw, Trophy } from 'lucide-react';

interface Props {
  lang: Language;
}

interface Card {
  id: number;
  content: string;
  type: 'WORD' | 'DEF';
  pairId: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const MemoryMode: React.FC<Props> = ({ lang }) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState<Card | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<Card | null>(null);
  const [disabled, setDisabled] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Initialize Game
  const shuffleCards = () => {
    // Select 6 random items
    const shuffledVocab = [...VOCABULARY_LIST].sort(() => 0.5 - Math.random()).slice(0, 6);
    
    // Create pairs (Word + Definition)
    const cardPairs: Card[] = [];
    shuffledVocab.forEach((item, index) => {
      // Card 1: The Word
      cardPairs.push({
        id: index * 2,
        content: item.word,
        type: 'WORD',
        pairId: item.id,
        isFlipped: false,
        isMatched: false
      });
      // Card 2: The Definition (or translation depending on difficulty, stick to def for now)
      cardPairs.push({
        id: index * 2 + 1,
        content: lang === Language.EN ? item.definition : (lang === Language.RU ? item.translation_ru : item.translation_uz),
        type: 'DEF',
        pairId: item.id,
        isFlipped: false,
        isMatched: false
      });
    });

    setCards(cardPairs.sort(() => Math.random() - 0.5));
    setTurns(0);
    setChoiceOne(null);
    setChoiceTwo(null);
    setGameWon(false);
    setDisabled(false);
  };

  useEffect(() => {
    shuffleCards();
  }, [lang]);

  // Handle Choice
  const handleChoice = (card: Card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // Compare Choices
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.pairId === choiceTwo.pairId) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.pairId === choiceOne.pairId) {
              return { ...card, isMatched: true };
            }
            return card;
          });
        });
        resetTurn();
      } else {
        timeoutRef.current = setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // Check Win Condition
  useEffect(() => {
    if (cards.length > 0 && cards.every(card => card.isMatched)) {
      setGameWon(true);
    }
  }, [cards]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prev => prev + 1);
    setDisabled(false);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl md:text-6xl font-display font-black text-gray-900 dark:text-white mb-2 tracking-tighter transition-colors">
            MEMORY <span className="text-neon-pink">CORE</span>
          </h2>
          <p className="font-mono text-neon-blue uppercase tracking-widest flex items-center gap-2">
            <BrainCircuit size={16} /> Neural Matching Protocol
          </p>
        </div>
        <div className="flex items-center gap-6 mt-4 md:mt-0">
          <div className="bg-white/50 dark:bg-white/5 border border-gray-300 dark:border-white/10 px-6 py-3 rounded text-xl font-mono text-gray-800 dark:text-white transition-colors">
            TURNS: <span className="text-neon-pink dark:text-neon-yellow font-bold">{turns}</span>
          </div>
          <button 
            onClick={shuffleCards} 
            className="bg-neon-blue/20 hover:bg-neon-blue/40 border border-neon-blue text-neon-blue p-3 rounded transition-colors"
          >
            <RotateCcw />
          </button>
        </div>
      </div>

      {gameWon ? (
        <div className="text-center py-20 animate-float glass-panel rounded-3xl border-neon-green">
          <Trophy size={80} className="mx-auto text-neon-green mb-6 shadow-glow" />
          <h2 className="text-5xl font-display font-bold text-gray-900 dark:text-white mb-4 transition-colors">SYSTEM SYNCHRONIZED</h2>
          <p className="text-xl font-mono text-gray-600 dark:text-gray-400 mb-8">Neural pathways established in {turns} turns.</p>
          <button 
            onClick={shuffleCards}
            className="px-8 py-4 bg-neon-green text-black font-bold font-display tracking-widest text-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,255,148,0.5)]"
          >
            REBOOT SYSTEM
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {cards.map(card => (
            <div 
              key={card.id} 
              className="relative aspect-square cursor-pointer perspective-1000 group"
              onClick={() => {
                if (!disabled && !card.isFlipped && !card.isMatched) {
                  handleChoice(card);
                }
              }}
            >
              <div className={`w-full h-full relative transform-style-3d transition-all duration-500 ${card.isFlipped || card === choiceOne || card === choiceTwo || card.isMatched ? 'rotate-y-180' : ''}`}>
                
                {/* Back of Card (Hidden) */}
                <div className="absolute inset-0 backface-hidden bg-white dark:bg-[#0A0A0F] border-2 border-gray-200 dark:border-neon-blue/30 rounded-xl flex items-center justify-center group-hover:border-neon-blue transition-colors shadow-md dark:shadow-[0_0_20px_rgba(0,243,255,0.05)]">
                  <BrainCircuit className="text-gray-300 dark:text-neon-blue/20 w-12 h-12 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-2 border border-gray-100 dark:border-white/5 rounded-lg"></div>
                </div>

                {/* Front of Card (Visible when flipped) */}
                <div className={`absolute inset-0 backface-hidden rotate-y-180 rounded-xl flex items-center justify-center p-4 text-center border-2 shadow-lg dark:shadow-[0_0_30px_rgba(0,0,0,0.5)] ${
                  card.isMatched 
                    ? 'bg-neon-green/10 border-neon-green text-neon-green' 
                    : 'bg-gray-100 dark:bg-[#1a1a20] border-gray-300 dark:border-white/20 text-gray-900 dark:text-white'
                }`}>
                  <span className={`font-tech ${card.type === 'WORD' ? 'text-xl md:text-2xl font-bold' : 'text-xs md:text-sm text-gray-600 dark:text-gray-300'}`}>
                    {card.content}
                  </span>
                  {card.isMatched && (
                    <div className="absolute top-2 right-2 w-2 h-2 bg-neon-green rounded-full shadow-[0_0_10px_#00FF94]"></div>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MemoryMode;