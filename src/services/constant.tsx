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
export const GET_ALL_PROGRAMS = `/programs/fetch-programs`
export const GET_ALL_COURSES = `/courses/fetch-courses`

// public programs
export const GET_PUBLIC_PROGRAMS = `/programs/public`
export const GET_SINGLE_COURSE = `/course-content/public`

// program course payment
export const START_PAYMENT = `/orders/create`

// users
export const USER_ORDERS = `/orders/fetch-student-trx`
export const USER_COURSES = `/orders/purchased-courses`
export const USER_SINGLE_COURSE = `/orders/fetch-course`

// reviews
export const GET_REVIEWS = `/reviews/fetch-course-reviews`
export const POST_REVIEW = `/reviews/create-course-review`

// blog
export const GET_BLOG_TAGS = `/blog/view-tags`
export const GET_BLOGS = `/blog/view-posts`
export const GET_SINGLE_BLOG = `/blog/view-post`