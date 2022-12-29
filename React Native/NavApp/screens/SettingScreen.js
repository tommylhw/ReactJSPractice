import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const SettingScreen = () => {

  const Stack = createNativeStackNavigator();

  return ( 
    
    <View style={styles.body}>
      
      <View>
        <Text>Setting</Text>
      </View>

    </View>
   );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SettingScreen;