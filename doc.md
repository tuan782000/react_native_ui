# cài đặt react native vector icon

Bước 1: yarn add react-native-vector-icons

Bước 2: yarn add -D @types/react-native-vector-icons

Bước 3: Thêm file react-native.config.js

```js
/* eslint-disable prettier/prettier */
module.exports = {
    dependencies: {
        'react-native-vector-icons': {
            platforms: {
                ios: null,
            },
        },
    },
    assets: ['./assets/fonts/'],
}
```

Bước 4: Vào node_modules copy toàn bộ font của react-native-vector-icons

Bước 5: Tạo thư mục assets/fonts

Bước 6: Sau khi tạo xong dán vào đây

Bước 7: cd ios && pod install

Bước 8: Sau khi xong hết: npx react-native-asset

Nó sẽ auto thực hiện thêm vào ios và android các fonts mình đã làm ở assets/fonts


# Cần làm

react native swipper - làm slide của ảnh

https://www.youtube.com/watch?v=DXsR5MkMhCo&t=2366s

# Ôn tập React native

## useState

Cách sử dụng useState

Nhấm vào giá trị cần thay đổi

Nhấn vào nút thực hiện thay đổi giá trị

Nút

Nơi thay đổi

```jsx
import {useState} from 'react'
const [state, setState] = useState(0);

state: giá trị - ở các nơi khác muốn dùng thì gọi tới thằng này
setState: dùng để cập nhật giá trị
useState() là 1 hook cung cấp cách để khai báo giá trị state và hàm cập nhật state. State thực sự được lưu trữ bởi React.
useState(0) giá trị khởi tạo là 0

const onChangeValue = () => {
    setState(state + 1)
}

<Text>{state}</Text> // ví dụ gọi đến để lấy state

<Button onPress={onChangeValue}>Cập nhật giá trị</Button>

React quản lý quá trình re-render: Khi state thay đổi, React sẽ kiểm tra xem phần nào trong component cần được cập nhật. Trong trường hợp này, chỉ có phần liên quan đến state (nơi hiển thị <Text>{state}</Text>) mới được render lại.

```

## props

Props dùng để truyền dữ liệu

Ví dụ: truyền dữ liệu từ component cha sang component con, hoặc từ ông xuống cha từ cha xuống con

1 App nó nhiều component to nhỏ khác nhau.

Bên trong 1 component to - có các component nhỏ nhỏ khác.

App.tsx là 1 component cha

Bên trong App có MyComponent.tsx là 1 component con

Thằng App có dữ liệu muốn chia sẽ cho thằng con - thì phải thông qua props

truyền xuống cho con.

Trước tiên muốn sử dụng được props thì phải import thằng con vào thằng cha

```jsx
// App.tsx 

import MyComponent from './MyComponent'

const App = () => {
    return (
        <MyComponent name="tuan" color="coral"/>
    )
}

export default App

// MyComponent
const MyComponent = (props) => {
    const {name, color} = props
    return (
        <View>
            <Text style={{color: color}}>{name}<Text/>
        <View/>
    )
}

export default MyComponent
```

Từ bài học này sau này chúng ta có thể viết ra các components, sau đó đem tái sử dụng ở các màn hình

Từ các màn hình dùng các component chỉ cần truyền xuống cho nó dữ liệu mô tả đúng các thực thể mình muốn thể hiện là được

Ví dụ số 2

```jsx
// App.tsx
import React from 'react';
import MyComponent from './MyComponent';

const App = () => {
    return (
        <MyComponent name="tuan" color="coral" age={25} location="Hanoi" />
    );
};

export default App;


// MyComponent.tsx
import React from 'react';
import { View, Text } from 'react-native';

const MyComponent = ({ name, color, ...rest }) => {
    return (
        <View>
            <Text style={{ color: color }}>{name}</Text>
            {/* Sử dụng rest props */}
            <Text>{JSON.stringify(rest)}</Text> {/* In ra các thuộc tính còn lại */}
        </View>
    );
};

export default MyComponent;
```

...rest sẽ chứa tất cả các props còn lại mà không được destructure, ví dụ age, location, v.v.

Để truy cập các thuộc tính còn lại (các props khác mà không được destructure), bạn có thể sử dụng cú pháp ...rest (spread operator) để lấy tất cả các thuộc tính khác chưa được destructure.


