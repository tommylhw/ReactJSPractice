import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';

const App = () => {

  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
        <Drawer.Screen name='Home' component={HomeScreen} />
        <Drawer.Screen name='Menu' component={MenuScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
