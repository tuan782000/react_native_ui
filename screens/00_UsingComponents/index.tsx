import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {InputComponent} from '../../components'
import AntDesign from 'react-native-vector-icons/AntDesign'

const UsingComponents = () => {
  const [textValue, setTextValue] = useState(''); // State để quản lý giá trị nhập liệu
  return (
    <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>

            <Text style={styles.label}>Nhập thông tin:</Text>

            <InputComponent
                value={textValue} // Truyền state hiện tại
                onChangeText={(text) => setTextValue(text)} // Cập nhật state khi có thay đổi
                placeholder="Nhập tên của bạn"
                keyboardType="default" // Mặc định là bàn phím văn bản
                maxLength={30} // Giới hạn 30 ký tự
                multiline={false} // Không nhập nhiều dòng
                autoCapitalize='none'
                viewStyle={{
                    borderWidth: 1,
                    borderRadius: 10,
                    minHeight: 54,
                    flexDirection: 'row',
                    // justifyContent: 'center',
                    alignItems: 'center'
                }}
                styleInput={{
                    borderWidth: 0,
                    minHeight: 54,
                    flex: 1
                }}
                prefixIcon={<AntDesign name='user' size={20} style={{paddingLeft: 10, paddingRight: 5}}/>}
                allowClear={<AntDesign name='close' size={20} style={{paddingRight: 10, paddingLeft: 5}}/>}
            />

            <Text>Kết quả: {textValue}</Text> 
            {/* Hiển thị giá trị người dùng nhập */}
        </View>
    </SafeAreaView>
  )
}

export default UsingComponents

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    label: {
      fontSize: 18,
      marginBottom: 10,
      color: '#000'
    },
  });