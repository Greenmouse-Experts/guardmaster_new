import axios from "axios";
import * as ENDPOINT from "../constant";

export const fetchOrder = async () => {
    return axios
      .get(`${ENDPOINT.USER_ORDERS}`)
      .then((response) => response.data);
  };

  export const fetchUserCourses = async () => {
    return axios
      .get(`${ENDPOINT.USER_COURSES}`)
      .then((response) => response.data);
  };

  export const fetchUserSingleCourse = async (param:string) => {
    return axios
      .get(`${ENDPOINT.USER_SINGLE_COURSE}/${param}`)
      .then((response) => response.data);
  };