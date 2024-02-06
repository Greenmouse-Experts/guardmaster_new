import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { IoIosArrowDown } from "react-icons/io";
import { IoHomeOutline, IoLogOutOutline, IoNotifications } from "react-icons/io5";
import { MdOutlineDashboard, MdOutlineShoppingCart } from "react-icons/md";
import useAuth from "../../../../../hooks/authUser";
import ProfileAvatar from "../../../ui/ProfileAvatar";
import { BsGear } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const HomeHeader = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-primary py-2">
        <div className="box flex items-center justify-between">
          <div className="lg:w-4/12">
            <img
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1706278834/rsh/logo2-removebg-preview_fcvxwc.png"
              alt="logo"
              className="w-[140px] sm:w-[180px] lg:w-[250px]"
            />
          </div>
          <div>
            <Menu>
              <MenuHandler>
                <Button className="bg-white flex items-center gap-x-2 px-3 lg:px-7 py-3 m-0 !rounded-[25px] shadow-none hover:shadow-none text-primary !mont lg:!syne capitalize font-[500] text-[14px] lg:text-[16px]">
                  My Courses <IoIosArrowDown />
                </Button>
              </MenuHandler>
              <MenuList className="z-[10000]">
                <MenuItem
                  className="whitespace-nowrap text-black !syne text-[15px]"
                  // onClick={() => navigate("/about")}
                >
                  {" "}
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
          <div className="w-5/12 flex justify-end gap-x-3 lg:gap-x-7">
            <Menu>
              <MenuHandler>
                <Button className="bg-white flex items-center gap-x-2 p-0 m-0 !rounded-[25px] shadow-none hover:shadow-none text-primary !mont lg:!syne capitalize font-[500] text-[14px] lg:text-[16px]">
                  <div className="bg-[#003ca543] w-12 h-12 circle relative place-center">
                    <MdOutlineShoppingCart className="text-xl" />
                    <span className="w-6 h-6 circle bg-white text-primary absolute -top-2 -right-1">
                      4
                    </span>
                  </div>
                </Button>
              </MenuHandler>
              <MenuList className="z-[10000]">
                <MenuItem
                  className="whitespace-nowrap text-black !syne text-[15px]"
                  // onClick={() => navigate("/about")}
                >
                  {" "}
                </MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuHandler>
                <Button className="bg-white flex items-center gap-x-2 p-0 m-0 !rounded-[25px] shadow-none hover:shadow-none text-primary !mont lg:!syne capitalize font-[500] text-[14px] lg:text-[16px]">
                  <div className="bg-[#003ca543] w-12 h-12 circle relative place-center">
                    <IoNotifications className="text-xl" />
                    <span className="w-6 h-6 circle bg-white text-primary absolute -top-2 -right-1">
                      4
                    </span>
                  </div>
                </Button>
              </MenuHandler>
              <MenuList className="z-[10000]">
                <MenuItem
                  className="whitespace-nowrap text-black !syne text-[15px]"
                  // onClick={() => navigate("/about")}
                >
                  {" "}
                </MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuHandler>
                <Button className="bg-transparent flex items-center gap-x-2 p-0 m-0 !rounded-[25px] shadow-none hover:shadow-none text-white !mont lg:!syne capitalize font-[500] text-[14px] lg:text-[16px]">
                  <ProfileAvatar
                    url={user.image}
                    name={user.name}
                    size={45}
                    font={18}
                  />
                  <p>{user.name}</p>
                </Button>
              </MenuHandler>
              <MenuList className="z-[10000]">
              <MenuItem
                  className="flex gap-x-2 items-center fw-500"
                  onClick={() => navigate("/user")}
                >
                  <IoHomeOutline className="text-2xl" />
                  Home
                </MenuItem>
                <MenuItem
                  className="flex gap-x-2 items-center fw-500"
                  onClick={() => navigate("dashboard")}
                >
                  <MdOutlineDashboard className="text-2xl" />
                  Dashboard
                </MenuItem>
                <MenuItem
                  className="flex gap-x-2 items-center fw-500"
                  onClick={() => navigate("profile")}
                >
                  <BsGear className="text-2xl" />
                  Settings
                </MenuItem>
                <MenuItem
                  className="flex gap-x-2 items-center fw-500"
                  // onClick={() => setShowModal(true)}
                >
                  <IoLogOutOutline className="text-2xl" />
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHeader;
