import axios from "axios"

const http = axios.create({
    url: '/api',
    timeout: 1000 * 30,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
})

/**
 * 请求拦截
 */
http.interceptors.request.use(config => {
    if (localStorage.getItem('access_token')) {
        config.headers['token'] = localStorage.getItem('access_token')
    }
    return config
}, error => {
    return Promise.reject(error)
})
  
  /**
   * 响应拦截
   */
http.interceptors.response.use(response => {
    if (response.data && response.data.code === 401) { // 401, token失效
        // doSomeThing
    }
    return response
}, error => {
    return Promise.reject(error)
})
  
export default http