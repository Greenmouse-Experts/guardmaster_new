import { PayPalButtons } from "@paypal/react-paypal-js";
import { FC } from "react";
import { BASE_URL } from "../../../../services/constant";
import { getBearerToken } from "../../../../services/helpers";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useCartStore from "../../../../store/cartStore";

export interface PayInfoType {
  link: string;
  orderNumber: string;
  status: string;
}
interface Props {
  close: () => void;
  data: any;
  name: string | undefined;
  amount: string | number | undefined;
}
const PaymentModal: FC<Props> = ({ close, data, name, amount }) => {
  const clearCart = useCartStore((state) => state.clearCart);
  const initialOptions = {
    clientId:
      "AcfzHrpELdXbmgAyI6qNmIqacZyFNF1G7xIokNH4aB_P9OK5Ka4t9j31zWKL0uD5YortTiQPdAOClsxU",
    currency: "USD",
    intent: "capture",
  };
  const navigate = useNavigate();
  async function createOrder() {
    try {
      return fetch(`${BASE_URL}/orders/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: getBearerToken(),
        },
        body: JSON.stringify({
          courses: data.courses,
          amount: data?.amount,
        }),
      })
        .then((response) => response.json())
        .then((order) => {
          if(order?.data){
            return order.data.orderNumber
          }else{
            toast.error(order?.message)
          }
        });
    } catch (e) {
      console.log(e);
    }
  }
  function onApprove(data: any) {
    return fetch(`${BASE_URL}/orders/confirm/${data.orderID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: getBearerToken(),
      },
      body: JSON.stringify({
        orderID: data.orderID,
      }),
    })
      .then((response) => response.json())
      .then((orderData) => {
        toast.success(orderData.message || "Order Completed Successfully");
        navigate("/user/courses");
        if (name === "these items") {
          clearCart();
        }
        close();
      });
  }

  return (
    <div className="max-h-[500px] overflow-y-auto">
      <PayPalScriptProvider options={initialOptions}>
        <p className="text-center text-lg fw-500 ">
          You're about to pay <span className="fw-600">{amount}</span> for{" "}
          <span className="fw-600">{name}</span>
        </p>
        <div className="mt-6">
          {/* <button className="btn-feel w-full rounded-lg py-2">
          Proceed to Pay
        </button> */}
          <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
        </div>
      </PayPalScriptProvider>
    </div>
  );
};

export default PaymentModal;
