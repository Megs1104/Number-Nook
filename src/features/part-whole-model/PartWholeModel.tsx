import NumberPad from "./components/NumberPad";
import Circle from "./components/Circle";
import { useState } from "react";
export default function PartWholeModel() {
  const [part1, setPart1] = useState<number | null>(null);
  const [part2, setPart2] = useState<number | null>(null);
  const [whole, setWhole] = useState<number | null>(null);
  return (
    <div className="flex flex-col items-center gap-8">
      <NumberPad />
      <Circle number={whole} setNumber={setWhole} />
      <div className="flex gap-8 mt-6">
        <Circle number={part1} setNumber={setPart1} />
        <Circle number={part2} setNumber={setPart2} />
      </div>
      <button
        onClick={() => {
          setPart1(null);
          setPart2(null);
          setWhole(null);
        }}
      >
        Clear
      </button>
    </div>
  );
}
