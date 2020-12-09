import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import {Button, Input} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 15,
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
    }
  });
  
  const ProfileMenuScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        {/* <FlatList
          data={[
            {label: 'Mon Profil',icon:'user-circle-o'},
            {label: 'Mon évaluation',icon:'star'},
            {label: 'Mes favoris',icon:'heart-o'},
            {label: 'Mes articles en vente',icon:'shopping-cart'},
            {label: 'Mes articles achetés',icon:'shopping-cart'},
            {label: 'Porte Monnaie',icon:'euro'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>
          
            <FontAwesome name={item.icon} size={24} color='#82589F' style={{paddingRight:350}}/>
            {item.label}</Text>}
        /> */}
        <Button
          buttonStyle={{marginTop:40, marginBottom:40}}
          icon={
              <FontAwesome name="user-circle-o" size={24}  color="#82589F"/>
              }            
          title="Mon Profile"
          onPress= {() => navigation.navigate('ProfileUser')}
        />
        <Button
          buttonStyle={{marginTop:40, marginBottom:40}}
          icon={
              <FontAwesome name="star" size={24}  color="#82589F"/>
              }            
          title="Mon évaluation"
          
        />
        <Button
          buttonStyle={{marginTop:40, marginBottom:40}}
          icon={
              <FontAwesome name="heart-o" size={24}  color="#82589F"/>
              }            
          title="Mes favoris"
          
        />
        <Button
          buttonStyle={{marginTop:40, marginBottom:40}}
          icon={
              <FontAwesome name="shopping-cart" size={24}  color="#82589F"/>
              }            
          title="Mes articles en vente"
          onPress= {() => navigation.navigate('ArticleSell')}
        />
        <Button
          buttonStyle={{marginTop:40, marginBottom:40}}
          icon={
              <FontAwesome name="shopping-cart" size={24}  color="#82589F"/>
              }            
          title="Mes articles achetés"
          onPress= {() => navigation.navigate('ArticleBought')}
        />
        <Button
          buttonStyle={{marginTop:40, marginBottom:40}}
          icon={
              <FontAwesome name="euro" size={24}  color="#82589F"/>
              }            
          title="Porte Monnaie"
          
        />
      </View>
    );
  }
  
  export default ProfileMenuScreen;