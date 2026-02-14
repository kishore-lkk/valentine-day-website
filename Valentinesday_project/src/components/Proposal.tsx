import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

interface ProposalProps {
  onYes: () => void;
}

const noMessages = [
  "Enaaaa d chelllooooo 🥺",
  "Naa venaama apo? 💔",
  "Na azhuva aprmm 🐶😭",
  "ahhh my heart, odanjiruchu😭",
  "Please reconsider my baby 💕",
  "En azhaguuu mottuuuu thana d neenu 😭",
  "Mama vemama apoo 🥺",
];

export default function Proposal({ onYes }: ProposalProps) {
  const [showContent, setShowContent] = useState(false);
  const [noClicks, setNoClicks] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [sadMessage, setSadMessage] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleNoClick = () => {
    const newClicks = noClicks + 1;
    setNoClicks(newClicks);
    setSadMessage(noMessages[newClicks % noMessages.length]);

    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    setNoButtonPos({ x: randomX, y: randomY });
  };

  const handleYesClick = () => {
    setShowConfetti(true);
    setTimeout(onYes, 1500);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden px-4">
      {/* Background glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-rose-300 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      </div>

      {/* Confetti */}
      {showConfetti &&
        Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute pointer-events-none"
            style={{
              left: Math.random() * 100 + '%',
              top: -10,
              animation: `fall ${2 + Math.random() * 1}s linear forwards`,
              animationDelay: `${Math.random() * 0.5}s`,
            }}
          >
            <span className="text-2xl" style={{ opacity: Math.random() * 0.7 + 0.3 }}>
              {['❤️', '💖', '✨', '💕'][Math.floor(Math.random() * 4)]}
            </span>
          </div>
        ))}

      <div className={`relative z-10 text-center max-w-2xl transition-all duration-1000 ${
        showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
      }`}>
        {/* Main message */}
        <div className="mb-12">
          <h1 className="text-6xl sm:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500 mb-4">
            Happy Valentine's Day
          </h1>
          <div className="text-5xl mb-6">❤️</div>
        </div>

        {/* Question */}
        <h2 className="text-3xl sm:text-4xl font-semibold text-rose-700 mb-16">
          Will you be my Valentine?
        </h2>

        {/* Sad message */}
        {sadMessage && (
          <div className="mb-8 text-lg text-rose-600 font-medium animate-bounce">
            {sadMessage}
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {/* YES Button */}
          <button
            onClick={handleYesClick}
            className="px-12 py-4 bg-gradient-to-r from-rose-400 to-pink-400 text-white rounded-full font-bold text-2xl hover:shadow-2xl hover:scale-110 transition-all duration-300 active:scale-95 whitespace-nowrap"
          >
            <span className="flex items-center gap-2">
              <Heart size={28} className="fill-current" />
              YES
            </span>
          </button>

          {/* NO Button */}
          <button
            onClick={handleNoClick}
            className="px-12 py-4 bg-gray-300 text-gray-700 rounded-full font-bold text-2xl hover:shadow-lg transition-all duration-300 active:scale-95 whitespace-nowrap"
            style={{
              transform: `translate(${noButtonPos.x}px, ${noButtonPos.y}px)`,
              transitionDuration: noClicks > 0 ? '0.3s' : '0s',
            }}
          >
            NO
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
