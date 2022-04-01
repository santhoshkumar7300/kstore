import axios from "axios";
import { getCookie, setCookie } from "Cookie/cookie";
import BaseURL from "../Utility/Utility";

const instance = axios.create({
  baseURL: BaseURL,
});

// instance.interceptors.request.use(
//   (request) => {
//     if (getCookie("token")) {
//       request.headers["Authorization"] = `Bearer ${getCookie("token")}`;
//     }
//     return request;
//   },
//   (error) => Promise.reject(error)
// );

// instance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error?.response?.status === 403) {
//       localStorage.setItem("userData", null);
//       setCookie("token", null, 0);
//       window.location.replace("/");
//     } else {
//       return Promise.reject(error);
//     }
//   }
// );
export default instance;
