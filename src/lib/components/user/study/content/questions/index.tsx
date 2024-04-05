import { FC,  useEffect,  useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/element/css/effect-fade";
import "swiper/css/bundle";
import { register } from "swiper/element/bundle";
import QuestionItem from "./questionItem";
import TimerFunc from "./timerFunc";
import { Navigation } from "swiper/modules";
import { QuestionItemType } from "../../../../../../contracts/assessment";
import { useQuery } from "@tanstack/react-query";
import { getQuestions, submitQuestions } from "../../../../../../services/api/programApi";
import HourGlassLoading from "../../../../ui/loading/hourloading";
import { useParams } from "react-router-dom";
import useDialog from "../../../../../../hooks/useDialog";
import SubmissionAlert from "./submissionAlert";
import { toast } from "react-toastify";
// register Swiper custom elements
register();
interface Props {
  id: string;
  duration: number;
  close: () => void
}
export interface AttemptType {
  question: string;
  choice: number;
}
const StartAssessment: FC<Props> = ({ id, duration, close }) => {
  const { id: courseId } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["quiz-questions", id],
    queryFn: () => getQuestions(id, `${courseId}`),
    retry: 0,
  });
  const [attempt, setAttemp] = useState<AttemptType[]>([]);
  const [submitted, setSubmitted] = useState(false)

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  useEffect(() => {
      setTimeout(() => {
        handleSubmit()
      }, duration * 60 * 300)
  }, [])
  // submission modal
  const {Dialog, setShowModal} = useDialog()
  // submission
  const [isBusy, setIsBusy] = useState(false)
  const handleSubmit = async () => {
    setIsBusy(true)
    setSubmitted(true)
    const payload = {
      attempt: attempt,
      courseContentSub: id
    }
   if(submitted){
    toast.info('Quiz already submitted')
   }else {
    await submitQuestions(payload, `${courseId}`)
    .then(() => {
      setIsBusy(false)
      setShowModal(true)
      close()
    })
    .catch((err) => {
      setIsBusy(false)
      console.log(err);
    })
   }
  };
  return (
    <div>
      {isLoading && (
        <div className="place-center py-16">
          <HourGlassLoading size={1.3} />
        </div>
      )}
      {!isLoading && data && (
        <div>
          <div>
            <TimerFunc duration={0.4} ontimeout={() => handleSubmit()} attempt={attempt}/>
            <p className="fw-600">{data?.count} Questions</p>
          </div>
          <div className="mt-6 p-6 border-2 shadow">
            <Swiper
              modules={[Navigation]}
              className="min-h-[400px]"
              slidesPerView={1}
              navigation={{ prevEl, nextEl }}
              onSlideChange={(state) => setCurrentIndex(state.activeIndex)}
            >
              {data?.data?.map((item: QuestionItemType, i: number) => {
                return (
                  <SwiperSlide key={item.id}>
                    <QuestionItem
                      item={item}
                      setAnswer={setAttemp}
                      answers={attempt}
                      index={i}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="flex justify-between items-center">
              <div>
                <div
                  ref={(node) => setPrevEl(node)}
                  className={
                    currentIndex === 0
                      ? "hidden"
                      : "!static !px-8 !py-2 !border !border-[#181f2cbe] !shadow !rounded-[4px] "
                  }
                >
                  <p className="text-[#181f2cbe] fw-600">Prev</p>
                </div>
              </div>
              <div>
                <div
                  ref={(node) => setNextEl(node)}
                  className={
                    currentIndex === data?.count - 1
                      ? "hidden"
                      : "!static !btn-primary !h-auto !px-8 !py-3 "
                  }
                >
                  <p className="">Next</p>
                </div>
                <div
                  className={
                    currentIndex === data?.count - 1
                      ? " !static !btn-primary !h-auto !px-8 !py-3"
                      : " hidden"
                  }
                  onClick={() => handleSubmit()}
                >
                  <p className="">{isBusy? "Submitting" : "Submit"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Dialog title="" size="lg">
          <SubmissionAlert id={id} courseId={`${courseId}`}/>
      </Dialog>
    </div>
  );
};

export default StartAssessment;
