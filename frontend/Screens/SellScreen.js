import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, ScrollView, Text, View, Picker,TouchableOpacity } from 'react-native';
import {Button, Input} from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import {connect} from 'react-redux';

import { SafeAreaView } from 'react-navigation';



function SellScreen(props) {
  const [selectedValueCategory, setSelectedValueCategory] = useState("");
  const [selectedValueSubCategory, setSelectedValueSubCategory] = useState("");
  const [selectedValueState, setSelectedValueState] = useState("");

  
  const [titleInput , setTitleInput ] = useState("");
  
  const [desc , setDesc ] = useState("");
  const [brand , setBrand ] = useState("");
  const [price , setPrice ] = useState("");
  const [shippingFees , setShippingFees ] = useState("");



  var handleClick = async () => {
    console.log(props.addPhoto)
    var image = JSON.stringify(props.addPhoto);
    console.log('tableau photos',image)
    const dataArticle = await fetch("http://192.168.43.254:3000/articles/create-article", {
      method: 'POST',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: `title=${titleInput}&description=${desc}&brand=${brand}&price=${price}&shippingFees=${shippingFees}&category=${selectedValueCategory}&subcategory=${selectedValueSubCategory}&state=${selectedValueState}&images=${image}`
    });
                               
    // console.log("dataArticle",dataArticle)
    const dataAnnonce = await dataArticle.json()
    console.log("dataAnnonce", dataAnnonce)

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
        />
        <Input style = {{ width: '90%'}}
          placeholder='Frais de port'
          onChangeText={(val) => setShippingFees(val)}
        />

        <DropDownPicker 
            zIndex={5000}
            items={[
              {label: 'Se déplacer', value: 'Se déplacer'},
              {label: 'Manger', value: 'Manger'},
              {label: 'Dormir', value: 'Dormir'},
              ]}
              defaultNull
              placeholder="Catégorie"
              containerStyle={{height: 60, margin:10}}
              onChangeItem={itemValue => setSelectedValueCategory(itemValue.value)}
              

                  />
        
          <DropDownPicker
            zIndex={4000}
            items={[
              {label: 'Poussettes', value: 'Poussettes'},
              {label: 'Nacelle', value: 'Nacelle'},
              ]}
              defaultNull
              placeholder="Sous-catégorie"
              containerStyle={{height: 60, margin:10}}
              onChangeItem={itemValue => setSelectedValueSubCategory(itemValue.value)}
              
               
               />
          
          
          <DropDownPicker
            zIndex={3000}
            items={[
              {label: 'Neuf', value: 'Neuf'},
              {label: 'Bon état', value: 'Bon état'},
              {label: "Etat d'usage", value:  "Etat d'usage"},
              ]}
              defaultNull
              placeholder="Etat"
              
              containerStyle={{height: 60, margin:10, marginBottom:80}}
              onChangeItem={itemValue => setSelectedValueState(itemValue.value)}
             
                  />


        

        <Button            
          title="Ajoute ton annonce"
          type="solid"
          buttonStyle={{backgroundColor: "#82589F"}}
          onPress={() => handleClick()}
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
  }
});

function mapStateToProps(state) {
  return { addPhoto: state.photo }
}
export default connect(
  mapStateToProps, 
  null
)(SellScreen);