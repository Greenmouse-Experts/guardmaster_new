import React, { FC, useState } from "react";
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
import { CourseContentData, CourseContentSubs } from "../../../../contracts/course";
import useDialog from "../../../../hooks/useDialog";
import PreviewContent from "./previewContent";

interface Props {
  data: CourseContentData[];
}
const ContentList: FC<Props> = ({ data }) => {
  const [open, setOpen] = React.useState(1);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
  const {Dialog, setShowModal} = useDialog()
  const [info, setIfo] = useState<CourseContentSubs>()
  const handleOpenPreview = (item:CourseContentSubs) => {
      setIfo(item)
    setShowModal(true)
  }

  return (
   <div>
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
            <AccordionBody className="lg:px-4">
              <div className="mt-2 grid gap-3">
                {!!item.courseContentSubs?.length &&
                  item.courseContentSubs.map((item) => (
                    <div className="flex justify-between items-center px-4 py-2 hover:text-black cursor-pointer" >
                      <div className="flex items-center gap-x-2">
                      <span className="w-3 h-3 circle block bg-black"></span>
                        <p className="fs-600 fw-500">{item.title}</p>
                      </div>
                      <div className="lg:flex items-center gap-x-2">
                       {item.previewUrl && <p className="underline text-blue-600 fw-600 !syne fs-600" onClick={() => handleOpenPreview(item)}>Preview</p>}
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
    <Dialog title="Course Content Preview" size="xl">
      <PreviewContent data={info}/>
    </Dialog>
   </div>
  );
};

export default ContentList;
