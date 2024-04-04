import { FC, useState } from "react";
import Button from "../../../ui/Button";
import StartAssessment from "./questions";

type activeProps = {
  mediaType: string;
  media: string;
  duration: number;
  title: string;
};
interface Props {
  active: activeProps;
}
const AssessmentDisplay: FC<Props> = ({ active }) => {
  const [cover, setCover] = useState(true);
  return (
    <div className="w-full overflow-y-auto">
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
          {!cover && <StartAssessment id={''}/>}
        </div>
      )}
    </div>
  );
};

export default AssessmentDisplay;
