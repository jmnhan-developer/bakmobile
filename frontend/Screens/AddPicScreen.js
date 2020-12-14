import React, { useState, useEffect, useRef} from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';

import {connect} from 'react-redux';

import { withNavigationFocus } from 'react-navigation';


import Icon from 'react-native-vector-icons/FontAwesome';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconIonic from 'react-native-vector-icons/Ionicons';

import {Button, Overlay, Image} from 'react-native-elements';

function AddPicScreen(props) {

  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.torch);
  
  var camera = useRef(null);
 
  const [visible, setVisible] = useState(false);

  useEffect(() => {  
    (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
    })();
  }, []);
  
  var cameraDisplay;
  if(hasPermission && props.isFocused){
    cameraDisplay = <Camera 
      style={{ flex: 1 }}
      type={type}
      flashMode={flash}
      ref={ref => (camera = ref)}
      >
      
       <View    
        style={{
          flex: 1,
          backgroundColor: 'transparent',
          flexDirection: 'column',
          justifyContent: "flex-start"
        }}>
          {/* <TouchableOpacity
          style={{
          alignSelf: 'flex-start',
          alignItems: 'center',
          justifyContent:'flex-start'

          }}>
          <Button
            icon={<Icon name="long-arrow-left" color="white" size={24} style={{marginTop:20}}/>}
            containerStyle={{alignItems:"flex-start"} }
            type="clear"
            onPress= {() => props.navigation.navigate('Sell')}
          />
          </TouchableOpacity> */}
          <TouchableOpacity
            style={{
            
                alignSelf: 'flex-start',
                alignItems: 'center',
                justifyContent:'center',
                marginTop:50

            }}
            onPress={() => {
                setType(
                    type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
            }}
          >
           <IconFontAwesome
            name="camera"
            size={20}
            color="#ffffff"
            /><Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
          </TouchableOpacity>

           <TouchableOpacity
            style={{
            
                alignSelf: 'flex-start',
                alignItems: 'center',
                justifyContent:'flex-start'
            }}
            onPress={() => {
                setFlash(
                  flash === Camera.Constants.FlashMode.off
                    ? Camera.Constants.FlashMode.torch
                    : Camera.Constants.FlashMode.off
                );
              }}
            >
            <IconFontAwesome
            name="flash"
            size={20}
            color="#ffffff"
            /><Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flash </Text>
           </TouchableOpacity>
          </View>

          <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'column',
            justifyContent: "flex-end"
          }}>
            <TouchableOpacity
            style={{
              
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent:'flex-end'
          }}
              onPress={async () => { 
                  setVisible(true);
                  if (camera) {
                      let photo = await camera.takePictureAsync({quality : 0.7});
                      setVisible(false);
                      // console.log("photo prise",photo)

                      var data = new FormData();
                      data.append('avatar', {
                        uri: photo.uri,
                        type: 'image/jpeg',
                        name: 'avatar.jpg',
                      });
                      const dataPhoto = await fetch("http://172.17.1.179:3000/articles/upload", {
                      method: 'POST',
                      body: data
                      })
                      
                      const bodyImage = await dataPhoto.json()
                      // console.log("bodyImage",bodyImage)
                      
                      // console.log(bodyImage)
                      props.onIncreaseClick(bodyImage.url)
                      // if(body.result == true){
                      //   props.addToken(body.token)
                      //   setUserExists(true)
                        
                      // } else {
                      //   setErrorsSignup(body.error)
                      // }
                    }   
              }}
          >
          <View style={styles.iconWrapper}>
            <IconFontAwesome
                name="camera"
                size={50}
                color="#ffffff"
                />
          </View>
          
            </TouchableOpacity>
          </View>
    </Camera>
  } else {
    cameraDisplay = <View style={{ flex: 1 }}></View>
  }

//  console.log("coucou Store" , props.addPhoto)
  

  return (
    <View style={{flex: 1}}>
        
        <Overlay isVisible={visible}  width="auto" height="auto">
            <Text>Loading</Text>
        </Overlay>
        
        {cameraDisplay}

        <View style={{ flexDirection:'row', marginTop:2, marginBottom:2,justifyContent:"space-between"}}>
          <View>
            <Image source={{uri:props.addPhoto[0]}} style={{height:70, width:70}}/>
            
          </View>
          <View>
          <Image source={{uri:props.addPhoto[1]}} style={{height:70, width:70}}/>
            
          </View>
          <View>
          <Image source={{uri:props.addPhoto[2]}} style={{height:70, width:70}}/>
           
          </View>

          <View>
          <Image source={{uri:props.addPhoto[3]}} style={{height:70, width:70}}/>
           
          </View>

          <View>
          <Image source={{uri:props.addPhoto[4]}} style={{height:70, width:70}}/>
           
          </View>
        </View>

        <Button
            title="Enregistrer mes photos"
            buttonStyle={{backgroundColor: "#82589F", }}
            containerStyle={{marginBottom:2}}
            type="solid"
            onPress= {() => props.navigation.navigate('Sell')}

        />

    </View>
  );
}

const styles = StyleSheet.create({
  iconWrapper: {
    width: 100,
    borderRadius: 100,
    borderColor: "white",
    borderStyle: "solid",
    borderWidth: 2,
    padding: 20,
    alignItems: "center",
    margin:10
  }
})

function mapStateToProps(state) {
  return { addPhoto: state.photo }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: function(url) { 
        dispatch( {type: 'increase', photoUrl: url } ) 
    }
  }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(withNavigationFocus(AddPicScreen));

