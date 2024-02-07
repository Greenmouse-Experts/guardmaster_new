import axios from "axios";
import { GET_ALL_PROGRAMS } from "../constant";

export const getPrograms = async () => {
    return axios
      .get(`${GET_ALL_PROGRAMS}`)
      .then((response) => response.data);
  };