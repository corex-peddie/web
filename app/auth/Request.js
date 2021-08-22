/*
Whaat! A Fake Request?? Nope, that just means that we aren't storing it in a database!! As this is all decentralized, nothing will actually be stored, but just remembered (if that makes sense) - Rajan
*/

import server from './Server'

server.init()

const fakeRequest = {

  @param  {string}  endpoint
  @param  {?object} data 

  post (endpoint, data) {
    switch (endpoint) {
      case '/login':
        return server.login(data.username, data.password)
      case '/register':
        return server.register(data.username, data.password)
      case '/logout':
        return server.logout()
      default:
        break
    }
  }
}

export default fakeRequest
