// Import a library to help create a component
import React from 'react';
//Import destructuring {}
import { AppRegistry } from 'react-native';
//consuming file export
import Header from './src/components/header';

// Create a component
// A componnet is a javascript function that returns some amount of JSX
// A single component per file
const App = () => (
    <Header /> //component nesting
);

//Render it to the device
//Empty () will render first component
//Only the 'root' component uses the AppRegistry
AppRegistry.registerComponent('Albums', () => App);
