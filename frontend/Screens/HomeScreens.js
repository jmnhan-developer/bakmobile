
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView,AsyncStorage } from 'react-native';
import { Input, Image } from 'react-native-elements';
import { connect } from 'react-redux';




function HomeScreens({navigation, onSubmitProduct,onSubmitToken}) {
  const [productList, setProductList] = useState([])
  const [filterAddList, setFilterAddList] = useState([])
  const [searchTerm, setSearchTerm] = useState('');
 

 
  useEffect(() => {
    AsyncStorage.getItem('userToken', (err, value) => {
      if(value){ 
      
        onSubmitToken(value);
        console.log('value from HomeScreen:',value);
        
      }
    })
  }, []);




  
  useEffect(() => {
    const findProducts = async() => {
      const data = await fetch("http://172.20.10.2:3000/articles/get-all-articles")
      const body = await data.json()
      setProductList(body.products);
      setFilterAddList(body.products);
    }

    findProducts()

  },[])

  useEffect(() => {

if(searchTerm!='') {
  const results = productList.filter(products => 
  products.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
 setFilterAddList(results);
}

else {
  setFilterAddList(productList);
}
  }, [searchTerm])



  let lastArticles = filterAddList.map((productId, i) => {
    return <View style={{width:'47%', margin:5}}>
      <TouchableOpacity
        onPress={() => {
          onSubmitProduct(productId)
          navigation.navigate('Product');
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
    <View style={{flex: 1, marginTop:25 }}>
      <Input
      containerStyle={{backgroundColor:'white'}}
      lightTheme='true'
      placeholder="Rechercher" backgroundColor='light-grey' 
      onChangeText={(val) =>setSearchTerm(val)}
      />

  <Text style={{fontSize:20, textAlign:"center", marginTop:5, marginBottom:5}}>Les derniers articles mis en vente</Text>

  <ScrollView>
    <View style={{flex: 1, flexDirection:'row', width:'95%', flexWrap: 'wrap', justifyContent:"space-between", margin:10}}>
      {lastArticles}
    </View>
  </ScrollView>
</View>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmitProduct: function (product) {
      dispatch({ type: 'pickProduct', product:product})
    },onSubmitToken: function (token){
      dispatch({type:'informationFromHomeScreen',token:token})
    }
  }
}







export default connect(
  null,
  mapDispatchToProps
)(HomeScreens);