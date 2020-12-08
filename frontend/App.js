
import React, { useReducer,useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList,SafeAreaView } from 'react-native';
import FilterScreen from './Screens/FilterScreen'
import ProfileScreen from './Screens/ProfileScreen'
import SellScreen from './Screens/SellScreen'

import {createBottomTabNavigator} from 'react-navigation-tabs'
import { FontAwesome } from '@expo/vector-icons'; 
import {createAppContainer } from 'react-navigation';




var BottomNavigator = createBottomTabNavigator({
  
  Sell: SellScreen,
  Filter:FilterScreen,
  Profile: ProfileScreen,


  
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        var iconName;
        if (navigation.state.routeName == 'Sell') {
          iconName = 'plus';
        } else if (navigation.state.routeName == 'Filter') {
          iconName = 'search';
        } else if (navigation.state.routeName == 'Profile') {
          iconName = 'user-o';
        }
        return <FontAwesome name={iconName} size={25} color={tintColor} />;
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

 


  const Navigation = createAppContainer(BottomNavigator);

  export default function App () {
    return (
      
    <Navigation/> 
      )
  }