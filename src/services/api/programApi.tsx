import axios from "axios";
import { GET_ALL_COURSES, GET_ALL_PROGRAMS, GET_REVIEWS, GET_SINGLE_COURSE, POST_REVIEW } from "../constant";

export const getPrograms = async () => {
    return axios
      .get(`${GET_ALL_PROGRAMS}`)
      .then((response) => response.data);
  };

  export const getCourses = async () => {
    return axios
      .get(`${GET_ALL_COURSES}`)
      .then((response) => response.data);
  };

  export const getProgramCourses = async (payload:any) => {
    return axios
      .get(`${GET_ALL_COURSES}?[program][id]=${payload.id}`)
      .then((response) => response.data);
  };

  export const getSingleCourse = async (payload:string) => {
    return axios
      .get(`${GET_SINGLE_COURSE}/${payload}`)
      .then((response) => response.data);
  };

  export const getReviews = async (payload:string) => {
    return axios
      .get(`${GET_REVIEWS}/${payload}`)
      .then((response) => response.data);
  };
  export const submitReview = async (payload:any) => {
    return axios
      .post(`${POST_REVIEW}`, payload)
      .then((response) => response.data);
  };

