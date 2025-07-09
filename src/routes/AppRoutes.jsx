import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShortenerPage from "../pages/ShortenerPage";
import StatisticsPage from "../pages/StatisticsPage";
import RedirectHandler from "../components/RedirectHandler";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShortenerPage />} />
        <Route path="/stats" element={<StatisticsPage />} />
        <Route path="/:shortcode" element={<RedirectHandler />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
