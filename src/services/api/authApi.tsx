import axios from "axios";
import { USERS_REGISTER } from "../constant.tsx";
import { BASE_URL } from "../constant.tsx";
import { USERS_LOGIN } from "../constant.tsx";
import { FORGET_PASSWORD } from "../constant.tsx";
import { RESET_PASSWORD } from "../constant.tsx";

// const Base = ENDPOINT.BASE_URL
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common["Authorization"] = `${localStorage.getItem(
  "guard_token"
)}`;

export const registerUser = async (payload:any) => {
  return axios
    .post(`${USERS_REGISTER}`, payload)
    .then((response) => response.data);
};

export const loginUser = async (payload:any) => {
  return axios
    .post(`${USERS_LOGIN}`, payload)
    .then((response) => response.data);
};

export const forgetPassword = async (payload:any) => {
  return axios
    .post(`${FORGET_PASSWORD}`, payload)
    .then((response) => response.data);
};

export const resetPassword = async (payload:any, token:any) => {
  return axios
    .post(`${RESET_PASSWORD}`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response.data);
};
