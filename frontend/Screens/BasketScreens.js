import React, {useState,useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView, Image, FlatList} from 'react-native';
import { Card, ListItem, Button,  } from 'react-native-elements'
import DropDownPicker from 'react-native-dropdown-picker';
import { connect } from 'react-redux';
import Carousel from '../components/Carousel';
import Swiper from 'react-native-swiper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



import Icon from 'react-native-vector-icons/FontAwesome';

function BasketScreens({navigation,productId,takeToken}) {

  const [seller,setSeller]=useState({});
  const [firstName,setFirstName]=useState('')
  const [lastName, setLastName]=useState('')
  console.log('seller token in BasketScreen',productId.sellerToken);
  useEffect(() => {
    const findSeller = async() => {
      const data = await fetch(`http://172.17.1.18:3000/users/get-user?UserToken=${takeToken}`)
      const body = await data.json()
      console.log('-----------',body)
      console.log('firstname from basketscreen -----------',body.data.firstName)
      setSeller(body.data)
      setFirstName(body.data.firstName)
      setLastName(body.data.lastName)
    }

    findSeller();
      
  },[])

console.log('seller of the product in basket screen',seller)

  let totalPrice = parseInt(productId.price)+parseInt(productId.shippingFees);
  const [selectedValue, setSelectedValue] = useState(false);
  var userData
  if(selectedValue==true) {
     userData= <View style={{flexDirection:'column', justifyContent:'flex-start', margin:10}}>
     <Text>Prénom : {seller.firstName}</Text>
     <Text>Nom : {seller.lastName}</Text>
  <Text>e-mail : {seller.email}</Text>
     <Text>Adresse : {seller.address}</Text>
  <Text>Code postal : {seller.postalCode}</Text>
  <Text>Ville : {seller.city}</Text>
 </View> 
  }


  return (

    <View style={{ flex: 1, marginTop: 40, width: '95%', marginLeft: 10 }}>
      <FontAwesome name="long-arrow-left" size={24} color="#82589F"
        onPress={() => navigation.goBack()}
      />
      <ScrollView>
          <Carousel />
          <View style={{flexDirection:'row', marginTop:10}}>
         
            <View style={{marginLeft:10}}>
        <Text >{firstName} {lastName}</Text>
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
            <Icon   style={{marginLeft:150}}
                    name='heart-o'
                    color='#82589F'
                    size={20}
              />
          </View>

  
      <View style={styles.containerCarac}>
        <Text style={{fontWeight:'bold'}}>{productId.title}</Text>
        <Text>Prix : {productId.price} €</Text>
      </View>
      <View style={styles.containerCarac}>
        <Text>Marque : {productId.brand}</Text>
        <Text>Frais de Port : {productId.shippingFees} €</Text>
      </View>
      <View style={{ flexDirection: 'row-reverse', marginTop: 10, marginLeft:10}}>
        <Text> Total : {totalPrice} €</Text>
      </View>
      <DropDownPicker
        items={[
          { label: 'Colissimo', value: 'Colissimo' },
          { label: 'DHL', value: 'DHL' },
          { label: 'Happy-Post', value: 'Happy-Post' },
        ]}
        defaultIndex={0}
        defaultNull
        placeholder="Choisissez votre mode de livraison"
        containerStyle={{ height: 40, margin: 10 }}
        onChangeItem={() => { setSelectedValue(true) }}
      />
      {userData}

      <Button
        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: '#82589F' }}
        title='Finaliser le paiement' />
    </ScrollView>

    </View>

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
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
  console.log("state is stable", state.product)
  return {productId: state.product,takeToken:state.token}
};

export default connect(
  mapStateToProps,
  null
)(BasketScreens);


