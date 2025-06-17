import Frame from "./Frame";

export default function TensFrame() {
  const cells = Array.from({ length: 10 });
  return (
    <div className="grid grid-cols-5 border-4 border-white w-max rounded">
      {cells.map((_, index) => (
        <Frame key={index} />
      ))}
    </div>
  );
}
