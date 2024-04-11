import { useQuery } from "@tanstack/react-query";
import { getScore } from "../../../../../../services/api/programApi";
import { FC } from "react";
import { useParams } from "react-router-dom";
import HourGlassLoading from "../../../../ui/loading/hourloading";
import RightAnswers from "./assessResults/rightAnswers";
import { FaMinus } from "react-icons/fa6";

interface Props {
  id: string;
}
const AssessmentResults: FC<Props> = ({ id }) => {
  const { id: courseId } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["quiz-answers", id],
    queryFn: () => getScore(id, `${courseId}`),
    retry: 0,
  });
  return (
    <div>
      {isLoading && (
        <div className="place-center py-16">
          <HourGlassLoading size={1.3} />
        </div>
      )}
      {!isLoading && data && <div>
        <div className="shadow mb-3 bg-light py-4">
            <p className="text-3xl underline fw-600 text-center mb-4">Result</p>
              <div className="flex items-center justify-center gap-x-5">
                <p className="text-3xl fw-700">
                  <span className="text-primary text-3xl">
                    {data?.data?.result.score}
                  </span>
                  /{data?.data?.result.total}
                </p>{" "}
                <FaMinus />
                <p className="text-3xl fw-700">{data?.data?.result.percent}%</p>
              </div>
            </div>
        <div>
            <RightAnswers data={data?.data?.attempt}/>
        </div>
        </div>}
    </div>
  );
};

export default AssessmentResults;
