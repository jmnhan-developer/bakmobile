import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome } from '@expo/vector-icons';
import { View, KeyboardAvoidingView, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, Input } from 'react-native-elements';


function SignUpScreens({navigation}) {

  const [gender, setGender]=useState('')
  const [firstName, setFirstName]=useState('')
  const [lastName, setLastName]=useState('')
  const [email, setMail]=useState('')
  const [password, setPassword]=useState('')
  const [phoneNumb, setPhoneNumb]=useState('')
  const [address, setAddress]=useState('')
  const [postalCode, setPostalCode]=useState('')
  const [city, setCity]=useState('')
  const [isConnect,setIsConnect]=useState(false)
  const [isNotConnect,setIsNotConnect]=useState('')

  var handleClick =async () => {

    const dataUsers = await fetch("http://172.17.1.24:3000/users/sign-up", {
      method:'POST',
      headers:{'Content-Type':'application/x-www-form-urlencoded'},
      body:`gender=${gender}&firstName=${firstName}&lastName=${lastName}&email=${email}&password=${password}&phoneNumb=${phoneNumb}&address=${address}&postalCode=${postalCode}&city=${city}`
    });

    console.log("dataUsersXXX", dataUsers)
    
    const dataConsumers = await dataUsers.json()
    console.log("dataConsumersjson-Result", dataConsumers.result, dataConsumers.error)
    setIsConnect(dataConsumers.result)
    setIsNotConnect(dataConsumers.error)

  }
   if(isConnect==true)
   {
      navigation.navigate('Basket');
   }
  return (
    <View style={{flex: 1, marginTop: 40, alignItems: 'center',justifyContent: 'center'}}>
      
      <Text style={{marginBottom: 20}}>INSCRIPTION</Text>
       
      <ScrollView>

        <KeyboardAvoidingView behavior="padding" enabled style={{ width: 370 }}>

          <Input name="gender" placeholder='Madame ou Monsieur'
          onChangeText={(val) =>setGender(val)}/>

          <Input name="firstName" placeholder='Nom'
          onChangeText={(val) =>setFirstName(val)}/>

          <Input name="lastName" placeholder='Prénom'
          onChangeText={(val) =>setLastName(val)}/>

          <Input name="mail" placeholder='e-mail'
          onChangeText={(val) =>setMail(val)}/>

          <Input name="password" placeholder='Mot de passe'
          onChangeText={(val) =>setPassword(val)}/>

          <Input name="PhoneNumb" placeholder='Tél.'
          onChangeText={(val) =>setPhoneNumb(val)}/>

          <Input name="Address" placeholder='Adresse'
          onChangeText={(val) =>setAddress(val)}/>

          <Input name="Zip" placeholder='CP'
          onChangeText={(val) =>setPostalCode(val)}/>

          <Input name="City" placeholder='Ville'
          onChangeText={(val) =>setCity(val)}/>

          <Icon style={{display: 'flex', justifyContent: 'center'}}>
            <FontAwesome name="facebook-f" size={24} color="black" />
            <FontAwesome name="instagram" size={24} color="black" />
            <FontAwesome name="twitter" size={24} color="black" />
          </Icon>
          <Button style={{marginTop:20}}
            title="M'inscrire"
            buttonStyle={{ backgroundColor: "#eb4d4b"}}
            type="solid"
            onPress={() => handleClick()
           }
          />
            <Text>{isNotConnect}</Text>
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