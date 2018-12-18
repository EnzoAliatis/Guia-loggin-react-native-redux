import React from 'react'
import { createSwitchNavigator } from 'react-navigation'

import LoginContainer from './containers/login'
import HomeContainer from './containers/home-container'

const switchNavigator = createSwitchNavigator({
  Login: {
    screen: LoginContainer
  },
  Home: {
    screen: HomeContainer
  }
})

export default switchNavigator
