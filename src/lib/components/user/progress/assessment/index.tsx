import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { getAssessments } from "../../../../../services/api/programApi";
import HourGlassLoading from "../../../ui/loading/hourloading";
import { AssessmentResultType } from "../../../../../contracts/course";
import { FaMinus } from "react-icons/fa";

interface Props {
  id: string;
}
const AllAssessments: FC<Props> = ({ id }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["fetch-all-assessments", id],
    queryFn: () => getAssessments(id),
  });
  return (
    <div>
      {isLoading && (
        <div className="place-center py-16">
          <HourGlassLoading size={1.1} />
        </div>
      )}
      {!isLoading &&
        !!data?.data?.length &&
        data?.data.map((item: AssessmentResultType) => (
          <div className="bg-gray-50 flex justify-between items-center rounded shadow p-3" key={item.courseContentSub.id}>
            <div>
              <div>
                <p className="fw-600 text-lg">{item.courseContentSub.title}</p>
                <p className="fw-500">
                  duration: {item.courseContentSub.duration}mins
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-x-5">
                <p className="text-2xl fw-700">
                  <span className="text-primary text-2xl">
                    {item.score}
                  </span>
                  /{item.total}
                </p>{" "}
                <FaMinus />
                <p className="text-2xl fw-700">{item.percent}%</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AllAssessments;
