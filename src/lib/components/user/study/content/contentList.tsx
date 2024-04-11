import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import { MdOutlineOndemandVideo } from "react-icons/md";
import {
  CourseContentData,
  CourseContentSubs,
  ReadItemType,
} from "../../../../../contracts/course";
import { markSubRead } from "../../../../../services/api/programApi";
import { toast } from "react-toastify";

type activeProps = {
  mediaType: string;
  media: string;
  duration: number;
  title: string;
  id: string;
};
interface Props {
  data: CourseContentData[];
  setActive: React.Dispatch<React.SetStateAction<activeProps>>;
  id: string;
  reads: ReadItemType[]
}
const ContentList: FC<Props> = ({ data, setActive, id, reads }) => {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  const [readIds, setReadIds] = useState<(string | undefined)[]>([])
  const getReads = () => {
    if(reads){
      const values = reads.map(({contentSub}) => contentSub.id)
      if(!!values.length){
        setReadIds(values)
      }
    }else {
      setReadIds([])
    }
  }
  useEffect(() => {
    getReads()
  },[])
  
  const handleCheck = (e: ChangeEvent<HTMLInputElement>, id: string) => {
    if(e.target.checked){
      markAction(id)
    }else {
      toast.info('You cannot uncheck a  read course content')
    }
  }
  const markAction = async (subId:string) => {
    const payload = {
      courseContentSub: subId
    }
    await markSubRead(payload, id)
    .then((res) => {
      toast.success(res.message)
      setReadIds([...readIds, subId])
    })
    .catch((err:any) => {
      toast.error(err.response.data.message)
    })
  }

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
              className="border-b-2 px-2 p-4"
              onClick={() => handleOpen(i + 1)}
            >
              <div className="flex gap-x-2 items-start ">
                <MdOutlineOndemandVideo className="text- shrink-0 relative top-2" />
                <p className="text-lg">{item.title}</p>
              </div>
            </AccordionHeader>
            <AccordionBody className="px-4">
              <div className="grid gap-3">
                {!!item.courseContentSubs?.length &&
                  item.courseContentSubs
                    .filter(
                      (where: CourseContentSubs) =>
                        where.mediaType !== "assessment"
                    )
                    .map((item, i) => (
                      <div
                        className="flex justify-between items-center px-2 py-2 hover:text-black cursor-pointer"
                        key={i}
                        onClick={() =>
                          setActive({
                            media: item.media || "",
                            mediaType: item.mediaType,
                            duration: item.duration,
                            title: item?.title,
                            id: item?.id || ''
                          })
                        }
                      >
                        <div className="flex items-center gap-x-2">
                          <div className="pt-1" onClick={(e) => e.stopPropagation()}>
                          <input type="checkbox" className="w-4 h-4" onChange={(e) => handleCheck(e, item.id || '')} checked={readIds.includes(item?.id)}  />
                          </div>
                          <p className="fs-500 2xl:fs-600 fw-500">{item.title}</p>
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

export default ContentList;
