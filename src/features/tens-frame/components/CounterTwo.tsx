import { useDrag } from "react-dnd";
import { TensFrameTypes } from "../types/TensFrameTypes";
import React from "react";
import type { DragItem } from "../types/TensFrameTypes";

export default function CounterTwo() {
  const [{ isDragging }, drag] = useDrag<
    DragItem,
    void,
    { isDragging: boolean }
  >(() => ({
    type: TensFrameTypes.COUNTER,
    item: { id: 1, type: TensFrameTypes.COUNTER, color: "bg-red-500" },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const dragRef = React.useCallback(
    (node: HTMLDivElement | null) => {
      drag(node);
    },
    [drag],
  );
  return (
    <div
      ref={dragRef}
      className={`w-16 h-16 rounded-full border border-white border-2 bg-red-500 cursor-grab ${isDragging ? "opacity-50" : "opacity-100"}`}
    ></div>
  );
}
