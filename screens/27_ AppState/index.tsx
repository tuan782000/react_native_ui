import { AppState, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'

/*
AppState là một module trong React Native cho phép bạn theo dõi trạng thái hiện tại của ứng dụng, 
ví dụ như khi ứng dụng đang hoạt động (active), 
bị ẩn (background), 
hoặc không hoạt động (inactive). 
Bạn có thể sử dụng nó để nhận biết khi nào người dùng rời khỏi ứng dụng 
và khi nào họ quay lại ứng dụng.
*/

const AppStateScreen = () => {
    const appState = useRef(AppState.currentState)
    /*
    Ở đây, useRef được dùng để giữ giá trị của trạng thái ứng dụng hiện tại. 


    Biến appState.current lưu trữ trạng thái ứng dụng ban đầu 
    (có thể là active, background, hoặc inactive).

    Biến appStateVisible được quản lý bởi useState và 
    được sử dụng để cập nhật và hiển thị trạng thái hiện tại của ứng dụng lên giao diện.
    */ 
    const [appStateVisible, setAppStateVisible] = useState(appState.current)

    /*
    useEffect để theo dõi sự thay đổi của AppState
    Trong useEffect, bạn thêm một listener cho sự kiện "change" của AppState. 
    Khi trạng thái của ứng dụng thay đổi (chuyển từ active sang background hoặc ngược lại), 
    hàm _handleAppStateChange sẽ được gọi.
    */
    useEffect(() => {
      AppState.addEventListener("change", _handleAppStateChange)
      
      /*
      Cái return trong useEffect là để loại bỏ listener khi component bị unmount, 
      nhằm tránh rò rỉ bộ nhớ và đảm bảo rằng listener không còn tồn tại 
      khi component không cần thiết nữa.
      */ 
      return () => {
          AppState.addEventListener("change", _handleAppStateChange)

      }
    }, [])
    

    /*
    Hàm này kiểm tra nếu trạng thái trước đó là "inactive" hoặc "background" 
    và trạng thái tiếp theo là "active", 
    thì nó sẽ in ra console thông báo rằng ứng dụng đã trở lại foreground (đang hoạt động).
    */ 
    const _handleAppStateChange = (nextAppState) => {
        if(appState.current.match(/inactive|background/) && nextAppState === "active") {
            console.log("App has come to the foreground or Active / App đang lên foreground hoặc đang Active")
        }

        appState.current = nextAppState
        setAppStateVisible(appState.current)

        console.log("App State ", appState.current)
    }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        Current State is: {appStateVisible}
      </Text>
    </SafeAreaView>
  )
}

export default AppStateScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 24
    }
})