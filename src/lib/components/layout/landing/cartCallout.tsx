import { Drawer } from "@material-tailwind/react";
import { useState } from "react";
import { IoCartSharp } from "react-icons/io5";
import CartComponent from "../../cart/cartComponent";
import useCartStore from "../../../../store/cartStore";

const CartCallout = () => {
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
    <div>
      <div className="relative cursor-pointer" onClick={openDrawer}>
        <IoCartSharp className="text-2xl" />
        <p className="bg-red-600 w-5 h-5 place-center text-white circle text-[11px] fw-600 absolute -top-1 -right-3">
          {cart?.length}
        </p>
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
    </div>
  );
};

export default CartCallout;
