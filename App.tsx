import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { 
  AnimatedPageHeaderScreen,
  AppStateScreen,
  CountryPickerWithFlags,
  CreditCardScreen, 
  CustomComponent, 
  DetailedCarRentalScreen, 
  EditFlatListScreen, 
  FoodDeliveryDetailedScreen, 
  ListCryptoScreen, 
  ListPlaceScreen, 
  LoginScreen, 
  MultipleSelectedFlatListScreen, 
  PlanPickerScreen, 
  PullToRefreshFlatListScreen, 
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
  SwipeSlide,
  SwitchScreen
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
        {/* <ScrollToItemSelectedScreen/> */}
        {/* <MultipleSelectedFlatListScreen /> */}
        {/* <MultipleSelectedFlatListScreen /> */}
        {/* <EditFlatListScreen /> */}
        {/* <SwitchScreen /> */}
        {/* <AppStateScreen /> */}
        <PullToRefreshFlatListScreen />
      </GestureHandlerRootView>
    </>
  )
}

export default App

