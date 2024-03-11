import { InstructorTypeItem } from "./auth";

export interface ProgramItemType {
  id: string;
  title: string;
  isPublished: boolean;
  createdDate: string;
}
export interface CourseContentSubs {
  title: string;
  duration: number;
  previewUrl: string;
  mediaType: string;
  media?: string
}
export interface CourseContentData {
  title: string;
  courseContentSubs: CourseContentSubs[];
}
export interface CourseItemType {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  price: number;
  discount: number;
  coverImage: string;
  instructor: InstructorTypeItem;
  program: ProgramItemType;
  originalPriceFormat: string;
  discountPriceFormat: string | null;
  discountedPrice: string | null;
  discountFormat: string | null;
}
export interface CourseContentType {
  data: CourseContentData[];
  total: number;
  totalDuration: number;
}

export interface CourseListItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  price: number;
  discount: number;
  isPublished: boolean;
  coverImage: string;
  createdDate: string;
  updatedDate: string;
  program: {
    id: string;
    title: string;
  };
}

export interface PurchaseItemType {
  course: {
    coverImage: string;
    createdDate: string;
    discount: number;
    fullDesc: string;
    id: string;
    isPublished: boolean;
    price: number;
    shortDesc: string;
    title: string;
    updatedDate: string;
  };
  coverImage: string;
  createdDate: string;
  discount: number;
  fullDesc: string;
  id: string;
  isPublished: boolean;
  price: number;
  shortDesc: string;
  title: string;
  updatedDate: string;
  id: string;
  order: {
    createdDate: string;
    id: string;
    number: string;
    status: string;
  };
  price: number;
}
