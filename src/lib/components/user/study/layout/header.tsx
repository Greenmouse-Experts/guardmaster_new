import { FC } from "react";
import { CourseItemType } from "../../../../../contracts/course";
import ProfileAvatar from "../../../ui/ProfileAvatar";

interface Props {
  data: CourseItemType;
  duration: string;
}
const CourseHeader: FC<Props> = ({ data, duration }) => {
  return (
    <div className="w-full shadow-xl">
      <div className="grid lg:grid-cols-6 items-center p-4 ">
        <div className="col-span-4">
          <p className="text-lg fw-600">{data?.title}</p>
        </div>
        <div className="col-span-2 flex items-center lg:gap-x-6">
          <p className="bg-primary text-white px-4 py-2">{duration} mins</p>
          <div className="text-gray-600">
            <div className="fw-500 flex gap-x-2">
              <div className="w-[53px] border border-black circle">
              <ProfileAvatar url={data?.instructor?.picture} name={`${data?.instructor?.firstName} ${data?.instructor?.lastName}`} size={50} font={20} /> 
              </div>
              <div>
              <p className="text-black">{`${data?.instructor?.firstName} ${data?.instructor?.lastName}`} </p>
              <p>Instructor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;
