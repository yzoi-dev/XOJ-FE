import network from './network'

export default {
  fetchPage(page) {
    return network.get(`contests/${page}`)
  },
  fetchAll() {
    return network.get('contests')
  },
  fetch(id) {
    return network.get(`contest/${id}`)
  },
  fetchProblems(id) {
    return network.get(`contest/${id}/problems`)
  },
  fetchStatus(id) {
    return network.get(`contest/${id}/status`)
  },
  fetchRanking(id) {
    return network.get(`contest/${id}/ranking`)
  }
}
