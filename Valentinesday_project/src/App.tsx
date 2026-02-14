import { useState, useEffect, useRef } from 'react';
import PuppyIntro from './components/PuppyIntro';
import Proposal from './components/Proposal';
import GiftSelection from './components/GiftSelection';
import Gift1Quiz from './components/Gift1Quiz';
import Gift2Letter from './components/Gift2Letter';
import Gift3Video from './components/Gift3Video';
import MusicPlayer from './components/MusicPlayer';
import FloatingHearts from './components/FloatingHearts';

type Page = 'intro' | 'proposal' | 'gifts' | 'gift1' | 'gift2' | 'gift3';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('intro');
  const [hasStarted, setHasStarted] = useState(false);
  const musicRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (hasStarted && musicRef.current) {
      musicRef.current.play().catch(() => {});
    }
  }, [hasStarted]);

  const handleStart = () => {
    setHasStarted(true);
  };

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen w-full overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-red-50">
      <FloatingHearts />

      <audio ref={musicRef} loop>
        <source src="/metro.mp3" type="audio/mpeg" />
      </audio>

      <MusicPlayer isPlaying={hasStarted} audioRef={musicRef} />

      <div className="relative z-10">
        {currentPage === 'intro' && (
          <PuppyIntro onStart={handleStart} onNext={() => handleNavigate('proposal')} />
        )}
        {currentPage === 'proposal' && (
          <Proposal onYes={() => handleNavigate('gifts')} />
        )}
        {currentPage === 'gifts' && (
          <GiftSelection onSelectGift={(num) => handleNavigate(`gift${num as 1|2|3}` as Page)} />
        )}
        {currentPage === 'gift1' && (
          <Gift1Quiz onBack={() => handleNavigate('gifts')} />
        )}
        {currentPage === 'gift2' && (
          <Gift2Letter onBack={() => handleNavigate('gifts')} />
        )}
        {currentPage === 'gift3' && (
          <Gift3Video onBack={() => handleNavigate('gifts')} />
        )}
      </div>
    </div>
  );
}

export default App;
