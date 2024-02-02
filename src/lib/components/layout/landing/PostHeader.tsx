import { FC } from "react";
import { Link } from "react-router-dom";

interface Props {
  image: any;
  title: string;
  nav: string;
}

const PostHeader: FC<Props> = ({ image, title, nav }) => {
  return (
    <>
      <div className="relative h-48">
        <div style={{background: `linear-gradient(to right, rgba(0,0,0,.9), rgba(0,0,0,.4)),url('${image}')`}} className={`bg-cover h-full`}>
          <div className="box h-full flex items-center">
            <div className="text-white">
            <h2 className="text-xl lg:text-3xl fw-600">{title}</h2>
            <p className="mt-5 lg:text-lg">
              <Link to="/" className="text-pri fw-500">Home</Link> / {nav}
            </p>
          </div>
          </div>
        </div>
        <div className="absolut h-44 top-0 left-0"></div>
      </div>
    </>
  );
};

export default PostHeader;
