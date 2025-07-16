export default function NumberLine({ min, max }) {
  const nums = [];
  for (let i = min; i <= max; i++) {
    nums.push(i);
  }
  return (
    <div className="p-6 mt-60">
      <div className="border-t-6 w-full">
        <div className="flex justify-between">
          {nums.map((num) => (
            <div key={num} className="flex flex-col items-center w-1.5">
              <div className="h-4 w-1.5 bg-lightGreen mb-1" />
              <span className="font-bold text-3xl">{num}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
