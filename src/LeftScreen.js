import React from "react";
import {View, Text, StyleSheet, Button} from 'react-native';


const LeftScreen = ({direction, color})=> {
      return <View>
          <View style={Styles.row}>
          <Text>Direction:{direction}</Text>
          </View>
          <View style={Styles.row}>

          <Text>Color:{color}</Text>
          </View>
      </View>
};
const Styles= StyleSheet.create({
    row: {
        
        justifyContent: "center",
        padding: 30,
    
        border: 3,
        borderColor: "gray"
    }
});

export default LeftScreen;