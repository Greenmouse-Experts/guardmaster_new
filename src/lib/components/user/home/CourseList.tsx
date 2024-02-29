import { useEffect, useState } from "react"
import ProgramList from "./CourseList/ProgramList"
import CoursesListItems from "./CourseList/CoursesList"
import { getCourses, getProgramCourses } from "../../../../services/api/programApi"
import { CourseListItem } from "../../../../contracts/course"

const CourseList = () => {
  const [cat, setCat] = useState<string>('')
  const [courseData, setCourseData] = useState<CourseListItem[]>([])
  const fetchCourses = async() => {
    await getCourses()
    .then((res) => {
      setCourseData(res.data)
    })
    .catch(() => {})
  }
  const fetchProgramCourses = async (id:string, page:number) => {
    const payload = {
      id: id,
      page: page
    }
    await getProgramCourses(payload)
    .then((res) => {
      if(cat !== ''){
        setCourseData(res.data)
      }
    })
    .catch(() => {})
  }
  useEffect(() => {
    fetchCourses()
  }, [])
  useEffect(() => {
    if(cat == ""){
      fetchCourses()
    }else(
      fetchProgramCourses(cat, 1)
    )
  }, [cat])
  return (
    <>
    <div className="section">
        <div className="box">
          <div className="lg:flex lg:gap-x-12">
            <div className="lg:w-[250px]">
              <ProgramList active={cat} setActive={setCat}/>
            </div>
            <div className="lg:w-[calc(100%_-_250px)]">
              <CoursesListItems active={cat} data={courseData}/>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default CourseList