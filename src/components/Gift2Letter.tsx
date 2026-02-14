import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";

interface Gift2LetterProps {
  onBack: () => void;
}

const letterText = `Happy Valentines Day d kuty,

I like you soo much, 

En kutima Namba ipo epdi eruko nratha enala nambave mudila, ne intha office senthathu na unaku soli kuduthathu, un doubts clear panrathu nrathula erunthu ipo un kai pudichitu valka full ah nadakanu nra alavuku vanthu eruko.

I known you for more than 2 years, but epome romba minimal ana converstations tha, jaggu vantha aprm tha namba jolly ah vilada start pano, aprm one day sudden ah onna ukanthu sofa la ukanthu paatu keto, na enoda english songs la katuna, unaku oru sila song lyrics pudichithu, aprm enoru naal ne podra tamil paatu la namba onna keto, apdi tha erunthuthu just a friends mari, but poga poga ne panrathu ne sirikurathu enaku different ah theriya start achu, neyea enaku different ah theriya start panna,

Una pakanu, un kuda pesanu, una sirika vaikanu, unaku pananu, ne happy ah erukanu thona start achu, poga poga una rasika start panna, un mudiya rasicha, un kanna rasicha, un siripa rasicha, athula ena nane tholacha, poga poga en feelings strong achu, unaye suthi suthi vantha, enaku lost ana elam hopes uh neya aana, unapathu enaku veruthu pona love again vanthuthu, iva tha da nu thonuchu, ipo ipdi eruka.

Una enaku rombaaaa rombaa pudiku da, ne panra elame enaku aavalo pudiku. 

Un care, elarmelayu care, elam animals mealu care, avalo innocent aana pasam. 

Entha uulnokam elatha care, avalo pure hearted, una pathu viyantha, epdi da evalo innoncent ah evalo loving ah eruka mudium nu.

Ne nadanthukurathu, kolantha mari, oru neja kolanthaye eruka mari eruku, antha kolanthaya na vachikanu aasa patta. 

Una nallla pathukanu, un siripa epome pathukaapa vachikanu aasa vanthuthu.

Kandipa pathupa da, ena analu un nalla vachipa, enala mudinja elathium pani una pathupa, 

I know i have not been not perfect, But I will change and I will be the perfect one for you. 

Elathium purinjitu, una romba happyyy ah shanthosama vachipa da. 

I promise you that. 

I really love you soo much d kuty. My happiness, my Love, My everthing. 


Sorry d Chello nethutha valentines day, but iniku tha unta itha katra, eana I wanted to see it together and plus nethutha website work eh mudicha. Eeeeee😋`;

export default function Gift2Letter({ onBack }: Gift2LetterProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const typing = setInterval(() => {
      setDisplayedText(letterText.slice(0, index + 1));
      index++;

      if (index >= letterText.length) {
        clearInterval(typing);
      }
    }, 60);

    return () => clearInterval(typing);
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-rose-100 to-pink-200 relative px-6">

      {/* Back Button */}
      <button
        onClick={onBack}
        className="absolute top-8 left-8 p-3 bg-white/40 hover:bg-white/70 backdrop-blur-md rounded-full transition-all duration-300 shadow-md"
      >
        <ArrowLeft size={24} className="text-rose-600" />
      </button>

      {/* Letter Container */}
      <div className="max-w-2xl w-full bg-white shadow-[0_0_40px_rgba(244,63,94,0.25)] rounded-2xl p-10 sm:p-14 text-center rotate-[-1deg]">

        <div
          className="text-2xl sm:text-3xl text-rose-900 leading-relaxed whitespace-pre-line"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          {displayedText}
          <span className="animate-pulse">|</span>
        </div>

      </div>

    </div>
  );
}
