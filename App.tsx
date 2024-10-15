import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { LoginScreen, RegisterScreen } from './screens'

type Props = {}

const App = (props: Props) => {
  return (
    <>
      {/* <LoginScreen /> */}
      <RegisterScreen />
    </>
  )
}

export default App

