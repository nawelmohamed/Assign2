import React, {useState} from "react";
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
    const [direction, setDirection]= useState('');
    const [color,setColor]=useState('');
    return (
    <View>
        <Text style={styles.label}>Enter Text</Text>
        <TextInput
           style={styles.input} 
           value={direction} 
           onChangeText={text=> setDirection(text)}
        />
             
            <Button 
            title={direction}
            onPress={(direction, color)=>{
              if (direction==='Right') {
              (navigation.navigate('Right',{direction}))
            }else {
              (navigation.navigate('Left',{direction}))
              }
            }}/>
               
            

    </View>
    );
};

const styles= StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        margin:5,
        padding: 5
    },
    label:{
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
});

export default HomeScreen;