import React from "react";
import {View, Text, StyleSheet, Button} from 'react-native';

const LeftScreen = ()=> {
      return <View>
          <View style={Styles.row}>
          <Text>Direction:   'left'</Text>
          </View>
          <View style={Styles.row}>

          <Text>Color:   'Red'</Text>
          </View>
      </View>
};
const Styles= StyleSheet.create({
    row: {
        
        justifyContent: "center",
        padding: 30,
    
        border: 1,
        borderColor: "gray"
    }
});

export default LeftScreen;