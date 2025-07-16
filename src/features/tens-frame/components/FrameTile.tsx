import { useDrop } from "react-dnd";
import { useCallback, useRef, useState } from "react";
import { TensFrameTypes } from "../types/TensFrameTypes";
import type { DragItem } from "../types/TensFrameTypes";
import { useTensFrameContext } from "../contexts/TensFrameContext";

export default function FrameTile() {
  const [counterColor, setCounterColor] = useState<string | null>(null);
  const hasCounterRef = useRef(false);
  const { totalBlue, setTotalBlue, setTotalRed } = useTensFrameContext();
  const [{ isOver }, drop] = useDrop<DragItem, void, { isOver: boolean }>(
    () => ({
      accept: TensFrameTypes.COUNTER,
      canDrop: () => !hasCounterRef.current,
      drop: (item) => {
        if (hasCounterRef.current) return;
        hasCounterRef.current = true;
        setCounterColor(item.color);
        if (item.color === "bg-blue-500") {
          setTotalBlue((prev: number) => {
            const updated = prev + 1;
            return updated;
          });
        } else {
          setTotalRed((prev: number) => {
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

  function toggleCounter(counterColor: string | null) {
    if (counterColor === null) return;
    if (counterColor === "bg-blue-500") {
      setTotalBlue((prev: number) => {
        const updated = prev - 1;
        return updated;
      });
    } else {
      setTotalRed((prev: number) => {
        const updated = prev - 1;
        return updated;
      });
    }
    setCounterColor(null);
    hasCounterRef.current = false;
  }
  const setRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (node) {
        drop(node);
      }
    },
    [drop],
  );

  return (
    <div
      ref={setRef}
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
