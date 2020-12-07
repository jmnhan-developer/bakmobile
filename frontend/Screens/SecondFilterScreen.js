import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, FlatList,SafeAreaView } from 'react-native';

export default function SecondFilterScreen() {



    const DATA = [
        {
            title: 'Siége auto',
        },
        {
            title: 'Poussettes',
        },
        {
            title: 'Nacelles',
        },
   
        {
            title: 'Portes-bébés',
          },
          {
            title: 'Sacs à langer',

          },
          {
            title: 'Chanceliére',
          },
          {
            title: 'Habillage',

          },
          {
            title: 'Autres',
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
        <Text style={styles.titlePage}>Choisissez une sous-catégorie</Text>
    
         <View style={styles.container}>
      
          <SafeAreaView style={styles.container}>
          <FlatList
           horizontal={true}
           data={DATA.slice(0,2)}
           renderItem={renderItem}
           keyExtractor={item => item.id}
           />
           <FlatList
           horizontal={true}
           data={DATA.slice(2,4)}
           renderItem={renderItem}
           keyExtractor={item => item.id}
           />
           <FlatList
           horizontal={true}
           data={DATA.slice(4,6)}
           renderItem={renderItem}
           keyExtractor={item => item.id}
           />
           <FlatList
           horizontal={true}
           data={DATA.slice(6,8)}
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
      marginLeft:55,
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