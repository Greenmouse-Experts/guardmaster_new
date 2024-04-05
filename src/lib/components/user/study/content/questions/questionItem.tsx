import { FC, useState } from "react";
import { AttemptType } from ".";

interface Props {
  item: any;
  setAnswer: React.Dispatch<React.SetStateAction<AttemptType[]>>;
  answers: AttemptType[];
  index: number;
}
const QuestionItem: FC<Props> = ({ item, setAnswer, answers, index }) => {
  const [selected, setSeleted] = useState<number>();
  const handleAttempt = (ans: number) => {
    const submits = answers.filter((where) => where.question === item.id);
    if (submits.length) {
      const payload = {
        question: item.id,
        choice: ans,
      };
      const filter = answers.filter((where) => where.question !== item.id);
      setAnswer([...filter, payload]);
    } else {
      const payload = {
        question: item.id,
        choice: ans,
      };
      setAnswer([...answers, payload]);
    }
  };
  const handleSelected = (item: number) => {
    setSeleted(item);
    handleAttempt(item);
  };
  return (
    <div className="w-full">
      <div>
        <p className="">Question {index + 1}</p>
        <p className="mt-2 fw-500">{item.question}</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-6 mt-12">
        {item.options.map((option: string, i: number) => (
          <div
            className={`flex items-center rounded p-5 gap-x-3 ${selected === i + 1? "bg-primary text-white" : "bg-light"}`}
            key={i}
            onClick={() => handleSelected(i + 1)}
          >
            <input type="radio" onChange={() => handleSelected(i + 1)} name={item.question} checked={i + 1 === selected} className="w-5 h-5" />
            <label>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionItem;
