import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, ScrollView, Text, View, Picker,TouchableOpacity,AsyncStorage  } from 'react-native';
import {Button, Input, Image} from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import {connect} from 'react-redux';

import { SafeAreaView } from 'react-navigation';

import {IP_HOST} from '../variable'

function SellScreen(props) {
  
  
  const [titleInput , setTitleInput ] = useState("");
  
  const [desc , setDesc ] = useState("");
  const [brand , setBrand ] = useState("");
  const [price , setPrice ] = useState("");
  const [shippingFees , setShippingFees ] = useState("");
  const [age, setAge] = useState('');

  const [catName, setCatName] = useState('');
  const [selectedCatName, setSelectedCatName] = useState(false)
  const [DisplaySubCat, setDisplaySubCat] = useState([]);
  const [subCatName, setSubCatName]= useState('');
  const [selectedValueState, setSelectedValueState] = useState("");


  

  useEffect(() => {
    AsyncStorage.getItem('userToken', (err, value) => {
      if(value){ 
      
        props.onSubmitToken(value);
        console.log('value from SellScreen:',value);
        
      }
    })
  }, []);


console.log(props.takeId,'id from sell page ------ ------')
  


  var typeOfAction= 'vendeur';
 
  console.log('id from reducer SellScreen',props.takeToken)

  var handleClick = async () => {
    

  if(props.takeToken!='')
    
     { 
   
    var image = JSON.stringify(props.addPhoto);
    // console.log('tableau photos',image)
    const dataArticle = await fetch(`http://${IP_HOST}:3000/articles/create-article`, {
      method: 'POST',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: `title=${titleInput}&description=${desc}&brand=${brand}&price=${price}&shippingFees=${shippingFees}&age=${age}&category=${catName}&subcategory=${subCatName}&state=${selectedValueState}&images=${image}&sellerToken=${props.takeToken}`
    });
                               
    // console.log("dataArticle",dataArticle)
    const dataAnnonce = await dataArticle.json()
    console.log("dataAnnonce", dataAnnonce)
    props.navigation.navigate('ArticleSell')
  }else{
    props.navigation.navigate('SignIn')
  }}


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
  
   
  if(catName=="Se déplacer" && selectedCatName==true){
    setDisplaySubCat(subCat1)
    setSelectedCatName(false)

  }
  else if (catName=="S'habiller" && selectedCatName==true){
    setDisplaySubCat(subCat2)
    setSelectedCatName(false)
  }
  else if (catName=="Se baigner" && selectedCatName==true){
    setDisplaySubCat(subCat3)
    setSelectedCatName(false)
  }
  else if (catName=="Dormir" && selectedCatName==true){
    setDisplaySubCat(subCat4)
    setSelectedCatName(false)
  }
  else if (catName=="Manger" && selectedCatName==true){
    setDisplaySubCat(subCat5)
    setSelectedCatName(false)
  }


  return (
    <View style={styles.container}>
      <ScrollView style={{width: '90%'}}>

        {/* <Text style={{marginTop:40,textAlign: 'center'}}>Jusqu'à 6 photos</Text> */}
       
        <Button
          buttonStyle={{marginTop:60, marginBottom:40, borderColor:"#82589F"}}
          titleStyle={{fontSize:25, color:"#82589F"}}
          icon={
              <FontAwesome name="camera" size={24}  color="#82589F"/>
              }            
          title=" Ajouter des photos"
          type="outline"
          onPress= {() => props.navigation.navigate('AddPic')}
        />
     
         <View style={{ flexDirection:'row', marginTop:2, marginBottom:20,justifyContent:"space-between"}}>
          <View>
            <Image source={{uri:props.addPhoto[0]}} style={{height:70, width:60}}/>
            
          </View>
          <View>
          <Image source={{uri:props.addPhoto[1]}} style={{height:70, width:60}}/>
            
          </View>
          <View>
          <Image source={{uri:props.addPhoto[2]}} style={{height:70, width:60}}/>
           
          </View>

          <View>
          <Image source={{uri:props.addPhoto[3]}} style={{height:70, width:60}}/>
           
          </View>

          <View>
          <Image source={{uri:props.addPhoto[4]}} style={{height:70, width:60}} />
           
          </View>
        </View>

        <Input style = {{ width: '90%'}}
          placeholder='Titre'
          onChangeText={(val) => setTitleInput(val)}
        />
        <Input style = {{ width: '90%'}}
          placeholder="Descrition de l'annonce"
          onChangeText={(val) => setDesc(val)}
        />
        <Input style = {{ width: '90%'}}
          placeholder="Marque"
          onChangeText={(val) => setBrand(val)}
        />
        <Input style = {{ width: '90%'}}
          placeholder='Prix'
          onChangeText={(val) => setPrice(val)}
          keyboardType='numeric'
        />
        <Input style = {{ width: '90%'}}
          placeholder='Frais de port'
          keyboardType = 'numeric'
          onChangeText={(val) => setShippingFees(val)}
          keyboardType='numeric'

        />
        <Input style = {{ width: '90%'}}
          placeholder='Age'
          onChangeText={(val) => setAge(val)}
        />

        <View style={styles.buttonRow2}>
              <Picker
                 selectedValue={catName}
                  style={{height: 50, width: 300, justifyContent:'center'}}
                  
                  onValueChange={(itemValue, itemIndex) => {
                    setCatName(itemValue);
                    setSelectedCatName(true)
                    }
                  }>
                    <Picker.Item label="Catégories" value="" />
                    <Picker.Item label="Se déplacer" value="Se déplacer" />
                    <Picker.Item label="S'habiller" value="S'habiller" />
                    <Picker.Item label="Se baigner" value="Se baigner" />
                    <Picker.Item label="Dormir" value="Dormir" />
                    <Picker.Item label="Manger" value="Manger" />
                </Picker>
              </View>

              <View style={styles.buttonRow2}>
                <Picker
                  selectedValue={subCatName}
                  style={{height: 50, width: 300, justifyContent:'center'}}
                  
                  onValueChange={(itemValue, itemIndex) => {
                    setSubCatName(itemValue)}}>

                  {DisplaySubCat.map((e, i ) => {
                  return(
                    <Picker.Item label={e.subcategory} value={e.subcategory} />
                  )}
                )}
                </Picker>
              </View>

              <View style={styles.buttonRow2}>
              <Picker
                 selectedValue={selectedValueState}
                  style={{height: 50, width: 300, justifyContent:'center'}}
                  
                  onValueChange={(itemValue, itemIndex) => {
                    setSelectedValueState(itemValue);
                    
                    }
                  }>
                    <Picker.Item label="Etat" value="" />
                    <Picker.Item label="Neuf" value="Neuf" />
                    <Picker.Item label="Bon état" value="Bon état" />
                    <Picker.Item label="Etat d'usage" value="Etat d'usage" />
                </Picker>
              </View>


        <Button            
          title="Ajouter votre annonce"
          type="solid"
          buttonStyle={{backgroundColor: "#82589F"}}
          onPress={() => {handleClick();props.onSubmitTypeOfAction(typeOfAction)}}
          containerStyle={{marginBottom: 20}}
        />

      </ScrollView>

  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex:1,
  },

  buttonRow2: {
    flexDirection:'row',
    justifyContent:'space-around',
    margin:70,
  }

});

function mapDispatchToProps(dispatch) {
  return {
    onSubmitTypeOfAction: function (typeOfAction) {
      dispatch({ type: 'sell', typeOfAction})
    },
    onSubmitToken: function (token){
      dispatch({type:'informationFromSellScreen',token:token})
    }
  }
}

 
function mapStateToProps(state) {
  return { addPhoto: state.photo , takeToken: state.token }
}
export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(SellScreen);
