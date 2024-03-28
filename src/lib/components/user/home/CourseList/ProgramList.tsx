import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getPrograms } from "../../../../../services/api/programApi";

interface Props {
  active: string,
  setActive: React.Dispatch<React.SetStateAction<string>>;
}
const ProgramList: React.FC<Props> = ({ setActive, active }) => {
  const { isLoading, data } = useQuery({
    queryKey: ["getPrograms"],
    queryFn: getPrograms,
    retry: 0
  });
  interface ProgramType{
    title: string;
    id: string;
  }
  // const list = ["Mini MBA", "PPD Progams", "PPC Programs", "PC Programs"];
  return (
    <>
     <div className="bg-grad shadow-xl h-full p-4 pt-6 rounded flex gap-x-3 scroll-pro lg:block overflow-x-auto">
     {isLoading && <p></p>}
       <div onClick={() => setActive('')} className={`p-2 mb-3 rounded-lg cursor-pointer fw-500 duration-100 hover:bg-pri ${active === ''? 'bg-pri !syne border-2 border-white' : 'bg-gray-200'}`}>
          <p className="w-36 text-center lg:text-left lg:w-auto">All Programs</p>
        </div>
      {data?.data?.map((item:ProgramType) => (
        <div key={item.id} onClick={() => setActive(item.id)} className={`p-2 mb-3  rounded-lg cursor-pointer fw-500 duration-100 hover:bg-pri ${active === item.id? 'bg-pri !syne border-2 border-white' : 'bg-gray-200'}`}>
          <p className="lg:w-auto text-center lg:text-left whitespace-nowrap lg:whitespace-normal">{item.title}</p>
        </div>
      ))}
     </div>
    </>
  );
};

export default ProgramList;
