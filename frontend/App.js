
import React, { useReducer,useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList,SafeAreaView } from 'react-native';
import FilterScreen from './Screens/FilterScreen'
import ProfileScreen from './Screens/ProfileScreen'
import SellScreen from './Screens/SellScreen'
import BasketScreens from './Screens/BasketScreens'
import ProductScreens from './Screens/ProductScreens'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import { FontAwesome } from '@expo/vector-icons'; 
import {createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

var StackNavigator = createStackNavigator({ 

  Filter:  FilterScreen,  
  Product: ProductScreens,
  Basket: BasketScreens

}, 
{headerMode: 'none'}
);  



var BottomNavigator = createBottomTabNavigator({
  
  Sell: SellScreen,
  Filter: StackNavigator,
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
