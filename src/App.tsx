import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./lib/utils/scrollTop";
import CookieModal from "./lib/utils/Cookie";
import Homepage from "./pages/landing/Homepage";
import LandingLayout from "./lib/components/layout/landing";
import FaqPage from "./pages/landing/Faq";
import About from "./pages/landing/About";
import Partnership from "./pages/landing/Partnership";
import Leadership from "./pages/landing/Leadership";
import ProgramsPage from "./pages/landing/Course";
import CourseDetail from "./pages/landing/CourseDetails";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgetPassword from "./pages/auth/Forget";
import ResetPassword from "./pages/auth/Reset";
import VerifyUser from "./pages/auth/Verify";
import Contact from "./pages/landing/Contact";
import UserIndex from "./pages/user";
import BlogPage from "./pages/landing/blog";
import BlogDetails from "./pages/landing/blogDetails";
import CareersPage from "./pages/landing/career";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Auth routes */}
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="auth/forget" element={<ForgetPassword />} />
        <Route path="/auth/confirm" element={<VerifyUser/>}/>
        <Route path="/auth/reset" element={<ResetPassword/>}/>
        <Route element={<LandingLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/course" element={<ProgramsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/career" element={<CareersPage/>}/>
          {/* <Route path="/bemember" element={<BeMember />} /> */}
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/course/:id" element={<CourseDetail/>}/>
        </Route>
        <Route path="/user/*" element={<UserIndex />} />
      </Routes>
      <CookieModal />
    </>
  );
}

export default App;
