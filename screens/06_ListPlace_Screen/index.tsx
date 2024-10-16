import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import FeatherIcon from 'react-native-vector-icons/Feather';
import React, { useState } from 'react';

// Định nghĩa interface cho Place
interface Place {
  id: number;
  img: string;
  name: string;
  dates: string;
  price: number;
  rating: number;
  reviews: number;
}

const places: Place[] = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    name: 'Marbella, Spain',
    dates: 'Apr 23 - May 5',
    price: 200,
    rating: 4.45,
    reviews: 124,
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    name: 'Baveno, Italy',
    dates: 'Apr 25 - May 5',
    price: 320,
    rating: 4.81,
    reviews: 409,
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    name: 'Tucson, Arizona',
    dates: 'Apr 22 - May 4',
    price: 695,
    rating: 4.3,
    reviews: 72,
  },
];

const ListPlaceScreen = () => {
  const [favourites, setFavourites] = useState<number[]>([]); // Mảng các id đã được yêu thích

  // Hàm xử lý yêu thích
  const handleFavouriteToggle = (id: number) => {
    setFavourites((prevFavourites) => {
      // Nếu id đã có trong danh sách favourites, xóa khỏi danh sách
      if (prevFavourites.includes(id)) {
        return prevFavourites.filter((favId) => favId !== id); 
        // trả về 1 mảng mới không có phần tử nào === id
      }
      // Nếu id chưa có trong danh sách, thêm vào danh sách
      return [...prevFavourites, id];
    });
  };

  console.log(favourites)

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f2f2f2' }}>
      <View
        style={{
          paddingHorizontal: 24,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <Text style={{ fontSize: 28, fontWeight: '700' }}>Places to stay</Text>
        <TouchableOpacity onPress={() => {}}>
          <FeatherIcon color="#000" name="sliders" size={21} />
        </TouchableOpacity>
      </View>
      <ScrollView style={{ flex: 1, paddingHorizontal: 24 }}>
        {/* <View style={{ paddingHorizontal: 24 }}> */}
          {places.map(({ id, img, name, dates, price, rating, reviews }) => (
            <TouchableOpacity
              onPress={() => console.log(id)}
              activeOpacity={0.9}
              key={id}
              style={{
                position: 'relative',
                borderRadius: 8,
                backgroundColor: '#fff',
                marginBottom: 16,
                shadowColor: 'rgba(0, 0, 0, 0.5)', // bóng màu đen có độ trong suốt 50%
                shadowOffset: { // Xác định khoảng cách mà bóng sẽ dịch chuyển so với thành phần.
                    width: 0, // Bóng không dịch chuyển theo chiều ngang (x).
                    height: 1, // Bóng dịch chuyển xuống dưới 1 đơn vị theo chiều dọc (y).
                },
                shadowOpacity: 0.2, // Điều chỉnh độ mờ (opacity) của bóng. // Giá trị 0.2 cho thấy bóng sẽ có độ mờ 20%, tức là bóng sẽ rất mờ và không rõ nét.
                shadowRadius: 1.41, // Xác định độ mềm mại của bóng (bóng có lan tỏa rộng hay gắt). Giá trị 1.41 cho bóng mềm, hơi lan tỏa ra khỏi thành phần.
                elevation: 2, // Ở đây, elevation: 2 tạo một bóng nhỏ và gần thành phần.                      
              }}>
              <TouchableOpacity
                onPress={() => handleFavouriteToggle(id)}
                style={{
                  position: 'absolute',
                  width: 40,
                  height: 40,
                  backgroundColor: '#fff',
                  top: 10,
                  right: 10,
                  zIndex: 1000,
                  borderRadius: 999,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                activeOpacity={0.9}>
                <FontAwesome
                  name="heart"
                  size={20}
                  color={favourites.includes(id) ? '#ea266d' : '#222'}
                  solid={favourites.includes(id)}
                />
              </TouchableOpacity>
              <Image
                source={{ uri: img }}
                style={{ width: '100%', height: 160, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
              />
              <View style={{ paddingHorizontal: 10, paddingVertical: 14 }}>
                <View
                  style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                  <Text style={{ fontWeight: '600', fontSize: 16 }}>{name}</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 6 }}>
                      <FontAwesome color="#ea266d" name="star" solid={true} size={12} />
                      <Text style={{ fontWeight: '600' }}>{rating}</Text>
                    </View>
                    <Text style={{ fontSize: 12, color: '#232425' }}>({reviews} reviews)</Text>
                  </View>
                </View>
                <Text style={{ marginBottom: 10, color: '#232425' }}>{dates}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ fontWeight: '700' }}>${price}</Text>
                  <Text> / night</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        {/* </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListPlaceScreen;

const styles = StyleSheet.create({});