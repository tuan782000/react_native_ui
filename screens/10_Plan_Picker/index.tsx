import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const items = [
    {
      label: 'Free',
      price: 0,
      badge: '10,000 users',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    },
    {
      label: 'Basic',
      price: 250,
      badge: '250,000 users',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    },
    {
      label: 'Premium',
      price: 999,
      badge: 'Unlimited users',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    },
  ];

const PlanPickerScreen = () => {
  const [value, setValue] = useState(0);

  console.log(value)

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f6f6f6'}}>
        <View style={styles.container}>
            <Text style={styles.title}>PlanPickerScreen</Text>
            {
                items.map(({label, price, badge, description}, index) => {
                    const isActive = value === index // true or false
                    return (
                        <TouchableOpacity key={index} onPress={() => {
                            setValue(index)
                        }}>
                            <View style={[styles.radio, isActive && styles.radioActive]}>
                                <Text style={styles.radioLabel}>{label}</Text>
                                <Text style={styles.radioPrice}>${price}/month</Text>
                                <View style={styles.radioBadge}>
                                    <Text style={styles.radioBadgeText}>{badge}</Text>
                                </View>
                                <Text style={styles.radioDescription}>{description}</Text>
                            </View>

                            <View style={[styles.radioInput, isActive && styles.radioInputActive]}></View>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    </SafeAreaView>
  )
}

export default PlanPickerScreen

const styles = StyleSheet.create({
    container: {
        padding: 24
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        color: '#1d1d1d',
        marginBottom: 12
    },
    radio: {
        position: 'relative',
        backgroundColor: '#fff',
        marginBottom: 12,
        padding: 16,
        borderRadius: 8,
        alignItems: 'flex-start',
        borderWidth: 2,
        borderColor: 'transparent',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2
    },
    // trạng thái khi active
    radioActive: {
        borderColor: '#0069fe'
    },
    radioLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: '#b3b3b3',
        letterSpacing: 1.2,
        textTransform: 'uppercase',
        marginBottom: 8
    },
    radioPrice: {
        fontSize: 18,
        fontWeight: '700',
        color: '#2f2f2f',
        marginBottom: 12
    }, 
    radioBadge:{
        backgroundColor: '#dce9fe',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 6,
        marginBottom: 12
    },
    radioBadgeText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#0069fe'
    },
    radioDescription: {
        fontSize: 15,
        fontWeight: '500',
        color: '#848a96'
    },
    radioInput: {
        position: 'absolute',
        top: 16,
        right: 16,
        borderWidth: 2,
        borderColor: '#b0b0b0',
        width: 24,
        height: 24,
        borderRadius: 999
    },
    // trạng thái khi active
    radioInputActive: {
        borderWidth: 7,
        borderColor: '#0069fe'
    }
})