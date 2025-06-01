export default function Flashcard({ flashIndex, setFlashIndex, setMode, words }) {
  return (
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
  );
}
