import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import { Card, ListItem, Button,  } from 'react-native-elements'

import Icon from 'react-native-vector-icons/FontAwesome';


export default function App() {
  return(

    <Card containerStyle={{marginTop:50}}>
      <Button
        icon={<Icon name="long-arrow-left" color="#82589F" size={24}/>}
        containerStyle={{alignItems:"flex-start"}}
        type="clear"
      />
      <Card.Image source={require('./assets/loutre.jpg')}
      style={{width:400, height:300}} />

        <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:10}}>
            <Text>Articles : Poussette</Text>
            <Text>Prix : 199€</Text>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Text>Marques : Bébé Confort</Text>
            <Text>Frais de Port : 19€</Text>
        </View>    
        <View style={{flexDirection:'row-reverse', marginTop: 10}}>
            <Text> Total : 218€ </Text>
        </View>
      <Button
        icon={<Icon name='code' color='#ffffff' />}
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        title='VIEW NOW' />
    </Card>
  )
}


