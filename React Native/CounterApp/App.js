import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import AnotherScreen from './screens/AnotherScreen';
import CounterScreen from './screens/CounterScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name='Home' component={HomeScreen} />
    //     <Stack.Screen name='Counter' component={CounterScreen} />
    //     <Stack.Screen name='Another' component={AnotherScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Home' component={HomeScreen} />
        <Drawer.Screen name='Counter' component={CounterScreen} />
        <Drawer.Screen name='Another' component={AnotherScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
    


  )
}

export default App;
