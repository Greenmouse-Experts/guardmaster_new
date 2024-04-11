import { FC, useState } from "react";
import Button from "../../../ui/Button";
import StartAssessment from "./questions";
import useDialog from "../../../../../hooks/useDialog";
import AssessmentResults from "./questions/assessmentResults";

type activeProps = {
  mediaType: string;
  media: string;
  duration: number;
  title: string;
  id: string;
  read?: boolean;
};
interface Props {
  active: activeProps;
}
const AssessmentDisplay: FC<Props> = ({ active }) => {
  const [cover, setCover] = useState(true);
  const { Dialog, setShowModal } = useDialog();
  return (
    <div>
      <div className="w-full overflow-y-auto">
        {!active?.title && (
          <div>
            <img
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1712319923/GuardMaster/quiz-base_hz1zss.jpg"
              alt="cover"
              className="w-full h-[60vh] object-cover"
            />
          </div>
        )}
        {active?.title && (
          <div>
            {cover && (
              <div>
                <div className="border-[4px]">
                  <img
                    src={active.media}
                    alt="cover image"
                    className="w-full h-[45vh] object-cover"
                  />
                </div>
                <div className="mt-6">
                  <p className="text-lg lg:text-3xl fw-600">{active.title}</p>
                  <div className="mt-2 flex items-center gap-x-4">
                    <p className="fw-500">Duration:</p>
                    <p className="fw-600 text-xl">{active.duration} mins</p>
                  </div>
                  <div className="lg:flex justify-center mt-8 lg:mt-16">
                    <div className="lg:w-5/12">
                      {active.read ? (
                        <Button
                          title={"View Attempt"}
                          altClassName="btn-primary py-3 w-full"
                          onClick={() => setShowModal(true)}
                        />
                      ) : (
                        <Button
                          title={"Begin Assessment"}
                          altClassName="btn-primary py-3 w-full"
                          onClick={() => setCover(false)}
                        />
                      )}
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
      <Dialog title="Assessmet Results" size="xl">
        <AssessmentResults id={active.id}/>
      </Dialog>
    </div>
  );
};

export default AssessmentDisplay;
