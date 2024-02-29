import { useState } from "react"
import ProgramList from "./CourseList/ProgramList"
import CoursesListItems from "./CourseList/CoursesList"
import { getCourses } from "../../../../services/api/programApi"
import { useQuery } from "@tanstack/react-query"

const CourseList = () => {
  const [cat, setCat] = useState<string>('')
  const { isLoading } = useQuery({
    queryKey: ["getCourses"],
    queryFn: getCourses,
    retry: 0
  });
  return (
    <>
    <div className="section">
        <div className="box">
          <div className="lg:flex lg:gap-x-12">
            <div className="lg:w-[250px]">
              <ProgramList active={cat} setActive={setCat}/>
            </div>
            <div className="lg:w-[calc(100%_-_250px)]">
              <CoursesListItems active={cat}/>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default CourseList