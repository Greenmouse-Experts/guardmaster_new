import { FC, useState } from "react";
import { QuestionAnswerAttemptType } from "../../../../../../../contracts/assessment";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/element/css/effect-fade";
import "swiper/css/bundle";
import { register } from "swiper/element/bundle";
import { Navigation } from "swiper/modules";

register();

interface Props {
  data: QuestionAnswerAttemptType[];
}
const RightAnswers: FC<Props> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  console.log(data);
  
  return (
    <div>
      <div className="p-3  border-1 shadow text-black">
        <Swiper
          modules={[Navigation]}
          className="min-h-[250px] text-black"
          slidesPerView={1}
          navigation={{ prevEl, nextEl }}
          onSlideChange={(state) => setCurrentIndex(state.activeIndex)}
        >
          {data?.map((item: QuestionAnswerAttemptType, i: number) => {
            return (
              <SwiperSlide key={item.id}>
                <div className="grid gap-3">
                  <div className="bg-primary text-white p-3 rounded">
                    <p>Question {i + 1}: ({item.assessmentQuestion.point} Points)</p>
                    <p className="mt-1">{item.assessmentQuestion.question}</p>
                  </div>
                  <div className={item.choice === item.assessmentQuestion.correctOption? "bg-green-300 p-3 rounded" : "bg-red-300 p-3 rounded"}>
                    <p className="text-gray-800">Selected Answer:</p>
                    <p className="fw-500">{item.assessmentQuestion.options[item.choice]}</p>
                  </div>
                  <div className="bg-green-300 p-3 rounded">
                    <p className="text-gray-800">Correct Answer:</p>
                    <p className="fw-500">
                      {
                        item.assessmentQuestion.options[
                          item.assessmentQuestion.correctOption
                        ]
                      }
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="flex justify-between items-center mt-2">
          <div>
            <div
              ref={(node) => setPrevEl(node)}
              className={
                currentIndex === 0
                  ? "hidden"
                  : "!static !px-8 !py-1 !border cursor-pointer !border-[#181f2cbe] !shadow !rounded-[4px] "
              }
            >
              <p className="text-[#181f2cbe] fw-600">Prev</p>
            </div>
          </div>
          <div>
            <div
              ref={(node) => setNextEl(node)}
              className={
                currentIndex === data?.length - 1
                  ? "hidden"
                  : "!static !btn-primary cursor-pointer !h-auto !px-8 !py-2 "
              }
            >
              <p className="">Next</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightAnswers;
