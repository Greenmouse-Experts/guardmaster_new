import axios from "axios";
import * as ENDPOINT from "../constant";
import { GET_ALL_COURSES, GET_ALL_PROGRAMS, GET_REVIEWS, POST_REVIEW } from "../constant";

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
      .get(`${ENDPOINT.GET_SINGLE_COURSE}/${payload}`)
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

  export const getQuestions = async (payload:string, id:string) => {
    return axios
      .get(`${ENDPOINT.FETCH_QUESTIONS}/${payload}`, {
        headers: {
          'Course-Request-Id': `${id}`
        }
      })
      .then((response) => response.data);
  };
  export const submitQuestions = async (payload:any, id:string) => {
    return axios
      .post(`${ENDPOINT.SUBMIT_ACCESSMENT}`, payload,  {
        headers: {
          'Course-Request-Id': `${id}`
        }
      })
      .then((response) => response.data);
  };

  export const getScore = async (payload:string, id:string) => {
    return axios
      .get(`${ENDPOINT.FETCH_MY_SCORE}/${payload}`, {
        headers: {
          'Course-Request-Id': `${id}`
        }
      })
      .then((response) => response.data);
  };

  export const markSubRead = async (payload:any, id:string) => {
    return axios
      .post(`${ENDPOINT.READ_SUB_CONTENT}`, payload,  {
        headers: {
          'Course-Request-Id': `${id}`
        }
      })
      .then((response) => response.data);
  };



