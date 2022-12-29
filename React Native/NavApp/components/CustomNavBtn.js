import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome5';

const CustomNavBtn = () => {

  const useNav = useNavigation();

  return ( 
    <View style={styles.container}>

      <TouchableOpacity style={styles.navbtn} onPress={() => useNav.toggleDrawer()}>
        <FontAwesome name='bars' size={30} />
      </TouchableOpacity>
      
    </View>
   );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  container: {
    backgroundColor: 'red',
    // position: 'absolute',
    // height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
    // width: '100%'
  },

  navbtn: {
    top: 0,
    right: 0
  }
});

export default CustomNavBtn;