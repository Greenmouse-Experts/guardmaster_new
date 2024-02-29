import axios from "axios";
import { START_PAYMENT } from "../constant";

export const goToPayment = async (payload:any) => {
    return axios
      .post(`${START_PAYMENT}`, payload)
      .then((response) => response.data);
  };

  