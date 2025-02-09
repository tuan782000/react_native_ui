import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    SafeAreaView
} from 'react-native';
import React, { useState } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const MapComponent = () => {
    const [region, setRegion] = useState({
        latitude: 10.7571445, // vĩ độ
        longitude: 106.6880843, // kinh độ
        latitudeDelta: 0.0922, // giúp trấnh kéo giản theo chiều dọc
        longitudeDelta: 0.0421 // giúp tránh kéo giản theo chiều ngang
    });
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                {/* <MapView style={{ flex: 1 }} provider={PROVIDER_GOOGLE} /> */}
                <MapView
                    style={{ flex: 1 }}
                    provider={PROVIDER_GOOGLE}
                    // initialRegion={region}
                    region={region} // lấy region khai báo gán region hiện tại
                    onRegionChange={region => {
                        // khi di chuyển bản đồ truyền vào 1 callback - callback nhận vào region - bắt sự thay đổi
                        console.log(region); //
                    }}
                >
                    {/* Show ra điểm hiện tại */}
                    {/* <Marker
                        coordinate={{
                            latitude: 10.769082,
                            longitude: 106.600119
                            //latitudeDelta: 0.0922, // giúp trấnh kéo giản theo chiều dọc
                            //longitudeDelta: 0.0421 // giúp tránh kéo giản theo chiều ngang
                        }} // chấm tại địa điểm đó hiển thị lên marker
                        pinColor='blue' // màu của maker
                        title='My Home' // khi nhấn vào hiển thị lên địa điểm đó
                        description='My current location my home' // mô tả địa điểm đó
                    ></Marker> */}
                    <Marker
                        coordinate={region} // chấm tại địa điểm đó hiển thị lên marker
                        pinColor='blue' // màu của maker
                        title='My current location' // khi nhấn vào hiển thị lên địa điểm đó
                        description='My current location description' // mô tả địa điểm đó
                    ></Marker>
                </MapView>
            </View>
        </SafeAreaView>
    );
};

export default MapComponent;

const styles = StyleSheet.create({});
