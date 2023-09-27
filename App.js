import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home';
import InicioDeSesion from './screens/InicioDeSesion';
import MainStack from './navigation/MainStack';
import  { ContextProvider } from './navigation/contextState'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <ContextProvider>
      <SafeAreaView style= {{flex: 1}}>
        {/* <Stack.Screen name='HomeScreen' component={Home}
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
        /> */}
        <MainStack />
      </SafeAreaView>
      </ContextProvider>
  )
}

const styles = StyleSheet.create({
  headerRight: {
    padding: 10,
  }
})