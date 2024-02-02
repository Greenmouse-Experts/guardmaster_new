import React from "react";
import { FaTimes } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

interface Props {
  close: () => void
}
export const SearchModal:React.FC<Props> = ({ close }) => {
  return (
    <>
      <div className="bg-white fixed z-[5000] w-full h-screen top-0 left-0 pacity-ani">
        <div className="lg:w-[87%] mx-auto py-8 px-3 lg:px-0">
          <div className="flex justify-between items-center">
            <img
              className="logo w-8/12 lg:w-4/12"
              src={
                "https://res.cloudinary.com/greenmouse-tech/image/upload/v1706009737/GuardMaster/Guardmaster_transparent1_1_1_wzdsac.png"
              }
              alt="logo"
            />
            <FaTimes className="text-2xl" onClick={close} />
          </div>
          <div className="mt-16">
            <div className="flex items-center border border-gray-400 rounded-lg">
              <input
                type="serch"
                className="w-full p-3 rounded-l-md border-none outline-none"
              />
              <IoSearchOutline className="w-24 text-3xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

