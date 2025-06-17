import { createContext, useContext, useState } from "react";
import type { TensFrameContext } from "../types/TensFrameTypes";

const TensFrameContext = createContext<TensFrameContext | undefined>(undefined);

export function TensFrameConextProvider({ children }) {
  const [totalBlue, setTotalBlue] = useState(0);
  const [totalRed, setTotalRed] = useState(0);
  return (
    <TensFrameContext.Provider
      value={{ totalBlue, setTotalBlue, totalRed, setTotalRed }}
    >
      {children}
    </TensFrameContext.Provider>
  );
}

export function useTensFrameContext() {
  const context = useContext(TensFrameContext);
  if (!context) {
    throw new Error("useTensFrameContext must be inside a context provider.");
  }
  return context;
}
