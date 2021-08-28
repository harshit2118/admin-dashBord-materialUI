import axios from 'axios'
const baseURL = 'http://localhost:2310'
let get = (url) => axios.get(baseURL + url)
let post = (url, obj) => axios.post(baseURL + url, obj)
let put = (url, obj) => axios.put(baseURL + URLSearchParams, obj)
let deleteData = (url) => axios.delete(baseURL + url)
export default {
  get,
  post,
  put,
  deleteData,
}
