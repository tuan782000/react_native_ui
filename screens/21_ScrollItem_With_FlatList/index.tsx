import React, {useState, useEffect, useRef} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Image, FlatList, ActivityIndicator, Animated} from 'react-native'

const BG_IMG = `https://cdn.pixabay.com/photo/2017/04/03/05/00/songdo-2197525_1280.jpg`

// Tính toán chiều cao của hình - padding của hình đến view - và margin bên ngoài
// Phải thực hiện điều này trước khi làm animation
const HEIGHT_IMG = 100
const ITEM_PADDING = 10
const ITEM_MARGIN_BOTTOM = 20

// ITEM_PADDING * 2  là vì padding trên dưới
const ITEM_SIZE = HEIGHT_IMG + ITEM_PADDING * 2 + ITEM_MARGIN_BOTTOM

const ScrollItemWithFlatList = () => {
    const scrollY = useRef(new Animated.Value(0)).current
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    // cái mẫu useEffect
    // useEffect(() => {
    //     // effect

    //     return () => {
    //         // clean up

    //     }
    // },[])

    useEffect(() => {
        // effect
        getListProducts() // call api
        return () => {
            // clean up

        }
    },[])

    const getListProducts = async () => {
        setIsLoading(true)
        const apiURL = `https://jsonplaceholder.typicode.com/photos`
        fetch(apiURL)
        .then((res) => res.json())
        .then((resJson) => {
            setData(resJson)
        })
        .catch((error) => {
            console.log("Request API Error", error)
        })
        .finally(() => setIsLoading(false))
    }

    const renderItem = ({item, index}: any) => {
        const scale = scrollY.interpolate({
            inputRange: [
                -1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)
            ],
            outputRange: [1,1,1,0]
        })
        const opacity = scrollY.interpolate({
            inputRange: [
                -1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + .6)
            ],
            outputRange: [1,1,1,0]
        })
        return (
            <Animated.View style={[styles.item, {transform: [{scale}], opacity}]}>
                <Image style={styles.image} source={{uri: item.url}} resizeMode='contain'/>
                <View style={styles.wrapText}>
                    <Text style={styles.fontSize}>{index + '.' + item.title}</Text>
                </View>
            </Animated.View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image source={{uri: BG_IMG}} style={StyleSheet.absoluteFillObject} blurRadius={70}/>
            {
                isLoading ? <ActivityIndicator /> : (
                    <Animated.FlatList 
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item : any) => `key-${item.id}`}
                        //initialNumToRender={10} // render trước 10 item để cải thiện hiệu suất
                        onScroll={Animated.event(
                            [{nativeEvent: {contentOffset: {
                                y: scrollY
                            }}}],
                            {
                                useNativeDriver: true
                            }
                        )}
                    />
                )
            }
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0, 
            height: 0,
        },
        shadowOpacity: .3,
        shadowRadius: 20,
        padding: ITEM_PADDING,
        marginBottom: ITEM_MARGIN_BOTTOM,
    },
    image: {
        width: 100,
        height: HEIGHT_IMG
    },
    fontSize: {
        fontSize: 18
    },
    wrapText: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',

    }
})

export default ScrollItemWithFlatList