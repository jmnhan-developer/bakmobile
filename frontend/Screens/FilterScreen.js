import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, FlatList,SafeAreaView } from 'react-native';
import SecondFilterScreen from './SecondFilterScreen'
export default function FilterScreen() {

    const DATA = [
        {
            title: 'Se déplacer',
            color:'green'
        },
        {
            title: 'S habiller',
            color:'orange'
        },
        {
            title: 'Se baigner',
            color:'orange'
        },
   
        {
            title: 'Dormir',
            color:'orange'
          },
          {
            title: 'Accessoires',
            color:'orange'

          },
          {
            title: 'Autre',
            color:'orange'
          }
      ];


      const Item = ({ title }) => (
        <View style={styles.item}>
          <Text style={styles.title} >{title}</Text>
        </View>
      );

      
        const renderItem = ({ item }) => (
   <Item title={item.title} />
        )


  return (
      <View>
        <Text style={styles.titlePage}>Choisissez une catégorie</Text>
    
         <View style={styles.container}>
      
          <SafeAreaView style={styles.container}>
          <FlatList
           horizontal={true}
           data={DATA.slice(0,2)}
           renderItem={renderItem}
           
           />
           <FlatList
           horizontal={true}
           data={DATA.slice(2,4)}
           renderItem={renderItem}
           
           />
           <FlatList
           horizontal={true}
           data={DATA.slice(4,6)}
           renderItem={renderItem}
           
           />
          <SecondFilterScreen/>
          </SafeAreaView>
    </View>

      <StatusBar style="auto" />
    
    </View>
  );
}

const styles = StyleSheet.create({
  
    container: {
    marginTop:5 ,
  },
  titlePage:{
      marginTop:40,
      marginLeft:75,
      fontSize:20
  },
  item: {
    width:150,
    backgroundColor: 'orange',
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    
},title: {
    fontSize: 16,
  }
})