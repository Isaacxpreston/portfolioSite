import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {dummy} from './dummy.js'
import {user} from './user.js'
import {visibility} from './visibility_reducer.js'
import {myProjects} from './myProjects.js'
import {displaySize} from './display_size_reducer.js'
import {iconsReducer} from './icons_reducer.js'


const appReducer = combineReducers({
  dummy,
  user,
  visibility,
  displaySize,
  myProjects,
  iconsReducer,
  routing: routerReducer
})

const reducer = (state, action) => {
  return appReducer(state, action)
}

export default reducer;