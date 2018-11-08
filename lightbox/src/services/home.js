import request from '../utils/request'
import { stringify } from 'qs'
export function list(params) {
  return request(`/list?${stringify(params)}`)
}
export function add(params) {
  return request(`/list`, {
    body: params
  })
}
