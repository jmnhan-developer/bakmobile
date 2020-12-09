import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome } from '@expo/vector-icons';
import { View, KeyboardAvoidingView, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, Input, Card, SearchBar, Image } from 'react-native-elements';

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

function FilterScreens() {
  
  return (
    <View style={{flex: 1, marginTop:20}}>

      <Text style={{fontSize:15, textAlign:"center", justifyContent: "center", marginTop:5, marginBottom:5}}>Sélectionner le besoin de votre enfant</Text>

      <View style={{flex:1, flexDirection:"row", width:"95%", marginLeft:10, alignItems:"center" , justifyContent:"space-between", flexWrap: 'wrap'}}>

        <Button style={{marginTop:10, width:190}}
          title="Se Déplacer"
          buttonStyle={{ backgroundColor: '#B3B6B7'}}
          type="solid"
        />
        <Button style={{marginTop:10, width:190}}
          title="S'habiller"
          buttonStyle={{ backgroundColor: "#B3B6B7"}}
          type="solid"
        />
        <Button style={{marginTop:10, width:190}}
              title="Se Baigner"
              buttonStyle={{ backgroundColor: "#B3B6B7"}}
              type="solid"
            />
        <Button style={{marginTop:10, width:190}}
          title="Dormir"
          buttonStyle={{ backgroundColor: "#B3B6B7"}}
          type="solid"
        />
        <Button style={{marginTop:10, width:190}}
              title="Manger"
              buttonStyle={{ backgroundColor: "#B3B6B7"}}
              type="solid"
            />
        <Button style={{marginTop:10, width:190}}
          title="Jouer"
          buttonStyle={{ backgroundColor: "#B3B6B7"}}
          type="solid"
        />
        <Button style={{marginTop:10, width:190}}
              title="Accessoires"
              buttonStyle={{ backgroundColor: "#B3B6B7"}}
              type="solid"
            />
        <Button style={{marginTop:10, width:190}}
          title="Autres"
          buttonStyle={{ backgroundColor: "#B3B6B7"}}
          type="solid"
        />
      </View>
    </View>
  )
}

export default FilterScreens;


// import React, { useReducer,useState } from 'react';
// import { StyleSheet, Text, View, Button, FlatList,SafeAreaView } from 'react-native';
// import FilterScreen from './Screens/FilterScreen'
// import ProfileScreen from './Screens/ProfileScreen'
// import SellScreen from './Screens/SellScreen'
// import {createBottomTabNavigator} from 'react-navigation-tabs'
// import { FontAwesome } from '@expo/vector-icons'; 
// import {createAppContainer } from 'react-navigation';

          <Text  style={{marginBottom: 20, marginTop:20, textAlign: "center"}}>J'ai déjà un compte</Text>



// var BottomNavigator = createBottomTabNavigator({
  
//   Sell: SellScreen,
//   Filter:FilterScreen,
//   Profile: ProfileScreen,
  
// },
//   {
//     defaultNavigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ tintColor }) => {
//         var iconName;
//         if (navigation.state.routeName == 'Sell') {
//           iconName = 'plus';
//         } else if (navigation.state.routeName == 'Filter') {
//           iconName = 'search';
//         } else if (navigation.state.routeName == 'Profile') {
//           iconName = 'user-o';
//         }
//         return <FontAwesome name={iconName} size={25} color={tintColor} />;
//       },
//     }),
//     tabBarOptions: {
//       activeTintColor: '#eb4d4b',
//       inactiveTintColor: '#FFFFFF',
//       style: {
//         backgroundColor: '#130f40',
//       }
//     }
   

//   });
//   const Navigation = createAppContainer(BottomNavigator);

      )
}
