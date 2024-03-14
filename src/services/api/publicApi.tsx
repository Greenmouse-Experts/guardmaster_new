import axios from "axios";
import * as ENDPOINT from "../constant";

export const getPublicPrograms = async (payload: number) => {
    return axios
      .get(`${ENDPOINT.GET_PUBLIC_PROGRAMS}?page=${payload}`)
      .then((response) => response.data);
  };

  export const getBlogTags = async () => {
    return axios
      .get(`${ENDPOINT.GET_BLOG_TAGS}`)
      .then((response) => response.data);
  };
  export const getBlogPost = async (payload: number, activeId: string) => {
    return axios
      .get(`${ENDPOINT.GET_BLOGS}?page=${payload}&[tags][slug]=${activeId}`)
      .then((response) => response.data);
  };

  export const getSingleBlogPost = async (id: string) => {
    return axios
      .get(`${ENDPOINT.GET_SINGLE_BLOG}/${id}`)
      .then((response) => response.data); 
  };
