import { useQuery } from "@tanstack/react-query";
import { useRef } from "react";
import { FaAngleRight } from "react-icons/fa";
import {
  RiArrowLeftLine,
  RiArrowRightLine,
  RiDoubleQuotesL,
} from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { getTestimony } from "../../../../services/api/routine";
import { TestimonyItem } from "../../../../contracts/routine";
import ProfileAvatar from "../../ui/ProfileAvatar";

const InstituteSection = () => {
  const navigate = useNavigate();
  const {data} = useQuery({
    queryKey: ['testimonies'],
    queryFn: getTestimony
  })
  const scrollRef = useRef<any>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 200; // Adjust scroll amount as needed
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 200; // Adjust scroll amount as needed
    }
  };
  return (
    <>
      <div>
        <div className="bg-[url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1706799632/GuardMaster/Rectangle_21220_1_tuscsz.png')] bg-cover">
          <div className="box">
            <div className="lg:flex justify-between py-24">
              <div className="text-white lg:w-5/12">
                <p className="fw-600 text-2xl lg:text-4xl syne">
                  We're{" "}
                  <span className="text-pri text-2xl lg:text-4xl">
                    Guardmaster Institute
                  </span>
                   {" "} & We're Different
                </p>
                <p className="mt-5 fs-500">
                  Specializing in both online and in-class courses, we tailor
                  our offerings to cater to the evolving needs of our learners.
                </p>
              </div>
              <div className="mt-12 lg:mt-0">
                <div
                  className="w-60 lg:w-80 flex justify-between p-3 bg-white cursor-pointer"
                  onClick={() => navigate("/auth/register")}
                >
                  <p className="fw-600 syne">Apply Now</p>
                  <FaAngleRight className="text-xl" />
                </div>
                <div
                  className="w-60 mt-4 lg:w-80 flex justify-between p-3 bg-white cursor-pointer"
                  onClick={() => navigate("/course")}
                >
                  <p className="fw-600 syne">Discover Our Programs</p>
                  <FaAngleRight className="text-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section bg-[#EDEDED]">
          <div className="box">
            <div>
              <div className="flex items-center justify-between">
                <p className="text-xl lg:text-3xl syne">
                  Our Students Attest to our Claims
                </p>
                <div className="flex items-center gap-x-4">
                  <div className="w-6 h-6 lg:w-10 lg:h-10 bg-pri place-center cursor-pointer" onClick={scrollLeft}>
                    <RiArrowLeftLine />
                  </div>
                  <div className="w-6 h-6 lg:w-10 lg:h-10 bg-pri place-center cursor-pointer" onClick={scrollRight}>
                    <RiArrowRightLine />
                  </div>
                </div>
              </div>
              <div className="mt-6 lg:mt-12">
                <div className="flex gap-x-6  w-full overflow-x-auto scroll-pro" ref={scrollRef}>
                  {data && data?.data?.length && data?.data?.map((item:TestimonyItem) => (
                    <div className="p-3 lg:p-6 bg-white w-[370px]">
                      <p>
                        <RiDoubleQuotesL />
                      </p>
                      <div className="min-h-[50px]">
                      <p className="mt-3 fs-500 w-[350px]">
                        {item.testimony}
                      </p>
                      </div>
                      <div className="mt-3 flex items-center gap-x-2">
                        {/* <div className="w-12 h-12 fw-600 circle place-center bg-black text-white">
                          {item.acc}
                        </div> */}
                        <ProfileAvatar url="" name={`${item.user.firstName} ${item.user.lastName}`} size={35} font={16} type="dark"/>
                        <p className="fw-600">{`${item.user.firstName} ${item.user.lastName}`}</p>
                      </div>
                      {/* <div className="mt-4 border-t border-[#B8B8B8] py- pt-5">
                        <div className="flex items-center gap-x-1">
                          <IoMdPlayCircle className="text-3xl text-[#052B5E] shrink-0" />
                          <p className="fw-500 fs-400 text-[#052B5E]">
                            Introduction to Security Management and
                            Services-2024
                          </p>
                        </div>
                      </div> */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstituteSection;
