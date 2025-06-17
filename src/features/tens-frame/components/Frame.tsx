import FrameTile from "./FrameTile";

export default function Frame() {
  const cells = Array.from({ length: 10 });
  return (
    <div>
      <div className="grid grid-cols-5 border-4 border-white w-max rounded-xl">
        {cells.map((_, index) => (
          <FrameTile key={index} />
        ))}
      </div>
    </div>
  );
}
