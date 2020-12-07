

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, Image,FlatList, SafeAreaView, TouchableOpacity} from 'react-native';
import { Card, ListItem, Button,  } from 'react-native-elements'

import RNPickerSelect from 'react-native-picker-select';

import SellScreen from './Screens/SellScreen'
import FilterScreen from './Screens/FilterScreen'
import HomeScreen from './Screens/HomeScreen'
import MessageScreen from './Screens/MessageScreen'
import ProfileScreen from './Screens/ProfileScreen'
import Icon from 'react-native-vector-icons/FontAwesome';
import createAppContainer  from 'react-navigation';
import createBottomTabNavigator from 'react-navigation-tabs';
import createStackNavigator from 'react-navigation-stack';


const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 150,
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
  
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text>{title}</Text>
    </View>
  );
  
  const DATA=[
    {label: 'Mon Profil',icon:'user-circle-o'},
    {label: 'Mon évaluation',icon:'star'},
    {label: 'Mes favoris',icon:'heart-o'},
    {label: 'Mes articles en vente',icon:'shopping-cart'},
    {label: 'Mes articles achetés',icon:'shopping-cart'},
    {label: 'Porte Monnaie',icon:'euro'},
  ]

var BottomNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Chercher: FilterScreen,
  Vente: SellScreen,
  Message:MessageScreen,
  Profile:ProfileScreen

},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        var iconName;
        if (navigation.state.routeName == 'Home') {
          iconName = 'home';
        } else if (navigation.state.routeName == 'Chercher') {
          iconName = 'search';
        } else if  (navigation.state.routeName == 'Vente') {
          iconName = 'plus';
        } else if (navigation.state.routeName == 'Message') {
          iconName = 'envelope-o';
        } else if (navigation.state.routeName == 'Profile') {
          iconName = 'user-o';
        }

        return <FontAwesome name={iconName} size={24} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#eb4d4b',
      inactiveTintColor: '#FFFFFF',
      style: {
        backgroundColor: '#130f40',
      }
    }
   

  });


// export default Navigation = createAppContainer(BottomNavigator);

  const ProfileMenuScreen = () => {
    const renderItem = ({ item }) => (
      <Item title={item.label} />
    );
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
        />
        {BottomNavigator}
      </SafeAreaView>
    );
  }
  
  export default ProfileMenuScreen;







