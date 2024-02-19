import { SliderProps } from '../../lib/components/ui/SliderProps';
import PostHeader from '../../lib/components/layout/landing/PostHeader';
import "../../Stylesheet/style.css"
import "../../Stylesheet/about.css";
import { useQuery } from '@tanstack/react-query';
import { getPublicPrograms } from '../../services/api/publicApi';

const ProgramsPage = () => {
  const {data, isLoading} = useQuery({
    queryFn: getPublicPrograms,
    queryKey: ['publicProgram']
  })
      return (
        <div className="pb-24">
          <PostHeader image={'https://res.cloudinary.com/greenmouse-tech/image/upload/v1707231565/GuardMaster/Rectangle_3_10_stgoyx.png'} title="Courses" nav="Courses" />
          {/* <div id="courses">
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
          <SliderProps head="Provincial Licensing And Professional Certification Programs" data={data4} span="PCP Programs" /> */}
          {
            (!isLoading && data) && data.data.map((item:any, i:number) => (
              <div key={i}>
                <SliderProps head={item.title} data={item.courses} span={item.title.charAt(0)}/>
              </div>
            ))
          }
        </div>
      );
}

export default ProgramsPage