import { RiArrowRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const ProgramSection = () => {
  return (
    <>
      <div className="section bg-[#EDEDED]">
        <div className="box">
          <div>
            <div className="text-center">
              <p className="mt-3 fw-600 syne text-2xl lg:text-4xl">
                Guardmaster Institute Programs and Courses
              </p>
              <p className="lg:w-6/12 mx-auto mt-3 fw-500">
                With experienced instructors, security guidance, online study
                options and our maximum support, we make it easier to get into
                the high-demand security career of your choice.
              </p>
            </div>
            <div className="mt-6 lg:mt-16">
              <div className="md:w-9/12 mx-auto grid lg:grid-cols-2 gap-8">
                <div className="new-shade">
                  <div className="flex px-4 py-3 lg:p-5 text-white gap-x-3 bg-primary items-center">
                    <img
                      src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1706796228/GuardMaster/Rectangle_21222_gpbuow.png"
                      alt="icons"
                      className="w-10"
                    />
                    <p className="fw-600">Mini MBA Programs</p>
                  </div>
                  <div className="p-4 py-6">
                    <ul className="grid gap-2">
                      <li className="flex items-center gap-x-2">
                        <span className="w-2 h-2 circle bg-primary"></span>
                        <span>Corporate Security Management</span>
                      </li>
                      <li className="flex items-center gap-x-2">
                        <span className="w-2 h-2 circle bg-primary"></span>
                        <span>Loss Prevention Management</span>
                      </li>
                      <li className="flex items-center gap-x-2">
                        <span className="w-2 h-2 circle bg-primary"></span>
                        <span>Private Security Business Management</span>
                      </li>
                      <li className="flex items-center gap-x-2">
                        <span className="w-2 h-2 circle bg-primary"></span>
                        <span>
                          Business Resilience & Disaster Recovery Studies
                        </span>
                      </li>
                      <li className="flex items-center gap-x-2">
                        <span className="w-2 h-2 circle bg-primary"></span>
                        <span>Supply Chain Security Management</span>
                      </li>
                    </ul>
                    <div className="flex justify-end mt-7">
                      <Link
                        to={"/programs"}
                        className="text-[#0D0D0D] flex gap-x-2 items-center fw-500"
                      >
                        View All Programs <RiArrowRightLine className="text-pri" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="new-shade">
                  <div className="flex px-4 py-3 lg:p-5 gap-x-3 bg-pri items-center">
                    <img
                      src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1706796228/GuardMaster/Rectangle_21223_c0unaw.png"
                      alt="icons"
                      className="w-10"
                    />
                    <p className="fw-600">
                      Professional Proficiency Diploma (PPD) Programs
                    </p>
                  </div>
                  <div className="p-4 py-6">
                    <ul className="grid gap-2">
                      <li className="flex items-center gap-x-2">
                        <span className="w-2 h-2 circle shrink bg-pri"></span>
                        <span>
                          Loss Prevention Operations & Leadership Studies
                        </span>
                      </li>
                      <li className="flex items-center gap-x-2">
                        <span className="w-2 h-2 circle shrink bg-pri"></span>
                        <span>Asset Protection Studies</span>
                      </li>
                      <li className="flex items-center gap-x-2">
                        <span className="w-2 h-2 circle shrink bg-pri"></span>
                        <span>
                          Private Security Operations & Leadership Studies
                        </span>
                      </li>
                      <li className="flex items-center gap-x-2">
                        <span className="w-2 h-2 circle shrink bg-pri"></span>
                        <span>Security Planning, Assessment & Audit</span>
                      </li>
                      <li className="flex items-center gap-x-2">
                        <span className="w-2 h-2 circle shrink bg-pri"></span>
                        <span>Forensic Accounting & Fraud Examination</span>
                      </li>
                    </ul>
                    <div className="flex justify-end mt-7">
                      <Link
                        to={"/programs"}
                        className="text-[#0D0D0D] flex gap-x-2 items-center fw-500"
                      >
                        View All Programs{" "}
                        <RiArrowRightLine className="text-pri" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="new-shade">
                  <div className="flex px-4 lg:p-5 py-3 gap-x-3 bg-pri items-center">
                    <img
                      src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1706796228/GuardMaster/Rectangle_21224_vkfohy.png"
                      alt="icons"
                      className="w-10"
                    />
                    <p className="fw-600">
                      Professional Proficiency Certificate (PPC) Programs
                    </p>
                  </div>
                  <div className="p-4 py-6">
                    <ul className="grid gap-2">
                      <li className="flex items-center gap-x-2">
                        <span className="w-2 h-2 circle shrink bg-pri"></span>
                        <span>Event Security & Crowd Management</span>
                      </li>
                      <li className="flex items-center gap-x-2">
                        <span className="w-2 h-2 circle shrink bg-pri"></span>
                        <span>Commercial & Retail Crime Prevention</span>
                      </li>
                      <li className="flex items-center gap-x-2">
                        <span className="w-2 h-2 circle shrink bg-pri"></span>
                        <span>Loss Prevention Studies</span>
                      </li>
                      <li className="flex items-center gap-x-2">
                        <span className="w-2 h-2 circle shrink bg-pri"></span>
                        <span>Private Security Studies</span>
                      </li>
                      <li className="flex items-center gap-x-2">
                        <span className="w-2 h-2 circle shrink bg-pri"></span>
                        <span>Supply Chain Security Studies</span>
                      </li>
                    </ul>
                    <div className="flex justify-end mt-7">
                      <Link
                        to={"/programs"}
                        className="text-[#0D0D0D] flex gap-x-2 items-center fw-500"
                      >
                        View All Programs{" "}
                        <RiArrowRightLine className="text-pri" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="new-shade">
                  <div className="flex px-4 py-3 lg:p-5 text-white gap-x-3 bg-primary items-center">
                    <img
                      src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1706796228/GuardMaster/Rectangle_21225_fgs8cd.png"
                      alt="icons"
                      className="w-10 shrink-0"
                    />
                    <p className="fw-600">
                      Provincial Licensing And Professional Certification
                      Programs
                    </p>
                  </div>
                  <div className="p-4 py-6">
                    <ul className="grid gap-2">
                      <li className="flex items-center gap-x-2">
                        <span className="w-2 shrink-0 h-2 circle bg-primary"></span>
                        <span>Ontario Security Guard Basic Course</span>
                      </li>
                      <li className="flex items-center gap-x-2">
                        <span className="w-2 h-2 shrink-0 circle bg-primary"></span>
                        <span>Alberta Security Guard Training Course</span>
                      </li>
                      <li className="flex items-center gap-x-2">
                        <span className="w-2 h-2 shrink-0 circle bg-primary"></span>
                        <span>IFPO Certified Protection Officers Course</span>
                      </li>
                      <li className="flex items-center gap-x-2">
                        <span className="w-2 h-2 shrink-0 circle bg-primary"></span>
                        <span>
                          Association of Chartered Loss Specialists of Canada
                          Professional Certification Programs
                        </span>
                      </li>
                    </ul>
                    <div className="flex justify-end mt-7">
                      <Link
                        to={"/programs"}
                        className="text-[#0D0D0D] flex gap-x-2 items-center fw-500"
                      >
                        View All Programs{" "}
                        <RiArrowRightLine className="text-pri" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramSection;
