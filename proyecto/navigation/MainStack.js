import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text } from 'react-native'
import Buscador from '../screens/Buscador.js'
import Home from '../screens/Home.js'

const Stack = createNativeStackNavigator()

const MainStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false,}}>
            
            <Stack.Screen
                name= 'Home'
                component={ Home }
                />
                <Stack.Screen
                name= 'Buscador'
                component={ Buscador }
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack