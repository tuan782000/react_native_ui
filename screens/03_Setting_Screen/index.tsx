import { SafeAreaView, StyleSheet, Text, View, ScrollView, TouchableOpacity, Switch, Image } from 'react-native'
import FeatherIcon from 'react-native-vector-icons/Feather'
import React, { useState } from 'react'

type Props = {}

// data mẫu
const SECTIONS = [
    {
        header: "Performances",
        items: [
            { id: "language", icon: "globe", label: 'Language', type: 'select' },
            { id: "darkmode", icon: "moon", label: 'Dark Mode', type: 'toggle' },
            { id: "wifi", icon: "wifi", label: 'Use Wi-fi', type: 'toggle' },
        ]
    },
    {
        header: "Help",
        items: [
            { id: "bug", icon: "flag", label: 'Report Bug', type: 'link' },
            { id: "contact", icon: "mail", label: 'Contact Us', type: 'link' },
        ]
    },
    {
        header: "Content",
        items: [
            { id: "save", icon: "save", label: 'Saved', type: 'link' },
            { id: "download", icon: "download", label: 'Downloads', type: 'link' },
        ]
    },
]

const SettingScreen = (props: Props) => {
    const [form, setForm] = useState<any>({
        language: 'English',
        darkmode: true,
        wifi: false
    })
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f6f6f6' }}>
            <View style={styles.header}>
                <Text style={styles.title}>Settings</Text>
                <Text style={styles.subtitle}>Update your performance here</Text>
            </View>
            <ScrollView contentContainerStyle={styles.container}>

                <TouchableOpacity style={styles.profile}>
                    <Image
                        alt=""
                        source={{
                            uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
                        }}
                        style={styles.profileAvatar} 
                    />
                    <View style={styles.rowProfile}>
                        <Text style={styles.profileName}>John Doe</Text>
                        <Text style={styles.profileEmail}>johndoe@gmail.com</Text>
                    </View>
                    <View>
                        <FeatherIcon 
                            name='chevron-right'
                            color="#ababab"
                            size={22} style={{ marginRight: 12 }} 
                        />
                        </View>
                </TouchableOpacity>

                {
                    SECTIONS.map(({ header, items }) => (
                        <View style={styles.section} key={header}>
                            <View style={styles.sectionHeader}>
                                <Text style={styles.sectionHeaderText}>{header}</Text>
                            </View>

                            <View style={styles.sectionBody}>
                                {
                                    items.map(({ label, icon, type, id }, index) => (
                                        // Đối với trường hợp đầu tiên bắt đầu mỗi mục thì sẽ không có borderTop
                                        <View style={[styles.rowWrapper, index === 0 && { borderTopWidth: 0 }]} key={id}>
                                            <TouchableOpacity onPress={() => { }}>
                                                <View style={styles.row}>
                                                    <FeatherIcon name={icon} color="#616161" size={22} style={{ marginRight: 12 }} />
                                                    <Text style={styles.rowLabel}>{label}</Text>

                                                    <View style={styles.rowSpacer} />

                                                    {
                                                        type === 'select' && (
                                                            <Text style={styles.rowValue}>{form[id]}</Text>
                                                        )
                                                    }

                                                    {
                                                        type === 'toggle' && (
                                                            <Switch
                                                                value={form[id]}
                                                                onValueChange={(value) => setForm({ ...form, [id]: value })}
                                                            />
                                                        )
                                                    }

                                                    {
                                                        ['select', 'link'].includes(type) && (
                                                            <FeatherIcon
                                                                name='chevron-right'
                                                                color="#ababab"
                                                                size={22}
                                                            />
                                                        )
                                                    }
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    ))
                                }
                            </View>
                        </View>
                    ))
                }
            </ScrollView>
        </SafeAreaView>
    )
}

export default SettingScreen

const styles = StyleSheet.create({
    container: {
        paddingVertical: 24 // cách trên dưới từ viền đến nội dùng 24 - tính từ SafeAreaView "camera" "nút lướt dưới lên"
    },
    header: {
        paddingHorizontal: 24,
        marginBottom: 12
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        color: '#1d1d1d',
        marginBottom: 6
    },
    subtitle: {
        fontSize: 15,
        fontWeight: '500',
        color: '#929292'
    },
    section: {
        paddingTop: 12, // 
        // backgroundColor: 'coral'
    },
    sectionHeader: {
        paddingHorizontal: 24, // trái phải
        paddingVertical: 8 // trên dưới
    },
    sectionHeaderText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#a7a7a7',
        textTransform: 'uppercase',
        letterSpacing: 1.2
    },
    // profile
    profile: {
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#e3e3e3',
      },
    rowProfile: {
        flex: 1,
        paddingHorizontal: 20,
    },
    profileAvatar: {
        width: 60,
        height: 60,
        borderRadius: 9999,
    },
    profileName: {
        // marginTop: 12,
        fontSize: 20,
        fontWeight: '600',
        color: '#090909',
    },
    profileEmail: {
        // marginTop: 6,
        fontSize: 16,
        fontWeight: '400',
        color: '#848484',
    },
    profileAction: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        backgroundColor: '#007bff',
        borderRadius: 9999,
    },
    profileActionText: {
        marginRight: 8,
        fontSize: 15,
        fontWeight: '600',
        color: '#fff',
    },
    // body
    sectionBody: {

    },
    rowWrapper: {
        paddingLeft: 24,
        borderTopWidth: 1,
        borderColor: '#e3e3e3',
        backgroundColor: '#fff'
    },
    row: {
        minHeight: 54,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingRight: 24
    },
    rowLabel: {
        fontSize: 17,
        fontWeight: '500',
        color: '#000'
    },
    rowSpacer: {
        flex: 1,
    },
    rowValue: {
        fontSize: 17,
        color: '#616161',
        marginRight: 4,
    },
})