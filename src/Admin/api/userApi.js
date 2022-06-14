import axiosAdmin from "./axiosAdmin";

const userApi = {
  login(data) {
    const url = "login";
    return axiosAdmin.post(url, data);
  },
  getAll(params) {
    // const url = params ? `user?filter?${params}` : "user";
    const url = "user";
    return axiosAdmin.get(url);
  },
};

export default userApi;
