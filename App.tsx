import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { 
  AnimatedPageHeaderScreen,
  CountryPickerWithFlags,
  CreditCardScreen, 
  CustomComponent, 
  DetailedCarRentalScreen, 
  FoodDeliveryDetailedScreen, 
  ListCryptoScreen, 
  ListPlaceScreen, 
  LoginScreen, 
  PlanPickerScreen, 
  RegisterScreen, 
  ScrollItemWithFlatList, 
  SettingScreen, 
  SettingScreenNew, 
  SettingScreenV3, 
  SignInPhoneNumberScreen, 
  SimpleActionSheetScreen, 
  SimpleCalendarDatePicker, 
  SimpleCardListScreen,
  SimpleSearchScreen,
  SimpleTabsWithIconsScreen,
  SocialNetworkDetailedScreen
} from './screens'
import { GestureHandlerRootView } from 'react-native-gesture-handler';


type Props = {}

const App = (props: Props) => {
  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        {/* <CustomComponent /> */}
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
        {/* <CountryPickerWithFlags /> */}
        {/* <SimpleSearchScreen /> */}
        <ScrollItemWithFlatList />
      </GestureHandlerRootView>
    </>
  )
}

export default App

