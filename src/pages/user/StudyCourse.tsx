import { useQuery } from "@tanstack/react-query";
import CoursePlayer from "../../lib/components/user/study/content/player";
import CourseDetails from "../../lib/components/user/study/details";
import CourseHeader from "../../lib/components/user/study/layout/header";
import CourseSideBar from "../../lib/components/user/study/layout/sideBar";
import ContentList from "../../lib/components/user/study/content/contentList";
import { useEffect, useState } from "react";
import { fetchUserSingleCourse } from "../../services/api/userApi";
import { useParams } from "react-router-dom";
import AssessmentList from "../../lib/components/user/study/content/assessmentList";
import AssessmentDisplay from "../../lib/components/user/study/content/assessmentDisplay";
import HourGlassLoading from "../../lib/components/ui/loading/hourloading";

const StudyCourse = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["singleCourse", `${id}`],
    queryFn: () => fetchUserSingleCourse(`${id}`),
  });
  const [activeStudy, setActiveStudy] = useState(1);
  const [activeSub, setActiveSub] = useState({
    mediaType: "",
    media: "",
    duration: 0,
    title: "",
    id: ""
  });
  useEffect(() => {
    setActiveSub({
      mediaType: "",
      media: "",
      duration: 0,
      title: "",
      id: ""
    })
  }, [activeStudy])
  return (
    <div className="lg:flex">
      <div className="lg:w-[106px]">
        <CourseSideBar setActive={setActiveStudy} active={activeStudy}/>
      </div>
      <div className="lg:w-[calc(100%_-_106px)] h-screen">
      {isLoading && (
        <div className="place-center py-16">
          <HourGlassLoading size={1.3} />
        </div>
      )}
        {data && !isLoading && (
          <>
            <div>
              <CourseHeader
                data={data?.course}
                duration={data?.contents?.totalDuration}
              />
            </div>
            {activeStudy === 1 && (
              <div className="lg:flex justify-between p-2 lg:p-5">
                <div className="lg:w-[65%]">
                  <CoursePlayer active={activeSub} />
                  <CourseDetails
                    data={data?.course}
                    id={`${id}`}
                  />
                </div>
                <div className="lg:w-[33%]">
                  <ContentList
                    data={data?.contents?.data}
                    setActive={setActiveSub}
                    id={`${id}`}
                    reads={data?.reads}
                  />
                </div>
              </div>
            )}
            {activeStudy === 2 && (
              <div className="lg:flex justify-between p-2 lg:p-5">
                <div className="lg:w-[65%]">
                  <AssessmentDisplay active={activeSub}/>
                </div>
                <div className="lg:w-[33%]">
                  <AssessmentList
                    data={data?.contents?.data}
                    setActive={setActiveSub}
                    assessment={data?.assessmentResults}
                  />
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default StudyCourse;
