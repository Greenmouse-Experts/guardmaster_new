export const BASE_URL = import.meta.env.VITE_BASE_URL
// export const BASE_UPLOAD = 'https://roadside-heroes-bea8766012cb.herokuapp.com'


// Auth endpoints
export const USERS_REGISTER = `/user/client/signup`
export const USERS_LOGIN = `/auth/signin`
export const FORGET_PASSWORD = `/auth/reset-password-request`
export const RESET_PASSWORD = `/auth/reset-password`
export const UPDATE_PROFILE = `/auth/update-profile`
export const UPDATE_PASSWORD = `/auth/update-password`

// programs endpoint
export const GET_ALL_PROGRAMS = `/programs`

// public programs
export const GET_PUBLIC_PROGRAMS = `/programs/public`
export const GET_SINGLE_COURSE = `/course-content/public`