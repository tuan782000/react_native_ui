import React from 'react'
import { Image } from 'react-native';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Swiper from 'react-native-swiper';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const items = [
    [
        { label: 'Model', value: 'P100D' },
        { label: 'Mileage', value: '22k mi' },
    ],
    [
        { label: 'Range', value: '396 mi' },
        { label: 'Top Speed', value: '200 mph' },
    ],
    [
        { label: 'Battery', value: '100kW/h' },
        { label: 'Peak Power', value: '1,020 hp' },
    ],
    [
        { label: '0-60 mph', value: '2.5 seconds' },
        { label: 'Cargo volume', value: '25 ft³' },
    ],
];
const IMAGES = [
    'https://images.unsplash.com/photo-1617704548623-340376564e68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGVzbGElMjBtb2RlbCUyMHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1639358336404-b847ac2a3272?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    'https://images.unsplash.com/photo-1652509525608-6b44097ea5a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fHRlc2xhJTIwbW9kZWwlMjBzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
];


const DetailedCarRentalScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar barStyle={'dark-content'} />

            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', marginHorizontal: 24 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => {
                            // handle onPress
                        }}>
                        <FeatherIcon
                            color="#000"
                            name="arrow-left"
                            size={24} />
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: 19,
                        fontWeight: '600',
                        color: '#000',
                        textAlign: 'center',
                    }} numberOfLines={1}>Tesla Model S</Text>
                    <TouchableOpacity
                        onPress={() => {
                            // handle onPress
                        }}>
                        <FeatherIcon
                            color="#000"
                            name="more-vertical"
                            size={24} />
                    </TouchableOpacity>
                </View>

                <ScrollView contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
                    {/* List image */}
                    <View style={{
                        marginTop: 12,
                        position: 'relative',
                        height: 240,
                        overflow: 'hidden',
                        borderRadius: 12,
                    }}>
                        <View style={{
                            position: 'absolute', top: 0, left: 0, right: 0, zIndex: 2,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            paddingVertical: 12,
                            paddingHorizontal: 16,
                            // backgroundColor: 'coral'
                        }}>
                            <TouchableOpacity
                                onPress={() => {
                                    // handle onPress
                                }}
                                // style={styles.photosTopItem}
                                style={{
                                    padding: 10,
                                    backgroundColor: '#fff',
                                    borderRadius: 999,

                                }}
                                >
                                <FeatherIcon color="#000" name="star" size={18} />
                                </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    // handle onPress
                                }}
                                // style={styles.photosTopItem}
                                style={{
                                    padding: 10,
                                    backgroundColor: '#fff',
                                    borderRadius: 999,
                                    
                                }}
                                >
                                <FeatherIcon
                                    color="#000"
                                    name="share"
                                    size={16} />
                            </TouchableOpacity>
                        </View>
                        <Swiper
                            // loop={false}
                            // Overide pagination
                            renderPagination={(index, total) => (
                                <View style={{
                                    position: 'absolute',
                                    bottom: 12,
                                    right: 12,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-end',
                                    paddingVertical: 6,
                                    paddingHorizontal: 12,
                                    backgroundColor: '#000',
                                    borderRadius: 12,
                                }}>
                                    <Text style={{
                                        fontWeight: '600',
                                        fontSize: 14,
                                        color: '#fbfbfb',
                                    }}>
                                        {index + 1} of {total}
                                    </Text>
                                </View>
                            )}>
                            {IMAGES.map((src, index) => (
                                <Image
                                    alt=""
                                    key={index}
                                    source={{ uri: src }}
                                    style={{
                                        flex: 1,
                                        width: '100%',
                                    }} />
                            ))}
                        </Swiper>
                    </View>
                    {/* Schedule */}
                    <TouchableOpacity
                        onPress={() => {
                            // handle onPress
                        }}
                        style={{
                            marginTop: 12,
                            paddingVertical: 14,
                            paddingHorizontal: 20,
                            borderRadius: 20,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#fff',
                            borderWidth: 1,
                            borderColor: '#f5f5f5',
                        }}>
                        <FeatherIcon color="#000" name="calendar" size={18} />
                        <View style={{
                            marginLeft: 12,

                        }}>
                            <Text style={{
                                marginBottom: 2, fontSize: 13,
                                fontWeight: '500',
                            }}>
                                Thu, Feb 23 at 10:00 AM
                            </Text>
                            <Text style={{
                                marginBottom: 2, fontSize: 13,
                                fontWeight: '500',
                            }}>
                                Sun, Feb 26 at 10:00 AM
                            </Text>
                        </View>
                        <View style={{
                            marginLeft: 'auto',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Text style={{
                                fontSize: 16,
                                lineHeight: 21,
                                fontWeight: '600',
                                color: '#4c6cfd',
                            }}>Change</Text>
                            <FeatherIcon
                                color="#4C6CFD"
                                name="chevron-right"
                                size={18} />
                        </View>
                    </TouchableOpacity>
                    {/* Description */}
                    <View style={{
                        marginTop: 12,
                        backgroundColor: '#f5f5f5',
                        paddingVertical: 16,
                        paddingHorizontal: 20,
                        borderRadius: 20,
                    }}>
                        <Text style={{
                            fontSize: 20,
                            lineHeight: 25,
                            fontWeight: '600',
                            letterSpacing: 0.38,
                            color: '#000000',
                            marginBottom: 6,
                        }}>Tesla Model S 2022</Text>

                        <View style={{
                            marginBottom: 12,
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <Text style={{
                                fontSize: 13,
                                fontWeight: 'bold',
                                color: '#000',
                                marginRight: 2,
                            }}>5.0</Text>
                            <FeatherIcon
                                color="#4c6cfd"
                                name="star"
                                size={15} />
                            <Text style={{
                                fontSize: 12,
                                fontWeight: '600',
                                color: '#8e8e93',
                                marginLeft: 2,
                            }}>(7 ratings)</Text>
                        </View>
                        <Text style={{
                            fontWeight: '400',
                            fontSize: 13,
                            lineHeight: 18,
                            letterSpacing: -0.078,
                            color: '#8e8e93',
                        }}>
                            Model S Dual Motor All-Wheel Drive unlocks more range than any
                            other vehicle in our current lineup, with insane power and
                            maximum control.
                        </Text>
                    </View>
                    {/* Info detail */}
                    <View style={{
                        marginTop: 12,
                        backgroundColor: '#fff',
                        borderRadius: 20,
                        overflow: 'hidden',
                    }}>
                        {items.map((row, rowIndex) => (
                            <View key={rowIndex}
                                style={[{
                                    flexDirection: 'row',
                                    backgroundColor: '#f5f5f5',
                                    borderTopWidth: 1,
                                    borderColor: '#fff'
                                },
                                rowIndex === 0 && { borderTopWidth: 0 }]}>
                                {row.map(({ label, value }, index) => (
                                    <View key={index} style={{
                                        paddingVertical: 12,
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderLeftWidth: 1,
                                        borderColor: '#fff',
                                        flexGrow: 2,
                                        flexShrink: 1,
                                        flexBasis: 0,
                                    }}>
                                        <Text style={{
                                            fontSize: 13,
                                            fontWeight: '400',
                                            lineHeight: 18,
                                            color: '#8e8e93',
                                            marginBottom: 4,
                                        }}>{label}</Text>
                                        <Text style={{
                                            fontSize: 16,
                                            fontWeight: '600',
                                            lineHeight: 20,
                                            color: '#000',
                                        }}>{value}</Text>
                                    </View>
                                ))}
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </SafeAreaView>

            <View style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: '#fff',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',

                paddingTop: 12,
                paddingHorizontal: 16,
                paddingBottom: 48,
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
                elevation: 3,
            }}>
                <View style={{
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        marginBottom: 2,
                    }}>
                        <Text style={{
                            fontSize: 16,
                            lineHeight: 21,
                            fontWeight: '600',
                            color: '#8e8e93',
                            marginRight: 4,
                            textDecorationLine: 'line-through',
                            textDecorationColor: '#8e8e93',
                            textDecorationStyle: 'solid',
                        }}>$72</Text>
                        <Text style={{
                            fontSize: 21,
                            lineHeight: 26,
                            fontWeight: '700',
                            color: '#000',
                        }}>$56/day</Text>
                    </View>
                    <Text style={{
                        fontSize: 13,
                        lineHeight: 18,
                        fontWeight: '600',
                        color: '#4c6cfd',
                        letterSpacing: -0.07,
                        textDecorationLine: 'underline',
                        textDecorationColor: '#4c6cfd',
                        textDecorationStyle: 'solid',
                    }}>$134 est.total</Text>
                </View>
                <TouchableOpacity style={{
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    borderRadius: 8,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 1,
                    backgroundColor: '#007aff',
                    borderColor: '#007aff',
                    minHeight: 54
                }}>
                    <Text style={{
                        fontSize: 18,
                        lineHeight: 26,
                        fontWeight: '600',
                        color: '#fff',
                    }}>Continue</Text>
                    <MaterialCommunityIcons
                        color="#fff"
                        name="arrow-right-circle"
                        size={18}
                        style={{ marginLeft: 12 }} />
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default DetailedCarRentalScreen

const styles = StyleSheet.create({})