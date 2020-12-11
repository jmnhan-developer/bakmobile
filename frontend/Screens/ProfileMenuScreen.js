import React from 'react';
import { FlatList, StyleSheet, Text, View,AsyncStorage } from 'react-native';
import {Button, Input, ListItem, Icon} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { FontAwesome5 } from '@expo/vector-icons';

  
  const ProfileMenuScreen = ({navigation}) => {
    return (

      <View style={{marginTop: 50}}>

        <ListItem bottomDivider onPress= {() => navigation.navigate('ProfileUser')}>
          <FontAwesome name="user-circle-o" size={20}  color="#82589F"/>
          <ListItem.Content>
            <ListItem.Title >Mon Profil</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>

        <ListItem bottomDivider onPress= {() => navigation.navigate('')}>
          <FontAwesome name="star" size={20}  color="#82589F"/>
          <ListItem.Content>
            <ListItem.Title>Mon évalution (route à finir)</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>

        <ListItem bottomDivider onPress= {() => navigation.navigate('')}>
          <FontAwesome name="heart-o" size={20}  color="#82589F"/>
          <ListItem.Content>
            <ListItem.Title>Mes favoris (route à finir)</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>

        <ListItem bottomDivider onPress= {() => navigation.navigate('ArticleSell')}>
          <FontAwesome5 name="store" size={18} color="#82589F" />
          <ListItem.Content>
            <ListItem.Title>Mes ventes</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>

        <ListItem bottomDivider onPress= {() => navigation.navigate('ArticleBought')}>
          <FontAwesome name="shopping-cart" size={20}  color="#82589F"/>
          <ListItem.Content>
            <ListItem.Title >Mes achats</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>

        <ListItem bottomDivider onPress= {() => navigation.navigate('MyWallet')}>
          <FontAwesome name="euro" size={24} color="#82589F" />
          <ListItem.Content>
            <ListItem.Title >Mon porte-monnaie</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>

        <ListItem bottomDivider>
          <FontAwesome name="sign-out" size={24} color="#82589F" />
          <ListItem.Content>
            <ListItem.Title onPress= {() => {navigation.navigate('SignIn');AsyncStorage.removeItem("userId")}}>Log Out</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </View>
    );
  }
  
  export default ProfileMenuScreen;