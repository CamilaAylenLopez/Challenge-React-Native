import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from './AuthContext';
import Home from '../screens/Home';
import Login from '../screens/InicioDeSesion';
import Info from '../screens/Info';
import Buscador from '../screens/Buscador'

const Stack = createStackNavigator();

const AppNavigator = () => {
    const { user } = useAuth();
    console.log('user', user);

    return (

        <NavigationContainer>
            <Stack.Navigator>
                {user ? (
                    <>
                        <Stack.Screen name="Home" component={Home} />
                        <Stack.Screen name="Info" component={Info} />
                        <Stack.Screen name="Buscador" component={Buscador} />
                    </>
                ) : (
                    <>
                        <Stack.Screen name="Login" component={Login} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;