import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getPrograms } from "../../../../../services/api/programApi";

interface Props {
  active: string,
  setActive: React.Dispatch<React.SetStateAction<string>>;
}
const ProgramList: React.FC<Props> = ({ setActive, active }) => {
  const { isLoading } = useQuery({
    queryKey: ["getPrograms"],
    queryFn: getPrograms,
    retry: 0
  });
  const list = ["Mini MBA", "PPD Progams", "PPC Programs", "PC Programs"];
  return (
    <>
     <div className="bg-grad shadow-xl h-full p-4 pt-6 rounded">
     {isLoading && <p></p>}
      {/* <div>
        {data &&
          data?.data?.length &&
          data?.data?.map((item: any) => (
            <div onClick={() => setActive(item.id)}>
              <p className="">{item?.title}</p>
            </div>
          ))}
      </div> */}
       <div onClick={() => setActive('')} className={`p-2 mb-3 rounded-lg cursor-pointer fw-500 duration-100 hover:bg-pri ${active === ''? 'bg-pri !syne border-2 border-white' : 'bg-gray-200'}`}>
          <p className="">All Programs</p>
        </div>
      {list.map((item) => (
        <div onClick={() => setActive(item)} className={`p-2 mb-3 rounded-lg cursor-pointer fw-500 duration-100 hover:bg-pri ${active === item? 'bg-pri !syne border-2 border-white' : 'bg-gray-200'}`}>
          <p className="">{item}</p>
        </div>
      ))}
     </div>
    </>
  );
};

export default ProgramList;
