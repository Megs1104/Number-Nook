import "./index.css";
import Header from "./features/home/components/Header";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TensFrame from "./features/tens-frame/components/TensFrame";
import CounterOne from "./features/tens-frame/components/CounterOne";
import CounterTwo from "./features/tens-frame/components/CounterTwo";
import brownPaper from "./assets/brown-paper.jpg";

function App() {
  return (
    <div className="h-screen w-screen relative overflow-hidden">
      <img
        src={brownPaper}
        alt="Brown Paper Overlay"
        className="absolute w-full h-full object-cover pointer-events-none z-0"
      />

      <div className="relative z-10 flex items-center justify-center">
        <div className="bg-darkGreen mt-8 rounded-3xl p-10 shadow-xl w-[90vw] max-w-5xl h-[90vh] overflow-auto">
          <Header />
          <DndProvider backend={HTML5Backend}>
            <div className="flex flex-col items-center justify-center flex-grow gap-12">
              <div className="flex gap-8 mt-2">
                <CounterOne />
                <CounterTwo />
              </div>
              <div>
                <TensFrame />
              </div>
            </div>
          </DndProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
