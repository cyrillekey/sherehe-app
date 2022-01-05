import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React ,{useState}from 'react';
import { StyleSheet, Text, View,TextInput ,SafeAreaView,Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Login from './components/screens/Login';
import Signup from './components/screens/Signup';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator,CardStyleInterpolators } from '@react-navigation/stack';

//const Stack=createNativeStackNavigator();

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false,cardStyleInterpolator:CardStyleInterpolators.forFadeFromCenter}} >
        <Stack.Screen name="signup" >
          {props=><Signup {...props} />}
        </Stack.Screen>
        <Stack.Screen name="login">
          {props=><Login {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

