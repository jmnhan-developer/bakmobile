import React from 'react';
import { FlatList, SafeAreaView, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 150,
     color:'#D6A2E8',
     fontFamily: 'sans-serif-light',
    },
    item: {
      paddingTop: 10,
      fontFamily: 'sans-serif-light',
      fontSize: 18,
      height: 44,
      borderBottomColor: '#82589F',
      color:'#82589F',
      borderBottomWidth:1,
    },
    icon: {
      padding:300,
    }
  });
  
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text>{title}</Text>
    </View>
  );
  
  const DATA=[
    {label: 'Mon Profil',icon:'user-circle-o'},
    {label: 'Mon évaluation',icon:'star'},
    {label: 'Mes favoris',icon:'heart-o'},
    {label: 'Mes articles en vente',icon:'shopping-cart'},
    {label: 'Mes articles achetés',icon:'shopping-cart'},
    {label: 'Porte Monnaie',icon:'euro'},
  ]

  const ProfileMenuScreen = () => {
    const renderItem = ({ item }) => (
      <Item title={item.label} />
    );
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
        />
      </SafeAreaView>
    );
  }
  
  export default ProfileMenuScreen;
