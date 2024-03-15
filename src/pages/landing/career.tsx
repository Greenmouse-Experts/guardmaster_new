import { useEffect, useState } from "react";
import PostHeader from "../../lib/components/layout/landing/PostHeader";
import { getBearerToken } from "../../services/helpers";
import { FaSearch } from "react-icons/fa";
import CareerItem from "../../lib/components/landing/career/careerItem";
import { toast } from "react-toastify";
import HourGlassLoading from "../../lib/components/ui/loading/hourloading";

const CareersPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [location, setLoacation] = useState("");
  const getCareer = async () => {
    setLoading(true);
    await fetch(
      `https://careers-gicsm.greenmousetech.com/index.php?keyword=${search}&location=${location}&page=${page}&affid=3993993`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: getBearerToken(),
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res.jobs);
        setCount(res.pages);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        setLoading(false);
      });
  };
  useEffect(() => {
    getCareer();
  }, [page]);
  const handleFilter = () => {
    getCareer()
  }
  const handleNext = () => {
    if (page * 20 <= count) {
      setPage((old) => old + 1);
    } else {
      toast.info("This is the last page");
    }
  };
  const handlePrev = () => {
    if (page > 1) {
      setPage((old) => old - 1);
    } else {
      toast.info("This is the first page");
    }
  };
  const colors: string[] = [
    "border-purple-500",
    "border-blue-500",
    "border-yellow-500",
    "border-pink-500",
    "border-orange-500",
  ];
  return (
    <div>
      <div className="pb-12">
        <PostHeader
          image={
            "https://res.cloudinary.com/greenmouse-tech/image/upload/v1707231565/GuardMaster/Rectangle_3_10_stgoyx.png"
          }
          title="Career"
          nav="Career"
        />
      </div>
      <div className="box pb-24">
        <p className="text-lg lg:text-3xl fw-600">Careers</p>
        <div className="mt-6 grid grid-cols-5 lg:flex gap-3 relative z-10">
          <div className="col-span-5 lg:w-8/12">
            <input
              type="search"
              placeholder="Job Description"
              className="w-full p-2 border-[4px]"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="col-span-4 lg:w-3/12">
            <input
              type="text"
              placeholder="Location"
              className="w-full p-2 border-[4px]"
              onChange={(e) => setLoacation(e.target.value)}
            />
          </div>
          <div className={`lg:w-1/12 place-center cursor-pointer ${search === "" && location === ""? "bg-gray-200": "bg-primary"}`} onClick={handleFilter}>
            <FaSearch className="text-xl text-white" />
          </div>
        </div>
        <div className="grid gap-4 mt-9">
          {(!loading && data &&
            !!data?.length )&&
            data.map((item, index) => {
              const colorIndex = index % colors.length;
              const color = colors[colorIndex];
              return <CareerItem data={item} color={color} key={index} />;
            })}
        </div>
        <div>
          {loading && (
            <div className="place-center py-16">
              <HourGlassLoading size={1.3} />
            </div>
          )}
          {data && (
            <div className="box mt-6 flex justify-end">
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
                      page * 20 >= count
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
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
