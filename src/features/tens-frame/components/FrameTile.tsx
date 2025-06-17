import { useDrop } from "react-dnd";
import { useState } from "react";
import { TensFrameTypes } from "../types/TensFrameTypes";
import type { DragItem } from "../types/TensFrameTypes";
import { useTensFrameContext } from "../contexts/TensFrameContext";

export default function FrameTile() {
  const [counterColor, setCounterColor] = useState<string | null>(null);
  const { totalBlue, setTotalBlue, totalRed, setTotalRed } =
    useTensFrameContext();
  const [{ isOver }, drop] = useDrop<DragItem, void, { isOver: boolean }>(
    () => ({
      accept: TensFrameTypes.COUNTER,
      drop: (item) => {
        console.log(item.color);
        setCounterColor(item.color);
        if (item.color === "bg-blue-500") {
          setTotalBlue((prev) => {
            const updated = prev + 1;
            return updated;
          });
          console.log(totalBlue);
        } else {
          setTotalRed((prev) => {
            const updated = prev + 1;
            return updated;
          });
        }
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
    }),
  );

  function toggleCounter(counterColor) {
    if (counterColor === "bg-blue-500") {
      setTotalBlue((prev) => {
        const updated = prev - 1;
        return updated;
      });
      console.log(totalBlue);
    } else {
      setTotalRed((prev) => {
        const updated = prev - 1;
        return updated;
      });
    }
    setCounterColor(null);
  }

  return (
    <div
      ref={drop}
      className="w-32 h-32 border-2 border-white flex items-center justify-center"
      onClick={() => toggleCounter(counterColor)}
    >
      {counterColor && (
        <div
          className={`w-16 h-16 border-white border-2 ${counterColor} rounded-full ${isOver ? "bg-gray-700" : counterColor}`}
        ></div>
      )}
    </div>
  );
}
