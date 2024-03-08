import { IoHomeOutline } from "react-icons/io5";
import { PiBookOpenText, PiExam } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const CourseSideBar = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full shadow-xl min-h-screen relative grid content-center">
      <div className="w-full p-4 absolute top-2 left-0">
        <img
          src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1709899640/GuardMaster/Group_1_dolvs7.png"
          alt="logo"
          className="w-9/12 cursor-pointer"
          onClick={() => navigate('/')}
        />
      </div>
      <div className="">
        <div className="text-gray-600 cursor-pointer" onClick={() => navigate('/user/dashboard')}>
          <IoHomeOutline className="text-center text-3xl mx-auto" />
          <p className="text-center fs-500 fw-600">Dashboard</p>
        </div>
        <div className="my-5 cursor-pointer">
          <PiBookOpenText className="text-center text-3xl mx-auto" />
          <p className="text-center fw-600">Course</p>
        </div>
        <div className="text-gray-600 cursor-pointer">
          <PiExam className="text-center text-3xl mx-auto" />
          <p className="text-center fs-500 fw-600">Assesment</p>
        </div>
      </div>
    </div>
  );
};

export default CourseSideBar;
