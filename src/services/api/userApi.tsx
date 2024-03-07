import axios from "axios";
import * as ENDPOINT from "../constant";

export const fetchOrder = async () => {
    return axios
      .get(`${ENDPOINT.USER_ORDERS}`)
      .then((response) => response.data);
  };