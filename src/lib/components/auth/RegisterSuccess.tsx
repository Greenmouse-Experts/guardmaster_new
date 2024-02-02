import React from "react";
import { Link } from "react-router-dom";

interface Props{
    pop:boolean
    showPop: React.Dispatch<React.SetStateAction<boolean>>
}
const RegisterSuccess:React.FC<Props> = ({ pop, showPop }) => {
  return (
    <>
      {pop && (
        <div
          className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-gray-100 bg-opacity-50"
          onClick={() => showPop(false)}
        >
          <div
            className="w-11/12 lg:w-[500px] text-center bg-white p-6 shadow rounded"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1705925994/rsh/check-mark_vhbeuv.png"
              alt="icon"
              className="w-24 mx-auto"
            />
            <p className="text-2xl font-semibold mont">Registration Successful</p>
            <p className="mb-8 mt-6 mont">
              A verification mail has been forwarded to your mailbox. Please
              click on the link provided to verify your account and gain access.
            </p>
            <Link to={"/"} className="mt-6 mont font-semibold">
              Continue
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default RegisterSuccess;
