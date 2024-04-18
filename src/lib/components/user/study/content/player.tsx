import { FC } from "react";
import ReactPlayer from "react-player";
import { markSubRead } from "../../../../../services/api/programApi";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

type activeProps = {
  mediaType: string;
  media: string;
  duration: number;
  id: string;
};
interface Props {
  active: activeProps;
}
const CoursePlayer: FC<Props> = ({ active }) => {
  const { id } = useParams();
  const markAction = async () => {
    const payload = {
      courseContentSub: active.id,
    };
    await markSubRead(payload, `${id}`)
      .then((res) => {
        toast.success(res.message);
      })
      .catch(() => {});
  };
  if (active.mediaType === "video") {
    return (
      <div>
        <div className="h-[380px] bg-black">
          <ReactPlayer
            width={"100%"}
            height={"100%"}
            url={
              active?.media
                ? active?.media
                : "https://www.youtube.com/watch?v=LXb3EKWsInQ"
            }
            controls
            pip
            stopOnUnmount={false}
            onEnded={() => markAction()}
          />
        </div>
      </div>
    );
  } else if (active.mediaType === "audio") {
    return (
      <div>
        <div className="h-[380px] bg-[url(https://res.cloudinary.com/greenmouse-tech/image/upload/v1713442121/GuardMaster/audio-gif_opjqva.gif)] pb-1 bg-cover">
          <ReactPlayer
            width={"100%"}
            height={"100%"}
            url={
              active?.media
                ? active?.media
                : "https://www.youtube.com/watch?v=LXb3EKWsInQ"
            }
            light="https://res.cloudinary.com/greenmouse-tech/image/upload/v1713435463/GuardMaster/audio-file-types_mqpnwr.jpg"
            controls
            pip
            stopOnUnmount={false}
            onEnded={() => markAction()}
          />
        </div>
      </div>
    );
  } else if (active.mediaType === "image") {
    return (
      <div>
        <div className="h-[380px] bg-black">
          <img
            src={active.media}
            alt="image"
            className="w-full h-full object-fit"
          />
        </div>
      </div>
    );
  } else if (active.mediaType === "document") {
    return (
      <div>
        <div className="h-[480px] bg-black text-black">
        <DocViewer style={{color: "black"}} documents={[{uri: active.media,  fileName: "Course content"}]} pluginRenderers={DocViewerRenderers}/>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="h-[380px] bg-blue-300 border-[4px] border-gray-400">
          <img
            src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1706266960/rsh/Property_1_Variant6_1_hdn7cq.png"
            alt="class"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    );
  }
};

export default CoursePlayer;
