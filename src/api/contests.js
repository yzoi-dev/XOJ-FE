import network from './network'

export default {
  fetchPage(page) {
    return network.get(`contests/${page}`)
  },
  fetchAll() {
    return network.get('contests')
  },
  fetch(id) {
    return network.get(`contests/show/${id}`)
  },
  fetchProblems(id) {
    return network.get(`contests/${id}/problems`)
  },
  fetchStatus(id) {
    return network.get(`contests/${id}/status`)
  },
  fetchRanking(id) {
    return network.get(`contests/${id}/ranking`)
  },
  fetchPageCount() {
    return network.get('contests/count')
  }
}
