import React from 'react';
import { FlatList, StyleSheet, Text, View, Button } from 'react-native';
import {Input, ListItem, Icon, Divider} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { FontAwesome5 } from '@expo/vector-icons';



function WalletScreens () {

  return (
    <View style={{flex: 1, marginTop:25, width: '95%', marginLeft:5}}>

      <Text style={{fontSize:20, textAlign:"center", marginTop:5}}>Mon porte-monnaie</Text>

      <View style={{backgroundColor:'#D7DBDD', height:1, width:300, marginLeft:50, marginTop:30, marginBottom:30}}></View>

      <View style={{flexDirection:'row', justifyContent:"space-between"}}>
        <Text style={{fontSize:15}}>Montant en attente</Text>
        <Text style={{fontSize:15}}>0,00€</Text>
      </View>

      <View style={{backgroundColor:'#D7DBDD', height:1, width:300, marginLeft:50, marginTop:30, marginBottom:30}}></View>

      <View style={{marginTop:20, marginBottom:20, alignItems:'center'}}>
        <Text style={{fontSize: 30, marginTop:10, marginBottom:10}}>75,00€</Text>
        <Text style={{fontSize:15}}>Montant disponible</Text>
        <Text style={{fontWeight:'bold', fontSize:15, color:"white", textAlign:'center', backgroundColor:'#5499C7', width:340, height:40, marginTop:50, marginLeft:20}}>Transférer vers mon compte bancaire</Text>
      </View>

  </View>

  )
}

export default WalletScreens;