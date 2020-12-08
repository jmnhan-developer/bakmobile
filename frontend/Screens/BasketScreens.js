import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, Image, FlatList} from 'react-native';
import { Card, ListItem, Button,  } from 'react-native-elements'
import DropDownPicker from 'react-native-dropdown-picker';





import Icon from 'react-native-vector-icons/FontAwesome';




export default function BasketScreens({navigation}) {

  const [selectedValue, setSelectedValue] = useState(false);
  var userData
  if(selectedValue==true) {
     userData= <View style={{flexDirection:'column', justifyContent:'flex-start', margin:10}}>
     <Text>Axel</Text>
     <Text>Barateau</Text>
     <Text>axel@live.fr</Text>
     <Text>adresse</Text>
     <Text>code postale</Text>
     <Text>ville</Text>
 </View> 
  }


  return(

    <Card containerStyle={{marginTop:50}}>
    
      <Button
        icon={<Icon name="long-arrow-left" color="#82589F" size={24}/>}
        containerStyle={{alignItems:"flex-start"}}
        type="clear"
        onPress= {() => navigation.navigate('Product')}
      />
      {/* <Image source={require('./assets/loutre.jpg')}
      style={{width:355, height:300}} /> */}

        <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:10}}>
            <Text>Articles : Poussette</Text>
            <Text>Prix : 199€</Text>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Text>Marques : Bébé Confort</Text>
            <Text>Frais de Port : 19€</Text>
        </View>    
        <View style={{flexDirection:'row-reverse', marginTop: 10}}>
            <Text> Total : 218€ </Text>
        </View>
        <DropDownPicker
            items={[
                {label: 'Item 1', value: 'item1'},
                {label: 'Item 2', value: 'item2'},
                {label: 'Item 2', value: 'item2'},
            ]}
            defaultIndex={0}
            defaultNull
            placeholder="Choisissez votre mode de livraison"
            containerStyle={{height: 40, margin:10}}
            onChangeItem={() => {setSelectedValue(true)}}
        />
        {userData}
       
      <Button
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:'#82589F'}}
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


