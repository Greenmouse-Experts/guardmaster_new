import { Route, Routes, useNavigate } from "react-router-dom";
import UserHome from "./Home";
import { useEffect } from "react";
import UserDashboardLayout from "../../lib/components/layout/user/dashboard";
import UserDashboard from "./Dashboard";
import UserCourses from "./Courses";
import UserNotify from "./Notify";
import UserPayments from "./Payments";
import UserProgress from "./Progress";
import UserProfile from "./Profile";
import StudyCourse from "./StudyCourse";

const UserIndex = () => {
    const token = localStorage.getItem('guard_token')
    const navigate = useNavigate()
    useEffect(() => {
      if(!token){
        navigate("/auth/login");
      }
    }, [])
    if (!token) {
      return;
    }
  return (
    <>
      <Routes>
        <Route path="/" element={<UserHome />} />
        <Route path="/courses/:id" element={<StudyCourse/>}/>
        <Route element={<UserDashboardLayout/>}>
          <Route path="/dashboard" element={<UserDashboard/>}/>
          <Route path="/courses" element={<UserCourses/>}/>
          <Route path="/notify" element={<UserNotify/>}/>
          <Route path="/payments" element={<UserPayments/>}/>
          <Route path="/progress" element={<UserProgress/>}/>
          <Route path="/profile" element={<UserProfile/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default UserIndex;
