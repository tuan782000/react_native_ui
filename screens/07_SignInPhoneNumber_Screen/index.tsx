import { Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

const SignInPhoneNumber = () => {
    const [form, setForm] = useState<{ phone: string }>({
        phone: ""
    });

    const [isValid, setIsValid] = useState<boolean>(false);

    const handlePhoneChange = (phone: string) => {
        const phoneRegex = /^[0-9]{10,11}$/;
        setForm({ ...form, phone });
        setIsValid(phoneRegex.test(phone)); // Kiểm tra số điện thoại có hợp lệ không
    };


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
        <KeyboardAwareScrollView style={{paddingVertical: 24, flex: 1}}>
            <View style={{paddingHorizontal: 24}}>
                <Text style={{fontWeight: '700', fontSize: 28, marginBottom: 10}}>Enter your phone</Text>
                <Text style={{
                    fontSize: 15,
                    fontWeight: '500',
                    color: '#929292'
                }}>
                    You will receive a 4 digit code to verify your account
                </Text>

                <View style={{height: 40}}/>
                <View style={{
                    backgroundColor: '#fff',
                    minHeight: 54,
                    borderRadius: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <TouchableOpacity style={{paddingHorizontal: 20, minHeight: 54, justifyContent: 'center'}}>
                        <Text>+84</Text>
                    </TouchableOpacity>
                    <TextInput 
                        style={{flex: 1, minHeight: 54}} 
                        placeholder='Enter your phone number' 
                        placeholderTextColor="#6b7280" 
                        keyboardType='phone-pad'
                        value={form.phone}
                        // onChangeText={(phone) => setForm({...form, phone})}
                        onChangeText={handlePhoneChange}
                    />
                </View>
                { !isValid && form.phone.length > 0 && (
                    <Text style={{ color: 'red', marginTop: 10 }}>Phone number must be 10-11 digits.</Text>
                )}
                <View style={{height: 30}}/>
                <TouchableOpacity 
                    onPress={() => {
                        console.log(form)
                    }}
                    disabled={!isValid} // không hợp lệ thì - sẽ disabled đi
                    style={{
                        backgroundColor: '#000', 
                        borderRadius: 10, 
                        minHeight: 54, 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        flexDirection: 'row'
                    }} activeOpacity={0.5}>
                    <Text style={{color: '#fff', fontWeight: '600', fontSize: 18, marginRight: 10}}>Continue</Text>
                    <AntDesign name='arrowright' color='#fff' size={20}/>
                </TouchableOpacity>
                <View style={{height: 30}}/>
                <Text style={{textAlign: 'center'}}>
                    Or continue with
                </Text>
                <View style={{height: 30}}/>
                <TouchableOpacity style={{
                        backgroundColor: '#fff', 
                        borderWidth: 1,
                        borderColor: '#000',
                        borderRadius: 10, 
                        minHeight: 54, 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        flexDirection: 'row'
                    }} activeOpacity={0.5}>
                    <MaterialCommunityIcons name='email-fast-outline' color='#000' size={20}/>
                    <Text style={{color: '#000', fontWeight: '600', fontSize: 18, marginLeft: 10}}>Email</Text>
                </TouchableOpacity>
                <View style={{height: 10}}/>
                <TouchableOpacity style={{
                        backgroundColor: '#fff', 
                        borderWidth: 1,
                        borderColor: '#000',
                        borderRadius: 10, 
                        minHeight: 54, 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        flexDirection: 'row'
                    }} activeOpacity={0.5}>
                    <AntDesign name='apple1' color='#000' size={20}/>
                    <Text style={{color: '#000', fontWeight: '600', fontSize: 18, marginLeft: 10}}>Apple</Text>
                </TouchableOpacity>
                <View style={{height: 10}}/>
                <TouchableOpacity style={{
                        backgroundColor: '#fff', 
                        borderWidth: 1,
                        borderColor: '#000',
                        borderRadius: 10, 
                        minHeight: 54, 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        flexDirection: 'row'
                    }} activeOpacity={0.5}>
                    <AntDesign name='google' color='#000' size={20}/>
                    <Text style={{color: '#000', fontWeight: '600', fontSize: 18, marginLeft: 10}}>Google</Text>
                </TouchableOpacity>
                <View style={{height: 10}}/>
                <TouchableOpacity style={{
                        backgroundColor: '#fff', 
                        borderWidth: 1,
                        borderColor: '#000',
                        borderRadius: 10, 
                        minHeight: 54, 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        flexDirection: 'row'
                    }} activeOpacity={0.5}>
                    <Ionicons name='logo-facebook' color='#000' size={20}/>
                    <Text style={{color: '#000', fontWeight: '600', fontSize: 18, marginLeft: 10}}>Facebook</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAwareScrollView>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 24}}>
            <Text style={{fontWeight: '600'}}>Not a memeber?</Text>
            <TouchableOpacity style={{marginLeft: 5}}>
                <Text style={{fontWeight: '600', color: '#d897f8'}}>
                    Sign up
                </Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default SignInPhoneNumber

const styles = StyleSheet.create({})