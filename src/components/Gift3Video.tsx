import { useState, useEffect } from 'react';
import { ArrowLeft, Volume2 } from 'lucide-react';

interface Gift3VideoProps {
  onBack: () => void;
}

export default function Gift3Video({ onBack }: Gift3VideoProps) {
  const [showContent, setShowContent] = useState(false);
  const [videoStarted, setVideoStarted] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden px-4 py-8">
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-300 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      </div>

      <button
        onClick={onBack}
        className="absolute top-8 left-8 p-3 bg-white/20 hover:bg-white/40 rounded-full transition-all duration-300 z-20"
      >
        <ArrowLeft size={24} className="text-rose-600" />
      </button>

      <div className={`relative z-10 w-full max-w-4xl transition-all duration-1000 ${
        showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
      }`}>
        {!videoStarted && (
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600 mb-4">
              A Special Message
            </h1>
            <p className="text-lg text-rose-700 mb-8">
              I made this special video just for you 💕
            </p>
          </div>
        )}

        {/* Video Container */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl mb-8 group">
          {/* Video placeholder - replace with actual video */}
          <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center relative">
            {!videoStarted ? (
              <>
                {/* Play button overlay */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-10">
                  <button
                    onClick={() => setVideoStarted(true)}
                    className="group/play relative"
                  >
                    <div className="absolute inset-0 bg-rose-400 rounded-full blur-lg group-hover/play:blur-xl transition-all opacity-70 group-hover/play:opacity-100" />
                    <div className="relative w-24 h-24 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-l-12 border-r-0 border-t-8 border-b-8 border-l-white border-t-transparent border-b-transparent ml-1" />
                    </div>
                  </button>
                </div>

                {/* Thumbnail */}
                <div className="absolute inset-0 flex items-center justify-center text-7xl">
                  📹
                </div>
              </>
            ) : !videoEnded ? (
              <>
                {/* Replace with actual video player */}
                <iframe
                  width="100%"
                  height="100%"
                  src="/Video.mp4"
                  title="Valentine's Message"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  onEnded={() => setVideoEnded(true)}
                />
              </>
            ) : (
              <div className="absolute inset-0 bg-black flex items-center justify-center">
                <div className="text-center">
                  <p className="text-white text-2xl mb-4">Video finished</p>
                </div>
              </div>
            )}
          </div>

          {/* Cinematic bars effect */}
          <div className="absolute top-0 left-0 right-0 h-6 bg-black/30 z-20" />
          <div className="absolute bottom-0 left-0 right-0 h-6 bg-black/30 z-20" />
        </div>

        {/* Message below video */}
        {videoStarted && (
          <div
            className="text-center animate-fade-in transition-all duration-500"
            style={{
              animation: 'fadeIn 0.8s ease-out 0.5s backwards',
            }}
          >
            <p className="text-xl text-rose-700 font-semibold mb-4">
              I hope this made you smile 💕
            </p>

            <div className="flex justify-center gap-3 mb-8">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className="text-3xl animate-bounce"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  ❤️
                </span>
              ))}
            </div>

            {videoEnded && (
              <div
                className="bg-white/30 backdrop-blur-md rounded-xl p-8 animate-fade-in"
                style={{
                  animation: 'fadeIn 0.8s ease-out forwards',
                }}
              >
                <p className="text-lg text-rose-700 mb-6">
                  Thank you for being my Valentine. You mean everything to me.
                </p>
                <button
                  onClick={onBack}
                  className="px-8 py-4 bg-gradient-to-r from-rose-400 to-pink-400 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Back to Gifts
                </button>
              </div>
            )}
          </div>
        )}

        {/* Floating elements */}
        <div className="mt-12 flex justify-center gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <span
              key={i}
              className="text-3xl animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              ✨
            </span>
          ))}
        </div>

        {/* Instructions */}
        <div className="mt-8 text-center text-sm text-rose-600">
          <p className="italic">
        
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .border-l-12 {
          border-left-width: 12px;
        }
      `}</style>
    </div>
  );
}
