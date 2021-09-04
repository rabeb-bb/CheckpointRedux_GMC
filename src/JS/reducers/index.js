import { combineReducers } from "redux";
import countReducer from './count'
import taskReducer from './task'

const rootReducer= combineReducers({countReducer, taskReducer})
export default rootReducer;