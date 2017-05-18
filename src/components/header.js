// Import a library to help create a component
import React from 'react';
import { Text, View } from 'react-native';

// Create a component
// Same name as file
const Header = () => {
   //destructuring
    const { textStyle, viewStyle } = styles;
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>Albums</Text>
      </View>
    );
};

//justifyContent --> Vertical
//alignItems --> Horizontal
const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 24
  }
};
// Make the component available to other parts of the app
export default Header;