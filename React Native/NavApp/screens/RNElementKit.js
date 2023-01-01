import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Button, Divider, ListItem } from '@rneui/themed';

import { ComponentStyleSheet } from '../styles/ComponentStyleSheet';

import BackBtn from '../components/Backbtn';

const RNElementKit = () => {

  const [expanded, setExpanded] = useState(false);

  return ( 
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
      <Text style={styles.headerText}>React Native Element UI Toolkit</Text>
        <View style={ComponentStyleSheet.backBtn}><BackBtn /></View>
      </View>

      <View style={styles.body}>
        <Text>Element Demo</Text>

        <Divider width={1} color='red' style={styles.divider} subHeader='Button' />

        <View>
          <Button title="Solid" />
          <Button title="Outline" type="outline" />
          <Button title="Clear" type="clear" />
        </View>
        
        <Divider width={1} color='red' style={styles.divider} subHeader='List Item with Chevron' />

        <View>
          <ListItem.Accordion
            isExpanded={expanded}
            onPress={() => setExpanded(!expanded)}
            content={
              <>
                <ListItem.Content>
                  <ListItem.Title>Show the items</ListItem.Title>
                </ListItem.Content>
              </>
            }
          >
            {
              list.map((item, index) => (
                <ListItem key={index} bottomDivider>
                  <ListItem.Content>
                    <ListItem.Title>{ item.name }</ListItem.Title>
                    <ListItem.Subtitle>{ item.age }</ListItem.Subtitle>
                  </ListItem.Content>
                  <ListItem.Chevron onPress={() => alert('HelloWorld')} color='blue' style={styles.listChevron} />
                </ListItem>
              ))
            }
          </ListItem.Accordion>
        </View>

      </View>
    </View>
   );
}

const list = [
  {
    name: 'Name01',
    age: 20
  },
  {
    name: 'Name02',
    age: 20
  },
  {
    name: 'Name03',
    age: 20
  }
]

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },

  header: {
    // borderWidth: 2,
    width: '100%',
    // height: 50,
  },

  headerText: {
    marginVertical: 15,
    fontSize: 20,
    marginLeft: 50,
  },

  body: {
    flex: 1,
    padding: 10,
  },

  divider: {
    marginVertical: 10
  },

  listChevron: {
    // borderWidth: 2,
  },
})

export default RNElementKit ;