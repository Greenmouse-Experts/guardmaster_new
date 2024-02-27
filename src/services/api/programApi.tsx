import axios from "axios";
import { GET_ALL_PROGRAMS, GET_SINGLE_COURSE } from "../constant";

export const getPrograms = async () => {
    return axios
      .get(`${GET_ALL_PROGRAMS}`)
      .then((response) => response.data);
  };

  export const getSingleCourse = async (payload:string) => {
    return axios
      .get(`${GET_SINGLE_COURSE}/${payload}`)
      .then((response) => response.data);
  };