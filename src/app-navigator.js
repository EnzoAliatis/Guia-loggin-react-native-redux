import React from 'react'
import { createStackNavigator } from 'react-navigation'

import LoginContainer from './containers/login'

const MainStack = createStackNavigator({
  Login: {
    screen: LoginContainer
  }
}, {
  initialRouteName: 'Login'
})

export default MainStack
