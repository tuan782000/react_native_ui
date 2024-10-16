import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FeatherIcon from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome5';


const items = [
    {
        title: 'Currencies',
        data: [
            {
                icon: 'euro-sign',
                name: 'Euro',
                symbol: 'EUR',
                change: 1.04,
                price: 16242,
            },
            {
                icon: 'yen-sign',
                name: 'Japanese Yen',
                symbol: 'YEN',
                change: -7.15,
                price: 0.0072,
            },
            {
                icon: 'pound-sign',
                name: 'Pound Sterling',
                symbol: 'GBP',
                change: 2.88,
                price: 1.21,
            },
            {
                icon: 'lira-sign',
                name: 'Turkish Lira',
                symbol: 'TRY',
                change: -5.25,
                price: 0.054,
            },
            {
                icon: 'rupee-sign',
                name: 'Indian Rupee',
                symbol: 'INR',
                change: -22.17,
                price: 0.012,
            },
            {
                icon: 'won-sign',
                name: 'South Korean Won',
                symbol: 'KRW',
                change: 11.62,
                price: 0.00075,
            },
        ],
    },
    {
        title: 'Cryptocurrencies',
        data: [
            {
                icon: 'bitcoin',
                name: 'Bitcoin',
                symbol: 'BTC',
                change: 14.92,
                price: 16242,
            },
            {
                icon: 'ethereum',
                name: 'Ethereum',
                symbol: 'ETH',
                change: -7.15,
                price: 1150,
            },
        ],
    },
];
  

const ListCryptoScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#05121b', flex: 1 }}>
        <ScrollView contentContainerStyle={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.title}>Exchange</Text>
            </View>
            <View style={styles.body}>
                {
                    items.map(({title, data}, index) => (
                        <View key={index}>
                            <TouchableOpacity style={styles.rowTitle}>
                                <Text style={{color: '#fff', fontSize: 18, fontWeight: '600'}}>{title}</Text>
                                <FeatherIcon
                                    name='chevron-right'
                                    color="#fff"
                                    size={22}
                                />
                            </TouchableOpacity>
                            {
                                data.map(({icon, name, symbol, change, price}, index) => (
                                    <TouchableOpacity key={index} style={[{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        borderTopWidth: 1,
                                        paddingBottom: 10,
                                        paddingTop: 10,
                                        borderColor: '#26343d',
                                        minHeight: 54,
                                    }, index === 0 && { borderTopWidth: 0 }]}>
                                        <View style={{backgroundColor: 'rgba(255, 255, 255, 0.05)', width: 40, height: 40, justifyContent: 'center', alignItems:'center', borderRadius: 10}}>
                                            <FontAwesome name={icon} color='#007bff' size={20}/>
                                        </View>
                                        <View style={{flex: 1, paddingHorizontal: 10}}>
                                            <Text style={{color: '#fff', fontWeight: 600}}>{name}</Text>
                                            <View style={{flex: 1}}/>
                                            <View style={{flexDirection: 'row', gap: 10}}>
                                                <Text style={{color: '#5b6a73', fontSize: 12}}>{symbol}</Text>
                                                <Text style={{color: change > 0 ? '#31d158' : '#ff463a', fontSize: 12}}>
                                                    {change > 0 ? "+" : ""}
                                                    {change}
                                                    %
                                                </Text>
                                            </View>
                                        </View>
                                        <Text style={{color: '#007bff'}}>${price}</Text>
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                    ))
                }
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default ListCryptoScreen

const styles = StyleSheet.create({
    container: {
        paddingVertical: 24,
        paddingHorizontal: 0,
    },
    header: {
        paddingHorizontal: 24,
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        color: '#fff',
        marginBottom: 12,
    },
    // 
    body: {
        paddingHorizontal: 24
    },
    rowTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 10
    }
})