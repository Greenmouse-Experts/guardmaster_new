const BottomDisplay = () => {
  const data = [
    {
      name: "Mini-MBA Programs",
      img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1706791850/GuardMaster/Group_48097492_1_dwkhcb.png",
    },
    {
      name: "Professional Proficiency Diploma (PPD) Programs",
      img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1706791850/GuardMaster/Group_48097493_1_rx7jsa.png",
    },
    {
      name: "Professional Proficiency Certificate (PPC) Programs",
      img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1706791850/GuardMaster/Group_48097496_1_unetdi.png",
    },
    {
      name: "Provincial Licensing And Professional Certification Programs",
      img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1706791850/GuardMaster/Group_48097497_biv2hi.png",
    },
  ];
  return (
    <div className="absolute z-[3000]  bottom-0 w-full flex justify-center">
      <div className="w-10/12 bg-[#052B5E]/[0.6] text-white p-4 grid lg:grid-cols-4">
        {data.map((item) => (
          <div className="flex gap-x-2 items-center">
            <img src={item.img} alt="icon" className="w-[80px] shrink-0" />
            <p className="fw-500 fs-500">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomDisplay;