Ví dụ số 3:
```jsx

import React from 'react';
import MyComponent from './MyComponent';

const App = () => {
    return (
        <MyComponent name="tuan" color="coral" age={25} location="Hanoi" />
    );
};

export default App;

const MyComponent = (props) => {
    return (
        <View>
            <Text style={{ color: props.color }}>{props.name}</Text>
            {/* In toàn bộ props */}
            <Text>{JSON.stringify(props)}</Text>
        </View>
    );
};
```

## Hiểu rõ về StyleSheet

Để sử dụng StyleSheet bạn cần import nó từ thư viện react native

Sau đó đặt 1 biến tên styles và khởi tạo đối tượng chứa các styles bên trong nó

Mỗi thuộc tính trong đối tượng này (ví dụ: container, title, subtitle) đại diện cho một phong cách riêng mà sau đó bạn có thể sử dụng.

```jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; // ví dụ import StyleSheet

const MyComponent = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to React Native</Text>
            <Text style={styles.subtitle}>Learning StyleSheet</Text>
        </View>
    );
};

const styles = StyleSheet.create({ // khởi tạo đối tượng chứa css
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
    },
});

export default MyComponent;
```

Một số lưu ý:

- Tái sử dụng kiểu dáng: Bạn có thể dễ dàng tái sử dụng styles bằng cách sử dụng đối tượng styles nhiều lần trong nhiều component.
- Kết hợp styles: Nếu bạn muốn kết hợp nhiều styles cho một component, có thể truyền một mảng các styles:

Ví dụ sự kết hợp - chỉ cần cho nó thành 1 mảng, bên trong chứa các object là được

```jsx
<Text style={[styles.title, styles.boldText]}>Hello</Text>
```
Kết hợp rõ nhiều css với nhau
```jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyComponent = () => {
    return (
        <View style={styles.container}>
            <Text style={[styles.title, styles.highlight]}>Highlighted Title</Text>
            <Text style={styles.subtitle}>Subtitle with normal style</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        color: '#333',
    },
    highlight: {
        color: 'red', // override màu từ title
    },
    subtitle: {
        fontSize: 18,
        color: '#666',
    },
});

export default MyComponent;
```

Chúng ta cũng có thể làm ra 1 file css chung.

Sau đó import vào các file nào muốn sử dụng css chung thì thông qua import đó

## SafeAreaView

Giúp cho chúng ta né được các màn hình tai thỏ - hoặc có kích thước màn hình kỳ lạ

## TextInput

react native cung cấp sẵn component text input và đường nhiên có các thuộc tính đi kèm

- value: Giá trị hiện tại của TextInput. Thường được liên kết với một state để kiểm soát giá trị động.
- onChangeText: Hàm callback được gọi mỗi khi nội dung của TextInput thay đổi.
- placeholder: Hiển thị văn bản nhắc khi TextInput trống.
- keyboardType: Xác định loại bàn phím hiển thị (ví dụ: default, numeric, email-address).
- secureTextEntry: Nếu là true, văn bản sẽ được hiển thị dưới dạng mật khẩu (ẩn).
- maxLength: Giới hạn độ dài văn bản mà người dùng có thể nhập.
- multiline: Cho phép nhập nhiều dòng nếu được đặt là true.

```jsx
import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const TextInputExample = () => {
    const [inputValue, setInputValue] = useState(''); // State để lưu giá trị người dùng nhập

    const handleInputChange = (text) => {
        setInputValue(text); // Cập nhật state khi người dùng nhập
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nhập tên của bạn:</Text>
            
            <TextInput
                style={styles.input}
                placeholder="Nhập vào đây..."
                value={inputValue}
                onChangeText={handleInputChange} // Mỗi khi thay đổi nội dung sẽ cập nhật state
                keyboardType="default" // Hiển thị bàn phím mặc định
                maxLength={20} // Giới hạn 20 ký tự
            />

            <Text style={styles.output}>Bạn đã nhập: {inputValue}</Text> {/* Hiển thị nội dung người dùng nhập */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    output: {
        fontSize: 16,
    },
});

export default TextInputExample;
```

Viết 1 custom component input

Component con

```jsx
import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

const InputComponent = ({
  value,
  onChangeText,
  placeholder,
  keyboardType = 'default',
  secureTextEntry = false,
  maxLength,
  multiline = false,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value} // Giá trị hiện tại
        onChangeText={onChangeText} // Callback khi thay đổi nội dung
        placeholder={placeholder} // Văn bản nhắc khi trống
        keyboardType={keyboardType} // Loại bàn phím (mặc định: text)
        secureTextEntry={secureTextEntry} // Ẩn văn bản (mật khẩu)
        maxLength={maxLength} // Giới hạn ký tự
        multiline={multiline} // Nhập nhiều dòng
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  input: {
    height: multiline ? 100 : 40, // Nếu multiline thì sẽ cao hơn
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    textAlignVertical: multiline ? 'top' : 'center', // Căn trên nếu nhập nhiều dòng
  },
});

export default InputComponent;
```

