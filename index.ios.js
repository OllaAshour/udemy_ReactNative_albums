// Import a library to help create a component
import React from 'react';
//Import destructuring {}
import { AppRegistry, View } from 'react-native';
//consuming file export
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
// Create a component
// A componnet is a javascript function that returns some amount of JSX
// A single component per file
// Must return a single component element
const App = () => (
  //component nesting
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

//Render it to the device
//Empty () will render first component
//Only the 'root' component uses the AppRegistry
AppRegistry.registerComponent('Albums', () => App);
