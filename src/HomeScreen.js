import React from "react";
import {View, Text, StyleSheet, Button} from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({navigation})=> {
      return <View style={Styles.row}>
          <Button
          title='Left' 
          color='red'
          onPress={() =>
            navigation.navigate('Left')}/>
          <Button 
          title='Right'
          color='blue'
          onPress={() =>
            navigation.navigate('Right')}/> 
      </View>
};
const Styles= StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
    
        border: 1,
        borderColor: "gray"
    }
});

export default HomeScreen;