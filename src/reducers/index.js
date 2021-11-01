import { combineReducers } from 'redux'

import posts from './posts'
import title from './title'

export default combineReducers({
  posts, title,
})
