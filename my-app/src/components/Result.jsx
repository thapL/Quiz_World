export default function Result({ score, total, wrongAnswers, restartGame }) {
  return (
    <>
      <p className="text-xl font-semibold text-[#fff8f0]">🎉 คุณได้ {score} / {total} คะแนน</p>
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
  );
}
