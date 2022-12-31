import React, { Component, useState, useRef } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FontAwesome, AntDesign, Ionicons } from '@expo/vector-icons';
import {Picker} from '@react-native-picker/picker';

import { ComponentStyleSheet } from '../styles/ComponentStyleSheet';

import BackBtn from '../components/Backbtn';

const DropdownListScreen = () => {

  const [selectedItem, setSelectedItem] = useState();
  const pickerRef = useRef();

  const openPicker = () => pickerRef.current.focus();
  const closePicker = () => pickerRef.current.blur();

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
        >
          <Picker.Item label='Item01' value="Item01" />
          <Picker.Item label='Item02' value="Item02" />
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
})

export default DropdownListScreen;