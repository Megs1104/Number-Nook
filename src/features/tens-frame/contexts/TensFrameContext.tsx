import { createContext, useContext, useState } from "react";
import type { TensFrameContext } from "../types/TensFrameTypes";
import type { ReactNode } from "react";

const TensFrameContext = createContext<TensFrameContext | undefined>(undefined);

export function TensFrameConextProvider({ children }: { children: ReactNode }) {
  const [totalBlue, setTotalBlue] = useState<number>(0);
  const [totalRed, setTotalRed] = useState<number>(0);
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
