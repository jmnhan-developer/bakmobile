import React, {useEffect, useState} from 'react';
import { FlatList, StyleSheet, Text, Title, View } from 'react-native';
import {Input, ListItem, Icon, Divider, Button} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


  
  const ProfileScreen = ({navigation}) => {
    const [userInfo, setUserInfo] = useState([])
    useEffect(() => {
      const findUser = async() => {
        const rawData = await fetch("http://192.168.1.23:3000/users/display-profile?id=5fce2c819c05581ecc906354") //l'ID ici est un objet...et non un tableau d'objets.
        const doneData = await rawData.json()
        console.log("done data est:", doneData.data)
        setUserInfo([doneData.data]) //Attention ici on a transformé le setUserInfo en tableau d'objet pour pouvoir le mapper.
      }
      findUser()
    },[])
    
    console.log("je suis userinfo:", userInfo.length)

    //INOFRMATION ISSUES DE LA BASE DE DONNÉES
    let myProfil = userInfo.map((userData, i) => {
      return <View>

      <View style={{flexDirection:'column', width:'95%', marginBottom:20}}>


        <View style={{flexDirection:'row', width:'80%', marginBottom:10}}>
          <Text style={{fontSize:17, width:110}}>Nom:</Text>
          <Text style={{color:'grey', fontWeight:'bold', fontSize:17}}>{userData.lastName}</Text>
        </View>
        <View style={{flexDirection:'row', width:'80%', marginBottom:10}}>
          <Text style={{fontSize:17, width:110}}>Prénom:</Text>
          <Text style={{color:'grey', fontWeight:'bold', fontSize:17}}>{userData.firstName}</Text>
        </View>
        <View style={{flexDirection:'row', width:'80%', marginBottom:10}}>
          <Text style={{fontSize:17, width:110}}>Email:</Text>
          <Text style={{color:'grey', fontWeight:'bold', fontSize:17}}>{userData.email}</Text>
        </View>
        <View style={{flexDirection:'row', width:'80%', marginBottom:10}}>
          <Text style={{fontSize:17, width:110}}>Password:</Text>
          <Text style={{color:'grey', fontWeight:'bold', fontSize:17}}>{userData.password}</Text>
        </View>
        <View style={{flexDirection:'row', width:'80%', marginBottom:10}}>
          <Text style={{fontSize:17, width:110}}>Adresse:</Text>
          <Text style={{color:'grey', fontWeight:'bold', fontSize:17}}>{userData.address}</Text>
        </View>
        <View style={{flexDirection:'row', width:'80%', marginBottom:10}}>
          <Text style={{fontSize:17, width:110}}>Code Postal:</Text>
          <Text style={{color:'grey', fontWeight:'bold', fontSize:17}}>{userData.postalCode}</Text>
        </View>
        <View style={{flexDirection:'row', width:'80%', marginBottom:10}}>
          <Text style={{fontSize:17, width:110}}>Ville:</Text>
          <Text style={{color:'grey', fontWeight:'bold', fontSize:17}}>{userData.city}</Text>
        </View>

      </View>

      <Button title="Modifier mes informations personnelles" buttonStyle={{backgroundColor: "#009788"}} type="solid" onPress={()=>navigation.navigate('ProfileUp')} />

    </View>
    }
    );
  
    return (

      <View style={{flex: 1, marginTop:25, width: '95%', marginLeft:10}}>

        <Text style={{fontSize:15, textAlign:"center", marginTop:5}}>Mes informations personnelles</Text>

        <View style={{backgroundColor:'#D7DBDD', height:1, width:300, marginLeft:50, marginTop:30, marginBottom:30}}></View>

        {myProfil}

      </View>

    );
  }
  
  export default ProfileScreen;
