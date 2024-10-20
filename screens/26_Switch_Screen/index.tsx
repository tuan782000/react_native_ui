// import { StyleSheet, Text, View, Switch, SafeAreaView } from 'react-native'
// import React, { useState } from 'react'

// const SwitchScreen = () => {
//     const [switchStatus, setSwitchStatus] = useState(false);

//     const onChangeSwitchStatus = (value) => {
//         setSwitchStatus(value)
//     }
//   return (
//     <SafeAreaView style={{flex: 1}}>
//         <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <Text>
//             {
//                 switchStatus ? "Status On" : "Status Off"
//             }
//         </Text>
//         <Switch value={switchStatus} onValueChange={onChangeSwitchStatus}/>
//         </View>
//     </SafeAreaView>
//   )
// }

// export default SwitchScreen

// const styles = StyleSheet.create({})

import { StyleSheet, Text, View, Switch, SafeAreaView } from 'react-native'
import React, { useState } from 'react'

const SwitchScreen = () => {
    const [switchStatus, setSwitchStatus] = useState(false);


  return (
    <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>
            {
                switchStatus ? "Status On" : "Status Off"
            }
        </Text>
        <Switch value={switchStatus} onValueChange={(val) => setSwitchStatus(val)}/>
        </View>
    </SafeAreaView>
  )
}

export default SwitchScreen

const styles = StyleSheet.create({})