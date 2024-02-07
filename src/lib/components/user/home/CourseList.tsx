import { useState } from "react"
import ProgramList from "./CourseList/ProgramList"
import CoursesListItems from "./CourseList/CoursesList"

const CourseList = () => {
  const [cat, setCat] = useState<string>('')
  return (
    <>
    <div className="section">
        <div className="box">
          <div className="lg:flex lg:gap-x-12">
            <div className="lg:w-[250px]">
              <ProgramList setActive={setCat}/>
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