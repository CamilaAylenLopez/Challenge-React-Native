import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from './AuthContext';
import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/InicioDeSesion';
import InfoScreen from '../screens/Info';

const Stack = createStackNavigator();

const AppNavigator = () => {
    const { user } = useAuth();
    console.log('user', user);

    return (

        <NavigationContainer>
            <Stack.Navigator>
                {user ? (
                    <>
                        <Stack.Screen name="Home" component={HomeScreen} />
                        <Stack.Screen name="Profile" component={InfoScreen} />
                    </>
                ) : (
                    <>
                        <Stack.Screen name="Login" component={LoginScreen} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;