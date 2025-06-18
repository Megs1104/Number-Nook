import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Frame from "./components/Frame";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import Calculations from "./components/Calculations";
import NavBar from "../navigation/NavBar";

export default function TensFrame() {
  return (
    <div className="w-full">
      <NavBar />
      <p className="text-center text-3xl">Tens Frame</p>
      <DndProvider backend={HTML5Backend}>
        <div>
          <div className="flex gap-8 justify-center mt-4 mb-4">
            <CounterOne />
            <CounterTwo />
          </div>
          <div className="w-full justify-center flex">
            <Frame />
          </div>
          <Calculations />
        </div>
      </DndProvider>
    </div>
  );
}
