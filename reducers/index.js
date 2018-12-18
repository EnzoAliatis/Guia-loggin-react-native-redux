import { combineReducers } from 'redux'

import infoUser from './infoUser'
import navigation from './navigation'

const reducer = combineReducers({
  navigation,
  infoUser
})

export default reducer
