import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FilterScreen from './Screens/FilterScreen';
import HomeScreen from './Screens/HomeScreen';
import MessageScreen from './Screens/MessageScreen';
import SellScreen from './Screens/SellScreen';
import ProfileScreen from './Screens/ProfileScreen';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { FontAwesome } from '@expo/vector-icons'; 
function App() {
  return (
    <View>
   
      
  
    </View>
  );
}

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


export default Navigation = createAppContainer(BottomNavigator);