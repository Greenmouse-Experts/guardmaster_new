import axios from "axios";

export const uploadImage = async (payload: FormData) => {
  return axios.post(`/upload/image`, payload).then((response) => response.data);
};

export const submitTestimony = async (payload: any) => {
  return axios
    .post(
      `/testimonials
    `,
      payload
    )
    .then((response) => response.data);
};

export const getTestimony = async () => {
  return axios.get(`/testimonials/published`).then((response) => response.data);
};
