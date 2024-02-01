import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const LandingLayout = () => {
  return (
    <>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default LandingLayout;
