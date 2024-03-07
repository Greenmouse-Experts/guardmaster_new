import { SliderProps } from "../../lib/components/ui/SliderProps";
import PostHeader from "../../lib/components/layout/landing/PostHeader";
import "../../Stylesheet/style.css";
import "../../Stylesheet/about.css";
import { getPublicPrograms } from "../../services/api/publicApi";
import HourGlassLoading from "../../lib/components/ui/loading/hourloading";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ProgramsPage = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const fetchPublicPrograms = async (page: number) => {
    setIsLoading(true);
    await getPublicPrograms(page)
      .then((res:any) => {
        setData(res.data);
        setCount(res.count)
        setIsLoading(false)
      })
      .catch(() => {
        setIsLoading(false)
      });
  };
  useEffect(() => {
    fetchPublicPrograms(1);
  }, []);
  const handleNext = () => {
    if(page * 6 <= count){
      toast.info('This is the last page')
      return;
    }
    setPage(page + 1)
    fetchPublicPrograms(page + 1)
  }
  const handlePrev = () => {
    if(page === 1){
      toast.info('This is the first page')
      return;
    }
    setPage(page - 1)
    fetchPublicPrograms(page - 1)
  }
  return (
    <div className="pb-24">
      <PostHeader
        image={
          "https://res.cloudinary.com/greenmouse-tech/image/upload/v1707231565/GuardMaster/Rectangle_3_10_stgoyx.png"
        }
        title="Courses"
        nav="Courses"
      />
      {isLoading && (
        <div className="place-center py-16">
          <HourGlassLoading size={1.3} />
        </div>
      )}
      {!isLoading &&
        data &&
        data.map((item: any, i: number) => (
          <div key={i}>
            <SliderProps
              head={item.title}
              data={item.courses}
              span={item.title}
            />
          </div>
        ))}
         <div className="box mt-6 flex justify-end">
              <div className="flex gap-x-4 items-center">
                <p className="fw-600">Page {page}</p>
                <div className="flex gap-x-2 items-center">
                  <div onClick={handlePrev} className={`px-2 py-1 rounded ${page === 1? 'bg-gray-300 cursor-not-allowed' : 'bg-primary text-white cursor-pointer'}`}>
                    Prev
                  </div>
                  <div onClick={handleNext} className={`px-2 py-1 rounded ${page * 6 <= count? 'bg-gray-300 cursor-not-allowed' : 'bg-primary text-white cursor-pointer'}`}>
                    Next
                  </div>
                </div>
              </div>
          </div>
    </div>
  );
};

export default ProgramsPage;
