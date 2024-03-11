import { useEffect, useState } from "react";
import { fetchUserCourses } from "../../services/api/userApi";
import HourGlassLoading from "../../lib/components/ui/loading/hourloading";
import { PurchaseItemType } from "../../contracts/course";
import { Progress, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const UserCourses = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  // const [list, setList] = useState({
  //   title: '',
  //   status: 'confirmed'
  // })
  const fetchCourses = async () => {
    setLoading(true);
    await fetchUserCourses()
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  useEffect(() => {
    fetchCourses();
  }, []);
  return (
    <div>
      {loading && (
        <div className="place-center py-16">
          <HourGlassLoading size={1.3} />
        </div>
      )}
      <div className="grid lg:grid-cols-3 gap-5 lg:gap-9">
        {!loading &&
          !!data?.length &&
          data.map((item: PurchaseItemType) => (
            <div className="" key={item.id}>
              <div className="w-full h-[150px]">
                <img
                  src={item.course.coverImage}
                  alt="course"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 bg-white shadow-lg">
                <div className="h-[70px]">
                  <p className="fw-500 text-gray-600 !syne">
                    {item.course.title}
                  </p>
                </div>
                <div className="mt-3">
                  <div className="w-full">
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <Typography color="blue-gray" variant="h6">
                        Completed
                      </Typography>
                      <Typography color="green" variant="h6">
                        50%
                      </Typography>
                    </div>
                    <Progress value={50} color="green" variant="gradient"/>
                  </div>
                </div>
                <div className="mt-5 p-2">
                  <button className="w-full bg-light fw-600 fs-500 !syne text-gray-600 py-3 rounded shadow-lg hover:shadow-xl hover:scale-x-110 duration-100" onClick={() => navigate(`/user/courses/${item.course.id}`)}>Continue Study</button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserCourses;
