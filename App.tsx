import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { CreditCardScreen, ListCryptoScreen, LoginScreen, RegisterScreen, SettingScreen } from './screens'

type Props = {}

const App = (props: Props) => {
  return (
    <>
      {/* <LoginScreen /> */}
      {/* <RegisterScreen /> */}
      {/* <SettingScreen /> */}
      {/* <ListCryptoScreen /> */}
      <CreditCardScreen />
    </>
  )
}

export default App

