import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    StatusBar,
    Platform,
    TouchableOpacity,
    TextInput
} from 'react-native';
import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntdIcon from 'react-native-vector-icons/AntDesign';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const SIGN_IN = 'SIGN_IN';
const GET_STARTED = 'GET_STARTED';
const FORGOT_PASSWORD = 'FORGOT_PASSWORD';

const Login = () => {
    // Muốn biết đang bấm signin hay getStarted
    const [page, setPage] = useState(SIGN_IN);
    return (
        <View style={{ flex: 1 }}>
            <StatusBar barStyle={'light-content'} />
            {/* Red Components */}

            <HeaderComponent page={page} setPage={setPage} />
            {/* Green Components */}
            {page === SIGN_IN ? (
                <LoginComponent page={page} setPage={setPage} />
            ) : null}
            {page === GET_STARTED ? <RegisterComponent /> : null}
            {page === FORGOT_PASSWORD ? <ForgotPasswordComponent /> : null}
            {/* <LoginComponent /> */}
            {/* Blue Components */}
            <SocialComponent />
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({});

const HeaderComponent = (props: any) => {
    const { page, setPage } = props;
    return (
        <View
            style={{
                height: '33.33%',
                backgroundColor: '#4d8d6e'
            }}
        >
            <View
                style={{
                    width: '100%',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Text
                    style={{
                        fontSize: 50,
                        fontWeight: '600',
                        color: '#fff'
                    }}
                >
                    wasty.
                </Text>
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: '500',
                        color: '#fff'
                    }}
                >
                    think for nature.
                </Text>
            </View>
            <View
                style={{
                    height: 50,
                    backgroundColor: 'white',
                    flexDirection: 'row',

                    // Shadow properties for iOS - đỗ bóng IOS và android chỉ có 1 dòng. code
                    shadowColor: '#000', // Màu bóng
                    shadowOffset: { width: 0, height: 4 }, // Vị trí bóng
                    shadowOpacity: 0.1, // Độ mờ của bóng
                    shadowRadius: 10, // Độ lan tỏa của bóng
                    // Elevation for Android
                    elevation: 10 // Mức độ bóng trên Android
                }}
            >
                <TouchableOpacity
                    style={{
                        width: '50%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    onPress={() => {
                        setPage(SIGN_IN);
                    }}
                    disabled={page === SIGN_IN ? true : false}
                >
                    <Text
                        style={{
                            color: '#4d8d6e',
                            fontWeight: '600',
                            fontSize: 20
                        }}
                    >
                        SignIn
                    </Text>
                    {page === SIGN_IN ? (
                        <View
                            style={{
                                position: 'absolute',
                                width: '100%',
                                borderBottomWidth: 2,
                                borderColor: '#4d8d6e',
                                bottom: 0
                            }}
                        ></View>
                    ) : null}
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        width: '50%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    onPress={() => {
                        setPage(GET_STARTED);
                    }}
                    disabled={page === GET_STARTED ? true : false}
                >
                    <Text
                        style={{
                            color: '#4d8d6e',
                            fontWeight: '600',
                            fontSize: 20
                        }}
                    >
                        Get started
                    </Text>
                    {page === GET_STARTED ? (
                        <View
                            style={{
                                position: 'absolute',
                                width: '100%',
                                borderBottomWidth: 2,
                                borderColor: '#4d8d6e',
                                bottom: 0
                            }}
                        ></View>
                    ) : null}
                </TouchableOpacity>
            </View>
        </View>
    );
};

