import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ErrorBoundary from "./components/common/ErrorBoundary";

// 동적 임포트를 사용하여 각 페이지 컴포넌트를 lazy-load 합니다.
const BannerPage = lazy(() => import("./components/pages/BannerPage"));
const EmbassyPage = lazy(() => import("./components/pages/EmbassyPage"));
const MainPage = lazy(() => import("./components/pages/MainPage"));
const PermissionPage = lazy(() => import("./components/pages/PermissonPage"));
const DetailPage = lazy(() => import("./components/pages/DetailPage"));

// 로딩 컴포넌트
const Loading = () => <div>Loading...</div>;

// 에러 폴백 컴포넌트
const ErrorFallback = () => <div>Something went wrong! Please try again later.</div>;

function App() {
  return (
    <Router>
      <ErrorBoundary fallback={<ErrorFallback />}>
        <Header />
        {/* Suspense로 lazy-loaded 컴포넌트의 로딩 상태 처리 */}
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<BannerPage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/details/:countryCode" element={<DetailPage />} />
            <Route path="/permission" element={<PermissionPage />} />
            <Route path="/embassy" element={<EmbassyPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </ErrorBoundary>
    </Router>
  );
}

export default App;
