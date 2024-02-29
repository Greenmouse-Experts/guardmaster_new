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
          {
            (!isLoading && data) && data.data.map((item:any, i:number) => (
              <div key={i}>
                <SliderProps head={item.title} data={item.courses} span={item.title}/>
              </div>
            ))
          }
        </div>
      );
}

export default ProgramsPage