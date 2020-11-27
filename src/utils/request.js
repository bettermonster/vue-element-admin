import axios from 'axios';
// import { MessageBox, Message } from 'element-ui';

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 添加请求拦截器
service.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // console.log('发送了请求参数:', config);
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  const res = response.data
  // 对响应数据做点什么
  // console.log("请求成功数据为:", res)
  return res;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default service;
