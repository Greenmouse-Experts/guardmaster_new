import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./lib/utils/scrollTop";
import CookieModal from "./lib/utils/Cookie";
import Homepage from "./pages/landing/Homepage";
import LandingLayout from "./lib/components/layout/landing";
import FaqPage from "./pages/landing/Faq";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<LandingLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/faq" element={<FaqPage />} />
        </Route>
      </Routes>
      <CookieModal />
    </>
  );
}

export default App;
