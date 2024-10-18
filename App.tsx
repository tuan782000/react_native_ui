import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { 
  AnimatedPageHeaderScreen,
  CountryPickerWithFlags,
  CreditCardScreen, 
  DetailedCarRentalScreen, 
  FoodDeliveryDetailedScreen, 
  ListCryptoScreen, 
  ListPlaceScreen, 
  LoginScreen, 
  PlanPickerScreen, 
  RegisterScreen, 
  SettingScreen, 
  SettingScreenNew, 
  SettingScreenV3, 
  SignInPhoneNumberScreen, 
  SimpleActionSheetScreen, 
  SimpleCalendarDatePicker, 
  SimpleCardListScreen,
  SimpleTabsWithIconsScreen,
  SocialNetworkDetailedScreen
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
        {/* <SimpleCardListScreen /> */}
        {/* <AnimatedPageHeaderScreen /> */}
        {/* <SettingScreenV3 /> */}
        {/* <SimpleCalendarDatePicker /> */}
        {/* <SocialNetworkDetailedScreen /> */}
        {/* <FoodDeliveryDetailedScreen /> */}
        {/* <SimpleTabsWithIconsScreen /> */}
        {/* <DetailedCarRentalScreen /> */}
        <CountryPickerWithFlags />
      </GestureHandlerRootView>
    </>
  )
}

export default App

