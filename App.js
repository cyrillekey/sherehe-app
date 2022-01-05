import { StatusBar } from 'expo-status-bar';
import React ,{useState}from 'react';
import { StyleSheet, Text, View,TextInput ,SafeAreaView,Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Login from './components/screens/Login';
import Signup from './components/screens/Signup';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});
const Stack=createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false,cardStyleInterpolator: forFade,}} >
        <Stack.Screen name="signup">
          {props=><Signup {...props} />}
        </Stack.Screen>
        <Stack.Screen name="login">
          {props=><Login {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

