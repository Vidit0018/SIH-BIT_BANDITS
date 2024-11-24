const BASE_URL = import.meta.env.REACT_APP_BASE_URL

// AUTH ENDPOINTS
export const endpoints = {
  SIGNUP_API: BASE_URL + "/User/signup",
  LOGIN_API: BASE_URL + "/User/signin",
}