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