const LoginComponent = (props: any) => {
    const { page, setPage } = props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showHidePassword, setshowHidePassword] = useState(false);

    // const handleSubmit = () => {};

    return (
        <View
            style={{
                height: '47.33%',
                width: '100%',
                backgroundColor: '#f5f5f5',
                padding: 20,
                justifyContent: 'center'
            }}
        >
            <Text style={{ fontSize: 24, fontWeight: 600, marginBottom: 30 }}>
                Login in your account
            </Text>
            <View
                style={{
                    width: '100%',
                    height: 54,
                    backgroundColor: 'white',
                    borderRadius: 5,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 20,

                    // đổ bóng
                    shadowColor: '#000', // Màu bóng
                    shadowOffset: { width: 0, height: 4 }, // Vị trí bóng
                    shadowOpacity: 0.1, // Độ mờ của bóng
                    shadowRadius: 10, // Độ lan tỏa của bóng
                    // Elevation for Android
                    elevation: 10 // Mức độ bóng trên Android
                }}
            >
                <View style={{ marginLeft: 10 }}>
                    <FeatherIcon name='mail' size={20} color={'#e1e1e1'} />
                </View>
                <TextInput
                    placeholder='Email'
                    style={{
                        height: '100%',
                        flex: 1,
                        marginHorizontal: 10,
                        fontSize: 16
                    }}
                    autoCapitalize='none'
                    value={email}
                    onChangeText={val => setEmail(val)}
                />
            </View>
            <View
                style={{
                    width: '100%',
                    height: 54,
                    backgroundColor: 'white',
                    borderRadius: 5,
                    flexDirection: 'row',
                    alignItems: 'center',

                    // đổ bóng
                    shadowColor: '#000', // Màu bóng
                    shadowOffset: { width: 0, height: 4 }, // Vị trí bóng
                    shadowOpacity: 0.1, // Độ mờ của bóng
                    shadowRadius: 10, // Độ lan tỏa của bóng
                    // Elevation for Android
                    elevation: 10 // Mức độ bóng trên Android
                }}
            >
                <View style={{ marginLeft: 10 }}>
                    <FeatherIcon name='lock' size={20} color={'#e1e1e1'} />
                </View>
                <TextInput
                    placeholder='Password'
                    style={{
                        height: '100%',
                        flex: 1,
                        marginHorizontal: 10,
                        fontSize: 16
                    }}
                    autoCapitalize='none'
                    secureTextEntry={showHidePassword}
                    value={password}
                    onChangeText={val => setPassword(val)}
                />
                <TouchableOpacity
                    style={{
                        marginRight: 20,
                        height: '100%',
                        justifyContent: 'center'
                    }}
                    onPress={() => setshowHidePassword(!showHidePassword)}
                >
                    {showHidePassword ? (
                        <FeatherIcon name='eye' size={20} color={'#e1e1e1'} />
                    ) : (
                        <FeatherIcon
                            name='eye-off'
                            size={20}
                            color={'#e1e1e1'}
                        />
                    )}
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={{ marginTop: 20, alignItems: 'flex-end' }}
                onPress={() => setPage(FORGOT_PASSWORD)}
            >
                <Text style={{ color: '#707070' }}>Forget password ?</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    width: '100%',
                    backgroundColor: '#4d8d6e',
                    marginTop: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingVertical: 15,
                    borderRadius: 25
                }}
                onPress={() => {
                    console.log(email);
                    console.log(password);
                }}
            >
                <Text
                    style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}
                >
                    Login
                </Text>
            </TouchableOpacity>

            <View
                style={{
                    flexDirection: 'row',
                    width: '100%',
                    alignItems: 'center',
                    gap: 10,
                    marginTop: 20
                }}
            >
                <View
                    style={{
                        borderBottomWidth: 1,
                        borderColor: '#000',
                        flex: 1
                    }}
                ></View>
                <Text>or connect with</Text>
                <View
                    style={{
                        borderBottomWidth: 1,
                        borderColor: '#000',
                        flex: 1
                    }}
                ></View>
            </View>
        </View>
    );
};

const RegisterComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showHidePassword, setshowHidePassword] = useState(false);
    return (
        <View
            style={{
                height: '47.33%',
                width: '100%',
                backgroundColor: '#f5f5f5',
                padding: 20,
                justifyContent: 'center'
            }}
        >
            <Text
                style={{
                    fontSize: 24,
                    fontWeight: 600,
                    marginBottom: 30
                    // marginTop: 40
                }}
            >
                Become part of the future account
            </Text>
            <View
                style={{
                    width: '100%',
                    height: 54,
                    backgroundColor: 'white',
                    borderRadius: 5,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 20,

                    // đổ bóng
                    shadowColor: '#000', // Màu bóng
                    shadowOffset: { width: 0, height: 4 }, // Vị trí bóng
                    shadowOpacity: 0.1, // Độ mờ của bóng
                    shadowRadius: 10, // Độ lan tỏa của bóng
                    // Elevation for Android
                    elevation: 10 // Mức độ bóng trên Android
                }}
            >
                <View style={{ marginLeft: 10 }}>
                    <FeatherIcon name='mail' size={20} color={'#e1e1e1'} />
                </View>
                <TextInput
                    placeholder='Email'
                    style={{
                        height: '100%',
                        flex: 1,
                        marginHorizontal: 10,
                        fontSize: 16
                    }}
                    autoCapitalize='none'
                    value={email}
                    onChangeText={val => setEmail(email)}
                />
            </View>
            <View
                style={{
                    width: '100%',
                    height: 54,
                    backgroundColor: 'white',
                    borderRadius: 5,
                    flexDirection: 'row',
                    alignItems: 'center',

                    // đổ bóng
                    shadowColor: '#000', // Màu bóng
                    shadowOffset: { width: 0, height: 4 }, // Vị trí bóng
                    shadowOpacity: 0.1, // Độ mờ của bóng
                    shadowRadius: 10, // Độ lan tỏa của bóng
                    // Elevation for Android
                    elevation: 10 // Mức độ bóng trên Android
                }}
            >
                <View style={{ marginLeft: 10 }}>
                    <FeatherIcon name='lock' size={20} color={'#e1e1e1'} />
                </View>
                <TextInput
                    placeholder='Password'
                    style={{
                        height: '100%',
                        flex: 1,
                        marginHorizontal: 10,
                        fontSize: 16
                    }}
                    autoCapitalize='none'
                    secureTextEntry={showHidePassword}
                    value={password}
                    onChangeText={val => setPassword(val)}
                />
                <TouchableOpacity
                    style={{
                        marginRight: 20,
                        height: '100%',
                        justifyContent: 'center'
                    }}
                    onPress={() => setshowHidePassword(!showHidePassword)}
                >
                    {showHidePassword ? (
                        <FeatherIcon name='eye' size={20} color={'#e1e1e1'} />
                    ) : (
                        <FeatherIcon
                            name='eye-off'
                            size={20}
                            color={'#e1e1e1'}
                        />
                    )}
                </TouchableOpacity>
            </View>
            <View
                style={{
                    width: '100%',
                    height: 54,
                    backgroundColor: 'white',
                    borderRadius: 5,
                    flexDirection: 'row',
                    alignItems: 'center',

                    // đổ bóng
                    shadowColor: '#000', // Màu bóng
                    shadowOffset: { width: 0, height: 4 }, // Vị trí bóng
                    shadowOpacity: 0.1, // Độ mờ của bóng
                    shadowRadius: 10, // Độ lan tỏa của bóng
                    // Elevation for Android
                    elevation: 10, // Mức độ bóng trên Android,
                    marginTop: 20
                }}
            >
                <View style={{ marginLeft: 10 }}>
                    <FeatherIcon name='lock' size={20} color={'#e1e1e1'} />
                </View>
                <TextInput
                    placeholder='Confirm password'
                    style={{
                        height: '100%',
                        flex: 1,
                        marginHorizontal: 10,
                        fontSize: 16
                    }}
                    autoCapitalize='none'
                    secureTextEntry={showHidePassword}
                    value={confirmPassword}
                    onChangeText={val => setConfirmPassword(val)}
                />
                <TouchableOpacity
                    style={{
                        marginRight: 20,
                        height: '100%',
                        justifyContent: 'center'
                    }}
                    onPress={() => setshowHidePassword(!showHidePassword)}
                >
                    {showHidePassword ? (
                        <FeatherIcon name='eye' size={20} color={'#e1e1e1'} />
                    ) : (
                        <FeatherIcon
                            name='eye-off'
                            size={20}
                            color={'#e1e1e1'}
                        />
                    )}
                </TouchableOpacity>
            </View>
            {/* <TouchableOpacity style={{ marginTop: 20, alignItems: 'flex-end' }}>
                <Text style={{ color: '#707070' }}>Forget password ?</Text>
            </TouchableOpacity> */}
            <TouchableOpacity
                style={{
                    width: '100%',
                    backgroundColor: '#4d8d6e',
                    marginTop: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingVertical: 15,
                    borderRadius: 25
                }}
            >
                <Text
                    style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}
                >
                    Register
                </Text>
            </TouchableOpacity>

            <View
                style={{
                    flexDirection: 'row',
                    width: '100%',
                    alignItems: 'center',
                    gap: 10,
                    marginTop: 20
                }}
            >
                <View
                    style={{
                        borderBottomWidth: 1,
                        borderColor: '#000',
                        flex: 1
                    }}
                ></View>
                <Text>or connect with</Text>
                <View
                    style={{
                        borderBottomWidth: 1,
                        borderColor: '#000',
                        flex: 1
                    }}
                ></View>
            </View>
        </View>
    );
};

const ForgotPasswordComponent = () => {
    return (
        <View style={{ height: '47.33%' }}>
            <Text>Forgot password</Text>
        </View>
    );
};

const SocialComponent = () => {
    return (
        <View
            style={{
                height: '16%',
                // flex: 1,
                width: '100%',
                backgroundColor: '#f5f5f5',
                // backgroundColor: 'coral',
                // marginBottom: 10,
                padding: 20
                // paddingBottom: 40
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 10,
                    marginBottom: 10
                }}
            >
                <TouchableOpacity
                    style={{
                        width: '50%',
                        // height: '100%',
                        paddingVertical: 15,
                        borderRadius: 8,
                        backgroundColor: 'white',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        gap: 10
                    }}
                >
                    <AntdIcon name='google' size={20} />

                    <Text>Google</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        width: '50%',
                        // height: '100%',
                        paddingVertical: 15,
                        borderRadius: 8,
                        backgroundColor: 'white',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        gap: 10
                    }}
                >
                    <AntdIcon name='apple1' size={20} />
                    <Text>Apple</Text>
                </TouchableOpacity>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 10
                    // marginBottom: 20
                }}
            >
                <TouchableOpacity
                    style={{
                        width: '50%',
                        // height: '100%',
                        paddingVertical: 15,
                        borderRadius: 8,
                        backgroundColor: 'white',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        gap: 10
                    }}
                >
                    <AntdIcon name='twitter' color='#1da1f2' size={20} />
                    <Text>Twitter</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        width: '50%',
                        // height: '100%',
                        paddingVertical: 15,
                        borderRadius: 8,
                        backgroundColor: 'white',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        gap: 10
                    }}
                >
                    <AntdIcon name='facebook-square' color='blue' size={20} />
                    <Text>Facebook</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
