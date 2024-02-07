import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getPrograms } from "../../../../../services/api/programApi";

interface Props {
  setActive: React.Dispatch<React.SetStateAction<string>>;
}
const ProgramList: React.FC<Props> = ({ setActive }) => {
  const { isLoading } = useQuery({
    queryKey: ["getPrograms"],
    queryFn: getPrograms,
    retry: 0
  });
  const list = ["Mini MBA", "PPD Progams", "PPC Programs", "PC Programs"];
  return (
    <>
     <div className="bg-grad shadow-xl h-full p-2 pt-6">
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
      {list.map((item) => (
        <div onClick={() => setActive(item)} className="bg-white p-2 mb-3 rounded-lg cursor-pointer hover:bg-pri">
          <p className="">{item}</p>
        </div>
      ))}
     </div>
    </>
  );
};

export default ProgramList;
