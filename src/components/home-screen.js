import React from 'react'
import {
  Text,
  SafeAreaView,
  Button
} from 'react-native'

const HomeScreen = ({ onPress }) => (
  <SafeAreaView>
    <Text>Acceso a la Homew</Text>
    <Button
      onPress={onPress}
      title={'Logout'}
    />
  </SafeAreaView>
)

export default HomeScreen
