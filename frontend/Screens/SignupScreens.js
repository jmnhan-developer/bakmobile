import React, {useState,useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome } from '@expo/vector-icons';
import { View, KeyboardAvoidingView, Text, StyleSheet, ScrollView,AsyncStorage,TouchableOpacity } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { connect } from 'react-redux';

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

    const dataUsers = await fetch("http://172.17.1.179:3000/users/sign-up", {
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
    
    <View style={{flex: 1, marginTop:25, width: '95%', marginLeft:10}}>
      
      <Text style={{fontSize:15, textAlign:"center", marginBottom: 20}}>Inscription</Text>
       

      {/* <KeyboardAvoidingView  behavior="padding" enabled   keyboardVerticalOffset={150}> */}

        <ScrollView>

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
            <TouchableOpacity onPress={()=>{navigation.navigate('SignIn')}}><Text  style={{marginBottom: 20, marginTop:20, textAlign: "center"}}>J'ai déjà un compte</Text></TouchableOpacity>

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