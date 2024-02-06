import PostHeader from "../../lib/components/layout/landing/PostHeader";

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
            <div>
              <div className="boxes">
                <div className="py-12 lg:py-24">
                  <div className="lg:flex items-center justify-between">
                    <div className="w-full lg:w-[25%]">
                      <img
                        src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1707231563/GuardMaster/Group_48097527_1_uwpfpd.png"
                        alt="founder"
                        className="w-full"
                      />
                    </div>
                    <div className="lg:w-[70%]">
                      <p className="!syne mt-4 lg:mt-0 !text-3xl">Adegbenga William Koko</p>
                      <p className="mt-4 !mont italic text-[#003DA5]">
                        MSc, MBA, PGCert. (Forensics), CA, CFE, CAMS, CCLP, CMILT
                        (UK), CBRM, LPC, ChLPS, CPO, CPOI, CC, MSyI, CPP® Executive
                        Director and Lead Faculty, Guardmaster Institute of
                        Corporate Security Management Canada
                      </p>
                      <p className="!mont mt-4">
                        Adegbenga is an ASIS Board Certified Protection Professional
                        (CPP®), IFPO Certified Protection Officer (CPO) and
                        Certified Protection Officer Instructor (CPOI), Professional
                        Member of The Security Institute, United Kingdom (MSyI),
                        Professional Member of the International Security
                        Organization (ISO-KLG) Switzerland, Certified Fraud Examiner
                        (CFE), Certified Forensic Investigator (CFI), Certified Anti
                        Money Laundering Specialist (CAMS), Chartered Member of the
                        Chartered Institute of Logistics and Transport – UK (CMILT),
                        and CITT Canada Certified Logistics Professional (CCLP). He
                        also holds the Chartered Professional Accountant (CA)
                        designations in two countries.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <p className="!mont">
                      He has undergone extensive training in the Canadian Corporate
                      Security, Loss Prevention, Anti Money Laundering and Financial
                      Crime Investigation Industry. He holds the Dual-Licenced of a
                      Private Investigator and Security Guard in the Province of
                      Ontario, Canada. He is also a Certified Chief Security Officer
                      (CSO) and Certified Physical Security Manager (CPSM),
                      Switzerland.
                    </p>
                    <p className="mt-3 !mont">
                      {" "}
                      Academically, he holds a Postgraduate Certificate in Fraud
                      Examination & Forensic Accounting, a Bachelor Degree in
                      Corporate Security Management, a Master of Science (MSc)
                      Degree in International Security & Risk Management, and a
                      Master of Business Administration (MBA) Degree in Finance &
                      Corporate Strategy. He is currently pursuing a Doctor of
                      Philosophy (PhD) Degree in Management, with specialization in
                      Corporate Security Business Management.
                    </p>
                    <p className="mt-3 !mont">
                      In addition to his expertise in Corporate Security Management,
                      he is also a Chartered Loss Prevention Specialist (ChLPS),
                      Loss Prevention Certified (LPC), Certified Security Assessment
                      Specialist, and Certified Business Resilience Manager (CBRM).
                      His expertise in Corporate Security Management, Security Audit
                      & Assessment, and Loss Prevention, enables him to design,
                      build and share his knowledge in designing and delivering
                      various training programs in Private Security Operations,
                      Corporate Security Management, Loss Prevention Operations,
                      Supply Chain Security Management, Loss Prevention Through
                      Environmental Design, and Security Audit & Assessment.
                    </p>
                    <p className="mt-3 !mont">
                      Adegbenga William Koko is a Certified and Accredited Trainer
                      with both The CPD Group-UK and the Global Compliance Institute
                      (GCI) Australia. He is currently the Lead Faculty with the
                      Guardmaster Institute of Corporate Security Management™,
                      Adjunct Faculty at Guardmaster Academy Canada™ and Team Lead
                      at Guardmaster Consulting Canada Inc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
}

export default Leadership