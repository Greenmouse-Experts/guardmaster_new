import { useQuery } from "@tanstack/react-query";
import CoursePlayer from "../../lib/components/user/study/content/player";
import CourseDetails from "../../lib/components/user/study/details";
import CourseHeader from "../../lib/components/user/study/layout/header";
import CourseSideBar from "../../lib/components/user/study/layout/sideBar";
import { getSingleCourse } from "../../services/api/programApi";
import ContentList from "../../lib/components/user/study/content/contentList";
import { useState } from "react";

const StudyCourse = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["singleCourse"],
    queryFn: () => getSingleCourse(`bf915481-623a-458a-8b29-fb043ce0a55c`),
  });
  const [activeSub, setActiveSub] = useState({
    mediaType: '',
    media: '',
    duration: 0,
  })
  return (
    <div className="flex">
      <div className="w-[106px]">
        <CourseSideBar />
      </div>
      <div className="lg:w-[calc(100%_-_106px)] h-screen">
        {(data && !isLoading) && (
          <>
            <div>
              <CourseHeader data={data?.course} duration={data?.contents?.totalDuration}/>
            </div>
            <div className="lg:flex justify-between p-5">
              <div className="w-[65%]">
                <CoursePlayer active={activeSub}/>
                <CourseDetails data={data?.course} id={`bf915481-623a-458a-8b29-fb043ce0a55c`}/>
              </div>
              <div className="w-[33%]">
                <ContentList data={data?.contents?.data} setActive={setActiveSub}/>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default StudyCourse;
