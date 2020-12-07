import React from 'react';
import { FlatList, StyleSheet, Text, Title, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 150,
     color:'#D6A2E8'
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
    },
    title: {
      fontSize:25,
      fontWeight:'bold',
      color:'black'
    }
  });
  
  const ProfileScreen = () => {
    return (
      <View style={styles.container} >
        <Text style={styles.title}>Votre Profil</Text>
        <FlatList
          data={[
            'Jonh',
            'Doe',
            'johndoe@free.fr',
            '•••••••',
            '20 rue du Paradis',
            '75011',
            'Paris',
            '06 22 42 41 15',
          ]}
          renderItem={({item}) => <View>
            <Text style={styles.item}> {item}</Text>
            </View>}
        />
      </View>
    );
  }
  
  export default ProfileScreen;
