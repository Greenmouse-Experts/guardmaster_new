import { RiArrowRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <>
      <div className="bg-[url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1708077629/GuardMaster/WhatsApp_Image_2024-02-16_at_10.07.07_1_yodft4.jpg')] bg-cover">
        <div className="section">
          <div className="box pt-[480px] md:pt-[150px] lg:pt-5 lg:py-5">
            <div>
              <div className="text-center">
                <p className="fs-400 text-[#052B5E] fw-600">About Us</p>
                <p className="mt-3 fw-600 syne text-2xl lg:text-4xl lg:w-7/12 mx-auto">
                  Discover the Essence of Guardmaster Institute
                </p>
              </div>
              <div className="mt-5 lg:mt-10">
                <p className="text-center lg:w-8/12 mx-auto lg:text-lg">
                  Guardmaster Institute of Corporate Security Management™ is an
                  accredited CPD Provider by TheCPD Group, UK. We are also
                  licensed by the Governments of Ontario and Alberta in Canada
                  as Trainer for their respective Provincial Security Guard
                  Licensing programs.
                </p>
                <div className="flex justify-center mt-7">
                  <Link
                    to={"/about"}
                    className="text-[#052B5E] flex gap-x-2 items-center fw-500"
                  >
                    Learn More <RiArrowRightLine />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
