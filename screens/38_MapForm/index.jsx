import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    NativeModules
} from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import 'react-native-get-random-values';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
const { StatusBarManager } = NativeModules;
const GOOGLE_MAP_API_KEY = 'AIzaSyBqytS9JuIZ9I36FjfCDfA6R-ywmrQ0PAY';

const PlaceAutoComplete = () => {
    const [origin, setOrigin] = useState(null);
    const [dest, setDest] = useState(null);
    const mapRef = useRef();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                {/* <Text>Goole Maps place auto completes</Text> */}
                <MapView
                    style={{
                        height: '100%',
                        width: '100%',
                        position: 'absolute',
                        top: 0,
                        left: 0
                    }}
                    initialRegion={origin}
                    provider={PROVIDER_GOOGLE}
                    ref={mapRef}
                >
                    {/* Maker for origin */}
                    {/* <Marker /> */}
                    {/* Maker for destination */}
                </MapView>

                {/* Mapview direction */}

                {/* Asign origin and destination */}
                <View
                    style={{
                        position: 'absolute',
                        width: '90%',
                        backgroundColor: 'white',
                        shadowColor: 'black',
                        shadowOffset: { width: 2, height: 2 },
                        shadowOpacity: 0.5,
                        shadowRadius: 4,
                        elevation: 4,
                        padding: 8,
                        borderRadius: 8,
                        top: StatusBarManager.HEIGHT
                    }}
                >
                    <Text>Origin:</Text>
                    <GooglePlacesAutocomplete
                        placeholder='Search'
                        onPress={(data, details = null) => {
                            const position = {
                                latitude: details?.geometry.location || 0,
                                longitude: details?.geometry.location || 0,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421
                            };

                            setOrigin(position);
                        }}
                        query={{
                            key: GOOGLE_MAP_API_KEY,
                            language: 'en'
                        }}
                        fetchDetails
                        styles={{
                            textInput: { borderWidth: 1, borderColor: '#888' }
                        }}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default PlaceAutoComplete;

const styles = StyleSheet.create({});
