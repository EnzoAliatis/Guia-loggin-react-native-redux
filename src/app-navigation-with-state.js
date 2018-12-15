import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BackHandler } from 'react-native'
import { reduxifyNavigator } from 'react-navigation-redux-helpers'
import { NavigationActions } from 'react-navigation'

import AppNavigator from './app-navigator'

const ReduxifyApp = reduxifyNavigator(AppNavigator, 'root')

class AppNavigatorWithState extends ReduxifyApp {
  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  }
  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }
  onBackPress () {
    // cuando le piques al back de android
    this.props.dispatch(
      NavigationActions.back({
        key: null
      })
    )
    return true
  }
}

const mapStateToProps = state => ({
  state: state.navigation
})

export default connect(mapStateToProps)(AppNavigatorWithState)