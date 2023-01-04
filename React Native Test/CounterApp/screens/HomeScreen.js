import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {

  const [count, setCount] = useState(0);

  return (

    <View style={styles.body}>
      <Text>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fff',
    padding: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  


});

export default HomeScreen;