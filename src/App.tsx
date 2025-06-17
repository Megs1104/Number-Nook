import "./index.css";
import { Homepage } from "./features/home/Homepage";
import brownPaper from "./assets/brown-paper.jpg";
import { Route, Routes } from "react-router-dom";
import TensFrame from "./features/tens-frame/TensFrame";

function App() {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden">
      <img
        src={brownPaper}
        alt="Brown Paper Overlay"
        className="absolute w-full h-full object-cover pointer-events-none z-0"
      />
      <div className="relative z-10 flex flex-col min-h-screen w-full">
        <div className="bg-darkGreen p-20 shadow-xl w-[85vw] max-w-[1200px] mx-auto min-h-screen">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/tens-frame" element={<TensFrame />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
