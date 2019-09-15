import { combineReducers } from 'redux'
import auth from './auth'
import provinces from './provinces'

const rootReducers = combineReducers({
    auth,
    provinces
})

export default rootReducers