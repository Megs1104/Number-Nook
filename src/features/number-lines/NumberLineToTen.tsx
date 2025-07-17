import NumberLine from "./components/NumberLine";
import NavBar from "../navigation/NavBar";

export default function NumberLineToTen() {
  return (
    <div>
      <NavBar />
      <p className="text-center text-3xl">Number Line to 10</p>
      <NumberLine min={0} max={10} />
    </div>
  );
}
