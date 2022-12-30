import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';


import CustomDrawer from './components/CustomDrawer';

import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';

import DropdownListScreen from './screens/DropdownListScreen';

const MenuNavigator = () => {

  const Stack = createNativeStackNavigator();

  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Menu' component={MenuScreen} />
        <Stack.Screen name='DropDownList' component={DropdownListScreen} />
      </Stack.Navigator>
  )
}

const App = () => {

  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName='Home' 
        screenOptions={drawerOption.screenOptions} 
        drawerContentOptions={{
          activeTintColor: 'red',
          itemStyle: { marginVertical: 30 },
        }} 
        drawerContent={(props) => <CustomDrawer {... props} />}>
        <Drawer.Screen name='Home' component={HomeScreen} options={drawerItemList.home} />
        <Drawer.Screen name='Menu' component={MenuNavigator} options={drawerItemList.menu} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const drawerItemList = {
  home: {
    title: 'Home Page',
    drawerIcon: (({focused, size}) => (
      <FontAwesome5 name="home" size={20} color={focused ? '#1684fd' : '#656566'} />
    ))
  },

  menu: {
    title: 'Menu Page',
    drawerIcon: (({focused, size}) => (
      <MaterialIcons name='menu-book' size={20} color={focused ? '#1684fd' : '#656566'} />
    ))
  }
}

const drawerOption = StyleSheet.create({
  screenOptions: {
    headerStyle: { backgroundColor: 'papayawhip' },
    headerShown: false,
    drawerStyle: {
      width: '70%'
    },
  },

  drawerContentOptions: {
    activeTintColor: 'red',
    activeBackgroundColor: 'red'
  },

});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
