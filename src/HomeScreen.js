import React from "react";
import {View, Text, StyleSheet, Button} from 'react-native';

const HomeScreen = ({navigation})=> {
      return <View style={Styles.row} >
          <Button 
          title='Left' 
           
          onPress={() =>
            navigation.navigate('Left')}/>
          <Button title='Right' onPress={() =>
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