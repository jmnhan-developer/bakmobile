// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View, Button, FlatList,SafeAreaView } from 'react-native';
// import { withNavigation } from 'react-navigation';

// function SecondFilterScreen({navigation}) {



//     const DATA = [
//         {
//             title: 'Siége auto',
//         },
//         {
//             title: 'Poussettes',
//         },
//         {
//             title: 'Nacelles',
//         },
   
//         {
//             title: 'Portes-bébés',
//           },
//           {
//             title: 'Sacs à langer',

//           },
//           {
//             title: 'Chanceliére',
//           },
//           {
//             title: 'Habillage',

//           },
//           {
//             title: 'Autres',
//           }
//       ];
//       var listButton2= DATA.map(function(e,i){
//         return ( <Button title={e.title} onPress= {() => navigation.navigate('Result')} color='orange'/>)})

//         const DATA2 = [
//           {
//               title: 'T-shirt',
//           },
//           {
//               title: 'Shirt',
//           },
//           {
//               title: 'Pants',
//           },
     
//           {
//               title: 'bébés',
//             },
         
//         ];
//         var listButton3= DATA.map(function(e,i){
//           return ( <Button title={e.title} onPress= {() => navigation.navigate('Result')} color='orange'/>)})

//   return (
//       <View>
//         <Text style={styles.titlePage}>Choisissez une sous-catégorie</Text>
//              {listButton2}
//         <StatusBar style="auto" />
    
//     </View>
//   );
// }

// const styles = StyleSheet.create({
  
//     container: {
//     marginTop:5 ,
//   },
//   titlePage:{
//       marginTop:40,
//       marginLeft:55,
//       fontSize:20
//   },
//   item: {
//     width:150,
//     backgroundColor: 'orange',
//     padding: 20,
//     marginVertical: 10,
//     marginHorizontal: 20,
    
// },title: {
//     fontSize: 16,
//   }
// })

// export default withNavigation(SecondFilterScreen);