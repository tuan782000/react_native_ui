import { SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, View, Dimensions } from 'react-native'
import React, { useMemo, useRef, useState } from 'react'
import moment from 'moment'
import Swiper from 'react-native-swiper'

const { width } = Dimensions.get('screen')

const SimpleCalendarDatePicker = () => {
    const swiper = useRef<Swiper | null>(null) // swiper: Sử dụng useRef để tạo tham chiếu đến component Swiper. Tham chiếu này được dùng để điều khiển vị trí của Swiper một cách lập trình.
    const [value, setValue] = useState(new Date()) // value: Đây là state lưu trữ ngày hiện tại được chọn bởi người dùng.
    const [week, setWeek] = useState(0) // week: State này lưu tuần hiện tại, có thể thay đổi khi người dùng cuộn qua các tuần.
    
    // useMemo: Giúp tối ưu hóa hiệu năng bằng cách tính toán lại danh sách các ngày trong tuần chỉ khi week thay đổi.
    const weeks = useMemo(() => {
        // start: Lấy ngày bắt đầu của tuần hiện tại bằng cách thêm số tuần week vào ngày hiện tại và sau đó bắt đầu tính từ đầu tuần.
        const start = moment().add(week, 'weeks').startOf('week')
        return [-1, 0, 1].map(adj => {
            return Array.from({ length: 7 }).map((_, index) => {
                // adj: Duyệt qua ba tuần: tuần trước (-1), tuần hiện tại (0), và tuần sau (1).
                const date = moment(start).add(adj, 'week').add(index, 'day') // date.format('ddd'): Trả về ngày trong tuần dưới dạng chữ viết tắt (VD: “Mon”, “Tue”).
                return {
                    weekday: date.format('ddd'),
                    date: date.toDate(),
                }
                // Kết quả là bạn sẽ nhận được mảng các tuần, mỗi tuần bao gồm 7 ngày.
            })
        })
    }, [week])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Your Schedule</Text>
                </View>
                <View style={styles.picker}>
                    <Swiper index={1} 
                        ref={swiper} 
                        showsPagination={false} 
                        loop={false} 
                        onIndexChanged={ind => {
                            if (ind === 1) {
                            return
                            }
                            setTimeout(() => {
                            const newIndex = ind - 1
                            const newWeek = week + newIndex
                            setWeek(newWeek)
                            setValue(moment(value).add(newIndex, 'week').toDate())
                            swiper.current?.scrollTo(1, false)
                            }, 100)
                        }}
                      >
                        {
                            weeks.map((dates, index) => {
                                return (
                                    <View style={[styles.itemRow, { paddingHorizontal: 16 }]} key={index}>
                                        {dates.map((item, dateIndex) => {
                                            const isActive = value.toDateString() === item.date.toDateString()
                                            return (
                                                <TouchableWithoutFeedback key={dateIndex} onPress={() => setValue(item.date)}>
                                                    <View style={[styles.item, isActive && {
                                                        backgroundColor: '#111',
                                                        borderColor: '#111'
                                                    }]}>
                                                        <Text style={[styles.itemWeekDay, isActive && { color: '#fff' }]}>{item.weekday}</Text>
                                                        <Text style={[styles.itemDate, isActive && { color: '#fff' }]}>{item.date.getDate()}</Text>
                                                    </View>
                                                </TouchableWithoutFeedback>
                                            )
                                        })}
                                    </View>
                                )
                            })
                        }
                    </Swiper>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SimpleCalendarDatePicker

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 24,
    },
    header: {
        paddingHorizontal: 16
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        color: '#1d1d1d',
        marginBottom: 12
    },
    picker: {
        flex: 1,
        maxHeight: 74,
        paddingVertical: 12,
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemRow: {
        width: width,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginHorizontal: -4
    },
    item: {
        flex: 1,
        height: 50,
        marginHorizontal: 4,
        paddingVertical: 6,
        paddingHorizontal: 4,
        borderWidth: 1,
        borderColor: '#e3e3e3',
        borderRadius: 8,
        alignItems: 'center',
        flexDirection: 'column'
    },
    itemWeekDay: {
        fontSize: 13,
        fontWeight: '500',
        color: '#737373',
        marginBottom: 4,
    },
    itemDate: {
        fontSize: 15,
        fontWeight: '600',
        color: '#111'
    }
})