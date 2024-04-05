import { FC, useState } from "react";
import Button from "../../../ui/Button";
import StartAssessment from "./questions";

type activeProps = {
  mediaType: string;
  media: string;
  duration: number;
  title: string;
  id: string;
};
interface Props {
  active: activeProps;
}
const AssessmentDisplay: FC<Props> = ({ active }) => {
  const [cover, setCover] = useState(true);
  console.log(active);

  return (
    <div className="w-full overflow-y-auto">
      {!active?.title && (
        <div>
          <img
            src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1712319923/GuardMaster/quiz-base_hz1zss.jpg"
            alt="cover"
            className="w-full"
          />
        </div>
      )}
      {active?.title && (
        <div>
          {cover && (
            <div>
              <div className="border-[4px]">
                <img src={active.media} alt="cover image" className="w-full" />
              </div>
              <div className="mt-6">
                <p className="text-lg lg:text-3xl fw-600">{active.title}</p>
                <div className="mt-2 flex items-center gap-x-4">
                  <p className="fw-500">Duration:</p>
                  <p className="fw-600 text-xl">{active.duration} mins</p>
                </div>
                <div className="lg:flex justify-center mt-8 lg:mt-24">
                  <div className="lg:w-5/12">
                    <Button
                      title={"Begin Assessment"}
                      altClassName="btn-primary py-3 w-full"
                      onClick={() => setCover(false)}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          {!cover && (
            <StartAssessment
              duration={Number(active.duration)}
              id={active.id}
              close={() => setCover(false)}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default AssessmentDisplay;
