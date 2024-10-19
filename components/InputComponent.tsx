import React, { ReactNode } from 'react';
import { TextInput, StyleSheet, View, KeyboardTypeOptions, StyleProp, ViewStyle, TouchableOpacity } from 'react-native';

interface Props {
    value: string,
    onChangeText: (text: string) => void,
    placeholder?: string,
    keyboardType?: KeyboardTypeOptions,
    secureTextEntry?: boolean,
    maxLength?: number,
    multiline?: boolean,
    autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined,
    viewStyle?: StyleProp<ViewStyle>,
    styleInput?: StyleProp<ViewStyle>,
    prefixIcon?: ReactNode, // ReactNode là một kiểu dữ liệu rất linh hoạt, dùng để chỉ bất kỳ giá trị nào có thể được React render (hiển thị) trong giao diện người dùng.
    suffixIcon?: ReactNode,
    allowClear?: ReactNode,
}


const InputComponent = (props: Props) => {
    const {
        value,
        onChangeText,
        placeholder,
        keyboardType = 'default',
        secureTextEntry = false,
        maxLength,
        multiline = false,
        autoCapitalize,
        viewStyle,
        styleInput,
        prefixIcon,
        suffixIcon,
        allowClear,
    } = props
    
    // Hàm clear input
    const handleClearInput = () => {
        onChangeText('');
    }

    // Tính toán chiều cao và textAlignVertical dựa trên multiline
    const inputHeight = multiline ? 100 : 40;
    const inputTextAlignVertical = multiline ? 'top' : 'center';
    
  return (
    <View style={[styles.container, viewStyle]}>
      {
        prefixIcon && prefixIcon
      }
      <TextInput
        style={[styles.input, styleInput, { height: inputHeight, textAlignVertical: inputTextAlignVertical }]} // Truyền giá trị đã tính vào style
        value={value} // Giá trị hiện tại
        onChangeText={onChangeText} // Callback khi thay đổi nội dung
        placeholder={placeholder} // Văn bản nhắc khi trống
        keyboardType={keyboardType} // Loại bàn phím (mặc định: text)
        secureTextEntry={secureTextEntry} // Ẩn văn bản (mật khẩu)
        maxLength={maxLength} // Giới hạn ký tự
        multiline={multiline} // Nhập nhiều dòng
        autoCapitalize={autoCapitalize}
      />
      {
        suffixIcon && suffixIcon
      }
      {
        allowClear && value.length > 0 && (
            <TouchableOpacity onPress={handleClearInput}>
                {allowClear}
            </TouchableOpacity>
        )
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});

export default InputComponent;