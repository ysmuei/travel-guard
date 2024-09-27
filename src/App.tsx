import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import BannerPage from "./components/pages/BannerPage";
import EmbassyPage from "./components/pages/EmbassyPage";
import MainPage from "./components/pages/MainPage";
import PermissonPage from "./components/pages/PermissonPage";
import DetailPage from "./components/pages/DetailPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<BannerPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/details/:countryCode" element={<DetailPage />} />
        <Route path="/permission" element={<PermissonPage />} />
        <Route path="/embassy" element={<EmbassyPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
