/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-05 18:05:11
 * @LastEditTime: 2019-09-09 14:37:55
 * @LastEditors: Please set LastEditors
 */
import axios from 'axios'
// import Vue from 'vue'
// import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    // if (store.getters.token) {
     // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
     // config.headers['X-Token'] = getToken()
    // }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    console.log(response);
    const res = response.data
    // alert(JSON.stringify(res))
    if (res.code === '200') {
      return res.entity
    }
    if (res.code === '300') {
      // 统一对 300 抛出的错误信息进行处理
      return Promise.reject(res.entity)
    }
    if (res.code === '444') {
      return Promise.reject(res.entity)
    }
    return Promise.reject(res)
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default service
