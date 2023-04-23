import axios from "axios";
const instance = axios.create({
  baseURL: `${process.env.REACT_APP_ROOT_URL}`,
});

export const getMethod = (requestURL) => instance(requestURL);
