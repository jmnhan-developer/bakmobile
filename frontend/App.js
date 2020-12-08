
// import React, { useReducer,useState } from 'react';
// import { StyleSheet, Text, View, Button, FlatList,SafeAreaView } from 'react-native';
// import FilterScreen from './Screens/FilterScreen'
// import ProfileScreen from './Screens/ProfileScreen'
// import SellScreen from './Screens/SellScreen'
// import {createBottomTabNavigator} from 'react-navigation-tabs'
// import { FontAwesome } from '@expo/vector-icons'; 
// import {createAppContainer } from 'react-navigation';




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

//   export default function App () {
//     return (
//      <Navigation/>
//       )
//   }

import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import { Card, ListItem, Button,  } from 'react-native-elements'

import Icon from 'react-native-vector-icons/FontAwesome';



function ProductScreens(props){

  var articles = [
    {title: "Poussette de luxe",
    price: "199€",
    brand: "Bébé Confort",
    shippingFees: "19€",
    kidsAge: "1 à 3 ans",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    images: "./assets/loutre.jpg"
  }];

  var user = [
    {
      firstName: "Axel",
      lastName: "Barateau",
      avatar: "./assets.flag-uk.jpg"

  }];


    return (
        <View style={styles.container}>

        <Card 
          containerStyle={{marginTop:50, borderEndColor:"white"}}
          wrapperStyle={{borderColor:'white'}}
         >
          
          <Image style={styles.image} source={articles[0].images}/>
          <View style={{flexDirection:'row', marginTop:10, marginLeft:10}}>
          <Image
          style={styles.avatar}
          source={user[0].avatar}
          />
            <View style={{marginLeft:10}}>
            <Text >{user[0].firstName} {user[0].lastName}</Text>
                <View style={{flexDirection: 'row'}}>
                  <Icon name='star'
                        color= '#f9ca24'
                        size={20}
                  />
                  <Icon name='star'
                        color= '#f9ca24'
                        size={20}
                  />
                  <Icon name='star'
                        color= '#f9ca24'
                        size={20}
                  />
                  <Icon name='star-o'
                        color= '#f9ca24'
                        size={20}
                  />
                  <Icon name='star-o'
                        color= '#f9ca24'
                        size={20}
                  />
                  <Text style={{marginLeft:10}}>46 évaluation</Text>
                </View>
            </View>
            <Icon   style={{marginLeft:80}}
                    name='heart-o'
                    color='#82589F'
                    size={20}
              />
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:10}}>
            <Text>Articles : {articles[0].title}</Text>
            <Text>Prix: {articles[0].price}</Text>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Text>Marques : {articles[0].brand}</Text>
            <Text>Frais de Port: {articles[0].shippingFees}</Text>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Text>Age : {articles[0].kidsAge}</Text>
          </View>
          <View style={{marginTop: 10, marginBottom:10}}>
            <ScrollView>
            <Text>Description :</Text>
            <Text>{articles[0].description}</Text>
            </ScrollView>
          </View>
          <Button
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:"#82589F"}}
            type='solid'
            title='Acheter' />
        </Card>
    </View>

)
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent:"space-between"
},

image: {
    width: 355,
    height: 400,
},

avatar: {
  width: 30,
  height:30,
}
});
export default (ProductScreens);