ParentComponent.tsx (Component cha)
```jsx
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputComponent from './InputComponent';

const ParentComponent = () => {
  const [textValue, setTextValue] = useState(''); // State để quản lý giá trị nhập liệu

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nhập thông tin:</Text>

      <InputComponent
        value={textValue} // Truyền state hiện tại
        onChangeText={(text) => setTextValue(text)} // Cập nhật state khi có thay đổi
        placeholder="Nhập tên của bạn"
        keyboardType="default" // Mặc định là bàn phím văn bản
        maxLength={30} // Giới hạn 30 ký tự
        multiline={false} // Không nhập nhiều dòng
      />

      <Text>Kết quả: {textValue}</Text> {/* Hiển thị giá trị người dùng nhập */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ParentComponent;
```

value: nơi hiển thị dữ liệu của textInput - sử dụng hay kết hợp useState

onChangeText: đóng vai trò - khi người dùng điền dữ liệu vào ô input thì onChangeText sẽ lắng nghe - nó hữu dụng khi kết hợp với useState những gì người dùng gõ và sau đó dựa vào useState để cập nhật lại 

## Sử dụng Image trong react native

- Hiển thị ảnh từ URL

- Hiển thị ảnh từ local

- Hiển thị ảnh từ base64URL

```jsx
import {View, Image, Text, SafeAreaView, StyleSheet} from 'react-native'

const App = () => {
    <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'center', AlignItems: 'center'}}>
            // Link
            <Image style={{width: 300, height: 300}} source={{uri: 'https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}/>
            <View style={{height: 20}}/>
            // Source
            <Image style={{width: 300, height: 300}} source={require('./src/images/abc.png')}/>
            <View style={{height: 20}}/>
            // Lấy thêm ảnh base64 để vào uri
            <Image style={{width: 300, height: 300}} source={{uri: 'https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}/>
        </View>
    </SafeAreaView>
}

export default App
```

## Alert

```jsx
import {View, Image, Text, SafeAreaView, StyleSheet, Alert, Button} from 'react-native'

const App = () => {
    const oneOptionAlert = () => {
        Alert.alert('Modal 01')
    }

    const twoOptionAlert = () => {
        Alert.alert(
            // title - param 1
            'This is title',
            // body - param 2
            "I'm two options alert",
            // Yes / No param3
            [
                {
                    text: 'Yes', 
                    onPress: () => {
                        console.log('Yes pressed')
                    }
                },
                {
                    text: 'No', 
                    onPress: () => {
                        console.log('No pressed')
                    }
                },
            ]
        )
    }

    const threeOptionAlert = async () => {
        Alert.alert(
            // title
            'Hello'
            // body
            "I am three option alert",
            // tham số thứ 3
            [
                {
                    text: 'Maybe',
                    onPress: () => {
                        console.log("May be")
                    }
                },
                {
                    text: 'Yes',
                    onPress: () => {
                        console.log("Yes pressed")
                    }
                },
                {
                    text: 'No',
                    onPress: () => {
                        console.log("No pressed")
                    }
                },
                //.... có thể thêm nhiều options nữa
            ]
        )
    }

    <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'center', AlignItems: 'center'}}>
            <Button title="Simple Alert" onPress={oneOptionAlert} />
            <Button title="Two options in Alert" onPress={twoOptionAlert} />
            <Button title="Three options in Alert" onPress={threeOptionAlert} />
        </View>
    </SafeAreaView>
}

export default App
```

## Simple Modal trong react native

```jsx
import {useState} from 'react-native'
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Modal,
    SafeAreaView
} 
import SimpleModal './components/SimpleModal.tsx'


const App = () => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [chooseData, setChooseData] = useState()

    const changeModalVisible = (bool) => {
        setIsModalVisible(bool)
    }

    const setData = (data) => {
        setChooseData(data)
    }

    <SafeAreaView style={styles.container}>
        <Text style={styles.text}>{chooseData}</Text>
        <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={() => {
                changeModalVisible(true)
            }}
        >
            <Text style={styles.text}>Open Modal</Text>
        </TouchableOpacity>
        <Modal
            transparent={true}
            animationType="fade"
            visible={isModalVisible}
            onRequestClose={() => changeModalVisible(false)} // cưỡng chế đóng modal
        >
            <SimpleModal changeModalVisible={changeModalVisible} setDate={setDate} />
        </Modal>
    </SafeAreaView>
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green'
    },
    touchableOpacity: {
        backgroundColor: 'Orange',
        paddingHorizontal: 50
    },
    text: {
        marginVertical: 20,
        fontSize: 20,
        fontWeight: 'bold'
    }
})
```


```jsx
// SimpleModalComponent
import {useState} from 'react-native'
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Modal,
    SafeAreaView,
    Dimensions
} 

const HEIGHT_MODAL = 150
const WIDTH = Dimensions.get('window').width

const SimpleModal = (props) => {
    const closeModal = (bool, data) => {
        props.changeModalVisible(bool),
        props.setDate(data)
    }
    return (
        <TouchableOpacity disabled={true} style={styles.container}>
            <View style={styles.modal}>
                <View style={styles.textView}>
                    <Text style={styles.text}>
                        Sample Model Header
                    </Text>
                    <Text style={styles.text}>
                        Text Description
                    </Text>
                    <View style={styles.buttonsView}>
                        <TouchableOpacity style={styles.touchableOpacity} onPress={() =>        closeModal(false, 'Cancel')}
                        >
                            <Text style={[styles.text, {color: 'red'}]}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchableOpacity}
                            onPress={() => closeModal(false, 'OK')}
                        >
                            <Text style={[styles.text, {color: 'blue'}]}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
    },
    modal: {
        height: HEIGHT_MODAL,
        width: WIDTH - 80,
        paddingTop: 10,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    textView: {
        flex: 1,
        alignItems: 'center'
    },
    text: {
        margin: 5,
        fontWeight: 'bold',
        fontSize: 16,
    },
    touchableOpacity: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center'
    },
    buttonsView: {
        width: '100%',
        flexDirection: 'row'
    }
})

export default SimpleModal
```

## Scroll Item Animation trong FlatList

List chưa có Animation

```tsx
import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Image, FlatList, ActivityIndicator} from 'react-native'

const BG_IMG = `https://cdn.pixabay.com/photo/2017/04/03/05/00/songdo-2197525_1280.jpg`

const ScrollItemWithFlatList = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    // cái mẫu useEffect
    // useEffect(() => {
    //     // effect

    //     return () => {
    //         // clean up

    //     }
    // },[])

    useEffect(() => {
        // effect
        getListProducts() // call api
        return () => {
            // clean up

        }
    },[])

    const getListProducts = async () => {
        setIsLoading(true)
        const apiURL = `https://jsonplaceholder.typicode.com/photos`
        fetch(apiURL)
        .then((res) => res.json())
        .then((resJson) => {
            setData(resJson)
        })
        .catch((error) => {
            console.log("Request API Error", error)
        })
        .finally(() => setIsLoading(false))
    }

    const renderItem = ({item, index}: any) => {
        return (
            <View style={styles.item}>
                <Image style={styles.image} source={{uri: item.url}} resizeMode='contain'/>
                <View style={styles.wrapText}>
                    <Text style={styles.fontSize}>{index + '.' + item.title}</Text>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image source={{uri: BG_IMG}} style={StyleSheet.absoluteFillObject} blurRadius={70}/>
            {
                isLoading ? <ActivityIndicator /> : (
                    <FlatList 
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item : any) => `key-${item.id}`}
                        //initialNumToRender={10} // render trước 10 item để cải thiện hiệu suất
                    />
                )
            }
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        flexDirection: 'row',
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0, 
            height: 0,
        },
        shadowOpacity: .3,
        shadowRadius: 20,
        padding: 10
    },
    image: {
        width: 100,
        height: 100
    },
    fontSize: {
        fontSize: 18
    },
    wrapText: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',

    }
})

export default ScrollItemWithFlatList
```

Thêm Animation

```js
import React, {useState, useEffect, useRef} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Image, FlatList, ActivityIndicator, Animated} from 'react-native'

const BG_IMG = `https://cdn.pixabay.com/photo/2017/04/03/05/00/songdo-2197525_1280.jpg`

// Tính toán chiều cao của hình - padding của hình đến view - và margin bên ngoài
// Phải thực hiện điều này trước khi làm animation
const HEIGHT_IMG = 100
const ITEM_PADDING = 10
const ITEM_MARGIN_BOTTOM = 20

