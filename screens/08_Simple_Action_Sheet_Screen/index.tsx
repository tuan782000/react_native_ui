import React, { useCallback, useRef, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, LayoutChangeEvent, Dimensions } from 'react-native';
import BottomSheet, { BottomSheetView, BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import FeatherIcon from 'react-native-vector-icons/Feather';

const SimpleActionSheetScreen = () => {
    const [isVisible, setIsVisible] = useState(false); // quản lý trạng thái đóng mở
    const sheetRef = useRef<BottomSheet>(null);
    //const [snapPoints, setSnapPoints] = useState<string[]>(['50%']); // Giá trị mặc định
    const [snapPoints, setSnapPoints] = useState<string[]>([]); // Bắt đầu với mảng rỗng, sau đó tính toán
    const { height: screenHeight } = Dimensions.get('window'); // Lấy chiều cao màn hình

    // Xử lý sự kiện khi bấm mở BottomSheet
    const handleSnapPress = useCallback(() => {
        sheetRef.current?.snapToIndex(0);
        setIsVisible(true);
    }, []);

    // Xử lý sự kiện đóng BottomSheet
    const handleClosePress = useCallback(() => {
        sheetRef.current?.close();
        setIsVisible(false);
    }, []);

    // Tính toán chiều cao nội dung của BottomSheet và cập nhật snap points
    const onContentLayout = useCallback((event: LayoutChangeEvent) => {
        const { height } = event.nativeEvent.layout; // Lấy chiều cao của nội dung

        // Tính tỷ lệ phần trăm chiều cao nội dung so với chiều cao màn hình
        const contentHeightPercentage = (height / screenHeight) * 100;

        // Chuyển đổi thành chuỗi snap point phù hợp, ví dụ: '30%'
        setSnapPoints([`${contentHeightPercentage.toFixed(2)}%`]);
    }, [screenHeight]);

    console.log(snapPoints)

    // Custom backdrop
    const renderBackdrop = useCallback(
        (props: any) => (
            <BottomSheetBackdrop
                {...props}
                disappearsOnIndex={-1}
                appearsOnIndex={0}
                opacity={0.5} // Độ mờ của nền
                pressBehavior="close" // Nhấn vào backdrop để đóng
            />
        ),
        []
    );

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={handleSnapPress} style={styles.button}>
                <Text style={styles.buttonText}>Bottom Sheet</Text>
            </TouchableOpacity>

            {isVisible && (
                <BottomSheet
                    ref={sheetRef}
                    snapPoints={snapPoints} // Snap points tính toán theo nội dung
                    enablePanDownToClose={true} // Cho phép đóng bằng cách vuốt hoặc nhấn bên ngoài
                    backdropComponent={renderBackdrop} // Tạo nền mờ
                    index={0}
                    handleComponent={null} // muốn có thanh ngang nhỏ ngỏ trên icon - thì bỏ đoạn code này đi
                >
                    <BottomSheetView style={styles.sheetContent} onLayout={onContentLayout}>
                        <FeatherIcon
                            color="#2b64e3"
                            name="shield"
                            style={{
                                alignSelf: 'center',
                                marginTop: 10
                            }}
                            size={48} />
                        <Text style={styles.title}>Secure your account</Text>
                        <Text style={styles.message}>
                            Enabling 2FA adds an extra layer of security to your account by
                            requiring you to enter a one-time code in addition to your password
                            when you sign in.
                        </Text>
                        <TouchableOpacity onPress={() => { }} style={styles.confirmButton}>
                            <Text style={styles.confirmButtonText}>Confirm</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleClosePress} style={styles.cancelButton}>
                            <Text style={styles.cancelButtonText}>Cancel</Text>
                        </TouchableOpacity>
                        {/* <View style={{height: 40}}/> */}
                    </BottomSheetView>
                </BottomSheet>
            )}
        </SafeAreaView>
    );
}

export default SimpleActionSheetScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e3e3e3',
    },
    button: {
        marginHorizontal: 24,
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 54,
        backgroundColor: '#000',
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
    },
    sheetContent: {
        paddingHorizontal: 24,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#181818',
        marginTop: 16,
        textAlign: 'center',
    },
    message: {
        fontSize: 14,
        color: '#555',
        marginTop: 16,
        marginBottom: 32,
        textAlign: 'center',
    },
    confirmButton: {
        backgroundColor: '#2b64e3',
        paddingVertical: 20,
        marginBottom: 20,
        borderRadius: 10,
        minHeight: 54
    },
    confirmButtonText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: '600',
    },
    cancelButton: {
        paddingVertical: 20,
        marginBottom: 60,
        // backgroundColor: 'coral',
        minHeight: 54
    },
    cancelButtonText: {
        textAlign: 'center',
        color: '#2b64e3',
    },
});