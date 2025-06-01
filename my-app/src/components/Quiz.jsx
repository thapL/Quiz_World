export default function Quiz({ quizIndex, score, options, currentWord, handleAnswer, showResult, isCorrect }) {
  return (
    <>
      <p className="mb-2 text-[#fff8f0]">คำที่ {quizIndex + 1} / 10 | คะแนน: {score}</p>
      <h2 className="text-2xl font-bold text-[#ffaa00] mb-6">{currentWord.word}</h2>
      <div className="grid grid-cols-2 gap-4">
        {options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(opt)}
            disabled={showResult}
            className=" bg-[#00a58b] hover:bg-[#00dec0] text-[#fff8f0] font-medium py-2 rounded-xl transition-all hover:scale-105"
          >
            {opt}
          </button>
        ))}
      </div>
      {showResult && (
        <div className={`mt-4 text-lg font-bold text-[#ffaa00]`}>
          {isCorrect ? "✅ ถูกต้อง!" : <>❌ คำตอบที่ถูกคือ <span className='text-[#fff8f0]'>{currentWord.meaning}</span></>}
        </div>
      )}
    </>
  );
}
