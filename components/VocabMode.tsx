import React, { useState } from 'react';
import { VOCABULARY_LIST } from '../constants';
import { Language, VocabItem } from '../types';
import { Search, Volume2, Database, Wand2, Loader, Image as ImageIcon } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface Props {
  lang: Language;
}

const VocabMode: React.FC<Props> = ({ lang }) => {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState<Record<string, string>>({});
  const [generating, setGenerating] = useState<Record<string, boolean>>({});
  
  const filtered = VOCABULARY_LIST.filter(v => v.word.toLowerCase().includes(search.toLowerCase()));

  const generateVisual = async (item: VocabItem) => {
    setGenerating(prev => ({ ...prev, [item.id]: true }));

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `Create a futuristic, 3D rendered icon or illustration for the vocabulary word "${item.word}". Definition: "${item.definition}". Style: Cyberpunk, neon glowing lights, dark background, glossy 3D materials, high resolution, digital art, single object focus.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [{ text: prompt }]
        }
      });

      const candidate = response.candidates?.[0];
      if (candidate?.content?.parts) {
        for (const part of candidate.content.parts) {
          if (part.inlineData) {
            const imageUrl = `data:image/png;base64,${part.inlineData.data}`;
            setImages(prev => ({ ...prev, [item.id]: imageUrl }));
            break;
          }
        }
      }
    } catch (error) {
      console.error("Failed to generate image:", error);
      alert("Neural rendering failed. Please try again.");
    } finally {
      setGenerating(prev => ({ ...prev, [item.id]: false }));
    }
  };

  return (
    <div className="max-w-[1600px] mx-auto p-4 md:p-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div className="mb-6 md:mb-0">
          <h2 className="text-5xl md:text-7xl font-display font-black text-gray-900 dark:text-white mb-2 tracking-tighter transition-colors">
            LEXICON <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-emerald-600">DB</span>
          </h2>
          <p className="text-neon-green font-mono text-sm tracking-[0.3em] uppercase flex items-center gap-2">
            <Database size={14} /> Unit 1 • Core 3000 • Sector B2
          </p>
        </div>
        
        <div className="relative w-full md:w-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neon-green" size={20} />
          <input 
            type="text" 
            placeholder="SEARCH_DATABASE..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-96 bg-white/80 dark:bg-black/50 border border-gray-300 dark:border-neon-green/30 rounded-none pl-12 pr-6 py-4 font-mono text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-600 focus:border-neon-green focus:shadow-[0_0_20px_rgba(0,255,148,0.2)] outline-none transition-all uppercase backdrop-blur"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((item) => (
          <div key={item.id} className="group holo-card glass-panel p-6 rounded-xl dark:rounded-none border-l-2 border-l-neon-green relative overflow-hidden flex flex-col">
            
            {/* Holographic shine effect */}
            <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 dark:opacity-10 left-[-100%] group-hover:animate-shine pointer-events-none" />

            <div className="absolute top-0 right-0 p-2 bg-black/5 dark:bg-white/5 text-[10px] font-mono text-neon-green tracking-wider uppercase z-10">
              {item.pos}
            </div>
            
            {/* Visual Generator Area */}
            <div className="w-full h-48 mb-6 bg-gray-100 dark:bg-black/40 border border-gray-200 dark:border-white/5 relative overflow-hidden group-hover:border-neon-green/30 transition-colors rounded-lg dark:rounded-none">
              {images[item.id] ? (
                <div className="w-full h-full relative">
                  <img src={images[item.id]} alt={item.word} className="w-full h-full object-cover animate-fadeIn" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
                  <button 
                    onClick={() => generateVisual(item)}
                    className="absolute top-2 right-2 p-2 bg-black/60 rounded-full text-white/50 hover:text-neon-green hover:bg-black transition-colors"
                    title="Regenerate"
                  >
                    <Wand2 size={12} />
                  </button>
                </div>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center">
                  {generating[item.id] ? (
                    <div className="flex flex-col items-center text-neon-green">
                      <Loader size={24} className="animate-spin mb-2" />
                      <span className="text-[10px] font-mono animate-pulse">NEURAL RENDERING...</span>
                    </div>
                  ) : (
                    <button 
                      onClick={() => generateVisual(item)}
                      className="group/btn flex flex-col items-center gap-2 text-gray-500 hover:text-neon-green transition-colors"
                    >
                      <div className="p-3 border border-dashed border-gray-400 dark:border-gray-600 rounded-full group-hover/btn:border-neon-green group-hover/btn:shadow-[0_0_15px_rgba(0,255,148,0.3)] transition-all">
                         <Wand2 size={20} />
                      </div>
                      <span className="text-[10px] font-mono tracking-widest uppercase">Generate 3D Visual</span>
                    </button>
                  )}
                </div>
              )}
            </div>

            <div className="mb-4 relative z-10">
               <h3 className="text-3xl font-display font-bold text-gray-900 dark:text-white group-hover:text-neon-green transition-colors">{item.word}</h3>
               <div className="flex items-center gap-3 text-gray-500 font-mono text-xs mt-1">
                  <span>/{item.pronunciation}/</span>
                  <Volume2 size={12} className="cursor-pointer hover:text-gray-900 dark:hover:text-white" />
               </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed font-sans relative z-10">
              {item.definition}
            </p>

            <div className="bg-gray-100 dark:bg-black/40 border-l border-gray-300 dark:border-white/10 pl-3 py-2 text-xs italic text-gray-500 mb-6 font-mono relative z-10">
              "{item.example}"
            </div>

            {(lang === Language.RU || lang === Language.UZ) && (
              <div className="mt-auto pt-4 border-t border-gray-200 dark:border-white/5 flex justify-between items-center relative z-10">
                <span className="text-[10px] uppercase text-gray-600 font-mono tracking-widest">TRANSLATION</span>
                <span className={`font-tech font-bold text-lg ${lang === Language.RU ? 'text-neon-pink' : 'text-neon-blue'}`}>
                  {lang === Language.RU ? item.translation_ru : item.translation_uz}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VocabMode;