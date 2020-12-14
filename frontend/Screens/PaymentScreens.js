import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Button,
  Text,
  View
} from 'react-native';
import stripe from 'tipsi-stripe'
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";



function PaymentScreens() {
  // _onChange => form => console.log(form);

return (
<View style={s.container}>
  <CreditCardInput 
  labelStyle={s.label}
  inputStyle={s.input}
  validColor={"black"}
  invalidColor={"red"}
  placeholderColor={"darkgray"}
  
  />
</View>
)  
};

const s = StyleSheet.create({
  switch: {
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  container: {
    backgroundColor: "#F5F5F5",
    marginTop: 60,
  },
  label: {
    color: "black",
    fontSize: 12,
  },
  input: {
    fontSize: 16,
    color: "black",
  },
});

export default PaymentScreens;