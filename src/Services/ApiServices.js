import axios from "./Axios";
export const personalDetailsService = (data) => {
  return axios.post("kansas/franchise_enquiry/personal_details", data);
};

export const stateService = (data) => {
  return axios.post("kansas/franchise_enquiry/state_lists", data);
};

export const cityService = (data) => {
  return axios.post("kansas/franchise_enquiry/cities_lists", data);
};
