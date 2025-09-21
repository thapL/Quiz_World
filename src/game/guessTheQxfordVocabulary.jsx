import Flashcard from "../components/Flashcard";
import Quiz from "../components/Quiz";
import Result from "../components/Result";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";

export default function GuessTheOxfordVocab() {
  const [mode, setMode] = useState("select");
  const [flashIndex, setFlashIndex] = useState(0);
  const [quizIndex, setQuizIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [words, setWords] = useState([]);
  const [confetti, setConfetti] = useState(false);

  const containerRef = useRef(null);

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

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
    setShowResult(true);

    if (correct) {
      setScore(score + 1);
      setConfetti(false); // reset ก่อน
      setTimeout(() => setConfetti(true), 50); // trigger ใหม่
    } else {
      setWrongAnswers([...wrongAnswers, current]);
    }

    setTimeout(() => {
      setShowResult(false);
      if (quizIndex + 1 === words.length) {
        setMode("result");
      } else {
        setQuizIndex(quizIndex + 1);
        generateOptions();
      }
    }, 1500);
  };

  const restartGame = () => {
    setMode("select");
    setFlashIndex(0);
    setQuizIndex(0);
    setScore(0);
    setWrongAnswers([]);
  };

  const goNextLetter = () => {
    const currentIndex = alphabet.indexOf(selectedLetter);
    if (currentIndex < alphabet.length - 1) {
      const nextLetter = alphabet[currentIndex + 1];
      setSelectedLetter(nextLetter);
      setMode("flashcard");
      setFlashIndex(0);
      setQuizIndex(0);
      setScore(0);
      setWrongAnswers([]);
    } else {
      alert("🎉 คุณเล่นครบทุกตัวอักษรแล้ว!");
    }
  };

  // โหลดคำศัพท์
  useEffect(() => {
    if (!selectedLetter) return;
    const loadWords = async () => {
      try {
        const module = await import(`../data/Words_${selectedLetter}.js`);
        setWords(module.default || []);
      } catch (error) {
        console.error(`❌ โหลดคำศัพท์ "${selectedLetter}" ไม่สำเร็จ`, error);
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-[#403528] to-[#1a1410] p-6">
      <motion.div
        ref={containerRef}
        className="relative bg-gradient-to-br from-[#6d5c48] to-[#403528] rounded-3xl shadow-2xl p-10 max-w-4xl w-full text-center border border-yellow-600/30"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {confetti && containerRef.current && (
          <Confetti
            width={containerRef.current.offsetWidth}
            height={containerRef.current.offsetHeight}
            recycle={false} // ❌ ไม่วนซ้ำ
            numberOfPieces={100} // จำนวนเศษกระดาษ
            gravity={0.5} // แรงโน้มถ่วงแรง ทำให้ตกไว
            tweenDuration={1500} // ✅ ให้ตกหมดภายใน 1.5 วิ
            initialVelocityY={20} // ความเร็วเริ่มต้น
            initialVelocityX={5} // กระจายด้านข้าง
            colors={["#FACC15", "#F59E0B", "#FFD700", "#FFB703"]} // เหลือง-ส้ม
          />
        )}

        {/* Title */}
        <h1
          className="font-extrabold mb-8 text-transparent bg-clip-text 
                     bg-gradient-to-r from-yellow-400 to-orange-500 
                     text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
        >
          Oxford Vocabulary
        </h1>

        <AnimatePresence mode="wait">
          {mode === "select" && (
            <motion.div
              key="select"
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl sm:text-3xl font-extrabold text-yellow-300 mb-6">
                ✨ เลือกหมวดตัวอักษร
              </h2>

              {/* Horizontal Scroll */}
              <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-yellow-500 scrollbar-track-slate-800">
                {alphabet.map((letter, i) => (
                  <motion.button
                    key={letter}
                    onClick={() => {
                      setSelectedLetter(letter);
                      setMode("flashcard");
                    }}
                    className="flex-shrink-0 w-16 h-16 rounded-full font-bold shadow-lg 
                               bg-gradient-to-br from-yellow-400 to-orange-500 
                               text-black text-2xl hover:scale-110 
                               hover:from-yellow-300 hover:to-orange-400 
                               transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.02 }}
                  >
                    {letter}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {mode === "flashcard" && words.length > 0 && (
            <motion.div
              key="flashcard"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Flashcard
                flashIndex={flashIndex}
                setFlashIndex={setFlashIndex}
                setMode={setMode}
                words={words}
              />
            </motion.div>
          )}

          {mode === "quiz" && words.length > 0 && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Quiz
                quizIndex={quizIndex}
                score={score}
                options={options}
                currentWord={currentWord}
                handleAnswer={handleAnswer}
                showResult={showResult}
              />
            </motion.div>
          )}

          {mode === "result" && words.length > 0 && (
            <motion.div
              key="result"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Result
                score={score}
                total={words.length}
                wrongAnswers={wrongAnswers}
                restartGame={restartGame}
                goNextLetter={goNextLetter}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
