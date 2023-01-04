import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5, MaterialIcons, Octicons, EvilIcons } from '@expo/vector-icons';

const CustomNavBtn = () => {

  const useNav = useNavigation();

  return ( 
    
      <TouchableOpacity onPress={() => useNav.toggleDrawer()}>
        {/* <Octicons name='three-bars' size={25} color='#1f2430'/> */}
        <EvilIcons name='navicon' size={30} color='#1f2430'/>
      </TouchableOpacity>
     
   );
}

const styles = StyleSheet.create({

  

});

export default CustomNavBtn;