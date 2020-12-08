import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, ScrollView, Text, View, Picker,TouchableOpacity } from 'react-native';
import {Button, Input} from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';


export default function SellScreen() {
  const [selectedValue, setSelectedValue] = useState("");
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
          onPress={() => {navigation.navigate('AddPicScreen')}}
        />
      
        <Input style = {{ width: '90%'}}
          placeholder='Titre'
        />
        <Input style = {{ width: '90%'}}
          placeholder="Descrition de l'annonce"
        />
        <Input style = {{ width: '90%'}}
          placeholder='Prix'
        />
        <Input style = {{ width: '90%'}}
          placeholder='Frais de port'
        />

        <Picker
          selectedValue={selectedValue}
          style={{ width: '70%'}}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
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
          onPress={() => {navigation.navigate('ValidationScreen')}}
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
