import axios from "axios";

export const uploadImage = async(payload:FormData) => {
    return  axios.post(`/upload/image`, payload).then((response) => response.data)
 } 

 export const submitTestimony = async(payload:any) => {
    return  axios.post(`/testimonials
    `, payload).then((response) => response.data)
 } 