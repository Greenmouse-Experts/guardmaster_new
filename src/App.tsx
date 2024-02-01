import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./lib/utils/scrollTop";
import CookieModal from "./lib/utils/Cookie";
import Homepage from "./pages/landing/Homepage";
import LandingLayout from "./lib/components/layout/landing";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<LandingLayout />}>
          <Route path="/" element={<Homepage />} />
        </Route>
      </Routes>
      <CookieModal />
    </>
  );
}

export default App;
