import React, { useState, useRef, useEffect } from 'react';
import { SPEAKING_TOPICS } from '../constants';
import { Language } from '../types';
import { 
  Mic, 
  Square, 
  Play, 
  Download, 
  ChevronLeft, 
  ChevronRight, 
  ArrowLeft,
  Flame,
  MessageSquare,
  Trash2,
  Save
} from 'lucide-react';

interface Props {
  lang: Language;
}

const SpeakingMode: React.FC<Props> = ({ lang }) => {
  // Navigation State
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const [currentQIndex, setCurrentQIndex] = useState(0);

  // Audio State Management
  // key: "topicId-questionIndex" -> value: Blob URL
  const [recordings, setRecordings] = useState<Record<string, string>>({});
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Refs
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioPlayerRef = useRef<HTMLAudioElement | null>(null);
  const generatedUrlsRef = useRef<string[]>([]); // Track for cleanup

  // Derived Data
  const activeCategory = SPEAKING_TOPICS.find(t => t.id === activeCategoryId);
  const currentQuestion = activeCategory ? activeCategory.questions[currentQIndex] : null;
  const currentRecordKey = activeCategoryId && currentQuestion ? `${activeCategoryId}-${currentQIndex}` : null;
  const currentAudioUrl = currentRecordKey ? recordings[currentRecordKey] : null;

  // Cleanup all blobs on component unmount
  useEffect(() => {
    return () => {
      generatedUrlsRef.current.forEach(url => URL.revokeObjectURL(url));
      stopTracks();
    };
  }, []);

  // Stop recording tracks helper
  const stopTracks = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.stream) {
        mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
    }
  };

  // Ensure recording stops if we navigate away while recording
  useEffect(() => {
    if (isRecording) {
        stopTracks();
        setIsRecording(false);
    }
  }, [currentQIndex, activeCategoryId]);

  const handleStartRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const url = URL.createObjectURL(audioBlob);
        generatedUrlsRef.current.push(url); // Track for cleanup
        
        if (currentRecordKey) {
            setRecordings(prev => ({ ...prev, [currentRecordKey]: url }));
        }
        
        // Stop all tracks to release microphone
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (err) {
      console.error("Error accessing microphone:", err);
      alert("Microphone access denied or not available. Please check browser permissions.");
    }
  };

  const handleStopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const handleDeleteRecording = () => {
    if (currentRecordKey) {
        setRecordings(prev => {
            const newState = { ...prev };
            delete newState[currentRecordKey];
            return newState;
        });
    }
  };

  const handlePlayRecording = () => {
    if (audioPlayerRef.current) {
      audioPlayerRef.current.play();
      setIsPlaying(true);
      audioPlayerRef.current.onended = () => setIsPlaying(false);
    }
  };

  const handleDownload = () => {
    if (currentAudioUrl && activeCategory) {
      const a = document.createElement('a');
      a.href = currentAudioUrl;
      const timestamp = new Date().toISOString().split('T')[0];
      // Sanitize filename
      const safeTitle = activeCategory.title.replace(/[^a-z0-9]/gi, '_').toLowerCase();
      a.download = `${safeTitle}_Q${currentQIndex + 1}_${timestamp}.webm`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  const nextQuestion = () => {
    if (activeCategory && currentQIndex < activeCategory.questions.length - 1) {
      setCurrentQIndex(prev => prev + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQIndex > 0) {
      setCurrentQIndex(prev => prev - 1);
    }
  };

  // --- VIEW: CATEGORY SELECTION ---
  if (!activeCategoryId) {
    return (
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-7xl font-display font-black text-gray-900 dark:text-white mb-4 tracking-tighter">
            SPEAKING <span className="text-neon-pink">MODULE</span>
          </h2>
          <p className="font-mono text-neon-blue uppercase tracking-widest text-sm">
            SELECT A FREQUENCY TO BEGIN TRANSMISSION
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPEAKING_TOPICS.map((topic) => (
            <button
              key={topic.id}
              onClick={() => { setActiveCategoryId(topic.id); setCurrentQIndex(0); }}
              className="group relative h-64 glass-panel p-8 rounded-xl border border-white/5 flex flex-col items-center justify-center transition-all duration-300 hover:border-neon-pink hover:shadow-[0_0_30px_rgba(255,0,85,0.2)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/0 to-neon-pink/0 group-hover:from-neon-pink/5 group-hover:to-transparent transition-all duration-500 rounded-xl"></div>
              <h3 className="text-3xl font-display font-bold text-gray-900 dark:text-white text-center mb-2 z-10">
                {topic.title}
              </h3>
              <div className="text-xs font-mono text-gray-500 uppercase tracking-widest z-10 group-hover:text-neon-pink transition-colors">
                {topic.questions.length} QUESTIONS
              </div>
            </button>
          ))}
        </div>
        
        {/* Quick Reference Rules */}
        <div className="mt-16 glass-panel p-6 rounded-xl border-t-2 border-neon-yellow">
           <div className="flex items-center gap-2 mb-4">
              <Flame className="text-neon-yellow" size={20} />
              <h3 className="font-bold font-mono text-gray-900 dark:text-white uppercase tracking-wider">Protocol: PP vs PPC</h3>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
              <div>
                  <span className="font-bold text-neon-blue block mb-1">PRESENT PERFECT (Result)</span>
                  <p className="text-gray-600 dark:text-gray-400 font-mono">"I have posted." (Finished/Achievement)</p>
                  <div className="mt-2 flex gap-2 flex-wrap">
                      {['already', 'yet', 'so far', 'today'].map(w => (
                          <span key={w} className="px-2 py-1 bg-neon-blue/10 text-neon-blue rounded text-[10px] uppercase">{w}</span>
                      ))}
                  </div>
              </div>
              <div>
                  <span className="font-bold text-neon-pink block mb-1">PRESENT PERFECT CONTINUOUS (Activity)</span>
                  <p className="text-gray-600 dark:text-gray-400 font-mono">"I have been scrolling." (Duration/Focus)</p>
                   <div className="mt-2 flex gap-2 flex-wrap">
                      {['for', 'since', 'all day', 'lately'].map(w => (
                          <span key={w} className="px-2 py-1 bg-neon-pink/10 text-neon-pink rounded text-[10px] uppercase">{w}</span>
                      ))}
                  </div>
              </div>
           </div>
        </div>
      </div>
    );
  }

  // --- VIEW: SINGLE QUESTION (FOCUS MODE) ---
  return (
    <div className="h-[calc(100vh-100px)] flex flex-col relative overflow-hidden">
      
      {/* Top Controls */}
      <div className="absolute top-4 left-4 z-20">
        <button 
          onClick={() => setActiveCategoryId(null)}
          className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors font-mono text-sm uppercase tracking-widest px-4 py-2 rounded bg-black/20 hover:bg-black/40 backdrop-blur"
        >
          <ArrowLeft size={16} /> Exit Module
        </button>
      </div>

      <div className="absolute top-4 right-4 z-20 font-mono text-neon-blue text-sm tracking-widest">
         {activeCategory?.title} // {currentQIndex + 1}/{activeCategory?.questions.length}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-12 relative z-10">
        
        {/* The Question */}
        <div className="w-full max-w-6xl text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-display font-black text-gray-900 dark:text-white leading-[1.1] tracking-tight drop-shadow-2xl animate-fadeIn">
            {currentQuestion?.q}
          </h2>
          
          {/* Context Hint */}
          <div className="mt-8 inline-block animate-slideUp">
             <div className="px-6 py-2 rounded-full border border-neon-yellow/30 bg-neon-yellow/5 text-neon-yellow font-mono text-sm md:text-lg tracking-[0.2em] uppercase shadow-[0_0_20px_rgba(249,200,14,0.2)]">
                Target: {currentQuestion?.context}
             </div>
          </div>
        </div>

        {/* Audio Interface */}
        <div className="w-full max-w-2xl bg-white/50 dark:bg-black/40 backdrop-blur-xl border border-gray-200 dark:border-white/10 p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl transition-all">
          
          {/* State: RECORDING CONTROLS */}
          {!currentAudioUrl ? (
             <div className="flex flex-1 items-center gap-6 animate-fadeIn">
               {!isRecording ? (
                 <button 
                   onClick={handleStartRecording}
                   className="w-20 h-20 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center transition-all hover:scale-110 shadow-[0_0_30px_rgba(239,68,68,0.4)] group"
                   title="Start Recording"
                 >
                   <Mic size={32} className="group-hover:animate-pulse" />
                 </button>
               ) : (
                 <button 
                   onClick={handleStopRecording}
                   className="w-20 h-20 rounded-full bg-gray-800 text-white flex items-center justify-center transition-all hover:scale-110 border-2 border-red-500 animate-pulse-fast relative"
                   title="Stop Recording"
                 >
                   <div className="absolute inset-0 rounded-full border border-red-500 animate-ping"></div>
                   <Square size={24} fill="currentColor" />
                 </button>
               )}

               <div className="flex flex-col">
                  <span className="font-display font-bold text-xl text-gray-900 dark:text-white uppercase">
                    {isRecording ? "RECORDING..." : "STANDBY"}
                  </span>
                  <span className="text-xs font-mono text-gray-500">
                    {isRecording ? "Capturing audio input" : "Press microphone to begin"}
                  </span>
               </div>
             </div>
          ) : (
            // State: PLAYBACK / SAVED
            <div className="flex flex-1 items-center justify-between gap-4 animate-fadeIn w-full">
                <div className="flex items-center gap-4">
                    <button 
                        onClick={handlePlayRecording}
                        className="w-16 h-16 rounded-full bg-neon-blue/20 text-neon-blue hover:bg-neon-blue hover:text-black border border-neon-blue flex items-center justify-center transition-all"
                        title="Play Recording"
                    >
                        {isPlaying ? <span className="animate-pulse font-bold text-2xl">●</span> : <Play size={24} fill="currentColor" />}
                    </button>
                    <div>
                        <span className="font-display font-bold text-lg text-neon-blue block">CAPTURED</span>
                        <span className="text-xs font-mono text-gray-500">Ready for review</span>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <button 
                        onClick={handleDeleteRecording}
                        className="p-3 rounded-full bg-gray-100 dark:bg-white/5 text-gray-500 hover:text-red-500 hover:bg-red-500/10 transition-colors"
                        title="Delete & Retry"
                    >
                        <Trash2 size={20} />
                    </button>
                    <button 
                        onClick={handleDownload}
                        className="flex items-center gap-2 px-6 py-3 rounded-full bg-neon-green/10 text-neon-green hover:bg-neon-green hover:text-black border border-neon-green/50 transition-all font-bold font-display text-sm tracking-wider"
                        title="Save to Device"
                    >
                        <Save size={18} /> SAVE
                    </button>
                </div>
                
                {/* Hidden Audio Element */}
                <audio ref={audioPlayerRef} src={currentAudioUrl} className="hidden" />
            </div>
          )}
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="h-24 border-t border-gray-200 dark:border-white/5 bg-white/80 dark:bg-black/80 backdrop-blur flex items-center justify-between px-8 md:px-16 z-20">
         <button 
            onClick={prevQuestion}
            disabled={currentQIndex === 0}
            className="flex items-center gap-2 text-gray-500 hover:text-white disabled:opacity-30 disabled:hover:text-gray-500 transition-colors uppercase font-mono tracking-widest text-sm group"
         >
            <ChevronLeft className="group-hover:-translate-x-1 transition-transform" /> Previous
         </button>

         {/* Mini Help Hint */}
         <div className="hidden md:flex flex-col items-center">
             <div className="flex items-center gap-2 text-gray-500 text-xs font-mono mb-1">
                <MessageSquare size={12} />
                <span>MODEL STRUCTURE</span>
             </div>
             <div className="text-gray-400 text-xs italic">
                "I have..." vs "I have been..."
             </div>
         </div>

         <button 
            onClick={nextQuestion}
            disabled={activeCategory && currentQIndex === activeCategory.questions.length - 1}
            className="flex items-center gap-2 text-neon-blue hover:text-white disabled:opacity-30 disabled:hover:text-neon-blue transition-colors uppercase font-mono tracking-widest text-sm group"
         >
            Next <ChevronRight className="group-hover:translate-x-1 transition-transform" />
         </button>
      </div>

    </div>
  );
};

export default SpeakingMode;