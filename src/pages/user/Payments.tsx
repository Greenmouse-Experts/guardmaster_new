import { useQuery } from "@tanstack/react-query";
import { fetchOrder } from "../../services/api/userApi";
import { useState } from "react";
import PaymentListing from "../../lib/components/user/payment/paymentListing";
import HourGlassLoading from "../../lib/components/ui/loading/hourloading";
import { toast } from "react-toastify";
import { EmptyData } from "../../lib/components/ui/empty/emptyStates";

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
    <div className="bg-white lg:p-3">
      <p className="fw-600 !syne text-lg lg:text-2xl">Payment Records</p>
      <div className="mt-6">
      {!isLoading && !data?.data?.length && (
          <div>
            <EmptyData size="350" msg="No payment record" />
          </div>
        )}
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
