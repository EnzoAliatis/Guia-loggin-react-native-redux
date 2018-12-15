import React, { Component } from 'react'
import { connect } from 'react-redux'

import LoginLayout from '../components/login-layout'

class Login extends Component {
  state = {
    userCedula: '',
    userPassword: ''
  }

  getUserCedula = (cedula) => {
    this.setState({
      userCedula: cedula
    })
  }
  getUserPassword = (password) => {
    this.setState({ userPassword: password })
  }
  handlerSubmit = () => {
    // console.log(this.state.userCedula)
    // console.log(this.state.userPassword)
    console.log(this.props.infoUser)
  }
  render () {
    return (
      <LoginLayout
        getUserCedula={this.getUserCedula}
        getUserPassword={this.getUserPassword}
        onPress={this.handlerSubmit}
      />
    )
  }
}

const mapStateToProps = state => ({
  infoUser: state
})

export default connect(mapStateToProps)(Login)
