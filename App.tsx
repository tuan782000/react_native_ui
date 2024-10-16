import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { CreditCardScreen, ListCryptoScreen, ListPlaceScreen, LoginScreen, RegisterScreen, SettingScreen, SignInPhoneNumberScreen } from './screens'

type Props = {}

const App = (props: Props) => {
  return (
    <>
      {/* <LoginScreen /> */}
      {/* <RegisterScreen /> */}
      {/* <SettingScreen /> */}
      {/* <ListCryptoScreen /> */}
      {/* <CreditCardScreen /> */}
      {/* <ListPlaceScreen /> */}
      <SignInPhoneNumberScreen />
    </>
  )
}

export default App

