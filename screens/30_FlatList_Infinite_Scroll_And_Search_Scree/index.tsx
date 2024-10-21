import { ActivityIndicator, FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { InputComponent } from '../../components'
import AntDesign from 'react-native-vector-icons/AntDesign'

const FlatListInfiniteScrollSearch = () => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // // Quản lý giá trị tìm kiếm
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState<any[]>([]);

  const useDebounce = (value: string, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      // Cleanup timeout nếu người dùng tiếp tục nhập trước khi hết delay
      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);

    return debouncedValue;
  };

  // Sử dụng debounced value với 500ms delay
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    getListData()
  }, [currentPage]);

  // useEffect(() => {
  //   if (searchTerm) {
  //     const filtered = data.filter(item =>
  //       // item.title.toLowerCase().includes(searchTerm.toLowerCase())
  //       item.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())

  //     );
  //     setFilteredData(filtered);
  //   } else {
  //     setFilteredData(data); // Hiển thị toàn bộ dữ liệu nếu không có tìm kiếm
  //   }
  // }, [searchTerm, data]);

  useEffect(() => {
    const filtered = debouncedSearchTerm
      ? data.filter(item =>
        item.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      )
      : data; // Hiển thị toàn bộ dữ liệu nếu không có tìm kiếm
    setFilteredData(filtered);
  }, [debouncedSearchTerm, data]);

  const getListData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20&_page=${currentPage}`);
      const resJson = await response.json();
      // Kiểm tra nếu resJson không phải là mảng, chuyển thành mảng rỗng
      if (Array.isArray(resJson)) {
        setData((prevData) => [...prevData, ...resJson]);
      } else {
        setIsLoading(false)
        console.log('Invalid response format, expected an array.');
        setData([]); // hoặc giữ nguyên data nếu bạn không muốn reset nó về rỗng
      }
    } catch (error) {
      console.log('Something went wrong calling API', error);
    } finally {
      setIsLoading(false);
    }
  };


  const renderItem = ({ index, item }: any) => {
    return (
      <View style={{ flexDirection: 'row', gap: 10, marginBottom: 10, marginTop: 10 }}>
        <Image style={{ width: 100, height: 100 }} source={{ uri: item.url }} resizeMode='contain' />
        <Text style={{ flex: 1 }}>
          {item.title}
        </Text>
      </View>
    )
  }

  const ListHeaderView = () => {
    return (
      <View style={{ flex: 1 }}>
        <InputComponent
          value={searchTerm}
          onChangeText={setSearchTerm}
          placeholder="Search..."
          allowClear={<AntDesign name='close' size={20} style={{ paddingRight: 10, paddingLeft: 5 }} />}
          autoCapitalize='none'
          viewStyle={{
            borderWidth: 1,
            borderRadius: 10,
            minHeight: 54,
            flexDirection: 'row',
            // justifyContent: 'center',
            alignItems: 'center',
          }}
          styleInput={{
            borderWidth: 0,
            minHeight: 54,
            flex: 1
          }}
        />
      </View>
    )
  }

  const ListEmptyView = () => {
    return (
      <View style={styles.container}>
        <Text>
          No data found
        </Text>
      </View>
    )
  }

  const ItemSeparatorView = () => {
    return (
      <View style={{ width: '100%', height: 0.5, backgroundColor: '#c8c8c8' }} />
    )
  }

  const renderLoader = () => {
    return isLoading ? (<View style={{ marginVertical: 16, alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#aaa" />
    </View>) : null



  }

  const loadMoreItem = () => {
    // console.log("Load more items")
    setCurrentPage(currentPage + 1)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <View style={styles.container}>
            <Text>Hello</Text>
        </View> */}
      {/* {
        isLoading ? (<ActivityIndicator style={styles.container} />) : (
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item: any) => `key-${item.id}`}
            ItemSeparatorComponent={ItemSeparatorView}
            ListHeaderComponent={ListHeaderView}
            ListEmptyComponent={ListEmptyView}
            ListFooterComponent={renderLoader}
            showsVerticalScrollIndicator={false}
            onEndReached={loadMoreItem}
            onEndReachedThreshold={0}
          />
        )
      } */}
      <View style={{ flex: 1, paddingHorizontal: 24 }}>
        <FlatList
          // data={data}
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={(item: any) => `key-${item.id}`}
          ItemSeparatorComponent={ItemSeparatorView}
          ListHeaderComponent={ListHeaderView}
          ListEmptyComponent={!isLoading ? ListEmptyView : null}
          ListFooterComponent={renderLoader}
          showsVerticalScrollIndicator={false}
          onEndReached={loadMoreItem}
          onEndReachedThreshold={0.5}
        />
      </View>
    </SafeAreaView>
  )
}

export default FlatListInfiniteScrollSearch

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})