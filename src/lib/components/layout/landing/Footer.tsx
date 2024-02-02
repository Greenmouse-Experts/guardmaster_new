import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer>
      <div className="bg-primary text-white">
        <div className="border-b border-[#8C8C8C] pt-10 pb-9">
        <div className="box">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white font-semibold !text-3xl">
                Subscribe to our Newsletter
              </p>
            </div>
            <div className="lg:w-4/12">
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
          <div className="grid lg:grid-cols-4 mt-6 lg:mt-16">
            <div className="grid gap-4">
              <h3 className="text-[18px] font-semibold">Quick Links</h3>
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/course">Courses</Link>
              <Link to="/faq">FAQs</Link>
            </div>
            <div className="grid gap-4">
              <h3 className="text-[18px] font-semibold">Courses</h3>
              <p>
                <HashLink to={"/course#courses"}>
                  Corporate Security Mgmt
                </HashLink>
              </p>
              <p>
                <HashLink to={"/course#courses"}>Loss Prevention Mgmt</HashLink>
              </p>
              <p>
                <HashLink to={"/course#courses"}>
                  Private Security Business Mgmt
                </HashLink>
              </p>
              <p>
                <HashLink to={"/course#courses"}>Business Resilience</HashLink>
              </p>
            </div>
            <div className="grid gap-4">
              <h3 className="text-[18px] font-semibold">Company Details</h3>
              <p>+1 905 452 2470</p>
              <p>info@guardmasterinstitute.ca</p>
              <p>www.guardmasterinstitute.ca</p>
              <p className="lg:mb-5"></p>
            </div>
            <div className="grid gap-4">
              <h3 className="text-[18px] font-semibold">Our Programs</h3>
              <HashLink to={"/course#courses"}>Mini-MBA Programs</HashLink>
              <HashLink to={"/course#diploma"}>
                Professional Proficiency Programs
              </HashLink>
              <HashLink to={"/course#ppcp"}>
                Professional Certification Programs
              </HashLink>
              <HashLink to={"/course#plpcp"}>
                Provincial Licensing and Micro Credential Programs
              </HashLink>
            </div>
          </div>
        </div>
        <div className="border-t border-[#8C8C8C] pt-10 mt-12">
        <div className="box">
          <div className="pb-10 lg:flex justify-between">
            <p>Copyright © 2024 Guardmaster Institute. All Rights Reserved </p>
            <div className="flex gap-x-5 mt-6 lg:mt-0">
              <Link to={"/terms"}>Terms & Conditions</Link>
              <Link to={"/privacy"}>Privacy Policy</Link>
              <Link to={"/support"}>Support</Link>
            </div>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
