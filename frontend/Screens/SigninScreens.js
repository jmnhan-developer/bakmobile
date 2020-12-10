import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome } from '@expo/vector-icons';
import { View, KeyboardAvoidingView, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { connect } from 'react-redux';


function SigninScreens({navigation,onSubmitToken}) {

  const [email, setMail]=useState('')
  const [password, setPassword]=useState('')
  const [isConnect,setIsConnect]=useState(false)
  const [isNotConnect,setIsNotConnect]=useState('')

  var handleClick =async () => {

<<<<<<< HEAD
    const dataUsers = await fetch("http://192.168.43.254:3000/users/sign-in", {
=======
    const dataUsers = await fetch("http://172.17.1.123:3000/users/sign-in", {
>>>>>>> d2944141fa2979c0b7243e2e3f0ec7388643aac8
      method:'POST',
      headers:{'Content-Type':'application/x-www-form-urlencoded'},
      body:`email=${email}&password=${password}`
    });

    // console.log("dataUsersXXX", dataUsers)
    
    const dataConsumers = await dataUsers.json()
    console.log("dataConsumersjson-Result", dataConsumers.error)
    setIsConnect(dataConsumers.result)
    setIsNotConnect(dataConsumers.error)
    onSubmitToken(dataConsumers.token)
    console.log('token from SignIn------',dataConsumers.token,dataConsumers.error)
  }
   if(isConnect==true)
   {
      navigation.navigate('Basket');
   }
  

  return (
    <View style={{flex: 1, marginTop: 40, alignItems: 'center',justifyContent: 'center'}}>

      <Text style={{marginBottom: 20}}>CONNECTION</Text>

      <ScrollView>

        <KeyboardAvoidingView behavior="padding" enabled style={{ width: 370 }}>


          <Input name="email" placeholder='e-mail' onChangeText={(val) =>setMail(val)} />
          <Input name="password" placeholder='Mot de passe' onChangeText={(val) =>setPassword(val)} />

          <Icon>
            <FontAwesome name="facebook-f" size={24} color="black" />
            <FontAwesome name="instagram" size={24} color="black" />
            <FontAwesome name="twitter" size={24} color="black" />
          </Icon>
          <Button style={{marginTop:20}}
            title="Me connecter"
            buttonStyle={{ backgroundColor: "#eb4d4b"}}
            type="solid"
            onPress={()=>handleClick()}
          />
           <Text>{isNotConnect}</Text>
           <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}><Text>Créer un compte</Text></TouchableOpacity>
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

function mapDispatchToProps(dispatch) {
  return {
    onSubmitToken: function (token) {
      dispatch({ type: 'informationFromSignIn', token:token})
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(SigninScreens);