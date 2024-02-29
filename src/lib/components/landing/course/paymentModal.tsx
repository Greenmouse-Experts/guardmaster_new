import { PayPalButtons } from "@paypal/react-paypal-js";
import { FC } from "react";

export interface PayInfoType {
  link: string;
  orderNumber: string;
  status: string;
}
interface Props {
  close: () => void;
  data: PayInfoType;
  name: string | undefined;
  amount: string | number | undefined;
}
const PaymentModal: FC<Props> = ({ close, data, name, amount }) => {
    function createOrder() {
        return fetch(`${data.link}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // use the "body" param to optionally pass additional order information
            // like product ids and quantities
            body: JSON.stringify({
                cart: [
                    {
                        id: data.orderNumber,
                        quantity: "1",
                    },
                ],
            }),
        })
            .then((response) => response.json())
            .then((order) => order.id);
    }
    function onApprove(data:any) {
          return fetch("/my-server/capture-paypal-order", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              orderID: data.orderID
            })
          })
          .then((response) => response.json())
          .then((orderData) => {
                const name = orderData.payer.name.given_name;
                alert(`Transaction completed by ${name}`);
                close()
          });

        }
    
  return (
    <div>
      <p className="text-center text-lg fw-500 ">
        You're about to pay <span className="fw-600">{amount}</span> for{" "}
        <span className="fw-600">{name}</span>
      </p>
      <div className="mt-6">
        {/* <button className="btn-feel w-full rounded-lg py-2">
          Proceed to Pay
        </button> */}
         <PayPalButtons
                createOrder={createOrder}
                onApprove={onApprove}
            />
      </div>
    </div>
  );
};

export default PaymentModal;
