import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import { Card, ListItem, Button,  } from 'react-native-elements'
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Carousel from '../components/Carousel';


function ProductScreens({navigation,productId,onSubmitTypeOfAction}){

  var typeOfAction='acheteur';

  return (
    <ScrollView>
        <View style={styles.container}>
        <Button
        icon={<Icon name="long-arrow-left" color="#82589F" size={24}/>}
        containerStyle={{alignItems:"flex-start"}}
        type="clear"
        onPress= {() => navigation.goBack()}
      />
          {/* <Image style={styles.image} 
          source={{uri:productId.images[0]}}
          /> */}
          <Carousel />
          <View style={{flexDirection:'row', marginTop:10}}>
         
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
            <Icon   style={{marginLeft:170}}
                    name='heart-o'
                    color='#82589F'
                    size={20}
              />
          </View>
          <View style={styles.containerCarac}>
            <Text style={{fontWeight:'bold'}}>{productId.title}</Text>
            <Text>Prix: {productId.price} €</Text>
          </View>
          <View style={styles.containerCarac}>
            <Text>Marque : {productId.brand}</Text>
            <Text>Frais de Port: {productId.shippingFees}€</Text>
          </View>
          <View style={styles.containerCarac}>
            <Text>Age : {productId.kidsAge}</Text>
          </View>
          <View style={{marginTop: 10, marginBottom:10, marginLeft:10}}>
            <ScrollView>
            <Text style={{fontStyle:'italic'}}>Description :</Text>
            <Text>{productId.description}</Text>
            </ScrollView>
          </View>
          <Button
            buttonStyle={{borderRadius: 5, marginLeft: 10, marginRight: 10, marginBottom: 0, backgroundColor:"#82589F"}}
            type='solid'
            title='Acheter'
            onPress= {() => {navigation.navigate('SignIn');onSubmitTypeOfAction(typeOfAction)}}
            />
        
    </View>
    </ScrollView>

)
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent:"space-between",
  marginTop: 30
},

image: {
    width: 355,
    height: 400,
},

containerCarac: {
  flexDirection: "row",
  justifyContent:'space-between',
  marginLeft:10,
  marginTop: 10,
  marginRight:10

}
});

function mapStateToProps(state) {
  return {productId: state.product}
};

function mapDispatchToProps(dispatch) {
  return {
    onSubmitTypeOfAction: function (typeOfAction) {
      dispatch({ type: 'buy', typeOfAction})
    }
  }
}




export default connect(

  mapStateToProps, 
  mapDispatchToProps


)(ProductScreens);  
