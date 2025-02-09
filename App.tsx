import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import {
    Animate,
    AnimatedPageHeaderScreen,
    AppStateScreen,
    Birthday_Input_Screen,
    CountryPickerWithFlags,
    CreditCardScreen,
    CustomComponent,
    DateTimePickerScreen,
    DetailedCarRentalScreen,
    DrawLayout,
    DropDownListScreen,
    EditFlatListScreen,
    FlatListInfiniteScrollSearch,
    FoodDeliveryDetailedScreen,
    ListCryptoScreen,
    ListPlaceScreen,
    Login,
    LoginScreen,
    MapComponent,
    MapMoveComponent,
    MultipleSelectedFlatListScreen,
    PlaceAutoComplete,
    PlanPickerScreen,
    PullToRefreshFlatListScreen,
    RegisterScreen,
    RootNavigation,
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
    Slider,
    SocialNetworkDetailedScreen,
    SwipeSlide,
    SwitchScreen
} from './screens';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

type Props = {};

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
                {/* <PullToRefreshFlatListScreen /> */}
                {/* <DropDownListScreen/> */}
                {/* <FlatListInfiniteScrollSearch /> */}
                {/* <DrawLayout /> */}
                {/* <RootNavigation /> */}
                {/* <Slider /> */}
                {/* <Login /> */}
                {/* <Animate /> */}
                {/* <MapComponent /> */}
                {/* <MapMoveComponent /> */}
                {/* <PlaceAutoComplete /> */}
                {/* <MapComponent /> */}
                {/* <DateTimePickerScreen /> */}
                <Birthday_Input_Screen />
            </GestureHandlerRootView>
        </>
    );
};

export default App;
