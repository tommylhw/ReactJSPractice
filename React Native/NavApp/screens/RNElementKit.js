import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { ComponentStyleSheet } from '../styles/ComponentStyleSheet';

import BackBtn from '../components/Backbtn';

const RNElementKit = () => {
  return ( 
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
      <Text style={styles.headerText}>React Native Element UI Toolkit</Text>
        <View style={ComponentStyleSheet.backBtn}><BackBtn /></View>
      </View>

      <View style={styles.body}>

      </View>
    </View>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },

  header: {
    // borderWidth: 2,
    width: '100%',
    // height: 50,
  },

  headerText: {
    marginVertical: 15,
    fontSize: 20,
    marginLeft: 50,
  },

  body: {
    flex: 1,

  },
})

export default RNElementKit ;