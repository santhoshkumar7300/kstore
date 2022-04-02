import axios from "./Axios";
export const personalDetailsService = (data) => {
  return axios.post("kansas/franchise_enquiry/personal_details", data);
};
