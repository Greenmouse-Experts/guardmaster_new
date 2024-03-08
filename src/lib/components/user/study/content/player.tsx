import { FC } from "react";
import ReactPlayer from 'react-player'

type activeProps = {
  mediaType: string;
  media: string;
  duration: number;
};
interface Props {
  active: activeProps;
}
const CoursePlayer: FC<Props> = ({ active }) => {
  if (active.mediaType === "video") {
    return (
      <div>
        <div className="h-[380px] bg-blue-300">
        <ReactPlayer width={'100%'} height={'100%'} url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
        </div>
      </div>
    );
  }
  else if (active.mediaType === "image") {
    return (
      <div>
        <div className="h-[380px] bg-blue-300">
          <img
            src={active.media}
            alt="image"
            className="w-full h-full object-fit"
          />
        </div>
      </div>
    );
  }
  else{
    return (
        <div>
          <div className="h-[380px] bg-blue-300">
          </div>
        </div>
      );
  }
};

export default CoursePlayer;
