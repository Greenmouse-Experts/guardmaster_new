import { FC, useState } from "react";
import { FaStar } from "react-icons/fa6";
import Button from "../../../ui/Button";
import { submitReview } from "../../../../../services/api/programApi";
import { toast } from "react-toastify";

interface Props {
  id: string;
  close: () => void;
}
const AddReview: FC<Props> = ({ id, close }) => {
  const [isBusy, setIsBusy] = useState(false);
  const [data, setData] = useState({
    rating: 0,
    comment: "",
    item: id,
  });
  const stars = Array(5).fill("");
  const handleRating = (i: number) => {
    setData({
      ...data,
      rating: i,
    });
  };
  const handleSubmit = async () => {
    setIsBusy(true);
    await submitReview(data)
      .then((res) => {
        toast.success(res.message);
        setIsBusy(false);
        close();
      })
      .catch((err) => {
        console.log(err);
        setIsBusy(false);
      });
  };
  return (
    <div>
      <div>
        <p>Review</p>
        <textarea
          value={data.comment}
          onChange={(e) => setData({ ...data, comment: e.target.value })}
          className="w-full text-black h-24 border-2 border-gray-400 rounded-[5px] p-2"
        />
      </div>
      <div>
        <p>Rating</p>
        <div className="flex gap-x-6 pb-5 mt-3 w-full overflow-x-auto">
          {stars.map((item: any, i) => (
            <div className="hover:scale-105 duration-100" key={i}>
              <FaStar
                className={`text-5xl cursor-pointer ${
                  data.rating >= i + 1 ? "text-orange-300" : "text-gray-300"
                } ${item}`}
                onClick={() => handleRating(i + 1)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <Button
          title={isBusy ? "Submiting" : "Submit"}
          disabled={data.comment === ""}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default AddReview;
