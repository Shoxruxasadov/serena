import axios from "axios";
import i18n from "i18next";
import Cookies from "js-cookie";

const getCookie = (name) => {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? match[2] : null;
};

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER,
  // headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  const token = getCookie("token");
  if (config.headers) {
    if (token) config.headers.Authorization = `Bearer ${token}`
    config.headers["Accept-Language"] = i18n.language || "ru";
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export default api;