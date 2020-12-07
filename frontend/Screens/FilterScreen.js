import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, FlatList,SafeAreaView } from 'react-native';

export default function FilterScreen() {

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Se déplacer',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'S habiller',
        }]
    const DATA2 = [
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Se baigner',
        },
   
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Dormir',
          }]
    const DATA3 = [ 
          {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Accessoires',

          },
          {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Autre',
          }
      ];

      const Item = ({ title }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
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
           data={DATA}
           renderItem={renderItem}
           keyExtractor={item => item.id}
           />
           <FlatList
           horizontal={true}
           data={DATA2}
           renderItem={renderItem}
           keyExtractor={item => item.id}
           />
           <FlatList
           horizontal={true}
           data={DATA3}
           renderItem={renderItem}
           keyExtractor={item => item.id}
           />
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