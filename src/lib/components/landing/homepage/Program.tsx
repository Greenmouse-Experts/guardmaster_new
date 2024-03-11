import { RiArrowRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { getPublicPrograms } from "../../../../services/api/publicApi";
import { useQuery } from "@tanstack/react-query";

const ProgramSection = () => {
  const {data, isLoading} = useQuery({
    queryFn: () => getPublicPrograms(1),
    queryKey: ['publicProgram']
  })
  const ProgItem = ["https://res.cloudinary.com/greenmouse-tech/image/upload/v1706796228/GuardMaster/Rectangle_21222_gpbuow.png", "https://res.cloudinary.com/greenmouse-tech/image/upload/v1706796228/GuardMaster/Rectangle_21223_c0unaw.png", "https://res.cloudinary.com/greenmouse-tech/image/upload/v1706796228/GuardMaster/Rectangle_21224_vkfohy.png", "https://res.cloudinary.com/greenmouse-tech/image/upload/v1706796228/GuardMaster/Rectangle_21225_fgs8cd.png", "https://res.cloudinary.com/greenmouse-tech/image/upload/v1706796228/GuardMaster/Rectangle_21222_gpbuow.png", "https://res.cloudinary.com/greenmouse-tech/image/upload/v1706796228/GuardMaster/Rectangle_21223_c0unaw.png", "https://res.cloudinary.com/greenmouse-tech/image/upload/v1706796228/GuardMaster/Rectangle_21224_vkfohy.png", "https://res.cloudinary.com/greenmouse-tech/image/upload/v1706796228/GuardMaster/Rectangle_21225_fgs8cd.png"]
  const  checkNums = [1,2,5,7,8]
  return (
    <>
      <div className="section bg-[#EDEDED]">
        <div className="box">
          <div>
            <div className="text-center">
              <p className="mt-3 fw-600 syne text-2xl lg:text-4xl">
                Guardmaster Institute Programs and Courses
              </p>
              <p className="lg:w-6/12 mx-auto mt-3 fw-500">
                With experienced instructors, security guidance, online study
                options and our maximum support, we make it easier to get into
                the high-demand security career of your choice.
              </p>
            </div>
            <div className="mt-6 lg:mt-16">
              <div className="md:w-9/12 mx-auto grid lg:grid-cols-2 gap-8">
                {
                  !isLoading && data && data?.data.map((item:any, i:number) => (
                    <div className="new-shade bg-white">
                  <div className={`flex px-4 lg:p-5 py-3 gap-x-3 items-center ${checkNums.includes(i)?'bg-pri' : 'bg-primary text-white'}`}>
                    <img
                      src={ProgItem[i]}
                      alt="icons"
                      className="w-10"
                    />
                    <p className="fw-600">
                      {item.title} Programs
                    </p>
                  </div>
                  <div className="p-4 py-6">
                    <ul className="grid gap-2">
                      {
                        item.courses.map((item:any, i:number) => (
                               <li className="flex items-center gap-x-2" key={i}>
                        <span className={`w-2 h-2 circle shrink bg-primary`}></span>
                        <span>{item.title}</span>
                      </li>
                        ))
                      }
                    </ul>
                    <div className="flex justify-end mt-7">
                      <Link
                        to={"/course"}
                        className="text-[#0D0D0D] flex gap-x-2 items-center fw-500"
                      >
                        View All Programs{" "}
                        <RiArrowRightLine className="text-pri" />
                      </Link>
                    </div>
                  </div>
                </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramSection;
