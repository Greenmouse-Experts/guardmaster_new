import React, { FC, useEffect, useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import { MdOutlineOndemandVideo } from "react-icons/md";
import {
  AssessmentResultType,
  CourseContentData,
} from "../../../../../contracts/course";

type activeProps = {
  mediaType: string;
  media: string;
  duration: number;
  title: string;
  id: string;
  read?: boolean
};
interface Props {
  data: CourseContentData[];
  setActive: React.Dispatch<React.SetStateAction<activeProps>>;
  assessment: AssessmentResultType[];
}
const AssessmentList: FC<Props> = ({ data, setActive, assessment }) => {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
  const filteredArray = data
    .map((obj) => ({
      ...obj,
      courseContentSubs: obj.courseContentSubs.filter(
        (innerObj) => innerObj.mediaType === "assessment"
      ),
    }))
    .filter((obj) => obj.courseContentSubs.length > 0);
  const [assessIds, setAssessIds] = useState<(string | undefined)[]>([]);
  const getAssessment = () => {
    if (assessment) {
      const values = assessment?.map(({ courseContentSub }) => courseContentSub?.id);
      if (!!values.length) {
        setAssessIds(values);
      }
    } else {
      setAssessIds([]);
    }
  };
  useEffect(() => {
    getAssessment();
  }, []);

  return (
    <div className="mt-3">
      {filteredArray.map((item, i) => {
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
              className="border-b-2 px-2 p-4"
              onClick={() => handleOpen(i + 1)}
            >
              <div className="flex gap-x-2 items-start">
                <MdOutlineOndemandVideo className="text- shrink-0 relative top-2" />
                <p className="text-lg">{item.title}</p>
              </div>
            </AccordionHeader>
            <AccordionBody className="px-4">
              <div className="grid gap-3">
                {!!item.courseContentSubs?.length &&
                  item.courseContentSubs.map((item, i) => (
                    <div
                      className="flex justify-between items-center px-2 py-2 hover:text-black cursor-pointer"
                      onClick={() =>
                        setActive({
                          title: item.title || "",
                          media: item.media || "",
                          mediaType: item.mediaType,
                          duration: item.duration,
                          id: item?.id || "",
                          read: assessIds.includes(item?.id),
                        })
                      }
                      key={i}
                    >
                      <div className="flex items-center gap-x-2">
                        <div
                          className="pt-1"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <input
                            type="checkbox"
                            className="w-4 h-4"
                            checked={assessIds.includes(item?.id)}
                          />
                        </div>
                        <p className="fs-600 fw-500">{item.title}</p>
                      </div>
                      <div>
                        <p className="fs-500 fw-500 whitespace-nowrap">
                          {item.duration} Min(s)
                        </p>
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

export default AssessmentList;
