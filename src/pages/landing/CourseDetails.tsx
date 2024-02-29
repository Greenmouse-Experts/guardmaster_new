import { BsBank, BsBook, BsSuitcaseLg } from "react-icons/bs";
import { LuUserCheck2 } from "react-icons/lu";
import { SlNotebook } from "react-icons/sl";
import "../../Stylesheet/style.css";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getSingleCourse } from "../../services/api/programApi";
import { useEffect, useState } from "react";
import { CourseContentType, CourseItemType } from "../../contracts/course";
import ContentList from "../../lib/components/landing/course/contentList";
import useModal from "../../hooks/useModal";
import PaymentModal from "../../lib/components/landing/course/paymentModal";
import { goToPayment } from "../../services/api/paymentApi";

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState<CourseItemType>();
  const [content, setContent] = useState<CourseContentType>();
  const [payInfo, setPayInfo] = useState<any>();
  const { data, isLoading } = useQuery({
    queryKey: ["singleCourse"],
    queryFn: () => getSingleCourse(`${id}`),
  });
  useEffect(() => {
    setCourse(data?.course);
    setContent(data?.contents);
  }, [data]);
  const proceedToPayment = () => {
    const payload = {
      courses: [{ id: id, price: course?.price }],
      amount: course?.price,
    };
    goToPayment(payload)
      .then((res) => {
        setPayInfo(res.data);
        setShowModal(true);
      })
      .catch(() => {});
  };
  const { Modal, setShowModal } = useModal();
  return (
    <>
      <div>
        <div className="">
          {!isLoading && data && (
            <div>
              <div className="w-full relative z-0 h-[270px] pb-5 flex items-center bg-[url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1706272690/rsh/Group_48097479_1_kreeio.png')]">
                <div className="boxes">
                  <p className="text-white !mont !text-3xl font-semibold">
                    {course?.title}
                  </p>
                  <div className="mt-4 lg:flex gap-x-1 text-white">
                    <p className="!mont">Home /</p>
                    <p className="!mont">Course /</p>
                    <p className="!mont">{course?.program?.title} /</p>
                    <p className="!mont text-[#FFD347]">{course?.title}</p>
                  </div>
                </div>
              </div>
              <div className="lg:pb-24 pb-12">
                {/* course outline */}
                <div className="w-10/12 bg-white relative z-10 -top-12 mx-auto drop-shade rounded-[13px] p-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <div className="lg:border-r-2">
                    <p className="font-semibold !mont">
                      Accredited Certificate
                    </p>
                    <p className="!text-[14px] !mont mt-1">
                      Offered by Guardmaster Institute of Corporate Security
                      Management
                    </p>
                  </div>
                  <div className="lg:border-r-2">
                    <p className="font-semibold !mont">3-5 months</p>
                    <p className="!text-[14px] !mont mt-1">
                      72 credit hours of graduate coursework
                    </p>
                  </div>
                  <div className="lg:border-r-2">
                    <p className="font-semibold !mont">100% online</p>
                    <p className="!text-[14px] !mont mt-1">
                      Hands-on learning from anywhere, no travel required
                    </p>
                  </div>
                  <div className="">
                    <p className="font-semibold !mont">Assessment and Exams</p>
                    <p className="!text-[14px] !mont mt-1">
                      Get accessed through an online exam to certify knowledge
                      on the course
                    </p>
                  </div>
                </div>
                <div className="boxes">
                  <div className="lg:flex justify-between">
                    <div className="lg:w-[67%]">
                      <p className="!mont text-[#003DA5] font-medium">
                        Overview
                      </p>
                      <p className="mt-4 !syne font-semibold !text-3xl">
                        A deeply engaging online {course?.program?.title} from
                        GICSM.
                      </p>
                      <p className="!mont mt-7">{course?.fullDesc}</p>
                      <div className="mt-12">
                        <p className="!mont font-semibold !text-lg">
                          What’s in this degree program?
                        </p>
                        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mt-6">
                          <div className="flex gap-x-4">
                            <BsBank className="text-xl mt-2" />
                            <p className="w-[90%] !mont">
                              72 credit hours accredited by the American Society
                              of Industrial Security (ASIS)
                            </p>
                          </div>
                          <div className="flex gap-x-4">
                            <LuUserCheck2 className="text-xl mt-2" />
                            <p className="w-[90%] !mont">
                              Participate in online classes with faculty, team
                              projects, and other students registered to GICSM
                            </p>
                          </div>
                          <div className="flex gap-x-4">
                            <BsSuitcaseLg className="text-xl mt-2" />
                            <p className="w-[90%] !mont">
                              Gain lifelong security skills, and build a global
                              network as you work alongside classmates and
                              faculty
                            </p>
                          </div>
                          <div className="flex gap-x-4">
                            <BsBook className="text-xl mt-2" />
                            <p className="w-[90%] !mont">
                              Career-focused curriculum designed to build the
                              leadership and management skills needed to help
                              you thrive in today’s security environment.
                            </p>
                          </div>
                          <div className="flex gap-x-4">
                            <SlNotebook className="text-xl mt-2" />
                            <p className="w-[90%] !mont">
                              Complete core assessments and exams to gain
                              certifications on the course from GICSM
                            </p>
                          </div>
                          <div className="flex gap-x-4">
                            <LuUserCheck2 className="text-xl mt-2" />
                            <p className="w-[90%] !mont">
                              Learn from world-class instructors and industry
                              educators from top companies like Google
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-12">
                        <p className="!mont font-semibold !text-3xl">
                          Course Contents
                        </p>
                        <div className="mt-7 border-2 border-[#B7B7B7]">
                          <div className="bg-[#D9D9D9] p-5 lg:flex justify-between !mont font-semibold">
                            <p className="!mont font-semibold !text-lg">
                              {course?.title}
                            </p>
                            <p className="text-[14px] !mont mt-1 lg:mt-0">
                              {content?.data.length} lectures •{" "}
                              {content?.totalDuration} mins
                            </p>
                          </div>
                          <div>
                            <ContentList data={content?.data || []} />
                          </div>
                        </div>
                      </div>
                      <div className="mt-12">
                        <p className="!mont text-[#003DA5] font-medium">
                          0.0 course rating
                        </p>
                        <p className="mt-4 !syne font-semibold !text-3xl">
                          Reviews and Ratings
                        </p>
                        {/* <CourseRating/> */}
                      </div>
                    </div>
                    <div className="lg:w-[28%] mt-8 lg:mt-0">
                      <div className="bg-[#EBF3FF] p-5 rounded-[11px] lg:p-6">
                        <p className="font-semibold !mont !text-lg">
                          Enrollment Information
                        </p>
                        <div className="mt-6">
                          <p className="!mont text-[15px] font-medium">
                            Enroll now in our {course?.title}! Gain essential
                            business knowledge and leadership skills in a
                            condensed format. Perfect for busy professionals
                            looking to enhance their career prospects. Limited
                            seats available – secure your spot today!
                          </p>
                          <p className="mt-3 !mont font-medium">
                            <span className="font-semibold">
                              Have Questions?
                            </span>{" "}
                            Please contact Guardmaster Institute at{" "}
                            <span className="text-[#003DA5]">
                              info@guardmasterinstitute.ca
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="bg-[#EBF3FF] mt-6 lg:mt-12 p-6 rounded-[11px] lg:p-6">
                        <p className="!text-4xl font-bold">
                          {course?.originalPriceFormat}
                        </p>
                        <div className="grid gap-2 mt-8 lg:mt-12">
                          <button className="w-full !mont py-3 bg-[#003DA5] rounded-[7px] font-semibold text-white">
                            Add to Cart
                          </button>
                          <button
                            className="w-full !mont  py-3 border border-[#003DA5] text-[#003DA5] rounded-[7px] font-semibold"
                            onClick={() => proceedToPayment()}
                          >
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <Modal title="" size="sm" type="">
          <PaymentModal
            data={payInfo}
            close={() => setShowModal(false)}
            name={course?.title}
            amount={course?.originalPriceFormat}
          />
        </Modal>
      </div>
    </>
  );
};

export default CourseDetail;
