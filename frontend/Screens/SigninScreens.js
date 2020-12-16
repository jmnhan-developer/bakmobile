import React, {useState,useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome } from '@expo/vector-icons';
import { View, KeyboardAvoidingView, Text, StyleSheet, ScrollView, TouchableOpacity, AsyncStorage } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { connect } from 'react-redux';
import {withNavigation} from 'react-navigation'
import {IP_HOST} from '../variable'




function SigninScreens({navigation,onSubmitToken,typeOfAction}) {

  const [email, setMail]=useState('')
  const [password, setPassword]=useState('')
  const [token,setToken]=useState('')
  const [isConnect,setIsConnect]=useState(false)
  const [isNotConnect,setIsNotConnect]=useState('')
  const [tokenIsSubmited,setTokenIsSubmited]=useState(false)

  console.log('type of action -------',typeOfAction)

// FUNCTION TO CLEAN ALL INPUTS
  function clickToClean () {
    setMail ("");
    setPassword("");
      // console.log("----------clean input-----", firstName)
  }

  useEffect(() => {
    AsyncStorage.getItem('userToken', (err, value) => {
      if(value){ 
      
        onSubmitToken(value);
        setToken(value);
        setIsConnect(true);
        console.log('value:',value,'isConnect',isConnect);

      }
    })
  }, []);

  
  var handleClick =async () => {

    const dataUsers = await fetch(`http://${IP_HOST}:3000/users/sign-in`, {
      method:'POST',
      headers:{'Content-Type':'application/x-www-form-urlencoded'},
      body:`email=${email}&password=${password}`
    },
    );
    
    // console.log("dataUsersXXX", dataUsers)
    
    const dataConsumers = await dataUsers.json()
    // console.log("dataConsumersjson-Result", dataConsumers)
    console.log('-----------------',dataConsumers.token)
    setIsConnect(dataConsumers.result)
    setIsNotConnect(dataConsumers.error)
    onSubmitToken(dataConsumers.token)
    
    AsyncStorage.setItem('userToken',dataConsumers.token );
  
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
 console.log(token,'id from AsyncStorage SignIn')
 console.log(tokenIsSubmited,'etat de id submit')

  return (
    <View style={{flex: 1, marginTop: 50, alignItems: 'center',justifyContent: 'center'}}>

      <Text style={{marginBottom: 20}}>Connection</Text>

      <ScrollView>

        <KeyboardAvoidingView behavior="padding" enabled style={{ width: 370 }}>


          <Input 
            name="email" 
            placeholder='e-mail' 
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            value={email} 
            returnKeyType="next"
            onChangeText={(val) =>setMail(val)} />
          <Input 
            name="password" 
            placeholder='Mot de passe' 
            returnKeyType="next"
            autoCapitalize="none"
            value={password} 
            autoCorrect={false}

            onChangeText={(val) =>setPassword(val)} />

          <Icon>
            <FontAwesome name="facebook-f" size={24} color="black" />
            <FontAwesome name="instagram" size={24} color="black" />
            <FontAwesome name="twitter" size={24} color="black" />
          </Icon>
          <Button style={{marginTop:20}}
            title="Me connecter"
            buttonStyle={{ backgroundColor: "#82589F"}}
            type="solid"
            onPress={()=>{handleClick(); clickToClean()}}
          />

           <Text>{isNotConnect}</Text>
            
           <Button 
            title="Créer un compte"
            type='outline'
            titleStyle={{fontSize:15, color:"#82589F"}}
            buttonStyle={{justifyContent:'flex-start', borderColor:'white'}}
            onPress={()=>navigation.navigate('SignUp')}
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

function mapDispatchToProps(dispatch) {
  return {
    onSubmitToken: function (token) {
      dispatch({ type: 'informationFromSignIn', token:token})
    }
  }
}

function mapStateToProps(state) {
  return { typeOfAction: state.typeOfAction }
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(SigninScreens);



// var SignInRedux = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(SigninScreens);

// export default withNavigation(SignInRedux);


