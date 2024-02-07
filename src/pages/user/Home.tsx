import Footer from "../../lib/components/layout/landing/Footer"
import HomeHeader from "../../lib/components/layout/user/home/HomeHeader"
import CourseList from "../../lib/components/user/home/CourseList"
import UserBanner from "../../lib/components/user/home/UserBanner"

const UserHome = () => {
  return (
    <>
        <div>
            <HomeHeader/>
            <UserBanner/>
            <CourseList/>
            <Footer/>
        </div>
    </>
  )
}

export default UserHome