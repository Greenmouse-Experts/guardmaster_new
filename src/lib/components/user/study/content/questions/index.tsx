import { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/element/css/effect-fade";
import "swiper/css/bundle";
import { register } from "swiper/element/bundle";
import QuestionItem from "./questionItem";
import TimerFunc from "./timerFunc";
import { Navigation } from "swiper/modules";
// register Swiper custom elements
register();
interface Props {
  id: string;
}
export interface AttemptType {
    question: string;
    choice: number;
  }
const StartAssessment: FC<Props> = ({ id }) => {
  
  const [attempt, setAttemp] = useState<AttemptType[]>([]);
  console.log(id);
  
  const data = [
    {
      id: "fbf36d0e-1137-4a26-a5f2-7ec3afa118f2",
      question: "2 + 2 equals what?",
      options: ["10", "4", "5", "7"],
      correctOption: 1,
      point: 10,
      isPublished: false,
    },
    {
      id: "fbf36d0e-1137-4a26-a5f2-7ec3afa1182",
      question: "How many cages is there?",
      options: ["10", "4", "5", "7"],
      correctOption: 1,
      point: 10,
      isPublished: false,
    },
    {
      id: "fbf36d0e-1137-4a26-a5f2-7ec3afa11f2",
      question: "Do you run out of answers to give?",
      options: ["Yes", "No", "Maybe", "I'm not sure"],
      correctOption: 1,
      point: 10,
      isPublished: false,
    },
  ];
  console.log(attempt);
  
  const handleSubmoit = () => {};
  return (
    <div>
      <div>
        <TimerFunc duration={10} ontimeout={handleSubmoit} />
      </div>
      <div className="mt-6 p-6 border-2 shadow">
        <Swiper
          modules={[Navigation]}
          className="min-h-[400px]"
          navigation= {{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
        >
          {data.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <QuestionItem item={item} setAnswer={setAttemp} answers={attempt}/>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="flex justify-between items-center">
          <div className="!static px-8 py-2 border border-[#181f2cbe] shadow rounded-[4px] swiper-button-prev">
            <p className="text-[#181f2cbe] fw-600">Prev</p>
          </div>
          <div className="!static btn-primary px-8 py-2 swiper-button-next">
            <p>Next</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartAssessment;
