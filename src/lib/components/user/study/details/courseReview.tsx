import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { getReviews } from "../../../../../services/api/programApi";
import HourGlassLoading from "../../../ui/loading/hourloading";
import { MdOutlineAddBox } from "react-icons/md";
import useModal from "../../../../../hooks/useModal";
import AddReview from "./addReview";

interface Props {
  id: string;
}
const CourseReview: FC<Props> = ({ id }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: () => getReviews(id),
  });
  const {Modal, setShowModal} = useModal()
  return (
   <div>
     <div className="p-2">
      <div className="flex justify-between">
        <div>
            <p><span className="text-2xl fw-600">{data?.data?.avgRating} </span>course rating - {data?.data?.results?.length} review(s)</p>
        </div>
        <button className="flex border border-gray-900 items-center gap-x-3 px-3 py-1 rounded-lg fw-600" onClick={() => setShowModal(true)}>
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
      {!isLoading && data && <div></div>}
    </div>
    <Modal title="Add Review Modal">
        <AddReview id={id} close={() => setShowModal(false)}/>
    </Modal>
   </div>
  );
};

export default CourseReview;
