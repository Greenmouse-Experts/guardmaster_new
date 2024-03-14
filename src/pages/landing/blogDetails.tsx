import { useQuery } from "@tanstack/react-query";
import { getSingleBlogPost } from "../../services/api/publicApi";
import { useParams } from "react-router-dom";
import HourGlassLoading from "../../lib/components/ui/loading/hourloading";
import dayjs from "dayjs";

const BlogDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["getSinglePost"],
    queryFn: () => getSingleBlogPost(`${id}`),
  });
  return (
    <div>
      {isLoading && (
        <div className="place-center py-16">
          <HourGlassLoading size={1.3} />
        </div>
      )}
      <div>
        {data && (
          <div className="box py-24 lg:flex items-center gap-x-5">
            <div className="lg:px-16">
              <p className="text-gray-600 fw-500 fs-500">{dayjs(data?.createdDate).format("dddd DD, MMMM YYYY.")}</p>
              <div>
                <p className="text-2xl fw-600 !syne">{data?.title}</p>
                <div>
                  <p className="f-500">
                    By: {data?.user.firstName} {data?.user.lastName}
                  </p>
                </div>
                <div className="flex gap-x-2 items-center mt-3">
                  {data?.tags.map((item: any) => (
                    <p
                      className="px-2 py-[2px] bg-blue-50 rounded-xl fs-400"
                      key={item.id}
                    >
                      {item.tag}
                    </p>
                  ))}
                </div>
              </div>
              <div className="mt-7">
                <div>
                    <img src={data?.coverImage} alt="coverImage" className="w-full xl:h-[450px] 2xl:h-[550px] object-cover"/>
                </div>
                <div className="mt-16">
                    <p className="whitespace-pre-line">{data?.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetails;
