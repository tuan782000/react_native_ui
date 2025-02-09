import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    ImageBackground,
    TextInput
} from 'react-native';
import React, { useState } from 'react';

const Login = () => {
    const [showHidePassword, setShowHidePassword] = useState(true);
    return (
        <ImageBackground
            style={{ height: '100%', width: '100%' }}
            source={require('../../assets/img/background.png')}
            resizeMode='stretch'
        >
            <SafeAreaView style={{ flex: 1 }}>
                {/* con của safeAreaView vùng an toàn để code */}
                <View style={{ flex: 1, paddingHorizontal: 25 }}>
                    {/* Email & Password */}
                    <View
                        style={{
                            width: '100%',
                            height: '80%',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <View
                            style={{
                                width: '100%',
                                height: '50%'
                                // backgroundColor: 'green'
                            }}
                        >
                            <View
                                style={{
                                    width: '100%',
                                    height: 30,
                                    // borderWidth: 1,
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}
                            >
                                <Text style={{ color: 'white' }}>Email</Text>
                                <TextInput
                                    style={{
                                        height: '100%',
                                        flex: 1,
                                        borderBottomWidth: 1,
                                        marginLeft: 10,
                                        borderColor: 'white',
                                        textAlign: 'right',
                                        color: 'white'
                                    }}
                                    autoCapitalize='none'
                                />
                            </View>
                            <View
                                style={{
                                    width: '100%',
                                    height: 30,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginTop: 30
                                }}
                            >
                                <Text style={{ color: 'white' }}>Password</Text>
                                <TextInput
                                    style={{
                                        height: '100%',
                                        flex: 1,
                                        borderBottomWidth: 1,
                                        marginLeft: 10,
                                        borderColor: 'white',
                                        textAlign: 'right',
                                        color: 'white',
                                        paddingRight: 50
                                    }}
                                    autoCapitalize='none'
                                    secureTextEntry={showHidePassword}
                                />
                                <TouchableOpacity
                                    style={{ position: 'absolute', right: 0 }}
                                    onPress={() => {
                                        setShowHidePassword(!showHidePassword);
                                    }}
                                >
                                    <Text>
                                        {showHidePassword ? 'Show' : 'Hide'}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    {/* Buttons Login && Register */}
                    <View
                        style={{
                            width: '100%',
                            height: '20%',
                            alignItems: 'center',
                            // backgroundColor: 'coral'
                            justifyContent: 'center'
                        }}
                    >
                        <View
                            style={{
                                height: '50%',
                                width: '80%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'blue',
                                borderRadius: 25,
                                marginBottom: 10,
                                borderWidth: 1,
                                borderColor: 'white'
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    color: 'white'
                                }}
                            >
                                Đăng nhập
                            </Text>
                        </View>
                        <View
                            style={{
                                height: '50%',
                                width: '80%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'purple',
                                borderRadius: 25,
                                borderWidth: 1,
                                borderColor: 'white'
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    color: 'white'
                                }}
                            >
                                Đăng ký
                            </Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default Login;

const styles = StyleSheet.create({});
