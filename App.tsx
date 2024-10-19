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
  ScrollToItemSelectedScreen, 
  SettingScreen, 
  SettingScreenNew, 
  SettingScreenV3, 
  SignInPhoneNumberScreen, 
  SimpleActionSheetScreen, 
  SimpleCalendarDatePicker, 
  SimpleCardListScreen,
  SimpleSearchScreen,
  SimpleTabsWithIconsScreen,
  SocialNetworkDetailedScreen,
  SwipeSlide
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
        {/* <ScrollItemWithFlatList /> */}
        {/* <SwipeSlide /> */}
        <ScrollToItemSelectedScreen/>
      </GestureHandlerRootView>
    </>
  )
}

export default App

