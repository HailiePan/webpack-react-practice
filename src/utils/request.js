/*
 * Author  hailie.pan
 * Date  2023-10-18 16:16:28
 * LastEditors  hailie.pan
 * LastEditTime  2023-10-18 17:34:22
 * Description  file content
 */
import { message } from "antd";
import axios from "axios";

const instance = axios.create({
  baseURL: "/api",
  timeout: 10 * 1000,
});

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    // console.log("发送请求之前config", config);
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    // console.log("object :>> 响应", response);
    if (response.data?.status !== "SUCCESS") {
      message.error(response.data?.message);
    }
    return response.data;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default instance;
