import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/element/css/effect-fade";
import "swiper/css/bundle";
import { register } from "swiper/element/bundle";
import { Autoplay, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";
import { RiArrowRightLine } from "react-icons/ri";
import BottomDisplay from "./BottomDisplay";
// register Swiper custom elements
register();

const HeroSlide = () => {
  return (
    <>
      <div className="relative h-[670px]">
        <Swiper
          effect={"fade"}
          autoplay={{ delay: 6000 }}
          modules={[Autoplay, EffectFade]}
          className="h-[670px]"
        >
          <SwiperSlide>
            <div className="home bg-first bg-cover bg-[left_20px] lg:bg-top">
              <div className="box text-white">
                <h2 className="text-5xl fw-600">
                  Your Gateway to Knowledge <br /> and Excellence!
                </h2>
                <p className="mt-6 lg:text-lg">
                  Ignite Your Potential: Explore, Learn, and <br /> Thrive at
                  Guardmaster Institute
                </p>
                <div className="flex mt-6 lg:mt-12">
                  <Link
                    to="/course"
                    className="btn-feel flex items-center gap-x-2 py-3 px-6"
                  >
                    Discover all our Courses <RiArrowRightLine />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home bg-second bg-cover bg-center  lg:bg-top">
              <div className="box text-white">
                <h2 className="text-5xl fw-600">
                  Explore Infinite Possibilities <br /> Here!
                </h2>
                <p className="mt-6 lg:text-lg">
                  We are dedicated to empowering students with the right <br />{" "}
                  knowledge and skills needed.
                </p>
                <div className="flex mt-6 lg:mt-12">
                  <Link
                    to="/course"
                    className="btn-feel flex items-center gap-x-2 py-3 px-6"
                  >
                    Discover all our Courses <RiArrowRightLine />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home bg-third bg-cover bg-left lg:bg-top">
              <div className="box text-white">
                <h2 className="text-5xl fw-600">
                  Building Bridges to Success in <br />
                  Security Management
                </h2>
                <p className="mt-6 lg:text-lg">
                  We provide students with the tools and resources they need to{" "}
                  <br /> thrive in the security space
                </p>
                <div className="flex mt-6 lg:mt-12">
                  <Link
                    to="/course"
                    className="btn-feel flex items-center gap-x-2 py-3 px-6"
                  >
                    Discover all our Courses <RiArrowRightLine />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home bg-fourth bg-cover bg-left lg:bg-top">
              <div className="box text-white">
                <h2 className="text-5xl fw-600">
                  Unleashing Potential, Driving <br /> and Excellence!
                </h2>
                <p className="mt-6 lg:text-lg">
                  Our institute is dedicated to unleashing the full potential of
                  students and driving <br /> excellence through innovative
                  teaching.
                </p>
                <div className="flex mt-6 lg:mt-12">
                  <Link
                    to="/course"
                    className="btn-feel flex items-center gap-x-2 py-3 px-6"
                  >
                    Discover all our Courses <RiArrowRightLine />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home bg-fifth bg-cover bg-left lg:bg-top">
              <div className="box text-white">
                <h2 className="text-5xl fw-600">
                  Innovative Learning Solutions <br /> for All!
                </h2>
                <p className="mt-6 lg:text-lg">
                  We offer innovative learning solutions to diverse learning
                  styles and adapt to <br />
                  the needs of the education landscape.
                </p>
                <div className="flex mt-6 lg:mt-12">
                  <Link
                    to="/course"
                    className="btn-feel flex items-center gap-x-2 py-3 px-6"
                  >
                    Discover all our Courses <RiArrowRightLine />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home bg-sixth bg-cover bg-left lg:bg-top">
              <div className="box text-white">
                <h2 className="text-5xl fw-600">
                  Innovative Learning Solutions <br /> for All!
                </h2>
                <p className="mt-6 lg:text-lg">
                  We offer innovative learning solutions to diverse learning
                  styles and adapt to <br />
                  the needs of the education landscape.
                </p>
                <div className="flex mt-6 lg:mt-12">
                  <Link
                    to="/course"
                    className="btn-feel flex items-center gap-x-2 py-3 px-6"
                  >
                    Discover all our Courses <RiArrowRightLine />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <BottomDisplay/>
      </div>
    </>
  );
};

export default HeroSlide;
