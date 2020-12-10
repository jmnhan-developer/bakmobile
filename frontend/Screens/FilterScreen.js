import { StatusBar } from 'expo-status-bar';
import React, { useReducer,useState } from 'react';
import { StyleSheet, Text, View, FlatList,SafeAreaView } from 'react-native';
import { Card, ListItem, Button, CheckBox } from 'react-native-elements'
import {Picker} from '@react-native-picker/picker';

export default function FilterScreen({navigation}) {

const [DisplaySubCat, setDisplaySubCat] = useState([]);

const [DisplaySecondFilter1, setDisplaySecondFilter1] =useState(false);
const [DisplaySecondFilter2, setDisplaySecondFilter2] =useState(false);
const [DisplaySecondFilter3, setDisplaySecondFilter3] =useState(false);
const [DisplaySecondFilter4, setDisplaySecondFilter4] =useState(false);
const [DisplaySecondFilter5, setDisplaySecondFilter5] =useState(false);


const [colorButton1,setColorButton1]=useState(false);
const [colorButton2,setColorButton2]=useState(false);
const [colorButton3,setColorButton3]=useState(false);
const [colorButton4,setColorButton4]=useState(false);
const [colorButton5,setColorButton5]=useState(false);

const [subCatSelected, setSubCatSelected]= useState(false);
const [subCatName, setSubCatName]= useState('');


console.log(subCatSelected)
console.log(subCatName
  )


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

 
if(DisplaySecondFilter1==true){
  setDisplaySubCat(subCat1)
  setDisplaySecondFilter1(false)
}
else if (DisplaySecondFilter2==true){
  setDisplaySubCat(subCat2)
  setDisplaySecondFilter2(false)
}
else if (DisplaySecondFilter3==true){
  setDisplaySubCat(subCat3)
  setDisplaySecondFilter3(false)
}
else if (DisplaySecondFilter4==true){
  setDisplaySubCat(subCat4)
  setDisplaySecondFilter4(false)
}
else if (DisplaySecondFilter5==true){
  setDisplaySubCat(subCat5)
  setDisplaySecondFilter5(false)
}


var validationButton

if(subCatSelected==true){
 validationButton=
    <Button
        buttonStyle={{ marginTop:10, backgroundColor:'#82589F'}}
        containerStyle={{width:300, height:50, alignSelf:'center'}}
        title='Rechercher' 
        onPress= {() => navigation.navigate('Result')}/>
}

  return (
      <View>
           <Text style={styles.titlePage} >Choisissez une catégorie</Text>
      

        <View style={styles.buttonRow}>
          <Button title='Se déplacer'
          containerStyle={{width:140, height:50}}
          buttonStyle={colorButton1?{backgroundColor:'#82589F'}:{backgroundColor:'#D6A2E8'}}
          onPress={() =>{ 
          setDisplaySecondFilter1(true); 
          setColorButton1(!colorButton1); 
          setColorButton2(false); 
          setColorButton3(false);
          setColorButton4(false);
          setColorButton5(false)}} 
           />
        
          
          <Button title="S'habiller"
          containerStyle={{width:140, height:50}}
          buttonStyle={colorButton2?{backgroundColor:'#82589F'}:{backgroundColor:'#D6A2E8'}}
          onPress={() =>{ 
          setDisplaySecondFilter2(true); 
          setColorButton2(!colorButton2); 
          setColorButton1(false); 
          setColorButton3(false);
          setColorButton4(false);
          setColorButton5(false)}} 
           />  
        </View>
        
        <View style={styles.buttonRow}>
          <Button title='Se baigner'  
          containerStyle={{width:140, height:50}}
          buttonStyle={colorButton3?{backgroundColor:'#82589F'}:{backgroundColor:'#D6A2E8'}}
          onPress={() =>{ 
          setDisplaySecondFilter3(true); 
          setColorButton3(!colorButton3); 
          setColorButton1(false); 
          setColorButton2(false);
          setColorButton4(false);
          setColorButton5(false)}} 
           />  

          <Button title='Dormir'
          containerStyle={{width:140, height:50}}
          buttonStyle={colorButton4?{backgroundColor:'#82589F'}:{backgroundColor:'#D6A2E8'}}
          onPress={() =>{ 
          setDisplaySecondFilter4(true); 
          setColorButton4(!colorButton4); 
          setColorButton1(false); 
          setColorButton2(false);
          setColorButton3(false);
          setColorButton5(false)}} 
           /> 
        </View>
        
        <View style={styles.buttonRow}>
          <Button title='Manger'
          containerStyle={{width:140, height:50}}
          buttonStyle={colorButton5?{backgroundColor:'#82589F'}:{backgroundColor:'#D6A2E8'}}
          onPress={() =>{ 
          setDisplaySecondFilter5(true); 
          setColorButton5(!colorButton5); 
          setColorButton1(false); 
          setColorButton2(false);
          setColorButton3(false);
          setColorButton4(false)}} 
           /> 
        </View>    
            <View style={styles.buttonRow2}>
                <Picker
                  selectedValue={subCatName}
                  style={{height: 50, width: 300, justifyContent:'center'}}
                  
                  onValueChange={(itemValue, itemIndex) => {
                    setSubCatName(itemValue);
                    setSubCatSelected(true)}
                  }>

                  {DisplaySubCat.map((e, i ) => {
                  return(
                    <Picker.Item label={e.subcategory} value={e.subcategory} />
                  )}
                )}
                    
                </Picker>
              </View>

        {validationButton}
          </View>
     
    
  );
}

const styles = StyleSheet.create({
  
      container: {
      marginTop:5 ,
  },
  titlePage:{

      marginTop:80,
      marginLeft:75,
      fontSize:20,
      marginBottom:80,
  },
  buttonRow: {
    flexDirection:'row',
    justifyContent:'space-around',
    margin:10,

  },
  buttonRow2: {
    flexDirection:'row',
    justifyContent:'space-around',
    margin:70,
  }

})
