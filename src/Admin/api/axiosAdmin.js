import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_CRM,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  function (config) {
    const tokens = localStorage.getItem("e-learning-crm");
    if (tokens) {
      const { token } = JSON.parse(tokens);
      config.headers.Authorization = token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // if (error?.response?.status === 401) {
    //   localStorage.removeItem("e-learning-crm");
    //   window.location.replace("/admin");
    // }

    // console.log("error: ", error);

    return Promise.reject(error);
  }
);

export default axiosClient;
