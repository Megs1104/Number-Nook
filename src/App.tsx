import "./index.css";
import { Homepage } from "./features/home/Homepage";
import brownPaper from "./assets/brown-paper.jpg";
import { Route, Routes } from "react-router-dom";
import TensFrame from "./features/tens-frame/TensFrame";
import NumberLineToTen from "./features/number-lines/NumberLineToTen";
import NumberLineToTwenty from "./features/number-lines/NumberLineToTwenty";
import PartWholeModel from "./features/part-whole-model/PartWholeModel";
import {
  HTML5DragTransition,
  MultiBackend,
  TouchTransition,
  type MultiBackendOptions,
  type MultiBackendPipeline,
} from "react-dnd-multi-backend";
import { DndProvider as MultiDndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
function App() {
  const HTML5toTouch: MultiBackendOptions = {
    backends: [
      {
        backend: HTML5Backend,
        preview: true,
        id: "html5",
        transition: HTML5DragTransition,
      },
      {
        id: "touch",
        backend: TouchBackend,
        options: { enableMouseEvents: true },
        preview: true,
        transition: TouchTransition,
      },
    ] as MultiBackendPipeline,
  };
  return (
    <MultiDndProvider backend={MultiBackend} options={HTML5toTouch}>
      <div className="relative min-h-screen w-screen">
        <img
          src={brownPaper}
          alt="Brown Paper Overlay"
          className="absolute w-full h-full object-cover pointer-events-none z-0"
        />
        <div className="relative z-10 flex flex-col min-h-screen w-full">
          <div className="bg-darkGreen shadow-xl w-[85vw] max-w-[1200px] mx-auto min-h-screen">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/tens-frame" element={<TensFrame />} />
              <Route path="/number-line-to-ten" element={<NumberLineToTen />} />
              <Route
                path="/number-line-to-twenty"
                element={<NumberLineToTwenty />}
              />
              <Route path="/part-whole-model" element={<PartWholeModel />} />
            </Routes>
          </div>
        </div>
      </div>
    </MultiDndProvider>
  );
}

export default App;
