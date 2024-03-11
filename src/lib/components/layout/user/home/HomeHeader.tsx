import {
  Button,
  Drawer,
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
import useModal from "../../../../../hooks/useModal";
import LogoutModal from "../../../auth/LogoutModal";
import useCartStore from "../../../../../store/cartStore";
import { useState } from "react";
import CartComponent from "../../../cart/cartComponent";

const HomeHeader = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const {Modal, setShowModal} = useModal()
  const [open, setOpen] = useState(false);
  const toggleSidebar = (height: string, display: string) => {
    setOpen(height === "auto" ? false : true);
    if (typeof window != "undefined" && window.document) {
      document.body.style.height = height;
      document.body.style.overflow = display;
    }
  };
  const openDrawer = () => toggleSidebar("100vh", "hidden");
  const closeDrawer = () => toggleSidebar("auto", "auto");
  const cart = useCartStore((state) => state.cart);
  return (
    <>
      <div className="bg-primary py-2">
        <div className="box flex items-center justify-between">
          <div className="lg:w-4/12">
            <img
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1706278834/rsh/logo2-removebg-preview_fcvxwc.png"
              alt="logo"
              className="w-[140px] sm:w-[180px] lg:w-[250px] cursor-pointer"
              onClick={() => navigate('/')}
            />
          </div>
          <div>
            <Menu>
              <MenuHandler>
                <Button className="bg-white flex items-center gap-x-2 px-3 py-1 lg:px-7 lg:py-3 m-0 !rounded-[25px] shadow-none hover:shadow-none text-primary !mont lg:!syne capitalize font-[500] text-[14px] lg:text-[16px]">
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
          <div className="hidden lg:w-5/12 lg:flex items-center justify-end lg:gap-x-3">
          <div className="bg-white w-[50px] h-[50px] circle relative" onClick={openDrawer}>
                    <div className="bg-[#003ca543] w-full h-full circle place-center">
                    <MdOutlineShoppingCart className="text-xl" />
                    <span className="w-6 h-6 place-center circle bg-white text-primary absolute -top-2 -right-1">
                      {cart.length}
                    </span>
                    </div>
                  </div>
            <Menu>
              <MenuHandler>
                <Button className="bg-transparent flex items-center gap-x-2 p-3 m-0 !rounded-[25px] shadow-none hover:shadow-none text-primary !mont lg:!syne capitalize font-[500] text-[14px] lg:text-[16px]">
                  <div className="bg-white w-12 h-12 circle relative ">
                  <div className="bg-[#003ca543] w-full h-full circle place-center">
                    <IoNotifications className="text-xl" />
                    <span className="w-6 h-6 circle bg-white text-primary absolute -top-2 -right-1">
                      4
                    </span>
                    </div>
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
                <Button className="bg-transparent flex items-center gap-x-2 !pl-3 p-0 m-0 !rounded-[25px] shadow-none hover:shadow-none text-white !mont lg:!syne capitalize font-[500] text-[14px] lg:text-[16px]">
                  <ProfileAvatar
                    url={user.image}
                    name={user.name}
                    size={49}
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
                  onClick={() => navigate("/user/dashboard")}
                >
                  <MdOutlineDashboard className="text-2xl" />
                  Dashboard
                </MenuItem>
                <MenuItem
                  className="flex gap-x-2 items-center fw-500"
                  onClick={() => navigate("/user/profile")}
                >
                  <BsGear className="text-2xl" />
                  Settings
                </MenuItem>
                <MenuItem
                  className="flex gap-x-2 items-center fw-500"
                  onClick={() => setShowModal(true)}
                >
                  <IoLogOutOutline className="text-2xl" />
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
      </div>
      <Drawer
        open={open}
        placement="right"
        size={430}
        onClose={closeDrawer}
        className="p-4"
      >
        <CartComponent close={closeDrawer}/>
      </Drawer>
      <Modal title="" size="xs">
        <LogoutModal CloseModal={() => setShowModal(false)}/>
      </Modal>
    </>
  );
};

export default HomeHeader;
