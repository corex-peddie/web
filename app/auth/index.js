import request from './Request'

let localStorage

if (global.process && process.env.NODE_ENV === 'test') {
  localStorage = require('localStorage')
} else {
  localStorage = global.window.localStorage
}

const auth = {
  /**
  * @param  {string} username The username of the user
  * @param  {string} password The password of the user
  */
  login (username, password) {
    if (auth.loggedIn()) return Promise.resolve(true)

    // Post a fake request
    return request.post('/login', {username, password})
      .then(response => {
        // Save token to local storage
        localStorage.token = response.token
        return Promise.resolve(true)
      })
  },
  logout () {
    return request.post('/logout')
  },

  loggedIn () {
    return !!localStorage.token
  },
  /**
  * @param  {string} username The username of the user
  * @param  {string} password The password of the user
  */
  register (username, password) {

    return request.post('/register', {username, password})

      .then(() => auth.login(username, password))
  },
  onChange () {}
}

export default auth
