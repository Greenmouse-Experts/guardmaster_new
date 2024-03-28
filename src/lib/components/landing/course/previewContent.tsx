import { FC } from "react";
import { CourseContentSubs } from "../../../../contracts/course";
import RenderMedia from "./renderMedia";

interface Props {
  data: CourseContentSubs | undefined;
}
const PreviewContent: FC<Props> = ({ data }) => {
  return (
    <div className="border border-[#052b5e] bg-gray-400">
      <p className="text-xl bg-primary text-white p-3 fw-600">{data?.title}</p>
      <div className="mt-">
        <RenderMedia url={data?.previewUrl} type={data?.mediaType} />
      </div>
    </div>
  );
};

export default PreviewContent;
