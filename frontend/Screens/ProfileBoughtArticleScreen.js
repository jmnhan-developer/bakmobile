import React,{useEffect, useState} from 'react';
import { Text, StyleSheet, ScrollView, View, Image} from 'react-native';
import {Card} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';


const ProfileBoughtArticleScreen = (props) => {

  const [productList, setProductList] = useState([]);
  useEffect(() => {

    const findProducts = async () => {
      const data = await fetch(`http://${IP_HOST}:3000/articles/get-article-by-seller?SellerToken=${props.takeToken}`) //-------------- ROUTE ET TOKEN A MODIFIER ---------------------------
      const body = await data.json()

      setProductList(body.products);
      // setFilterAddList(body.products);
      console.log('body from get article by seller -------', body);
    }

    findProducts()

  }, [])
  console.log(productList);

  

  function formatDate(date){
    var newDate = new Date(date);
    var finalFormat = newDate.getDate()+"/"+(newDate.getMonth()+1)+"/"+newDate.getFullYear();
    return finalFormat;
  }

  let cardList1 = productList.map((e, i) => {
    return <View>
      <Image style={{ width: "100%", height: 350 }} source={{ uri: e.images[0] }}></Image>
      <Text style={{ fontSize:22, padding:2}}>{e.title}</Text>
      <Text style={{padding:2}}>{e.price}€ - Date d'achat: {formatDate(e.creationDate)}</Text>
      <View style={{flex:1, flexDirection:"row", padding:2}}>
        <FontAwesome name={'trash'} size={24} color='#82589F' />
        <Text style={{marginTop:5, marginLeft:5, marginBottom: 25}}>Valider la réception de cet achat</Text>
      </View>
    </View>
  });

  return (
    <View style={{ flex: 1, marginTop: 25, width: '95%', marginLeft: 10 }}>
      <Text style={{ fontSize: 18, textAlign: "center" }}>Mes achats effectués</Text>
      <ScrollView style={{ marginTop:10}}>
        {cardList1}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 50,
   color:'#D6A2E8',
   fontFamily: 'sans-serif-light'
   
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
    color:'black',
    fontFamily: 'sans-serif-light'
  }
})

function mapStateToProps(state) {
  return {takeToken:state.token}
}

  
export default connect(
  mapStateToProps,
    null
)(ProfileBoughtArticleScreen)
