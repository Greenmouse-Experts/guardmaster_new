import axios from "axios";
import * as ENDPOINT from "../constant";

export const getPublicPrograms = async (payload: number) => {
    return axios
      .get(`${ENDPOINT.GET_PUBLIC_PROGRAMS}?page=${payload}`)
      .then((response) => response.data);
  };