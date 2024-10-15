import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const LoginScreen = () => {
  // state quản lý tất cả 2 trường bằng object
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <KeyboardAwareScrollView style={styles.container}>
        <View style={styles.header}>
          <Image
            alt="App Logo"
            resizeMode="contain"
            style={styles.headerImg}
            source={{ uri: 'https://assets.withfra.me/SignIn.2.png' }} />
          <Text style={styles.title}>
            Sign in to <Text style={{ color: '#075eec' }}>MyApp</Text>
          </Text>
          <Text style={styles.subtitle}>
            Get access to your portfolio and more
          </Text>
        </View>
        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Email address</Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="while-editing"
              keyboardType="email-address"
              onChangeText={email => setForm({ ...form, email })}
              placeholder="john@example.com"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.email} />
          </View>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              autoCorrect={false}
              clearButtonMode="while-editing"
              onChangeText={password => setForm({ ...form, password })}
              placeholder="********"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              secureTextEntry={true}
              value={form.password} />
          </View>
          <View style={styles.formAction}>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
                console.log("Submit form")
              }}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Sign in</Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              // handle link
              console.log("Move Forgot Password Screen")
            }}>
            <Text style={styles.formLink}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
      <TouchableOpacity
        onPress={() => {
          // handle link
          console.log("Move Register Screen")
        }}>
        <Text style={styles.formFooter}>
          Don't have an account?{' '}
          <Text style={{ textDecorationLine: 'underline' }}>Sign up</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default LoginScreen

const styles = StyleSheet.create({
  // Style cho màn hình
  container: {
    paddingVertical: 24, // chiều dọc - cách trên dưới 24 - các nội dung đến viền là 24
    flex: 1 // chiếm hết chiều ngang và dọc tính từ khung - padding không ảnh hưởng
  },
  title: {
    fontSize: 31, // kích cở chữ Sign in to MyApp
    fontWeight: '700', // độ đậm nhạt
    color: '#1D2A32', // màu chữ
    marginBottom: 6, // khoảng cách từ khung đến phần tử tiếp theo
  },
  subtitle: {
    fontSize: 15, // kích cỡ chữ 
    fontWeight: '500', // độ đậm nhạt
    color: '#929292', // màu sắc
  },
  /** Header */
  /*
    mobile
    trục chính (main axis) là chiều dọc (theo chiều cột) và trục phụ (cross axis) là chiều ngang (theo chiều hàng).
    justifyContent: canh chỉnh dọc (theo chiều cột).
    alignItems: canh chỉnh ngang (theo chiều hàng).

    web: Khi sử dụng flexbox - display: flex và flex-direction: row (mặc định),
    trục chính là chiều ngang và trục phụ là chiều dọc. 
    justify-content: canh chỉnh theo chiều ngang (trục chính).
	align-items: canh chỉnh theo chiều dọc (trục phụ).

    Tránh nhầm lẫn
  */
  header: {
    alignItems: 'center', // canh chiều ngang
    justifyContent: 'center', // canh chiều dọc
    marginVertical: 36, // các trên dưới 36 - phía trên 36 dưới 36
  },
  headerImg: { // phục cho logo
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 36,
  },
  /** Form */
  form: {
    marginBottom: 24,
    paddingHorizontal: 24, // trái phải 24
    flex: 1, // chiếm hết phần mà nó được chia
    // backgroundColor: 'coral'
  },
  formAction: { // css cho nút
    marginTop: 4,
    marginBottom: 16,
  },
  formLink: { // cho chũ forgot password
    fontSize: 16,
    fontWeight: '600',
    color: '#075eec',
    textAlign: 'center',
  },
  formFooter: { // don't have account
    paddingVertical: 24,
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
  /** Input */
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    minHeight: 54,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
    borderColor: '#C9D3DB',
    borderStyle: 'solid',
  },
  /** Button */
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#075eec',
    borderColor: '#075eec',
    minHeight: 54
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
});