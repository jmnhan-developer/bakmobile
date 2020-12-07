import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import { Card, ListItem, Button,  } from 'react-native-elements'
import RNPickerSelect from 'react-native-picker-select';



import Icon from 'react-native-vector-icons/FontAwesome';




export default function App() {

  state = {user: ''}
  updateUser = (user) => {
     this.setState({ user: user })
  }

  return(

    <Card containerStyle={{marginTop:50}}>
      <Button
        icon={<Icon name="long-arrow-left" color="#82589F" size={24}/>}
        containerStyle={{alignItems:"flex-start"}}
        type="clear"
      />
      <Card.Image source={require('./assets/loutre.jpg')}
      style={{width:400, height:300}} />

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
        {/* <Picker style={styles.container}
          selectedValue={selectedValue}
          style={{height: 50, width: 100}}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedValue(itemValue)
          }>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker> */}
        {/* <RNPickerSelect
        onValueChange={(value) => console.log(value)}
        items={[
            { label: 'Football', value: 'football' },
            { label: 'Baseball', value: 'baseball' },
            { label: 'Hockey', value: 'hockey' },
        ]}
        placeholder={"ggg"} 
           /> */}
         <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}>
               <Picker.Item label = "Steve" value = "steve" />
               <Picker.Item label = "Ellen" value = "ellen" />
               <Picker.Item label = "Maria" value = "maria" />
            </Picker>
            <Text style = {styles.text}>{this.state.user}</Text>

      <Button
        icon={<Icon name='code' color='#ffffff' />}
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        title='VIEW NOW' />
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