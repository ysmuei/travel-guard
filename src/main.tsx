import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Global } from "@emotion/react";
import { globalStyles } from "./styles/GlobalStyle"; 
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // QueryClient import

// QueryClient 인스턴스 생성
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Global styles={globalStyles} /> {/* 전역 스타일 적용 */}
    {/* QueryClientProvider로 App 감싸기 */}
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);
