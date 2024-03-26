import { useQuery } from "@tanstack/react-query";
import { fetchOrder } from "../../services/api/userApi";
import { useState } from "react";
import PaymentListing from "../../lib/components/user/payment/paymentListing";
import HourGlassLoading from "../../lib/components/ui/loading/hourloading";
import { toast } from "react-toastify";

const UserPayments = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useQuery({
    queryKey: ["singlePayments", page],
    queryFn: () => fetchOrder(page),
  });
  const handleNext = () => {
    if (page * 10 >= data?.count) {
      toast.info("This is the last page");
      return;
    }
    setPage(page + 1);
  };
  const handlePrev = () => {
    if (page === 1) {
      toast.info("This is the first page");
      return;
    }
    setPage(page - 1);
  };
  return (
    <div className="">
      <p className="fw-600 !syne text-lg lg:text-2xl">Payment Records</p>
      <div className="mt-6">
        {isLoading && (
          <div className="place-center py-16">
            <HourGlassLoading size={1.3} />
          </div>
        )}
      </div>
      <div>
        {!isLoading && data && (
          <div>
            {" "}
            <PaymentListing
              data={data?.data}
              next={handleNext}
              prev={handlePrev}
              count={data?.count}
              page={page}
            />{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserPayments;
