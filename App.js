import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home';
import InicioDeSesion from './screens/InicioDeSesion';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='HomeScreen' component={Home}
          options={({navigation}) => ({
            title: "HomeScreen",
            headerStyle: {
              backgroundColor: 'lightcoral'
            },
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={styles.headerRight}>Ir a Login</Text>
              </TouchableOpacity>
            )
        })} />
        <Stack.Screen name='LoginScreen' component={InicioDeSesion}
          options={() => ({
            title: "LoginScreen",
            headerStyle: {
              backgroundColor: 'lightblue'
            }
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  headerRight: {
    padding: 10,
  }
})