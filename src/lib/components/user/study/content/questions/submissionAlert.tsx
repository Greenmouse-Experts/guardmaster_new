import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { getScore } from "../../../../../../services/api/programApi";
import { BeatLoader } from "react-spinners";
import { FaMinus } from "react-icons/fa6";

interface Props {
  id: string;
  courseId: string;
}
const SubmissionAlert: FC<Props> = ({ id, courseId }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["quiz-answers", id],
    queryFn: () => getScore(id, `${courseId}`),
    retry: 0,
  });
  return (
    <div>
      <div>
        <img
          src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1712328694/GuardMaster/complete_nrjejr.webp"
          alt="completed"
          className="w-8/12 mx-auto"
        />
        <p className="text-3xl text-center fw-600">
          Well Done! You have completed this quiz
        </p>
      </div>
      <div className="mt-8 pb-8 text-center">
        <p className="fw-600 text-orange-700">Here is your score!</p>
        <div className="mt-3 flex justify-center">
          {isLoading && <BeatLoader color="black" size={34} />}
          {!isLoading && data && (
            <div>
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
          )}
        </div>
      </div>
    </div>
  );
};

export default SubmissionAlert;
