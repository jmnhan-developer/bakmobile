import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, ScrollView, Text, View, Picker,TouchableOpacity,Platform  } from 'react-native';
import {Button, Input, Image} from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import {connect} from 'react-redux';

import { SafeAreaView } from 'react-navigation';

// ----------------------------------------------image picker
// import * as ImagePicker from 'expo-image-picker';
// import Constants from 'expo-constants';


  


function SellScreen(props) {
  
  // ----------------------------------------------image picker
  // const [photoImage, setImage] = useState(null);

  // useEffect(() => {
  //   (async () => {
  //     if (Platform.OS !== 'web') {
  //       const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  //       if (status !== 'granted') {
  //         alert('Sorry, we need camera roll permissions to make this work!');
  //       }
  //     }
  //   })();
  // }, []);

  // const pickImage = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });

  //   console.log(result);

  //   if (!result.cancelled) {
  //     setImage(result.uri);
  //   }
  // };

// ---------------------------------------------- fin image picker



  const [selectedValueCategory, setSelectedValueCategory] = useState("");
  const [selectedValueSubCategory, setSelectedValueSubCategory] = useState("");
  const [selectedValueState, setSelectedValueState] = useState("");

  
  const [titleInput , setTitleInput ] = useState("");
  
  const [desc , setDesc ] = useState("");
  const [brand , setBrand ] = useState("");
  const [price , setPrice ] = useState("");
  const [shippingFees , setShippingFees ] = useState("");
  
  var typeOfAction= 'vendeur';

console.log("--------------------------------------hello ID",props.takeId)

  var handleClick = async () => {
    
    var image = JSON.stringify(props.addPhoto);
    // console.log('tableau photos',image)
    const dataArticle = await fetch("http://172.17.1.123:3000/articles/create-article", {
      method: 'POST',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: `title=${titleInput}&description=${desc}&brand=${brand}&price=${price}&shippingFees=${shippingFees}&category=${selectedValueCategory}&subcategory=${selectedValueSubCategory}&state=${selectedValueState}&images=${image}&sellerID=${props.takeId}`
    });
                               
    // console.log("dataArticle",dataArticle)
    const dataAnnonce = await dataArticle.json()
    console.log("dataAnnonce", dataAnnonce)

  }

  return (
    <View style={styles.container}>
      <ScrollView style={{width: '90%'}}>

        {/* <Text style={{marginTop:40,textAlign: 'center'}}>Jusqu'à 6 photos</Text> */}
       
        <Button
          buttonStyle={{marginTop:60, marginBottom:40, borderColor:"#82589F"}}
          titleStyle={{fontSize:25, color:"#82589F"}}
          icon={
              <FontAwesome name="camera" size={24}  color="#82589F"/>
              }            
          title=" Ajouter des photos"
          type="outline"
          onPress= {() => props.navigation.navigate('AddPic')}
        />
     
         <View style={{ flexDirection:'row', marginTop:2, marginBottom:20,justifyContent:"space-between"}}>
          <View>
            <Image source={{uri:props.addPhoto[0]}} style={{height:70, width:60}}/>
            
          </View>
          <View>
          <Image source={{uri:props.addPhoto[1]}} style={{height:70, width:60}}/>
            
          </View>
          <View>
          <Image source={{uri:props.addPhoto[2]}} style={{height:70, width:60}}/>
           
          </View>

          <View>
          <Image source={{uri:props.addPhoto[3]}} style={{height:70, width:60}}/>
           
          </View>

          <View>
          <Image source={{uri:props.addPhoto[4]}} style={{height:70, width:60}} />
           
          </View>
        </View>

        {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button title="   Photo de ton téléphone" onPress={pickImage}  buttonStyle={{backgroundColor:'#D6A2E8'}} icon={
                  <FontAwesome name="camera" size={24}  color="white"/>
                  } />
          {photoImage && <Image source={{ uri: photoImage }} style={{ width: 70, height: 70 }} />}
        </View> */}

      
        <Input style = {{ width: '90%'}}
          placeholder='Titre'
          onChangeText={(val) => setTitleInput(val)}
        />
        <Input style = {{ width: '90%'}}
          placeholder="Descrition de l'annonce"
          onChangeText={(val) => setDesc(val)}
        />
        <Input style = {{ width: '90%'}}
          placeholder="Marque"
          onChangeText={(val) => setBrand(val)}
        />
        <Input style = {{ width: '90%'}}
          placeholder='Prix'
          onChangeText={(val) => setPrice(val)}
        />
        <Input style = {{ width: '90%'}}
          placeholder='Frais de port'
          onChangeText={(val) => setShippingFees(val)}
        />

        <DropDownPicker 
            zIndex={5000}
            items={[
              {label: 'Se déplacer', value: 'Se déplacer'},
              {label: 'Manger', value: 'Manger'},
              {label: 'Dormir', value: 'Dormir'},
              ]}
              defaultNull
              placeholder="Catégorie"
              containerStyle={{height: 60, margin:10}}
              onChangeItem={itemValue => setSelectedValueCategory(itemValue.value)}
              

                  />
        
          <DropDownPicker
            zIndex={4000}
            items={[
              {label: 'Poussettes', value: 'Poussettes'},
              {label: 'Nacelle', value: 'Nacelle'},
              ]}
              defaultNull
              placeholder="Sous-catégorie"
              containerStyle={{height: 60, margin:10}}
              onChangeItem={itemValue => setSelectedValueSubCategory(itemValue.value)}
              
               
               />
          
          
          <DropDownPicker
            zIndex={3000}
            items={[
              {label: 'Neuf', value: 'Neuf'},
              {label: 'Bon état', value: 'Bon état'},
              {label: "Etat d'usage", value:  "Etat d'usage"},
              ]}
              defaultNull
              placeholder="Etat"
              
              containerStyle={{height: 60, margin:10, marginBottom:80}}
              onChangeItem={itemValue => setSelectedValueState(itemValue.value)}
             
                  />


        

        <Button            
          title="Ajoute ton annonce"
          type="solid"
          buttonStyle={{backgroundColor: "#82589F"}}
          onPress={() => {handleClick();props.onSubmitTypeOfAction(typeOfAction);props.navigation.navigate('SignIn')}}
          containerStyle={{marginBottom: 20}}
        />

      </ScrollView>

  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex:1,
  }, 
   thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  }

});

function mapDispatchToProps(dispatch) {
  return {
    onSubmitTypeOfAction: function (typeOfAction) {
      dispatch({ type: 'sell', typeOfAction})
    }
  }
}

 
function mapStateToProps(state) {
  return { addPhoto: state.photo , takeId: state.id }
}
export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(SellScreen);
