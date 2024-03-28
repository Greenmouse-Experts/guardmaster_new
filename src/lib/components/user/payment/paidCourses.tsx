import { FC } from "react";
import { OrderItem } from "../../../../contracts/order";

interface Props {
  data: OrderItem[] | undefined;
}
const PaidCourses: FC<Props> = ({ data }) => {
  return (
    <div>
      {data?.map((item: OrderItem) => (
        <div className="flex gap-x-2 pb-2 border-b mb-2" key={item.id}>
          <div className="w-20 h-20 shrink-0">
            <img
              src={item.course.coverImage}
              alt="course"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="fw-500">{item.course.title}</p>
            <p className="fw-600 text-lg">{`$${item.course.price}.00`}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PaidCourses;
