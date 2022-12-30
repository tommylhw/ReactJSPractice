import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { ComponentStyleSheet } from '../styles/ComponentStyleSheet';
import { FontAwesome } from '@expo/vector-icons';

import CustomNavBtn from '../components/CustomNavBtn';


const HomeScreen = () => {
  return ( 
    <View style={styles.body}>
      <StatusBar style='auto' />

      <Text>Home</Text>
      
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