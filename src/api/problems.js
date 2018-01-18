import network from './network'

export default {
  fetchPage(page) {
    return network.get(`problems/${page}`)
  },
  fetchAll() {
    return network.get('problems')
  },
  fetchPageCount() {
    return network.get(`problems/count`)
  },
  fetch(id) {
    return network.get(`problems/show/${id}`)
  }
}
