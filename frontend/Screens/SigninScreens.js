import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome } from '@expo/vector-icons';
import { View, KeyboardAvoidingView, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, Input } from 'react-native-elements';



function SigninScreens() {

  return (
    <View style={{flex: 1, marginTop: 40, alignItems: 'center',justifyContent: 'center'}}>

      <Text style={{marginBottom: 20}}>CONNECTION</Text>

      <ScrollView>

        <KeyboardAvoidingView behavior="padding" enabled style={{ width: 370 }}>


          <Input name="mail" placeholder='e-mail' />
          <Input name="password" placeholder='Mot de passe' />

          <Icon>
            <FontAwesome name="facebook-f" size={24} color="black" />
            <FontAwesome name="instagram" size={24} color="black" />
            <FontAwesome name="twitter" size={24} color="black" />
          </Icon>
          <Button style={{marginTop:20}}
            title="Me connecter"
            buttonStyle={{ backgroundColor: "#eb4d4b"}}
            type="solid"
          />

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

export default SigninScreens;
