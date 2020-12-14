import React, {useState,useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView, Image, FlatList} from 'react-native';
import { Card, ListItem, Button,  } from 'react-native-elements'
import DropDownPicker from 'react-native-dropdown-picker';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome';

function BasketScreens({navigation,productId,takeToken}) {

  const [seller,setSeller]=useState({});
  console.log('seller token in BasketScreen',productId.sellerToken);
  useEffect(() => {
    const findSeller = async() => {
      const data = await fetch(`http://172.17.1.18:3000/users/get-user?UserToken=${takeToken}`)
      const body = await data.json()
      console.log('-----------',body)
      console.log('firstname from basketscreen -----------',body.data.firstName)
      setSeller(body.data)
    }

    findSeller();
      
  },[])

console.log('seller of the product in basket screen',seller)

  let totalPrice = parseInt(productId.price)+parseInt(productId.shippingFees);
  const [selectedValue, setSelectedValue] = useState(false);
  var userData
  if(selectedValue==true) {
     userData= <View style={{flexDirection:'column', justifyContent:'flex-start', margin:10}}>
     <Text>{seller.firstName}</Text>
     <Text>{seller.lastName}</Text>
  <Text>{seller.email}</Text>
     <Text>{seller.address}</Text>
  <Text>{seller.postalCode}</Text>
  <Text>{seller.city}</Text>
 </View> 
  }


  return (

    <Card containerStyle={{ marginTop: 50 }}>

      <Button
        icon={<Icon name="long-arrow-left" color="#82589F" size={24} />}
        containerStyle={{ alignItems: "flex-start" }}
        type="clear"
        onPress={() => navigation.navigate('Product')}
      />
      {/* <Image source={require('./assets/loutre.jpg')}
      style={{width:355, height:300}} /> */}

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
        <Text>{productId.title}</Text>
        <Text>Prix : {productId.price} €</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text>Marque : {productId.brand}</Text>
        <Text>Frais de Port : {productId.shippingFees} €</Text>
      </View>
      <View style={{ flexDirection: 'row-reverse', marginTop: 10 }}>
        <Text> Total : {totalPrice} €</Text>
      </View>
      <DropDownPicker
        items={[
          { label: 'Item 1', value: 'item1' },
          { label: 'Item 2', value: 'item2' },
          { label: 'Item 2', value: 'item2' },
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
    </Card>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
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


