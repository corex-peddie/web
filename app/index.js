import 'babel-polyfill'

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router';
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {Provider} from 'react-redux'
import {createLogger} from 'redux-logger'
import reducer from './reducers'
import rootSaga from './sagas'
import {clearError} from './actions'

import './styles/main.css'

import App from './components/App'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import NotFound from './components/NotFound'
import Analysis from './components/Analysis'

const logger = createLogger({

  predicate: (getState, action) => action.type !== 'CHANGE_FORM'
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware))
sagaMiddleware.run(rootSaga)

/**
* @param  {object}   nextState The state we want to change into when we change routes
* @param  {function} replace Function provided by React Router to replace the location
*/
function checkAuth (nextState, replace) {
  const {loggedIn} = store.getState()

  store.dispatch(clearError())

  if (nextState.location.pathname !== '/dashboard') {
    if (loggedIn) {
      if (nextState.location.state && nextState.location.pathname) {
        replace(nextState.location.pathname)
      } else {
        replace('/')
      }
    }
  } else {

    if (!loggedIn) {
      if (nextState.location.state && nextState.location.pathname) {
        replace(nextState.location.pathname)
      } else {
        replace('/')
      }
    }
  }
}

class LoginFlow extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route component={App}>
            <Route path='/' component={Home} />
            <Route onEnter={checkAuth}>
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/analysis' component={Analysis} />
            </Route>
            <Route path='*' component={NotFound} />
          </Route>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<LoginFlow />, document.getElementById('app'))
