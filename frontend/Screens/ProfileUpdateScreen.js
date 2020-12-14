import React, {useEffect, useState} from 'react';
import { FlatList, KeyboardAvoidingView, LogBox, ScrollView, StyleSheet, Text, Title, View } from 'react-native';
import {Input, ListItem, Icon, Divider, Button} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';


import {IP_HOST} from '../variable'

  
  const ProfileUpdateScreen = ({navigation, takeToken}) => {
    console.log("token form profileUpdateScreen", takeToken)
    //RECUPERER LES INFOS DE L'USER VIA LE TOKEN POUR AFFICHER SES INFOS DANS L'ECRAN PROFILEUPDATE
    const [userInfo, setUserInfo] = useState([])
    useEffect(() => {
      const findUser = async() => {
        const rawData = await fetch(`http://${IP_HOST}:3000/users/display-profile?id=5fce2c819c05581ecc906354`) //l'ID ici est un objet...et non un tableau d'objets.
        const doneData = await rawData.json()
        console.log("done data est:", doneData)
        setUserInfo(doneData)
        setFirstName(doneData.firstName)
        setLastName(doneData.lastName)
        setMail(doneData.email)
        setAddress(doneData.address)
        setPostalCode(doneData.postalCode)
        setCity(doneData.city)
      }
      findUser()
    },[])
   
    console.log("je suis userinfo:", userInfo.length)

     //POUR RETENIR LES MODIFS ET RÉENREGISTRER LES INFOS DE L'USER DANS LA BASE DE DONNÉES

     const [firstName, setFirstName]=useState('')
     const [lastName, setLastName]=useState('')
     const [email, setMail]=useState('')
     const [address, setAddress]=useState('')
     const [postalCode, setPostalCode]=useState('')
     const [city, setCity]=useState('')
 
 
     var handleClick =async () => {
       const dataUsers = await fetch(`http://172.20.10.2:3000/users/update-profile?token=${takeToken}`, {
       method:'PUT',
       headers:{'Content-Type':'application/x-www-form-urlencoded'},
       body:`firstName=${firstName}&lastName=${lastName}&email=${email}&address=${address}&postalCode=${postalCode}&city=${city}`
     });
     };


    return (

      <View style={{flex: 1, marginTop:25, width: '95%', marginLeft:10}}>
        <FontAwesome name="long-arrow-left" size={24} color="grey"
            onPress= {() =>navigation.navigate('ProfileUser')}
        />

        <Text style={{fontSize:15, textAlign:"center", marginTop:5}}>Modification de mes informations personnelles</Text>

        <View style={{backgroundColor:'#D7DBDD', height:1, width:300, marginLeft:50, marginTop:30, marginBottom:5}}></View>

        <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column',justifyContent: 'center',}} behavior="padding" enabled   keyboardVerticalOffset={150}>

          <ScrollView>

            <View style={{flexDirection:'row', justifyContent:"space-between", width:'80%'}}>
              <Text style={{fontSize:17, marginTop:10, width:80}}>Nom: </Text>
              <Input name="lastName" value={lastName} onChangeText={(val) =>setLastName(val)}></Input>
            </View>

            <View style={{flexDirection:'row', justifyContent:"space-between", width:'80%'}}>
              <Text style={{fontSize:17, marginTop:10, width:80}}>Prénom: </Text>
              <Input name="firstName" value={firstName} onChangeText={(val) =>setFirstName(val)}></Input>
            </View>

            <View style={{flexDirection:'row', justifyContent:"space-between", width:'80%'}}>
              <Text style={{fontSize:17, marginTop:10, width:80}}>Email: </Text>
              <Input name="email" value={email} onChangeText={(val) =>setMail(val)}></Input>
            </View>

            <View style={{flexDirection:'row', justifyContent:"space-between", width:'80%'}}>
              <Text style={{fontSize:17, marginTop:10, width:80}}>Adresse: </Text>
              <Input name="Address" value={address} onChangeText={(val) =>setAddress(val)}></Input>
            </View>

            <View style={{flexDirection:'row', justifyContent:"space-between", width:'80%'}}>
              <Text style={{fontSize:17, marginTop:10, width:80}}>CP: </Text>
              <Input name="postalCode" value={postalCode} onChangeText={(val) =>setPostalCode(val)}></Input>
            </View>

            <View style={{flexDirection:'row', justifyContent:"space-between", width:'80%'}}>
              <Text style={{fontSize:17, marginTop:10, width:80}}>Ville: </Text>
              <Input name="city" value={city} onChangeText={(val) =>setCity(val)}></Input>
            </View>

            <Button title="Valider" buttonStyle={{backgroundColor: "#009788"}} type="solid"
            onPress={()=> {handleClick(); navigation.navigate('ProfileUser')}}/>

          </ScrollView>

        </KeyboardAvoidingView>

      </View>

    );
  }
  function mapStateToProps(state) {
    return { takeToken: state.token }
  }
  
  
  export default connect(
  
    mapStateToProps,
    null
  
  )(ProfileUpdateScreen);