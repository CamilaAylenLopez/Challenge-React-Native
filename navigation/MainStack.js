import { NavigationContainer, StackRouter } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text } from 'react-native'
import Buscador from '../screens/Buscador'
import Home from '../screens/Home'
import InicioDeSesion from '../screens/InicioDeSesion'
import Info from '../screens/Info'

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
                name= 'InicioDeSesion'
                component={ InicioDeSesion }
                />
                
                <Stack.Screen
                name= 'Buscador'
                component={ Buscador }
                />
                <Stack.Screen
                name= 'Info'
                component={ Info }
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack