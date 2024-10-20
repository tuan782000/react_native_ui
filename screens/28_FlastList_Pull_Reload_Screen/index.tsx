import { StyleSheet, Text, View, SafeAreaView, FlatList, ActivityIndicator, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'

const PullToRefreshFlatList = () => {
    const [dataSource, setDataSource] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);  // State riêng cho việc refresh

    useEffect(() => {
        getData()
    }, [])


    const getData = async () => {
        setIsLoading(true)
        await fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((responsejson) => {
                setDataSource(responsejson)
            })
            .catch((error) => {
                console.log("Get data failed", error)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    const onRefresh = async () => {
        setRefreshing(true);  // Bắt đầu trạng thái refresh
        await fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((responsejson) => {
                setDataSource(responsejson)
            })
            .catch((error) => {
                console.log("Get data failed", error)
            })
            .finally(() => {
                setRefreshing(false);  // Kết thúc trạng thái refresh
            });
        
        console.log("Reload")
    }

    const ItemView = ({index, item}) => {
        return (
            <Text style={styles.itemStyle}>
                {index}. {item.title}
            </Text>
        )
    }

    const ItemSeparatorView = () => {
        return (
            <View style={{width: '100%', height: 0.5, backgroundColor: '#c8c8c8'}}>

            </View>
        )
    }

    const ListEmptyView = () => {
        return (
            <Text style={styles.listEmptyView}>
                No data found
            </Text>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {
                isLoading ? (<ActivityIndicator style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} color="#00ff00" />) : <View style={styles.container}>
                    <FlatList 
                        data={dataSource} 
                        keyExtractor={(item, index) => index.toString()} // keyExtractor: Phân biệt mỗi item trong danh sách 
                        renderItem={ItemView} // này để render ra từng item
                        ItemSeparatorComponent={ItemSeparatorView} // là view ngăn cách giữa các component
                        refreshControl={
                            <RefreshControl 
                                // sử dụng cho Pull to refresh
                                refreshing={refreshing}
                                onRefresh={onRefresh}
                                colors={['#ff0000', '#00ff00', '#0000ff']} // chỉ trên Android
                                tintColor="#ff0000" // chỉ trên iOS - nhược điểm chỉ được 1 màu
                            />
                        }
                        ListEmptyComponent={ListEmptyView}
                    />
                </View>
            }

        </SafeAreaView>
    )
}

export default PullToRefreshFlatList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 10,
    },
    itemStyle: {
        fontSize: 20,
        padding: 10
    }, 
    listEmptyView: {
        fontSize: 20,
        textAlign: 'center'
    }
})