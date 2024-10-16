import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const paymentMethods = [
    {
      id: 'paypal',
      label: 'PayPal',
      img: 'https://assets.withfra.me/credit_cards/paypal.png',
    },
    {
      id: 'amex-89001',
      label: 'Amex ••••89001',
      img: 'https://assets.withfra.me/credit_cards/amex.png',
    },
    {
      id: 'visa-3021',
      label: 'Visa ••••3021',
      img: 'https://assets.withfra.me/credit_cards/visa.png',
    },
    {
      id: 'mastercard-4827',
      label: 'Mastercard ••••4827',
      img: 'https://assets.withfra.me/credit_cards/mastercard.png',
    },
    {
      id: 'paypal-2',
      label: 'PayPal',
      img: 'https://assets.withfra.me/credit_cards/paypal.png',
    },
    {
      id: 'amex-89001-2',
      label: 'Amex ••••89001',
      img: 'https://assets.withfra.me/credit_cards/amex.png',
    },
    {
      id: 'visa-3021-2',
      label: 'Visa ••••3021',
      img: 'https://assets.withfra.me/credit_cards/visa.png',
    },
    {
      id: 'mastercard-4827-2',
      label: 'Mastercard ••••4827',
      img: 'https://assets.withfra.me/credit_cards/mastercard.png',
    },
  ];
  

const CreditCardScreen = () => {
    const [form, setForm] = useState<any>(
        {
            paymentMethod: paymentMethods[0].id,
        }
    )

    const handleSelectPaymentMethod = (id: any) => {
      // Kiểm tra nếu đã chọn thì bỏ chọn, ngược lại thì chọn phương thức thanh toán
      if (form.paymentMethod === id) {
          setForm({...form, paymentMethod: null}); // Bỏ chọn nếu nhấn lần thứ hai
        } else {
          setForm({...form, paymentMethod: id}); // Chọn phương thức nếu chưa được chọn
      }
    };

    console.log(form)

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{paddingVertical: 24, paddingHorizontal: 0,}}>
        <View style={{paddingHorizontal: 24}}>
            <Text style={{fontSize: 32, fontWeight: '700'}}>Credit Cards</Text>
        </View>
        <View style={{marginTop: 10, borderWidth: 1, marginHorizontal: 24, borderColor: '#e5e7e5',borderRadius: 10}}>
           {
            paymentMethods.map(({id, label, img}, index) => (
                <TouchableOpacity onPress={() => handleSelectPaymentMethod(id)} key={id} style={[{borderTopWidth: 1, borderColor: '#e5e7e5'}, index === 0 && {borderTopWidth: 0 }]}>
                    <View style={{margin: 10, flexDirection: 'row', alignItems: 'center'}}>
                        <View
                          style={{
                            width: 15,
                            height: 15,
                            borderWidth: form.paymentMethod === id ? 0 : 1,
                            borderColor: '#b0b0b0',
                            borderRadius: 9999,
                            marginRight: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: form.paymentMethod === id ? '#000' : 'transparent', // Đổi màu nếu được chọn
                          }}
                        >
                          <View style={{
                            width: 6,
                            height: 6,
                            borderColor: '#b0b0b0',
                            borderRadius: 9999,
                            backgroundColor: form.paymentMethod === id ? '#fff' : 'transparent', // Đổi màu nếu được chọn
                          }}/>
                        </View>
                        <View style={{
                            borderWidth: 1,
                            borderRadius: 6,
                            padding: 4,
                            borderColor: '#e5e7e5'
                        }}>
                            <Image 
                                alt=""
                                source={{
                                    uri: `${img}`,
                                }}
                                style={{
                                    width: 40,
                                    height: 30,
                                }}
                            />
                        </View>
                        <Text style={{flex: 1, marginLeft: 10}}>{label}</Text>
                    </View>
                </TouchableOpacity>
            ))
           }
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default CreditCardScreen

const styles = StyleSheet.create({})