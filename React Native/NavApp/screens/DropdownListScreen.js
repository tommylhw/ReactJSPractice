import React, { Component, useState, useRef } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FontAwesome, AntDesign, Ionicons } from '@expo/vector-icons';
import {Picker} from '@react-native-picker/picker';

import { ComponentStyleSheet } from '../styles/ComponentStyleSheet';

import BackBtn from '../components/Backbtn';

const DropdownListScreen = () => {

  const [selectedItem, setSelectedItem] = useState();
  const pickerRef = useRef();

  // const openPicker = () => pickerRef.current.focus();
  // const closePicker = () => pickerRef.current.blur();

  return ( 
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <View style={ComponentStyleSheet.backBtn}><BackBtn /></View>
      </View>
      

      {/* body */}
      <View style={styles.body}>
        <Text>Picker</Text>
        <Picker
          ref={pickerRef}
          selectedValue={selectedItem}
          onValueChange={(itemValue, itemIndex) => setSelectedItem(itemValue)}
          style={styles.pickerContainer}
          mode='dialog'
          prompt='Select Here' // this only works with dialog mode
          dropdownIconColor='#1684fd'
        >
          <Picker.Item label='Item01' value="Item01" color='red' />
          <Picker.Item label='Item02' value="Item02" color='blue'/>
        </Picker>
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
    height: 50,
  },

  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  pickerContainer: {
    width: '80%',
    height: 50,
    backgroundColor: '#d8d8d8',
  },
})

export default DropdownListScreen;