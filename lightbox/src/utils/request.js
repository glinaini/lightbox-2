import { authorizationKey } from './storage'
import store from '../store/index'
import { getCookie } from './utils'
import axios from 'axios'
import { handleCommonError, handleNoCommontError } from './errorHandle'
import { baseUrl } from '../config/index'
let calls = []
axios.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    const { response } = error
    // 请求有响应
    if (response) {
      const { status, data } = response
      const message = data.message || '服务器繁忙，请稍后再试'
      if (status === 400) {
        handleCommonError(data)
        // TODO:当状态码为400时
        if (data && data.code >= 240015 && data.code <= 240021) {
          const { code, message } = data
          const err = { code, message }
          return Promise.reject(err)
        }
        return Promise.reject(message)
      }
      // 404 502 ..
      const msg = '服务器繁忙，请稍后再试'
      handleNoCommontError()
      return Promise.reject(msg)
      // throw message;
    }
    // 请求超时
    if (error.code === 'ECONNABORTED') {
      // 请求超时
      // TODO:请求超时时记录下当前路由页面，然后跳转到加载失败页面
      // 然后点击加载失败页面【重新加载】再跳转到之前的页面。
      const msg = '请求超时，请稍后再试'
      // Toast(msg);
      handleNoCommontError()
      return Promise.reject(msg)
      // return Promise.reject(msg);
    }
    const msg = '网络出现问题，请检查网络重试'
    return Promise.reject(msg)
  }
)
export default async function request(url, options) {
  const hasApi = url.indexOf('api') === -1 // true => no
  const call = axios.CancelToken.source()
  calls.push(call)
  const defaultOptions = {
    credentials: 'include',
    headers: {
      [authorizationKey]: store.state.authorization,
      mxsrf: getCookie('xxsrf')
    },
    timeout: 10000,
    withCredentials: true,
    cancelToken: call.token,
    validateStatus: function(status) {
      return status >= 200 && status < 300 // default
    }
  }
  const newOptions = { ...defaultOptions, ...options }
  newOptions.data = newOptions.body
  delete newOptions.body

  let newUrl = hasApi ? baseUrl + url : url
  const dd = newUrl.includes('?') ? '&' : '?'
  newUrl = `${newUrl}${dd}t=${Date.now()}`
  return axios(newUrl, newOptions)
}

export function getRequestCancelToken() {
  // 每次跳转路由时 需要清除calls的缓存
  let newCalls = []
  calls.forEach(call => {
    // 判断请求是否已经完成,未完成时call.token.reason为undefined
    if (!call.token.reason) {
      newCalls.push(call)
    }
  })
  calls = newCalls
  return newCalls
}
