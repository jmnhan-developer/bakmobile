import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import {Button, Input, ListItem, Icon} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { FontAwesome5 } from '@expo/vector-icons';

  
  const ProfileMenuScreen = ({navigation}) => {
    return (

      <View style={{marginTop: 50}}>

        <ListItem bottomDivider>
          <FontAwesome name="user-circle-o" size={20}  color="#82589F"/>
          <ListItem.Content>
            <ListItem.Title onPress= {() => navigation.navigate('ProfileUser')}>Mon Profil</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>

        <ListItem bottomDivider>
          <FontAwesome name="star" size={20}  color="#82589F"/>
          <ListItem.Content>
            <ListItem.Title onPress= {() => navigation.navigate('')}>Mon évalution (route à finir)</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>

        <ListItem bottomDivider>
          <FontAwesome name="heart-o" size={20}  color="#82589F"/>
          <ListItem.Content>
            <ListItem.Title onPress= {() => navigation.navigate('')}>Mes favoris (route à finir)</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>

        <ListItem bottomDivider>
          <FontAwesome5 name="store" size={18} color="#82589F" />
          <ListItem.Content>
            <ListItem.Title onPress= {() => navigation.navigate('ArticleSell')}>Mes ventes</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>

        <ListItem bottomDivider>
          <FontAwesome name="shopping-cart" size={20}  color="#82589F"/>
          <ListItem.Content>
            <ListItem.Title onPress= {() => navigation.navigate('ArticleBought')}>Mes achats</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>

        <ListItem bottomDivider>
          <FontAwesome name="euro" size={24} color="#82589F" />
          <ListItem.Content>
            <ListItem.Title onPress= {() => navigation.navigate('MyWallet')}>Mon porte-monnaie (route à finir)</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        
      </View>
    );
  }
  
  export default ProfileMenuScreen;