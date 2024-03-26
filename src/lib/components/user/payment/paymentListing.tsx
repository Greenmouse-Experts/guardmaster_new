import { FC, useState } from "react";
import { OrderItem, TransactObject } from "../../../../contracts/order";
import { createColumnHelper } from "@tanstack/react-table";
import dayjs from "dayjs";
import { FormatStatus } from "../../../utils";
import { DynamicTable } from "../../ui/DynamicTable";
import useDialog from "../../../../hooks/useDialog";
import PaidCourses from "./paidCourses";

interface Props {
  data: TransactObject[];
  next: () => void;
  prev: () => void;
  count: number;
  page: number;
}
const PaymentListing: FC<Props> = ({ data, page, prev, next, count }) => {
    const {Dialog, setShowModal} = useDialog()
    const [selected, setSelected] = useState<OrderItem[]>()
    const openCourses = (item:OrderItem[]) => {
        setSelected(item);
        setShowModal(true)
    }
  const columnHelper = createColumnHelper<TransactObject>();
  const columns = [
    columnHelper.accessor((row) => row.trx.reference, {
      id: "Reference",
      cell: (info) => (
        <p className="fw-500">{info.getValue()}</p>
      ),
      header: (info) => info.column.id,
    }),
    columnHelper.accessor((row) => row.trx.gateway, {
      id: "Payment Gateway",
      cell: (info) => (
        <p className="capitalize whitespace-normal">{info.getValue()}</p>
      ),
      header: (info) => info.column.id,
    }),
    columnHelper.accessor((row) => row.trx.amount, {
      id: "Amount Paid",
      cell: (info) => <>{`$${info.getValue()}.00`}</>,
      header: (info) => info.column.id,
    }),
    columnHelper.accessor((row) => row.createdDate, {
      id: "Payment Date",
      cell: (info) => <>{dayjs(info.getValue()).format("DD  MMMM YYYY")}</>,
      header: (info) => info.column.id,
    }),
    columnHelper.accessor((row) => row.orderItems, {
      id: "No of Item(s)",
      cell: (info) => (
        <p className="flex gap-x-2">
          {info.getValue()?.length} item(s){" "}
          <span className="underline fw-500 cursor-pointer" onClick={() => openCourses(info.row.original.orderItems)}>View</span>
        </p>
      ),
      header: (info) => info.column.id,
    }),
    columnHelper.accessor((row) => row.status, {
      id: "Status",
      cell: (info) => (
        <>{FormatStatus[info.getValue() as keyof typeof FormatStatus]}</>
      ),
      header: (info) => info.column.id,
    }),
  ];
  return (
    <div>
      <div>
        <DynamicTable
          columns={columns}
          data={data}
          next={next}
          prev={prev}
          page={page}
          count={count}
        />
      </div>
      <Dialog title="Purchased Courses" size="lg">
        <PaidCourses data={selected}/>
      </Dialog>
    </div>
  );
};

export default PaymentListing;
