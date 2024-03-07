import { useQuery } from "@tanstack/react-query"
import { fetchOrder } from "../../services/api/userApi"

const UserCourses = () => {
  const {} = useQuery({
    queryKey: ['userCourses'],
    queryFn: fetchOrder
  })
  return (
    <div>UserCourses</div>
  )
}

export default UserCourses