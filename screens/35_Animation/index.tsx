import { Animated, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { Easing } from 'react-native-reanimated';

const Animate = () => {
    const topMotion = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(topMotion, {
            toValue: 600,
            duration: 2000,
            useNativeDriver: false

            // 1. di chuyển tịnh tuyến đều
            // easing: Easing.linear

            // 2. di chuyển ban đầu chậm, tăng dần về phía sau.
            // easing: Easing.ease
            // easing: Easing.quad
            // easing: Easing.cubic
            // easing: Easing.poly(4)
            // easing: Easing.sin
            // easing: Easing.circle

            // 3. Lùi lại 1 chút rồi di chuyển tới
            // easing: Easing.back(0.8)

            // 4. Di chuyển với vận tốc thay đổi.
            // easing: Easing.bezier(0.08, 0.79, 0.85, 0.52)
        }).start();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, borderWidth: 5, borderColor: 'red' }}>
                <Animated.View
                    style={{
                        marginTop: topMotion,
                        backgroundColor: 'blue',
                        width: 150,
                        height: 150
                    }}
                ></Animated.View>
            </View>
        </SafeAreaView>
    );
};

export default Animate;

const styles = StyleSheet.create({});
