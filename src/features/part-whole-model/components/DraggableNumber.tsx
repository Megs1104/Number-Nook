import { useDrag } from "react-dnd";
import { ItemTypes } from "../types";
import React from "react";

export default function DraggableNumber({ number }: { number: number | null }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.NUMBER,
    item: { type: ItemTypes.NUMBER, value: number ?? 0 },
    canDrag: () => number !== null,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
const ref = React.useRef<HTMLDivElement>(null)

React.useEffect(() => {
    if(ref.current){
        drag(ref.current)
    }
},[drag])
  return (
    <div
      ref={ref}
      onMouseDown={(e) => e.preventDefault()}
      className={`w-16 h-16 rounded-full border-2 text-2xl font-bold flex items-center justify-center ${number !== null ? "bg-green-100 cursor-grab" : "bg-gray-200 cursor-not-allowed"} ${isDragging ? "opacity-50" : "opacity-100"}`}
    >
      {number ?? "-"}
    </div>
  );
}
