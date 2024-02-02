import { useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";
import PostHeader from "../../lib/components/layout/landing/PostHeader";
import "../../Stylesheet/about.css";
import "../../Stylesheet/style.css"

const FaqPage = () => {
  const [openItemId, setOpenItemId] = useState<number | null>(null);
  const handleItemClick = (id: number) => {
    if (openItemId === id) {
      setOpenItemId(null);
    } else {
      setOpenItemId(id);
    }
  };
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
    {
      id: 5,
      question: "Can I take courses part-time?",
      answer:
        "Yes, we offer flexibility in scheduling. Many programs can be taken part-time to accommodate your work or other commitments. Many of our programs are offered online and self-paced.",
    },
    {
      id: 6,
      question: "How do I apply for a program?",
      answer:
        "To apply, visit our website, choose your desired program, and follow the simple application process outlined on the respective program page.",
    },
    {
      id: 7,
      question: "What is the duration of the programs?",
      answer:
        "Program durations vary. Mini-MBA programs are designed to be completed within a specific timeframe, while other courses offer flexibility. Check each program's details for specific durations.",
    },
    {
      id: 8,
      question:
        "Are there scholarships or financial aid available for Canadian students?",
      answer:
        "Guardmaster Institute Canada offers various payment options. For information on scholarships or financial aid, please contact our admissions team.",
    },
    {
      id: 9,
      question: "Can I work while studying?",
      answer:
        "Yes, many of our programs are designed to accommodate working professionals. However, specific regulations may apply, especially for international students.",
    },
    {
      id: 10,
      question: "How is online learning facilitated?",
      answer:
        "Our online platform is user-friendly, offering access to course materials, discussions, and assessments. It supports interactive learning and engagement.",
    },
    {
      id: 11,
      question:
        "Is job placement assistance provided after program completion?",
      answer:
        "While we don't guarantee job placement, our programs enhance your employability. We also share relevant job opportunities with our graduates.",
    },
    {
      id: 12,
      question:
        "Are there networking opportunities with industry professionals?",
      answer:
        "Yes, we organize networking events, webinars, and seminars, providing opportunities for students to connect with industry professionals.",
    },
    {
      id: 13,
      question: "Can I transfer credits from other Canadian institutions?",
      answer:
        "Transfer credit policies vary. Contact our admissions team with your specific details for a personalized assessment.",
    },
    {
      id: 14,
      question: "Are there opportunities for practical experience?",
      answer:
        "Yes, where applicable, our programs include practical components, ensuring students gain hands-on experience in their respective fields.",
    },
    {
      id: 15,
      question: "How do I access support services as a student?",
      answer:
        "We offer a range of support services, including academic advising, career counselling, and technical support. Contact our student services for assistance.",
    },
    {
      id: 16,
      question: "Can I access course materials after completing a program?",
      answer:
        "Yes, graduates retain access to course materials for future reference (limited time only) after program completion.",
    },
    {
      id: 17,
      question:
        "How do I contact Guardmaster Institute Canada for more information?",
      answer:
        "For inquiries, you can reach our admissions team via email at info@guardmasterinstitute.ca or call +1 905 452 2470. We are here to assist you in your corporate security educational and career journey.",
    },
    {
      id: 18,
      question:
        "Is Guardmaster Institute Canada affiliated with any professional organizations?",
      answer:
        "Yes, we maintain affiliations with industry-leading professional associations/organizations, enhancing the credibility and relevance of our programs.",
    },
    {
      id: 19,
      question:
        "What distinguishes Guardmaster Institute Canada from other training providers?",
      answer:
        "Our commitment to excellence, accreditation, experienced faculty, and diverse program offerings set us apart as a leading institute in Canada.",
    },
    {
      id: 20,
      question: "Can I apply for multiple programs simultaneously?",
      answer:
        "Yes, you can apply for multiple programs. Each application will be assessed individually based on the specific program requirements.",
    },
    {
      id: 21,
      question: "Can I pay for courses in installments?",
      answer:
        "Yes, we offer installment payment plans, where applicable. Details are available during the application process.",
    },
    {
      id: 22,
      question: "Are the programs industry-recognized?",
      answer:
        "Yes, our programs are designed in consultation with industry experts and are recognized for their relevance to current industry standards.",
    },
    {
      id: 23,
      question: "Do you offer corporate training programs?",
      answer:
        "Yes, Guardmaster Institute Canada provides customized corporate training programs. Contact our corporate training department for more information.",
    },
    {
      id: 24,
      question: "What is the refund policy for program fees?",
      answer:
        "Our refund policy is outlined in the terms and conditions provided during the application process. Please review these carefully or contact our admissions team for clarification.",
    },
  ];

  return (
    <div className="">
      <PostHeader
        image={
          "https://res.cloudinary.com/greenmouse-tech/image/upload/v1706870703/GuardMaster/Rectangle_3_7_c1ct1o.png"
        }
        title="Frequently Asked Questions"
        nav="FAQs "
      />
      <div className="main_faq">
        {faqData.map((item) => (
          <div
            key={item.id}
            className={`content_faq ${
              openItemId === item.id ? "open_faq" : ""
            }`}
          >
            <div onClick={() => handleItemClick(item.id)} className="faq_head">
              <p>{item.question}</p>
              <span
                onClick={() => handleItemClick(item.id)}
                className="icon_faq"
              >
                {openItemId === item.id ? <HiMinus /> : <HiPlus />}
              </span>
            </div>

            {openItemId === item.id && (
              <div className="body_faq">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqPage;
