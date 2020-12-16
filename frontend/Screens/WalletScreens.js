import React from 'react';
import { FlatList, StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import {Input, ListItem, Icon, Divider, Button, SearchBar} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { FontAwesome5 } from '@expo/vector-icons';
import {IP_HOST} from '../variable'



const WalletScreens = (props) => {


  let amountExpected = <View style={{flexDirection:'row', justifyContent:"space-between"}}>
    <Text style={{fontSize:15}}>Montant en attente</Text>
    <Text style={{fontSize:15}}>0,00€</Text>
  </View>

  let amountAvailable = <View style={{marginTop:20, marginBottom:20, alignItems:'center'}}>
    <Text style={{fontSize: 30, marginTop:10, marginBottom:10}}>75,00€</Text>
    <Text style={{fontSize:15, marginBottom: 30}}>Montant disponible</Text>
  </View>



  return (
    <View style={{flex: 1, marginTop:25, width: '95%', marginLeft:10}}>
      <View style={{flexDirection:'row', width:'100%'}}>
        <FontAwesome name="long-arrow-left" size={24} color="#82589F" style={{marginTop:5}} onPress={() => props.navigation.goBack()}/>
        <Text style={{ fontSize:20, marginTop: 5, marginLeft:40}}>Mon porte-monnaie</Text>
      </View>
      
      <View style={{backgroundColor:'#D7DBDD', height:1, width:300, marginLeft:50, marginTop:30, marginBottom:30}}></View>

      {amountExpected}

      <View style={{backgroundColor:'#D7DBDD', height:1, width:300, marginLeft:50, marginTop:30, marginBottom:30}}></View>

      {amountAvailable}

      <Button title="Transférer vers mon compte bancaire" buttonStyle={{backgroundColor: "#009788"}} type="solid"/>

    </View>

  


)};


export default WalletScreens;