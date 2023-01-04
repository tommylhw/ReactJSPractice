import React, { Component } from 'react';
import { TouchableOpacity, View,  } from 'react-native';
import { FontAwesome, AntDesign, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const BackBtn = () => {

  const useNav = useNavigation();

  return ( 
    <TouchableOpacity onPress={() => useNav.goBack()}>
      <Ionicons name="arrow-back" size={24} color="black" />
    </TouchableOpacity>
    
   );
}

export default BackBtn;