import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ComponentStyleSheet } from '../styles/ComponentStyleSheet';

import CustomNavBtn from '../components/CustomNavBtn';

const MenuScreen = () => {

  return ( 
    
    <View style={styles.body}>
      
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Menu</Text>
        <View style={ComponentStyleSheet.customNavBtnContainer}><CustomNavBtn /></View>
      </View>

      <ScrollView style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn}>
          <Text>DropDownList1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text>DropDownList2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text>DropDownList3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text>DropDownList4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text>DropDownList4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text>DropDownList4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text>DropDownList4</Text>
        </TouchableOpacity>
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

  btnContainer: {
    flex: 1,
    borderWidth: 2,
    width: '100%',
    padding: 10,
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
    width: '100%',
    marginTop: 20,
    // flex: 1,
    
  },
});

export default MenuScreen;