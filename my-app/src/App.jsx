import './css/App.css';
import { useState, useEffect } from "react";
import Flashcard from "./components/Flashcard";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import words from "./data/words";

function App() {
  const [mode, setMode] = useState("flashcard"); // flashcard | quiz | result
  const [flashIndex, setFlashIndex] = useState(0);
  const [quizIndex, setQuizIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState([]);

  const currentWord = words[quizIndex];

  const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

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
    if (mode === "quiz") generateOptions();
  }, [mode, quizIndex]);

  return (
    <div className=" flex flex-col items-center justify-center p-6">
      <div className="bg-[#504538] rounded-2xl shadow-xl p-8 max-w-xl w-full text-center">
        <h1 className="text-3xl font-bold mb-6 text-[#ffaa00]">Oxford Vocabulary</h1>

        {mode === "flashcard" && (
          <Flashcard
            flashIndex={flashIndex}
            setFlashIndex={setFlashIndex}
            setMode={setMode}
            words={words}
          />
        )}

        {mode === "quiz" && (
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

        {mode === "result" && (
          <Result
            score={score}
            total={words.length}
            wrongAnswers={wrongAnswers}
            restartGame={restartGame}
          />
        )}
      </div>
    </div>
  );
}

export default App;
