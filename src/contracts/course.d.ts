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
