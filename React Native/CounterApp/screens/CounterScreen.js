import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const CounterScreen = ({ navigation }) => {

  const [count, setCount] = useState(0);

  return (

    <View style={styles.body}>

      <Text style={styles.heading}>Counter App Home</Text>
      
      <View style={styles.countGroup}>
        <TouchableOpacity onPress={() => setCount(count => count + 1)}>
          <Text style={styles.countGroup_btn}>+</Text>
        </TouchableOpacity>

        <Text style={styles.countGroup_text}>{count}</Text>

        <TouchableOpacity onPress={() => setCount(count => count - 1)}>
          <Text style={styles.countGroup_btn}>-</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => setCount(0)} style={styles.reset_btn}>
        <Text>Reset</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Another')}>
        <Text style={styles.anotherScreenBtn}>Go to Another Screen</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fff',
    padding: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    // justifyContent: 'center'
  },

  heading: {
    fontSize: 30,
    marginVertical: 50,
  },

  countGroup: {
    flexDirection: 'row',
    margin: 40,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 2,
  },

  countGroup_text: {
    textAlign: 'center',
    fontSize: 80,
    marginHorizontal: 50,
    // borderWidth: 2,
  },

  countGroup_btn: {
    textAlign: 'center',
    fontSize: 80,
    color: 'blue',
    // paddingHorizontal: 30,
    // borderWidth: 2,
  },

  anotherScreenBtn: {
    textAlign: 'center',
    fontSize: 30,
    padding: 30,
    borderWidth: 2,
    borderColor: '#61dafb',
    borderRadius: 20,
  },

  reset_btn: {
    padding: 50
  },


});

export default CounterScreen;