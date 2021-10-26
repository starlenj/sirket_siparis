import axios from "axios";

import Vue from "vue";

export const http = axios.create({
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "X-Application-Name": "vue",
    "Accept-Type": "application/json",
    Authorization: "Bearer" + localStorage.getItem("TOKEN") + " ",
  },
  baseURL: "http://localhost:4000/api/v1/",
});

http.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);
