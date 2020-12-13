import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome } from '@expo/vector-icons';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Button, Image } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import {connect} from 'react-redux';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';


function ResultScreens(props) {

  const [productList, setProductList] = useState([])

  
  // var dataList = [
  //   {url:'https://picsum.photos/201', brand:'Aubert', size:'M', price:"10"},
  //   {url:'https://picsum.photos/202', brand:'BébéConfort', size:'L', price:"20"},
  //   {url:'https://picsum.photos/203', brand:'Chicco', size:'XL', price:"30"},
  //   {url:'https://picsum.photos/204', brand:'Text', size:'6 ans', price:"40"},
  //   {url:'https://picsum.photos/205', brand:'Mon Bébé', size:'10 ans', price:"50"},
  //   {url:'https://picsum.photos/206', brand:'Bambino', size:'s', price:"60"},
  //   {url:'https://picsum.photos/207', brand:'Mon Bébé', size:'10 ans', price:"50"},
  //   {url:'https://picsum.photos/208', brand:'Bambino', size:'s', price:"60"}
  // ]


  console.log("helloledke,dznden",props.Product);

  useEffect(() => {
    const findProducts = async() => {
      const data = await fetch(`http://172.20.10.2:3000/articles/filter-articles?subcat=${props.Subcat}`)
      const body = await data.json()
      setProductList(body.products);
      
    }

    findProducts()

  },[props.Subcat])
  
  // let lastArticles = dataList.map((uri, i) => {
  //   return <View style={{width:'47%', margin:5}}>
  //     <Image source={{uri:uri.url}} style={{ height:250, width: 200 }}  onPress= {() => props.navigation.navigate('Product')}/>
  //     <View style={{flex: 1, flexDirection:'row', marginTop:5, justifyContent:"space-between"}}>
  //       <Text>{uri.brand}</Text>
  //       <FontAwesome name="heart-o" size={15} color="black" />
  //     </View>
  //     <Text>Taille: {uri.size}</Text>
  //     <Text>{uri.price}€</Text>
  //   </View>

  // }
  // )

  let lastArticles = productList.map((productId, i) => {
    return <View style={{width:'47%', margin:5}}>
      <TouchableOpacity
        onPress={() => {
          props.onSubmitProduct(productId);
          props.navigation.navigate('Product');

         }
        }
      >
      <Image source={{uri:productId.images[0]}} style={{ height:250, width: 200 }}/>
      <View style={{flex: 1, flexDirection:'row', marginTop:5, justifyContent:"space-between"}}>
        <Text style={{fontWeight:'bold'}}>{productId.brand}</Text>
        <FontAwesome name="heart-o" size={15} color="black" />
      </View>
      <Text>{productId.title}</Text>
      <Text>{productId.price}€</Text>
      </TouchableOpacity>
    </View>

  }
  )


  return (
    <View>
      <Button style={{marginTop:25, width:200, marginLeft:204}} title="Affiner ma recherche" buttonStyle={{ backgroundColor: "#eb4d4b"}}type="solid"/>

      <Text style={{fontSize:18, textAlign:"center", marginTop:10, marginBottom:5}}>Les résultats de votre recherche pour:</Text>

      <Text style={{fontSize:18, textAlign:"center", marginTop:5, marginBottom:5}}>"XXXX"</Text>

      <ScrollView> 
        <View style={{flex: 1, flexDirection:'row', width:'95%', flexWrap: 'wrap', justifyContent:"space-between", margin:10}}>
          {lastArticles}
        </View>
      </ScrollView>
    </View>
  )
}
function mapStateToProps(state){
  return{Subcat : state.subcat, product: state.product}
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmitProduct: function (product) {
      dispatch({ type: 'pickProduct', product:product})
    }
  }
}
export default connect (
  mapStateToProps,
  mapDispatchToProps
)(withNavigation (ResultScreens));
