import { apiUrl } from '../config'
import axios from 'axios'

function genUrl(uri) {
  return `${apiUrl}/${uri}`
}

export default {
  get(uri) {
    return axios.get(genUrl(uri))
  },
  post(uri, data) {
    return axios.post(genUrl(uri), data)
  }
}
