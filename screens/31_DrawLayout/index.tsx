import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const DrawLayout = () => {
    return (
        <SafeAreaView>
            <StatusBar barStyle={'dark-content'} />
            <View style={{ borderWidth: 2, width: '100%', height: '100%' }}>
                <View
                    style={{
                        width: '100%',
                        height: '16.6%',
                        // borderWidth: 1,

                        // tác động 2 view nằm trên 1 hàng
                        flexDirection: 'row'
                    }}
                >
                    <View
                        style={{
                            width: '33.33%',
                            height: '100%',
                            // borderWidth: 1,
                            borderRightWidth: 1,
                            // Tác động cho thằng con ra giữa
                            justifyContent: 'center', // main axis - trên dưới
                            alignItems: 'center' // cross axis - trái phải
                            // mặc định flexDirection đang là column -
                            // nếu mà flexDirection là row - ngược lại justifyContent: 'center', // main axis - trái phải - alignItems: 'center' trên dưới
                        }}
                    >
                        <View
                            style={{
                                width: '80%',
                                height: '80%',
                                backgroundColor: 'red',
                                borderRadius: 20
                            }}
                        ></View>
                    </View>
                    <View
                        style={{
                            width: '66.66%',
                            height: '100%',
                            // backgroundColor: 'coral',
                            padding: 20
                        }}
                    >
                        <Text style={{ fontSize: 18 }}>Tôi tên là Tuấn</Text>
                    </View>
                </View>
                {/* View thứ 2 */}
                <View
                    style={{
                        width: '100%',
                        height: '16.6%',
                        borderWidth: 1,

                        // tác động 2 view nằm trên 1 hàng
                        flexDirection: 'row'
                    }}
                >
                    <View
                        style={{
                            width: '66.66%',
                            height: '100%',
                            borderRightWidth: 1,
                            // con
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                            Text nằm ở giữa
                        </Text>
                    </View>
                    <View style={{ width: '33.33%', height: '100%' }}>
                        <View
                            style={{
                                backgroundColor: 'green',
                                width: '100%',
                                height: '50%'
                            }}
                        ></View>
                        <View
                            style={{
                                backgroundColor: 'blue',
                                width: '100%',
                                height: '50%'
                            }}
                        ></View>
                    </View>
                </View>
                {/* View thứ 3 */}
                <View
                    style={{
                        width: '100%',
                        height: '16.6%',
                        borderBottomWidth: 1,
                        flexDirection: 'row'
                    }}
                >
                    {/* Áp dụng flex thay vì dùng % */}
                    <View
                        style={{
                            height: '100%',
                            // width: '33.33%',
                            flex: 1,
                            borderRightWidth: 1,
                            backgroundColor: 'yellow'
                        }}
                    ></View>
                    <View
                        style={{
                            height: '100%',
                            // width: '33.33%',
                            flex: 1,
                            borderRightWidth: 1,
                            backgroundColor: 'pink'
                        }}
                    ></View>
                    <View
                        style={{
                            height: '100%',
                            // width: '33.33%',
                            flex: 1, // flex 1 thì chiếm hết của chính nó
                            borderRightWidth: 1,
                            backgroundColor: 'orange'
                        }}
                    ></View>
                </View>
                {/* View thứ 4 */}
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <View
                        style={{
                            width: '55%',
                            height: '55%',
                            backgroundColor: 'purple',
                            position: 'relative'
                        }}
                    >
                        <View
                            style={{
                                aspectRatio: 1,
                                height: '50%',
                                backgroundColor: 'red',
                                position: 'absolute',
                                top: -20,
                                right: -40
                            }}
                        ></View>
                    </View>
                </View>
                {/* View thứ 5 */}
                <View
                    style={{
                        height: '16.6%',
                        width: '100%',
                        // backgroundColor: 'coral'
                        borderTopWidth: 1,
                        flexDirection: 'row'
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: 'gray',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '80%',
                                height: '40%',
                                borderWidth: 4,
                                borderColor: 'red',
                                borderRadius: 25
                            }}
                        >
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                Save
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: 'blue',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '80%',
                                height: '40%',
                                borderWidth: 4,
                                // borderColor: 'red',
                                borderRadius: 25
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    color: 'white'
                                }}
                            >
                                Cancel
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default DrawLayout;

const styles = StyleSheet.create({});
