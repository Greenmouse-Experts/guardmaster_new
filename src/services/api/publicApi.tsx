import axios from "axios";
import * as ENDPOINT from "../constant";

export const getPublicPrograms = async () => {
    return axios
      .get(`${ENDPOINT.GET_PUBLIC_PROGRAMS}`)
      .then((response) => response.data);
  };