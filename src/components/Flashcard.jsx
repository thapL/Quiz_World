import { motion } from "framer-motion";
import { useState } from "react";

export default function Flashcard({
  flashIndex,
  setFlashIndex,
  setMode,
  words,
}) {
  const [flipped, setFlipped] = useState(false);

  if (!words || words.length === 0) return null;
  const currentWord = words[flashIndex];

  const nextCard = () => {
    setFlipped(false);
    if (flashIndex + 1 < words.length) {
      setFlashIndex(flashIndex + 1);
    } else {
      // ถ้าครบแล้ว ไปโหมด quiz
      setMode("quiz");
    }
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Flashcard */}
      <motion.div
        className="w-72 h-48 sm:w-96 sm:h-60 cursor-pointer perspective"
        onClick={() => setFlipped(!flipped)}
      >
        <motion.div
          className="relative w-full h-full text-center text-white rounded-2xl shadow-2xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* Front */}
          <div className="absolute inset-0 flex items-center justify-center text-2xl sm:text-3xl font-bold backface-hidden">
            {currentWord.word}
          </div>

          {/* Back */}
          <div
            className="absolute inset-0 flex items-center justify-center text-xl sm:text-2xl font-semibold bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl backface-hidden"
            style={{ transform: "rotateY(180deg)" }}
          >
            {currentWord.meaning}
          </div>
        </motion.div>
      </motion.div>

      {/* Controls */}
      <div className="flex gap-4">
        <button
          onClick={nextCard}
          className="px-6 py-2 bg-slate-800 text-yellow-400 font-semibold rounded-xl shadow-lg hover:bg-slate-700 transition"
        >
          ถัดไป ➡️
        </button>
        <button
          onClick={() => setMode("quiz")}
          className="px-6 py-2 bg-yellow-500 text-black font-semibold rounded-xl shadow-lg hover:bg-yellow-400 transition"
        >
          ไปแบบทดสอบ 🎮
        </button>
      </div>
    </div>
  );
}
