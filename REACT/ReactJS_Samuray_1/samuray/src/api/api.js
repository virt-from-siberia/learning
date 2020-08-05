import * as axios from "axios";

const API_KEY = {
  "API-KEY": "71e47ead-51d4-47a5-8d29-fe6db7855c1b",
};

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  headers: API_KEY,
});

export const AXIOS_API = {
  getUsers(currentPage, pageSize) {
    return axiosInstance
      .get(`/users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  follow(userId) {
    return axiosInstance.post(`/follow/${userId}`);
  },
  unfollow(userId) {
    return axiosInstance.delete(`/follow/${userId}`);
  },
  auth() {
    return axiosInstance.get(`/auth/me`).then((response) => response.data);
  },
  getProfile(userId) {
    return axiosInstance
      .get(`/profile/${userId}`)
      .then((response) => response.data);
  },
};
