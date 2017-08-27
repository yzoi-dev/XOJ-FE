import network from './network'

export default {
  login(credentials) {
    return network.post('auth', credentials)
  }
}
