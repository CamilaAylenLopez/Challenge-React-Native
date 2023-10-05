import { NavigationContainer, StackRouter } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Buscador from '../screens/Buscador'
import Home from '../screens/Home'
import InicioDeSesion from '../screens/InicioDeSesion'
import Info from '../screens/Info'
import { useAuth } from '../navigation/AuthContext';

const Stack = createNativeStackNavigator();

const MainStack = () => {
    const { user } = useAuth();
    console.log('user', user);
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false, }}>
                {user ? (
                    <>
                        <Stack.Screen
                            name='Home'
                            component={Home}
                        />
                        <Stack.Screen
                            name='Buscador'
                            component={Buscador}
                        />
                        <Stack.Screen
                            name='Info'
                            component={Info}
                        />
                    </>
                ) : (
                    <Stack.Screen
                        name='InicioDeSesion'
                        component={InicioDeSesion}
                    />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack