import PostHeader from "../../lib/components/layout/landing/PostHeader";
import admin from "../../assets/Rectangle 21202.png";

const Leadership = () => {
  return (
    <>
      <div className="">
        <PostHeader
          image={
            "https://res.cloudinary.com/greenmouse-tech/image/upload/v1706182936/GuardMaster/Group_48097434_1_j5kis8.png"
          }
          title="Leadership and Governance"
          nav="Leadership and Governance"
        />
        <div className="mt-24">
          <div className="bg-primary">
            <div className="box">
              <div className="relative flex flex-col py-12 lg:flex-row-reverse">
                <div className="lg:w-5/12 flex justify-center">
                  <div className="lg:absolute lg:w-[300px] -top-5 bg-secondary rounded-[50px] border-[20px] border-[#FFD347]">
                    <img
                      src={admin}
                      alt="admin"
                      className="w-full h-[295px] rounded-[50px] object-cover"
                    />
                  </div>
                </div>
                <div className="lg:w-7/12 pt-6 lg:py-[60px]">
                  <div className="absolute -top-5 left-0 flex ">
                    <p className="bg-secondary px-4 lg:px-8 fw-600 py-2">
                      LEAD FACULTY AND TRAINER
                    </p>
                  </div>
                  <div className="text-white">
                    <p className="fw-600 text-3xl lg:text-5xl">
                      ADEGBENGA <br />
                      WILLIAM KOKO
                    </p>
                    <p className="mt-6 lg:text-lg lg:w-8/12">
                      MSc; MBA; CA; CFE; CFI; CPI; CCM; CAMS; CCLP; CMILT; CPSM;
                      LPC; CBRM; CC<sup>SM</sup>,CPO; CPOI; MSyl; ChLPS
                      <sup>TM</sup>; CPP &reg;
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-pri w-full h-16"></div>
          </div>
          <div className="box mt-16">
            <div>
              <p>
                He is a Chartered Accountant (CA), an ASIS International Board
                Certified Protection Professional (CPP®), I P O Certified
                Protection Officer (CPO), I P O Certified Protection Officer
                Instructor (CPOI), Chartered Loss Prevention Specialist
                (ChLPSTM), Loss Prevention Certified Professional (LPC),
                Certified Security Assessment Specialist, Certified Professional
                Investigator (CPI), Certified Commercial & Retail Crime
                Prevention Specialist, Certified Physical Security Manager
                (CPSM), Certified Chief Security Officer (CSO), Certified Fraud
                Examiner (CFE), Certified Anti-Money Laundering Specialist
                (CAMS), Certified Business Resilience Manager (CBRM), Certified
                Forensic Investigator (CFI), Certified Compliance Manager (CCM),
                CITT Certified Logistics Professional (CCLP), and ISC2 -
                Cybersecurity Certified (CC<sup>SM</sup>).
              </p>
              <p className="mt-6">
                He holds a Bachelor&apos;s Degree in Corporate Security
                (Switzerland), an Associate Degree in Accountancy, a
                Postgraduate Certificate in Forensic Accounting & Fraud
                Examination (Seneca College, Canada), a Graduate Certificate in
                Risk Management (York University, Canada), a Master of Business
                Administration (MBA) Degree in Finance &Corporate Strategy, and
                a Master of Science (MSc.) Degree inInternational Security and
                Risk Management (University of West London, UK). He is currently
                pursuing a Doctor of Philosophy (PhD) Degree in Management -
                (Corporate Security Business Management).
              </p>
              <p className="mt-6">
                Adegbenga has distinct expertise in internal audit & control,
                cybersecurity, regulatory compliance, fraud & forensic
                Investigations, anti-money laundering investigations, general
                corporate security operations, corporate intelligence,
                investigations, security risk management, enterprise risk
                management, incident management, business continuity management,
                leadership of cross-functional teams, training & learning
                management, among others.
              </p>
            </div>
          </div>
          <div className="relative mt-16 min-h-[1200px] lg:min-h-[700px]">
            <div className="w-full z-0 absolute h-[1200px] lg:h-[700px] clip-slant bg-primary"></div>
            <div className="box py-16 text-white">
              <div className="relative z-10 lg:flex gap-x-6">
                <div className="lg:w-10/12">
                  <p>
                    He is a multi-skilled and multi-disciplinary professional
                    with specialization in Corporate Security Management, Loss
                    Prevention, Business Resilience, Business Analysis, Anti
                    Money Laundering, and Supply Chain Security. He has over
                    fifteen years’ hands-on industry experience spread across
                    banking, financial services, logistics and consulting.
                  </p>
                  <p className="mt-6">
                    He is a subject matter expert in his fields, and his
                    expertise enables him to build and share his knowledge in
                    designing various training programs in Corporate Security
                    Management, Loss Prevention, Supply Chain Security,
                    Strategic Management, IT/Cybersecurity Audit, Change
                    Management, Business Analysis, Fraud Examination, and
                    Anti-Money Laundering Strategies in many jurisdictions
                    across the globe. 
                  </p>
                  <p className="mt-6">
                    A Certified and Accredited Trainer with both The CPD
                    Group-UK and the Global Compliance Institute (GCI)
                    Australia, He is also a Professional Member (MSyI) of The
                    Security Institute, United Kingdom; Certified Member of the
                    International Security Organization (ISO-KLG), Switzerland,
                    and Chartered Member of the Chartered Institute of Logistics
                    and Transport (CMILT), United Kingdom. He is the Lead
                    Faculty and Trainer at Guardmaster Institute of Corporate
                    Security Management Canada, and Team Lead at Guardmaster
                    Consulting Canada.
                  </p>
                </div>
                <div className="hidden lg:block w-2/12 h-[600px] bg-pri"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leadership;
