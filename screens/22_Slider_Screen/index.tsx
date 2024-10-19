import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, Dimensions, NativeScrollEvent, Image } from 'react-native'
import React, { useState } from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const images = [
    'https://media.istockphoto.com/id/1304859591/vi/anh/m%C3%A8o-shorthair-anh-tr%C3%AAn-n%E1%BB%81n-v%C3%A0ng.jpg?s=2048x2048&w=is&k=20&c=rux08QK-INPhL7r5hMxlNxr9uFGuyKIV-ARFPHTjb3g=',
    'https://media.istockphoto.com/id/2158299728/vi/anh/ch%C3%A2n-dung-m%C3%A8o-shorthair-c%E1%BB%A7a-anh.jpg?s=2048x2048&w=is&k=20&c=n25nRNI6fq7PMIfFF5LSO9LC2Nqt9GMzQkaWKaF7Ryg=',
    'https://media.istockphoto.com/id/1199279669/vi/anh/m%C3%A8o-b%C3%A9o-ph%C3%AC-ngh%E1%BB%8Bch-ng%E1%BB%A3m-m%E1%BA%AFt-to-ph%C3%ADa-sau-b%C3%A0n-l%C3%A0m-vi%E1%BB%87c-v%E1%BB%9Bi-chi%E1%BA%BFc-m%C5%A9-%C4%91%E1%BB%8F-m%C3%A8o-l%C3%B4ng-ki%E1%BB%83u-anh-m%C3%A0u-x%C3%A1m.jpg?s=2048x2048&w=is&k=20&c=1HmkpCCW1Zt9tZmsGvwt5Ps-SATPIkGO7iL3D32OjNE='
]

const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height

const SwipeSlider = () => {
    const [imageActive, setImageActive] = useState(0);

    const onChange = (nativeEvent: any) => {
        if(nativeEvent) {
            // contentOffset: khoảng cách từ đầu của scrollview cho đến hình thứ 1, thứ 2, thứ 3 // từ đầu scrollView đến thằng cuối cùng
            // nativeEvent.layoutMeasurement.width: chiều rộng của cái hình (phân biệt hình 1, 2, 3)
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
            if(slide !== imageActive) {
                setImageActive(slide) // đang ở hình 1 - tiến đến hình hình 2 set lại active của hình
            }
        }
    }

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.wrap}>
            <ScrollView 
                onScroll={({nativeEvent}) => onChange(nativeEvent)}
                showsHorizontalScrollIndicator={false} // tắt thanh cuộn ngang
                pagingEnabled // hiển thị từng ảnh - không hiển thị hết tất cả
                horizontal // ngang // boolean
                style={styles.wrap}
            >
                {
                    images.map((e, index) => <Image key={e} resizeMode='stretch' style={styles.wrap} source={{uri: e}}/>)
                }
            </ScrollView>
            <View style={styles.wrapDot}>
                {
                    images.map((e, index) => (
                        <Text key={e} style={imageActive === index ? styles.dotActive : styles.dot}>●</Text>
                    ))
                }
            </View>
        </View>
    </SafeAreaView>
  )
}

export default SwipeSlider

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    wrap: {
        width: WIDTH,
        height: HEIGHT * 0.25 // chiếm 1/4 so với màn hình thực tế
    },
    wrapDot: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    dotActive: {
        margin: 3,
        color: '#000'
    },
    dot: {
        margin: 3,
        color: '#fff'
    }
})