import React from "react";
import {View, Text, StyleSheet, Button} from 'react-native';


const RightScreen = ({direction})=> {
    

      return <View>
          <View style={Styles.row}>
          <Text>Direction: {direction}</Text>
          </View>
          <View style={Styles.row}>
          <Text>Color:'blue'</Text>
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

export default RightScreen;