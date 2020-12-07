import { StatusBar } from 'expo-status-bar';
import React, { useReducer,useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList,SafeAreaView } from 'react-native';
import SecondFilterScreen from './SecondFilterScreen'


export default function FilterScreen() {

const [DisplaySecondFilter, setDisplaySecondFilter] =useState(false);
const [colorButton,setColorButton]=useState('orange');

var changeColor = () => {
    setColorButton('green');
}
    const DATA = [
        {
            title: 'Se déplacer',
            color:'orange'
        },
        {
            title: 'S habiller',
            color:'orange'
        },
        {
            title: 'Se baigner',
            color:'orange'
        },
        {
            title: 'Dormir',
            color:'orange'
          },
          {
            title: 'Accessoires',
            color:'orange'

          },
          {
            title: 'Autre',
            color:'orange'
          }
      ];

      if(DisplaySecondFilter==true){
          
        var secondFilter= (<SecondFilterScreen/>)
      }else{
        var secondFilter=(<Text></Text>);
      }


var listButton1= DATA.map(function(e,i){
    return ( <Button title={e.title} 
        
        onPress={() =>{ 

        setDisplaySecondFilter(true); changeColor()}} 
         
        style={styles.listButton} 
        
        color={colorButton} />)
 })


  return (
      <View>

           <Text style={styles.titlePage} >Choisissez une catégorie</Text>
             {listButton1}
             {secondFilter}
           <StatusBar style="auto" />

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
  listButton:{

      marginBottom:30
      
  }

})