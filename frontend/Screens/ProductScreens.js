import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Card, ListItem, Button, } from 'react-native-elements'
import { connect } from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import Carousel from '../components/Carousel';
import Swiper from 'react-native-swiper';


function ProductScreens({ navigation, productId, onSubmitTypeOfAction }) {

  var typeOfAction = 'acheteur';

  var picsBySell = [
    {uri:productId.images[0]},
    {uri:productId.images[1]},
    {uri:productId.images[2]},
    {uri:productId.images[3]},
    {uri:productId.images[4]},
  ]

  var picsSwiper = picsBySell.map((pics, i) => {
    return( 
     <Image key={i} style={{width: "100%", height: "100%"}} source={`{pics.uri}`}/>
    )
  })

  return (
    <View style={{ flex: 1, marginTop: 25, width: '95%', marginLeft: 10}}>
      <FontAwesome name="long-arrow-left" size={24} color="grey"
        onPress={() => navigation.goBack()}
      />
      <ScrollView>

        <Swiper style={{width: "100%", height: 500}} loop={true} dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle} >

          <View style={{width: "100%", height: "100%"}}>
            <Image source={{uri:productId.images[0]}} style={{width: "100%", height: "100%"}}/>
            <Image source={{uri:productId.images[1]}} style={{width: "100%", height: "100%"}}/>
            {picsSwiper}
          </View>
        </Swiper>

        <View style={{ flex: 1, flexDirection: 'row', marginTop: 5, justifyContent: "space-between" }}>
          <Text >Axel Barateau</Text>
          <Icon name='heart-o'color='#82589F' size={20} />
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Icon name='star' color='#f9ca24' size={20}/>
          <Icon name='star' color='#f9ca24' size={20}/>
          <Icon name='star' color='#f9ca24' size={20}/>
          <Icon name='star' color='#f9ca24' size={20}/>
          <Icon name='star' color='#f9ca24' size={20}/>
          <Text style={{ marginLeft: 10, marginTop:2 }}>46 évaluations</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
          <Text>{productId.title}</Text>
          <Text>Prix: {productId.price} €</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text>Marque : {productId.brand}</Text>
          <Text>Frais de Port: {productId.shippingFees}€</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text>Age : {productId.kidsAge}</Text>
        </View>
        <View style={{ marginTop: 10, marginBottom: 10 }}>
          <ScrollView>
            <Text>Description :</Text>
            <Text>{productId.description}</Text>
          </ScrollView>
        </View>
        <Button
          buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: "#82589F" }}
          type='solid'
          title='Acheter'
          onPress={() => { navigation.navigate('SignIn'); onSubmitTypeOfAction(typeOfAction) }}
        />

      </ScrollView>

    </View>



  )
}

const styles = {
  dotStyle: {
    backgroundColor: 'rgba(255, 255, 255, 0.48)',
  },
  activeDotStyle: {
    backgroundColor: 'white',
  },
  wrapper: {},
  slide1: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5c77a9',
  },
  slide2: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5c77a9',
  },
  slide3: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5c77a9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
};
function mapStateToProps(state) {
  return { productId: state.product }
};

function mapDispatchToProps(dispatch) {
  return {
    onSubmitTypeOfAction: function (typeOfAction) {
      dispatch({ type: 'buy', typeOfAction })
    }
  }
}

export default connect(

  mapStateToProps,
  mapDispatchToProps


)(ProductScreens); 