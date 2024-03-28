import axios from "axios";
import * as ENDPOINT from "../constant";

export const fetchOrder = async (page:number) => {
    return axios
      .get(`${ENDPOINT.USER_ORDERS}?page=${page}`)
      .then((response) => response.data);
  };

  export const fetchUserCourses = async (page:number) => {
    return axios
      .get(`${ENDPOINT.USER_COURSES}?page=${page}`)
      .then((response) => response.data);
  };

  export const fetchUserSingleCourse = async (param:string) => {
    return axios
      .get(`${ENDPOINT.USER_SINGLE_COURSE}/${param}`)
      .then((response) => response.data);
  };

  export const fetchUserNotify = async (page:number) => {
    return axios
      .get(`${ENDPOINT.GET_MY_NOTIFY}?page=${page}`)
      .then((response) => response.data);
  };

  export const markUserNotify = async (id:string) => {
    return axios
      .patch(`${ENDPOINT.MARK_NOTIFY}/${id}`)
      .then((response) => response.data);
  };