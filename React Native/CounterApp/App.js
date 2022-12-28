import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const App = () => {

  const [count, setCount] = useState(0);

  return (
    <View style={styles.body}>

      <Text style={styles.heading}>Counter App</Text>
      
      <View style={styles.countGroup}>
        <TouchableOpacity onPress={() => setCount(count => count + 1)}>
          <Text style={styles.countGroup_btn}>+</Text>
        </TouchableOpacity>

        <Text style={styles.countGroup_text}>{count}</Text>

        <TouchableOpacity onPress={() => setCount(count => count - 1)}>
          <Text style={styles.countGroup_btn}>-</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => setCount(0)}>
        <Text>Reset</Text>
      </TouchableOpacity>

      <TouchableOpacity><Text style={styles.sendBtn}>Send</Text></TouchableOpacity>

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

  sendBtn: {
    fontSize: 30,
    margin: 50,
    marginTop: 130,
    paddingVertical: 30,
    paddingHorizontal: 80,
    borderWidth: 2,
    borderColor: '#61dafb',
    borderRadius: 20,
  },


});

export default App;
