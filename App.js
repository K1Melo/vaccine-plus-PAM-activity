import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './scr/screens/LoginScreen';
import SingnupScreen from './scr/screens/SingnupScreen';
import RegisterPet from './scr/screens/RegisterPet';
import AddVaccine from './scr/screens/AddVaccine';
import ConfirmComponent from './scr/components/ConfirmComponent';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Signup" component={SingnupScreen}/>
        <Stack.Screen name="RegisterPet" component={RegisterPet}/>
        <Stack.Screen name="AddVaccine" component={AddVaccine}/>
        <Stack.Screen name="ConfirmComponent" component={ConfirmComponent}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})