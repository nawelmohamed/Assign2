import React, {useState} from "react";
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import { withNavigation } from "react-navigation";


const HomeScreen = ({navigation}) => {
    const [direction, setDirection]= useState('');
    
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
                const color=('blue');
                console.log({color});
              (navigation.navigate('Right',{direction, color}));
              console.log({direction,color});
            }else {
              const color=('red');
              console.log({color});

              (navigation.navigate('Left',{ direction, color}));
              console.log({direction,color});

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

export default withNavigation (HomeScreen);