import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome } from '@expo/vector-icons';
import { View, KeyboardAvoidingView, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, Input } from 'react-native-elements';


function SignUpScreens() {

  return (
    <View style={{flex: 1, marginTop: 40, alignItems: 'center',justifyContent: 'center'}}>

      <Text style={{marginBottom: 20}}>INSCRIPTION</Text>

      <ScrollView>

        <KeyboardAvoidingView behavior="padding" enabled style={{ width: 370 }}>

          <Input name="gender" placeholder='Madame ou Monsieur' />
          <Input name="firstName" placeholder='Nom' />
          <Input name="lastName" placeholder='Prénom' />
          <Input name="mail" placeholder='e-mail' />
          <Input name="password" placeholder='Mot de passe' />
          <Input name="PhoneNumb" placeholder='Tél.' />
          <Input name="Address" placeholder='Adresse' />
          <Input name="Zip" placeholder='CP' />
          <Input name="City" placeholder='Ville' />
          <Icon style={{display: 'flex', justifyContent: 'center'}}>
            <FontAwesome name="facebook-f" size={24} color="black" />
            <FontAwesome name="instagram" size={24} color="black" />
            <FontAwesome name="twitter" size={24} color="black" />
          </Icon>
          <Button style={{marginTop:20}}
            title="M'inscrire"
            buttonStyle={{ backgroundColor: "#eb4d4b"}}
            type="solid"
          />

          <Text  style={{marginBottom: 20, marginTop:20, textAlign: "center"}}>J'ai déjà un compte</Text>

        </KeyboardAvoidingView>

      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SignUpScreens;