import { FC } from "react";
import { CourseItemType } from "../../../../../contracts/course";
import Tabs from "../../../ui/Tabs"
import AboutCourse from "./aboutCourse"
import CourseReview from "./courseReview"

interface Props {
    data: CourseItemType;
    id: string;
  }
const CourseDetails:FC<Props> = ({data, id}) => {
    const detailTab = [
        {
            title: <p>About</p>,
            content: <AboutCourse data={data}/>
        },
        {
            title: <p>Reviews</p>,
            content: <CourseReview id={id}/>
        }
    ]
  return (
    <div className="mt-7">
        <Tabs tabs={detailTab} type=""/>
    </div>
  )
}

export default CourseDetails