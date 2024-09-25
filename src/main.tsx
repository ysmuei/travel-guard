import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Global } from "@emotion/react";
import { globalStyles } from "./styles/GlobalStyle"; // 위에서 만든 파일 경로

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Global styles={globalStyles} /> {/* 전역 스타일 적용 */}
    <App />
  </StrictMode>
);
