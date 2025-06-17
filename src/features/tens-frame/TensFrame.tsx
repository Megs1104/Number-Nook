import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Frame from "./components/Frame";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import Calculations from "./components/Calculations";
import NavBar from "../navigation/NavBar";

export default function TensFrame() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="overflow-auto">
        <NavBar />
        <p className="text-center text-white text-xl mb-2">Tens Frame</p>
        <DndProvider backend={HTML5Backend}>
          <div className="flex flex-col items-center justify-center flex-grow gap-12">
            <div className="flex gap-8 mt-2">
              <CounterOne />
              <CounterTwo />
            </div>
            <div>
              <Frame />
            </div>
            <Calculations />
          </div>
        </DndProvider>
      </div>
    </div>
  );
}
