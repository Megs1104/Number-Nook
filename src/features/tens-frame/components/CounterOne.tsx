import { useDrag } from "react-dnd";
import { TensFrameTypes } from "../types/TensFrameTypes";
import React from "react";
import type { DragItem } from "../types/TensFrameTypes";

export default function CounterOne() {
  const [{ isDragging }, drag] = useDrag<
    DragItem,
    void,
    { isDragging: boolean }
  >(() => ({
    type: TensFrameTypes.COUNTER,
    item: { id: 1, type: TensFrameTypes.COUNTER, color: "bg-blue-500" },
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
      className={`w-16 h-16 rounded-full border-white border-2 bg-blue-500 cursor-grab ${isDragging ? "opacity-50" : "opacity-100"}`}
    ></div>
  );
}
