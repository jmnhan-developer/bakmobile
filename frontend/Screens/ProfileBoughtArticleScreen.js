import React,{useEffect, useState} from 'react';
import { Text, StyleSheet, ScrollView, View, Image} from 'react-native';
import {Card} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { IP_HOST } from '../variable'



const ProfileBoughtArticleScreen = (props) => {

const [loading,setLoading]=useState(false)

  var handleClick = async (value) => {
    
    console.log('value argument from handleClick ProfileBought',value);
    const data = await fetch(`http://${IP_HOST}:3000/orders/receive-order?idArticle=${value}`) 
    const body = await data.json()
    console.log('body from handleClick ProfileBought',body)
    }
    
   
    const [productList, setProductList] = useState([]);
    const [productListReceive, setProductListReceive] = useState([]);
    const [stateOfOrder,setStateOfOrder]= useState('Valider la réception de cet achat')

  useEffect(() => {
     
    console.log('enter useEffect')
    const findProducts = async () => {

      const data = await fetch(`http://${IP_HOST}:3000/articles/get-article-by-buyer?buyerToken=${props.takeToken}`) 
      const body = await data.json()
      
      console.log('body from profilebought screen',body.articlesTab)
      
      setProductList(body.articlesTab);
      setProductListReceive(body.articlesTabValidate)

      //setFilterAddList(body.products);
    }

    findProducts()

  }, [loading])



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
        <FontAwesome name={'truck'} size={24} color='#82589F' />
  <Text style={{marginTop:5, marginLeft:5, marginBottom: 25}} onPress={()=>{handleClick(e._id),setLoading(!loading)}}>Achat à Valider dés votre réception</Text>
      </View>
    </View>
  });
  let cardList2 = productListReceive.map((e, i) => {
    return <View>
      <Image style={{ width: "100%", height: 350 }} source={{ uri: e.images[0] }}></Image>
      <Text style={{ fontSize:22, padding:2}}>{e.title}</Text>
      <Text style={{padding:2}}>{e.price}€ - Date d'achat: {formatDate(e.creationDate)}</Text>
      <View style={{flex:1, flexDirection:"row", padding:2}}>
        <FontAwesome name={'check'} size={24} color='#82589F' />
  <Text style={{marginTop:5, marginLeft:5, marginBottom: 25}} >Achat validé</Text>
      </View>
    </View>
  });

  return (
    <View style={{ flex: 1, marginTop: 50, width: '95%', marginLeft: 10 }}>
       <View style={{ flexDirection: 'row', width: '100%' }}>
        <FontAwesome name="long-arrow-left" size={24} color="#82589F" style={{ marginTop: 5 }} onPress={() => props.navigation.goBack()} />
        <Text style={{ fontSize: 20, marginTop: 5, marginLeft: 120 }}>Mes achats</Text>
      </View>
      <ScrollView style={{ marginTop:10}}>
        {cardList1}
        {cardList2}
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
