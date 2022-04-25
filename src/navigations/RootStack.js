import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import AnimateAPI from '../screens/AnimateAPI'

const Stack = createStackNavigator()

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AnimateAPI" component={AnimateAPI} />
    </Stack.Navigator>
  )
}

export default RootStack
