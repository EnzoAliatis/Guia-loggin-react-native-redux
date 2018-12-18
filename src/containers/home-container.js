import React, { Component } from 'react'
import { connect } from 'react-redux'

import HomeScreen from '../components/home-screen'
import { logOut } from '../../actions/index'


class HomeContainer extends Component {

  handleClick = async () => {
    await this.props.salir()
    this.props.navigation.navigate('Login')
  }
  render() {
    return (
      <HomeScreen
        onPress={this.handleClick}
      />
    )
  }
}


const mapDispatchToProps = dispatch => ({
  salir: () => dispatch(logOut())
})

export default connect(null, mapDispatchToProps)(HomeContainer)
