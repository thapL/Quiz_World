export default function SelectBoxWord({ onChange }) {
  const handleChange = (e) => {
    const letter = e.target.value;
    if (onChange) onChange(letter);
  };

  return (
    <span className="text-5xl text-[#ffaa00] focus:outline-none rounded-md">
      <select
        id="alphabet"
        onChange={handleChange}
        className="animate-float text-center w-fit px-2 bg-[#ffaa00] text-[#504538] rounded-md"
        style={{
          WebkitAppearance: 'none',
          MozAppearance: 'none',
          appearance: 'none',
        }}
      >
        {Array.from({ length: 26 }, (_, i) => (
          <option key={i} value={String.fromCharCode(65 + i)}>
            {String.fromCharCode(65 + i)}
          </option>
        ))}
      </select>
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 2.5s ease-in-out infinite;
        }
      `}</style>
    </span>
  );
}
