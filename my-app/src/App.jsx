import './App.css';
import { useState, useEffect } from "react";

const words = [
  { word: "Applicant", meaning: "ผู้สมัคร" },
  { word: "Invoice", meaning: "ใบแจ้งหนี้" },
  { word: "Negotiate", meaning: "เจรจา" },
  { word: "Supervisor", meaning: "หัวหน้างาน" },
  { word: "Deadline", meaning: "เส้นตาย" },
  { word: "Resume", meaning: "ประวัติย่อ" },
  { word: "Attend", meaning: "เข้าร่วม" },
  { word: "Contract", meaning: "สัญญา" },
  { word: "Profit", meaning: "กำไร" },
  { word: "Client", meaning: "ลูกค้า" }
];

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function App() {
  const [mode, setMode] = useState("flashcard"); // flashcard | quiz | result
  const [flashIndex, setFlashIndex] = useState(0);
  const [quizIndex, setQuizIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState([]);

  const currentWord = words[quizIndex];

  const generateOptions = () => {
    const choices = new Set([currentWord.meaning]);
    while (choices.size < 4) {
      const random = words[Math.floor(Math.random() * words.length)].meaning;
      choices.add(random);
    }
    setOptions(shuffleArray(Array.from(choices)));
  };

  const handleAnswer = (answer) => {
    const correct = answer === currentWord.meaning;
    setIsCorrect(correct);
    setShowResult(true);
    if (correct) setScore(score + 1);
    else setWrongAnswers([...wrongAnswers, currentWord]);

    setTimeout(() => {
      setShowResult(false);
      if (quizIndex + 1 === words.length) setMode("result");
      else {
        setQuizIndex(quizIndex + 1);
        generateOptions();
      }
    }, 1500);
  };

  const restartGame = () => {
    setMode("flashcard");
    setFlashIndex(0);
    setQuizIndex(0);
    setScore(0);
    setWrongAnswers([]);
  };

  useEffect(() => {
    if (mode === "quiz") {
      generateOptions();
    }
  }, [mode, quizIndex]);

  return (
    <div className="  flex flex-col items-center justify-center p-6">
      <div className="bg-[#504538] rounded-2xl shadow-xl p-8 max-w-xl w-full text-center">
        <h1 className="text-3xl font-bold mb-6 text-[#ffaa00]">Oxford Vocabulary </h1>

        {mode === "flashcard" && (
          <>
            <p className="text-2xl font-semibold text-[#ffaa00]">{words[flashIndex].word}</p>
            <p className="text-xl mt-2 text-[#fff8f0]">{words[flashIndex].meaning}</p>
            <button
              onClick={() => {
                if (flashIndex + 1 === words.length) setMode("quiz");
                else setFlashIndex(flashIndex + 1);
              }}
              className="mt-6  bg-[#00a58b] hover:bg-[#00dec0] text-[#fff8f0] font-semibold py-2 px-4 rounded-full transition-all shadow-lg hover:scale-105"
            >
              {flashIndex + 1 === words.length ? "เริ่มแบบทดสอบ" : "ถัดไป"}
            </button>
          </>
        )}

        {mode === "quiz" && (
          <>
            <p className="mb-2 text-[#fff8f0]">คำที่ {quizIndex + 1} / {words.length} | คะแนน: {score}</p>
            <h2 className="text-2xl font-bold text-[#ffaa00] mb-6">{currentWord.word}</h2>
            <div className="grid grid-cols-2 gap-4">
              {options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(opt)}
                  className=" bg-[#00a58b] hover:bg-[#00dec0] text-[#fff8f0] font-medium py-2 rounded-xl transition-all hover:scale-105"
                >
                  {opt}
                </button>
              ))}
            </div>
            {showResult && (
              <div className={`mt-4 text-lg font-bold text-[#ffaa00]`}>
                {isCorrect ? "✅ ถูกต้อง!" : ( <>❌ คำตอบที่ถูกคือ <span className='text-[#fff8f0]'> {currentWord.meaning}</span> </>)}
              </div>
            )}
          </>
        )}

        {mode === "result" && (
          <>
            <p className="text-xl font-semibold text-[#fff8f0]">🎉 คุณได้ {score} / {words.length} คะแนน</p>
            {wrongAnswers.length > 0 && (
              <div className="mt-4 text-left">
                <h3 className="font-semibold  text-[#ffaa00] mb-1">คำที่ตอบผิด:</h3>
                <ul className="list-disc pl-5 text-sm text-[#fff8f0]">
                  {wrongAnswers.map((item, i) => (
                    <li key={i}>{item.word} - {item.meaning}</li>
                  ))}
                </ul>
              </div>
            )}
            <button
              onClick={restartGame}
              className="mt-6 bg-[#00a58b] hover:bg-[#00dec0] text-[#fff8f0] font-semibold py-2 px-5 rounded-full transition-all shadow-lg hover:scale-105"
            >
              🔄 เล่นใหม่
            </button>
          </>
        )}
      </div>
    </div>
  );
}
