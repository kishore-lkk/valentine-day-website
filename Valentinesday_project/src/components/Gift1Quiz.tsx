import { useState, useEffect } from 'react';
import { ArrowLeft, Check, X } from 'lucide-react';

interface Gift1QuizProps {
  onBack: () => void;
}

interface Question {
  text: string;
  options: string[];
  correctAnswer: number;
}

const questions: Question[] = [
  {
    text: "What's my favorite color?",
    options: ["Blue", "Rose Gold", "Purple", "Green"],
    correctAnswer: 0,
  },
  {
    text: "When did we first kiss?",
    options: ["November 12", "November 14", "October 8", "October 5"],
    correctAnswer: 1,
  },
  {
    text: "What's my favorite part in your body",
    options: ["Face", "Ass", "Hair", "Hands"],
    correctAnswer: 1,
  },
  {
    text: "How many times have I said 'I Like you'?",
    options: ["Too many to count", "Around 100", "Infinite", "Not enough"],
    correctAnswer: 3,
  },
];

export default function Gift1Quiz({ onBack }: Gift1QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answered, setAnswered] = useState<number[]>([]);
  const [feedback, setFeedback] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);

  const question = questions[currentQuestion];
  const isAnswered = answered[currentQuestion] !== undefined;

  const handleAnswer = (optionIndex: number) => {
    const isCorrect = optionIndex === question.correctAnswer;

    if (isCorrect) {
      setFeedback('Massu d chello ne! 💕');
      const newAnswered = [...answered];
      newAnswered[currentQuestion] = optionIndex;
      setAnswered(newAnswered);

      if (currentQuestion < questions.length - 1) {
        setTimeout(() => {
          setCurrentQuestion(currentQuestion + 1);
          setFeedback('');
        }, 1500);
      } else {
        setTimeout(() => {
          setQuizComplete(true);
        }, 1500);
      }
    } else {
      setFeedback('Thappu d chello 🐶💔');
      setTimeout(() => setFeedback(''), 1500);
    }
  };

  if (quizComplete) {
    return (
      <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden px-4">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-rose-300 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        </div>

        <button
          onClick={onBack}
          className="absolute top-8 left-8 p-3 bg-white/20 hover:bg-white/40 rounded-full transition-all duration-300 z-20"
        >
          <ArrowLeft size={24} className="text-rose-600" />
        </button>

        <div className="relative z-10 text-center max-w-2xl">
          <div className="text-7xl mb-8">🎉</div>
          <h1 className="text-5xl font-bold text-rose-700 mb-4">Perfect Score!</h1>
          <p className="text-xl text-rose-600 mb-8">enaku apove therium chello ne elame crt ah soluvanu 💕</p>

          <div className="bg-white/30 backdrop-blur-md rounded-2xl p-8 mb-8">
            <p className="text-lg text-rose-700 mb-6">Namba onna happy ah eruntha times:</p>

            {/* Memory photos grid - customize with your photos */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg bg-gradient-to-br from-rose-200 to-pink-200 flex items-center justify-center text-4xl overflow-hidden hover:scale-110 transition-transform duration-300 shadow-lg"
                  style={{
                    animation: `slideIn 0.6s ease-out ${i * 0.1}s backwards`,
                  }}
                >
                  {[
                  "/gift1.gif",
                  "/gift2.gif",
                  "/gift3.gif",
                  "/gift4.gif",
                  "/gift5.gif",
                  "/gift6.gif",
                ][i] && (
                  <img
                    src={[
                      "/0.jpeg",
                      "/1.jpeg",
                      "/2.jpeg",
                      "/4.jpeg",
                      "/5.jpeg",
                      "/6.jpeg",
                    ][i]}
                    alt="gift"
                    className="w-full h-full object-cover"
                  />
                )}

                </div>
              ))}
            </div>

            <p className="text-sm text-rose-600 mt-6 italic">
              Pudichi eruka en chelathuku
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className="text-3xl animate-bounce"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                ❤️
              </span>
            ))}
          </div>

          <button
            onClick={onBack}
            className="px-8 py-4 bg-gradient-to-r from-rose-400 to-pink-400 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Back to Gifts
          </button>
        </div>

        <style>{`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: scale(0.5) rotate(-10deg);
            }
            to {
              opacity: 1;
              transform: scale(1) rotate(0deg);
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden px-4 py-8">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-rose-300 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-200 rounded-full blur-3xl animate-pulse" />
      </div>

      <button
        onClick={onBack}
        className="absolute top-8 left-8 p-3 bg-white/20 hover:bg-white/40 rounded-full transition-all duration-300 z-20"
      >
        <ArrowLeft size={24} className="text-rose-600" />
      </button>

      <div className="relative z-10 max-w-2xl w-full">
        {/* Progress */}
        <div className="mb-12">
          <div className="flex justify-between text-sm text-rose-600 font-semibold mb-3">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(((currentQuestion + (isAnswered ? 1 : 0)) / questions.length) * 100)}%</span>
          </div>
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-rose-400 to-pink-400 transition-all duration-500"
              style={{
                width: `${((currentQuestion + (isAnswered ? 1 : 0)) / questions.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Question */}
        <h2 className="text-3xl sm:text-4xl font-bold text-rose-700 mb-12 text-center">
          {question.text}
        </h2>

        {/* Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={isAnswered}
              className={`p-6 rounded-xl font-semibold text-lg transition-all duration-300 relative overflow-hidden group ${
                answered[currentQuestion] === index
                  ? index === question.correctAnswer
                    ? 'bg-green-400 text-white shadow-lg'
                    : 'bg-red-400 text-white shadow-lg'
                  : 'bg-white/30 hover:bg-white/40 text-rose-700 hover:shadow-lg'
              } ${isAnswered ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            >
              <span className="relative z-10 flex items-center justify-between">
                {option}
                {answered[currentQuestion] === index && (
                  <span>
                    {index === question.correctAnswer ? (
                      <Check size={24} />
                    ) : (
                      <X size={24} />
                    )}
                  </span>
                )}
              </span>

              {answered[currentQuestion] === index && (
                <div className="absolute inset-0 bg-white/20 animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {/* Feedback */}
        {feedback && (
          <div
            className={`text-center text-2xl font-bold mb-6 animate-bounce ${
              feedback.includes('Correct') ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {feedback}
          </div>
        )}
      </div>
    </div>
  );
}
