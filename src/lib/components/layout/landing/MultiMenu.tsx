import { NavLink } from "react-router-dom";
import { getPublicPrograms } from "../../../../services/api/publicApi";
import { useQuery } from "@tanstack/react-query";

const MultiMenu = () => {
  const { data } = useQuery({
    queryFn: () => getPublicPrograms(1),
    queryKey: ["publicProgram"],
  });
  return (
    <div className="box py-10 text-black">
      <div className="flex items-center gap-x-6">
        <h3 className="fw-600 text-primary syne text-3xl pr-6 border-r-[3px]">
          Programs and Courses{" "}
        </h3>
        <span className="fw-500 syne text-xl text-gray-600">
          Accredited CPD Provider by TheCPD Group, UK.
        </span>
      </div>
      <div className="grid gap-6 grid-cols-4  mt-8">
        {data &&
          data?.data.length &&
          data?.data?.slice(0, 4).map((item: any, i: number) => (
            <div key={i}>
              <h3 className="text-lg fw-600 pb-5 border-b border-[#052B5E]">
                {item.title} Programs
              </h3>
              <div className="grid mt-5 gap-3 text-gray-700">
                {item.courses.map((item: any) => (
                  <>
                    <NavLink to={`/course/${item.id}`}>{item.title}</NavLink>
                  </>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MultiMenu;
