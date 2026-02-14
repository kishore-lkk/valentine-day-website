import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

interface PuppyIntroProps {
  onStart: () => void;
  onNext: () => void;
}

export default function PuppyIntro({ onStart, onNext }: PuppyIntroProps) {
  const [showPuppy, setShowPuppy] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowPuppy(true), 300),
      setTimeout(() => setShowLetter(true), 1800),
      setTimeout(() => setShowButton(true), 2500),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const handleClick = () => {
    if (!isStarted) {
      setIsStarted(true);
      onStart();
      setTimeout(onNext, 1000);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-rose-200 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-200 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-md text-center">
        {/* Puppy */}
        <div
          className={`text-8xl mb-8 transition-all duration-1000 ${
            showPuppy ? 'translate-x-0 opacity-100' : '-translate-x-96 opacity-0'
          }`}
          style={{
            animation: showPuppy ? 'float 3s ease-in-out infinite' : 'none',
          }}
        >
          🐶
        </div>

        {/* Letter */}
        {showLetter && (
          <div className="mb-12 animate-bounce">
            <div className="text-6xl filter drop-shadow-lg">💌</div>
            <p className="text-sm text-rose-600 mt-2 italic">A special delivery...</p>
          </div>
        )}

        {/* Button */}
        {showButton && (
          <button
            onClick={handleClick}
            className="px-8 py-4 bg-gradient-to-r from-rose-400 to-pink-400 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 active:scale-95"
          >
            <span className="flex items-center gap-2">
              <Heart size={20} className="fill-current" />
              Open the Letter
            </span>
          </button>
        )}

        <div className="mt-16 text-rose-300 text-sm">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className="inline-block animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              ✨ &nbsp;
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
}
