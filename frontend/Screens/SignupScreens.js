import React, {useState,useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome } from '@expo/vector-icons';
import { View, KeyboardAvoidingView, Text, StyleSheet, ScrollView,AsyncStorage,TouchableOpacity } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { connect } from 'react-redux';

import {IP_HOST} from '../variable'


function SignUpScreens({onSubmitToken,navigation,typeOfAction}) {

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
  const [token,setToken]=useState('')
  const [tokenIsSubmited,setTokenIsSubmited]=useState(false)

  // FUNCTION TO CLEAN ALL INPUTS
  function clickToClean () {
    setFirstName ("");
    setLastName("");
    setMail("");
    setPassword("");
    setPhoneNumb("");
    setAddress("");
    setPostalCode("");
    setCity("");
    
    // console.log("----------clean input-----", firstName)
  }

  useEffect(() => {
    AsyncStorage.getItem('userToken', (err, value) => {
      if(value){ 
      setToken(value);
      onSubmitToken(value);
      setTokenIsSubmited(true);
      console.log(value,'from asyncstorage ------ ------ -----') }
    })
  }, []);

  
  var handleClick =async () => {

    const dataUsers = await fetch(`http://${IP_HOST}:3000/users/sign-up`, {
      method:'POST',
      headers:{'Content-Type':'application/x-www-form-urlencoded'},
      body:`gender=${gender}&firstName=${firstName}&lastName=${lastName}&email=${email}&password=${password}&phoneNumb=${phoneNumb}&address=${address}&postalCode=${postalCode}&city=${city}`
    });

 
    console.log("dataUsersXXX", dataUsers)
    
    const dataConsumers = await dataUsers.json()
    // console.log("dataConsumersjson-Result", dataConsumers.result, dataConsumers.error)
    setIsConnect(dataConsumers.result)
    setIsNotConnect(dataConsumers.error)
    console.log(dataConsumers.saveUser.token)
    onSubmitToken(dataConsumers.saveUser.token)
    AsyncStorage.setItem('userToken',dataConsumers.saveUser.token );
  }

  if(isConnect==true )
  {
     if(typeOfAction=='acheteur')
     { 
       navigation.navigate('Basket');
     }
    else 
     {
       navigation.navigate('Sell')
     }
}





  return (
    
    <View style={{flex: 1, marginTop:50, width: '95%', marginLeft:10}}>
      
      <Text style={{fontSize:15, textAlign:"center", marginBottom: 20}}>Inscription</Text>
       

      {/* <KeyboardAvoidingView  behavior="padding" enabled   keyboardVerticalOffset={150}> */}

        <ScrollView>

          <Input name="firstName" placeholder='Nom' value={firstName}
          onChangeText={(val) =>setFirstName(val)}/>

          <Input name="lastName" placeholder='Prénom' value={lastName}
          onChangeText={(val) =>setLastName(val)}/>

          <Input name="mail" placeholder='e-mail' value={email}
          onChangeText={(val) =>setMail(val)}/>

          <Input name="password" placeholder='Mot de passe' value={password}
          onChangeText={(val) =>setPassword(val)}/>

          <Input name="PhoneNumb" placeholder='Tél.' value={phoneNumb} keyboardType='numeric'
          onChangeText={(val) =>setPhoneNumb(val)}/>

          <Input name="Address" placeholder='Adresse'value={address}
          onChangeText={(val) =>setAddress(val)}/>

          <Input name="Zip" placeholder='CP' value={postalCode} keyboardType='numeric'
          onChangeText={(val) =>setPostalCode(val)}/>

          <Input name="City" placeholder='Ville' value={city}
          onChangeText={(val) =>setCity(val)}/>

          <Icon style={{display: 'flex', justifyContent: 'center'}}>
            <FontAwesome name="facebook-f" size={24} color="black" />
            <FontAwesome name="instagram" size={24} color="black" />
            <FontAwesome name="twitter" size={24} color="black" />
          </Icon>
          <Button style={{marginTop:20}}
            title="M'inscrire"
            buttonStyle={{ backgroundColor: "#82589F"}}
            type="solid"
            onPress={() => {handleClick(); clickToClean()}
           }
          />
            <Text>{isNotConnect}</Text>
            <Button 
            title="J'ai déjà un compte"
            type='outline'
            titleStyle={{fontSize:15, color:"#82589F"}}
            buttonStyle={{justifyContent:'flex-start', borderColor:'white'}}
            onPress={()=>{navigation.navigate('SignIn')}}
            />

        </ScrollView>

      {/* </KeyboardAvoidingView> */}

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

// function mapDispatchToProps(dispatch) {
//   return {
//     onSubmitId: function (id) {
//       dispatch({ type: 'informationFromSignUp', id:id})
//     }
//   }
// }

// export default connect(
//   null,
//   mapDispatchToProps
// )(SignUpScreens);

//______________


function mapDispatchToProps(dispatch) {
  return {
    onSubmitToken: function (token) {
      dispatch({ type: 'informationFromSignUp', token:token})
    }
  }
}

function mapStateToProps(state) {
  return { typeOfAction: state.typeOfAction }
}


export default connect(
  
  mapStateToProps,
  mapDispatchToProps

)(SignUpScreens);