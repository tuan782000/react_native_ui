import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    ScrollView,
    Dimensions
} from 'react-native';
import React, { useEffect, useState, useRef } from 'react';

// Lấy ra chiều rộng của màn hình điện thoại hiện tại
const { width } = Dimensions.get('window');

const PictureList = () => {
    // 3. quản lý state
    const [imageList, setImageList] = useState([]);
    // lấy chiều rộng
    const screenWidth = width;

    const [currentImage, setCurrentImage] = useState(0);

    // khai báo 1 biến toàn cục
    const stepCarousel: any = useRef(null);

    useEffect(() => {
        // 1. call api
        const data: any = [
            {
                uri: 'https://plus.unsplash.com/premium_photo-1666353535582-9268ce1a981c?q=80&w=3580&auto=format&fit=crop',
                name: 'Pizza'
            },
            {
                uri: 'https://images.unsplash.com/photo-1673006768485-3b590a2fa8fb?q=80&w=3365&auto=format&fit=crop',
                name: 'Salad'
            },
            {
                uri: 'https://plus.unsplash.com/premium_photo-1695582868702-5b0f91584d00?q=80&w=3540&auto=format&fit=crop',
                name: 'Soup'
            },
            {
                uri: 'https://plus.unsplash.com/premium_photo-1686538381343-ff6de76c8712?q=80&w=3542&auto=format&fit=crop',
                name: 'Fry'
            },
            {
                uri: 'https://plus.unsplash.com/premium_photo-1661310032863-0488bf177c54?q=80&w=3540&auto=format&fit=crop',
                name: 'BBQ'
            },
            {
                uri: 'https://plus.unsplash.com/premium_photo-1674147611212-4d7ede62638c?q=80&w=3540&auto=format&fit=crop',
                name: 'Meat'
            }
        ];
        // 2. cập nhật dữ liệu
        setImageList(data);
    }, []);

    // khi mà function được gọi sẽ có 1 e được truyền vào
    // trong e có rất nhiều thứ - chẳng hạn việc người dùng đang scroll đến vị trí nào
    const handleScroll = (e: any) => {
        // không có truyền e này thì return ngay lập tức
        if (!e) {
            return;
        }

        // có thông tin
        // đang destruc nativeEvent từ e ra
        const { nativeEvent } = e;
        if (nativeEvent && nativeEvent.contentOffset) {
            const currentOffset = nativeEvent.contentOffset.x; // khi mà scroll theo chiều ngang x sẽ thay đổi - mình cần có 1 biến lưu trị thay đổi đó, phục vụ cho các tính năng tiếp theo
            let imageIndex = 0; // đặt index đầu tiên sẽ tại vị trí 0
            // console.log(
            //     'SCREEN WITH: ',
            //     screenWidth,
            //     '--OFFSET:',
            //     currentOffset
            // );

            // dựa vào các thông tin này để + index lên
            if (nativeEvent.contentOffset.x > 0) {
                imageIndex = Math.floor(
                    (nativeEvent.contentOffset.x + screenWidth / 2) /
                        screenWidth
                ); // (screenWidth / 2): là nữa màn hình
            }

            // console.log(imageIndex);
            setCurrentImage(imageIndex);
        }
    };

    // sau khi có data - chạy tự động
    useEffect(() => {
        if (imageList.length > 0) {
            let index = 0;
            setInterval(() => {
                stepCarousel.current.scrollTo({
                    x: index * screenWidth,
                    y: 0,
                    animated: true
                });
                index += 1;

                if (index === imageList.length) {
                    index = 0;
                }
            }, 3000);
        }
    }, [imageList]);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ alignItems: 'center', marginVertical: 10 }}>
                <Text style={{ fontSize: 20 }}>Picture List</Text>
            </View>
            <View style={{ height: 200, position: 'relative' }}>
                {/* ScrollView về cơ bản là cuộn dọc - muốn scroll ngang - thì cho nó thuộc tính horizontal */}
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false} // giấu thanh cuộn đi
                    contentContainerStyle={{
                        height: 200
                    }}
                    pagingEnabled // thuộc tính này giúp kéo hình qua nữa trang thì tự lướt
                    onScroll={handleScroll} // nhận biết hành động scroll từ người dùng
                    // onScroll nhận vào 1 hàm - onScroll={() => {}} hoặc onScroll={handleScroll}
                    ref={stepCarousel}
                >
                    {imageList.map((e: any, index) => (
                        <View
                            key={index}
                            style={{ width: screenWidth, alignItems: 'center' }}
                        >
                            <Image
                                source={{ uri: e.uri }}
                                style={{
                                    width: screenWidth * 0.9, // 90% of the screen width
                                    height: '100%',
                                    borderRadius: 10
                                }}
                                resizeMode='cover'
                            />
                            <Text
                                style={{
                                    position: 'absolute',
                                    bottom: 10,
                                    fontSize: 16,
                                    color: 'white',
                                    fontWeight: 'bold'
                                }}
                            >
                                {e.name}
                            </Text>
                        </View>
                    ))}
                </ScrollView>
                {/* Dot Indicators */}
                <View
                    style={{
                        flexDirection: 'row',
                        position: 'absolute',
                        bottom: -10,
                        alignSelf: 'center'
                    }}
                >
                    {imageList.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.dot,
                                currentImage === index && styles.activeDot
                            ]}
                        />
                    ))}
                </View>
            </View>
        </SafeAreaView>
    );
};

export default PictureList;

const styles = StyleSheet.create({
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#888',
        margin: 5
    },
    activeDot: {
        backgroundColor: 'lightblue'
    }
});
