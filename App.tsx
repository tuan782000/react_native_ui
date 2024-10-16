import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { ListCryptoScreen, LoginScreen, RegisterScreen, SettingScreen } from './screens'

type Props = {}

const App = (props: Props) => {
  return (
    <>
      {/* <LoginScreen /> */}
      {/* <RegisterScreen /> */}
      {/* <SettingScreen /> */}
      <ListCryptoScreen />
    </>
  )
}

export default App

