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
    <div className="w-full pr-2 lg:pr-0 shadow-xl lg:min-h-screen lg:h-full relative grid content-center">
      <div className="lg:w-full p-2 pt-3 lg:p-4 absolute  left-0">
        <img
          src={logo}
          alt="logo"
          className="w-12 lg:w-9/12 cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="flex py-5 lg:py-0 gap-x-3 lg:block justify-end">
        <div
          className="text-gray-600 cursor-pointer"
          onClick={() => navigate("/user/dashboard")}
        >
          <IoHomeOutline className="text-center text-3xl mx-auto" />
          <p className="hidden lg:block text-center fs-500 fw-600">Dashboard</p>
        </div>
        <div
          className={`cursor-pointer lg:mt-4 ${active === 2 && "text-gray-600 "}`}
          onClick={() => setActive(1)}
        >
          <PiBookOpenText className="text-center text-3xl mx-auto" />
          <p className="hidden lg:block text-center fw-600">Course</p>
        </div>
        <div
          className={`cursor-pointer lg:mt-4 ${active === 1 && "text-gray-600 "}`}
          onClick={() => setActive(2)}
        >
          <PiExam className="text-center text-3xl mx-auto" />
          <p className="hidden lg:block text-center fs-500 fw-600">Assesment</p>
        </div>
      </div>
    </div>
  );
};

export default CourseSideBar;
