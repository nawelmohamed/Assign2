import React from "react";
import {View, Text, StyleSheet, Button} from 'react-native';

const HomeScreen = ({navigation})=> {
      return <View>
          <Button title='Left' onPress={() =>
            navigation.navigate('Left')}/>
          <Button title='Right' onPress={() =>
            navigation.navigate('Right')}/> 
      </View>
};
const Styles= StyleSheet.create({});

export default HomeScreen;