import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { SearchModal } from "../../landing/homepage/SearchModal";
import MultiMenu from "./MultiMenu";

const Header = () => {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  return (
    <>
      <div className=" text-primary bg-[#FFD347] py-2">
        <div className="box flex justify-end fs-500 ">
          <ul className="flex gap-x-6 items-center">
            <li className="flex items-center gap-x-1 fw-500 fs-400">
              <BsTelephone className="text-sm mt-[1px]" /> +000 123 456 7890
            </li>
            <li>
              <Link to={"/auth/login"} className="fs-400 fw-500">Student Login</Link>
            </li>
            <li>
              <Link to={"/contact"}className="fw-500 fs-400">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-primary text-white">
      <div className="box">
        <div className="flex items-center py-2">
          <div className="w-4/12">
            <img
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1706278834/rsh/logo2-removebg-preview_fcvxwc.png"
              alt="logo"
              className="w-[150px] lg:w-[250px]"
            />
          </div>
          <div className="w-5/12">
            <ul className="flex justify-between">
              <li className="fw-600">
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Menu>
                  <MenuHandler>
                    <Button className="bg-transparent flex items-center gap-x-2 p-0 m-0 shadow-none hover:shadow-none text-white !mont lg:!syne capitalize font-[500] text-[14px] lg:text-[16px]">
                      About GICSM <IoIosArrowDown />
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
                      <MultiMenu/>
                    </div>
                  </MenuList>
                </Menu>
              </li>
              <li className="fw-600">
                <Link to={"/faq"}>FAQs</Link>
              </li>
            </ul>
          </div>
          <div className="w-4/12">
            <div className="flex items-center gap-x-5 justify-end">
              <span
                className="cursor-pointer"
                onClick={() => setShowSearch(true)}
              >
                <FiSearch className="hover:scale-105 duration-100 text-lg" />
              </span>
              <Link to="/course" className="btn-feel py-3 px-6">View Our Programs</Link>
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
