import { combineReducers } from 'redux'
import UserGlobalReducer from './global'

const rootReducer = () =>
  combineReducers({
    global: UserGlobalReducer
  })

export default rootReducer
