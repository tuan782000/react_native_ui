import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { CreditCardScreen, ListCryptoScreen, ListPlaceScreen, LoginScreen, RegisterScreen, SettingScreen } from './screens'

type Props = {}

const App = (props: Props) => {
  return (
    <>
      {/* <LoginScreen /> */}
      {/* <RegisterScreen /> */}
      {/* <SettingScreen /> */}
      {/* <ListCryptoScreen /> */}
      {/* <CreditCardScreen /> */}
      <ListPlaceScreen />
    </>
  )
}

export default App

