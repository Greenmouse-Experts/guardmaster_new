const BottomDisplay = () => {
  const data = [
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
    <div className="absolute z-[3000]  bottom-0 w-full flex justify-center">
      <div className="w-10/12 bg-[#052B5E]/[0.6] text-white p-4 lg:p-10 grid lg:grid-cols-4 gap-4 lg:gap-6">
        {data.map((item) => (
          <div className={`flex gap-x-2 items-center ${item.border && 'border-r border-gray-700 border-dashed'}`}>
            <img src={item.img} alt="icon" className="w-[60px] shrink-0" />
            <p className="fw-500 fs-500">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomDisplay;
