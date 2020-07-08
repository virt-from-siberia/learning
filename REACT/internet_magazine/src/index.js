import './main.css'

import {createStore} from 'redux'
import {createBrowserHistory} from 'history'

const history = createBrowserHistory()
const store = createStore(createRootReducer(history))

document.write('Hello React/Redux!')
