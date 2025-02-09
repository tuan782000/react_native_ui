import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Login from './Login';

const RootNavigation = () => {
    return (
        <View>
            <StatusBar barStyle={'light-content'} />
            <Login />
        </View>
    );
};

export default RootNavigation;

const styles = StyleSheet.create({});
