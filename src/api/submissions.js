import network from './network'

export default {
  fetchPage(page) {
    return network.get(`submissions/${page}`)
  }
}
