import { FC } from "react";
import { PurchaseItemType } from "../../../../contracts/course";
import { Progress, Typography } from "@material-tailwind/react";
import useDialog from "../../../../hooks/useDialog";
import AllAssessments from "./assessment";

interface Props {
  data: PurchaseItemType;
}
const ProgressItem: FC<Props> = ({ data }) => {
  const {Dialog, setShowModal} = useDialog()
  return (
   <>
     <div className="lg:flex items-stretch shadow-lg lg:gap-x-6">
      <div className="lg:w-3/12 border">
        <img
          src={data.course.coverImage}
          alt="course"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="lg:w-9/12 p-3 bg-white">
        <div className="">
          <p className="fw-500 text-gray-600 !syne">{data.course.title}</p>
        </div>
        <div className="mt-3">
          <div className="w-full">
            <div className="mb-2 flex items-center justify-between gap-4">
              <Typography color="blue-gray" variant="h6">
                Completed
              </Typography>
              <Typography color={data.course.totalContent > 0? "green" : "amber"} variant="h6">
                {`${data.course.totalContent}%`}
              </Typography>
            </div>
            <Progress value={data.course.totalContent} color="green" variant="gradient" />
          </div>
        </div>
        <div className="mt-3">
          <div className="w-full">
            <div className="mb-2 flex items-center justify-between gap-4">
              <Typography color="blue-gray" variant="h6">
                Assessments
              </Typography>
              <Typography color="green" variant="h6">
                {data.course.assessment.done}/{data.course.assessment.total}
              </Typography>
            </div>
          </div>
        </div>
        <div className="mt-5 p-2 flex gap-x-4 justify-end">
          <button
            className="bg-light fw-600 fs-500 !syne text-gray-600 py-2 px-6 rounded shadow-lg hover:shadow-xl hover:scale-x-110 duration-100"
            // onClick={() => navigate(`/user/courses/${item.course.id}`)}
          >
            Get Certification
          </button>
          <button
            className="bg-primary text-white fw-600 fs-500 !syne  py-2 px-6 rounded shadow-lg hover:shadow-xl hover:scale-x-110 duration-100"
            onClick={() => setShowModal(true)}
          >
            View Assessment Results
          </button>
        </div>
      </div>
    </div>
    <Dialog title="All Attempted Assessments" size="2xl">
      <AllAssessments id={data?.course.id}/>
    </Dialog>
   </>
  );
};

export default ProgressItem;
