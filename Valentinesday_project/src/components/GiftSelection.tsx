import { useState, useEffect } from 'react';

interface GiftSelectionProps {
  onSelectGift: (giftNumber: 1 | 2 | 3) => void;
}

export default function GiftSelection({ onSelectGift }: GiftSelectionProps) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const gifts = [
    { number: 1, image: '/quizz.gif', title: 'Love Quiz', delay: 0 },
    { number: 2, image: '/Letter.gif', title: 'Love Letter', delay: 0.2 },
    { number: 3, image: '/video.gif', title: 'Video Message', delay: 0.4 },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden px-4 py-12">
      
      {/* Background glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-rose-300 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-200 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10">
        
        <h1
          className={`text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600 text-center mb-4 transition-all duration-1000 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          Choose Your Gift
        </h1>

        <p
          className={`text-center text-rose-600 text-lg mb-16 transition-all duration-1000 delay-200 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          Happy Valentines Day D, en azhagu mottu 💝
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-4xl">
          {gifts.map((gift) => (
            <div
              key={gift.number}
              className={`transition-all duration-1000 ${
                showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: showContent ? `${gift.delay}s` : '0s' }}
            >
              <button
                onClick={() => onSelectGift(gift.number as 1 | 2 | 3)}
                className="w-full group relative"
              >
                
                <div className="relative w-44 h-44 mx-auto">
                  
                  {/* Box */}
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-300 to-pink-400 rounded-xl shadow-lg transform group-hover:scale-110 transition-transform duration-300 group-hover:shadow-2xl" />

                  {/* GIF Image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={gift.image}
                      alt={gift.title}
                      className="w-28 h-28 object-contain group-hover:scale-125 transition-transform duration-300 pointer-events-none"
                    />
                  </div>

                  {/* Glow on hover */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 bg-gradient-to-t from-yellow-300 to-transparent blur-xl" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-rose-700 group-hover:text-rose-900 transition-colors">
                  {gift.title}
                </h3>

              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
