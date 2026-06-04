import { FC, useState } from "react";
import { BASE_URL } from "../../../../services/constant";
import { getBearerToken } from "../../../../services/helpers";
import { toast } from "react-toastify";
import useCartStore from "../../../../store/cartStore";

export interface PayInfoType {
  reference: string;
  authorization_url: string;
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
  const [loading, setLoading] = useState(false);

  async function handlePay() {
    setLoading(true);
    try {
      const callbackUrl = `${window.location.origin}/payment/callback`;
      const response = await fetch(`${BASE_URL}/orders/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: getBearerToken(),
        },
        body: JSON.stringify({
          courses: data.courses,
          amount: data?.amount,
          callback_url: callbackUrl,
        }),
      });
      const result = await response.json();
      if (result?.data?.authorization_url) {
        if (name === "these items") {
          clearCart();
        }
        window.location.href = result.data.authorization_url;
      } else {
        toast.error(result?.message || "Failed to initialize payment");
        close();
      }
    } catch (e) {
      console.log(e);
      toast.error("Something went wrong");
      close();
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-h-[500px] overflow-y-auto">
      <p className="text-center text-lg fw-500 ">
        You're about to pay <span className="fw-600">{amount}</span> for{" "}
        <span className="fw-600">{name}</span>
      </p>
      <div className="mt-6">
        <button
          className="btn-feel w-full rounded-lg py-3 font-semibold disabled:opacity-50"
          onClick={handlePay}
          disabled={loading}
        >
          {loading ? "Initializing..." : "Proceed to Pay"}
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;
