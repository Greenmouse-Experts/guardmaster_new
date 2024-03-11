import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { getReviews } from "../../../../../services/api/programApi";
import HourGlassLoading from "../../../ui/loading/hourloading";
import { MdOutlineAddBox } from "react-icons/md";
import useModal from "../../../../../hooks/useModal";
import AddReview from "./addReview";
import ProfileAvatar from "../../../ui/ProfileAvatar";
import { FaStar } from "react-icons/fa6";

interface Props {
  id: string;
}
const CourseReview: FC<Props> = ({ id }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: () => getReviews(id),
  });
  const { Modal, setShowModal } = useModal();
  const stars = Array(5).fill('');
  return (
    <div>
      <div className="p-2">
        <div className="flex justify-between">
          <div>
            <p>
              <span className="text-2xl fw-600">{data?.data?.avgRating} </span>
              course rating - {data?.data?.results?.length} review(s)
            </p>
          </div>
          <button
            className="flex border border-gray-900 items-center gap-x-3 px-3 py-1 rounded-lg fw-600"
            onClick={() => setShowModal(true)}
          >
            Add <MdOutlineAddBox />
          </button>
        </div>
        {isLoading && (
          <div className="place-center py-12">
            <HourGlassLoading size={1} />
          </div>
        )}
        {!isLoading && !data?.data?.results.length && (
          <p className="py-8 text-center">There is currently no review</p>
        )}
        <div className="mt-6">
        {!isLoading &&
          !!data?.data?.results.length &&
          data?.data?.results.map((item: any) => (
            <div className="flex gap-x-5 border-b pb-2" key={item.id}>
              <div>
                <ProfileAvatar
                  url={item?.user?.picture}
                  name={`${item?.user?.firstName} ${item?.user?.lastName}`}
                  size={60}
                  font={20}
                />
              </div>
              <div>
                <p className="fw-500">{`${item?.user?.firstName} ${item?.user?.lastName}`}</p>
                <div className="flex gap-x-1">
                {stars.map((_, i) => (
                <div className="hover:scale-105 duration-100">
                  <FaStar
                    className={`cursor-pointer ${
                      Number(item.star_rating) >= i + 1 ? "text-orange-300" : "text-gray-300"
                    }`}
                  />
                </div>
              ))}
                </div>
                <p className="mt-1">{item.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal title="Add Review Modal">
        <AddReview id={id} close={() => setShowModal(false)} />
      </Modal>
    </div>
  );
};

export default CourseReview;
