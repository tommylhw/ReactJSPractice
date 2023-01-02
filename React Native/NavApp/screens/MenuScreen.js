import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ComponentStyleSheet } from '../styles/ComponentStyleSheet';

import CustomNavBtn from '../components/CustomNavBtn';

const MenuScreen = ({ navigation }) => {

  return ( 
    
    <View style={styles.body}>
      
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Menu</Text>
        <View style={ComponentStyleSheet.customNavBtnContainer}><CustomNavBtn /></View>
      </View>

      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.btnContainer}>

          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('ExpoPicker')}>
            <Text>Expo Picker</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('RNElementKit')}>
            <Text style={styles.btnText}>React Native Element UI Toolkit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Menu</Text>
          </TouchableOpacity>

        </View>
        
      </ScrollView>

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

  headerContainer: {
    width: '100%',
    height: 50,
    // alignItems: 'center',
    justifyContent: 'center',
  },

  headerText: {
    marginLeft: 20,
    fontSize: 20,
  },

  scrollViewContainer: {
    width: '100%'
  },

  btnContainer: {
    flex: 1,
    width: '100%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },

  btn: {
    borderWidth: 2,
    borderColor: '#1684fd',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: '40%',
    margin: 10,
    // flex: 1,
    
  },

  btnText: {
    textAlign: 'center',
  },
});

export default MenuScreen;