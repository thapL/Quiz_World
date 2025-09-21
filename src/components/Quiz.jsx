import { motion } from "framer-motion";
import { useState } from "react";

export default function Quiz({
  quizIndex,
  score,
  options,
  currentWord,
  handleAnswer,
  showResult,
}) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleClick = (option) => {
    if (!showResult) {
      setSelectedAnswer(option);
      handleAnswer(option);
    }
  };

  return (
    <div className="space-y-6">
      {/* คำถาม */}
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-yellow-300 drop-shadow">
          {quizIndex + 1}. {currentWord?.word}
        </h2>
        <p className="text-slate-300 mt-2">เลือกความหมายที่ถูกต้อง</p>
      </div>

      {/* ตัวเลือก */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {options.map((option, idx) => {
          let btnClass =
            "py-4 px-6 rounded-2xl font-bold shadow-lg transition duration-300 ";

          if (showResult) {
            if (option === currentWord?.meaning) {
              btnClass += "bg-emerald-600 text-white"; // ✅ ถูก
            } else if (
              option === selectedAnswer &&
              option !== currentWord?.meaning
            ) {
              btnClass += "bg-red-600 text-white"; // ❌ ผิด
            } else {
              btnClass += "bg-slate-800 text-slate-300"; // อื่นๆ
            }
          } else {
            btnClass +=
              "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:brightness-110 hover:scale-105";
          }

          return (
            <motion.button
              key={idx}
              onClick={() => handleClick(option)}
              whileTap={{ scale: 0.95 }}
              animate={
                showResult &&
                selectedAnswer === option &&
                option !== currentWord?.meaning
                  ? { x: [0, -10, 10, -10, 10, 0] } // shake effect
                  : {}
              }
              transition={{ duration: 0.4 }}
              className={btnClass}
            >
              {option}
            </motion.button>
          );
        })}
      </div>

      {/* คะแนน */}
      <div className="text-slate-400 mt-4 text-sm">
        คะแนน: <span className="font-bold text-white">{score}</span>
      </div>
    </div>
  );
}