// ITEM_PADDING * 2  là vì padding trên dưới
const ITEM_SIZE = HEIGHT_IMG + ITEM_PADDING * 2 + ITEM_MARGIN_BOTTOM

const ScrollItemWithFlatList = () => {
    const scrollY = useRef(new Animated.Value(0)).current
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    // cái mẫu useEffect
    // useEffect(() => {
    //     // effect

    //     return () => {
    //         // clean up

    //     }
    // },[])

    useEffect(() => {
        // effect
        getListProducts() // call api
        return () => {
            // clean up

        }
    },[])

    const getListProducts = async () => {
        setIsLoading(true)
        const apiURL = `https://jsonplaceholder.typicode.com/photos`
        fetch(apiURL)
        .then((res) => res.json())
        .then((resJson) => {
            setData(resJson)
        })
        .catch((error) => {
            console.log("Request API Error", error)
        })
        .finally(() => setIsLoading(false))
    }

    const renderItem = ({item, index}: any) => {
        const scale = scrollY.interpolate({
            inputRange: [
                -1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)
            ],
            outputRange: [1,1,1,0]
        })
        const opacity = scrollY.interpolate({
            inputRange: [
                -1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + .6)
            ],
            outputRange: [1,1,1,0]
        })
        return (
            <Animated.View style={[styles.item, {transform: [{scale}], opacity}]}>
                <Image style={styles.image} source={{uri: item.url}} resizeMode='contain'/>
                <View style={styles.wrapText}>
                    <Text style={styles.fontSize}>{index + '.' + item.title}</Text>
                </View>
            </Animated.View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image source={{uri: BG_IMG}} style={StyleSheet.absoluteFillObject} blurRadius={70}/>
            {
                isLoading ? <ActivityIndicator /> : (
                    <Animated.FlatList 
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item : any) => `key-${item.id}`}
                        //initialNumToRender={10} // render trước 10 item để cải thiện hiệu suất
                        onScroll={Animated.event(
                            [{nativeEvent: {contentOffset: {
                                y: scrollY
                            }}}],
                            {
                                useNativeDriver: true
                            }
                        )}
                    />
                )
            }
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0, 
            height: 0,
        },
        shadowOpacity: .3,
        shadowRadius: 20,
        padding: ITEM_PADDING,
        marginBottom: ITEM_MARGIN_BOTTOM,
    },
    image: {
        width: 100,
        height: HEIGHT_IMG
    },
    fontSize: {
        fontSize: 18
    },
    wrapText: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',

    }
})

