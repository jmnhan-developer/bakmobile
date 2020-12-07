import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
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
  
  const ProfileMenuScreen = () => {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {label: 'Mon Profil',icon:'user-circle-o'},
            {label: 'Mon évaluation',icon:'star'},
            {label: 'Mes favoris',icon:'heart-o'},
            {label: 'Mes articles en vente',icon:'shopping-cart'},
            {label: 'Mes articles achetés',icon:'shopping-cart'},
            {label: 'Porte Monnaie',icon:'euro'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>
            <FontAwesome name={item.icon} size={24} color='#82589F' style={{paddingRight:350}}/>
            {item.label}</Text>}
        />
      </View>
    );
  }
  
  export default ProfileMenuScreen;