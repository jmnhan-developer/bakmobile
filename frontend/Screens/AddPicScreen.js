import React, { useState, useEffect, useRef} from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
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
          flexDirection: 'row',
        }}>
          <TouchableOpacity
          style={{
          alignSelf: 'flex-start',
          alignItems: 'center',
          }}>
          <Button
            icon={<Icon name="long-arrow-left" color="white" size={24} style={{marginTop:20}}/>}
            containerStyle={{alignItems:"flex-start"} }
            type="clear"
            onPress= {() => props.navigation.navigate('Sell')}
          />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
            
                alignSelf: 'flex-end',
                alignItems: 'center',
            }}
            onPress={() => {
                setType(
                    type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
            }}
          >
           <IconIonic
            name="md-reverse-camera"
            size={20}
            color="#ffffff"
            /><Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
          </TouchableOpacity>

           <TouchableOpacity
            style={{
            
                alignSelf: 'flex-end',
                alignItems: 'center',
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
    </Camera>
  } else {
    cameraDisplay = <View style={{ flex: 1 }}></View>
  }

 console.log("coucou Store" , props.addPhoto)
  

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
            icon={
                <IconFontAwesome
                name="save"
                size={20}
                color="#ffffff"
                />
            } 
            title="     Prise de photos"
            buttonStyle={{backgroundColor: "#009788"}}
            type="solid"
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
                    const dataPhoto = await fetch("http://192.168.43.254:3000/articles/upload", {
                    method: 'POST',
                    body: data
                    })
                    
                    const bodyImage = await dataPhoto.json()
                    console.log("bodyImage",bodyImage)
                    
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
        />

    </View>
  );
}

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

