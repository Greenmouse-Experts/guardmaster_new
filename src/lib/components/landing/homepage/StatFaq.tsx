import { useState } from "react";
import { RiArrowDownSLine, RiArrowLeftSLine } from "react-icons/ri";

const StatFaqSection = () => {
  const stat = [
    {
      name: "Students Worldwide",
      number: "1230",
      icon: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1706798016/GuardMaster/Rectangle_21109_1_ygzhdp.png",
    },
    {
      name: "Courses & Programs",
      number: "960",
      icon: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1706798017/GuardMaster/Rectangle_21110_ggxwes.png",
    },
    {
      name: "Certifications Earned",
      number: "2650",
      icon: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1706798017/GuardMaster/Rectangle_21111_yyrcrx.png",
    },
    {
      name: "Tutors",
      number: "5950",
      icon: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1706798016/GuardMaster/Rectangle_21111_1_xoitau.png",
    },
  ];
  const [openItemId, setOpenItemId] = useState<number | null>(null);
  const faqData = [
    {
      id: 1,
      question: "What programs does Guardmaster Institute Canada offer?",
      answer:
        "Guardmaster Institute Canada offers a diverse range of programs including Mini-MBA, Professional Proficiency Certificates and Diplomas in Corporate Security Management, Loss Prevention Management, Private Security Business Management, Business Resilience & Disaster Recovery Studies, and Supply Chain Security Management.",
    },
    {
      id: 2,
      question: "Are the programs recognized in Canada?",
      answer:
        "Yes, our programs are accredited and recognized by relevant authorities and professional bodies in Canada and internationally. We are also licensed by the Governments of Ontario and Alberta for Provincial Security Guard Licensing programs.",
    },
    {
      id: 3,
      question:
        "Can international students enroll in Guardmaster Institute Canada programs?",
      answer:
        "Yes, our programs are open to both domestic and international students. We welcome learners from around the world.",
    },
    {
      id: 4,
      question: "What are the admission requirements?",
      answer:
        "Admission requirements vary by program. Please refer to the specific program pages on our website for detailed information.",
    },
  ];

  const handleItemClick = (id: number) => {
    if (openItemId === id) {
      setOpenItemId(null);
    } else {
      setOpenItemId(id);
    }
  };
  return (
    <>
      <div>
        <div className="bg-grad section">
          <div className="box">
            <div className="grid md:grid-cols-2 lg:flex lg:px-16 justify-between">
              {stat.map((item) => (
                <div className="text-white p-4">
                  <div className="flex items-center gap-x-3">
                    <img
                      src={item.icon}
                      alt="icons"
                      className="w-12 shrink-0"
                    />
                    <p className="text-2xl lg:text-3xl fw-600">{item.number}</p>
                  </div>
                  <div className="mt-4">
                    <p className="fw-600">{item.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="section bg-[#EDEDED]">
          <div className="box">
            <div>
              <div className="text-center">
                <p className="mt-3 fw-600 syne text-2xl lg:text-4xl">
                  Get Answers to all your Questions
                </p>
                <p className="lg:w-6/12 mx-auto mt-3 fw-500">
                  Get answers to all your question from our FAQs, feel free to
                  contact us if you don’t find the answer you are looking for.
                </p>
              </div>
              <div className="lg:w-7/12 mt-12 mx-auto">
                <div className="faq_div">
                  {faqData.map((item) => (
                    <div
                      key={item.id}
                      className={`p-3 rounded ${
                        openItemId === item.id ? "" : ""
                      }`}
                    >
                      <div
                        onClick={() => handleItemClick(item.id)}
                        className={`p-2 lg:px-4 flex w-full rounded-md items-center justify-between ${openItemId === item.id ? "bg-primary text-white" : "bg-white"}`}
                      >
                        <p>{item.question}</p>
                        <span
                          onClick={() => handleItemClick(item.id)}
                          className={`w-9 h-9 place-center rounded-md ${openItemId === item.id ? 'bg-white text-black' : 'bg-primary text-white'}`}
                        >
                          {openItemId === item.id ? (
                            <RiArrowDownSLine className="text-xl"/>
                          ) : (
                            <RiArrowLeftSLine className="text-xl"/>
                          )}
                        </span>
                      </div>

                      {openItemId === item.id && (
                        <div className="p-4 scale-ani">{item.answer}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatFaqSection;
