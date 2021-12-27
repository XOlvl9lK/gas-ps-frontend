import { combineReducers } from 'redux'
import { sideBarReducer } from '../components/sideBar/store/slice'
import { articlesReducer } from '../components/article/store/slice'

export const rootReducer = combineReducers({
  sideBarReducer,
  articlesReducer
})