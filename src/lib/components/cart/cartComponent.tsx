import { FC, useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import useCartStore from "../../../store/cartStore";
import Button from "../ui/Button";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "react-toastify";
import useAuth from "../../../hooks/authUser";
import useModal from "../../../hooks/useModal";
import PaymentModal from "../landing/course/paymentModal";

interface Props {
  close: () => void;
}
const CartComponent: FC<Props> = ({ close }) => {
  const cart = useCartStore((state) => state.cart);
  const setCart = useCartStore((state) => state.saveCart)
  const clearCart = useCartStore((state) => state.clearCart)
  const handleDelete = (id:string) => {
    const filtered = cart.filter((item) => item.id !== id)
    setCart(filtered)
  }
  const emptyCart = () => {
    clearCart();
    toast.info('Cart is Cleared')
    close();
  }
  const tsum = cart.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price
  },0);
  const {isLoggedIn} = useAuth()
  const [payInfo, setPayInfo] = useState<any>();
  const proceedToPayment = () => {
    if(!isLoggedIn){
      toast.info('Please Login to purchase a course')
    }
    const payload = {
        courses: cart.map(({id, price }) => ({
            id: id,
            price
        })),
        amount: tsum,
      };
    setPayInfo(payload);
    setShowModal(true)
  };
  const { Modal, setShowModal } = useModal();
  return (
   <div>
     <div>
      <div className="flex justify-between">
        <div className="flex gap-x-3 items-center">
          <p className="text-xl fw-600">Cart</p>
          <p className="w-6 h-6 place-center text-white circle bg-red-500 fw-600">
            {cart.length}
          </p>
        </div>
        <div>
          <LiaTimesSolid className="text-2xl cursor-pointer" onClick={close} />
        </div>
      </div>
      <div className="grid gap-3 mt-12 max-h-[70vh] overflow-y-auto">
        {!!cart.length &&
          cart.map((item) => (
            <div className="border-b pb-3 w-full">
              <div className="flex gap-x-2">
                <img src={item.coverImg} alt="cover" className="w-16 lg:w-20 aspect-square shrink-0 object-cover" />
                <div className="w-full">
                  <p className="fw-600 fs-400">{item.title}</p>
                  <div className="flex justify-between items-center">
                    <p className="fw-600 mt-2">{item.fmprice}</p>
                  <RiDeleteBin6Line className="text-red-600 cursor-pointer" onClick={() => handleDelete(item.id)}/>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          ))}
      </div>
      <div className="grid gap-2 absolute bottom-5 left-0 w-full px-5">
        <div className="flex items-center justify-between pb-2 border-b mb-2">
            <p>Subtotal</p>
            <p className="text-xl fw-600">${tsum}</p>
        </div>
        <Button title={"Checkout"} altClassName="py-2 btn-feel w-full rounded-xl shadow" onClick={proceedToPayment}/>
        <Button title={"Clear Cart"} altClassName="py-2 text-white w-full rounded-xl shadow bg-red-600" onClick={() => emptyCart()}/>
      </div>
    </div>
    <Modal title="" size="sm" type="">
    <PaymentModal
      data={payInfo}
      close={() => setShowModal(false)}
      name={'these items'}
      amount={tsum}
    />
  </Modal>
   </div>
  );
};

export default CartComponent;
