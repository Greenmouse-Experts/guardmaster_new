import { SliderProps } from '../../lib/components/ui/SliderProps';
import PostHeader from '../../lib/components/layout/landing/PostHeader';
import "../../Stylesheet/style.css"
import "../../Stylesheet/about.css";

const ProgramsPage = () => {
    const data = [
        {
          id: 1,
          head: "Corporate Security Mgmt",
          image: 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1706877397/GuardMaster/Rectangle_21_1_uhww5i.png',
          body: "Corporate safety through security policies and risk management.",
          span: "Biochemistry",
        },
        {
          id: 2,
          head: "Loss Prevention Mgmt",
          image: 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1706877396/GuardMaster/Rectangle_21_2_jlzyd1.png',
          body: "Study of safeguarding assets and ensuring profitability",
          span: "Economics",
        },
        {
          id: 3,
          head: "Private Security Business Mgmt",
          image: 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1706877399/GuardMaster/Rectangle_21_4_qugl7r.png',
          body: "Enhance skills in private security business management.",
          span: "Media",
        },
        {
          id: 4,
          head: "Business Resilience & Disaster Recovery Studies",
          image: 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1706877397/GuardMaster/Rectangle_21_3_nizaut.png',
          body: "Build resilience with our Disaster Recovery Course.",
          span: "Finance",
        },
       
      ];
    
      const data2 = [
        {
          id: 1,
          head: "Loss Prevention Operations & Leadership Studies",
          image: 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1706877396/GuardMaster/Rectangle_21_5_cafdgf.png',
          body: "Integrating loss prevention and leadership studies principles.",
          span: "Course 001",
        },
        {
          id: 2,
          head: "Asset Protection Studies",
          image: 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1706877395/GuardMaster/Rectangle_21_6_hdgaeo.png',
          body: "Enhances your financial security and risk management",
          span: "Course 001",
        },
        {
          id: 3,
          head: "Private Security Operations & Leadership Studies",
          image: 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1706877394/GuardMaster/Rectangle_21_7_wohgfm.png',
          body: "Integrating private security operations and leadership studies.",
          span: "Course 001",
        },
        {
          id: 4,
          head: "Security Planning, Assessment & Audit",
          image: 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1706877394/GuardMaster/Rectangle_21_8_fzvcx3.png',
          body: "Comprehensive course integrating security planning & methodologies.",
          span: "Course 001",
        },
      ];
    
      const data3 = [
        {
          id: 1,
          head: "Event Security & Crowd Management",
          image: 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1706877393/GuardMaster/Rectangle_21_9_by3cw6.png',
          body: "Comprehensive training in event security and crowd management.",
          span: "Course 001",
        },
        {
          id: 2,
          head: "Commercial & Retail Crime Prevention",
          image: 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1706877393/GuardMaster/Rectangle_21_10_luyprj.png',
          body: "Enhance security skills with our Crime Prevention Course.",
          span: "Course 002",
        },
        {
          id: 3,
          head: "Loss Prevention Studies",
          image: 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1706877392/GuardMaster/Rectangle_21_11_s3q4tb.png',
          body: "Comprehensive Loss Prevention Studies Course: Safeguarding Businesses and Assets",
          span: "Course 003",
        },
        {
          id: 4,
          head: "Private Security Studies",
          image: 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1706877393/GuardMaster/Rectangle_21_12_v65dwg.png',
          body: "Explore advanced strategies for safeguarding organizations.",
          span: "Course 004",
        },
      ];
    
      const data4 = [
        {
          id: 1,
          head: "Ontario Security Guard Basic Course",
          image: 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1706877392/GuardMaster/Rectangle_21_13_wifdfs.png',
          body: "Essential training on foundational skills for guard responsibilities.",
          span: "Course 001",
        },
        {
          id: 2,
          head: "Alberta Security Guard Training Course",
          image: 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1706877392/GuardMaster/Rectangle_21_14_ysppgo.png',
          body: "Comprehensive security guard course for professional skill development.",
          span: "Course 002",
        },
        {
          id: 3,
          head: "IFPO Certified Protection Officers Course",
          image: 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1706877392/GuardMaster/Rectangle_21_15_o49izh.png',
          body: "Enhance your professional security skills comprehensively",
          span: "Course 003",
        },
        {
          id: 4,
          head: "Association of Chartered Loss Specialists of Canada Professional Certification Programs",
          image: 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1706877398/GuardMaster/Rectangle_21_16_hrskxy.png',
          body: "",
          span: "Course 004",
        },
      ];
      return (
        <div className="">
          <PostHeader image={'https://res.cloudinary.com/greenmouse-tech/image/upload/v1706870702/GuardMaster/Rectangle_3_8_ahgohc.png'} title="Courses" nav="Courses" />
          <div id="courses">
          </div>
          <SliderProps head="Mini MBA Programs" data={data} span="Mini MBA"/>
          <div id="diploma">
          </div>
          <SliderProps head="Professional Proficiency Diploma (PPD) Programs" data={data2} span="PPD Programs" />
          <div id="ppcp">
          </div>
          <SliderProps head="Professional Proficiency Certificate (PPC) Programs" data={data3} span="PPC Programs" />
          <div id="plpcp">
          </div>
          <SliderProps head="Provincial Licensing And Professional Certification Programs" data={data4} span="PCP Programs" />
        </div>
      );
}

export default ProgramsPage