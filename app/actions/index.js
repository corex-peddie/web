
import {
  CHANGE_FORM,
  SET_AUTH,
  SENDING_REQUEST,
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  LOGOUT,
  REQUEST_ERROR,
  CLEAR_ERROR
} from './constants'

 * @param  {object} newFormState          The new state of the form
 * @param  {string} newFormState.username The new text of the username input field of the form
 * @param  {string} newFormState.password The new text of the password input field of the form
 
export function changeForm (newFormState) {
  return {type: CHANGE_FORM, newFormState}
}


 @param  {boolean} newAuthState 

export function setAuthState (newAuthState) {
  return {type: SET_AUTH, newAuthState}
}

@param  {boolean} sending 
export function sendingRequest (sending) {
  return {type: SENDING_REQUEST, sending}
}


@param  {object} data         
@param  {string} data.username 
@param  {string} data.password 

export function loginRequest (data) {
  return {type: LOGIN_REQUEST, data}
}

export function logout () {
  return {type: LOGOUT}
}


export function registerRequest (data) {
  return {type: REGISTER_REQUEST, data}
}

export function requestError (error) {
  return {type: REQUEST_ERROR, error}
}

export function clearError () {
  return {type: CLEAR_ERROR}
}
