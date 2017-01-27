import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {myProjects} from './myProjects.js'
import {iconsReducer} from './icons_reducer.js'
import {portfolioIconsReducer} from './portfolio_icons_reducer.js'
import {windowReducer} from './window_reducer.js'
import {topReducer} from './top_reducer.js'
import {menuReducer} from './menu_reducer.js'


const appReducer = combineReducers({
  myProjects,
  iconsReducer,
  portfolioIconsReducer,
  windowReducer,
  topReducer,
  menuReducer,
  routing: routerReducer
})

const reducer = (state, action) => {
  return appReducer(state, action)
}

export default reducer;