import axios from 'axios'
import API from '@/constants/api'
const BASEURL = API.BASEURL
const TIMEOUT = API.TIMEOUT
const service = axios.create({
  baseURL: BASEURL,
  timeout: TIMEOUT
})
export default service
