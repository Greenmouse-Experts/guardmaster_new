import React, { FC } from "react";
import {
  RiArrowDropDownLine,
  RiArrowDropUpLine,
} from "react-icons/ri";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { CourseContentData } from "../../../../../contracts/course";

type activeProps = {
    mediaType: string;
    media: string;
    duration: number;
  };
interface Props {
  data: CourseContentData[];
  setActive: React.Dispatch<React.SetStateAction<activeProps>>
}
const ContentList: FC<Props> = ({ data, setActive }) => {
  const [open, setOpen] = React.useState(1);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <div className="mt-3">
      {data.map((item, i) => {
        return (
          <Accordion
            placeholder={""}
            open={open === i + 1}
            className=""
            icon={
              open !== i + 1 ? (
                <RiArrowDropDownLine className="text-3xl" />
              ) : (
                <RiArrowDropUpLine className="text-3xl" />
              )
            }
            key={i}
          >
            <AccordionHeader
              placeholder={""}
              className="border-b-2 p-4"
              onClick={() => handleOpen(i + 1)}
            >
              <div className="flex gap-x-2 items-center">
                <MdOutlineOndemandVideo className="text-" />
                <p className="text-lg">{item.title}</p>
              </div>
            </AccordionHeader>
            <AccordionBody className="px-4">
              <div className="grid gap-3">
                {!!item.courseContentSubs?.length &&
                  item.courseContentSubs.map((item) => (
                    <div className="flex justify-between items-center px-4 py-2 hover:text-black cursor-pointer" onClick={() => setActive({
                        media: item.previewUrl,
                        mediaType: item.mediaType,
                        duration: item.duration
                    })}>
                      <div className="flex items-center gap-x-2">
                      <span className="w-2 h-2 circle block bg-black"></span>
                        <p className="fs-600 fw-500">{item.title}</p>
                      </div>
                      <div>
                        <p className="fs-500 fw-500">{item.duration} Min(s)</p>
                      </div>
                    </div>
                  ))}
              </div>
            </AccordionBody>
          </Accordion>
        );
      })}
    </div>
  );
};

export default ContentList;