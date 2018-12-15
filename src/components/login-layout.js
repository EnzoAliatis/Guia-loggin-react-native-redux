import React from 'React'
import {
  Text,
  TextInput,
  SafeAreaView,
  Button
} from 'react-native'

const LoginLayout = ({ getUserCedula, getUserPassword, onPress }) => (
  <SafeAreaView>
    <Text>Cedula</Text>
    <TextInput
      onChangeText={(text) => getUserCedula(text)}
    />
    <Text>Password</Text>
    <TextInput
      onChangeText={(text) => getUserPassword(text)}
    />
    <Button
      onPress={() => onPress()}
      title='Login'
      color='#3FE324'
    />
  </SafeAreaView>
)

export default LoginLayout
