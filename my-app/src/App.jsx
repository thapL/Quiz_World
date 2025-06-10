import './css/App.css';
import { useState, useEffect } from "react";
import Flashcard from "./components/Flashcard";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import Navbar from "./components/Navbar";
import SelectBoxWord from "./components/SelecBoxWord";

function App() {
  const [mode, setMode] = useState("flashcard");
  const [flashIndex, setFlashIndex] = useState(0);
  const [quizIndex, setQuizIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState('A');
  const [words, setWords] = useState([]);

  const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

  const generateOptions = () => {
    const current = words[Math.min(quizIndex, words.length - 1)];
    const choices = new Set([current.meaning]);
    while (choices.size < 4) {
      const random = words[Math.floor(Math.random() * words.length)].meaning;
      choices.add(random);
    }
    setOptions(shuffleArray(Array.from(choices)));
  };

  const handleAnswer = (answer) => {
    const current = words[Math.min(quizIndex, words.length - 1)];
    const correct = answer === current.meaning;
    setIsCorrect(correct);
    setShowResult(true);
    if (correct) setScore(score + 1);
    else setWrongAnswers([...wrongAnswers, current]);

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

  // 🌐 โหลดไฟล์คำศัพท์แบบ dynamic
  useEffect(() => {
    const loadWords = async () => {
      try {
        const module = await import(`./data/Words_${selectedLetter}.js`);
        setWords(module.default || []);
        setMode("flashcard");
        setFlashIndex(0);
        setQuizIndex(0);
        setScore(0);
        setWrongAnswers([]);
      } catch (error) {
        console.error(`❌ โหลดคำศัพท์สำหรับตัวอักษร "${selectedLetter}" ไม่สำเร็จ`, error);
        setWords([]);
      }
    };
    loadWords();
  }, [selectedLetter]);

  useEffect(() => {
    if (mode === "quiz" && words.length > 0) generateOptions();
  }, [mode, quizIndex, words]);

  const currentWord = words[Math.min(quizIndex, words.length - 1)];

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center p-6 h-screen">
        <div className="bg-[#504538] rounded-2xl shadow-xl p-8 max-w-xl w-full text-center">
          <h1 className="font-bold mb-6 text-[#ffaa00] flex">
            <span className="text-5xl w-full">Oxford Vocabulary</span>
            <SelectBoxWord onChange={setSelectedLetter} />
          </h1>

          {mode === "flashcard" && words.length > 0 && (
            <Flashcard
              flashIndex={flashIndex}
              setFlashIndex={setFlashIndex}
              setMode={setMode}
              words={words}
            />
          )}

          {mode === "quiz" && words.length > 0 && (
            <Quiz
              quizIndex={quizIndex}
              score={score}
              options={options}
              currentWord={currentWord}
              handleAnswer={handleAnswer}
              showResult={showResult}
              isCorrect={isCorrect}
            />
          )}

          {mode === "result" && words.length > 0 && (
            <Result
              score={score}
              total={words.length}
              wrongAnswers={wrongAnswers}
              restartGame={restartGame}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
