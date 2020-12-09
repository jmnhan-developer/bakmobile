
import React, { useState } from 'react';
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
import HomeScreens from './Screens/HomeScreens'
import ResultScreens from './Screens/ResultScreens';


import photo from '../frontend/reducers/Pic.reducer';
import {Provider} from 'react-redux';
import {createStore, combineReducers}  from 'redux';

const store = createStore(combineReducers({photo}));

var StackNavigator = createStackNavigator({ 

  
  Rechercher:  FilterScreen,  
  Product: ProductScreens,
  Result: ResultScreens,
  Basket: BasketScreens

}, 
{headerMode: 'none'}
);  

var BottomNavigator = createBottomTabNavigator({
  
  Home:HomeScreens,
  Vendre: SellScreen,
  Rechercher: StackNavigator,
  "Mon Profil" : ProfileScreen,
  
 },
  {
   defaultNavigationOptions: ({ navigation }) => ({
     tabBarIcon: ({ tintColor }) => {
      var iconName;
         if (navigation.state.routeName == 'Home') {
        iconName = 'home';
       }
        else if (navigation.state.routeName == 'Rechercher') {
        iconName = 'search';
        
       } else if (navigation.state.routeName == 'Vendre') {
        iconName = 'plus';
       } else if (navigation.state.routeName == 'Mon Profil') {
         iconName = 'user-o';
      }
       return <FontAwesome name={iconName} size={25} color={tintColor} />;
      },
    }),
     tabBarOptions: {
      activeTintColor: '#82589F',
      inactiveTintColor: '#FFFFFF',
      style: {
       backgroundColor: '#D6A2E8',
      }
    }
   

  });

 


const Navigation = createAppContainer(BottomNavigator);

export default function App(){
    return (

      <Provider store={store}>
        <Navigation/>
      </Provider>

      )

}

