import { NavLink } from "react-router-dom";

const MultiMenu = () => {
  return (
    <div className="box py-10 text-black">
      <div className="flex items-center gap-x-6">
        <h3 className="fw-600 text-primary syne text-3xl pr-6 border-r-[3px]">
          Programs and Courses{" "}
        </h3>
        <span className="fw-500 syne text-xl text-gray-600">Accredited CPD Provider by TheCPD Group, UK.</span>
      </div>
      <div className="grid gap-6 grid-cols-4  mt-8">
        <div>
          <h3 className="text-lg fw-600 pb-5 border-b border-[#052B5E]">Mini-MBA Programs</h3>
          <div className="grid mt-5 gap-3 text-gray-700">
            <NavLink to="/">Corporate Security Management</NavLink>
            <NavLink to="/">Loss Prevention Management</NavLink>
            <NavLink to="/">Private Security Business Management</NavLink>
            <NavLink to="/">
              Business Resilience & Disaster Recovery Studies
            </NavLink>
            <NavLink to="/">Supply Chain Security Management</NavLink>
          </div>
        </div>
        <div>
          <h3 className="text-lg fw-600 pb-5 border-b border-[#052B5E]">Professional Proficiency Diploma (PPD) Programs</h3>
          <div className="grid mt-5 gap-3 text-gray-700">
            <NavLink to="/">
              Loss Prevention Operations & Leadership Studies
            </NavLink>
            <NavLink to="/">Asset Protection Studies</NavLink>
            <NavLink to="/">
              Private Security Operations & Leadership Studies
            </NavLink>
            <NavLink to="/">Security Planning, Assessment & Audit</NavLink>
            <NavLink to="/">Forensic Accounting & Fraud Examination</NavLink>
          </div>
        </div>
        <div>
          <h3 className="text-lg fw-600 pb-5 border-b border-[#052B5E]">Professional Proficiency Certificate (PPC) Programs</h3>
          <div className="grid mt-5 gap-3 text-gray-700">
            <NavLink to="/">Event Security & Crowd Management</NavLink>
            <NavLink to="/">Commercial & Retail Crime Prevention</NavLink>
            <NavLink to="/">Loss Prevention Studies</NavLink>
            <NavLink to="/">Private Security Studies</NavLink>
            <NavLink to="/">Supply Chain Security Studies</NavLink>
          </div>
        </div>
        <div>
          <h3 className="text-lg fw-600 pb-5 border-b border-[#052B5E]">Provincial Licensing And Professional Certification Programs</h3>
          <div className="grid mt-5 gap-3 text-gray-700">
            <NavLink to="/">Ontario Security Guard Basic Course</NavLink>
            <NavLink to="/">Alberta Security Guard Training Course</NavLink>
            <NavLink to="/">IFPO Certified Protection Officers Course</NavLink>
            <NavLink to="/">
              Association of Chartered Loss Specialists of Canada Professional
              Certification Programs
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiMenu;
