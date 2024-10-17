import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, Animated, TouchableOpacity, Image } from 'react-native'
import React, { useRef } from 'react'
import FeatherIcon from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'

const items = [
    {
        img: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
        name: 'Dubai',
        airport: 'DXB',
        departure: '2022-10-10',
        arrival: '2023-04-01',
        price: 966,
    },
    {
        img: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
        name: 'Italy',
        airport: 'VCE',
        departure: '2022-10-10',
        arrival: '2023-04-01',
        price: 652,
    },
    {
        img: 'https://images.unsplash.com/photo-1623536167776-922ccb1ff749?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=544&q=80',
        name: 'Bosnia',
        airport: 'BNX',
        departure: '2022-10-10',
        arrival: '2023-04-01',
        price: 566,
    },
    {
        img: 'https://images.unsplash.com/photo-1554939437-ecc492c67b78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
        name: 'Spain',
        airport: 'BCN',
        departure: '2022-10-10',
        arrival: '2023-04-01',
        price: 602,
    },
];


const AnimatedPageHeaderScreen = () => {
    const scrollY = useRef(new Animated.Value(0)).current
    // scrollY là một giá trị thuộc Animated.Value, được sử dụng để theo dõi tọa độ Y của việc cuộn (scroll) dọc theo màn hình.
    // Mỗi khi người dùng cuộn lên hoặc cuộn xuống, giá trị này sẽ thay đổi.
    // useRef được sử dụng để tạo giá trị không thay đổi trong suốt vòng đời của component. useRef(new Animated.Value(0)) sẽ lưu trữ giá trị scrollY khởi tạo ban đầu là 0 (tức là không cuộn gì).

    const translateHeader = scrollY.interpolate({
        inputRange: [0, 80],
        outputRange: [0, -80],
        extrapolate: 'clamp',
    });
    /*
            translateHeader là một giá trị interpolate dùng để dịch chuyển (translate) phần header dọc theo trục Y khi người dùng cuộn.
        
        interpolate là một phương pháp dùng để tính toán giá trị mới dựa trên một khoảng giá trị đầu vào (inputRange) và khoảng giá trị đầu ra (outputRange).
	
        inputRange: [0, 80]: Khi cuộn từ vị trí Y = 0 đến Y = 80.
	
        outputRange: [0, -80]: Tương ứng, phần header sẽ dịch chuyển từ Y = 0 đến Y = -80.
	
        Điều này có nghĩa là khi bạn cuộn 80 pixel trên màn hình, header sẽ bị dịch chuyển lên 80 pixel để ẩn dần ra khỏi màn hình.
	
        extrapolate: 'clamp': Đảm bảo giá trị không vượt ra ngoài khoảng giá trị đã định, tức là nếu cuộn quá 80 pixel, header không dịch chuyển thêm mà dừng lại ở giá trị -80.
    */
    const opacityTitle = scrollY.interpolate({
        inputRange: [0, 50],
        outputRange: [1, 0],
        extrapolate: 'clamp',
    });

    /*
          opacityTitle dùng để điều chỉnh độ mờ (opacity) của tiêu đề “Cheap flights to anyWhere” khi cuộn.
      
      inputRange: [0, 50]: Khi cuộn từ 0 đến 50 pixel.
	
      outputRange: [1, 0]: Độ mờ của tiêu đề thay đổi từ 1 (hoàn toàn rõ) đến 0 (hoàn toàn mờ).
	
      Khi bạn cuộn 50 pixel trở lên, tiêu đề sẽ mờ dần và biến mất.
	
      extrapolate: 'clamp': Đảm bảo độ mờ không vượt quá khoảng từ 1 đến 0, nghĩa là nó không mờ thêm khi cuộn quá 50 pixel.
    */

    const translateTitle = scrollY.interpolate({
        inputRange: [0, 80],
        outputRange: [0, 40],
        extrapolate: 'clamp',
    });
    /*
      translateTitle dùng để di chuyển tiêu đề dọc theo trục Y khi cuộn.
	
      inputRange: [0, 80]: Khi cuộn từ 0 đến 80 pixel.
	
      outputRange: [0, 40]: Tiêu đề sẽ được dịch chuyển 40 pixel xuống dưới khi cuộn đến 80 pixel.
	
      Hiệu ứng này làm cho tiêu đề không chỉ mờ dần mà còn di chuyển xuống phía dưới, tạo cảm giác tự nhiên hơn khi cuộn.
    */

    return (
        <View style={{ backgroundColor: '#05141c' }}>
            <Animated.View
                style={[
                    styles.header,
                    { transform: [{ translateY: translateHeader }] }]}
            >
                <Animated.Text style={[
                    styles.headerTitle,
                    { opacity: opacityTitle },
                    { transform: [{ translateY: translateTitle }] }
                ]}>
                    Cheap flights {"\n"} to anyWhere
                </Animated.Text>
                <View style={styles.inputWrapper}>
                    <TextInput
                        placeholder='Where are you going?'
                        placeholderTextColor="#05141c"
                        style={styles.input}
                        autoCapitalize='none'
                    />
                    <View style={styles.inputIcon}>
                        <FeatherIcon name='search' size={16} color='#05141c' />
                    </View>
                </View>
            </Animated.View>

            {/* 
            Animated.ScrollView là một phiên bản của ScrollView có hỗ trợ Animated để theo dõi và cập nhật giá trị cuộn trong thời gian thực.

            onScroll: Lắng nghe sự kiện cuộn và cập nhật giá trị scrollY dựa trên contentOffset.y (vị trí cuộn theo trục Y).

            useNativeDriver: true: Sử dụng native driver để tăng hiệu suất và giảm lag khi cuộn, bởi vì các hiệu ứng sẽ được thực hiện trên native thread thay vì JavaScript thread.
        
            scrollEventThrottle={1}: Cấu hình tốc độ bắt sự kiện cuộn, giá trị 1 sẽ đảm bảo sự kiện được bắt liên tục và mượt mà.
        */}
            <Animated.ScrollView
                contentContainerStyle={styles.content}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    {
                        useNativeDriver: true,
                    },
                )}
                scrollEventThrottle={1}
            >
                {/* <View style={styles.placeholder}>
                <View style={styles.placeholderInset}></View>
            </View> */}
                {items.map(
                    ({ img, name, airport, departure, arrival, price }, index) => {
                        return (
                            <View key={index}>
                                <TouchableOpacity
                                    onPress={() => {
                                        // handle onPress
                                    }}
                                    style={{ marginBottom: 10, marginTop: 10 }}
                                    activeOpacity={0.7}
                                >
                                    <View style={styles.card}>
                                        <Image
                                            alt=""
                                            resizeMode="cover"
                                            source={{ uri: img }}
                                            style={styles.cardImg} />
                                        <View style={styles.cardBody}>
                                            <Text>
                                                <Text style={styles.cardTitle}>{name}</Text>{' '}
                                                <Text style={styles.cardAirport}>{airport}</Text>
                                            </Text>
                                            <View style={styles.cardRow}>
                                                <View style={styles.cardRowItem}>
                                                    <FontAwesome
                                                        color="#6f61c4"
                                                        name="plane-departure"
                                                        size={10} />
                                                    <Text style={styles.cardRowItemText}>
                                                        {new Date(departure).toLocaleDateString('en-US', {
                                                            day: 'numeric',
                                                            month: 'short',
                                                            year: 'numeric',
                                                        })}
                                                    </Text>
                                                </View>
                                                <View style={styles.cardRowItem}>
                                                    <FontAwesome
                                                        color="#6f61c4"
                                                        name="plane-arrival"
                                                        size={10} />
                                                    <Text style={styles.cardRowItemText}>
                                                        {new Date(arrival).toLocaleDateString('en-US', {
                                                            day: 'numeric',
                                                            month: 'short',
                                                            year: 'numeric',
                                                        })}
                                                    </Text>
                                                </View>
                                            </View>
                                            <Text style={styles.cardPrice}>
                                                <Text>from </Text>
                                                <Text style={styles.cardPriceValue}>
                                                    ${price.toLocaleString('en-US')}{' '}
                                                </Text>
                                                <Text style={styles.cardPriceCurrency}>USD</Text>
                                            </Text>
                                            <TouchableOpacity
                                                onPress={() => {
                                                    // handle onPress
                                                }}>
                                                <View style={styles.btn}>
                                                    <Text style={styles.btnText}>Book now</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        );
                    },
                )}

            </Animated.ScrollView>
        </View>
    )
}

