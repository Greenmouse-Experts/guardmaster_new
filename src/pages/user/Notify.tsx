import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchUserNotify } from "../../services/api/userApi";
import { toast } from "react-toastify";
import Tabs from "../../lib/components/ui/Tabs";
import NotifyList from "../../lib/components/user/notify/NotifyList";

const UserNotify = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, refetch, isError } = useQuery({
    queryKey: ["notify", page],
    queryFn: () => fetchUserNotify(page),
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
  const tab = [
    {
      title: <>All</>,
      content: (
        <NotifyList
          status="all"
          refetch={refetch}
          data={data?.data}
          isLoading={isLoading}
          isError={isError}
        />
      ),
    },
    {
      title: <>Unread</>,
      content: (
        <NotifyList
          status="unread"
          refetch={refetch}
          data={data?.data}
          isLoading={isLoading}
          isError={isError}
        />
      ),
    },
  ];
  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow min-h-[80vh]">
        <div className="lg:w-10/12 mx-auto text-white rounded-[17px]">
          <Tabs tabs={tab} type="charts" />
          <div className="mt-6 flex justify-end">
            <div className="flex gap-x-4 items-center">
              <p className="fw-600">Page {page}</p>
              <div className="flex gap-x-2 items-center">
                <div
                  onClick={handlePrev}
                  className={`px-2 py-1 rounded ${
                    page === 1
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-primary text-white cursor-pointer"
                  }`}
                >
                  Prev
                </div>
                <div
                  onClick={handleNext}
                  className={`px-2 py-1 rounded ${
                    page * 10 >= data?.count
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-primary text-white cursor-pointer"
                  }`}
                >
                  Next
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserNotify;
