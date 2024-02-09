import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { useState } from "react";
import { BsLinkedin, BsTelephone } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { SearchModal } from "../../landing/homepage/SearchModal";
import MultiMenu from "./MultiMenu";
import { RiCloseFill, RiMenuFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";
import useAuth from "../../../../hooks/authUser";

const Header = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const [showSearch, setShowSearch] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className=" text-primary bg-[#FFD347] py-2">
        <div className="box flex items-center justify-between fs-500 ">
          <ul className="flex gap-x-3 md:gap-x-4 lg:gap-x-6 items-center">
            <li className="flex items-center gap-x-1 fw-600 fs-200 lg:fs-300 md:border-r border-black pr-4">
              <BsTelephone className="text-sm mt-[1px]" /> +1 905-452-2470
            </li>
            <li className="fw-600 fs-200 lg:fs-300 hidden md:block">
              info@guardmasterinstitute.ca
            </li>
          </ul>
          <ul className="flex items-center gap-x-4">
            {isLoggedIn ? (
              <>
                <li className="border-r border-black pr-4">
                  <Link to={"/user"} className=" fs-200 lg:fs-300 fw-600">
                    Home
                  </Link>
                </li>
                <li className="hidden sm:block border-r border-black pr-4">
                  <Link to={"/user/dashboard"} className="fw-600 fs-200 lg:fs-300">
                   Dashboard
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="hidden md:block border-r border-black pr-4">
                  <Link to={"/auth/login"} className=" fs-200 lg:fs-300 fw-600">
                    Student Login
                  </Link>
                </li>
                <li className="hidden sm:block border-r border-black pr-4">
                  <Link to={"/contact"} className="fw-600 fs-200 lg:fs-300">
                    Contact Us
                  </Link>
                </li>
              </>
            )}
            <li className="flex gap-x-1 items-center">
              <Link
                to={"https://www.instagram.com/guardmasterinstitutecanada/"}
              >
                <AiFillInstagram className="fs-700" />
              </Link>
              <Link to={"https://twitter.com/TheGuardmaster"}>
                <FaSquareXTwitter className="fs-500" />
              </Link>
              <Link to={"https://www.facebook.com/GuardmasterInstituteCanada/"}>
                <FaSquareFacebook className="fs-500" />
              </Link>
              <Link
                to={"https://linkedin.com/company/guardmasterinstitutecanada/"}
              >
                <BsLinkedin className="fs-500" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-primary text-white">
        <div className="box">
          <div className="flex items-center justify-between py-2">
            <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <RiCloseFill />
              ) : (
                <div className="bg-white text-primary p-2 rounded">
                  <RiMenuFill />
                </div>
              )}
            </button>
            <div className="lg:w-3/12">
              <img
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1706278834/rsh/logo2-removebg-preview_fcvxwc.png"
                alt="logo"
                className="w-[140px] sm:w-[180px] lg:w-[250px]"
              />
            </div>
            <div className="hidden lg:block lg:w-6/12">
              <ul className="flex justify-between">
                <li className="fw-600">
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Menu>
                    <MenuHandler>
                      <Button className="bg-transparent flex items-center gap-x-2 p-0 m-0 shadow-none hover:shadow-none text-white !mont lg:!syne capitalize font-[500] text-[14px] lg:text-[16px]">
                        <span className="!syne fw-700">About Guardmaster Institute</span> <IoIosArrowDown />
                      </Button>
                    </MenuHandler>
                    <MenuList className="z-[10000]">
                      <MenuItem
                        className="whitespace-nowrap text-black !syne text-[15px]"
                        onClick={() => navigate("/about")}
                      >
                        About Us
                      </MenuItem>
                      <MenuItem
                        className="whitespace-nowrap text-black !syne text-[15px]"
                        onClick={() => navigate("/partnership")}
                      >
                        Industry Partnership
                      </MenuItem>
                      <MenuItem
                        className="whitespace-nowrap text-black !syne text-[15px]"
                        onClick={() => navigate("/leadership")}
                      >
                        Leadership and Governance
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </li>
                <li>
                  <Menu>
                    <MenuHandler>
                      <Button className="bg-transparent flex items-center gap-x-2 p-0 m-0 shadow-none hover:shadow-none text-white !mont lg:!syne capitalize font-[500] text-[14px] lg:text-[16px]">
                        Programs <IoIosArrowDown />
                      </Button>
                    </MenuHandler>
                    <MenuList className="z-[10000] w-full mt-9">
                      <div>
                        <MultiMenu />
                      </div>
                    </MenuList>
                  </Menu>
                </li>
                <li className="fw-600">
                  <Link to={"/faq"}>FAQs</Link>
                </li>
                <li className="fw-600">
                  <Link to={"/faq"}>Blog</Link>
                </li>
              </ul>
            </div>
            <div className="lg:w-3/12">
              <div className="flex items-center gap-x-5 justify-end">
                <span
                  className="cursor-pointer"
                  onClick={() => setShowSearch(true)}
                >
                  <FiSearch className="hover:scale-105 duration-100 text-lg" />
                </span>
                <Link
                  to="/course"
                  className="hidden lg:block btn-feel py-3 px-6"
                >
                  View Our Programs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showSearch && <SearchModal close={() => setShowSearch(false)} />}
    </>
  );
};

export default Header;
