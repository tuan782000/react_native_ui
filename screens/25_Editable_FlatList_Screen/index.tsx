import { StyleSheet, Text, View, SafeAreaView, FlatList, Modal, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'

const DATA = [
    {id: 1, text: 'Item One'},
    {id: 2, text: 'Item Two'},
    {id: 3, text: 'Item Three'},
    {id: 4, text: 'Item Four'},
    {id: 5, text: 'Item Five'},
]

const EditableFlatListScreen = () => {
    const [data, setData] = useState(DATA);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [inputText, setInputText] = useState('');
    const [editItem, setEditItem] = useState();
    const [isRender, setisRender] = useState(false);
    const onPressItem = (item) => {
        setIsModalVisible(true)
        setInputText(item.text)
        setEditItem(item.id)
    }
    const renderItem = ({item, index}) => {
        return (
            <TouchableOpacity style={styles.item} onPress={() => onPressItem(item)}> 
                <Text style={styles.text}>{item.text}</Text>
            </TouchableOpacity>
        )
    }

    const onPressSave = () => {
        const newData = data.map(item => {
            if(item.id === editItem) {
                item.text = inputText
                return item // chỉ reutrn về cái item đã thay đổi
            }

            return item // còn lại return về như cũ
        })

        setData(newData)
        setIsModalVisible(false)
        setisRender(!isRender)
    }
  return (
    <SafeAreaView style={styles.container}>
        <FlatList data={data} keyExtractor={(item) => item.id.toString()} renderItem={renderItem}
            extraData={isRender}/>
        
        <Modal animationType='fade' visible={isModalVisible} onRequestClose={() => setIsModalVisible(false)}>
            <View style={styles.modalView}>
                <Text style={styles.text}>Change Text</Text>
                <TextInput style={styles.textInput} onChangeText={(text) => setInputText(text)} defaultValue={inputText} editable={true} multiline={false} maxLength={200}/>
                <TouchableOpacity style={styles.touchableSave} onPress={() => onPressSave()}>
                    <Text style={styles.text}>Save</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    </SafeAreaView>
  )
}

export default EditableFlatListScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        alignItems: 'flex-start'
    },
    text: {
        marginVertical: 30,
        fontWeight: 'bold',
        marginLeft: 10
    },
    modalView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        width: '90%',
        height: 70,
        borderColor: 'grey',
        borderWidth: 1,
        fontSize: 25
    },
    touchableSave: {
        backgroundColor: 'orange',
        paddingHorizontal: 100,
        alignItems: 'center',
        marginTop: 20
    },
})