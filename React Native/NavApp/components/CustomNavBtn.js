import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome5';

const CustomNavBtn = () => {

  const useNav = useNavigation();

  return ( 
    
      <TouchableOpacity onPress={() => useNav.toggleDrawer()}>
        <FontAwesome name='bars' size={30} />
      </TouchableOpacity>
   
          
   );
}

const styles = StyleSheet.create({

  

});

export default CustomNavBtn;