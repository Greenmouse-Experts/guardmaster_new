import { useQuery } from "@tanstack/react-query";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { getPublicPrograms } from "../../../../services/api/publicApi";

const Footer = () => {
  const { data } = useQuery({
    queryFn: () => getPublicPrograms(1),
    queryKey: ["publicProgram"],
  });
  return (
    <footer>
      <div className="bg-[url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1708077628/GuardMaster/WhatsApp_Image_2024-02-16_at_10.07.07_ypsnx6.jpg')] bg-cover text-white">
        <div className="border-b border-[#8C8C8C] pt-10 pb-9">
          <div className="box">
            <div className="lg:flex items-center justify-between">
              <div>
                <p className="text-white syne font-semibold text-xl lg:!text-3xl">
                  Subscribe to our Newsletter
                </p>
              </div>
              <div className="lg:w-4/12 mt-6 lg:mt-0">
                <div className="bg-white flex items-center p-2">
                  <input
                    type="email"
                    name="suscribe"
                    id=""
                    placeholder="Your Email"
                    className="p-2 w-full outline-none"
                  />
                  <button className="bg-pri text-black px-4 shrink-0 lg:px-6 fw-500 py-2">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="grid gap-10 lg:gap-0 lg:grid-cols-4 mt-6 lg:mt-16">
            <div className="grid gap-4">
              <h3 className="text-[18px] font-semibold">Quick Links</h3>
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/course">Courses</Link>
              {/* <Link to="/">Admission</Link> */}
              <Link to="/">Blog</Link>
              <Link to="/">Careers</Link>
            </div>
            <div className="grid gap-4">
              <h3 className="text-[18px] font-semibold">Legal</h3>
              <p>
                <Link to={"/"}>Terms and Conditions</Link>
              </p>
              <p>
                <Link to={"/"}>Privacy Policy</Link>
              </p>
              <p>
                <Link to={"/"}>Licence</Link>
              </p>
              <p>
                <Link to={"/"}>Certifications</Link>
              </p>
            </div>
            <div className="grid gap-4 lg:gap-5">
              <h3 className="text-[18px] font-semibold">Contact Info</h3>
              <p>Dougall Avenue, Windsor, Ontario, Canada</p>
              <p>+1 905 452 2470</p>
              <p>
                info@guardmaster
                <span className="sm:inline lg:block xl:inline">
                  institute.ca
                </span>
              </p>
              <p>
                www.guardmaster
                <span className="sm:inline lg:block xl:inline">
                  institute.ca
                </span>
              </p>
            </div>
            <div className="grid gap-4 pl-3">
              <h3 className="text-[18px] font-semibold">Our Programs</h3>
              {data &&
                data?.data.length &&
                data?.data?.slice(0, 4).map((item: any, i: number) => (
                  <HashLink to={"/course"} key={i}>
                    {item.title} Programs
                  </HashLink>
                ))}
            </div>
          </div>
        </div>
        <div className="border-t border-[#8C8C8C] pt-10 mt-12 lg:mt-16">
          <div className="box relative">
            <div className="flex justify-center">
              <div className="md:w-9/12 lg:w-6/12 xl:w-4/12 absolute -top-16">
                <ul className="w-full flex justify-between">
                  <li>
                    <a
                      href="https://www.facebook.com/GuardmasterInstituteCanada/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-12 h-12 place-center bg-primary circle border border-[#8C8C8C]">
                        <FaFacebookF className="text-white text-lg" />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/TheGuardmaster"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-12 h-12 place-center bg-primary circle border border-[#8C8C8C]">
                        <BsTwitterX className="text-white text-lg" />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/guardmasterinstitutecanada/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-12 h-12 place-center bg-primary circle border border-[#8C8C8C]">
                        <FaInstagram className="text-white text-lg" />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com/company/guardmasterinstitutecanada/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-12 h-12 place-center bg-primary circle border border-[#8C8C8C]">
                        <FaLinkedinIn className="text-white text-lg" />
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pb-10 pt-4 lg:flex justify-center">
              <p className="fw-500">
                © Copyright 2024 Guardmaster Institute of Corporate
                Security Management.{" "}
              </p>
              {/* <div className="md:flex gap-x-5 mt-6 lg:mt-0">
                <Link to={"/terms"}>Terms & Conditions</Link>
                <Link to={"/privacy"}>Privacy Policy</Link>
                <Link to={"/support"}>Support</Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