export default ScrollItemWithFlatList
```

Bước 1 tính được ITEM_SIZE

ITEM_SIZE được tính dựa trên chiều cao của ảnh (HEIGHT_IMG), cộng với padding (trên và dưới) và khoảng cách giữa các item (ITEM_MARGIN_BOTTOM). Giá trị này được dùng để xác định kích thước item trong danh sách và là cơ sở để tính toán inputRange cho animation.

Bước 2 tạo const scrollY = useRef(new Animated.Value(0)).current

scrollY là một giá trị Animated.Value được khởi tạo bằng useRef. Nó lưu giá trị vị trí cuộn của danh sách và sẽ thay đổi theo khi người dùng cuộn. useRef giúp đảm bảo rằng giá trị này sẽ không bị khởi tạo lại trong các lần render tiếp theo.


Bước 3 Tạo animated cho FlatList: Animated.FlatList 

Thay vì dùng FlatList bình thường, bạn sử dụng Animated.FlatList để có thể gắn animation vào sự kiện cuộn (onScroll).

Bước 4 Tạo animated cho renderItem: Animated.View

Animated.View được dùng để bọc từng item của danh sách, giúp áp dụng các hiệu ứng animation như scale (phóng to/thu nhỏ) và opacity (mờ/hiện).

Điều này cho phép các item có thể thay đổi kích thước và độ trong suốt khi người dùng cuộn qua chúng.

Bước 5 Tạo scrollView animation trong FlatList - onScroll

onScroll sử dụng Animated.event để liên kết giá trị cuộn (contentOffset.y) với scrollY. Điều này giúp cập nhật giá trị scrollY mỗi khi người dùng cuộn.

useNativeDriver: true cho phép React Native thực thi animation bằng trình điều khiển native, giúp tăng hiệu suất.

Mỗi lần người dùng cuộn danh sách, contentOffset.y được truyền vào scrollY thông qua Animated.event. Điều này cho phép scrollY luôn theo dõi vị trí hiện tại của cuộn.

Giá trị này sau đó sẽ được sử dụng trong interpolate để tạo các hiệu ứng mượt mà như thay đổi kích thước hoặc độ mờ của từng item.

Bước 6 Tạo scale, opacity - thêm vào css của View: transform là scale và opacity

scrollY.interpolate: Tạo một phép nội suy (interpolation) giữa giá trị scrollY và các giá trị scale và opacity. Nó cho phép bạn ánh xạ vị trí cuộn của danh sách (y) thành các giá trị thay đổi về kích thước và độ mờ của item.

inputRange xác định phạm vi của scrollY, và outputRange xác định giá trị của scale hoặc opacity tại từng điểm trong inputRange.

Ví dụ: scale bắt đầu là 1 và giảm dần về 0 khi người dùng cuộn qua item đó.

Các giá trị này sau đó được áp dụng vào transform và opacity của Animated.View, giúp các item trong danh sách thu nhỏ và mờ dần khi cuộn qua.

Hiệu ứng khi cuộn: từ 1 giảm dần từ từ về 0 

## Swipe Slider - No lib

```jsx
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, Dimensions, NativeScrollEvent, Image } from 'react-native'
import React, { useState } from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const images = [
    'https://media.istockphoto.com/id/1304859591/vi/anh/m%C3%A8o-shorthair-anh-tr%C3%AAn-n%E1%BB%81n-v%C3%A0ng.jpg?s=2048x2048&w=is&k=20&c=rux08QK-INPhL7r5hMxlNxr9uFGuyKIV-ARFPHTjb3g=',
    'https://media.istockphoto.com/id/2158299728/vi/anh/ch%C3%A2n-dung-m%C3%A8o-shorthair-c%E1%BB%A7a-anh.jpg?s=2048x2048&w=is&k=20&c=n25nRNI6fq7PMIfFF5LSO9LC2Nqt9GMzQkaWKaF7Ryg=',
    'https://media.istockphoto.com/id/1199279669/vi/anh/m%C3%A8o-b%C3%A9o-ph%C3%AC-ngh%E1%BB%8Bch-ng%E1%BB%A3m-m%E1%BA%AFt-to-ph%C3%ADa-sau-b%C3%A0n-l%C3%A0m-vi%E1%BB%87c-v%E1%BB%9Bi-chi%E1%BA%BFc-m%C5%A9-%C4%91%E1%BB%8F-m%C3%A8o-l%C3%B4ng-ki%E1%BB%83u-anh-m%C3%A0u-x%C3%A1m.jpg?s=2048x2048&w=is&k=20&c=1HmkpCCW1Zt9tZmsGvwt5Ps-SATPIkGO7iL3D32OjNE='
]

const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height

const SwipeSlider = () => {
    const [imageActive, setImageActive] = useState(0);

    const onChange = (nativeEvent: any) => {
        if(nativeEvent) {
            // contentOffset: khoảng cách từ đầu của scrollview cho đến hình thứ 1, thứ 2, thứ 3 // từ đầu scrollView đến thằng cuối cùng
            // nativeEvent.layoutMeasurement.width: chiều rộng của cái hình (phân biệt hình 1, 2, 3)
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
            if(slide !== imageActive) {
                setImageActive(slide) // đang ở hình 1 - tiến đến hình hình 2 set lại active của hình
            }
        }
    }

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.wrap}>
            <ScrollView 
                onScroll={({nativeEvent}) => onChange(nativeEvent)}
                showsHorizontalScrollIndicator={false} // tắt thanh cuộn ngang
                pagingEnabled // hiển thị từng ảnh - không hiển thị hết tất cả
                horizontal // ngang // boolean
                style={styles.wrap}
            >
                {
                    images.map((e, index) => <Image key={e} resizeMode='stretch' style={styles.wrap} source={{uri: e}}/>)
                }
            </ScrollView>
            <View style={styles.wrapDot}>
                {
                    images.map((e, index) => (
                        <Text key={e} style={imageActive === index ? styles.dotActive : styles.dot}>●</Text>
                    ))
                }
            </View>
        </View>
    </SafeAreaView>
  )
}

export default SwipeSlider

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    wrap: {
        width: WIDTH,
        height: HEIGHT * 0.25 // chiếm 1/4 so với màn hình thực tế
    },
    wrapDot: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    dotActive: {
        margin: 3,
        color: '#000'
    },
    dot: {
        margin: 3,
        color: '#fff'
    }
})
```

## Scroll To Item Selected Trong FlatList (Vertical, Horizontal)

