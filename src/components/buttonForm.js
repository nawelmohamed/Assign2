import React, {useState} from "react";
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationContext } from "react-navigation";

const BlogPostForm = ({onSubmit,initialValues}) => {
    const [direction, setDirection]= useState('');
    const color='';
    return (
    <View>
        <Text style={styles.label}>Enter Text</Text>
        <TextInput
           style={styles.input} 
           value={direction} 
           onChangeText={text=> setDirection(text)}
        />
        if (dirction==='Left'){
            color='red'
        }else{
            color='blue'
        }
        if (direction === 'Left'){
         
          <TouchableOpacity
         
           onPress={()=>onSubmit(()=>{NavigationContext.navigate('>Left',color,direction)})}>
           </TouchableOpacity>
}else{
    <TouchableOpacity
         
    onPress={()=>onSubmit(()=>{NavigationContext.navigate('Right',color,direction)})}>
    </TouchableOpacity>
}
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

export default BlogPostForm;