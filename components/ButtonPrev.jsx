import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {rgbaColor} from "react-native-reanimated/src/reanimated2/Colors";
import {STATIC_TEXT} from "../locales/sv-Se";


export const ButtonPrev = () => (
   <View style={buttonStyle.container}>
     <Text style={buttonStyle.text}>{STATIC_TEXT.PREV}</Text>
   </View>
);

const buttonStyle = StyleSheet.create({
  container: {
    backgroundColor: rgbaColor(0,0,0, 0.3),
    padding: 24,
    borderRadius: 15,
    marginLeft: 15,
    textColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    width: 100,
  },
  text: {
    fontSize: 30,
    color: '#fff',
    textTransform: 'uppercase'
  },
});
