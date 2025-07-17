import NumberLine from "./components/NumberLine";
import NavBar from "../navigation/NavBar";

export default function NumberLineToTwenty() {
  return (
    <div>
      <NavBar />
      <p className="text-center text-3xl">Number Line to 20</p>
      <NumberLine min={0} max={20} />
    </div>
  );
}
