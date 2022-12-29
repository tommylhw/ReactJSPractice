import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

import CustomNavBtn from '../components/CustomNavBtn';


const HomeScreen = () => {
  return ( 
    <View style={styles.body}>
      <StatusBar style='auto' />
      <Text>Home</Text>
      <CustomNavBtn />
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

export default HomeScreen;