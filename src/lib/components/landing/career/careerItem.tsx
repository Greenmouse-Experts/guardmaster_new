import { FC } from "react";
import { formatNumber } from "../../../utils";

interface Props {
  data: any;
  color: string;
}
const CareerItem: FC<Props> = ({ data, color }) => {
  return (
    <div className={`px-4 py-3 shadow border-l-[4px] ${color}`}>
      <div className="mb-2 flex items-center justify-between">
        <p className="text-lg fw-600">{data?.company}</p>
        <div className="mt-3">
        <button className="btn-feel px-5 py-2 rounded-lg"><a href={data?.url} target="_blank" rel="noopener noreferrer">Click to Apply</a></button>
      </div>
      </div>
      <div className="grid gap-3">
        <div className="flex gap-x-2">
          <p className="whitespace-nowrap text-gray-600 !syne">Job Title:</p>
          <p>{data?.title}</p>
        </div>
        <div className="flex gap-x-2">
          <p className="whitespace-nowrap text-gray-600 !syne">Job Desc:</p>
          <p>{data?.description}</p>
        </div>
        <div className="flex gap-x-2">
          <p className="whitespace-nowrap text-gray-600 !syne">Location:</p>
          <p>{data?.locations}</p>
        </div>
        <div className="flex gap-x-2">
          <p className="whitespace-nowrap text-gray-600 !syne">Salary:</p>
          <p>
            {data.salary_currency_code} {formatNumber(data?.salary_min)} - {(formatNumber)}
          </p>
        </div>
      </div>
    
    </div>
  );
};

export default CareerItem;
