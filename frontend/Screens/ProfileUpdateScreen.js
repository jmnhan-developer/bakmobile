import React, {useEffect, useState} from 'react';
import { FlatList, KeyboardAvoidingView, ScrollView, StyleSheet, Text, Title, View } from 'react-native';
import {Input, ListItem, Icon, Divider, Button} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {IP_HOST} from '../variable'

  
  const ProfileUpdateScreen = ({navigation}) => {
    const [userInfo, setUserInfo] = useState([])
    useEffect(() => {
      const findUser = async() => {
        const rawData = await fetch(`http://${IP_HOST}:3000/users/display-profile?id=5fce2c819c05581ecc906354`) //l'ID ici est un objet...et non un tableau d'objets.
        const doneData = await rawData.json()
        console.log("done data est:", doneData.data)
        setUserInfo([doneData.data]) //Attention ici on a transformé le setUserInfo en tableau d'objet pour pouvoir le mapper.
      }
      findUser()
    },[])

    console.log("je suis userinfo:", userInfo.length)

    // CHAMPS POUR MODIFICATION
    let infoModifBD = userInfo.map((userData, i) => {
      return <View>

      <View style={{flexDirection:'row', justifyContent:"space-between", width:'80%'}}>
        <Text style={{fontSize:17, marginTop:10, width:80}}>Nom: </Text>
        <Input name="Nom" placeholder={userData.lastName}></Input>
      </View>

      <View style={{flexDirection:'row', justifyContent:"space-between", width:'80%'}}>
        <Text style={{fontSize:17, marginTop:10, width:80}}>Prénom: </Text>
        <Input name="Prénom" placeholder={userData.firstName}></Input>
      </View>

      <View style={{flexDirection:'row', justifyContent:"space-between", width:'80%'}}>
        <Text style={{fontSize:17, marginTop:10, width:80}}>Email: </Text>
        <Input name="email" placeholder={userData.email}></Input>
      </View>

      <View style={{flexDirection:'row', justifyContent:"space-between", width:'80%'}}>
        <Text style={{fontSize:17, marginTop:10, width:80}}>Password: </Text>
        <Input name="password" placeholder={userData.password}></Input>
      </View>

      <View style={{flexDirection:'row', justifyContent:"space-between", width:'80%'}}>
        <Text style={{fontSize:17, marginTop:10, width:80}}>Adresse: </Text>
        <Input name="Address" placeholder={userData.address}></Input>
      </View>

      <View style={{flexDirection:'row', justifyContent:"space-between", width:'80%'}}>
        <Text style={{fontSize:17, marginTop:10, width:80}}>CP: </Text>
        <Input name="zip" placeholder={userData.postalCode}></Input>
      </View>

      <View style={{flexDirection:'row', justifyContent:"space-between", width:'80%'}}>
        <Text style={{fontSize:17, marginTop:10, width:80}}>Ville: </Text>
        <Input name="city" placeholder={userData.city}></Input>
      </View>

      <Button title="Valider" buttonStyle={{backgroundColor: "#009788"}} type="solid"
      onPress={()=>navigation.navigate('ProfileUser')}/>

    </View>
    }
    )


    return (

      <View style={{flex: 1, marginTop:25, width: '95%', marginLeft:10}}>
        <FontAwesome name="long-arrow-left" size={24} color="grey"
            onPress= {() => navigation.navigate('ProfileUser')}
          />

        <Text style={{fontSize:15, textAlign:"center", marginTop:5}}>Modification de mes informations personnelles</Text>

        <View style={{backgroundColor:'#D7DBDD', height:1, width:300, marginLeft:50, marginTop:30, marginBottom:5}}></View>

        

        <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column',justifyContent: 'center',}} behavior="padding" enabled   keyboardVerticalOffset={150}>
                    
          <ScrollView>

            {infoModifBD}

          </ScrollView>

        </KeyboardAvoidingView>


      </View>

    );
  }
  
  export default ProfileUpdateScreen;