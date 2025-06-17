import { useDrop } from "react-dnd";
import { useState } from "react";
import { TensFrameTypes } from "../types/TensFrameTypes";
import type { DragItem } from "../types/TensFrameTypes";

export default function Frame() {
  const [counterColor, setCounterColor] = useState<string | null>(null);
  const [{ isOver }, drop] = useDrop<DragItem, void, { isOver: boolean }>(
    () => ({
      accept: TensFrameTypes.COUNTER,
      drop: (item) => setCounterColor(item.color),
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
    }),
  );

  function toggleCounter() {
    setCounterColor(null);
  }

  return (
    <div
      ref={drop}
      className="w-24 h-24 border-2 border-white flex items-center justify-center"
      onClick={toggleCounter}
    >
      {counterColor && (
        <div
          className={`w-16 h-16 ${counterColor} rounded-full ${isOver ? "bg-gray-700" : "bg-blue-500"}`}
        ></div>
      )}
    </div>
  );
}
