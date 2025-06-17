import { useTensFrameContext } from "../contexts/TensFrameContext";
import { useState } from "react";

export default function Calculations() {
  const { totalBlue, totalRed } = useTensFrameContext();
  const [showCalculations, setShowCalculations] = useState(false);
  function handleClick() {
    setShowCalculations(!showCalculations);
  }
  return (
    <div>
      <div className="text-center m-2">
        <button className="bg-white rounded p-2" onClick={handleClick}>
          Show Calculations
        </button>
      </div>

      {showCalculations && (
        <div className="text-white text-xl text-center">
          <p>
            {totalBlue} + {totalRed} = {totalBlue + totalRed}
          </p>
          <p>
            {totalRed} + {totalBlue} = {totalRed + totalBlue}
          </p>
          <p>
            {totalBlue} - {totalRed} = {totalBlue - totalRed}
          </p>
        </div>
      )}
    </div>
  );
}
