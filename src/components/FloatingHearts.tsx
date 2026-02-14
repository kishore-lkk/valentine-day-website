import { useEffect, useState } from 'react';

interface Heart {
  id: number;
  left: number;
  duration: number;
  delay: number;
  size: number;
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const createHeart = () => {
      const newHeart: Heart = {
        id: Date.now(),
        left: Math.random() * 100,
        duration: 4 + Math.random() * 3,
        delay: Math.random() * 0.5,
        size: 20 + Math.random() * 20,
      };
      setHearts((prev) => [...prev, newHeart]);

      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
      }, (newHeart.duration + newHeart.delay) * 1000);
    };

    const interval = setInterval(createHeart, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float-up"
          style={{
            left: `${heart.left}%`,
            bottom: -30,
            fontSize: `${heart.size}px`,
            animation: `floatUp ${heart.duration}s ease-in forwards`,
            animationDelay: `${heart.delay}s`,
            opacity: Math.random() * 0.7 + 0.3,
          }}
        >
          ❤️
        </div>
      ))}

      <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: translateX(${(Math.random() - 0.5) * 100}px) translateY(-50vh) rotate(180deg);
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
