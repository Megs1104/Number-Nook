import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { TensFrameConextProvider } from "./features/tens-frame/contexts/TensFrameContext.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <TensFrameConextProvider>
        <App />
      </TensFrameConextProvider>
    </BrowserRouter>
  </StrictMode>,
);
