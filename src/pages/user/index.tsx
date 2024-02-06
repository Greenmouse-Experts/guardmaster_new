import { Route, Routes, useNavigate } from "react-router-dom";
import UserHome from "./Home";
import { useEffect } from "react";

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
        
      </Routes>
    </>
  );
};

export default UserIndex;
