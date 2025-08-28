import { useDrop } from "react-dnd";
import { ItemTypes, type DragNumber } from "../types";

interface CircleProps {
  number: number | null;
  setNumber: (n: number | null) => void;
}

export default function Circle({ number, setNumber }: CircleProps) {
  const [{ isOver }, drop] = useDrop<DragNumber, void, { isOver: boolean }>(
    () => ({
      accept: ItemTypes.NUMBER,
      drop: (item: DragNumber) => {
        console.log(item);
        setNumber(item.value);
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
    }),
  );
  return (
    <div
      ref={drop as unknown as React.Ref<HTMLDivElement>}
      onClick={() => setNumber(null)}
      className={`w-24 h-24 rounded-full border-4 flex items-center justify-center flex-col text-center ${isOver ? "bg-green-100" : "bg-white"}`}
    >
      <p className="text-xl">{number !== null ? number : "-"}</p>
    </div>
  );
}
