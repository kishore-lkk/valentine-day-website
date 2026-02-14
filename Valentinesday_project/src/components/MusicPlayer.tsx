import { useState, useEffect } from 'react';
import { Volume2, Volume1, VolumeX } from 'lucide-react';

interface MusicPlayerProps {
  isPlaying: boolean;
  audioRef: React.RefObject<HTMLAudioElement>;
}

export default function MusicPlayer({ isPlaying, audioRef }: MusicPlayerProps) {
  const [volume, setVolume] = useState(0.5);
  const [showVolumeControl, setShowVolumeControl] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume, audioRef]);

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  }, [isPlaying, audioRef]);

  const getVolumeIcon = () => {
    if (volume === 0) return <VolumeX size={20} />;
    if (volume < 0.5) return <Volume1 size={20} />;
    return <Volume2 size={20} />;
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="relative">
        {/* Volume control */}
        {showVolumeControl && (
          <div className="absolute bottom-full right-0 mb-4 bg-white/30 backdrop-blur-md rounded-full p-4 shadow-lg">
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-24 h-2 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #f472b6 0%, #f472b6 ${volume * 100}%, rgba(255,255,255,0.2) ${volume * 100}%, rgba(255,255,255,0.2) 100%)`,
              }}
            />
            <div className="text-xs text-rose-700 font-semibold mt-2 text-center">
              {Math.round(volume * 100)}%
            </div>
          </div>
        )}

        {/* Volume button */}
        <button
          onClick={() => setShowVolumeControl(!showVolumeControl)}
          className="p-4 bg-gradient-to-r from-rose-400 to-pink-400 text-white rounded-full hover:shadow-2xl hover:scale-110 transition-all duration-300 active:scale-95"
        >
          {getVolumeIcon()}
        </button>

        {/* Status indicator */}
        {isPlaying && (
          <div className="absolute -top-2 -right-2">
            <span className="flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500" />
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
