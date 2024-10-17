import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { 
  CreditCardScreen, 
  ListCryptoScreen, 
  ListPlaceScreen, 
  LoginScreen, 
  PlanPickerScreen, 
  RegisterScreen, 
  SettingScreen, 
  SettingScreenNew, 
  SignInPhoneNumberScreen, 
  SimpleActionSheetScreen, 
  SimpleCardListScreen
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
        {/* <SimpleActionSheetScreen /> */}
        {/* <SettingScreenNew /> */}
        {/* <PlanPickerScreen /> */}
        <SimpleCardListScreen />
      </GestureHandlerRootView>
    </>
  )
}

export default App

