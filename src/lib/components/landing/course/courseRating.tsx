import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { FaStar } from "react-icons/fa6";
import { getReviews } from "../../../../services/api/programApi";
import ProfileAvatar from "../../ui/ProfileAvatar";
import { Rating } from "@material-tailwind/react";

interface Props {
  id: string;
}
const CourseRating: FC<Props> = ({ id }) => {
  const { data, isLoading} = useQuery({
    queryKey: ["reviews"],
    queryFn: () => getReviews(id),
  });
  if(data && !isLoading)
  return (
    <div className="w-full">
      <p className="!mont text-[#003DA5] font-medium">{data?.data?.avgRating} course rating</p>
      <p className="mt-4 !syne font-semibold !text-3xl w-full">Reviews and Ratings</p>
      <div className="mt-6 grid lg:grid-cols-2 gap-4 lg:gap-12">
        {!!data?.data?.results?.length && data?.data?.results?.map((item:any) => (
          <div className="border-t-2 border-[#B7B7B7] pt-6">
            <div className="flex items-center gap-x-3">
              <div className="w-10 h-10 rounded-[50%] !mont text--[18px] font-semibold text-white bg-black flex items-center justify-center">
              <ProfileAvatar
                  url={item?.user?.picture}
                  name={`${item?.user?.firstName} ${item?.user?.lastName}`}
                  size={45}
                  font={20}
                />
              </div>
              <div>
                <p className="!mont font-semibold">{`${item?.user?.firstName} ${item?.user?.lastName}`}</p>
                <div className="text-[15px] text-[#B4690E] flex gap-x-2">
                <Rating value={item.rating} ratedIcon={<FaStar className="text-[#B4690E]"/>} unratedIcon={<FaStar className="text-gray-300"/>} />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <p className="!mont text-[15px]">{item.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseRating;
