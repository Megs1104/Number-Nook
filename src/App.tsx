import "./index.css";
import { Homepage } from "./features/home/Homepage";
import brownPaper from "./assets/brown-paper.jpg";
import { Route, Routes } from "react-router-dom";
import TensFrame from "./features/tens-frame/TensFrame";
import NumberLineToTen from "./features/number-lines/NumberLineToTen";
import NumberLineToTwenty from "./features/number-lines/NumberLineToTwenty";
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
function App() {
  return (
    <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
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
            </Routes>
          </div>
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
