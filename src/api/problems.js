import network from './network'

export default {
  fetchPage(page) {
    return network.get(`problems/${page}`)
  },
  fetchAll() {
    return network.get('problems')
  },
  fetch(id) {
    return network.get(`problem/${id}`)
  }
}
