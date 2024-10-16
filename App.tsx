import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { LoginScreen, RegisterScreen, SettingScreen } from './screens'

type Props = {}

const App = (props: Props) => {
  return (
    <>
      {/* <LoginScreen /> */}
      {/* <RegisterScreen /> */}
      <SettingScreen />
    </>
  )
}

export default App

