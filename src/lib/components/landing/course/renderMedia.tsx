import { FC } from "react";
import ReactPlayer from "react-player/lazy";

interface Props {
  type: string | undefined;
  url: string | undefined;
}
const RenderMedia: FC<Props> = ({ type, url }) => {
  return (
    <div className="w-full">
      {type === "image" ? (
        <div className="w-full max-h-[400px] overflow-y-auto">
          <img src={url} alt="tutorial-image" className="w-full" />
        </div>
      ) : type === "video" ? (
        <div className="relative">
          <ReactPlayer url={url} width={"100%"} controls />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default RenderMedia;
