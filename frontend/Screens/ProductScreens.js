import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import { Card, ListItem, Button,  } from 'react-native-elements'

import Icon from 'react-native-vector-icons/FontAwesome';


function ProductScreens(){

  var loutre = require('./assets/loutre.jpg')

    return (
        <View style={styles.container}>

        <Card 
          containerStyle={{marginTop:50, borderEndColor:"white"}}
          wrapperStyle={{borderColor:'white'}}
         >
          
          <Image style={styles.image} 
          source={require('./assets/loutre.jpg')}/>
          <View style={{flexDirection:'row', marginTop:10, marginLeft:10}}>
          <Image
          style={styles.avatar}
          source={require('./assets/flag-uk.png')}
          />
            <View style={{marginLeft:10}}>
            <Text >Axel Barateau</Text>
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
            <Text>Articles : Poussette</Text>
            <Text>Prix: 199€</Text>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Text>Marques : Bébé Confort</Text>
            <Text>Frais de Port: 19€</Text>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Text>Age : 1 à 3 ans</Text>
          </View>
          <View style={{marginTop: 10, marginBottom:10}}>
            <ScrollView>
            <Text>Description :</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "</Text>
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