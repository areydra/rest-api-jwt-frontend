import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
// berfungsi agar saat di logger ada promise atau feedback seperti PENDING, REJECTED, FULFILLED
// maka di file REDUCER berikan tambahan PENDING, REJECTED, FULFILLED
import promiseMiddleware from 'redux-promise-middleware' 

import rootReducers from './Reducers/rootReducers'

const logger = createLogger()
const store = createStore(rootReducers, applyMiddleware(logger, promiseMiddleware))

export default store