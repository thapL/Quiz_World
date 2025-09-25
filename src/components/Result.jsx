import { motion } from "framer-motion";

export default function Result({
  score,
  total,
  wrongAnswers,
  restartGame,
  goNextLetter,
  goNextSet, // 👈 เพิ่ม prop
}) {
  const percentage = Math.round((score / total) * 100);

  return (
    <div className="space-y-8">
      <motion.h2
        className="text-3xl font-extrabold text-yellow-300 drop-shadow"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🎉 ผลการทดสอบ
      </motion.h2>

      {/* สรุปคะแนน */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <p className="text-lg text-slate-200">
          คุณได้ <span className="font-bold text-white">{score}</span> จาก{" "}
          <span className="font-bold text-white">{total}</span> คำศัพท์
        </p>

        <div className="w-full bg-slate-700 rounded-full h-4 overflow-hidden shadow-inner">
          <motion.div
            className={`h-4 rounded-full ${
              percentage >= 70
                ? "bg-emerald-500"
                : percentage >= 40
                ? "bg-yellow-500"
                : "bg-red-500"
            }`}
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 1 }}
          />
        </div>
        <p className="text-slate-300">{percentage}%</p>
      </motion.div>

      {/* รายการคำผิด */}
      {wrongAnswers.length > 0 && (
        <motion.div
          className="bg-white/10 p-6 rounded-2xl shadow-lg text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h3 className="text-xl font-bold mb-3 text-red-400">
            ❌ คำที่ตอบผิด
          </h3>
          <ul className="space-y-2 text-slate-200">
            {wrongAnswers.map((word, i) => (
              <li
                key={i}
                className="flex justify-between bg-slate-800/40 px-3 py-2 rounded-lg"
              >
                <span className="font-semibold">{word.word}</span>
                <span className="text-sm text-slate-300">{word.meaning}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* ปุ่มควบคุม */}
      <div className="flex justify-center gap-4">
        {/* ปุ่มเลือกหมวดใหม่ */}
        <motion.button
          onClick={restartGame}
          className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-xl shadow-lg hover:bg-yellow-400 transition hidden sm:block"
        >
          🔄 เลือกหมวดใหม่
        </motion.button>
        <motion.button
          onClick={restartGame}
          className="p-3 bg-yellow-500 text-black rounded-full shadow-lg hover:bg-yellow-400 transition block sm:hidden"
        >
          🔄
        </motion.button>

        {/* ปุ่ม Next 10 words */}
        <motion.button
          onClick={goNextSet}
          className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-xl shadow-lg hover:bg-orange-400 transition hidden sm:block"
        >
          📚 Next 10 words
        </motion.button>
        <motion.button
          onClick={goNextSet}
          className="p-3 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-400 transition block sm:hidden"
        >
          📚
        </motion.button>

        {/* ปุ่มไปตัวอักษรถัดไป */}
        <motion.button
          onClick={goNextLetter}
          className="px-8 py-3 bg-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:bg-emerald-500 transition hidden sm:block"
        >
          ➡️ ถัดไป
        </motion.button>
        <motion.button
          onClick={goNextLetter}
          className="p-3 bg-emerald-600 text-white rounded-full shadow-lg hover:bg-emerald-500 transition block sm:hidden"
        >
          ➡️
        </motion.button>
      </div>
    </div>
  );
}
