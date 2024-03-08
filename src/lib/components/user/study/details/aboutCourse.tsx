import { FC } from "react";
import { CourseItemType } from "../../../../../contracts/course";

interface Props {
    data: CourseItemType;
  }
const AboutCourse:FC<Props> = ({data}) => {
  return (
    <div className="p-2">
        <div>
            <div className="flex gap-x-2 items-center">
                <img src={data.coverImage} alt="course" className="w-[80px] aspect-square object-cover shrink-0" />
                <div>
                    <p className="fw-500">Title: {data.title}</p>
                    <p className="mt-[4px] fw-500">Program: {data?.program?.title}</p>
                </div>
            </div>
            <div>
                <p className="fw-500 text-gray-500 mb-3 mt-5">Description:</p>
                <p>{data?.fullDesc}</p>
            </div>
        </div>
    </div>
  )
}

export default AboutCourse