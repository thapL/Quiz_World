export default function Flashcard({ flashIndex, setFlashIndex, setMode, words}) {
  return (
    <>
    <p className="text-2xl font-semibold text-[#ffaa00] text-center">
      {words[flashIndex].word}
    </p>

    <div className="flex justify-center my-4">
      <div className="w-60 h-50 border-4 border-[#ffaa00] rounded-xl overflow-hidden shadow-lg">
        <img
          src={words[flashIndex].img}
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
    </div>

    <p className="text-xl mt-2 text-[#fff8f0] text-center">
      {words[flashIndex].meaning}
    </p>

    <div className="flex justify-center">
      <button
        onClick={() => {
          if (flashIndex + 1 === words.length) setMode("quiz");
          else setFlashIndex(flashIndex + 1);
        }}
        className="mt-6 bg-[#00a58b] hover:bg-[#00dec0] text-[#fff8f0] font-semibold py-2 px-6 rounded-full transition-all shadow-lg hover:scale-105"
      >
        {flashIndex + 1 === words.length ? "เริ่มแบบทดสอบ" : "ถัดไป"}
      </button>
    </div>
</>

  );
}
