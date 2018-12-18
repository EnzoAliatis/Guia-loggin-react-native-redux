import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { createApolloFetch } from 'apollo-fetch'


import LoginLayout from '../components/login-layout'
import LoadingScreen from '../components/loading-screen'

import { fetchUser, fetchUserIfNeeded } from '../../actions/index'

const fetch = createApolloFetch({
  uri: 'http://localhost:3000/graphql'
})


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
  handlerSubmit = async () => {
    await this.props.fetchUserIfNeeded(this.state.userCedula, this.state.userPassword)
    console.log(this.props.data)
    // Aqui hacer la verificacion de si los datos o credenciales son aceptados
    if (Object.keys(this.props.data).length !== 0) {
      this.props.navigation.navigate('Home')
    } else {
      this.props.navigation.navigate('Login')
    }
  }

  componentDidMount = () => {
    console.log(this.props.data)
    if (Object.keys(this.props.data).length !== 0) {
      this.props.navigation.navigate('Home')
    } else {
      this.props.navigation.navigate('Login')
    }
  }

  render() {
    const isFetching = this.props.isFetching
    return (
      <View>
        {
          isFetching ? (<LoadingScreen/>) : 
          (<LoginLayout
            getUserCedula={this.getUserCedula}
            getUserPassword={this.getUserPassword}
            onPress={this.handlerSubmit}
          />)
        }
      </View>
    )
  }
}

const mapStateToProps = state => ({
  data: state.infoUser.data,
  isFetching: state.infoUser.isFetching,
  didInvalid: state.infoUser.didInvalid
})

const mapDispatchToProps = dispatch => ({
  fetchUserIfNeeded: (cedula, password) => dispatch(fetchUserIfNeeded(cedula, password))
})


export default connect(mapStateToProps, mapDispatchToProps)(Login)
