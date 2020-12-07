import React from 'react';
import { Text, StyleSheet, ScrollView, View } from 'react-native';
import {Card} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 50,
     color:'#D6A2E8',
     fontFamily: 'sans-serif-light',
     
    },
    item: {
      paddingTop: 10,
      fontFamily: 'sans-serif-light',
      fontSize: 18,
      height: 44,
      borderBottomColor: '#82589F',
      color:'#82589F',
      borderBottomWidth:1,
      
    },
    icon: {
      padding:300,
    },
    title: {
      fontSize:25,
      fontWeight:'bold',
      color:'black',
      fontFamily: 'sans-serif-light',
    }
  });
  
  const ProfileSellingArticleScreen = () => {
    var cardData = [
      {image:'https://picsum.photos/200?random=1',title:'Poussette McLaren',price:'199€',dateSubmit:'11/02/2021'},
      {image:'https://picsum.photos/200?random=5',title:'Tire Lait',price:'30€',dateSubmit:'11/02/2021'},
      {image:'https://picsum.photos/200?random=2',title:'Biberon',price:'1€',dateSubmit:'11/02/2021'},
      {image:'https://picsum.photos/200?random=6',title:'Tire Lait',price:'30€',dateSubmit:'11/02/2021'},   
  ]
    let cardList = cardData.map((card, i)=> {
      return <Card
        image={{uri:card.image}}>
        <Text style={{fontSize:22}}>{card.title}</Text>
      <Text>{card.price} - Mise en vente le: {card.dateSubmit}</Text>
      <Text style={{paddingTop:15}}><FontAwesome name={'trash'} size={24} color='#82589F' style={{paddingRight:350}}/>Supprimer l'annonce</Text>

      </Card>
  }
  );
    return (
      <View style={styles.container} >
        <Text style={styles.title}>Mes articles en vente</Text>
        <ScrollView style={{marginTop: 25}}>
        {cardList}
        </ScrollView>
      </View>
    );
  }
  
  export default ProfileSellingArticleScreen;