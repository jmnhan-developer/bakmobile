import React, {useState,useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome } from '@expo/vector-icons';
import { View, KeyboardAvoidingView, Text, StyleSheet, ScrollView, TouchableOpacity, AsyncStorage } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { connect } from 'react-redux';


function SigninScreens({navigation,onSubmitId,typeOfAction}) {


  const [email, setMail]=useState('')
  const [password, setPassword]=useState('')
  const [id,setId]=useState('')
  const [isConnect,setIsConnect]=useState(false)
  const [isNotConnect,setIsNotConnect]=useState('')
  const [idIsSubmited,setIdIsSubmited]=useState(false)
  
  console.log('type of action -------',typeOfAction)
  
  useEffect(() => {
    AsyncStorage.getItem('userId', (err, value) => {
      if(value){ 
      
        onSubmitId(value);
        setId(value);
        setIsConnect(true);
        console.log('value:',value,'isConnect',isConnect);

      }
    })
  }, []);

  
  var handleClick =async () => {

    const dataUsers = await fetch("http://172.17.1.18:3000/users/sign-in", {
      method:'POST',
      headers:{'Content-Type':'application/x-www-form-urlencoded'},
      body:`email=${email}&password=${password}`
    },
    );
    
    // console.log("dataUsersXXX", dataUsers)
    
    const dataConsumers = await dataUsers.json()
    console.log("dataConsumersjson-Result", dataConsumers)
    setIsConnect(dataConsumers.result)
    setIsNotConnect(dataConsumers.error)
    onSubmitId(dataConsumers.user._id)
    
    AsyncStorage.setItem('userId',dataConsumers.user._id );
  
  }
   if(isConnect==true )
   {
      if(typeOfAction=='acheteur')
      { 
      navigation.navigate('Basket');
      }
      else
      {
       navigation.navigate('Home')
      }
   }
 console.log(id,'id from AsyncStorage SignIn')
 console.log(idIsSubmited,'etat de id submit')

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
           <TouchableOpacity onPress={()=>{navigation.navigate('SignUp')}}><Text>Créer un compte</Text></TouchableOpacity>
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
    onSubmitId: function (id) {
      dispatch({ type: 'informationFromSignIn', id:id})
    }
  }
}

function mapStateToProps(state) {
  return { typeOfAction: state.typeOfAction }
}


export default connect(
  
  mapStateToProps,
  mapDispatchToProps

)(SigninScreens);