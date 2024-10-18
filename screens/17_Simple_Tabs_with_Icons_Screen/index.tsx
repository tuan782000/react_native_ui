import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import FeatherIcon from 'react-native-vector-icons/Feather'

const tabs = [
    {name: "My Account", icon: "user"},
    {name: "Company", icon: "shopping-cart"},
    {name: "Team", icon: "users"},
]

const SimpleTabsWithIconsScreen = () => {
    const [value, setValue] = useState(tabs[0].name);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={{paddingHorizontal: 24}}>
            <Text style={{paddingHorizontal: 16, fontSize: 32, fontWeight: '700', color: '#1d1d1d', marginBottom: 12}}>Welcome back, Alex</Text>
        </View>
        <View style={{flexDirection: 'row', }}>
            {
                tabs.map(({name, icon}, index) => {
                    const isActive = name === value
                    return (
                        <View key={index} style={[{flex: 1, borderColor: '#e5e7eb', borderBottomWidth: 2}, isActive && {borderBottomColor: '#6366f1'}]}>
                            <TouchableOpacity onPress={() => setValue(name)} style={{paddingVertical: 10, position: 'relative', overflow: 'hidden', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                <FeatherIcon name={icon} size={13} color={isActive ? '#6366f1' : '#6b7288'}/>
                                <Text style={{ fontSize: 13, fontWeight:'600', color: isActive ? '#6366f1' : '#6b7288', marginLeft: 5}}>{name}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                })
            }
        </View>
        <View style={{flex: 1, padding: 24}}>
            <View style={{width: '100%', height: '100%', borderColor: '#6b7288', borderWidth: 4, borderStyle: 'dashed', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 26, fontWeight: '700'}}>{value}</Text>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default SimpleTabsWithIconsScreen

const styles = StyleSheet.create({})