import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { BASE_URL } from "../services/constant";
import { getBearerToken } from "../services/helpers";
import { toast } from "react-toastify";
import HourGlassLoading from "../lib/components/ui/loading/hourloading";

const PaymentCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );

  useEffect(() => {
    const reference = searchParams.get("reference");
    if (!reference) {
      setStatus("error");
      toast.error("No payment reference found");
      return;
    }

    const verifyPayment = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/orders/confirm/${reference}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: getBearerToken(),
            },
            body: JSON.stringify({ reference }),
          }
        );
        const result = await response.json();
        if (response.ok) {
          setStatus("success");
          toast.success(result.message || "Payment confirmed successfully");
          setTimeout(() => navigate("/user/courses"), 1500);
        } else {
          setStatus("error");
          toast.error(result?.message || "Payment verification failed");
        }
      } catch (e) {
        console.log(e);
        setStatus("error");
        toast.error("Something went wrong verifying payment");
      }
    };

    verifyPayment();
  }, [searchParams, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      {status === "loading" && (
        <div className="text-center">
          <HourGlassLoading size={1.3} />
          <p className="mt-4 text-lg fw-500">Verifying your payment...</p>
        </div>
      )}
      {status === "success" && (
        <div className="text-center">
          <p className="text-lg text-green-600 fw-600">
            Payment confirmed! Redirecting...
          </p>
        </div>
      )}
      {status === "error" && (
        <div className="text-center">
          <p className="text-lg text-red-600 fw-600">
            Payment verification failed.
          </p>
          <button
            className="mt-4 px-6 py-2 btn-feel rounded-lg"
            onClick={() => navigate("/user/payments")}
          >
            View Payment History
          </button>
        </div>
      )}
    </div>
  );
};

export default PaymentCallback;
