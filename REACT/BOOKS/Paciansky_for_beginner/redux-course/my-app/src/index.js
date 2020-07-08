import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { store } from './store/configureStore' // исправлено
import App from './App'

// import registerServiceWorker from './registerServiceWorker'
import './index.css'

export const initialState = {
  user: 'unknown User',
}

export function rootReducer(state = initialState) {
  return state
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
// registerServiceWorker()
