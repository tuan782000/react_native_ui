import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
    Platform
} from 'react-native';
import React, { useRef, useState } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_API_KEY_IOS = 'AIzaSyC1-ZWrRP0lA3FP8V20S3lQ5vWG-vIKTQw';
const GOOGLE_MAPS_API_KEY_ANDROID = 'AIzaSyBqytS9JuIZ9I36FjfCDfA6R-ywmrQ0PAY';

const initialRegion = {
    latitude: 10.7571445, // vĩ độ
    longitude: 106.6880843, // kinh độ
    latitudeDelta: 0.0922, // giúp trấnh kéo giản theo chiều dọc
    longitudeDelta: 0.0421 // giúp tránh kéo giản theo chiều ngang
};
const MapMoveComponent = () => {
    const [origin, setOrigin] = useState({
        //10.763001574800159, 106.6933502306575
        latitude: 10.763001574800159,
        longitude: 106.6933502306575,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    }); // đại học văn lan - điểm đi

    const [destination, setDestination] = useState({
        // 10.783167163655603, 106.6947442275225
        latitude: 10.783167163655603,
        longitude: 106.6947442275225,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    }); // đại học kinh tế - điểm đến

    const mapRef = useRef();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <MapView
                    style={{ flex: 1 }}
                    initialRegion={initialRegion}
                    provider='google'
                    ref={mapRef}
                >
                    {/* Đai học văn lang */}
                    <Marker
                        coordinate={origin}
                        pinColor={'green'}
                        title='Đại học Văn Lang'
                        description='Đây là đại học văn lang'
                        anchor={{ x: 0.4, y: 0.5 }} // người dùng đứng so với vị trí đặt
                    />
                    {/* Đai học kinh tế */}
                    <Marker
                        coordinate={destination}
                        pinColor={'blue'}
                        title='Đại học Kinh tế'
                        description='Đây là đại học kinh tế'
                        anchor={{ x: 0.4, y: 0.5 }} // nơi người dùng đứng so với vị trí đặt
                    />

                    <MapViewDirections
                        origin={origin}
                        destination={destination}
                        apikey={
                            Platform.OS === 'android'
                                ? GOOGLE_MAPS_API_KEY_ANDROID
                                : GOOGLE_MAPS_API_KEY_IOS
                        }
                        strokeWidth={3}
                        strokeColor='red'
                        optimizeWaypoints={true}
                        onReady={result => {
                            mapRef.current?.fitToCoordinates(
                                result.coordinates,
                                {
                                    edgePadding: {
                                        right: 30,
                                        bottom: 300,
                                        left: 30,
                                        top: 100
                                    }
                                }
                            );
                        }}
                    />
                </MapView>
            </View>
        </SafeAreaView>
    );
};

export default MapMoveComponent;

const styles = StyleSheet.create({});
