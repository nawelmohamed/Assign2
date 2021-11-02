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
            onPress={()=>{              

              if (direction === 'right') {
              (navigation.navigate('Right',{direction}))
              console.log('hi there')
            }else {
              
              (navigation.navigate('Left',{direction, color}))
              console.log('hi')

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