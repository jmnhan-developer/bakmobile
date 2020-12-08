import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome } from '@expo/vector-icons';
import { View, KeyboardAvoidingView, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, Input, Card, SearchBar, Image } from 'react-native-elements';


function HomeScreens({navigation}) {
  
  var dataList = [
    {url:'https://picsum.photos/201', brand:'Aubert', size:'M', price:"10"},
    {url:'https://picsum.photos/202', brand:'BébéConfort', size:'L', price:"20"},
    {url:'https://picsum.photos/203', brand:'Chicco', size:'XL', price:"30"},
    {url:'https://picsum.photos/204', brand:'Text', size:'6 ans', price:"40"},
    {url:'https://picsum.photos/205', brand:'Mon Bébé', size:'10 ans', price:"50"},
    {url:'https://picsum.photos/206', brand:'Bambino', size:'s', price:"60"},
    {url:'https://picsum.photos/207', brand:'Mon Bébé', size:'10 ans', price:"50"},
    {url:'https://picsum.photos/208', brand:'Bambino', size:'s', price:"60"}
  ]
  
  
  let lastArticles = dataList.map((uri, i) => {
    return <View style={{width:'47%'}}>
             <Image source={{uri:uri.url}} style={{ height:250, width: 200 }} onPress= {() => navigation.navigate('Product')}/>
             <View style={{flex: 1, flexDirection:'row', marginTop:5, justifyContent:"space-between"}}>
             <Text>{uri.brand}</Text>
             <FontAwesome name="heart-o" size={15} color="black" />
             </View>
             <Text>Taille: {uri.size}</Text>
             <Text>{uri.price}€</Text>
           </View>

  }
  )


  return (
    <View style={{flex: 1, marginTop:25 }}>
      <SearchBar
      containerStyle={{backgroundColor:'white'}}
      lightTheme='true'
      placeholder="Rechercher" backgroundColor='light-grey' />

      <Text style={{fontSize:20, textAlign:"center", marginTop:5, marginBottom:5}}>Les derniers articles mis en vente</Text>

      <ScrollView>
        <View style={{flex: 1, flexDirection:'row', width:'95%', flexWrap: 'wrap', justifyContent:"space-between", margin:10}}>
          {lastArticles}
        </View>
      </ScrollView>
    </View>
  )
}

export default HomeScreens;