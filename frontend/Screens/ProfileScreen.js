import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, Title, View } from 'react-native';
import { Input, ListItem, Icon, Divider, Button, NavigationContainer } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import {IP_HOST} from '../variable'

  
const ProfileScreen = ({ navigation, takeToken }) => {

  console.log('idfromreducer', takeToken)

  const [userInfo, setUserInfo] = useState([])

  useEffect(() => {
    const findUser = async () => {
      const rawData = await fetch(`http://${IP_HOST}:3000/users/display-profile?token=${takeToken}`)
      const doneData = await rawData.json()
      console.log("done data est:", doneData)
      setUserInfo(doneData)
    }
    findUser()
  }, [])


  console.log("je suis userinfo:", userInfo)

  //INOFRMATION ISSUES DE LA BASE DE DONNÉES

  let myProfil;

  if(userInfo != null) {
    
    myProfil =  <View>

    <View style={{ flexDirection: 'column', width: '95%', marginBottom: 20 }}>


      <View style={{ flexDirection: 'row', width: '80%', marginBottom: 10 }}>
        <Text style={{ fontSize: 17, width: 110 }}>Nom:</Text>
        <Text style={{ color: 'grey', fontWeight: 'bold', fontSize: 17 }}>{userInfo.lastName}</Text>
      </View>
      <View style={{ flexDirection: 'row', width: '80%', marginBottom: 10 }}>
        <Text style={{ fontSize: 17, width: 110 }}>Prénom:</Text>
        <Text style={{ color: 'grey', fontWeight: 'bold', fontSize: 17 }}>{userInfo.firstName}</Text>
      </View>
      <View style={{ flexDirection: 'row', width: '80%', marginBottom: 10 }}>
        <Text style={{ fontSize: 17, width: 110 }}>Email:</Text>
        <Text style={{ color: 'grey', fontWeight: 'bold', fontSize: 17 }}>{userInfo.email}</Text>
      </View>
      {/* <View style={{ flexDirection: 'row', width: '80%', marginBottom: 10 }}>
        <Text style={{ fontSize: 17, width: 110 }}>Password:</Text>
        <Text style={{ color: 'grey', fontWeight: 'bold', fontSize: 17 }}>{userData.password}</Text>
      </View> */}
      <View style={{ flexDirection: 'row', width: '80%', marginBottom: 10 }}>
        <Text style={{ fontSize: 17, width: 110 }}>Adresse:</Text>
        <Text style={{ color: 'grey', fontWeight: 'bold', fontSize: 17 }}>{userInfo.address}</Text>
      </View>
      <View style={{ flexDirection: 'row', width: '80%', marginBottom: 10 }}>
        <Text style={{ fontSize: 17, width: 110 }}>Code Postal:</Text>
        <Text style={{ color: 'grey', fontWeight: 'bold', fontSize: 17 }}>{userInfo.postalCode}</Text>
      </View>
      <View style={{ flexDirection: 'row', width: '80%', marginBottom: 10 }}>
        <Text style={{ fontSize: 17, width: 110 }}>Ville:</Text>
        <Text style={{ color: 'grey', fontWeight: 'bold', fontSize: 17 }}>{userInfo.city}</Text>
      </View>

    </View>

    <Button title="Modifier mes informations personnelles" buttonStyle={{ backgroundColor: "#009788" }} type="solid" onPress={() => navigation.navigate('ProfileUp')} />

  </View>

  } else {
    myProfil = <View>
    <Text style={{textAlign:"center", marginBottom:30}}>Vous n'êtes pas connecté.</Text>
    <Button title="Connectez-vous" buttonStyle={{backgroundColor: "#009788"}} type="solid"
            onPress={()=> {navigation.navigate('SignIn')}}/>
    </View>


  }

 
  

  return (

    <View style={{ flex: 1, marginTop: 25, width: '95%', marginLeft: 10 }}>

      <Text style={{ fontSize: 15, textAlign: "center", marginTop: 5 }}>Mes informations personnelles</Text>

      <View style={{ backgroundColor: '#D7DBDD', height: 1, width: 300, marginLeft: 50, marginTop: 30, marginBottom: 30 }}></View>

     {myProfil} 
      
    </View>

  );
}

function mapStateToProps(state) {
  return { takeToken: state.token }
}


export default connect(

  mapStateToProps,
  null

)(ProfileScreen);

