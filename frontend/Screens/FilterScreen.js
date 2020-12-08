import { StatusBar } from 'expo-status-bar';
import React, { useReducer,useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList,SafeAreaView } from 'react-native';
import SecondFilterScreen from './SecondFilterScreen'


export default function FilterScreen({navigation}) {

const [DisplaySecondFilter, setDisplaySecondFilter] =useState(false);
const [colorButton1,setColorButton1]=useState('orange');
const [colorButton2,setColorButton2]=useState('orange');
const [colorButton3,setColorButton3]=useState('orange');
const [colorButton4,setColorButton4]=useState('orange');
const [colorButton5,setColorButton5]=useState('orange');
const [colorButton6,setColorButton6]=useState('orange');
var changeColor = () => {
    setColorButton('green');
}
 
      if(DisplaySecondFilter==true){
        var secondFilter= (<SecondFilterScreen/>)
      }else{

        var secondFilter=(<Text></Text>);

      }



  return (
      <View>
           <Text style={styles.titlePage} >Choisissez une catégorie</Text>
          
          
         
        <Button title='Se déplacer'
        onPress={() =>{ 
        setDisplaySecondFilter(true); setColorButton1('green')}} 
        color={colorButton1} />
      
        
        <Button title='S habiller'
        onPress={() =>{ 
        setDisplaySecondFilter(true); setColorButton2('green')}} 
        color={colorButton2} />  
        
        <Button title='Se baigner'  
        onPress={() =>{ 
        setDisplaySecondFilter(true); setColorButton3('green')}} 
        color={colorButton3} />  

        <Button title='Dormir'
        onPress={() =>{ 
        setDisplaySecondFilter(true); setColorButton4('green')}} 
        color={colorButton4} /> 

        <Button title='Accessoires' 
        onPress={() =>{ 
        setDisplaySecondFilter(true); setColorButton5('green')}} 
        color={colorButton5} />  

        <Button title='Autre'
        onPress={() =>{ 
        setDisplaySecondFilter(true); setColorButton6('green')}} 
        color={colorButton6} />  
        {secondFilter} 
          </View>
          
   
     
    
  );
}

const styles = StyleSheet.create({
  
      container: {
      marginTop:5 ,
  },
  titlePage:{

      marginTop:40,
      marginLeft:75,
      fontSize:20
  },
  

})