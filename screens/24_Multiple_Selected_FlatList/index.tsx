import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator, FlatList, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import CheckBox from '@react-native-community/checkbox'

const MultipleSelectedFlatListScreen = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getListPhotos()
        // Nếu muốn huỷ 1 sự kiện gì đó thì mới dùng return
    }, []);

    const getListPhotos = async() => {
        setIsLoading(true)
        const apiURL = `https://jsonplaceholder.typicode.com/photos`
        fetch(apiURL)
        .then((res) => res.json())
        .then((resJson) => {
            setData(resJson)
        })
        .catch((error) => {
            console.log("Rest API error", error)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }

    // này xử lý logic
    const onValueChange = (item: any, index: any) => {
        const newData: any = data.map((e: any) => {
            if(item.id === e.id) {
                return {
                    ...e,
                    selected: !e.selected // nếu nó đang true chuyển thành false ngược lại false thành true
                }
            }
            return {
                ...e,
                selected: e.selected // giúp giữ nguyên các item còn lại
            } 
        })

        setData(newData)
    }

    // Này chỉ phục vụ in ra
    const onShowItemSelected = () => {
        const listSelected = data.filter((item: any) => item.selected === true)

        let contentAlert = ''
        listSelected.forEach((item: any) => {
            contentAlert = contentAlert + `${item.id}.` + item.title + '\n'
        })
        Alert.alert(contentAlert)
    }

    const renderItem = ({item, index}: any) => {
        return (
            <View style={styles.item}>
                <Image style={styles.image} source={{uri: item.url}} resizeMode='contain'/>
                <View style={styles.wrapText}>
                    <Text>{item.title}</Text>
                    <CheckBox 
                        style={styles.checkBox} 
                        disabled={false} 
                        onAnimationType='fill' 
                        offAnimationType='fade' 
                        boxType='square' 
                        onValueChange={() => onValueChange(item, index)}
                    />
                </View>
            </View>
        )
    }

  return (
    <SafeAreaView style={styles.container}>
      {
        isLoading ? <ActivityIndicator /> : (
            <FlatList 
                style={styles.list}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item: any) => `key-${item.id}`} // phân biệt từng cái item
            />
        )
      }
      <TouchableOpacity onPress={onShowItemSelected} style={styles.wrapButton}>
        <Text style={styles.txtFontSize}>Show Item Selected</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default MultipleSelectedFlatListScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    list: {
        flex: 1,
        padding: 8
    },
    item: {
        flexDirection: 'row',
        marginTop: 8,
        padding: 4,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        backgroundColor: '#fff'
    },
    image: {
        width: 100,
        height: 100,

    },
    wrapText: {
        flex: 1,
        marginTop: 16,
        marginLeft: 8
    },
    checkBox: {
        width: 20,
        height: 20,
        marginTop: 5 
    },
    wrapButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
        padding: 20,
        marginHorizontal: 54
    },
    txtFontSize: {
        fontSize: 20
    }
})