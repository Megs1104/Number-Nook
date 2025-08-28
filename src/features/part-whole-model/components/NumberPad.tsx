import { useEffect, useState } from "react";
import DraggableNumber from "./DraggableNumber";

export default function NumberPad() {
  const [input, setInput] = useState("");

  const number = input === "" ? null : parseInt(input);

  const handleClick = (digit: string) => {
    if (input.length < 3) {
      setInput((prev) => (prev === "0" ? digit : prev + digit));
    }
  };

  const handleClear = () => setInput("");

  useEffect(() => {
    console.log(number);
  }, [number]);
  return (
    <div className="grid grid-cols-3 gap-2">
      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <button
            key={num}
            onClick={() => handleClick(num.toString())}
            className="w-12 h-12 bg-blue-100 text-xl rounded shadow"
          >
            {num}
          </button>
        ))}
      </div>
      <button
        onClick={handleClear}
        className="bg-red-400 px-4 py-1 rounded text-white"
      >
        Clear
      </button>
      <DraggableNumber number={number} />
    </div>
  );
}
