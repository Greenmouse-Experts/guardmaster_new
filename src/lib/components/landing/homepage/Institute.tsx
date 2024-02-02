import { FaAngleRight } from "react-icons/fa";
import { IoMdPlayCircle } from "react-icons/io";
import {
  RiArrowLeftLine,
  RiArrowRightLine,
  RiDoubleQuotesL,
} from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const InstituteSection = () => {
  const navigate = useNavigate();
  const review = [
    {
      name: "Victor Nwanfor",
      acc: "VD",
    },
    {
      name: "Chloe Bailey",
      acc: "CB",
    },
    {
      name: "Layi Wasabi",
      acc: "LW",
    },
    {
      name: "Jason Freeman",
      acc: "JF",
    },
    {
      name: "Thomas Grind",
      acc: "TD",
    },
    {
      name: "Victor Nwanfor",
      acc: "VD",
    },
    {
      name: "Abigirl Norman",
      acc: "AN",
    },
  ];
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
                  <div className="w-6 h-6 bg-pri place-center cursor-pointer">
                    <RiArrowLeftLine />
                  </div>
                  <div className="w-6 h-6 bg-pri place-center cursor-pointer">
                    <RiArrowRightLine />
                  </div>
                </div>
              </div>
              <div className="mt-6 lg:mt-12 w-full overflow-x-auto scroll-pro">
                <div className="flex gap-x-6">
                  {review.map((item) => (
                    <div className="p-3 lg:p-6 bg-white w-[370px]">
                      <p>
                        <RiDoubleQuotesL />
                      </p>
                      <p className="mt-3 fs-500 w-[350px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam lacinia leo eget turpis pretium elementum.
                      </p>
                      <div className="mt-3 flex items-center gap-x-2">
                        <div className="w-12 h-12 fw-600 circle place-center bg-black text-white">
                          {item.acc}
                        </div>
                        <p className="fw-600">{item.name}</p>
                      </div>
                      <div className="mt-4 border-t border-[#B8B8B8] py- pt-5">
                        <div className="flex items-center gap-x-1">
                          <IoMdPlayCircle className="text-3xl text-[#052B5E] shrink-0" />
                          <p className="fw-500 fs-400 text-[#052B5E]">
                            Introduction to Security Management and
                            Services-2024
                          </p>
                        </div>
                      </div>
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
