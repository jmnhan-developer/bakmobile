import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList,SafeAreaView } from 'react-native';
import FilterScreen from './Screens/FilterScreen'
import ProfileScreen from './Screens/ProfileScreen'
import SellScreen from './Screens/SellScreen'
import BasketScreens from './Screens/BasketScreens'
import ProductScreens from './Screens/ProductScreens'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import { FontAwesome } from '@expo/vector-icons'; 
import {createAppContainer }  from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreens from './Screens/HomeScreens'
import ResultScreens from './Screens/ResultScreens';

import product from '../frontend/reducers/Article.reducer';
import photo from '../frontend/reducers/Pic.reducer';
import {Provider} from 'react-redux';
import {createStore, combineReducers}  from 'redux';

const store = createStore(combineReducers({photo,product}));

var StackNavigator = createStackNavigator({ 

  
  Filter:  FilterScreen,  
  Product: ProductScreens,
  Result:ResultScreens,
  Basket: BasketScreens

}, 
{headerMode: 'none'}
);  

var BottomNavigator = createBottomTabNavigator({
  
  Home:HomeScreens,
  Sell: SellScreen,
  Filter: StackNavigator,
  Profile: ProfileScreen,
  
 },
  {
   defaultNavigationOptions: ({ navigation }) => ({
     tabBarIcon: ({ tintColor }) => {
      var iconName;
         if (navigation.state.routeName == 'Home') {
        iconName = 'home';
       }
         else if (navigation.state.routeName == 'Sell') {
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

export default function App(){
    return (

      <Provider store={store}>
        <Navigation/>
      </Provider>

      )
}
