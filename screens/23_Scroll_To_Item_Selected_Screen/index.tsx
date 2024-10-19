import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

const ScrollToItemSelectedScreen = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // quản lý state của việc chọn rồi roll đến vị trí đó
  const [currentIndex, setCurrentIndex] = useState();
  const [refFlatList, setRefFlatList] = useState<any>();

  useEffect(() => {
    getListPhoto()
  }, [])

  const getListPhoto = async () => {
    setIsLoading(true)
    const apiURL = `https://jsonplaceholder.typicode.com/photos?_limit=20&_page=1`
    await fetch(apiURL)
    .then((res) => res.json())
    .then((resJson) => {
        setData(resJson)
    })
    .catch((error) => {
        console.log('Request API Error', error)
    })
    .finally(() => {
        setIsLoading(false)
    })
  }

  const onClickItem = (item: any, index: any): any => {
    setCurrentIndex(index)
    const newData: any = data.map((e: any) => {
        // nếu id mình chọn trùng với id trong danh sách - bổ sung thêm trường selected là true cho riêng nó
        if(item.id === e.id) {
            return {...e, selected: true}
        }
        // các thằng còn lại cho là selected là false
        return {
            ...e,
            selected: false
        }
    })

    setData(newData)
  }

  const renderItem = ({item, index}: any) => {
    return (
        <TouchableOpacity 
        onPress={() => onClickItem(item, index)}
        style={[styles.item, {
            marginTop: 10,
            height: 150,
            backgroundColor: item.selected ? 'coral' : 'white'
        }]}>
            <Image style={styles.image} source={{uri: item.url}} resizeMode='contain'/>
        </TouchableOpacity>
    )
  }

  const scrollToItemSelected = () => {
    refFlatList.scrollToIndex({animated: true, index: currentIndex})
  }

  const getItemLayout = (data: any, index: any) => {
    return {
        length: 161,
        offset: 161 * index,
        index
    }
  }

  return (
    <SafeAreaView style={styles.container}>
        {
            isLoading ? (
                <ActivityIndicator />
            ) : (
                <FlatList 
                    data={data} 
                    renderItem={renderItem}
                    keyExtractor={(item: any) => `item-${item.id}`}
                    ref={(ref: any) => setRefFlatList(ref)}
                    getItemLayout={getItemLayout}
                />
            )
        }
        <TouchableOpacity style={styles.wrapButton} onPress={scrollToItemSelected}>
            <Text style={styles.txtFontSize}>Scroll To Item Selected</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default ScrollToItemSelectedScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        borderWidth: 0.5,
        padding: 8,
        borderRadius: 10,
        justifyContent: 'center'
    },
    image: {
        width: 100,
        height: 100
    },
    wrapButton: {
        alignItems: 'center',
        marginHorizontal: 50,
        padding: 20,
        backgroundColor: 'orange'
    },
    txtFontSize: {
        fontSize: 20
    }
})