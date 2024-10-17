import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { 
  CreditCardScreen, 
  ListCryptoScreen, 
  ListPlaceScreen, 
  LoginScreen, 
  RegisterScreen, 
  SettingScreen, 
  SignInPhoneNumberScreen, 
  SimpleActionSheetScreen 
} from './screens'
import { GestureHandlerRootView } from 'react-native-gesture-handler';


type Props = {}

const App = (props: Props) => {
  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        {/* <LoginScreen /> */}
        {/* <RegisterScreen /> */}
        {/* <SettingScreen /> */}
        {/* <ListCryptoScreen /> */}
        {/* <CreditCardScreen /> */}
        {/* <ListPlaceScreen /> */}
        {/* <SignInPhoneNumberScreen /> */}
        <SimpleActionSheetScreen />
      </GestureHandlerRootView>
    </>
  )
}

export default App

