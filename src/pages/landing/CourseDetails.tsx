import { BsBank, BsBook, BsSuitcaseLg } from "react-icons/bs";
import { LuUserCheck2 } from "react-icons/lu";
import { SlNotebook } from "react-icons/sl";
import "../../Stylesheet/style.css";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { FaStar } from "react-icons/fa";

const CourseDetail = () => {
  const tolearn = [
    {
      name: "What you will learn from this course",
      dur: "40mins"
    },
    {
      name: "Get Started",
      dur: "102mins"
    },
    {
      name: "What is Corporate Security",
      dur: "67mins"
    },
    {
      name: "Understanding Principles",
      dur: "24mins"
    },
    {
      name: "Career Opportunities",
      dur: "40mins"
    },
    {
      name: "Outro",
      dur: "105mins"
    },
    {
      name: "Assessment and Exams",
      dur: "35mins"
    },
  ]
  const review = [
    {
      name: "Victor Dwane",
      ini: "VD",
      comment: "I'm thrilled with the knowledge I gained from this course. The instructors were engaging, and the course materials were top-notch. This course has truly been a game-changer for me professionally."
    },
    {
      name: "Anita Tabitha",
      ini: "AT",
      comment: "Enrolling in GICSM was one of the best decisions I've made for my career. The course structure was well-paced, and the interactive elements kept me engaged throughout."
    },
    {
      name: "Juliana Andrews",
      ini: "JA",
      comment: "I'm amazed by the level of support I received throughout. From the initial enrollment process to completing the final assessment, the team at GICSM was there every step of the way."
    },
    {
      name: "Alex Bestforth",
      ini: "AB",
      comment: "The online course offered by GICSM was a perfect fit for my learning style. The modules were concise yet comprehensive, and the interactive quizzes helped reinforce my understanding. "
    },
  ]
  return (
    <>
      <div className="">
        <div className="w-full relative z-0 h-[270px] pb-5 flex items-center bg-[url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1706272690/rsh/Group_48097479_1_kreeio.png')]">
          <div className="boxes">
            <p className="text-white !mont !text-3xl font-semibold">
              Corporate Security Management
            </p>
            <div className="mt-4 lg:flex gap-x-1 text-white">
              <p className="!mont">Home /</p>
              <p className="!mont">Course /</p>
              <p className="!mont">Mini MBA Programs /</p>
              <p className="!mont text-[#FFD347]">Corporate Security Management</p>
            </div>
          </div>
        </div>
        <div className="lg:pb-24 pb-12">
          {/* course outline */}
          <div className="w-10/12 bg-white relative z-10 -top-12 mx-auto drop-shade rounded-[13px] p-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:border-r-2">
              <p className="font-semibold !mont">Accredited Certificate</p>
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
                Get accessed through an online exam to certify knowledge on the
                course
              </p>
            </div>
          </div>
          <div className="boxes">
            <div className="lg:flex justify-between">
              <div className="lg:w-[67%]">
                <p className="!mont text-[#003DA5] font-medium">Overview</p>
                <p className="mt-4 !syne font-semibold !text-3xl">
                  A deeply engaging online Mini MBA Program from GICSM.
                </p>
                <p className="!mont mt-7">
                  Dive into the world of Corporate Security Management with our
                  deeply engaging online Mini MBA Program. Designed to provide a
                  comprehensive overview of key security concepts and
                  strategies, this program offers a dynamic learning experience
                  tailored for everyone. Explore essential topics, interact with
                  industry experts, and elevate your career with practical
                  insights and skills. Join us on this transformative journey
                  towards Corporate Security Management.
                </p>
                <div className="mt-12">
                  <p className="!mont font-semibold !text-lg">
                    What’s in this degree program?
                  </p>
                  <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mt-6">
                    <div className="flex gap-x-4">
                      <BsBank className="text-xl mt-2" />
                      <p className="w-[90%] !mont">
                        72 credit hours accredited by the American Society of
                        Industrial Security (ASIS)
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
                        network as you work alongside classmates and faculty
                      </p>
                    </div>
                    <div className="flex gap-x-4">
                      <BsBook className="text-xl mt-2" />
                      <p className="w-[90%] !mont">
                        Career-focused curriculum designed to build the
                        leadership and management skills needed to help you
                        thrive in today’s security environment.
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
                      <p className="!mont font-semibold !text-lg">Corporate Security Management</p>
                      <p className="text-[14px] !mont mt-1 lg:mt-0">23 lectures • 3hrs 25min</p>
                    </div>
                    <div>
                        {
                          tolearn.map((item) => (
                            <div className="lg:flex justify-between p-4 lg:px-6 border-t-2">
                              <div className="flex gap-x-2 items-center">
                              <MdOutlineOndemandVideo className="text-lg lg:text-xl"/>
                              <p className="!mont text-[#003DA5] font-medium underline">{item.name}</p>
                              </div>
                              <p className="!mont text-end font-medium text-[14px]">{item.dur}</p>
                            </div>
                          ))
                        }
                    </div>
                  </div>
                </div>
                <div className="mt-12">
                <p className="!mont text-[#003DA5] font-medium">4.7 course rating</p>
                <p className="mt-4 !syne font-semibold !text-3xl">
                Reviews and Ratings
                </p>
                <div className="mt-6 grid lg:grid-cols-2 gap-4 lg:gap-12">
                  {
                    review.map((item) => (
                      <div className="border-t-2 border-[#B7B7B7] pt-6">
                        <div className="flex items-center gap-x-3">
                          <div className="w-10 h-10 rounded-[50%] !mont text--[18px] font-semibold text-white bg-black flex items-center justify-center">
                            {item.ini}
                          </div>
                          <div>
                            <p className="!mont font-semibold">{item.name}</p>
                            <div className="text-[15px] text-[#B4690E] flex gap-x-2"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <p className="!mont text-[15px]">{item.comment}</p>
                        </div>
                      </div>
                    ))
                  }
                </div>
                </div>
              </div>
              <div className="lg:w-[28%] mt-8 lg:mt-0">
                <div className="bg-[#EBF3FF] p-5 rounded-[11px] lg:p-6">
                    <p className="font-semibold !mont !text-lg">Enrollment Information</p>
                    <div className="mt-6">
                      <p className="!mont text-[15px] font-medium">Enroll now in our Mini MBA course! Gain essential business knowledge and leadership skills in a condensed format. Perfect for busy professionals looking to enhance their career prospects. Limited seats available – secure your spot today!</p>
                      <p className="mt-3 !mont font-medium"><span className="font-semibold">Have Questions?</span> Please contact Guardmaster Institute at <span className="text-[#003DA5]">info@guardmasterinstitute.ca</span></p>
                    </div>
                </div>
                <div className="bg-[#EBF3FF] mt-6 lg:mt-12 p-6 rounded-[11px] lg:p-6">
                  <p className="!text-4xl font-bold">$35.00</p>
                  <div className="grid gap-2 mt-8">
                    <button className="w-full !mont py-3 bg-[#003DA5] rounded-[7px] font-semibold text-white">Add to Cart</button>
                    <button className="w-full !mont  py-3 border border-[#003DA5] text-[#003DA5] rounded-[7px] font-semibold">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetail;
