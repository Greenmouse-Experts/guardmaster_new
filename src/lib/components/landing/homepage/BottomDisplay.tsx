import { useQuery } from "@tanstack/react-query";
import { getPublicPrograms } from "../../../../services/api/publicApi";

const BottomDisplay = () => {
  const {data, isLoading} = useQuery({
    queryFn: () => getPublicPrograms(1),
    queryKey: ['publicProgram']
  })
  const datas = [
    {
      name: "Mini-MBA Programs",
      img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1706791850/GuardMaster/Group_48097492_1_dwkhcb.png",
      border: true
    },
    {
      name: "Professional Proficiency Diploma (PPD) Programs",
      img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1706791850/GuardMaster/Group_48097493_1_rx7jsa.png",
      border: true
    },
    {
      name: "Professional Proficiency Certificate (PPC) Programs",
      img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1706791850/GuardMaster/Group_48097496_1_unetdi.png",
      border: true
    },
    {
      name: "Provincial Licensing And Professional Certification Programs",
      img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1706791850/GuardMaster/Group_48097497_biv2hi.png",
      border: false
    },
  ];
  return (
    <div className="lg:absolute z-[3000]  bottom-0 w-full flex justify-center">
      <div className="md:w-10/12 bg-[#052B5E] lg:bg-[#052B5E]/[0.6] text-white py-12 md:py-6 p-6 lg:p-10 grid md:grid-cols-2 lg:grid-cols-4 gap-9 md:gap-4 lg:gap-6">
        {!isLoading && data && data.data.slice(0,4).map((item:any, i:number) => (
          <div className={`flex gap-x-2 items-center ${datas[i].border && 'border-r border-gray-700 border-dashed'}`}>
            <img src={datas[i].img} alt="icon" className="w-[60px] shrink-0" />
            <p className="fw-500 fs-500">{item.title} Programs</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomDisplay;
