import { StatusBar } from 'expo-status-bar';
import React, { useReducer,useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList,SafeAreaView } from 'react-native';
import SecondFilterScreen from './SecondFilterScreen'


export default function FilterScreen({navigation}) {

const [DisplaySubCat, setDisplaySubCat] = useState([]);

const [DisplaySecondFilter1, setDisplaySecondFilter1] =useState(false);
const [DisplaySecondFilter2, setDisplaySecondFilter2] =useState(false);
const [DisplaySecondFilter3, setDisplaySecondFilter3] =useState(false);
const [DisplaySecondFilter4, setDisplaySecondFilter4] =useState(false);
const [DisplaySecondFilter5, setDisplaySecondFilter5] =useState(false);


const [colorButton1,setColorButton1]=useState('orange');
const [colorButton2,setColorButton2]=useState('orange');
const [colorButton3,setColorButton3]=useState('orange');
const [colorButton4,setColorButton4]=useState('orange');
const [colorButton5,setColorButton5]=useState('orange');

var subCat1 = [
  {subcategory: "Sièges Auto"},
  {subcategory: "Nacelles"},
  {subcategory: "Poussettes"},
  {subcategory: "Landeaux"},
  {subcategory: "Portes-Bébé"},
  {subcategory: "Sacs à Langer"},
]

var subCat2 = [
  {subcategory: "de 0 à 3 mois"},
  {subcategory: "de 4 à 6 mois"},
  {subcategory: "de 7 à 12 mois"},
  {subcategory: "de 13 à 18 mois"},
  {subcategory: "de 19 à 24 mois"},
  {subcategory: "de 2 à 3 ans"},
]

var subCat3 = [
  {subcategory: "Baignoires"},
  {subcategory: "Transats de bain"},
  {subcategory: "Lingettes-Serviettes"},
  {subcategory: "Thermometres"},
  {subcategory: "Jouets de bain"},
]

var subCat4 = [
  {subcategory: "Lits bébé"},
  {subcategory: "Lits de voyage"},
  {subcategory: "Linges de lit"},
  {subcategory: "Gigoteuses"},
  {subcategory: "Veilleuses"},
  {subcategory: "Babyphones"},
]

var subCat5 = [
  {subcategory: "Biberons"},
  {subcategory: "Chauffe-Biberons"},
  {subcategory: "Stérilisateurs"},
  {subcategory: "Robots de Cuisine"},
  {subcategory: "Vaiselles"},
  {subcategory: "Accessoires"},
]



var changeColor = () => {
    setColorButton('green');
}
 
if(DisplaySecondFilter1==true){
  setDisplaySubCat(subCat1)
  setDisplaySecondFilter1(false)
}
var test = DisplaySubCat.map((e, i ) => {
  return(<Text>{e.subcategory}</Text>)

})
  



  return (
      <View>
           <Text style={styles.titlePage} >Choisissez une catégorie</Text>
          
          
         
        <Button title='Se déplacer'
        onPress={() =>{ 
        setDisplaySecondFilter1(true); setColorButton1('green')}} 
        color={colorButton1} />
      
        
        <Button title='S habiller'
        onPress={() =>{ 
        setDisplaySecondFilter2(true); setColorButton2('green')}} 
        color={colorButton2} />  
        
        <Button title='Se baigner'  
        onPress={() =>{ 
        setDisplaySecondFilter3(true); setColorButton3('green')}} 
        color={colorButton3} />  

        <Button title='Dormir'
        onPress={() =>{ 
        setDisplaySecondFilter4(true); setColorButton4('green')}} 
        color={colorButton4} /> 

        <Button title='Manger'
        onPress={() =>{ 
        setDisplaySecondFilter5(true); setColorButton5('green')}} 
        color={colorButton5} />  
        {test} 
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