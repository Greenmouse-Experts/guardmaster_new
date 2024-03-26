import { CourseItemType } from "./course";

export interface TransactItem {
  amount: number;
  createdDate: string;
  gateway: string;
  id: string;
  narration: string;
  purpose: string;
  reference: string;
  status: string;
  subAmount: number;
  thirdPartyRef: string;
}

export interface OrderItem {
  course: CourseItemType;
  id: stirng;
  price: number;
}

export interface TransactObject {
  createdDate: string;
  id: string;
  number: string;
  orderItems: OrderItem[];
  status: string;
  trx: TransactItem;
}
