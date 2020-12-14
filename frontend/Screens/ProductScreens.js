import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import { Card, ListItem, Button  } from 'react-native-elements'
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Carousel from '../components/Carousel';

import {IP_HOST} from '../variable'



function ProductScreens({navigation,productId,onSubmitTypeOfAction}){

  const [Name,setName]=useState('')
  var typeOfAction='acheteur';
  console.log('productId -----',productId.sellerToken)

  useEffect(() => {
    const findSeller = async() => {
      const data = await fetch(`http://${IP_HOST}:3000/users/get-seller?SellerToken=${productId.sellerToken}`)
      const body = await data.json()
      console.log('-----------',body)
      console.log(body.data.firstName)
      setName(body.data.firstName)
    }

    findSeller();
    
    
  },[])


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
          <View style={{flexDirection:'row', marginTop:10, marginLeft:10}}>
           <Image
          style={styles.avatar}
          /> 
            <View style={{marginLeft:10}}>
        <Text >{Name}</Text>
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
            <Text>{productId.title}</Text>
            <Text>Prix: {productId.price} €</Text>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Text>Marque : {productId.brand}</Text>
            <Text>Frais de Port: {productId.shippingFees}€</Text>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Text>Age : {productId.kidsAge}</Text>
          </View>
          <View style={{marginTop: 10, marginBottom:10}}>
            <ScrollView>
            <Text>Description :</Text>
            <Text>{productId.description}</Text>
            </ScrollView>
          </View>
          <Button
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:"#82589F"}}
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
