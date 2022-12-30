import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import { ComponentStyleSheet } from '../styles/ComponentStyleSheet';

import CustomNavBtn from '../components/CustomNavBtn';


const HomeScreen = () => {
  return ( 
    <View style={styles.body}>
      <StatusBar style='auto' />

      <Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text>
      
      <View style={ComponentStyleSheet.customNavBtnContainer}><CustomNavBtn /></View>
    
    </View>
   );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',

  },

});

export default HomeScreen;