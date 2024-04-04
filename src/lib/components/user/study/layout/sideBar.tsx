import { FC } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { PiBookOpenText, PiExam } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import logo from "../../../../../assets/favicon.png"

interface Props {
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
}
const CourseSideBar: FC<Props> = ({ setActive, active }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full shadow-xl min-h-screen relative grid content-center">
      <div className="w-full p-4 absolute  left-0">
        <img
          src={logo}
          alt="logo"
          className="w-9/12 cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="">
        <div
          className="text-gray-600 cursor-pointer"
          onClick={() => navigate("/user/dashboard")}
        >
          <IoHomeOutline className="text-center text-3xl mx-auto" />
          <p className="text-center fs-500 fw-600">Dashboard</p>
        </div>
        <div
          className={`cursor-pointer mt-4 ${active === 2 && "text-gray-600 "}`}
          onClick={() => setActive(1)}
        >
          <PiBookOpenText className="text-center text-3xl mx-auto" />
          <p className="text-center fw-600">Course</p>
        </div>
        <div
          className={`cursor-pointer mt-4 ${active === 1 && "text-gray-600 "}`}
          onClick={() => setActive(2)}
        >
          <PiExam className="text-center text-3xl mx-auto" />
          <p className="text-center fs-500 fw-600">Assesment</p>
        </div>
      </div>
    </div>
  );
};

export default CourseSideBar;
