import React, { Component } from 'react';
import { StyleSheet, View , Text } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Linking } from 'react-native';

const CustomDrawer = (props) => {
  return ( 
    <View style={styles.container}>
      {/* header */}
      <View>
        <Text>HelloWorld</Text>
        <Text>This is the heading</Text>
      </View>

      {/* Drawer list item */}
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem 
          label="Help" 
          onPress={() => Linking.openURL('https://reactnavigation.org/docs/5.x/drawer-navigator')} 
          inactiveTintColor='red'
        />
      </DrawerContentScrollView>

      {/* footer */}
      <View>
        <Text>HelloWorld</Text>
        <Text>This is the footer</Text>
      </View>
    </View>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});

export default CustomDrawer;