import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker';

const DateTimePickerScreen = () => {
    const [openDatePicker, setOpenDatePicker] = useState(false); // kiểm soát trạng thái đóng mở modal DateTimePicker
    const [openTimePicker, setOpenTimePicker] = useState(false); // kiểm soát trạng thái đóng mở modal DateTimePicker
    const [date, setDate] = useState<any>(new Date()); // cập nhật lại value date
    const [time, setTime] = useState<any>(new Date()); // cập nhật lại value date
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, borderWidth: 2, justifyContent: 'center' }}>
                {/* <Text>Date Time Picker Screen</Text> */}
                {/* Date picker */}
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'green',
                        flexDirection: 'row',
                        alignItems: 'center',
                        // justifyContent: 'center',
                        paddingLeft: 20
                    }}
                >
                    <Text style={{ fontSize: 20 }}>Date: </Text>
                    <TouchableOpacity
                        onPress={() => setOpenDatePicker(!openDatePicker)}
                    >
                        <Text style={{ fontSize: 20 }}>
                            {/* {date.toISOString()} */}
                            {`${date.getDate()} - ${
                                date.getMonth() + 1
                            } - ${date.getFullYear()}`}
                        </Text>
                    </TouchableOpacity>
                    <DatePicker
                        modal
                        mode='date'
                        open={openDatePicker}
                        date={new Date()}
                        onConfirm={newDate => {
                            console.log('New Date', newDate);
                            setOpenDatePicker(false);
                            setDate(newDate);
                        }}
                        onCancel={() => {
                            setOpenDatePicker(false);
                        }}
                    />
                </View>
                {/* Time picker */}
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'coral',
                        flexDirection: 'row',
                        alignItems: 'center',
                        // justifyContent: 'center',
                        paddingLeft: 20
                    }}
                >
                    <Text style={{ fontSize: 20 }}>Time: </Text>
                    <TouchableOpacity
                        onPress={() => setOpenTimePicker(!openTimePicker)}
                    >
                        <Text
                            style={{ fontSize: 20 }}
                        >{`${time.getHours()} : ${time.getMinutes()}`}</Text>
                    </TouchableOpacity>
                    <DatePicker
                        modal
                        mode='time'
                        open={openTimePicker}
                        date={new Date()}
                        onConfirm={newTime => {
                            console.log('New Time', newTime);
                            setOpenTimePicker(false);
                            setTime(newTime);
                        }}
                        onCancel={() => {
                            console.log('Cancel time');
                            setOpenTimePicker(false);
                        }}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default DateTimePickerScreen;

const styles = StyleSheet.create({});
