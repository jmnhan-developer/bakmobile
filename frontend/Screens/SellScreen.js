import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, ScrollView, Text, View, Picker,TouchableOpacity } from 'react-native';
import {Button, Input} from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';


export default function App(props) {
  const [selectedValue, setSelectedValue] = useState("");
  // console.log("selectedValue", selectedValue)
  const [titleInput , setTitleInput ] = useState("");
  console.log("title", titleInput)
  const [desc , setDesc ] = useState("");
  const [price , setPrice ] = useState("");
  const [shippingFees , setShippingFees ] = useState("");



  var handleClick = async () => {
    
    console.log('ceci est le titre post handleclick=', titleInput);
    const dataArticle = await fetch("http://172.17.1.123:3000/articles/create-article", {
      method: 'POST',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: `title=${titleInput}&desc=${desc}&price=${price}&shippingFees=${shippingFees}`
    });
                               
    console.log(dataArticle)
    const dataAnnonce = await dataArticle.json()
    console.log("dataAnnonce", dataAnnonce)

  }

  return (
    <View style={styles.container}>
      <ScrollView style={{width: '90%'}}>

        <Text style={{marginTop:40,textAlign: 'center'}}>Jusqu'à 6 photos</Text>

        <Button
          buttonStyle={{marginTop:40, marginBottom:40}}
          icon={
              <FontAwesome name="camera" size={24}  color="#009788"/>
              }            
          title="Ajouter des photos"
          type="outline"
          onPress={() => {handleClick()}}
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
          placeholder='Prix'
          onChangeText={(val) => setPrice(val)}
        />
        <Input style = {{ width: '90%'}}
          placeholder='Frais de port'
          onChangeText={(val) => setShippingFees(val)}
        />

        
        <Picker
          selectedValue={selectedValue}
          style={{ width: '70%'}}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Catégorie" value="Catégorie" />
          <Picker.Item label="Se déplacer" value="Se déplacer" />
          <Picker.Item label="Manger" value="Manger" />
          <Picker.Item label="Dormir" value="Dormir" />
        </Picker>

        <Picker
          selectedValue={selectedValue}
          style={{ width: '70%'}}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Sous catégorie" value="Sous catégorie" />
          <Picker.Item label="Poussettes" value="Poussettes" />
          <Picker.Item label="Nacelle" value="Nacelle" />
        </Picker>
        <Picker
          selectedValue={selectedValue}
          style={{ width: '70%'}}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Marque" value="Marque" />
          <Picker.Item label="Yoyo" value="Yoyo" />
          <Picker.Item label="Bébé Confort" value="Bébé Confort" />
        </Picker>
        <Picker
          selectedValue={selectedValue}
          style={{ width: '70%'}}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Etat" value="Etat" />
          <Picker.Item label="Neuf" value="Neuf" />
          <Picker.Item label="Bon Etat" value="Bon Etat" />
          <Picker.Item label="Etat d'usage" value="Etat d'usage" />
        </Picker>

        <Button            
          title="Ajoute ton annonce"
          type="solid"
          buttonStyle={{backgroundColor: "#009788"}}
          onPress={() => handleClick()}
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
});
