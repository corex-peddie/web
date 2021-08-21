import {hashSync} from 'bcryptjs'
import genSalt from '../auth/salt'
import {browserHistory} from 'react-router'
import {take, call, put, fork, race} from 'redux-saga/effects'
import auth from '../auth'

import {
  SENDING_REQUEST,
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  SET_AUTH,
  LOGOUT,
  CHANGE_FORM,
  REQUEST_ERROR
} from '../actions/constants'

/**
 * @param  {string} username              
 * @param  {string} password              
 * @param  {object} options                
 * @param  {boolean} options.isRegistering 
 */
export function * authorize ({username, password, isRegistering}) {
  yield put({type: SENDING_REQUEST, sending: true})

  try {
    const salt = genSalt(username)
    const hash = hashSync(password, salt)
    let response

    if (isRegistering) {
      response = yield call(auth.register, username, hash)
    } else {
      response = yield call(auth.login, username, hash)
    }

    return response
  } catch (error) {
    console.log('hi')
    yield put({type: REQUEST_ERROR, error: error.message})

    return false
  } finally {
    yield put({type: SENDING_REQUEST, sending: false})
  }
}


export function * logout () {
  yield put({type: SENDING_REQUEST, sending: true})


  try {
    const response = yield call(auth.logout)
    yield put({type: SENDING_REQUEST, sending: false})

    return response
  } catch (error) {
    yield put({type: REQUEST_ERROR, error: error.message})
  }
}

export function * loginFlow () {

  while (true) {
    const request = yield take(LOGIN_REQUEST)
    const {username, password} = request.data

    const winner = yield race({
      auth: call(authorize, {username, password, isRegistering: false}),
      logout: take(LOGOUT)
    })
    if (winner.auth) {
      yield put({type: SET_AUTH, newAuthState: true}) // User is logged in (authorized)
      yield put({type: CHANGE_FORM, newFormState: {username: '', password: ''}}) // Clear form
      forwardTo('/dashboard') // Go to dashboard page
    }
  }
}

export function * logoutFlow () {
  while (true) {
    yield take(LOGOUT)
    yield put({type: SET_AUTH, newAuthState: false})

    yield call(logout)
    forwardTo('/')
  }
}

export function * registerFlow () {
  while (true) {
    // We always listen to `REGISTER_REQUEST` actions
    const request = yield take(REGISTER_REQUEST)
    const {username, password} = request.data

    // We call the `authorize` task with the data, telling it that we are registering a user
    // This returns `true` if the registering was successful, `false` if not
    const wasSuccessful = yield call(authorize, {username, password, isRegistering: true})

    // If we could register a user, we send the appropiate actions
    if (wasSuccessful) {
      yield put({type: SET_AUTH, newAuthState: true}) // User is logged in (authorized) after being registered
      yield put({type: CHANGE_FORM, newFormState: {username: '', password: ''}}) // Clear form
      forwardTo('/dashboard') // Go to dashboard page
    }
  }
}

// The root saga is what we actually send to Redux's middleware. In here we fork
// each saga so that they are all "active" and listening.
// Sagas are fired once at the start of an app and can be thought of as processes running
// in the background, watching actions dispatched to the store.
export default function * root () {
  yield fork(loginFlow)
  yield fork(logoutFlow)
  yield fork(registerFlow)
}

// Little helper function to abstract going to different pages
function forwardTo (location) {
  browserHistory.push(location)
}
