import { useEffect, useState } from "react";
import { fetchUserCourses } from "../../services/api/userApi";
import HourGlassLoading from "../../lib/components/ui/loading/hourloading";
import { PurchaseItemType } from "../../contracts/course";
import { Progress, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { EmptyData } from "../../lib/components/ui/empty/emptyStates";
import { toast } from "react-toastify";

const UserCourses = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  // const [list, setList] = useState({
  //   title: '',
  //   status: 'confirmed'
  // })
  const fetchCourses = async (page:number) => {
    setLoading(true);
    await fetchUserCourses(page)
      .then((res) => {
        setData(res.data);
        setCount(res.count);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  useEffect(() => {
    fetchCourses(1);
  }, []);
  const handleNext = () => {
    if (page * 10 >= count) {
      toast.info("This is the last page");
      return;
    }
    setPage(page + 1);
    fetchCourses(page + 1);
  };
  const handlePrev = () => {
    if (page === 1) {
      toast.info("This is the first page");
      return;
    }
    setPage(page - 1);
    fetchCourses(page - 1);
  };
  return (
    <div className="bg-white lg:p-3">
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
                    <Progress value={50} color="green" variant="gradient" />
                  </div>
                </div>
                <div className="mt-5 p-2">
                  <button
                    className="w-full bg-light fw-600 fs-500 !syne text-gray-600 py-3 rounded shadow-lg hover:shadow-xl hover:scale-x-110 duration-100"
                    onClick={() => navigate(`/user/courses/${item.course.id}`)}
                  >
                    Continue Study
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      {!loading && !!data?.length && (
        <div className="mt-6 flex justify-end">
          <div className="flex gap-x-4 items-center">
            <p className="fw-600">Page {page}</p>
            <div className="flex gap-x-2 items-center">
              <div
                onClick={handlePrev}
                className={`px-2 py-1 rounded ${
                  page === 1
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-primary text-white cursor-pointer"
                }`}
              >
                Prev
              </div>
              <div
                onClick={handleNext}
                className={`px-2 py-1 rounded ${
                  page * 10 >= count
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-primary text-white cursor-pointer"
                }`}
              >
                Next
              </div>
            </div>
          </div>
        </div>
      )}
      {!loading && data && !data.length && (
        <div>
          <EmptyData size="350" msg="No purcahsed course yet" />
        </div>
      )}
    </div>
  );
};

export default UserCourses;