export default AnimatedPageHeaderScreen

const styles = StyleSheet.create({
    header: {
        height: 200,
        position: 'absolute',
        width: '100%',
        zIndex: 1,
        paddingHorizontal: 24,
        paddingVertical: 12,
        alignItems: 'stretch',
        justifyContent: 'flex-end',
        backgroundColor: '#05141c'
    },
    headerTitle: {
        fontSize: 26,
        lineHeight: 36,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 12,
        textAlign: 'center'
    },
    inputWrapper: {
        position: 'relative',
        width: '100%'
    },
    input: {
        minHeight: 54,
        backgroundColor: '#fff',
        paddingLeft: 44,
        paddingRight: 24,
        borderRadius: 12,
        fontSize: 15,
        fontWeight: '500',
        color: '#222'
    },
    inputIcon: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: 54,
        height: 54,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        padding: 24,
        backgroundColor: '#fff',
        paddingTop: 212
    },
    placeholder: {
        flex: 1,
        padding: 24,
        // height: 1000
    },
    placeholderInset: {
        borderWidth: 4,
        borderColor: '#e5e7ef',
        borderStyle: 'dashed',
        borderRadius: 9,
        flex: 1
    },


    /** Card */
    card: {
        flexDirection: 'row',
        alignItems: 'stretch',
        borderRadius: 12,
        marginBottom: 16,
        backgroundColor: '#fff',
        shadowColor: 'rgba(0, 0, 0, 0.5)', // bóng màu đen có độ trong suốt 50%
        shadowOffset: { // Xác định khoảng cách mà bóng sẽ dịch chuyển so với thành phần.
            width: 0, // Bóng không dịch chuyển theo chiều ngang (x).
            height: 1, // Bóng dịch chuyển xuống dưới 1 đơn vị theo chiều dọc (y).
        },
        shadowOpacity: 0.2, // Điều chỉnh độ mờ (opacity) của bóng. // Giá trị 0.2 cho thấy bóng sẽ có độ mờ 20%, tức là bóng sẽ rất mờ và không rõ nét.
        shadowRadius: 10, // Xác định độ mềm mại của bóng (bóng có lan tỏa rộng hay gắt). Giá trị 1.41 cho bóng mềm, hơi lan tỏa ra khỏi thành phần.
        elevation: 2, // Ở đây, elevation: 2 tạo một bóng nhỏ và gần thành phần.  
    },
    cardImg: {
        width: 120,
        height: 154,
        borderRadius: 12,
    },
    cardBody: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    cardTitle: {
        fontSize: 22,
        fontWeight: '700',
        color: '#173153',
        marginRight: 8,
    },
    cardAirport: {
        fontSize: 13,
        fontWeight: '600',
        color: '#5f697d',
    },
    cardRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: -8,
        flexWrap: 'wrap',
    },
    cardRowItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 6,
    },
    cardRowItemText: {
        marginLeft: 4,
        fontSize: 12,
        fontWeight: '500',
        color: '#5f697d',
    },
    cardPrice: {
        fontSize: 13,
        fontWeight: '500',
        color: '#5f697d',
    },
    cardPriceValue: {
        fontSize: 21,
        fontWeight: '700',
        color: '#173153',
    },
    cardPriceCurrency: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#6f61c4',
    },
    /** Button */
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        paddingVertical: 6,
        paddingHorizontal: 14,
        borderWidth: 1,
        backgroundColor: '#173153',
        borderColor: '#173153',
    },
    btnText: {
        fontSize: 13,
        lineHeight: 18,
        fontWeight: '600',
        color: '#fff',
    },

})